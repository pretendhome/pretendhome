# Argy Research Directive: Company-to-RIU Mapping Library

**Agent**: Argentavis (Research)  
**Date**: 2026-02-10  
**Purpose**: Build a company-to-RIU mapping library that validates which AI problems are real (funded companies = market validation)

---

## Research Mission

Build a structured library mapping AI companies to Palette RIUs (Repeatable Implementation Units). This library will:

1. **Validate RIUs** - Companies getting funded = real problems worth solving
2. **Identify gaps** - RIUs with no companies = potential white space
3. **Enable teaching** - Show students which AI problems are hot (most companies/funding)
4. **Integrate with Palette** - Extend taxonomy with market validation data

---

## Research Tasks (In Order)

### Task 1: Structure Research (Perplexity - 15 minutes)

**Question**: What's the optimal YAML structure for a company-to-RIU mapping library that integrates with Palette's existing taxonomy?

**Context to provide Perplexity**:
- Palette has 104 RIUs (problem patterns like "Convergence Brief", "Webhook Reliability", "Customer Problem Narrative")
- RIUs are grouped by workstreams: Clarify & Bound, Interfaces & Inputs, Core Logic, Quality & Safety, Ops & Delivery, Adoption & Change
- We need to map AI companies to the RIUs they solve
- We want to group by use_cases (parent structure)
- We want to identify RIUs with NO companies (gaps/white space)
- Structure must support queries like: "Show me all companies solving RIU-050" AND "Show me all RIUs in the 'customer support' use case"

**Research Questions**:
1. Should we use use_case → RIU → companies hierarchy?
2. Should we use RIU → companies with use_case tags?
3. How do we handle companies solving multiple RIUs?
4. How do we represent "gap RIUs" (no companies yet)?
5. What metadata matters? (funding stage, founding year, agentic-native flag, etc.)

**Deliverable**: Recommend 2-3 YAML structure options with pros/cons for Palette integration

---

### Task 2: AI Company Research (Perplexity - 45 minutes)

**Strategy**: Work backwards from AI-focused incubators/accelerators to get comprehensive company lists

**Priority 1: Agentic-Native Companies (2023-2026)**
- Companies building with agents as core architecture
- Multi-agent systems
- Agent orchestration platforms
- Autonomous workflow systems

**Priority 2: Recent AI Startups (2023-2026)**
- YC batches (W23, S23, W24, S24, W25, S25, W26)
- a16z AI portfolio
- Sequoia AI investments
- Greylock AI companies
- Benchmark AI portfolio

**Priority 3: AI-First Companies (Any Stage)**
- Companies where AI is the product (not a feature)
- Focus on B2B/enterprise (matches Palette's FDE context)

**For Each Company, Capture**:
- Name
- Founded year
- Funding stage + amount (if public)
- One-line description
- Specific use case (concrete problem they solve)
- Which Palette RIU(s) they map to (your best guess based on problem pattern)
- Agentic-native flag (yes/no)
- Source URL

**Research Sources**:
1. YC company directory (filter by AI, recent batches)
2. Crunchbase AI startup lists
3. a16z portfolio page
4. "AI startup landscape" reports (2024-2026)
5. TechCrunch AI funding announcements
6. Incubator/accelerator batch announcements

**Target**: 100-200 companies minimum (prioritize breadth over depth)

---

### Task 3: RIU Mapping Analysis (15 minutes)

After collecting companies, analyze:

1. **Hot RIUs** - Which RIUs have the most companies? (= validated problems)
2. **Gap RIUs** - Which RIUs have zero companies? (= white space or not AI-suitable)
3. **Use Case Clusters** - What natural groupings emerge? (customer support, data pipelines, compliance, etc.)
4. **Agentic Concentration** - Which RIUs attract agentic-native companies?

**Deliverable**: Summary analysis showing:
- Top 10 RIUs by company count
- All gap RIUs (zero companies)
- Suggested use_case parent categories
- Agentic-native concentration patterns

---

## Output Format

### File 1: `argy_structure_research.md`

```markdown
# Structure Research: Company-to-RIU Mapping Library

## Recommended Structure

### Option 1: [Name]
**Pros**: [...]
**Cons**: [...]
**YAML Example**:
```yaml
[example]
```

### Option 2: [Name]
[same format]

### Option 3: [Name]
[same format]

## Recommendation
[Which option and why, specifically for Palette integration]

## Sources
- [Title]: [URL]
```

---

### File 2: `argy_company_research.md`

```markdown
# AI Company Research: RIU Mapping

## Summary Statistics
- Total companies researched: [X]
- Agentic-native companies: [X]
- Funding stages: [breakdown]
- Date range: [X-Y]

## Companies by RIU

### RIU-001: Convergence Brief
- **[Company Name]** (Founded: 2024, Funding: $XM Series A, Agentic: Yes)
  - Use case: [Specific problem]
  - Source: [URL]

[repeat for all RIUs with companies]

## Gap Analysis

### RIUs with Zero Companies
- RIU-XXX: [Name] - [Why no companies? Not AI-suitable? Too niche?]

## Use Case Clusters

### Customer Support & Engagement
- RIU-050, RIU-051, RIU-052
- Companies: [X companies]
- Total funding: $[X]M

[repeat for all clusters]

## Agentic-Native Analysis
- [Patterns in which RIUs attract agentic companies]

## Sources
- [All sources used]
```

---

### File 3: `argy_mapping_analysis.md`

```markdown
# RIU Mapping Analysis

## Top 10 Validated RIUs (Most Companies)
1. RIU-XXX: [Name] - [X companies, $YM total funding]
2. [...]

## Gap RIUs (Zero Companies)
- RIU-XXX: [Name] - [Hypothesis: why no companies?]

## Recommended Use Case Categories
1. **[Category Name]**
   - RIUs: [list]
   - Companies: [count]
   - Rationale: [why this grouping makes sense]

## Agentic Concentration
- [Which RIUs have highest % of agentic-native companies]
- [What this tells us about agent-suitable problems]

## Recommendations for Palette Integration
- [How to structure the final YAML]
- [How to surface this in teaching/demos]
- [Which RIUs to highlight in interview prep]
```

---

## Success Criteria

✅ Structure research provides 2-3 concrete YAML options with clear recommendation  
✅ Company research covers 100+ AI companies (prioritize recent/agentic)  
✅ Every company mapped to at least one RIU  
✅ Gap RIUs identified with hypotheses  
✅ Use case clusters emerge naturally from data  
✅ Analysis highlights "hot" RIUs for interview demo  
✅ All sources documented for credibility  

---

## Time Budget

- Structure research: 15 min
- Company research: 45 min
- Mapping analysis: 15 min
- **Total**: 75 minutes

---

## Next Steps After Argy

1. **Theri builds YAML library** (using Argy's recommended structure)
2. **Theri builds demo materials** (using "hot RIUs" from analysis)
3. **Package for interview** (tomorrow)

---

**Start with Task 1 (structure research), then proceed to Task 2 (company research), then Task 3 (analysis).**
