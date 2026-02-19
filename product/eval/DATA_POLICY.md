# Evaluation Data Policy (Hybrid Model)

## Purpose
Keep evaluation outputs easy to understand and quantify while preventing metadata sprawl.

## Model
1. Now Layer (raw, short-lived)
- Stored under `eval/results/raw_runs/<run_id>/`
- Retention: keep last 5 runs and max 7 days

2. Snapshot Layer (compact, durable)
- Run summaries under `eval/summaries/run_<run_id>.json`
- Status board under `eval/status_board.md` (last 10 runs)

3. Learning Layer (human-curated)
- PM review docs under `pm_reviews/`
- Triage queue under `eval/issues/triage_queue.md`

## Auto Prune
Run:
```bash
node /home/mical/fde/product/eval/prune_eval_data.mjs
```

Optional env vars:
- `EVAL_KEEP_RAW_RUNS` (default `5`)
- `EVAL_KEEP_DAYS_RAW` (default `7`)
- `EVAL_KEEP_SUMMARIES` (default `1000`)

## Operating Limits
- Max open issues in triage: 10
- Max in progress issues: 3
