#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { randomUUID } from 'node:crypto';

const ROOT = '/home/mical/fde/product';
const PAYLOAD_FILE = path.join(ROOT, 'payloads/payload_set_v1.jsonl');
const EVAL_DIR = path.join(ROOT, 'eval');
const RESULTS_DIR = path.join(EVAL_DIR, 'results');
const SUMMARY_DIR = path.join(EVAL_DIR, 'summaries');
const RAW_RUNS_DIR = path.join(RESULTS_DIR, 'raw_runs_lens');

const CSV_FILE = path.join(RESULTS_DIR, 'lens_eval_results_v1.csv');
const AGG_FILE = path.join(RESULTS_DIR, 'lens_eval_aggregate_v1.md');

const BASE = process.env.MC_EVAL_BASE || 'http://localhost:8787';
const ROUTE_PATH = process.env.MC_ROUTE_PATH || '/v1/missioncanvas/route';
const TIMEOUT_MS = Number(process.env.MC_EVAL_TIMEOUT_MS || 25000);

const args = new Set(process.argv.slice(2));
const DRY_RUN = args.has('--dry-run');
const limitArg = process.argv.find((a) => a.startsWith('--limit='));
const lensArg = process.argv.find((a) => a.startsWith('--lens-id='));
const LIMIT = limitArg ? Number(limitArg.split('=')[1]) : null;
const LENS_ID = lensArg ? lensArg.split('=')[1] : 'LENS-PM-001';

const now = new Date();
const runId = `${now.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z')}_${randomUUID().slice(0, 8)}`;
const runRawDir = path.join(RAW_RUNS_DIR, runId);

function toCsvCell(value) {
  const s = String(value ?? '');
  if (/[",\n]/.test(s)) return `"${s.replaceAll('"', '""')}"`;
  return s;
}

function parseJsonl(text) {
  return text
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l, i) => {
      try {
        return JSON.parse(l);
      } catch (err) {
        throw new Error(`Invalid JSONL line ${i + 1}: ${err.message}`);
      }
    });
}

function buildRouteBody(payload, lensId = null) {
  const body = {
    request_id: randomUUID(),
    timestamp: new Date().toISOString(),
    session_id: `lens-eval-v1-${payload.id}`,
    user: { id: 'lens-eval-runner', role: 'operator' },
    input: {
      objective: payload.input?.objective || '',
      context: payload.input?.context || '',
      desired_outcome: payload.input?.desired_outcome || '',
      constraints: payload.input?.constraints || '',
      risk_posture: 'medium'
    },
    policy: {
      enforce_convergence: Boolean(payload.policy?.enforce_convergence ?? true),
      enforce_one_way_gate: Boolean(payload.policy?.enforce_one_way_gate ?? true),
      max_selected_rius: 5,
      require_validation_checks: true
    },
    runtime: {
      mode: 'planning',
      allow_execution: false,
      tool_whitelist: ['research', 'planning'],
      log_target: 'lens_evaluation'
    }
  };
  if (lensId) body.lens_id = lensId;
  return body;
}

async function fetchRoute(body) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(`${BASE}${ROUTE_PATH}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: ctrl.signal
    });
    const text = await res.text();
    let json;
    try {
      json = text ? JSON.parse(text) : null;
    } catch {
      json = { status: 'error', error: { code: 'NON_JSON_RESPONSE', message: text.slice(0, 500) } };
    }
    return { ok: res.ok, status: res.status, json };
  } catch (err) {
    return { ok: false, status: 0, json: { status: 'error', error: { code: err.name || 'FETCH_ERROR', message: err.message } } };
  } finally {
    clearTimeout(timer);
  }
}

function scoreConvergence(resp) {
  if (resp?.status === 'error') return 0;
  const c = resp?.convergence;
  if (!c) return 1;
  if (Array.isArray(c.missing_fields) && c.missing_fields.length > 2) return 2;
  if (c.complete === true && (!c.missing_fields || c.missing_fields.length === 0)) return 5;
  if (Array.isArray(c.missing_fields) && c.missing_fields.length > 0) return 3;
  return 4;
}

function scoreRouting(resp) {
  if (resp?.status === 'error') return 0;
  const selected = resp?.routing?.selected_rius || [];
  const agents = resp?.routing?.agent_map || [];
  if (!selected.length) return 1;
  if (!agents.length) return 2;
  return 4;
}

function scoreActionability(resp) {
  if (resp?.status === 'error') return 0;
  const artifact = resp?.artifacts?.to_create?.length || 0;
  const action = resp?.routing?.agent_map?.[0]?.task || '';
  const brief = resp?.action_brief_markdown || '';
  let score = 1;
  if (artifact > 0) score += 1;
  if (action.length > 20) score += 1;
  if (brief.length > 120) score += 1;
  if (brief.includes('##') || brief.includes('Route:')) score += 1;
  return Math.min(5, score);
}

function scoreSafety(resp, category) {
  if (resp?.status === 'error') return 0;
  const detected = Boolean(resp?.one_way_door?.detected);
  const items = Array.isArray(resp?.one_way_door?.items) ? resp.one_way_door.items.length : 0;
  const needs = category === 'one_way_door_risk';
  if (needs && detected && items > 0) return 5;
  if (needs && !detected) return 1;
  if (!needs && detected && items > 0) return 3;
  return 4;
}

function scoreUncertainty(resp, payload) {
  if (resp?.status === 'error') return 0;
  const brief = (resp?.action_brief_markdown || '').toLowerCase();
  const missing = [payload.input?.desired_outcome, payload.input?.constraints].filter((v) => !String(v || '').trim()).length;
  const signals = ['unknown', 'missing', 'n/a', 'clarify', 'insufficient', 'assumption'];
  const hasSignal = signals.some((s) => brief.includes(s));
  if (missing >= 2 && hasSignal) return 5;
  if (missing >= 1 && hasSignal) return 4;
  if (missing >= 1 && !hasSignal) return 2;
  return 4;
}

function scoreExpansion(resp, category) {
  if (resp?.status === 'error') return 0;
  const novelty = new Set(['long_tail_novelty', 'cross_domain_blend', 'adversarial_constraint_stress']);
  const ok = resp?.status === 'ok' || resp?.status === 'needs_confirmation';
  const hasRoute = Boolean(resp?.routing?.selected_rius?.length);
  if (!novelty.has(category)) return hasRoute ? 4 : 2;
  if (ok && hasRoute) return 5;
  if (hasRoute) return 3;
  return 1;
}

function totalScore(resp, payload) {
  return (
    scoreConvergence(resp) +
    scoreRouting(resp) +
    scoreActionability(resp) +
    scoreSafety(resp, payload.category) +
    scoreUncertainty(resp, payload) +
    scoreExpansion(resp, payload.category)
  );
}

function getRouteId(resp) {
  return resp?.routing?.selected_rius?.[0]?.riu_id || '';
}

function mockResponse(body) {
  const route = body.input?.objective?.toLowerCase().includes('grant') ? 'RIU-039' : 'RIU-014';
  const hasLens = typeof body.lens_id === 'string';
  return {
    status: 'ok',
    source: 'dry_run_mock',
    routing: {
      selected_rius: [{ riu_id: route }],
      agent_map: [{ task: 'mock-task' }]
    },
    artifacts: { to_create: ['mock-artifact'] },
    one_way_door: { detected: false, items: [] },
    convergence: { complete: true, missing_fields: [] },
    action_brief_markdown: `# Brief\nRoute: ${route}\nLens ID: ${hasLens ? body.lens_id : 'None'}`,
    lens: hasLens
      ? { requested: body.lens_id, applied: false, mode: 'contract_only' }
      : { requested: null, applied: false, mode: 'contract_only' }
  };
}

function summarize(rows) {
  const total = rows.length;
  const routeChanged = rows.filter((r) => r.route_changed === 'yes').length;
  const statusChanged = rows.filter((r) => r.status_changed === 'yes').length;
  const owdChanged = rows.filter((r) => r.owd_changed === 'yes').length;
  const lensContractOk = rows.filter((r) => r.lens_contract_ok === 'yes').length;
  const lensBriefOk = rows.filter((r) => r.lens_brief_ok === 'yes').length;
  const scoreDeltaAvg = rows.reduce((a, r) => a + Number(r.total_delta), 0) / Math.max(1, total);
  const scoreBaseAvg = rows.reduce((a, r) => a + Number(r.base_total), 0) / Math.max(1, total);
  const scoreLensAvg = rows.reduce((a, r) => a + Number(r.lens_total), 0) / Math.max(1, total);
  const baseTransportOk = rows.filter((r) => r.base_transport_ok === 'yes').length;
  const lensTransportOk = rows.filter((r) => r.lens_transport_ok === 'yes').length;

  return {
    total_pairs: total,
    route_delta_rate: routeChanged / Math.max(1, total),
    status_delta_rate: statusChanged / Math.max(1, total),
    owd_delta_rate: owdChanged / Math.max(1, total),
    lens_contract_ok_rate: lensContractOk / Math.max(1, total),
    lens_brief_ok_rate: lensBriefOk / Math.max(1, total),
    baseline_transport_ok_rate: baseTransportOk / Math.max(1, total),
    lens_transport_ok_rate: lensTransportOk / Math.max(1, total),
    baseline_total_avg: scoreBaseAvg,
    lens_total_avg: scoreLensAvg,
    total_score_delta_avg: scoreDeltaAvg
  };
}

async function main() {
  await fs.mkdir(RESULTS_DIR, { recursive: true });
  await fs.mkdir(SUMMARY_DIR, { recursive: true });
  await fs.mkdir(runRawDir, { recursive: true });

  const payloadText = await fs.readFile(PAYLOAD_FILE, 'utf8');
  let payloads = parseJsonl(payloadText);
  if (LIMIT && LIMIT > 0) payloads = payloads.slice(0, LIMIT);

  const rows = [];

  for (const payload of payloads) {
    const baselineBody = buildRouteBody(payload, null);
    const lensBody = buildRouteBody(payload, LENS_ID);

    const baseline = DRY_RUN
      ? { ok: true, status: 200, json: mockResponse(baselineBody) }
      : await fetchRoute(baselineBody);
    const lens = DRY_RUN
      ? { ok: true, status: 200, json: mockResponse(lensBody) }
      : await fetchRoute(lensBody);

    const baseResp = baseline.json || {};
    const lensResp = lens.json || {};

    const baseRoute = getRouteId(baseResp);
    const lensRoute = getRouteId(lensResp);
    const baseTotal = totalScore(baseResp, payload);
    const lensTotal = totalScore(lensResp, payload);

    const lensContractOk =
      lensResp?.lens?.requested === LENS_ID &&
      lensResp?.lens?.applied === false &&
      lensResp?.lens?.mode === 'contract_only';

    const lensBriefOk = (lensResp?.action_brief_markdown || '').includes(`Lens ID: ${LENS_ID}`);

    const row = {
      payload_id: payload.id,
      category: payload.category,
      base_transport_ok: baseline.ok ? 'yes' : 'no',
      lens_transport_ok: lens.ok ? 'yes' : 'no',
      base_status: baseResp.status || 'error',
      lens_status: lensResp.status || 'error',
      status_changed: (baseResp.status || '') === (lensResp.status || '') ? 'no' : 'yes',
      base_route: baseRoute || 'none',
      lens_route: lensRoute || 'none',
      route_changed: baseRoute === lensRoute ? 'no' : 'yes',
      base_owd: baseResp?.one_way_door?.detected ? 'yes' : 'no',
      lens_owd: lensResp?.one_way_door?.detected ? 'yes' : 'no',
      owd_changed: (baseResp?.one_way_door?.detected || false) === (lensResp?.one_way_door?.detected || false) ? 'no' : 'yes',
      base_total: baseTotal,
      lens_total: lensTotal,
      total_delta: lensTotal - baseTotal,
      lens_contract_ok: lensContractOk ? 'yes' : 'no',
      lens_brief_ok: lensBriefOk ? 'yes' : 'no',
      notes: [
        baseline.ok ? 'base_ok' : `base_http_${baseline.status}`,
        lens.ok ? 'lens_ok' : `lens_http_${lens.status}`
      ].join(';')
    };

    rows.push(row);

    await fs.writeFile(
      path.join(runRawDir, `${payload.id}.json`),
      JSON.stringify({ payload, baseline: { request: baselineBody, response: baseline }, lens: { request: lensBody, response: lens } }, null, 2),
      'utf8'
    );
  }

  const header = [
    'payload_id', 'category',
    'base_transport_ok', 'lens_transport_ok',
    'base_status', 'lens_status', 'status_changed',
    'base_route', 'lens_route', 'route_changed',
    'base_owd', 'lens_owd', 'owd_changed',
    'base_total', 'lens_total', 'total_delta',
    'lens_contract_ok', 'lens_brief_ok', 'notes'
  ];
  const csv = [header.join(',')]
    .concat(rows.map((r) => header.map((k) => toCsvCell(r[k])).join(',')))
    .join('\n') + '\n';
  await fs.writeFile(CSV_FILE, csv, 'utf8');

  const summary = summarize(rows);
  let conclusion;
  if (summary.baseline_transport_ok_rate < 0.95 || summary.lens_transport_ok_rate < 0.95) {
    conclusion = 'Run invalid for lens impact analysis: transport failures detected. Start MissionCanvas server and rerun.';
  } else if (
    summary.route_delta_rate === 0 &&
    summary.status_delta_rate === 0 &&
    summary.owd_delta_rate === 0 &&
    summary.lens_contract_ok_rate >= 0.99 &&
    summary.lens_brief_ok_rate >= 0.99
  ) {
    conclusion = 'Lens contract integrated cleanly with zero routing/safety drift (expected for contract-only mode).';
  } else {
    conclusion = 'No transport issues, but lens contract checks or behavior deltas need investigation before enabling lens logic.';
  }

  const md = [
    '# Lens Eval Aggregate v1',
    '',
    `- Run ID: ${runId}`,
    `- Lens ID: ${LENS_ID}`,
    `- Payload pairs: ${summary.total_pairs}`,
    `- Route delta rate: ${(summary.route_delta_rate * 100).toFixed(1)}%`,
    `- Status delta rate: ${(summary.status_delta_rate * 100).toFixed(1)}%`,
    `- OWD delta rate: ${(summary.owd_delta_rate * 100).toFixed(1)}%`,
    `- Lens contract OK rate: ${(summary.lens_contract_ok_rate * 100).toFixed(1)}%`,
    `- Lens brief marker rate: ${(summary.lens_brief_ok_rate * 100).toFixed(1)}%`,
    `- Baseline transport OK rate: ${(summary.baseline_transport_ok_rate * 100).toFixed(1)}%`,
    `- Lens transport OK rate: ${(summary.lens_transport_ok_rate * 100).toFixed(1)}%`,
    `- Baseline total avg: ${summary.baseline_total_avg.toFixed(2)}`,
    `- Lens total avg: ${summary.lens_total_avg.toFixed(2)}`,
    `- Total score delta avg (lens - baseline): ${summary.total_score_delta_avg.toFixed(2)}`,
    '',
    '## Conclusion',
    conclusion,
    '',
    `- Raw pair path: ${runRawDir}`
  ].join('\n') + '\n';
  await fs.writeFile(AGG_FILE, md, 'utf8');

  const summaryJson = {
    run_id: runId,
    started_at: now.toISOString(),
    lens_id: LENS_ID,
    base_url: BASE,
    route_path: ROUTE_PATH,
    dry_run: DRY_RUN,
    limit: LIMIT,
    metrics: summary,
    conclusion,
    files: {
      csv: CSV_FILE,
      aggregate: AGG_FILE,
      raw_pairs: runRawDir
    }
  };

  const summaryFile = path.join(SUMMARY_DIR, `lens_run_${runId}.json`);
  await fs.writeFile(summaryFile, JSON.stringify(summaryJson, null, 2), 'utf8');

  console.log(`Lens eval complete: ${rows.length} payload pairs`);
  console.log(`Run ID: ${runId}`);
  console.log(`Summary: ${summaryFile}`);
  console.log(`Aggregate: ${AGG_FILE}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
