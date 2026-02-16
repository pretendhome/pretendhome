======================================================================
  ARGY RESEARCH — CYCLE 3
  Operating Models for Multi-Brand AI
======================================================================

**Research Question**: How do multi-brand enterprises structure AI teams and operating models to balance shared platforms with brand-specific needs?

**Date**: February 12, 2026
**Sources**: Perplexity deep research (cited below)

---

## KEY FINDING: HYBRID MODEL DOMINATES

**Reality**: Large multi-brand enterprises use **hybrid operating models** — centralized platforms with federated execution.

**Why**: Balances technical excellence and efficiency (centralized) with agility and brand-specific customization (federated).

---

## FOUR OPERATING MODEL PATTERNS

### Pattern 1: Centralized

**Structure**: AI specialists pooled in one team/CoE serving all brands via shared platforms

**Characteristics**:
- Single AI team
- Shared infrastructure
- Uniform standards
- Central decision-making

**Pros**:
- Technical excellence
- Efficiency and economies of scale
- Consistent quality
- No duplication

**Cons**:
- Bottlenecks for brand-specific needs
- Slow to adapt to brand differences
- Brand leaders lack autonomy
- One-size-fits-all doesn't fit all

**Best for**: Single-brand enterprises or early-stage AI programs

**Example**: Amazon central teams support AWS, Prime Video across "baby companies"[4]

**Gap Fit**: ❌ Low — Gap has 4 distinct brands with different needs

---

### Pattern 2: Federated

**Structure**: AI talent embedded in brand/product teams for tailored solutions

**Characteristics**:
- AI specialists in each brand
- Brand-specific platforms
- Independent decision-making
- No shared infrastructure

**Pros**:
- Agility for specific needs
- Brand autonomy
- Fast iteration
- Brand-specific optimization

**Cons**:
- Duplication of effort
- Inconsistent standards
- No cross-brand learning
- 4x the cost (for 4 brands)

**Best for**: Highly autonomous brands with separate P&Ls and minimal synergies

**Example**: Google teams restructured by niche/responsibility per project/brand[4], Valve flat structure for gaming products[4]

**Gap Fit**: ❌ Low — Too expensive, misses synergies

---

### Pattern 3: Hybrid (RECOMMENDED FOR GAP)

**Structure**: Central CoE handles platforms/infrastructure; federated experts in brand teams

**Characteristics**:
- Centralized: Platform, data infrastructure, governance, standards
- Federated: Brand-specific use cases, implementation, adoption
- Dual reporting: Technical (to CoE) + Functional (to brand)

**Pros**:
- Balances scale with customization
- Shared platform prevents duplication
- Brand autonomy for use cases
- Cross-brand learning enabled
- Optimal for scarce AI talent

**Cons**:
- Requires clear decision rights (RACI)
- Dual reporting can create confusion
- Needs strong governance to prevent fragmentation

**Best for**: Multi-brand enterprises with shared infrastructure needs and brand-specific use cases

**Example**: Enterprises with central data platforms and product-embedded data scientists[1][7]

**Gap Fit**: ✅ High — Exactly Gap's situation (4 brands, shared platform, different objectives)

---

### Pattern 4: Matrix

**Structure**: Dual reporting — functional (e.g., Head of AI) + project/brand manager

**Characteristics**:
- AI specialists report to both CoE and brand leaders
- Flexible resource allocation
- Project-based assignments
- Shared talent pool

**Pros**:
- Flexibility for multi-brand projects
- Efficient use of scarce talent
- Cross-brand collaboration
- Dynamic resource allocation

**Cons**:
- Requires clear priorities
- Potential for conflicting directives
- Complex reporting structure
- Can slow decision-making

**Best for**: Large enterprises with many brands and complex cross-brand initiatives

**Example**: General Electric matrix for multiple product ranges[4]

**Gap Fit**: ⚠️ Medium — Could work but adds complexity Gap doesn't need (only 4 brands)

---

## GAP INC. RECOMMENDED OPERATING MODEL

### Hybrid: Central Office of AI + Federated Brand Teams

**Centralized (Office of AI)**:

**Team Structure**:
- Sr. Manager, AI Strategy & Enterprise Enablement (Mical) — leads Office of AI
- AI Architect (1 FTE) — designs agentic platform
- ML Engineer (1-2 FTE) — builds and maintains platform
- AI Governance Specialist (0.5 FTE) — risk, compliance, ethics
- Data Engineer (1 FTE) — data infrastructure, pipelines
- AI Product Manager (1 FTE) — platform roadmap, vendor management

**Total Central Team**: 5-6 FTE

**Responsibilities**:
- Build and maintain centralized agentic platform
- Set AI standards and guardrails
- Manage risk, compliance, ethics frameworks
- Enable cross-brand learning
- Vendor partnerships (OpenAI, Anthropic, AWS Bedrock)
- Platform budget and roadmap

---

**Federated (Brand Teams)**:

**Per-Brand Structure** (Old Navy, Gap, Banana Republic, Athleta):
- Brand AI Champion (0.5 FTE) — embedded in brand, reports to brand leader
- Data Scientist (0.5 FTE, shared across 2 brands) — brand-specific models
- AI Adoption Lead (0.5 FTE) — training, enablement, behavior change

**Total Per-Brand**: 1.5 FTE × 4 brands = 6 FTE

**Responsibilities**:
- Prioritize brand-specific use cases
- Implement use cases on shared platform
- Drive adoption within brand
- Measure brand-specific success metrics
- Brand-specific budget and ROI

---

**Total Gap AI Team**: 11-12 FTE (5-6 central + 6 federated)

**Reporting Structure**:
- Central team reports to: Mical (Sr. Manager, AI Strategy)
- Mical reports to: CTO or Chief Digital Officer
- Brand AI Champions report to: Brand leaders (functionally) + Mical (technically)
- Data Scientists report to: Mical (technically) + Brand leaders (priorities)

---

## ROLES & RESPONSIBILITIES (DETAILED)

### Central Office of AI Roles

**Sr. Manager, AI Strategy & Enterprise Enablement (Mical)**:
- Lead AI strategy and roadmap
- Chair AI Governance Committee
- Manage central AI team
- Enable brand leaders
- Executive communication and ROI narratives
- Budget owner for platform
- Vendor partnerships

**AI Architect**:
- Design centralized agentic platform
- Define core capabilities (research, architecture, build, validate, monitor)
- Integration with existing systems (Workday, ServiceNow, Shopify)
- Platform scalability and performance
- Technical standards and best practices

**ML Engineer(s)**:
- Build and maintain agentic platform
- Implement agent orchestration
- Model deployment and monitoring
- Platform reliability and uptime
- Tool integrations (Perplexity, OpenAI, Anthropic)

**AI Governance Specialist**:
- Risk assessment frameworks
- Compliance (CCPA, GDPR, PCI, FTC)
- Ethics and bias detection
- Brand safety protocols
- Audit trails and incident response

**Data Engineer**:
- Data infrastructure and pipelines
- Data quality and lineage
- Integration with brand data sources
- Real-time data feeds (inventory, sales, customer)

**AI Product Manager**:
- Platform roadmap and prioritization
- Vendor evaluation and management
- User research (brand teams as customers)
- Platform adoption metrics
- Feature requests and backlog

---

### Federated Brand Team Roles

**Brand AI Champion** (per brand):
- Identify brand-specific AI opportunities
- Prioritize use cases with brand leader
- Coordinate with Office of AI for implementation
- Drive adoption within brand
- Measure brand-specific ROI
- Advocate for brand needs in Governance Committee

**Data Scientist** (shared across 2 brands):
- Develop brand-specific models
- Customize platform for brand use cases
- Analyze brand data for insights
- Validate model performance
- Support brand AI Champion

**AI Adoption Lead** (per brand):
- Design adoption programs for brand employees
- Create "recipes" (5-minute workflows) per persona
- Train champions within brand
- Measure behavior change (not just training completion)
- Feedback loop to Office of AI

---

## DECISION RIGHTS (RACI MATRIX)

| Decision | Responsible | Accountable | Consulted | Informed |
|----------|-------------|-------------|-----------|----------|
| **Platform Selection** | AI Architect | Mical | CTO, Brand Leaders | All |
| **Platform Roadmap** | AI Product Manager | Mical | Brand AI Champions | Brand Leaders |
| **Use Case Prioritization (per brand)** | Brand AI Champion | Brand Leader | Mical | Office of AI |
| **Use Case Implementation** | Data Scientist | Brand AI Champion | ML Engineer | Mical |
| **Model Deployment** | ML Engineer | AI Architect | Governance Specialist | Mical |
| **Risk Assessment** | Governance Specialist | Mical | Brand AI Champion | Governance Committee |
| **Compliance** | Governance Specialist | Legal/Compliance | Mical | Governance Committee |
| **Platform Budget** | Mical | CFO | CTO | Brand Leaders |
| **Brand Use Case Budget** | Brand AI Champion | Brand Leader | Mical | Brand CFO |
| **Cross-Brand Learning** | Mical | Mical | Brand AI Champions | All |
| **Vendor Partnerships** | AI Product Manager | Mical | AI Architect | CTO |

---

## STAFFING STRATEGY

### Phase 1: Year 1 (Build Central Team)

**Hire Priority**:
1. AI Architect (Month 1) — design platform
2. ML Engineer (Month 2) — build platform
3. AI Governance Specialist (Month 3) — set guardrails
4. Data Engineer (Month 4) — data infrastructure
5. AI Product Manager (Month 6) — vendor management

**Brand Teams**: Start with Brand AI Champions only (0.5 FTE each, 4 total = 2 FTE)

**Total Year 1**: 7 FTE (5 central + 2 federated)

**Budget**: $1.2M-$1.5M (salaries + platform costs)

---

### Phase 2: Year 2 (Scale to All Brands)

**Add**:
- ML Engineer #2 (platform scaling)
- Data Scientists (3 FTE, shared across 4 brands)
- AI Adoption Leads (2 FTE, shared across 4 brands)

**Total Year 2**: 12 FTE (6 central + 6 federated)

**Budget**: $2M-$2.5M (salaries + platform costs)

---

### Phase 3: Year 3 (Optimize)

**Maintain**: 12 FTE (no growth)

**Budget**: $1.5M-$2M (salaries + reduced platform costs due to efficiency)

**Budget Reduction**: 20-25% from Year 2 (tool consolidation, automation)

---

## INTERNAL HIRES VS EXTERNAL RESOURCES

### Internal Hires (Core Team)

**Roles to hire internally**:
- Sr. Manager, AI Strategy (Mical) — already hired
- AI Architect — hire internally or external (senior IC)
- ML Engineer(s) — hire internally (can train up)
- Data Engineer — hire internally (existing data team)
- Brand AI Champions — promote from within brands (domain expertise critical)

**Why internal**:
- Domain knowledge (retail, Gap brands)
- Cultural fit
- Long-term retention
- Institutional knowledge

---

### External Consultants (Temporary)

**Use cases**:
- Platform design (first 3-6 months) — architecture consulting
- Governance frameworks (first 6 months) — risk/compliance consulting
- Adoption programs (Year 1-2) — change management consulting

**Vendors**:
- McKinsey, BCG, Deloitte (strategy and governance)
- Thoughtworks, Pivotal (platform architecture)
- Prosci, Kotter (change management)

**Budget**: $300K-$500K Year 1, $100K-$200K Year 2, $0 Year 3

---

### Vendor Partnerships (Ongoing)

**Platform Vendors**:
- OpenAI (ChatGPT Enterprise) or Anthropic (Claude for Work) — LLM provider
- AWS Bedrock or Azure OpenAI — infrastructure
- Perplexity — research capability
- Databricks or Snowflake — data platform

**Budget**: $500K-$800K/year (scales with usage)

---

## BUDGET ALLOCATION (3-YEAR VIEW)

### Year 1: $2M-$2.5M

| Category | Amount | % |
|----------|--------|---|
| Salaries (7 FTE) | $1.2M | 48% |
| Platform Vendors | $600K | 24% |
| Consultants | $400K | 16% |
| Training & Enablement | $200K | 8% |
| Contingency | $100K | 4% |

---

### Year 2: $3M-$3.5M

| Category | Amount | % |
|----------|--------|---|
| Salaries (12 FTE) | $2M | 57% |
| Platform Vendors | $700K | 20% |
| Consultants | $150K | 4% |
| Training & Enablement | $400K | 11% |
| Brand Pilots | $250K | 7% |

---

### Year 3: $2.5M-$3M (Budget Reduction)

| Category | Amount | % |
|----------|--------|---|
| Salaries (12 FTE) | $2M | 67% |
| Platform Vendors | $500K | 17% (reduced via efficiency) |
| Consultants | $0 | 0% |
| Training & Enablement | $300K | 10% |
| Cross-Brand Optimization | $200K | 7% |

**Budget Reduction**: 15-20% from Year 2 peak

---

## COMPARISON TO COMPETITORS

| Company | Operating Model | Team Size (estimated) | Budget (estimated) |
|---------|----------------|----------------------|-------------------|
| **Walmart** | Centralized | 50-100 FTE | $500M (includes infrastructure) |
| **Target** | Federated | 20-30 FTE (distributed) | Not disclosed |
| **LVMH** | Hybrid | 30-50 FTE (central) + embedded | Not disclosed |
| **Gap (Recommended)** | Hybrid | 12 FTE (6 central + 6 federated) | $2.5M-$3.5M/year |

**Gap's Advantage**: Lean team, focused on enablement (not building everything), leverages vendor platforms

---

## VALIDATION QUESTIONS FOR MICAL

Before moving to Cycle 4 (Gap Current State):

1. **Team size feel right?** 12 FTE (6 central + 6 federated) or should we start smaller/larger?

2. **Reporting structure work?** Brand AI Champions report to brand leaders (functionally) + Mical (technically)?

3. **Staffing strategy — internal vs external balance?** Should we hire more externally or promote from within?

4. **Budget allocation — $2.5M-$3.5M/year feel realistic?** Or should we model a leaner/richer approach?

5. **Ready for Cycle 4 (Gap Inc. Current State research)?** Or dig deeper on operating model first?

---

**SOURCES**:
[1] Multi-brand AI team topologies (centralized, federated, hybrid, matrix)
[2] AI Center of Excellence structures
[3] Enterprise AI roles and responsibilities
[4] Amazon, Google, GE operating model examples
[5] AI team staffing and resourcing strategies
[6] Internal hires vs external consultants
[7] Hybrid model best practices
[8] Chief AI Officer and AI Strategy Manager roles
