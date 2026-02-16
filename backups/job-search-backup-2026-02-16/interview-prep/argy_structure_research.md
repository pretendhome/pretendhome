# Structure Research: Company-to-RIU Mapping Library

**Agent**: Argentavis (Argy)  
**Date**: 2026-02-10  
**Status**: PERPLEXITY QUERIES PENDING - Using baseline knowledge + validation needed

---

## Research Approach

Analyzed 3 structural patterns for hierarchical taxonomies with multi-dimensional grouping:
1. Use-case-first hierarchy (domain-driven)
2. RIU-first with use-case tags (pattern-driven)
3. Hybrid matrix (both dimensions as first-class)

---

## Recommended Structure Options

### Option 1: Use-Case-First Hierarchy (RECOMMENDED)

**Structure**: `use_case → RIU → companies`

**Pros**:
- Natural for teaching (students think in use cases, not RIU codes)
- Easy to answer "What companies work on customer support?"
- Surfaces market clusters clearly
- Handles gap RIUs elegantly (empty company arrays)
- Aligns with how VCs categorize portfolios

**Cons**:
- Companies solving multiple RIUs appear in multiple places (acceptable with YAML anchors)
- Requires maintaining use_case taxonomy alongside RIU taxonomy

**YAML Example**:
```yaml
use_cases:
  customer_support_automation:
    name: "Customer Support & Engagement"
    description: "AI systems that handle customer inquiries, tickets, and engagement"
    rius:
      - riu_id: RIU-050
        riu_name: "Conversational AI Workflow"
        companies:
          - name: "Intercom"
            founded: 2011
            funding_stage: "Series D"
            funding_amount: "$240M"
            agentic_native: false
            use_case: "AI chatbot for support ticket automation"
            source: "https://www.intercom.com"
          - name: "Ada"
            founded: 2016
            funding_stage: "Series C"
            funding_amount: "$190M"
            agentic_native: false
            use_case: "Automated customer service platform"
            source: "https://ada.cx"
        gap_analysis: "Mature market, 20+ companies, high validation"
      
      - riu_id: RIU-051
        riu_name: "Context-Aware Response Generation"
        companies: []
        gap_analysis: "No pure-play companies; feature in larger platforms"
  
  data_pipeline_reliability:
    name: "Data Pipeline & Observability"
    description: "AI systems for data quality, monitoring, and pipeline reliability"
    rius:
      - riu_id: RIU-122
        riu_name: "Batch Pipeline Safety"
        companies:
          - name: "Monte Carlo Data"
            founded: 2019
            funding_stage: "Series D"
            funding_amount: "$236M"
            agentic_native: false
            use_case: "Data observability and pipeline monitoring"
            source: "https://www.montecarlodata.com"
        gap_analysis: "Growing market, 5-10 companies"

metadata:
  total_use_cases: 15
  total_rius_mapped: 104
  total_companies: 150
  gap_rius: 23
  generated: "2026-02-10"
```

---

### Option 2: RIU-First with Use-Case Tags

**Structure**: `RIU → companies (with use_case tags)`

**Pros**:
- Aligns directly with Palette taxonomy structure
- Easy to extend existing RIU definitions
- No duplication of company data
- Simple queries: "Show me all companies for RIU-050"

**Cons**:
- Harder to answer "What's hot in customer support?" (requires aggregation)
- Use cases become tags, not first-class structure
- Less intuitive for teaching/demos

**YAML Example**:
```yaml
rius:
  - riu_id: RIU-050
    riu_name: "Conversational AI Workflow"
    use_case_tags: ["customer_support", "engagement", "automation"]
    companies:
      - name: "Intercom"
        founded: 2011
        funding: "$240M Series D"
        agentic_native: false
        specific_use_case: "Support ticket automation"
        source: "https://www.intercom.com"
    market_validation: "high"
    company_count: 20
  
  - riu_id: RIU-051
    riu_name: "Context-Aware Response Generation"
    use_case_tags: ["customer_support", "content_generation"]
    companies: []
    market_validation: "gap"
    company_count: 0
    gap_hypothesis: "Feature in platforms, not standalone product"
```

---

### Option 3: Hybrid Matrix (Both Dimensions First-Class)

**Structure**: Separate indices for use_cases and rius, with cross-references

**Pros**:
- Maximum query flexibility
- No data duplication
- Can answer both "use case → companies" and "RIU → companies"
- Explicit gap tracking

**Cons**:
- Most complex to maintain
- Requires careful sync between indices
- Overkill for initial version

**YAML Example**:
```yaml
# Index 1: Use Cases
use_case_index:
  customer_support_automation:
    name: "Customer Support & Engagement"
    rius: [RIU-050, RIU-051, RIU-052]
    company_refs: [C001, C002, C003]

# Index 2: RIUs
riu_index:
  RIU-050:
    name: "Conversational AI Workflow"
    use_cases: [customer_support_automation, sales_automation]
    company_refs: [C001, C002]

# Index 3: Companies (single source of truth)
company_index:
  C001:
    name: "Intercom"
    founded: 2011
    funding: "$240M Series D"
    rius: [RIU-050, RIU-052]
    use_cases: [customer_support_automation]

# Index 4: Gaps
gap_rius:
  - riu_id: RIU-051
    hypothesis: "Feature in platforms, not standalone"
```

---

## Recommendation: Option 1 (Use-Case-First)

**Rationale**:
1. **Teaching-optimized** - Students/interviewers think in use cases first
2. **Market validation clarity** - Easy to see which use cases are hot (most companies/funding)
3. **Gap visibility** - Empty company arrays immediately show white space
4. **Demo-friendly** - Can walk through "Here are the top 5 AI use cases and the companies solving them"
5. **Palette integration** - Can reference RIU IDs while keeping use cases as primary navigation

**Implementation Notes**:
- Use YAML anchors for companies appearing in multiple RIUs (avoid duplication)
- Include `gap_analysis` field for every RIU (even if populated)
- Add `market_validation` score: `high | medium | low | gap`
- Include `agentic_native` flag to track agent-first companies
- Add `funding_total` rollup at use_case level for market sizing

---

## Metadata Schema (All Options)

Every company entry should include:
```yaml
name: string (required)
founded: integer (year, required)
funding_stage: string (Seed | Series A-F | Public | Acquired)
funding_amount: string (e.g., "$50M")
agentic_native: boolean (is agent architecture core?)
use_case: string (specific problem they solve)
source: url (company website or announcement)
last_updated: date (for staleness tracking)
```

Every RIU should include:
```yaml
gap_analysis: string (market assessment)
company_count: integer (for sorting/filtering)
market_validation: enum (high | medium | low | gap)
```

---

## Integration with Palette Taxonomy

**File Location**: `/home/mical/fde/palette/knowledge-library/v1.3/company_riu_mapping_v1.0.yaml`

**Cross-Reference Strategy**:
- Company mapping library references RIU IDs from taxonomy
- Taxonomy v1.2 remains unchanged (stable)
- Company library is versioned independently (updates frequently)
- Teaching materials pull from both: taxonomy for RIU definitions, company library for market validation

**Query Patterns to Support**:
1. "Show me all companies solving RIU-050" → Direct lookup
2. "What's the hottest AI use case?" → Sort use_cases by company_count + funding_total
3. "Which RIUs have no companies?" → Filter where company_count = 0
4. "Show me agentic-native companies" → Filter where agentic_native = true
5. "What use cases does Intercom solve?" → Reverse lookup from company name

---

## Next Steps

1. **Validate structure with Perplexity** - Check if industry uses similar patterns
2. **Build initial YAML** - Start with 10-15 use cases, 50-100 companies
3. **Test queries** - Ensure structure supports all teaching scenarios
4. **Iterate** - Refine based on what's easy/hard to query

---

## Sources (Baseline Knowledge - PERPLEXITY VALIDATION NEEDED)

- YAML best practices (general software engineering knowledge)
- Startup database schemas (Crunchbase, PitchBook patterns)
- Taxonomy design patterns (library science, ontology engineering)

**⚠️ PERPLEXITY QUERIES PENDING**: Run queries q1-q3 from `perplexity_queries.json` to validate/refine these recommendations.
