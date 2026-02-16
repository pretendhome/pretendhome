# Kiro Prompt: Implement OpenClaw Learnings into Palette

**Context**: We analyzed OpenClaw (github.com/openclaw/openclaw, 188k+ stars) against our Palette agent toolkit and identified 6 architectural improvements. This prompt implements all of them. The Gap AI Strategy project (`/home/mical/fde/projects/gap/`) will be used as the validation target — after implementing, we retrofit Gap to confirm the patterns work.

**Reference documents**:
- OpenClaw comparison: `/home/mical/fde/openclaw/openclaw_vs_palette_analysis.md`
- Palette core: `/home/mical/fde/palette/palette-core.md`
- Palette taxonomy: `/home/mical/fde/palette/taxonomy/releases/v1.2/palette_taxonomy_v1.2.yaml`
- Palette knowledge library: `/home/mical/fde/palette/knowledge-library/v1.2/palette_knowledge_library_v1.2.yaml`
- Anky validation report (Gap): `/home/mical/fde/projects/gap/anky_validation_report.md`
- All agent definitions: `/home/mical/fde/palette/agents/*/`

**Critical rule**: Do NOT commit anything. All changes must be validated against the Gap project before pushing.

---

## Change 1: Engagement Memory Architecture

**Problem**: Palette is stateless across sessions. When context fills up or a new session starts, canonical facts (team size, budget, ROI numbers) get lost or drift between documents. This caused the #1 blocking issue in the Gap project — ROI numbers inconsistent across 5 documents.

**What OpenClaw does**: Two-tier memory — `MEMORY.md` (curated long-term facts) + `memory/YYYY-MM-DD.md` (daily operational logs). Memory is loaded into system prompt at session start.

**Implementation**:

### 1a. Add MEMORY.md pattern to Palette core

Edit `/home/mical/fde/palette/palette-core.md` and add a new section after the existing decision log section. The new section should define:

```
## Engagement Memory

Every Palette engagement MUST maintain a MEMORY.md file at the engagement root directory. This is the canonical source of truth for facts that persist across sessions.

### MEMORY.md Structure

MEMORY.md contains ONLY verified, canonical facts. It is curated, not appended — outdated entries are updated or removed.

Required sections:
- **Canonical Numbers**: All quantitative values that appear in multiple documents (budget, team size, ROI projections, timelines). When a number changes, MEMORY.md updates FIRST, then documents follow.
- **Key Decisions**: Summary of ONE-WAY DOOR and TWO-WAY DOOR decisions with status. This mirrors decisions.md but in quick-reference format.
- **Active Agents**: Which Palette agents have contributed, what phase the engagement is in.
- **Known Gaps**: What has been flagged but not yet addressed.

Rules:
- Every agent MUST read MEMORY.md before producing output.
- Every agent that produces quantitative output MUST check its numbers against MEMORY.md canonical numbers.
- If an agent's work changes a canonical number, it MUST flag this as a MEMORY UPDATE and explain why the number changed.
- MEMORY.md should stay under 200 lines. If it grows beyond this, archive older entries to decisions.md or a separate reference file.
```

### 1b. Add daily log pattern

In the same section of palette-core.md, add:

```
### Daily Engagement Logs

Long-running engagements SHOULD maintain daily logs at `memory/YYYY-MM-DD.md` within the engagement directory. These are append-only operational records.

Each daily log entry includes:
- Agent that acted
- What was produced or changed
- Any canonical number changes (cross-reference MEMORY.md)
- Blockers encountered
- Next expected action

Daily logs are operational context — they help resume work after session breaks. Unlike MEMORY.md (curated truth), daily logs are raw chronological records.
```

### 1c. Create Gap MEMORY.md as validation

Create `/home/mical/fde/projects/gap/MEMORY.md` by reading ALL Gap project files and extracting canonical facts. This is the retrofit test. The file should contain:

- **Canonical Numbers**: The CORRECT, reconciled values for team size, budget, Year 1/2/3 ROI, pilot costs, and benefit ranges. Read the executive narrative (`gap_executive_narrative.md`) as the authoritative source for final numbers, cross-check against `gap_roi_framework.md` and `gap_rex_use_case_deep_dives.md`. Where numbers conflict, flag the conflict explicitly.
- **Key Decisions**: Extract all decisions from `decisions.md` AND any implicit decisions made in Phase 1-7 documents (FDE model selection, Google Cloud platform, governance model, operations-first sequencing, use case prioritization).
- **Active Agents**: List all agents that contributed (from the Anky validation report inventory).
- **Known Gaps**: Pull directly from the Anky validation report's gaps table (items 1-10).

**Acceptance criteria**:
- MEMORY.md exists and is under 200 lines
- Every number that appears in 2+ Gap documents has a canonical value in MEMORY.md
- Conflicts between documents are explicitly flagged with `[CONFLICT]` markers
- A human reading only MEMORY.md can understand the current state of the engagement

---

## Change 2: Context Compaction Protocol

**Problem**: Palette engagements routinely hit context window limits during multi-phase work. When this happens, the session restarts and continuity depends entirely on artifact quality. The Gap project ran out of context twice, losing operational state each time.

**What OpenClaw does**: Auto-compaction when approaching context limits. Summarizes older messages, preserves recent ones. Manual `/compact` command with optional focus instructions. Separate from pruning (in-memory trimming of old tool results).

**Implementation**:

### 2a. Add compaction protocol to palette-core.md

Add a new section to `/home/mical/fde/palette/palette-core.md`:

```
## Context Compaction Protocol

When an engagement session approaches context limits (operator judgment or system warning), execute the COMPACT protocol before context is lost:

### COMPACT Steps

1. **Flush to MEMORY.md**: Update MEMORY.md with any canonical facts from the current session that aren't yet recorded.
2. **Flush to daily log**: Write a daily log entry summarizing what was accomplished in this session.
3. **Update decisions.md**: Log any decisions made in this session that haven't been recorded.
4. **Write continuation note**: At the bottom of the daily log, write a "NEXT SESSION STARTS HERE" block with:
   - Current phase and step
   - What was in progress when compaction triggered
   - What the next action should be
   - Any context that won't survive in artifacts alone (e.g., "the user prefers conservative estimates" or "we decided to skip the vendor analysis")
5. **Summarize artifacts**: List all files created or modified in this session with one-line descriptions.

### Compaction Ownership

Yuty (narrative coherence agent) owns the COMPACT protocol. When another agent is active and compaction is needed, Yuty runs compaction before handing back to the active agent.

### Prevention

Before starting a session on a long engagement, agents SHOULD:
- Read MEMORY.md first (canonical state)
- Read the most recent daily log (operational context)
- Read decisions.md (decision history)
- Only then read specific phase artifacts as needed

This reduces context consumption by avoiding re-reading completed artifacts that are already summarized in MEMORY.md.
```

### 2b. Add RIU for compaction

Add a new entry to the Palette taxonomy at `/home/mical/fde/palette/taxonomy/releases/v1.2/palette_taxonomy_v1.2.yaml`:

```yaml
- id: "RIU-607"
  name: "Context Compaction for Long Engagements"
  domain: "Engagement Operations"
  description: "Protocol for preserving engagement state when approaching context window limits. Ensures continuity across sessions through structured memory flush, daily logging, and continuation notes."
  primary_agent: "Yuty"
  supporting_agents: ["Anky"]
  triggers:
    - "Context window approaching limit"
    - "Session break in multi-phase engagement"
    - "Operator requests compaction"
  artifacts:
    - "Updated MEMORY.md"
    - "Daily log entry with continuation note"
    - "Updated decisions.md"
  quality_gate: "Anky confirms MEMORY.md is current and continuation note is actionable"
  impressions: 0
  status: "UNVALIDATED"
```

### 2c. Add knowledge library entry

Add to `/home/mical/fde/palette/knowledge-library/v1.2/palette_knowledge_library_v1.2.yaml`:

```yaml
- id: "LIB-100"
  question: "How do I maintain continuity across sessions in a long engagement?"
  answer: "Use the COMPACT protocol (RIU-607). Before context fills: flush canonical facts to MEMORY.md, write a daily log with continuation note, update decisions.md. Next session starts by reading MEMORY.md + latest daily log + decisions.md before touching any phase artifacts. This prevents the two most common continuity failures: number drift between documents and lost operational context."
  domain: "Engagement Operations"
  related_rius: ["RIU-607"]
  validated: false
```

**Acceptance criteria**:
- COMPACT protocol exists in palette-core.md
- RIU-607 exists in taxonomy
- LIB-100 exists in knowledge library
- The protocol is specific enough that an agent could execute it without human clarification

---

## Change 3: Workflow Definition for Multi-Agent Engagements

**Problem**: Palette workflows are implicit — they exist in the operator's head or in prose descriptions. The Gap project's 7-phase workflow had no formal definition, so quality gates between phases were skipped. Anky only ran after all 7 phases instead of between each phase.

**What OpenClaw does**: Lobster DSL — typed workflow runtime with YAML-defined pipelines, step chaining via stdin/stdout, approval gates as first-class citizens, resumable state via resumeToken.

**Implementation**:

### 3a. Define workflow format

Create `/home/mical/fde/palette/workflows/README.md`:

```markdown
# Palette Workflow Definitions

Workflow files define the phase structure, agent assignments, quality gates, and decision checkpoints for multi-agent engagements. They make implicit workflows explicit and auditable.

## Format

Workflow files are YAML with the following structure:

- **id**: Unique workflow identifier
- **name**: Human-readable name
- **description**: What this workflow produces
- **phases**: Ordered list of phases, each containing:
  - **id**: Phase identifier (e.g., `phase-1-research`)
  - **name**: Phase name
  - **agent**: Primary Palette agent
  - **supporting_agents**: Optional list of supporting agents
  - **inputs**: What this phase requires (files, decisions, context)
  - **outputs**: What this phase produces (files with descriptions)
  - **quality_gate**: Validation criteria checked before proceeding
  - **decisions**: ONE-WAY DOOR or TWO-WAY DOOR decisions expected in this phase
  - **memory_updates**: What canonical facts this phase is expected to establish or modify
  - **approval**: `auto` (Anky validates) or `human` (human must approve)

## Rules

1. Every engagement with 3+ phases MUST have a workflow file.
2. No phase may begin until the previous phase's quality gate passes.
3. ONE-WAY DOOR decisions MUST have `approval: human`.
4. Every phase that produces quantitative output MUST include a `memory_updates` field.
5. Anky spot-checks between phases (not just at the end).
```

### 3b. Create Gap workflow as validation

Create `/home/mical/fde/projects/gap/workflow.yaml` by reverse-engineering the Gap project's actual execution into the workflow format. Read the Anky validation report and all phase documents to determine:

- What phases actually executed (Phase 0 through Phase 7)
- What agent was responsible for each phase
- What files each phase produced
- What decisions each phase made (even if not logged in decisions.md)
- Where quality gates SHOULD have existed but didn't

This retroactive workflow definition will:
1. Validate that the format is expressive enough for a real engagement
2. Show exactly where quality gates were missing (supporting Anky's findings)
3. Serve as a template for future engagements of similar complexity

### 3c. Add RIU for workflow definitions

Add to taxonomy:

```yaml
- id: "RIU-608"
  name: "Workflow Definition for Multi-Agent Engagements"
  domain: "Engagement Operations"
  description: "Typed workflow format (YAML) defining phases, agent assignments, quality gates, decision checkpoints, and memory update expectations for multi-agent engagements. Makes implicit workflows explicit and auditable."
  primary_agent: "Orchestrator"
  supporting_agents: ["Anky"]
  triggers:
    - "New engagement with 3+ planned phases"
    - "Existing engagement needs structure formalization"
  artifacts:
    - "workflow.yaml"
  quality_gate: "Anky validates workflow completeness and gate definitions"
  impressions: 0
  status: "UNVALIDATED"
```

**Acceptance criteria**:
- Workflow README exists with format specification
- Gap workflow.yaml exists and covers all 7 phases
- RIU-608 exists in taxonomy
- The Gap workflow retroactively shows where quality gates should have caught the ROI inconsistency

---

## Change 4: Sub-Agent Spawning Pattern for Orchestrator

**Problem**: Palette's multi-agent workflows are sequential. The Gap project's 5 Argy research cycles ran one after another when 4 of them were independent and could have run in parallel. The Orchestrator archetype exists in design but has no implementation guidance.

**What OpenClaw does**: `sessions_spawn` creates isolated background workers with reduced system prompts, restricted tool access, configurable concurrency, and structured result announcements back to parent.

**Implementation**:

### 4a. Update Orchestrator agent definition

Read the current Orchestrator definition (if it exists in `/home/mical/fde/palette/agents/`) or create guidance. Add a sub-agent spawning section:

```markdown
## Sub-Agent Spawning

The Orchestrator may spawn parallel sub-agents for independent work items within a phase. This is the primary mechanism for parallelizing Argy research, Theri build specs, or any phase where multiple independent artifacts are produced.

### Spawning Rules

1. **Independence requirement**: Only spawn parallel sub-agents for work items with NO dependencies between them. If output B requires output A, they must be sequential.
2. **Reduced context**: Each sub-agent receives ONLY:
   - The engagement's MEMORY.md (canonical facts)
   - The specific task assignment (what to research/build/validate)
   - Relevant input artifacts (not all engagement artifacts)
   - The agent archetype definition (e.g., argentavis.md for Argy tasks)
3. **Restricted scope**: Sub-agents produce their assigned artifact and nothing else. They do NOT update MEMORY.md, decisions.md, or other shared state. Only the Orchestrator updates shared state after collecting results.
4. **Concurrency limit**: Maximum 6 parallel sub-agents per phase (prevents context fragmentation and ensures review quality).
5. **Result format**: Each sub-agent returns a structured result:
   - Artifact produced (file path)
   - Canonical numbers introduced (for MEMORY.md consideration)
   - Decisions encountered (for decisions.md consideration)
   - Gaps or blockers discovered
   - Confidence level (HIGH/MEDIUM/LOW)
6. **Post-collection**: After all sub-agents complete, the Orchestrator:
   - Reviews all results for consistency
   - Updates MEMORY.md with new canonical facts
   - Logs any decisions in decisions.md
   - Runs quality gate (Anky spot-check) before proceeding to next phase
```

### 4b. Annotate Gap workflow with parallelism

In the Gap workflow.yaml (from Change 3), annotate which phases could have used sub-agent spawning:

- Phase 1 Argy research: Cycles 1, 2, 3, 4, 5 — Cycles 1-2 independent, Cycle 3b depends on 3, Cycles 4-5 independent. Optimal: spawn 4 parallel (1, 2, 4, 5), then 3, then 3b.
- Phase 3 Rex use case deep dives: 3 pilots independent of each other. Spawn 3 parallel.

This demonstrates the pattern's value with real data.

**Acceptance criteria**:
- Orchestrator sub-agent spawning rules exist in Palette
- Gap workflow.yaml annotates parallelizable phases
- Rules prevent the consistency problem (sub-agents don't touch shared state)

---

## Change 5: Skill Packs (Injectable Domain Context)

**Problem**: When Palette's agents work in specialized domains (Shopify, python-pptx, AWS CDK, retail AI), they rely entirely on the underlying LLM's training data. There's no mechanism to inject domain-specific knowledge that has been validated through Palette's impressions system.

**What OpenClaw does**: SKILL.md files with YAML frontmatter + instructions. Three tiers: bundled, managed (shared), workspace (per-agent). Hot-reloadable, gated by requirements.

**Implementation**:

### 5a. Define skill pack format

Create `/home/mical/fde/palette/skills/README.md`:

```markdown
# Palette Skill Packs

Skill packs inject validated domain knowledge into agent sessions. They bridge the gap between Palette's RIU taxonomy (which routes problems) and agent execution (which solves them).

## Format

Each skill pack is a markdown file at `palette/skills/<domain>/<skill-name>.md` with:

### Frontmatter (YAML)
- **id**: Skill identifier (e.g., `SKILL-001`)
- **name**: Human-readable name
- **domain**: Knowledge domain
- **for_agents**: Which Palette archetypes can use this skill (e.g., ["Theri", "Rex"])
- **triggers**: When this skill should be loaded (mapped to RIUs)
- **impressions**: Current impression count (follows Palette impressions system)
- **status**: UNVALIDATED / WORKING / PRODUCTION

### Body (Markdown)
Domain-specific knowledge, patterns, gotchas, and validated approaches. This content is injected into the agent's context when the skill is triggered.

## Rules

1. Skills are READ-ONLY context — they inform agent behavior but don't grant new capabilities.
2. Skills follow the impressions system: start at 0, earn trust through validated use.
3. Skills are loaded ONLY when relevant (not all skills all the time — context is precious).
4. A skill at PRODUCTION status (50+ impressions) can be trusted without spot-checking.
5. Skills should stay under 100 lines. If larger, split into sub-skills.
```

### 5b. Create example skill pack for Gap domain

Create `/home/mical/fde/palette/skills/retail-ai/enterprise-ai-strategy.md` as a validation example. Extract the reusable patterns from the Gap project that would help future retail AI strategy engagements:

- FDE model structure and positioning
- Three-Bucket ROI framework (Cost Reduction / Productivity / Cost Avoidance)
- Operations-first sequencing rationale
- LVMH Maison Autonomy governance pattern
- Behavior-change-over-training adoption approach
- Common CFO objections and responses
- Retail AI failure patterns to reference

This skill pack should be usable by Rex (architecture) and Yuty (narrative) on a future retail AI engagement without re-doing the Argy research.

**Acceptance criteria**:
- Skills README exists with format specification
- At least one example skill pack exists
- Skill pack is under 100 lines
- Content is extracted from validated Gap research (not invented)

---

## Change 6: Bootstrap File Separation

**Problem**: Palette conflates "who the agent is" (archetype), "what the agent knows" (tier context), and "what the user needs" (engagement context) into a single loading step. This makes engagement switching messy and agent context bloated.

**What OpenClaw does**: 6 separate bootstrap files (AGENTS.md, SOUL.md, TOOLS.md, IDENTITY.md, USER.md, BOOTSTRAP.md) with clear separation of concerns.

**Implementation**:

### 6a. Document the loading protocol

Add to `/home/mical/fde/palette/palette-core.md` a new section:

```
## Agent Loading Protocol

When loading a Palette agent into a session, context is assembled from 4 layers (in order):

1. **CORE** — `palette-core.md` (immutable Palette physics — never changes between engagements)
2. **AGENT** — Agent archetype definition (e.g., `agents/argentavis/argentavis.md` — defines who this agent is, what it can/cannot do)
3. **ENGAGEMENT** — Engagement-specific context:
   - `MEMORY.md` (canonical facts)
   - `decisions.md` (decision history)
   - `workflow.yaml` (phase structure, if exists)
   - Latest daily log (operational context)
4. **USER** — User preferences and profile (communication style, domain expertise, constraints)

### Loading Rules

- Layers 1 and 2 are STABLE — they change only when Palette or the agent definition is updated.
- Layers 3 and 4 are ENGAGEMENT-SPECIFIC — they change with every engagement.
- When switching engagements, only layers 3 and 4 need to change.
- When switching agents within an engagement, only layer 2 changes.
- This separation reduces context waste and makes agent/engagement switching clean.
```

### 6b. Create USER.md for Gap engagement

Create `/home/mical/fde/projects/gap/USER.md` with Mical's context relevant to this engagement:

- Name, role (applying for Gap Sr. Manager, AI Strategy)
- Domain expertise (7 years AWS Knowledge Architecture)
- Communication preferences (concise, no fluff, skeptical of hype)
- Anchor story reference (AWS behavior change proof point)
- Constraints (must be interview-ready, CFO-defensible numbers, no unverifiable claims)

**Acceptance criteria**:
- Loading protocol documented in palette-core.md
- Gap USER.md exists and is under 50 lines
- The 4-layer model is clear enough that any agent session could be assembled from it

---

## Validation: Retrofit Gap Project

After implementing all 6 changes above, validate by confirming:

### Structural checks
- [ ] `/home/mical/fde/projects/gap/MEMORY.md` exists with canonical numbers, decisions, gaps
- [ ] `/home/mical/fde/projects/gap/workflow.yaml` exists covering all 7 phases
- [ ] `/home/mical/fde/projects/gap/USER.md` exists with Mical's engagement context
- [ ] `palette-core.md` has Memory, Compaction, Loading Protocol sections
- [ ] `palette/workflows/README.md` exists with format spec
- [ ] `palette/skills/README.md` exists with format spec
- [ ] `palette/skills/retail-ai/enterprise-ai-strategy.md` exists
- [ ] RIU-607 (Compaction) and RIU-608 (Workflow) exist in taxonomy
- [ ] LIB-100 (Continuity) exists in knowledge library
- [ ] Orchestrator sub-agent spawning guidance exists

### Content checks
- [ ] Gap MEMORY.md flags all ROI conflicts identified in the Anky validation report
- [ ] Gap workflow.yaml shows where quality gates were missing
- [ ] Gap workflow.yaml annotates parallelizable Argy research phases
- [ ] Skill pack content is extracted from actual Gap research, not fabricated
- [ ] All new taxonomy/library entries use IDs that don't conflict with existing entries (check for duplicate IDs — there is a known duplicate issue with LIB-089 through LIB-093)

### Regression checks
- [ ] palette-core.md still contains all original content (new sections are ADDITIONS, not replacements)
- [ ] No existing RIU or LIB entries were modified
- [ ] No existing agent definitions were modified (Orchestrator is new guidance, not a rewrite)
- [ ] decisions.md in the Gap project was NOT modified (that's a separate task)
- [ ] No Gap research documents were modified (content fixes are a separate task)

---

## What This Does NOT Do

These changes improve Palette's **process infrastructure**. They do NOT fix the Gap project's content issues:

- ROI number reconciliation → separate task (Rex + Yuty)
- decisions.md update → separate task (human + Palette Core)
- ROI claim tightening → separate task (Rex)
- First-30-days plan → separate task (Theri)
- Interview answer library → separate task (Argy + Yuty)

Those fixes come AFTER these process improvements are validated, so they can benefit from the new memory/workflow/compaction patterns.
