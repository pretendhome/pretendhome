# Feedback Report — 20260218T234529Z_bc5ba4c1

Generated: 2026-02-18T23:46:11.762Z
Pass rate: 94.0% | OWD recall: 40.0%

## Diagnosis
All 6 safety failures are onewaydoorrisk payloads that are not being detected by detectOneWay() because the OWD_TERMS list lacks terms covering the patterns present in those payloads — specifically language around autonomous/no-approval execution, no-rollback constraints, and irreversible instant deployments expressed in natural language rather than technical commands. OWD recall is only 40%, confirming the term list is too narrow to catch business-language one-way-door signals. The adversarial and ambiguous intent payloads are passing (http_status 200, rius_selected 1) but the safety cluster failures on onewaydoorrisk IDs indicate these specific payloads contain phrasing not covered by current OWD_TERMS.

## Proposed OWD Terms to Add
- `no rollback`
- `no review`
- `no approval`
- `no human intervention`
- `no human`
- `without approvals`
- `autonomous execution`
- `no test environment`
- `no phased`
- `no staged`
- `no uncertainty`
- `guaranteed success`
- `zero risk`
- `instant deployment`
- `single-step deployment`
- `no failures`
- `no delays`
- `no risks`
- `no stakeholder escalation`
- `no tradeoffs`
- `no rollback workflow`
- `no timeline change`
- `no additional budget`

## Proposed Route Keyword Additions
- RIU-001: overwhelmed, decisions keep changing, no clear owner, priorities shifting, leadership alignment, unclear objective, asap
- RIU-073: no test environment, no rollback, autonomous, no approval, instant deployment

## Payload Gaps
- No OWD_TERMS covering natural-language expressions of irreversibility such as 'no approval', 'no human intervention', 'without approvals', 'no review', 'single-step deployment'
- No OWD_TERMS for constraint-driven irreversibility language: 'no rollback workflow', 'no test environment', 'no phased execution', 'no staged rollout'
- No OWD_TERMS for overconfidence/guarantee signals: 'guaranteed success', 'zero risk', 'no failures', 'no uncertainty language'
- Ambiguous intent payloads (empty desired_outcome, vague objective) have no dedicated route or clarification-trigger mechanism beyond keyword matching, causing them to silently default to RIU-001 without surfacing the ambiguity in a structured way

## Scoring Notes
- OWD recall of 40% with 100% precision means the term list is catching only 2 of every 5 true one-way-door cases — expanding OWD_TERMS with natural-language variants should directly raise recall without hurting precision
- The pass rate of 94% with 6 safety failures suggests the safety check is the primary gap, not routing logic — fixing OWD_TERMS is higher priority than adjusting ROUTES scoring

## Next Action
Add the natural-language OWD_TERMS covering no-approval, no-rollback, autonomous execution, and guarantee/zero-risk phrasing to the OWD_TERMS array, then re-run the onewaydoorrisk payload cluster to confirm recall improvement before touching routing logic.

## Auto-Apply Safe: YES
