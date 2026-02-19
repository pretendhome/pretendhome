# Product Iteration Workspace

This workspace operationalizes the process in `PALETTE_FDPM_NICHE_BRIEF.md`.

## Iteration 1 Deliverables
- `payloads/payload_taxonomy_v1.md`
- `payloads/payload_set_v1.jsonl`
- `eval/rubric_v1.md`
- `eval/eval_runner_spec_v1.md`
- `pm_reviews/iteration_1.md`

## Rule
At least 60% of payloads must be outside known implementation patterns.

## Recommended: One-Command Cycle
```bash
/home/mical/fde/product/eval/run_cycle_v1.sh
```

This runs:
1. Eval runner
2. Data prune (FIFO + TTL)
3. PM auto-draft generation

## Useful Variants
```bash
/home/mical/fde/product/eval/run_cycle_v1.sh --limit=20
/home/mical/fde/product/eval/run_cycle_v1.sh --dry-run --limit=10
```

## Lens Artifact Eval (A/B)
```bash
/home/mical/fde/product/eval/run_lens_eval_v1.mjs --lens-id=LENS-PM-001
```

This compares baseline vs lens-enabled requests per payload and reports drift/safety plus lens contract integrity.
