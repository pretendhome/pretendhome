# Rossi Mission Project - Agent Workflow Guide

**Purpose**: Quick reference for executing agent-based business plan generation  
**Date**: 2026-02-06  
**Status**: Ready for execution

---

## Workflow Overview

```
Argy (research) → Rex (architecture) → Yuty (narrative) → Anky (validation) → iterate
```

**Current status**: Argy research complete (6 reports), ready for Rex

---

## Agent Files

### Rex (Architect)
**Location**: `/home/mical/rossi-mission-project/architecture/rex/rex-rossi-tuned.md`  
**Load command**: Load this file in Kiro to activate Rex  
**Input**: Argy's 6 research reports + convergence brief  
**Output**: Business model architecture document  
**Key task**: Make architectural decisions, flag ONE-WAY DOORS, present options with tradeoffs

### Yuty (Narrative)
**Location**: `/home/mical/rossi-mission-project/presentation/yuty/yuty-rossi-tuned.md`  
**Load command**: Load this file in Kiro to activate Yuty  
**Input**: Rex's architecture + Argy's research  
**Output**: 10 business plan sections (executive summary → expansion roadmap)  
**Key task**: Transform architecture into grant-ready narrative with evidence citations

### Anky (Validator)
**Location**: `/home/mical/rossi-mission-project/validation/anky/anky-rossi-tuned.md`  
**Load command**: Load this file in Kiro to activate Anky  
**Input**: Yuty's narrative sections + Rex's architecture + Argy's research  
**Output**: Validation report with go/no-go + revision recommendations  
**Key task**: Check evidence, verify case study patterns, validate constraints

---

## Execution Steps

### Phase 1: Architecture (Rex)

1. **Load Rex**: Load `/home/mical/rossi-mission-project/architecture/rex/rex-rossi-tuned.md`
2. **Provide context**: "Generate business model architecture for Rossi Mission Project"
3. **Rex will**:
   - Review Argy's 6 research reports
   - Make architectural decisions (expansion strategy, revenue model, operations)
   - Flag 🚨 ONE-WAY DOOR decisions for human confirmation
   - Apply 6 case study patterns
   - Output architecture document
4. **Human reviews**: Confirm ONE-WAY DOOR decisions
5. **Save output**: `/home/mical/rossi-mission-project/architecture/rex/rossi-architecture-v1.md`

### Phase 2: Narrative Generation (Yuty)

1. **Load Yuty**: Load `/home/mical/rossi-mission-project/presentation/yuty/yuty-rossi-tuned.md`
2. **Provide context**: "Generate business plan sections from Rex's architecture"
3. **Yuty will**:
   - Generate sections one-by-one (human reviews after each)
   - Section order: Executive Summary → Mission/Vision → Market Analysis → Competitive Landscape → Artist Pipeline → Revenue Model → Operations → Financials → Risks → Roadmap
   - Cite research evidence for every claim
   - Apply case study patterns
   - Match tone to audiences (grant funders, impact investors, partner galleries)
4. **Human reviews**: After each section, confirm quality or request revisions
5. **Save outputs**: `/home/mical/rossi-mission-project/presentation/yuty/section-[N]-[name].md`

### Phase 3: Validation (Anky)

1. **Load Anky**: Load `/home/mical/rossi-mission-project/validation/anky/anky-rossi-tuned.md`
2. **Provide context**: "Validate [section name]" (or "Validate complete business plan")
3. **Anky will**:
   - Check evidence citations (every claim grounded in research?)
   - Verify case study patterns (all 6 applied correctly?)
   - Validate audience appropriateness (tone matches grant funders, investors, partners?)
   - Check Rossi constraints (50/50 split, three pillars, nonprofit structure)
   - Assess financial realism (projections conservative and research-based?)
   - Verify risk coverage (known risks addressed?)
   - Deliver go/no-go assessment
4. **If CONDITIONAL or NO-GO**: Route back to Yuty for revisions
5. **If GO**: Proceed to next section or finalize
6. **Save output**: `/home/mical/rossi-mission-project/validation/anky/validation-[section-name].md`

### Phase 4: Iteration

- If Anky finds issues → Yuty revises → Anky re-validates
- If research gaps found → Argy conducts targeted research → Rex/Yuty incorporate
- If architectural changes needed → Rex revises → Yuty regenerates affected sections

---

## Research Reports (Argy - Already Complete)

**Location**: `/home/mical/rossi-mission-project/research/argy/`

1. **task-1-global-markets.md** - Global graffiti/street art markets, geographic opportunities
2. **task-2-nonprofit-vs-forprofit.md** - Organizational structure analysis, legal requirements
3. **task-3-governance-models.md** - Nonprofit governance models, board composition
4. **task-4-grant-landscape.md** - Grant funding sources, amounts, reliability
5. **task-5-comparable-organizations.md** - Case studies (Stüssy, Supreme, ALIFE, GX1000, Chito, Barry McGee)
6. **task-6-revenue-models.md** - Revenue stream analysis, diversification strategies

---

## Case Study Patterns (Must Apply)

All agents are tuned to apply these 6 validated patterns:

1. **Scarcity Economics** (Supreme) - Breadth over depth expansion
2. **Community-Before-Commerce** (Stüssy International Tribe) - Cultural fit over revenue
3. **Content-Driven Discovery** (GX1000) - Documentation as operational function
4. **Artist Career Pipeline** (Chito → Barry McGee) - Signature style + champion + documentation
5. **Diversified Revenue** (6-7 streams minimum) - Protection against single-source failure
6. **Distributed Governance** (ALIFE/FA cautionary tale) - Eliminate founder dependency

---

## Decision Tracking

**Location**: `/home/mical/rossi-mission-project/decisions/decisions.md`

- Rex logs ONE-WAY DOOR decisions automatically
- Human confirms before proceeding
- Anky references decisions during validation
- Maintains decision lineage for restartability

---

## Output Structure

```
/home/mical/rossi-mission-project/
├── research/
│   └── argy/
│       ├── task-1-global-markets.md ✓
│       ├── task-2-nonprofit-vs-forprofit.md ✓
│       ├── task-3-governance-models.md ✓
│       ├── task-4-grant-landscape.md ✓
│       ├── task-5-comparable-organizations.md ✓
│       └── task-6-revenue-models.md ✓
├── architecture/
│   └── rex/
│       ├── rex-rossi-tuned.md (agent prompt)
│       └── rossi-architecture-v1.md (output - to be generated)
├── presentation/
│   └── yuty/
│       ├── yuty-rossi-tuned.md (agent prompt)
│       ├── section-1-executive-summary.md (to be generated)
│       ├── section-2-mission-vision.md (to be generated)
│       ├── section-3-market-analysis.md (to be generated)
│       ├── section-4-competitive-landscape.md (to be generated)
│       ├── section-5-artist-pipeline.md (to be generated)
│       ├── section-6-revenue-model.md (to be generated)
│       ├── section-7-operations.md (to be generated)
│       ├── section-8-financials.md (to be generated)
│       ├── section-9-risks.md (to be generated)
│       └── section-10-roadmap.md (to be generated)
├── validation/
│   └── anky/
│       ├── anky-rossi-tuned.md (agent prompt)
│       └── validation-*.md (to be generated)
└── decisions/
    └── decisions.md (tracking ONE-WAY DOORS)
```

---

## Next Action

**Ready to begin**: Load Rex and start architecture phase.

**Command**: Load `/home/mical/rossi-mission-project/architecture/rex/rex-rossi-tuned.md` and say "Generate business model architecture for Rossi Mission Project"

---

**Workflow guide complete. Ready for execution.**
