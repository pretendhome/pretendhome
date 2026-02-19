#!/usr/bin/env node
/**
 * generate_feedback_v1.mjs — Auto-recursive feedback agent
 *
 * Reads the latest eval run, diagnoses failures with Claude,
 * and proposes (or applies) concrete fixes.
 *
 * Usage:
 *   node generate_feedback_v1.mjs              # diagnose + write proposal
 *   node generate_feedback_v1.mjs --auto-apply # diagnose + patch safe changes
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import Anthropic from '@anthropic-ai/sdk';

const ROOT         = '/home/mical/fde/product';
const EVAL_DIR     = path.join(ROOT, 'eval');
const SUMMARY_DIR  = path.join(EVAL_DIR, 'summaries');
const RAW_RUNS_DIR = path.join(EVAL_DIR, 'results/raw_runs');
const CLUSTER_FILE = path.join(EVAL_DIR, 'failure_clusters/failure_clusters_v1.md');
const FEEDBACK_DIR = path.join(ROOT, 'feedback');
const ADAPTER_FILE = '/home/mical/fde/missioncanvas-site/openclaw_adapter_core.mjs';

const AUTO_APPLY = process.argv.includes('--auto-apply');
const MAX_FAILING_SAMPLES = 8;

// ── Helpers ──────────────────────────────────────────────────────────────────

async function latestSummary() {
  const files = (await fs.readdir(SUMMARY_DIR))
    .filter((n) => n.startsWith('run_') && n.endsWith('.json'))
    .sort();
  if (!files.length) throw new Error('No run summaries found. Run eval first.');
  const p = path.join(SUMMARY_DIR, files[files.length - 1]);
  return JSON.parse(await fs.readFile(p, 'utf8'));
}

async function loadFailingSamples(summary) {
  const runId  = summary.run_id;
  const runDir = path.join(RAW_RUNS_DIR, runId);

  let names;
  try {
    names = await fs.readdir(runDir);
  } catch {
    return [];
  }

  const samples = [];
  for (const name of names.slice(0, MAX_FAILING_SAMPLES * 3)) {
    const raw = JSON.parse(await fs.readFile(path.join(runDir, name), 'utf8'));
    const resp = raw.response?.json || {};

    // Score locally to filter to actual failures
    const owd  = Boolean(resp.one_way_door?.detected);
    const rius = resp.routing?.selected_rius?.length || 0;
    const brief = resp.action_brief_markdown || '';
    const total = (rius ? 4 : 1) + (brief.length > 120 ? 4 : 1);
    if (total < 24) {
      samples.push({
        payload_id: raw.payload?.id,
        category:   raw.payload?.category,
        objective:  raw.payload?.input?.objective,
        context:    raw.payload?.input?.context,
        desired_outcome: raw.payload?.input?.desired_outcome,
        constraints:     raw.payload?.input?.constraints,
        owd_detected: owd,
        rius_selected: rius,
        brief_length: brief.length,
        http_status: raw.response?.status,
      });
    }
    if (samples.length >= MAX_FAILING_SAMPLES) break;
  }
  return samples;
}

async function readAdapterSource() {
  try {
    return await fs.readFile(ADAPTER_FILE, 'utf8');
  } catch {
    return '(adapter source not readable)';
  }
}

// ── Claude analysis ───────────────────────────────────────────────────────────

async function analyzeWithClaude(summary, clusterText, failingSamples, adapterSource) {
  const client = new Anthropic();

  const systemPrompt = `You are a product quality engineer analyzing evaluation runs of MissionCanvas, \
an AI-powered work routing system. You diagnose failures and propose specific, minimal, additive fixes.

Your output must be valid JSON — no markdown fences, no prose outside the JSON object.

Return exactly this shape:
{
  "diagnosis": "2-3 sentences on the root cause of failures",
  "owd_terms_to_add": ["term1", "term2"],
  "route_keywords_to_add": [{"route_id": "RIU-014", "keywords": ["new_keyword"]}],
  "payload_gaps": ["description of missing payload categories"],
  "scoring_notes": ["any issues with the scoring logic itself"],
  "next_action": "one sentence — most important thing to do before the next run",
  "safe_to_auto_apply": true
}

Rules:
- owd_terms_to_add: only lowercase, exact substring match terms; additive only; no wildcards
- route_keywords_to_add: only add to existing routes by id; additive only
- safe_to_auto_apply: true only if all proposed changes are purely additive (no deletions, no restructuring)
- Be specific and minimal — propose the smallest change that fixes the most failures`;

  const userPrompt = `## Run Summary
- Run ID: ${summary.run_id}
- Pass rate: ${(summary.metrics.pass_rate * 100).toFixed(1)}%
- OWD recall: ${(summary.metrics.owd_recall * 100).toFixed(1)}%
- OWD precision: ${(summary.metrics.owd_precision_proxy * 100).toFixed(1)}%
- Novelty score: ${summary.metrics.novelty_score.toFixed(2)} / 5

## Top Failure Clusters
${summary.top_clusters?.map((c) => `- ${c.name} (count=${c.count})`).join('\n') || 'none'}

## Failure Cluster Detail
${clusterText}

## Sample Failing Payloads (up to ${MAX_FAILING_SAMPLES})
${JSON.stringify(failingSamples, null, 2)}

## Current Adapter Source (OWD_TERMS and ROUTES)
Extract the OWD_TERMS array and ROUTES array from this source to understand current coverage:
\`\`\`js
${adapterSource.slice(0, 4000)}
\`\`\`

Diagnose the failures and return your JSON proposal.`;

  const msg = await client.messages.create({
    model:      'claude-sonnet-4-6',
    max_tokens: 1024,
    system:     systemPrompt,
    messages:   [{ role: 'user', content: userPrompt }],
  });

  const text = msg.content[0].text.trim();

  // Strip markdown fences if present
  const cleaned = text.startsWith('```')
    ? text.split('\n').slice(1, text.endsWith('```') ? -1 : undefined).join('\n').trim()
    : text;

  const start = cleaned.indexOf('{');
  const end   = cleaned.lastIndexOf('}');
  if (start < 0 || end < 0) throw new Error(`Claude returned non-JSON: ${text.slice(0, 200)}`);
  return JSON.parse(cleaned.slice(start, end + 1));
}

// ── Auto-apply ────────────────────────────────────────────────────────────────

async function autoApply(proposal) {
  if (!proposal.safe_to_auto_apply) {
    console.log('[feedback] auto-apply skipped: proposal marked not safe');
    return false;
  }

  const newTerms = (proposal.owd_terms_to_add || []).filter(Boolean);
  if (!newTerms.length) {
    console.log('[feedback] auto-apply: no new OWD terms to add');
    return false;
  }

  const source  = await fs.readFile(ADAPTER_FILE, 'utf8');

  // Extract existing terms from the array
  const match = source.match(/const OWD_TERMS\s*=\s*\[([\s\S]*?)\];/);
  if (!match) {
    console.log('[feedback] auto-apply: could not locate OWD_TERMS in adapter');
    return false;
  }

  const existing = (match[1].match(/'([^']+)'/g) || []).map((s) => s.slice(1, -1));
  const toAdd    = newTerms.filter((t) => !existing.includes(t));

  if (!toAdd.length) {
    console.log('[feedback] auto-apply: all proposed terms already present');
    return false;
  }

  // Append new terms to the last comment block in OWD_TERMS
  const addedLines = toAdd.map((t) => `  '${t}',`).join('\n');
  const patched = source.replace(
    /(\s*\/\/ Business-level irreversibility\n)([\s\S]*?)(\n\];)/,
    (_, commentLine, body, closing) => {
      // Ensure the existing last term line has a trailing comma
      const bodyFixed = body.trimEnd().replace(/(')\s*$/, "$1,");
      return `${commentLine}${bodyFixed}\n${addedLines}${closing}`;
    }
  );

  await fs.writeFile(ADAPTER_FILE, patched, 'utf8');
  console.log(`[feedback] auto-apply: added ${toAdd.length} OWD terms: ${toAdd.join(', ')}`);

  // Also apply route keyword additions
  const routeAdditions = (proposal.route_keywords_to_add || []).filter(
    (r) => r.route_id && Array.isArray(r.keywords) && r.keywords.length
  );
  if (routeAdditions.length) {
    let routeSource = await fs.readFile(ADAPTER_FILE, 'utf8');
    let routePatched = false;
    for (const { route_id, keywords } of routeAdditions) {
      // Find the route block by id and append keywords to its keywords array
      const routePattern = new RegExp(
        `(id:\\s*'${route_id}'[\\s\\S]*?keywords:\\s*\\[)([^\\]]*)(\\])`,
        'm'
      );
      const routeMatch = routeSource.match(routePattern);
      if (!routeMatch) {
        console.log(`[feedback] auto-apply: route ${route_id} not found, skipping`);
        continue;
      }
      const existingKws = (routeMatch[2].match(/'([^']+)'/g) || []).map((s) => s.slice(1, -1));
      const newKws = keywords.filter((k) => !existingKws.includes(k));
      if (!newKws.length) continue;
      const addition = newKws.map((k) => `'${k}'`).join(', ');
      routeSource = routeSource.replace(routePattern, (_, pre, body, close) => {
        const bodyFixed = body.trimEnd().replace(/,?\s*$/, ', ');
        return `${pre}${bodyFixed}${addition}${close}`;
      });
      console.log(`[feedback] auto-apply: ${route_id} keywords added: ${newKws.join(', ')}`);
      routePatched = true;
    }
    if (routePatched) await fs.writeFile(ADAPTER_FILE, routeSource, 'utf8');
  }

  return true;
}

// ── Write outputs ─────────────────────────────────────────────────────────────

async function writeOutputs(summary, proposal) {
  await fs.mkdir(FEEDBACK_DIR, { recursive: true });

  const runId    = summary.run_id;
  const jsonFile = path.join(FEEDBACK_DIR, `proposed_changes_${runId}.json`);
  const mdFile   = path.join(FEEDBACK_DIR, `proposed_changes_${runId}.md`);

  await fs.writeFile(jsonFile, JSON.stringify(proposal, null, 2), 'utf8');

  const md = [
    `# Feedback Report — ${runId}`,
    '',
    `Generated: ${new Date().toISOString()}`,
    `Pass rate: ${(summary.metrics.pass_rate * 100).toFixed(1)}% | OWD recall: ${(summary.metrics.owd_recall * 100).toFixed(1)}%`,
    '',
    '## Diagnosis',
    proposal.diagnosis || '(none)',
    '',
    '## Proposed OWD Terms to Add',
    ...(proposal.owd_terms_to_add?.length
      ? proposal.owd_terms_to_add.map((t) => `- \`${t}\``)
      : ['(none)']),
    '',
    '## Proposed Route Keyword Additions',
    ...(proposal.route_keywords_to_add?.length
      ? proposal.route_keywords_to_add.map((r) => `- ${r.route_id}: ${r.keywords?.join(', ')}`)
      : ['(none)']),
    '',
    '## Payload Gaps',
    ...(proposal.payload_gaps?.length
      ? proposal.payload_gaps.map((g) => `- ${g}`)
      : ['(none)']),
    '',
    '## Scoring Notes',
    ...(proposal.scoring_notes?.length
      ? proposal.scoring_notes.map((n) => `- ${n}`)
      : ['(none)']),
    '',
    '## Next Action',
    proposal.next_action || '(none)',
    '',
    `## Auto-Apply Safe: ${proposal.safe_to_auto_apply ? 'YES' : 'NO'}`,
  ].join('\n');

  await fs.writeFile(mdFile, md + '\n', 'utf8');
  return { jsonFile, mdFile };
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log('[feedback] loading latest run summary...');
  const summary = await latestSummary();
  console.log(`[feedback] run: ${summary.run_id} | pass: ${(summary.metrics.pass_rate * 100).toFixed(1)}%`);

  if (summary.metrics.pass_rate === 1 && !summary.top_clusters?.length) {
    console.log('[feedback] 100% pass rate, no failures to analyze. Skipping Claude call.');
    return;
  }

  let clusterText = '(no cluster file)';
  try { clusterText = await fs.readFile(CLUSTER_FILE, 'utf8'); } catch { /* ok */ }

  console.log('[feedback] loading failing samples...');
  const failingSamples = await loadFailingSamples(summary);
  console.log(`[feedback] ${failingSamples.length} failing samples loaded`);

  const adapterSource = await readAdapterSource();

  console.log('[feedback] calling Claude for diagnosis...');
  const proposal = await analyzeWithClaude(summary, clusterText, failingSamples, adapterSource);

  const { jsonFile, mdFile } = await writeOutputs(summary, proposal);
  console.log(`[feedback] proposal written:`);
  console.log(`  ${mdFile}`);
  console.log(`  ${jsonFile}`);

  if (AUTO_APPLY) {
    console.log('[feedback] --auto-apply: attempting to patch adapter...');
    const applied = await autoApply(proposal);
    if (applied) {
      console.log('[feedback] adapter patched. Restart the server to pick up changes.');
    }
  } else if (proposal.owd_terms_to_add?.length || proposal.route_keywords_to_add?.length) {
    console.log('[feedback] to apply proposed changes run:');
    console.log('  node generate_feedback_v1.mjs --auto-apply');
  }

  console.log('[feedback] done.');
  console.log(`[feedback] diagnosis: ${proposal.diagnosis}`);
}

main().catch((err) => {
  console.error('[feedback] error:', err.message || err);
  process.exit(1);
});
