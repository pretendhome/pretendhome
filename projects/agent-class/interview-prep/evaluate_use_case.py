#!/usr/bin/env python3
"""AI Use Case Evaluator — Live demo script.

Usage:
    python evaluate_use_case.py "AI-powered resume screening for recruiters"
    python evaluate_use_case.py  # interactive prompt

Runs the complete evaluation framework from the class in one shot:
  1. 4-Question Method (pattern, data, volume, measurable)
  2. Market validation signal
  3. MVP scope
  4. Time-phased metrics
  5. Risk assessment + recommendation
"""

import anthropic
import sys

SYSTEM_PROMPT = """You are an AI Use Case Evaluator for PM/TPM/EM interview prep.

Given ANY AI use case, produce a structured evaluation using this exact framework.
Be specific. Use real company names and funding data where you know them.
Be honest about risks. Keep it concise — this is a 1-page evaluation, not a report.

## Output Format

### USE CASE EVALUATION: [use case name]

**1. 4-QUESTION METHOD**

| Question | Answer | Detail |
|----------|--------|--------|
| Is there a pattern? | YES / MAYBE / NO | [1 sentence why] |
| Is there data? | YES / CHECK / NO | [1 sentence — what data, how much] |
| Is it repetitive/high-volume? | YES / CHECK / NO | [1 sentence — frequency estimate] |
| Can you measure success? | YES / PARTIAL / NO | [list 2-3 specific metrics] |

**Verdict**: [X/4 pass] — [1 sentence summary]

**2. MARKET VALIDATION**

- Validation tier: HIGH / MEDIUM / LOW / GAP
- Company count: [N companies]
- Funding signal: [$XXM+ total]
- Key players: [3-5 company names with funding amounts]
- Category age: [mature / emerging / nascent]
- Risk profile: [differentiation / category validation / market existence]

**3. MVP SCOPE**

- MVP in one sentence: [specific, bounded scope]
- Inputs: [what data/integrations needed]
- Human-in-the-loop: [where humans stay involved]
- Out of scope for MVP: [2-3 things to explicitly exclude]

**4. SUCCESS METRICS (time-phased)**

| Phase | Timeline | Metric | Target |
|-------|----------|--------|--------|
| Early | 0-3 months | [metric] | [target] |
| Early | 0-3 months | [metric] | [target] |
| Medium | 3-6 months | [metric] | [target] |
| Medium | 3-6 months | [metric] | [target] |
| Long-term | 6+ months | [metric] | [target] |

**5. RISK ASSESSMENT**

- Primary risk: [1 sentence]
- Secondary risk: [1 sentence]
- Mitigation: [1 sentence]

**RECOMMENDATION**: GO / CONDITIONAL GO / NO-GO
[2-3 sentence justification]
"""


def evaluate(use_case: str) -> str:
    client = anthropic.Anthropic()
    message = client.messages.create(
        model="claude-sonnet-4-5-20250929",
        max_tokens=1500,
        system=SYSTEM_PROMPT,
        messages=[
            {"role": "user", "content": f"Evaluate this AI use case: {use_case}"}
        ],
    )
    return message.content[0].text


def main():
    import os
    if not os.environ.get("ANTHROPIC_API_KEY"):
        print("ERROR: Set ANTHROPIC_API_KEY environment variable before running.")
        print("  export ANTHROPIC_API_KEY='sk-ant-...'")
        sys.exit(1)

    if len(sys.argv) > 1:
        use_case = " ".join(sys.argv[1:])
    else:
        use_case = input("\nEnter an AI use case to evaluate: ").strip()
        if not use_case:
            print("No use case provided.")
            sys.exit(1)

    print(f"\n{'='*60}")
    print(f"EVALUATING: {use_case}")
    print(f"{'='*60}\n")

    result = evaluate(use_case)
    print(result)


if __name__ == "__main__":
    main()
