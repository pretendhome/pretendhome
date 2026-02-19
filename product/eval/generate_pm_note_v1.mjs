#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = '/home/mical/fde/product';
const EVAL_DIR = path.join(ROOT, 'eval');
const SUMMARY_DIR = path.join(EVAL_DIR, 'summaries');
const CLUSTER_FILE = path.join(EVAL_DIR, 'failure_clusters/failure_clusters_v1.md');
const PM_REVIEW_DIR = path.join(ROOT, 'pm_reviews');
const OUT_FILE = path.join(PM_REVIEW_DIR, 'iteration_1_auto.md');

async function latestSummaryFile() {
  const files = (await fs.readdir(SUMMARY_DIR))
    .filter((n) => n.startsWith('run_') && n.endsWith('.json'))
    .sort();
  if (!files.length) throw new Error('No run summaries found. Run eval first.');
  return path.join(SUMMARY_DIR, files[files.length - 1]);
}

function topClusters(summary, n = 5) {
  return (summary.top_clusters || []).slice(0, n);
}

function ownersForCluster(clusterName) {
  const parts = String(clusterName || '').split('|');
  const owners = new Set();
  const partners = new Set();
  for (const p of parts) {
    if (p === 'convergence') { owners.add('Yuty'); partners.add('Rex'); }
    if (p === 'routing') { owners.add('Rex'); partners.add('Argy'); }
    if (p === 'actionability') { owners.add('Theri'); partners.add('Yuty'); }
    if (p === 'safety') { owners.add('Anky'); partners.add('Rex'); }
    if (p === 'uncertainty') { owners.add('Argy'); partners.add('Yuty'); }
    if (p === 'expansion') { owners.add('Para'); partners.add('Argy'); }
  }
  if (!owners.size) owners.add('Rex');
  if (!partners.size) partners.add('Para');
  for (const o of owners) partners.delete(o);
  return { primary: [...owners], partner: [...partners] };
}

function recommendation(summary) {
  const pass = Number(summary.metrics?.pass_rate || 0);
  const novelty = Number(summary.metrics?.novelty_score || 0);
  const owdRecall = Number(summary.metrics?.owd_recall || 0);

  if (pass >= 0.8 && novelty >= 4 && owdRecall >= 0.8) return 'GO: move to holdout + pilot readiness this cycle.';
  if (pass >= 0.6) return 'ITERATE: fix top 3 clusters, rerun long-tail + one-way-door holdout.';
  return 'NO-GO: do not ship. Resolve structural failures before next gate.';
}

async function main() {
  await fs.mkdir(PM_REVIEW_DIR, { recursive: true });
  const summaryPath = await latestSummaryFile();
  const summary = JSON.parse(await fs.readFile(summaryPath, 'utf8'));

  let clusterSnippet = 'No cluster file found.';
  try {
    const text = await fs.readFile(CLUSTER_FILE, 'utf8');
    clusterSnippet = text.split('\n').slice(0, 40).join('\n');
  } catch {
    // ignore
  }

  const lines = [
    '# PM Decision Note - Iteration 1 (Auto Draft)',
    '',
    `Run ID: ${summary.run_id}`,
    `Run time: ${summary.started_at}`,
    `Summary file: ${summaryPath}`,
    '',
    '## Snapshot',
    `- Payloads: ${summary.metrics?.total ?? 'n/a'}`,
    `- Hard pass rate: ${((summary.metrics?.pass_rate || 0) * 100).toFixed(1)}%`,
    `- Novelty score (expansion): ${(summary.metrics?.novelty_score || 0).toFixed(2)} / 5`,
    `- One-way-door recall: ${((summary.metrics?.owd_recall || 0) * 100).toFixed(1)}%`,
    `- One-way-door precision (proxy): ${((summary.metrics?.owd_precision_proxy || 0) * 100).toFixed(1)}%`,
    '',
    '## Top Failure Clusters (By Count)',
    ...topClusters(summary).map((c, i) => `${i + 1}. ${c.name} (count=${c.count})`),
    '',
    '## Keep',
    '- Keep payload mix long-tail heavy; do not collapse back to only common intents.',
    '- Keep WIP discipline: max 3 in progress, max 10 open issues.',
    '',
    '## Stop Doing',
    '- Stop tuning only for core pass-rate while novelty handling is flat.',
    '- Stop producing extra artifacts that do not change the next decision.',
    '',
    '## Next Iteration Priorities',
    '1. Fix highest-count cluster with lowest implementation risk first.',
    '2. Re-run long-tail + one-way-door subsets before full 100 payload rerun.',
    '3. Verify no core regression breakage after each fix.',
    '',
    '## Gate Decision',
    `- ${recommendation(summary)}`,
    '',
    '## Owner Assignments (Auto)',
    ...topClusters(summary).map((c, i) => {
      const mapped = ownersForCluster(c.name);
      const primary = mapped.primary.join(', ');
      const partner = mapped.partner.join(', ');
      return `${i + 1}. ${c.name} -> Primary: ${primary} | Partner: ${partner}`;
    }),
    '',
    '## Cluster File Excerpt',
    '```md',
    clusterSnippet,
    '```',
    '',
    '## Final PM Edit',
    '- Add final keep/kill/go-no-go call and owner assignments here.'
  ];

  await fs.writeFile(OUT_FILE, `${lines.join('\n')}\n`, 'utf8');
  console.log(`Wrote ${OUT_FILE}`);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
