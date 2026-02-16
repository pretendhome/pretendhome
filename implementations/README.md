# Palette Implementations

**Purpose**: Real-world implementations demonstrating Palette's three-tier agent system in action.

Each implementation is a **complete, standalone use case** that shows how Palette agents (Argy, Rex, Theri, Anky, Yuty, Raptor, Para) work together to solve complex problems.

---

## What is an Implementation?

An implementation is:
- ✅ A **real project** with real outcomes (not a demo or example)
- ✅ A **learning artifact** that extracts patterns back to Palette core
- ✅ A **reference** for future similar work
- ✅ **Self-contained** with all context, decisions, and artifacts

An implementation is NOT:
- ❌ A one-off script or quick hack
- ❌ Work-in-progress without clear outcomes
- ❌ Undocumented or context-free code

---

## Current Implementations

### Talent (Career & Hiring)
- **talent-job-search**: End-to-end job search and interview preparation system
- **talent-gap-interview**: Gap Inc AI Strategy Manager interview prep
- **talent-glean-interview**: Glean AI Outcomes Manager interview prep

### Development (Software & Games)
- **dev-mythfall-game**: Multiplayer RPG game (Godot + Node.js)

### Education (Schools & Curriculum)
- **education-la-scuola**: La Scuola high school improvement planning

### Finance (Planning & Analysis)
- **finance-buffett-retirement**: Buffett-inspired retirement planning tool

### Retail (Store & Promotion)
- **retail-rossi-store**: Rossi Mission graffiti art gallery store promotion

---

## Implementation Structure

Every implementation follows this structure:

```
implementation-name/
├── README.md                  # What, why, how to use
├── STATUS.md                  # Current state, next actions, blockers
├── decisions.md               # Palette decision log (ONE-WAY/TWO-WAY doors)
├── LEARNINGS.md               # Patterns, skills, RIUs to extract
├── .palette-meta.yaml         # Machine-readable metadata
│
├── artifacts/                 # Final deliverables
│   ├── deliverable-1.md
│   └── deliverable-2.pdf
│
├── research/                  # Background research (Argy outputs)
│   ├── market-analysis.md
│   └── competitive-landscape.md
│
├── architecture/              # System design (Rex outputs)
│   ├── system-architecture.md
│   └── data-model.md
│
├── build/                     # Implementation (Theri outputs)
│   ├── code/
│   ├── configs/
│   └── scripts/
│
├── validation/                # Quality checks (Anky outputs)
│   ├── test-results.md
│   └── validation-report.md
│
└── archive/                   # Old versions, deprecated work
    └── v1-deprecated/
```

---

## How to Use This

### Starting a New Implementation

1. **Copy the template structure**:
   ```bash
   cp -r _IMPLEMENTATION_TEMPLATE domain-name-implementation
   ```

2. **Fill in metadata**:
   - Edit `README.md` (what, why, how)
   - Edit `.palette-meta.yaml` (metadata)
   - Create `decisions.md` (start logging decisions)

3. **Work through Palette phases**:
   - **Research** (Argy) → outputs to `/research`
   - **Architecture** (Rex) → outputs to `/architecture`
   - **Build** (Theri) → outputs to `/build`
   - **Validate** (Anky) → outputs to `/validation`

4. **Extract learnings**:
   - Fill in `LEARNINGS.md` as you go
   - Identify patterns, skills, RIUs to extract
   - Update Palette core when ready

### Completing an Implementation

1. **Finalize artifacts**: Move final deliverables to `/artifacts`
2. **Complete LEARNINGS.md**: Document all patterns and extractions
3. **Update STATUS.md**: Mark as complete
4. **Extract to Palette**:
   - Add skills to `/palette/skills/`
   - Add/refine RIUs in taxonomy
   - Update knowledge library
   - Update steering files if needed

### Archiving an Implementation

1. **Update STATUS.md**: Mark as archived with reason
2. **Update .palette-meta.yaml**: Set `status: archived`
3. **Move to archive** (optional): `mv implementation-name _archived/implementation-name`

---

## Naming Convention

**Pattern**: `domain-name-type`

**Domains**:
- `talent-` — Career, hiring, job search
- `dev-` — Software development, games, tools
- `education-` — Schools, curriculum, learning
- `finance-` — Financial planning, analysis, investing
- `retail-` — Stores, e-commerce, promotion
- `health-` — Healthcare, wellness, fitness
- `legal-` — Legal research, contracts, compliance
- `creative-` — Art, music, writing, design

**Examples**:
- `talent-gap-interview` — Gap Inc interview prep
- `dev-mythfall-game` — Mythfall game development
- `education-la-scuola` — La Scuola school planning
- `finance-buffett-retirement` — Retirement planning
- `retail-rossi-store` — Store promotion

---

## Learning Flow

```
Implementation
    ↓
    Extracts patterns/skills
    ↓
Palette Skills (/palette/skills/)
    ↓
    Validates as reusable
    ↓
Palette Taxonomy (adds/refines RIUs)
    ↓
    Promotes to core
    ↓
Palette Core (updates steering files)
```

**Key principle**: Every implementation should **give back** to Palette core.

---

## Metrics

Track these in `.palette-meta.yaml`:
- **Time invested** (hours by phase)
- **Artifacts created** (count)
- **Decisions logged** (count)
- **Quality score** (0-100)
- **Skills extracted** (list)
- **RIUs demonstrated** (list)

---

## Templates

- `_LEARNINGS_TEMPLATE.md` — Template for LEARNINGS.md
- `_PALETTE_META_TEMPLATE.yaml` — Template for .palette-meta.yaml
- `_IMPLEMENTATION_TEMPLATE/` — (to be created) Full implementation template

---

## Questions?

See:
- [Palette README](/palette/README.md) — Core system overview
- [Palette Taxonomy](/palette/taxonomy/) — RIU definitions
- [Palette Skills](/palette/skills/) — Extracted skills library
- [Palette Agents](/palette/agents/) — Agent archetypes

---

**Last Updated**: 2026-02-16
