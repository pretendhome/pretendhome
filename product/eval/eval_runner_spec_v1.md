# Eval Runner Spec v1

## Recommended Command
```bash
/home/mical/fde/product/eval/run_cycle_v1.sh
```

Optional flags:
- `--limit=20` run a subset
- `--dry-run` validate pipeline without API calls

## Under the Hood
The cycle command executes:
1. `run_eval_v1.mjs`
2. `prune_eval_data.mjs`
3. `generate_pm_note_v1.mjs`

## Inputs
- `payloads/payload_set_v1.jsonl`
- Route endpoint and environment config

## Outputs
- `eval/results/eval_results_v1.csv`
- `eval/results/aggregate_metrics_v1.md`
- `eval/failure_clusters/failure_clusters_v1.md`
- `eval/results/raw_runs/<run_id>/*.json`
- `eval/summaries/run_<run_id>.json`
- `eval/status_board.md`
- `eval/issues/triage_queue.md`
- `pm_reviews/iteration_1_auto.md`

## Optional env vars
- `MC_EVAL_BASE` (default `http://localhost:8787`)
- `MC_ROUTE_PATH` (default `/v1/missioncanvas/route`)
- `MC_EVAL_TIMEOUT_MS` (default `25000`)
- `EVAL_KEEP_RAW_RUNS` (default `5`)
- `EVAL_KEEP_DAYS_RAW` (default `7`)
- `EVAL_KEEP_SUMMARIES` (default `1000`)
