#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = '/home/mical/fde/product/eval';
const SUMMARY_DIR = path.join(ROOT, 'summaries');
const RAW_RUNS_DIR = path.join(ROOT, 'results/raw_runs');

const KEEP_RAW_RUNS = Number(process.env.EVAL_KEEP_RAW_RUNS || 5);
const KEEP_SUMMARIES = Number(process.env.EVAL_KEEP_SUMMARIES || 1000);
const KEEP_DAYS_RAW = Number(process.env.EVAL_KEEP_DAYS_RAW || 7);

async function rmrf(target) {
  await fs.rm(target, { recursive: true, force: true });
}

async function listNames(dir) {
  try { return (await fs.readdir(dir)).sort(); }
  catch { return []; }
}

async function statSafe(p) {
  try { return await fs.stat(p); }
  catch { return null; }
}

async function pruneRawRuns() {
  const names = await listNames(RAW_RUNS_DIR);
  const full = names.map((n) => path.join(RAW_RUNS_DIR, n));

  const byAge = [];
  for (const p of full) {
    const st = await statSafe(p);
    if (!st) continue;
    byAge.push({ p, mtimeMs: st.mtimeMs });
  }
  byAge.sort((a, b) => a.mtimeMs - b.mtimeMs);

  const ttlMs = KEEP_DAYS_RAW * 24 * 60 * 60 * 1000;
  const cutoff = Date.now() - ttlMs;

  const toDelete = new Set();

  for (const item of byAge) {
    if (item.mtimeMs < cutoff) toDelete.add(item.p);
  }

  const overflow = Math.max(0, byAge.length - KEEP_RAW_RUNS);
  for (let i = 0; i < overflow; i++) toDelete.add(byAge[i].p);

  for (const p of toDelete) await rmrf(p);

  return { before: byAge.length, deleted: toDelete.size, kept: byAge.length - toDelete.size };
}

async function pruneSummaries() {
  const names = (await listNames(SUMMARY_DIR)).filter((n) => n.startsWith('run_') && n.endsWith('.json'));
  if (names.length <= KEEP_SUMMARIES) return { before: names.length, deleted: 0, kept: names.length };

  const toDelete = names.slice(0, names.length - KEEP_SUMMARIES);
  for (const n of toDelete) await rmrf(path.join(SUMMARY_DIR, n));
  return { before: names.length, deleted: toDelete.length, kept: names.length - toDelete.length };
}

async function main() {
  const raw = await pruneRawRuns();
  const sum = await pruneSummaries();
  console.log('Prune complete');
  console.log({ raw_runs: raw, summaries: sum, policy: { KEEP_RAW_RUNS, KEEP_DAYS_RAW, KEEP_SUMMARIES } });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
