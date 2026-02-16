# Decisions.md Structure - COMPLETE ✓

**Date**: 2026-01-29  
**Status**: Clarified and separated

---

## Final Structure

```
/home/mical/palette/                              # TOOLKIT
├── .kiro/steering/
│   ├── palette-core.md                           # Tier 1: Core prompt
│   ├── assumptions.md                            # Tier 2: Agent definitions
│   └── TIER3_decisions_prompt.md                 # Tier 3: POLICY (how to use decisions.md)
└── decisions.md                                  # Tier 3: LEDGER (toolkit engagements)

/home/mical/projects/myth-fall-game/              # PROJECT
├── .kiro/steering/
│   ├── product.md                                # Game-specific
│   ├── tech.md
│   └── structure.md
└── fde/
    └── decisions.md                              # Project engagements
```

---

## Two decisions.md Files

### Toolkit decisions.md (`/home/mical/palette/decisions.md`)

**Tracks**:
1. **Toolkit-changing ONE-WAY DOORS**
   - Adding new agent archetypes
   - Changes to RIU taxonomy
   - Changes to core rules (palette-core.md, assumptions.md)

2. **Agent Maturity (Global)**
   - Aggregate performance across ALL projects
   - "Argentavis v1.0: 15 successes across 3 projects → WORKING"

3. **RIU → Agent Routing (General)**
   - "RIU-042 (Competitive Analysis) → Argentavis"
   - Default routing rules for all projects

4. **Toolkit Development Engagements**
   - Building new agents
   - Expanding knowledge library
   - Refining taxonomy

---

### Project decisions.md (`/home/mical/projects/myth-fall-game/fde/decisions.md`)

**Tracks**:
1. **Project-specific ONE-WAY DOORS**
   - Game architecture decisions
   - Tech stack choices
   - Deployment strategy

2. **Agent Performance (This Project)**
   - "Argentavis succeeded on 5 game research tasks"
   - "Tyrannosaurus excelled at multiplayer architecture"

3. **RIU Selection (This Project)**
   - "Used RIU-109 for game server architecture"
   - Which RIUs were selected for game features

4. **Project Engagements**
   - Building game features
   - Solving game-specific problems

---

## Information Flow

```
Project decisions.md
    ↓
    "Argy succeeded 5 times on game research"
    ↓
Toolkit decisions.md
    ↓
    "Argy has 15 total successes across projects → promote to WORKING"
    ↓
assumptions.md
    ↓
    Updated Argy status to WORKING
```

---

## Key Distinction

**Toolkit decisions.md**:
- "How do we improve Palette itself?"
- "Is Argentavis ready for PRODUCTION tier (globally)?"
- "Which agent handles which RIU in general?"

**Project decisions.md**:
- "How do we solve this game's problems?"
- "Did agents work well on this game's tasks?"
- "Which RIUs apply to this game feature?"

---

## Both Follow Same Format

Both files use the template from `TIER3_decisions_prompt.md`:
- Semantic Blueprint
- Candidate RIUs
- Selected RIUs
- ONE-WAY DOORS
- Artifacts
- Agent Execution Log
- Reasoning Trace (when needed)
- Post-Mortem (when agent fails)

The difference is **scope**: toolkit vs project.

---

## For Demo Today

When showing file structure:

1. **Show `/home/mical/palette/decisions.md`**
   - "This tracks toolkit development and global agent maturity"

2. **Show `/home/mical/projects/myth-fall-game/fde/decisions.md`**
   - "This tracks game-specific decisions and agent performance on this project"

3. **Explain separation**:
   - "Agent performance from projects feeds into toolkit decisions"
   - "When agents prove reliable across projects, they get promoted globally"
   - "Each project has its own decisions.md, but they all reference the same toolkit"

---

## Status: READY ✓

Clear separation between toolkit and project decisions. Both follow same format, different scope.
