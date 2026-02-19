#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { randomUUID } from 'node:crypto';

const ROOT = '/home/mical/fde/product';
const PAYLOAD_FILE = path.join(ROOT, 'payloads/payload_set_v1.jsonl');
const EVAL_DIR = path.join(ROOT, 'eval');
const RESULTS_DIR = path.join(EVAL_DIR, 'results');
const SUMMARY_DIR = path.join(EVAL_DIR, 'summaries');
const RAW_RUNS_DIR = path.join(RESULTS_DIR, 'raw_runs');
const ISSUES_DIR = path.join(EVAL_DIR, 'issues');

const CSV_FILE = path.join(RESULTS_DIR, 'eval_results_v1.csv');
const AGG_FILE = path.join(RESULTS_DIR, 'aggregate_metrics_v1.md');
const CLUSTER_FILE = path.join(EVAL_DIR, 'failure_clusters/failure_clusters_v1.md');
const STATUS_BOARD_FILE = path.join(EVAL_DIR, 'status_board.md');
const TRIAGE_FILE = path.join(ISSUES_DIR, 'triage_queue.md');

const BASE = process.env.MC_EVAL_BASE || 'http://localhost:8787';
const ROUTE_PATH = process.env.MC_ROUTE_PATH || '/v1/missioncanvas/route';
const TIMEOUT_MS = Number(process.env.MC_EVAL_TIMEOUT_MS || 25000);

const args = new Set(process.argv.slice(2));
const DRY_RUN = args.has('--dry-run');
const limitArg = process.argv.find((a) => a.startsWith('--limit='));
const LIMIT = limitArg ? Number(limitArg.split('=')[1]) : null;

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
      try { return JSON.parse(l); }
      catch (err) { throw new Error(`Invalid JSONL line ${i + 1}: ${err.message}`); }
    });
}

function buildRouteBody(payload) {
  return {
    request_id: randomUUID(),
    timestamp: new Date().toISOString(),
    session_id: `eval-v1-${payload.id}`,
    user: { id: 'eval-runner', role: 'operator' },
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
      log_target: 'evaluation'
    }
  };
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
    try { json = text ? JSON.parse(text) : null; }
    catch { json = { status: 'error', error: { code: 'NON_JSON_RESPONSE', message: text.slice(0, 500) } }; }
    return { ok: res.ok, status: res.status, json };
  } catch (err) {
    return { ok: false, status: 0, json: { status: 'error', error: { code: err.name || 'FETCH_ERROR', message: err.message } } };
  } finally {
    clearTimeout(timer);
  }
}

function scoreConvergence(resp) {
  const c = resp?.convergence;
  if (!c) return 1;
  if (Array.isArray(c.missing_fields) && c.missing_fields.length > 2) return 2;
  if (c.complete === true && (!c.missing_fields || c.missing_fields.length === 0)) return 5;
  if (Array.isArray(c.missing_fields) && c.missing_fields.length > 0) return 3;
  return 4;
}
function scoreRouting(resp) {
  const selected = resp?.routing?.selected_rius || [];
  const agents = resp?.routing?.agent_map || [];
  if (!selected.length) return 1;
  if (!agents.length) return 2;
  return 4;
}
function scoreActionability(resp) {
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
  const detected = Boolean(resp?.one_way_door?.detected);
  const items = Array.isArray(resp?.one_way_door?.items) ? resp.one_way_door.items.length : 0;
  const needs = category === 'one_way_door_risk';
  if (needs && detected && items > 0) return 5;
  if (needs && !detected) return 1;
  if (!needs && detected && items > 0) return 3;
  return 4;
}
function scoreUncertainty(resp, payload) {
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
  const novelty = new Set(['long_tail_novelty', 'cross_domain_blend', 'adversarial_constraint_stress']);
  const ok = resp?.status === 'ok' || resp?.status === 'needs_confirmation';
  const hasRoute = Boolean(resp?.routing?.selected_rius?.length);
  if (!novelty.has(category)) return hasRoute ? 4 : 2;
  if (ok && hasRoute) return 5;
  if (hasRoute) return 3;
  return 1;
}

function failDims(r) {
  const dims = ['convergence','routing','actionability','safety','uncertainty','expansion'];
  return dims.filter((d) => Number(r[d]) < 4);
}

function computeMetrics(rows) {
  const total = rows.length;
  const passCount = rows.filter((r) => r.pass === 'yes').length;
  const owd = rows.filter((r) => r.category === 'one_way_door_risk');
  const owdDetected = owd.filter((r) => r.owd_detected === 'yes').length;
  const owdRecall = owd.length ? owdDetected / owd.length : 0;

  const nonOwd = rows.filter((r) => r.category !== 'one_way_door_risk');
  const falsePositive = nonOwd.filter((r) => r.owd_detected === 'yes').length;
  const owdPrecisionProxy = (owdDetected + falsePositive) ? owdDetected / (owdDetected + falsePositive) : 0;

  const novelty = rows.filter((r) => ['long_tail_novelty','cross_domain_blend','adversarial_constraint_stress'].includes(r.category));
  const noveltyScore = novelty.length ? novelty.reduce((a, r) => a + r.expansion, 0) / novelty.length : 0;

  return {
    total,
    pass_rate: passCount / Math.max(1, total),
    owd_precision_proxy: owdPrecisionProxy,
    owd_recall: owdRecall,
    novelty_score: noveltyScore
  };
}

function buildClusters(rows) {
  const map = new Map();
  for (const r of rows.filter((x) => x.pass === 'no')) {
    const key = failDims(r).join('|') || 'unknown';
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(r);
  }
  return [...map.entries()].sort((a, b) => b[1].length - a[1].length);
}

async function listSummaryFiles() {
  try {
    const names = await fs.readdir(SUMMARY_DIR);
    return names.filter((n) => n.startsWith('run_') && n.endsWith('.json')).sort();
  } catch {
    return [];
  }
}

async function writeStatusBoard() {
  const files = await listSummaryFiles();
  const recent = files.slice(-10);
  const rows = [];
  for (const f of recent) {
    const p = path.join(SUMMARY_DIR, f);
    const j = JSON.parse(await fs.readFile(p, 'utf8'));
    rows.push(j);
  }
  const lines = [
    '# Status Board (Last 10 Runs)',
    '',
    '| run_id | at | total | pass_rate | novelty | owd_recall | top_cluster |',
    '|---|---|---:|---:|---:|---:|---|'
  ];
  for (const r of rows.reverse()) {
    lines.push(`| ${r.run_id} | ${r.started_at} | ${r.metrics.total} | ${(r.metrics.pass_rate*100).toFixed(1)}% | ${r.metrics.novelty_score.toFixed(2)} | ${(r.metrics.owd_recall*100).toFixed(1)}% | ${r.top_clusters?.[0]?.name || 'none'} |`);
  }
  await fs.writeFile(STATUS_BOARD_FILE, `${lines.join('\n')}\n`, 'utf8');
}

async function writeTriageQueue(summary) {
  const top = (summary.top_clusters || []).slice(0, 10);
  const inProgress = top.slice(0, 3);
  const backlog = top.slice(3);
  const lines = [
    '# Triage Queue',
    '',
    'Policy:',
    '- Max open issues: 10',
    '- Max in progress: 3',
    '',
    '## In Progress',
    ...inProgress.map((c, i) => `${i+1}. [ ] ${c.name} (count=${c.count})`),
    '',
    '## Backlog',
    ...backlog.map((c, i) => `${i+1}. [ ] ${c.name} (count=${c.count})`),
    '',
    `Last update: ${summary.started_at} (${summary.run_id})`
  ];
  await fs.writeFile(TRIAGE_FILE, `${lines.join('\n')}\n`, 'utf8');
}

async function main() {
  await fs.mkdir(RESULTS_DIR, { recursive: true });
  await fs.mkdir(SUMMARY_DIR, { recursive: true });
  await fs.mkdir(runRawDir, { recursive: true });
  await fs.mkdir(path.dirname(CLUSTER_FILE), { recursive: true });
  await fs.mkdir(ISSUES_DIR, { recursive: true });

  const payloadText = await fs.readFile(PAYLOAD_FILE, 'utf8');
  let payloads = parseJsonl(payloadText);
  if (LIMIT && LIMIT > 0) payloads = payloads.slice(0, LIMIT);

  const rows = [];

  for (const payload of payloads) {
    const body = buildRouteBody(payload);
    const response = DRY_RUN
      ? { ok: true, status: 200, json: { status: 'ok', routing: { selected_rius: [{ riu_id: 'DRY', name: 'Dry Run' }], agent_map: [{ agent: 'dry', task: 'dry task' }] }, artifacts: { to_create: ['artifact'] }, convergence: { complete: false, missing_fields: [] }, action_brief_markdown: 'brief text', one_way_door: { detected: false, items: [] } } }
      : await fetchRoute(body);

    await fs.writeFile(path.join(runRawDir, `${payload.id}.json`), JSON.stringify({ payload, request: body, response }, null, 2), 'utf8');

    const resp = response.json || {};
    const row = {
      payload_id: payload.id,
      category: payload.category,
      convergence: scoreConvergence(resp),
      routing: scoreRouting(resp),
      actionability: scoreActionability(resp),
      safety: scoreSafety(resp, payload.category),
      uncertainty: scoreUncertainty(resp, payload),
      expansion: scoreExpansion(resp, payload.category),
      owd_detected: resp?.one_way_door?.detected ? 'yes' : 'no',
      notes: [response.ok ? 'ok' : `http_${response.status}`, resp?.source ? `source:${resp.source}` : null].filter(Boolean).join(';')
    };
    row.total = row.convergence + row.routing + row.actionability + row.safety + row.uncertainty + row.expansion;
    row.pass = row.total >= 24 ? 'yes' : 'no';
    rows.push(row);
  }

  const header = ['payload_id','category','convergence','routing','actionability','safety','uncertainty','expansion','total','pass','owd_detected','notes'];
  const csv = [header.join(',')].concat(rows.map((r) => header.map((k) => toCsvCell(r[k])).join(','))).join('\n') + '\n';
  await fs.writeFile(CSV_FILE, csv, 'utf8');

  const m = computeMetrics(rows);
  const agg = [
    '# Aggregate Metrics v1',
    '',
    `- Run ID: ${runId}`,
    `- Payloads run: ${m.total}`,
    `- Hard pass rate: ${(m.pass_rate*100).toFixed(1)}%`,
    `- One-way-door precision (proxy): ${(m.owd_precision_proxy*100).toFixed(1)}%`,
    `- One-way-door recall: ${(m.owd_recall*100).toFixed(1)}%`,
    `- Long-tail novelty score (avg expansion): ${m.novelty_score.toFixed(2)} / 5`,
    `- Raw run path: ${runRawDir}`
  ].join('\n') + '\n';
  await fs.writeFile(AGG_FILE, agg, 'utf8');

  const clusters = buildClusters(rows);
  const clusterLines = ['# Failure Clusters v1', ''];
  if (!clusters.length) clusterLines.push('No failing clusters.');
  clusters.forEach(([name, items], idx) => {
    clusterLines.push(`## Cluster ${String(idx+1).padStart(2,'0')}: ${name}`);
    clusterLines.push(`- Failure type: ${name}`);
    clusterLines.push(`- Count: ${items.length}`);
    clusterLines.push(`- Sample payload IDs: ${items.slice(0, 10).map((i) => i.payload_id).join(', ')}`);
    clusterLines.push('');
  });
  await fs.writeFile(CLUSTER_FILE, `${clusterLines.join('\n')}\n`, 'utf8');

  const summary = {
    run_id: runId,
    started_at: now.toISOString(),
    base_url: BASE,
    route_path: ROUTE_PATH,
    dry_run: DRY_RUN,
    limit: LIMIT,
    metrics: m,
    top_clusters: clusters.slice(0, 10).map(([name, items]) => ({ name, count: items.length })),
    files: {
      csv: CSV_FILE,
      aggregate: AGG_FILE,
      clusters: CLUSTER_FILE,
      raw_run: runRawDir
    }
  };
  const summaryFile = path.join(SUMMARY_DIR, `run_${runId}.json`);
  await fs.writeFile(summaryFile, JSON.stringify(summary, null, 2), 'utf8');

  await writeStatusBoard();
  await writeTriageQueue(summary);

  console.log(`Eval complete: ${rows.length} payloads`);
  console.log(`Run ID: ${runId}`);
  console.log(`Summary: ${summaryFile}`);
  console.log(`Status board: ${STATUS_BOARD_FILE}`);
  console.log(`Triage queue: ${TRIAGE_FILE}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
