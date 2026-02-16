# Decisions.md Strategy: Toolkit vs Project

**Issue**: Two decisions.md files exist but their separation isn't clear.

---

## The Distinction

### `/home/mical/palette/decisions.md` (TOOLKIT)

**Purpose**: Track decisions that improve the toolkit itself

**Contains**:
1. **Toolkit-changing ONE-WAY DOORS**
   - Changes to agent archetypes (adding new agent types)
   - Changes to RIU taxonomy structure
   - Changes to maturity promotion/demotion rules
   - Changes to core prompt (palette-core.md)
   - Changes to agent definitions (assumptions.md)

2. **Agent Maturity Tracking (GLOBAL)**
   - Agent performance across ALL projects
   - Promotion/demotion decisions based on aggregate performance
   - "Argentavis v1.0 promoted to WORKING after 10 successes across 3 projects"

3. **RIU → Agent Routing Decisions (GENERAL)**
   - "RIU-042 (Competitive Analysis) routes to Argentavis"
   - "RIU-109 (System Architecture) routes to Tyrannosaurus"
   - General routing rules that apply to any project

4. **Toolkit Development Engagements**
   - Building new agents
   - Expanding knowledge library
   - Refining taxonomy
   - Validating framework changes

**Example Entry**:
```
---
### Toolkit Update: 2026-01-29 / 1

#### Decision: Add Ankylosaurus (Validator) Agent
- **Type**: 🚨 ONE-WAY DOOR (toolkit-changing)
- **Rationale**: Need dedicated validation agent for risk assessment
- **RIUs Affected**: RIU-182, RIU-530
- **Agent Definition**: Added to assumptions.md
- **Status**: APPROVED

#### Agent Maturity Update
- Argentavis v1.0: success=15, fail=1, fail_gap=12, status=WORKING (promoted)
- Tyrannosaurus v1.0: success=8, fail=0, fail_gap=8, status=UNVALIDATED
```

---

### `/home/mical/projects/myth-fall-game/fde/decisions.md` (PROJECT)

**Purpose**: Track decisions specific to Myth-Fall-Game project

**Contains**:
1. **Project-specific ONE-WAY DOORS**
   - Game architecture decisions
   - Technology stack choices
   - Deployment strategy
   - Data model design

2. **Agent Performance (PROJECT-SPECIFIC)**
   - How agents performed on THIS project's tasks
   - "Argentavis struggled with game design research (domain mismatch)"
   - "Tyrannosaurus excelled at multiplayer architecture"

3. **RIU Selection (PROJECT-SPECIFIC)**
   - Which RIUs were selected for this project's problems
   - "Used RIU-109 for game server architecture"
   - "RIU-156 for player state management"

4. **Project Engagements**
   - Building game features
   - Solving game-specific problems
   - Integrating with game infrastructure

**Example Entry**:
```
---
### Engagement: Multiplayer Architecture Design (2026-01-26)

#### Convergence Brief
- **Goal**: Design scalable multiplayer architecture for Myth-Fall-Game
- **Constraints**: Must support 100+ concurrent players, WebSocket-based
- **Non-goals**: Not building the implementation yet

#### RIUs Selected
- RIU-109 (System Architecture Design)
- RIU-156 (Workflow Orchestration)

#### Agent Execution
- Tyrannosaurus v1.0: Designed architecture, flagged ONE-WAY DOOR (WebSocket vs WebRTC)
- Status: SUCCESS
- Project-specific note: Rex excelled at game architecture (domain fit)

#### Artifacts
- Created: multiplayer-architecture.md
```

---

## The Key Difference

**Toolkit decisions.md**:
- "How do we improve Palette itself?"
- "Which agent handles which RIU in general?"
- "Is Argentavis ready for PRODUCTION tier?"

**Project decisions.md**:
- "How do we solve this game's problems?"
- "Which RIUs apply to this game feature?"
- "Did agents work well on this game's tasks?"

---

## Information Flow

```
Project decisions.md
    ↓
    (Agent performance data)
    ↓
Toolkit decisions.md
    ↓
    (Aggregate performance → maturity promotion)
    ↓
Updated agent definitions in assumptions.md
```

**Example**:
1. Myth-Fall-Game project: "Argentavis succeeded on 5 research tasks"
2. Another project: "Argentavis succeeded on 5 more research tasks"
3. Toolkit decisions.md: "Argentavis has 10 total successes → promote to WORKING"
4. assumptions.md: Updated Argentavis status to WORKING

---

## Proposed Structure

### Toolkit decisions.md Header

```markdown
# Palette Toolkit: decisions.md

**Purpose**: Track toolkit development and agent maturity across all projects  
**Scope**: Global (affects all projects using Palette)  
**Location**: `/home/mical/palette/decisions.md`

---

## A) Toolkit-Changing ONE-WAY DOOR Decisions

Only decisions that change the toolkit itself.

- 2026-01-29: Added Ankylosaurus (Validator) agent
- 2026-01-27: Expanded knowledge library to 86 questions

---

## B) Agent Maturity Tracking (Global)

Aggregate performance across all projects.

**Argentavis v1.0**:
- Status: WORKING
- Impressions: success=15, fail=1, fail_gap=12
- Projects used: myth-fall-game, demo-design
- Promoted: 2026-01-29

**Tyrannosaurus v1.0**:
- Status: UNVALIDATED
- Impressions: success=8, fail=0, fail_gap=8
- Projects used: myth-fall-game, demo-design

---

## C) RIU → Agent Routing (General Rules)

Default routing rules for all projects.

- RIU-042 (Competitive Analysis) → Argentavis
- RIU-109 (System Architecture) → Tyrannosaurus
- RIU-143 (Technical Documentation) → Yutyrannus
- RIU-182 (Quality Assurance) → Ankylosaurus

---

## D) Toolkit Development Engagements

[Append-only log of toolkit improvements]
```

### Project decisions.md Header

```markdown
# Myth-Fall-Game: decisions.md

**Purpose**: Track project-specific decisions and agent performance  
**Scope**: This project only  
**Location**: `/home/mical/projects/myth-fall-game/fde/decisions.md`  
**Toolkit Reference**: `/home/mical/palette/decisions.md`

---

## A) Project-Specific ONE-WAY DOOR Decisions

Decisions specific to this game.

- 2026-01-26: Chose WebSocket over WebRTC for multiplayer
- 2026-01-25: Selected Cloudflare Durable Objects for state management

---

## B) Agent Performance (This Project)

How agents performed on game-specific tasks.

**Argentavis v1.0**:
- Tasks: 3 research engagements (game design patterns, competitor analysis)
- Success: 3/3
- Notes: Excelled at game industry research

**Tyrannosaurus v1.0**:
- Tasks: 2 architecture engagements (multiplayer, state management)
- Success: 2/2
- Notes: Strong domain fit for game architecture

---

## C) Project Engagements

[Append-only log of game development work]
```

---

## Recommendation

**Update both files with clear headers** that explain:
1. What each file tracks
2. How they differ
3. How information flows between them

**Toolkit decisions.md**:
- Global agent maturity
- General RIU routing rules
- Toolkit improvements

**Project decisions.md**:
- Project-specific decisions
- Project-specific agent performance
- Project-specific RIU selections

---

## ONE-WAY DOOR Decision Required

🚨 **Approve this separation strategy?**

If approved, I'll:
1. Update `/home/mical/palette/decisions.md` header (toolkit focus)
2. Update `/home/mical/projects/myth-fall-game/fde/decisions.md` header (project focus)
3. Create template for future projects

**Do you approve?**
