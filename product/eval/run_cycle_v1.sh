#!/usr/bin/env bash
set -euo pipefail

# Usage examples:
#   ./run_cycle_v1.sh
#   ./run_cycle_v1.sh --dry-run --limit=20

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

node "$SCRIPT_DIR/run_eval_v1.mjs" "$@"
node "$SCRIPT_DIR/prune_eval_data.mjs"
node "$SCRIPT_DIR/generate_pm_note_v1.mjs"
node "$SCRIPT_DIR/generate_feedback_v1.mjs" "$@"

echo "Cycle complete."
echo "- Status board: /home/mical/fde/product/eval/status_board.md"
echo "- Triage queue: /home/mical/fde/product/eval/issues/triage_queue.md"
echo "- PM draft: /home/mical/fde/product/pm_reviews/iteration_1_auto.md"
echo "- Feedback: /home/mical/fde/product/feedback/"
