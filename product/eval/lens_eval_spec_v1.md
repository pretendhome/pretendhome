# Lens Eval Spec v1

Purpose: test the impact and safety of the optional `lens_id` artifact with paired A/B requests.

## Runner

```bash
/home/mical/fde/product/eval/run_lens_eval_v1.mjs --lens-id=LENS-PM-001
```

Optional flags:
- `--limit=20` run subset
- `--dry-run` no API calls

## Method

For each payload:
1. Send baseline request without `lens_id`
2. Send lens request with `lens_id`
3. Compare outputs pairwise

## Metrics

- `route_delta_rate` - route changed between baseline and lens
- `status_delta_rate` - status changed between baseline and lens
- `owd_delta_rate` - one-way-door detection changed between baseline and lens
- `lens_contract_ok_rate` - lens metadata contract returned correctly
- `lens_brief_marker_rate` - action brief includes `Lens ID`
- `total_score_delta_avg` - score delta using existing eval rubric dimensions

## Expected in Contract-Only Mode

- Route/status/OWD deltas should be near `0%`
- Contract and brief marker rates should be near `100%`
- Score delta should be near `0.00`

## Outputs

- `eval/results/lens_eval_results_v1.csv`
- `eval/results/lens_eval_aggregate_v1.md`
- `eval/results/raw_runs_lens/<run_id>/*.json`
- `eval/summaries/lens_run_<run_id>.json`

