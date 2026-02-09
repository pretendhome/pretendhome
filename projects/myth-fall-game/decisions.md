# Myth-Fall-Game: decisions.md

**Purpose**: Track project-specific decisions and agent performance on this game  
**Scope**: This project only  
**Location**: `/home/mical/projects/myth-fall-game/fde/decisions.md`  
**Toolkit Reference**: `/home/mical/palette/decisions.md` (global agent maturity)  
**Policy Reference**: `/home/mical/palette/.kiro/steering/TIER3_decisions_prompt.md`  
**Authority**: Subordinate to `palette-core.md`  
**Status**: ACTIVE  
**Logging Philosophy**: Minimal. Only what preserves project restartability.

---

## What This File Tracks

1. **Project-specific ONE-WAY DOORS**: Game architecture, tech stack, deployment decisions
2. **Agent Performance (This Project)**: How agents performed on game-specific tasks
3. **RIU Selection (This Project)**: Which RIUs were used for game features
4. **Project Engagements**: Building game features, solving game-specific problems

**What this does NOT track**: Toolkit improvements or global agent maturity (those go in toolkit's decisions.md)

---

## A) Toolkit-Changing ONE-WAY DOOR Decisions (Manual, Small, Kept Current)

Keep this short. Only decisions that change the toolkit itself.

- (none yet)

---

## Agent Maturity Tracking (Reference)

Track agent reliability state here. Update within Engagement Update blocks or maintain as separate section.

**Format**:
```
agent: <agent_name>
ark_type: <ARK:Type>
version: <X.Y>
status: UNVALIDATED | WORKING | PRODUCTION
impressions:
  success: <count>
  fail: <count>
  fail_gap: <count>
notes: <optional>
```

**Current agents**:

```
agent: argentavis
ark_type: ARK:Argentavis
version: 1.0
status: UNVALIDATED
impressions:
  success: 0
  fail: 0
  fail_gap: 0
notes: First agent implementation - conversational research agent
```

---

## Engagement Log (Append-Only - Add New Blocks Below)

Use the Engagement Update template from TIER3_decisions_prompt.md.

---
### Engagement Update: 2026-01-26 / BOOTSTRAP

#### Semantic Blueprint (Convergence Brief)
- **Goal**: Bootstrap Palette toolkit with three-tier system and agent specifications
- **Roles**: Human leads toolkit design; agents execute when implemented
- **Capabilities**: Tier 1-3 steering files, RIU taxonomy, fixture framework
- **Constraints**: Infrastructure-agnostic, stateless, append-only logging
- **Non-goals**: Not implementing production deployments yet
- **What changed since last update**: Initial toolkit structure established

#### Selected RIUs
- RIU-001 — Convergence Brief: Toolkit development engagement

#### Artifacts
- Created:
  - `.kiro/steering/palette-core.md` (Tier 1)
  - `.kiro/steering/assumptions.md` (Tier 2)
  - `.kiro/steering/palette/TIER3_decisions_prompt.md` (Tier 3 policy)
  - `.kiro/steering/palette/palette_taxonomy_v1_1.yaml` (RIU taxonomy)
  - `fde/decisions.md` (this file - Tier 3 ledger)

#### Next Checks
- Begin agent implementation starting with Argentavis
- Create fixture scenarios for validation
- Track agent maturity progression

---
---
### Agent Execution: 2026-01-26 14:30:42

**Agent**: argentavis v1.0
**Ark Type**: ARK:Argentavis
**Status**: UNVALIDATED
**Request**: test research request
**Outcome**: FAILURE
**Notes**: Placeholder - awaiting web_search integration



---
### Engagement Update: 2026-01-26 / ARGENTAVIS-IMPLEMENTATION

#### Semantic Blueprint
- **Goal**: Implement first Palette agent (Argentavis) as conversational research tool
- **Roles**: Mical designs structure, Kiro implements, Adam will be first user
- **Capabilities**: Clarifying questions, web search (pending integration), structured synthesis
- **Constraints**: Read-only, no decisions, must clarify before searching
- **Non-goals**: Not building all agents yet, not optimizing before validation
- **What changed**: First agent now exists and is testable

#### Selected RIUs
- RIU-511 — Agent Capability Design: Defined Argy's personality and constraints
- RIU-540 — Agent Fixture Design: Created ARG-001 test scenario
- RIU-003 — Implementation Scoping: Built minimal viable agent structure

#### Artifacts Created
- `fde/agents/argentavis/agent.json` (manifest)
- `fde/agents/argentavis/argy.py` (agent logic)
- `fde/agents/argentavis/prompts/system.md` (personality)
- `fde/agents/argentavis/fixtures/ARG-001-multiplayer-networking.md` (test fixture)

#### Agent Maturity Update
```
agent: argentavis
ark_type: ARK:Argentavis
version: 1.0
status: UNVALIDATED
impressions:
  success: 0
  fail: 0
  fail_gap: 0
notes: Structure validated, awaiting web_search integration
```

#### Next Checks
- Integrate web_search tool into argy.py
- Test with ARG-001 fixture
- Have Adam run first real research task
- Track success/failure for maturity progression

#### Open Questions
- How should Argy be invoked from Kiro CLI? (MCP integration pending)
- Should we build a wrapper script for easier invocation?
- What's the best way to present findings back to the user?

---


---
### Agent Execution: 2026-01-26 14:40-14:54

**Agent**: argentavis v1.0
**Ark Type**: ARK:Argentavis
**Status**: UNVALIDATED
**Request**: Research mythical games with power progression and magic systems, assess popularity vs technical sophistication
**Decision Context**: Gauging difficulty for Mythfall development - looking for popular games that weren't necessarily engineering-heavy

**Clarification Phase**:
1. Decision: Gauging difficulty
2. Existing research: Optimal Multiplayer Game Infrastructure PDF
3. Good enough: Top 20 by popularity, not exhaustive
4. Timeline: No urgency, proceed
5. Use: Review results together before building

**Research Conducted**:
- AAA mythical games (Black Myth: Wukong $70M, Genshin Impact $1.7B, Elden Ring 30M copies)
- Indie mythical games (Hades 20-person team GOTY, Dead Cells small coop, Slay the Spire tiny team)
- Pattern analysis: Small teams CAN succeed, engineering complexity ≠ success
- Key finding: Hades (20 people) proves indie-scale mythical games can win GOTY

**Artifacts Created**:
- `RESEARCH_HANDOFF_ADAM.md` - Research summary with 12 verification questions for Adam

**Outcome**: SUCCESS (paused for human verification as requested)
**Notes**: First real Argy execution. Clarified before searching, found actionable patterns, created structured handoff. Workflow paused pending Adam's verification - no decisions made yet.

**Agent Maturity Update**:
```
agent: argentavis
ark_type: ARK:Argentavis
version: 1.0
status: UNVALIDATED
impressions:
  success: 1
  fail: 0
  fail_gap: 1
notes: First successful research execution - clarified intent, searched strategically, synthesized findings, paused for verification

agent: rex
ark_type: ARK:Tyrannosaurus
version: 1.0
status: UNVALIDATED
impressions:
  success: 0
  fail: 0
  fail_gap: 0
notes: Architect agent - evaluates options, surfaces tradeoffs, flags ONE-WAY DOOR decisions
```

---


---
### Engagement Update: 2026-01-26 / REX-IMPLEMENTATION

#### Semantic Blueprint
- **Goal**: Implement second Palette agent (Rex) as architecture decision tool
- **Roles**: Mical designs structure, Kiro implements, Adam will use for architecture decisions
- **Capabilities**: Option evaluation, tradeoff analysis, ONE-WAY DOOR detection, constraint-based recommendations
- **Constraints**: Must not implement, must not decide, must flag irreversible decisions
- **Non-goals**: Not building all agents yet, not testing until Adam needs architecture decisions
- **What changed**: Second agent now exists and is ready for use

#### Selected RIUs
- RIU-511 — Agent Capability Design: Defined Rex's personality and constraints
- RIU-540 — Agent Fixture Design: Created REX-001 test scenario
- RIU-003 — Implementation Scoping: Built minimal viable architect agent

#### Artifacts Created
- `fde/agents/rex/rex.md` (steering file)
- `fde/agents/rex/fixtures/REX-001-multiplayer-architecture.md` (test fixture)

#### Agent Maturity Update
```
agent: rex
ark_type: ARK:Tyrannosaurus
version: 1.0
status: UNVALIDATED
impressions:
  success: 0
  fail: 0
  fail_gap: 0
notes: Structure created, awaiting first architecture decision
```

#### Next Checks
- Test Rex with REX-001 fixture (multiplayer architecture decision)
- Have Adam use Rex for real architecture decisions after research verification
- Track success/failure for maturity progression
- Build Theri (Builder) next for implementation phase

---


---
### Engagement Update: 2026-01-27 / PRODUCT-VISION-DEFINITION

#### Semantic Blueprint (Convergence Brief)
- **Goal**: Define core product vision and gameplay for MythFall before architecture decisions
- **Roles**: Adam defines product vision; Kiro documents and structures decisions
- **Capabilities**: Product decision hierarchy, gameplay definition, scope prioritization
- **Constraints**: 2-person team (Adam + Mical), quality over timeline, PoC focus
- **Non-goals**: Not defining technical architecture yet, not building anything yet
- **What changed since last update**: Shifted from research verification to product definition

#### Selected RIUs
- RIU-001 — Convergence Brief: Product vision definition engagement
- RIU-004 — Problem → Workstream Decomposition: Breaking down gameplay systems
- RIU-005 — Scope Freeze: Defining PoC vs Phase 2+ features

#### Product Vision Decisions (Questions 1-12)

**Q1: Team & Timeline**
- Team: 2 people (Adam + Mical), full-time
- Timeline: Quality over speed, PoC when ready (not time-boxed)
- Implication: Micro-indie scope, ruthless prioritization required

**Q2: PoC Definition**
- Focus: Proof of concept (technical + gameplay validation)
- Priority: Quality and rollout over timeline
- Goal: Testable with friends, validates core vision

**Q3: Core Emotional Experience**
- Primary emotion: Deep immersion + curiosity-driven exploration
- Reference: ARK Survival Ascended experience
- Anti-pattern: NOT Fortnite/FPS addiction loops
- Success metric: Players think about game when not playing, search YouTube for knowledge
- Design principle: Mystery, depth, discoverable systems, "iceberg" content

**Q4: Engagement Hooks**
- Top 3 hooks:
  1. Hidden knowledge (secrets to discover, systems to learn)
  2. Unfinished goals (clear objectives pulling you back)
  3. Build/create vision (player expression/creativity)
- Implication: Need discoverable knowledge systems, clear goal structures, creative outlets

**Q5: Knowledge Discovery Method**
- Primary: Explorer Notes (ARK-style)
- Format: Written notes/scrolls/tablets scattered in world
- Tone: Can range from cryptic to clear
- Implication: Need note collection system, readable UI, strategic world placement

**Q6: Explorer Note Content**
- Content mix: Practical knowledge + Lore/story (blended)
- Style: Story that teaches ("I discovered X at location Y...")
- Benefit: Immersive AND useful
- Example: "I climbed the peak and claimed Zeus's lightning..." (tells story + hints location)

**Q7: Core Gameplay Loop**
- Style: Exploration (A) + Self-directed goals (C variant)
- No traditional quests: Players create their own objectives
- Player agency: Choose to build shelter OR hunt bosses OR explore
- Sense of duty: Environmental cues guide without forcing
- Systems needed:
  - Building system (shelter construction)
  - Boss encounters (hunt for powers)
  - Endgame PvP (level-gated combat arenas, separate servers, same aesthetic)

**Q8: Building System Scope**
- Long-term vision: ARK-style building with enhanced flexibility
- Enhancement: More flexible pieces (triangle walls for gaps)
- Full system: Resource gathering, snap-together pieces, crafting

**Q9: Building Priority**
- PoC: Building postponed
- Phase 1: Simple pre-made structures (placeable)
- Phase 2+: Evolve toward ARK-style system
- Rationale: Appeals to subset of players, very complex, not core to initial testing
- PoC focus: Characters, entities, core gameplay (testable with friends)

**Q10: PoC Core Features (MUST HAVE)**
- ✅ Player character (3D model, animations)
- ✅ Movement (walk, run, jump)
- ✅ Camera controls (1st person)
- ✅ See other players in world (multiplayer sync, 2-5 friends)
- ✅ Basic attack (melee)
- ✅ XP/leveling system (simple)
- ✅ Character gets stronger (limited stats for now)

**PoC Deferred to Phase 2+:**
- ⏸️ Mythic powers (add after basic combat works)
- ⏸️ Enemies/creatures (add after player combat works)
- ⏸️ Explorer notes (add after world exists)
- ⏸️ Large explorable zones (start with small test map)
- ⏸️ Building system (simple placeable structures first)

**Q11: Combat Feel**
- Style: First-person melee, practical/survival-focused
- Reference: ARK/Minecraft style
- Complexity: Simple, easy to implement
- Visual effects: None for PoC (no VFX)
- Approach: Start simple, iterate based on what works
- Implementation: Basic raycast hit detection, simple damage system, minimal animation

**Q12: Mythic Powers System (Phase 2+)**
- Character creation: Choose "race" (Blox Fruits style) at start
- Race determines: Type of magical power you'll develop
- Progression arc:
  - Early game: Weak, forced to use mundane tools (Minecraft/ARK style)
  - Mid game: Level up + beat bosses → gain magical abilities
  - End game: Full magical power, fit for hard combat/PvP
- Design: Mundane survivor → Mythic warrior transformation
- Systems needed: Race selection, power progression tied to bosses, transformation/power-up

#### Artifacts
- Updated: `fde/decisions.md` (this file - product vision documented)

#### Open Questions (Remaining)
- Q13: What are the races/magic types? (How many for PoC? Which pantheons?)
- Q14: What does the small PoC map look like? (Size, landmarks, atmosphere?)
- Q15: How does XP/leveling work? (What gives XP? How much per level? What do levels do?)
- Q16: What are the limited stats for PoC? (Health? Damage? Speed? How many?)
- Q17: How does melee combat actually work? (Click to swing? Combos? Blocking?)
- Q18: What do other players see when they look at you? (Character model? Customization?)
- Q19: How does multiplayer sync work? (Server authoritative? Client prediction?)
- Q20: What's the visual style? (Anime-inspired but how? Realistic? Stylized? Low-poly?)

#### Next Checks
- Continue product questions (Q13-20)
- Once product vision complete, move to Rex (Architect) for technical decisions
- Document all decisions before any implementation begins

#### ONE-WAY DOORS Identified
- 🚨 Race/magic system design (determines entire power progression)
- 🚨 First-person vs third-person camera (affects all animation/combat work)
- 🚨 Building system scope (ARK-style is months of work)
- 🚨 Multiplayer architecture (instanced zones, player count, sync method)

---
