======================================================================
  ARGY DEEP RESEARCH — FDE-STYLE OFFICE OF AI
  Forward Deployed Model for Gap Inc.
======================================================================

**Research Question**: How should Gap structure an Office of AI using the Forward Deployed Engineer (FDE) model — embedding AI experts with business units to implement AI on existing infrastructure?

**Date**: February 12, 2026
**Sources**: Perplexity deep research (cited below)

---

## KEY FINDING: FDE MODEL IS THE RIGHT APPROACH FOR GAP

**Mical's Insight Validated**: "We are not building an application from scratch, we are building an intelligent decision layer on top of existing infrastructure."

**This is exactly what FDEs do**: Embed with business units, integrate AI onto existing systems, enable teams to use AI effectively — not build a platform from scratch.

---

## WHAT IS THE FDE MODEL?

### Definition

**Forward Deployed Engineer (FDE)**: A software engineer embedded directly with customers or internal business units—often on-site—to build, deploy, and customize AI/data systems on existing infrastructure.

**Key Characteristics**:
- **Embedded**: Works on-site with business teams (stores, merchandising, supply chain)
- **Full-stack**: Handles data, APIs, integrations, front-end, process redesign
- **Customer translator**: Bridges technical and business stakeholders
- **Rapid iteration**: Builds prototypes to production in weeks, not months
- **Outcome-focused**: Owns end-to-end from scoping to deployment to adoption

**Pioneered by**: Palantir (2003), now used by Databricks, Stripe, Ramp, Accenture, Infosys

**Source**: FDE model overview[1][2][3][4][8]

---

## FDE VS TRADITIONAL ENGINEERING

| Aspect | Forward Deployed Engineer (FDE) | Traditional Platform Engineer |
|--------|--------------------------------|------------------------------|
| **Focus** | One business unit, many capabilities | One capability, many users |
| **Location** | Embedded on-site (stores, DCs, brand HQ) | Centralized (corporate HQ) |
| **Output** | Custom integrations on existing infra | Generic platform features |
| **Timeline** | Weeks (rapid prototyping) | Months (planned sprints) |
| **Skills** | 70% technical + 30% consulting | 100% technical |
| **Ownership** | End-to-end (scoping → deployment → adoption) | Code delivery only |
| **Stakeholders** | Business leaders, store managers, merchandisers | Product managers, other engineers |
| **Success Metric** | Business outcome (cost reduction, productivity) | Platform uptime, feature velocity |

**Why FDE is right for Gap**: Gap has existing infrastructure (Workday, ServiceNow, Shopify, inventory systems). FDEs integrate AI into these systems, not replace them.

**Source**: FDE vs traditional engineering[2][3][4][5]

---

## INTERNAL FDE MODEL (ENTERPRISE AI ENABLEMENT)

### How It Works

**Structure**: Embed AI experts with internal business units (not external customers)

**Pod Model**: 1 FDE + supporting roles per business unit or strategic initiative

**Deployment Period**: 3-12 months per engagement

**Organizational Reporting**: FDEs report to Office of AI (technical alignment), embed with business units (functional work)

**Source**: Internal FDE models[1][2]

---

### Real-World Examples

**Accenture**: 30,000 "Reinvention deployed engineers" (including FDEs) to embed AI in enterprise environments
- Trained on Claude/OpenAI
- Embed in business units (stores, supply chain, merchandising)
- Scale AI adoption on existing infrastructure

**Infosys**: FDE team for 4,600+ AI projects across business processes
- Generates code, builds agents
- Reinvents processes in supply chain/merchandising
- Trains teams on custom agents post-90-day PoCs

**Manhattan Associates**: FDEs build 1-2 custom agents per unit using Agent Foundry
- 90-day PoCs lock in adoption
- Embed in operations (supply chain) to deploy agents on existing infra
- Teach self-sufficiency

**Ramp**: Started with 2 engineers for largest "internal customer-like" units
- Grew to team supporting enterprise scale
- Fight fires, integrate AI into finance/ops workflows
- Build integration moats

**Source**: Internal FDE examples[3][7]

---

## GAP INC. FDE-STYLE OFFICE OF AI

### Revised Team Structure

**Central Office of AI** (reports to Mical):

**Leadership**:
- Sr. Manager, AI Strategy & Enterprise Enablement (Mical) — leads Office of AI

**Forward Deployed Engineers** (4-6 FTE):
- FDE #1: Old Navy (embedded with brand, stores, supply chain)
- FDE #2: Gap (embedded with brand, stores, merchandising)
- FDE #3: Banana Republic (embedded with brand, e-commerce, merchandising)
- FDE #4: Athleta (embedded with brand, community, e-commerce)
- FDE #5: Corporate Functions (HR, Finance, Legal — shared)
- FDE #6: Distribution Centers & Supply Chain (shared)

**Supporting Roles** (2-3 FTE):
- AI Governance Specialist (0.5 FTE) — risk, compliance, brand safety
- AI Adoption Lead (1 FTE) — training, enablement, behavior change
- Data Engineer (1 FTE) — data infrastructure, integrations

**Total Team**: 7-9 FTE (down from 12 FTE in platform model)

---

### What FDEs Do at Gap (Day-to-Day)

**Week 1-2: Discovery & Scoping**
- Embed with business unit (e.g., Old Navy stores)
- Shadow store managers, associates, merchandisers
- Map processes, constraints, pain points
- Identify high-value AI opportunities
- Whiteboard solutions with stakeholders

**Week 3-6: Rapid Prototyping**
- Build custom AI integrations on existing systems
- Connect AI to Workday, ServiceNow, Shopify, inventory systems
- Create "recipes" (5-minute workflows) for employees
- Test with 5-10 users, iterate daily
- No new infrastructure — augment what exists

**Week 7-12: Deployment & Adoption**
- Roll out to 50-100 users (pilot scale)
- Train champions within business unit
- Monitor usage, fix issues in real-time
- Measure business outcomes (cost reduction, productivity)
- Document learnings for cross-brand replication

**Ongoing: Support & Iteration**
- Respond to issues (2 AM outages if needed)
- Iterate based on feedback
- Feed insights back to Office of AI
- Enable self-sufficiency (teach, don't do)

**Source**: FDE day-to-day responsibilities[1][2][3][4]

---

### FDE Skills & Background

**Technical Skills** (70% of role):
- **Python** (core) — scripting, automation, AI integrations
- **Cloud platforms** (AWS, Azure) — deploy AI on existing cloud infra
- **APIs & integrations** — connect AI to Workday, ServiceNow, Shopify
- **Data pipelines** (SQL, Spark, Airflow) — connect AI to inventory, sales data
- **AI/ML** (LLMs, RAG, prompt engineering) — build agentic workflows
- **Full-stack** (front-end, back-end) — build user interfaces for employees

**Soft Skills** (30% of role):
- **Problem-solving** in ambiguous environments — no clear requirements
- **Communication** — explain AI to non-technical stakeholders (store managers, merchandisers)
- **Business acumen** — understand retail operations, incentives, constraints
- **Empathy** — understand employee pain points, not just technical problems
- **Ownership** — own end-to-end, including 2 AM outages

**Experience Level**:
- 2-4+ years software engineering
- Background in consulting, solutions engineering, or backend development
- Client-facing experience (internal or external)
- Retail/operations experience a plus (not required)

**Source**: FDE skills and hiring[1][2][3][4][5][6][9]

---

### FDE vs Traditional Roles at Gap

**FDE is NOT**:
- ❌ Platform Engineer (building infrastructure from scratch)
- ❌ Data Scientist (building models in isolation)
- ❌ Solutions Architect (designing but not implementing)
- ❌ Consultant (recommending but not building)
- ❌ Sales Engineer (demoing but not deploying)

**FDE IS**:
- ✅ Engineer + Consultant + Product Manager
- ✅ Embedded with business unit (on-site at stores, DCs, brand HQ)
- ✅ Builds working AI integrations on existing systems
- ✅ Owns end-to-end from scoping to adoption
- ✅ Measures business outcomes, not just technical metrics

---

## REVISED DECISION RIGHTS (FDE MODEL)

| Decision | Owner | Approval |
|----------|-------|----------|
| **Which business unit to embed with** | Mical | Governance Committee |
| **Which AI use case to prioritize** | FDE + Business Unit Leader | Mical (if high-risk) |
| **How to implement on existing infra** | FDE | Business Unit Leader |
| **Which tools/vendors to use** | FDE | Mical (budget approval) |
| **Deployment timeline** | FDE + Business Unit Leader | Mical (if >3 months) |
| **Risk assessment** | AI Governance Specialist | Mical |
| **Budget (per engagement)** | FDE | Mical + Business Unit CFO |
| **Cross-brand replication** | Mical | Governance Committee |

**Key Difference from Platform Model**: FDEs have MORE autonomy to make technical decisions, LESS need for central approval (because they're embedded and understand context).

---

## STAFFING STRATEGY (FDE MODEL)

### Phase 1: Year 1 (Build FDE Team)

**Hire Priority**:
1. FDE #1 (Month 1) — embed with Old Navy (largest brand, operations-first)
2. FDE #2 (Month 2) — embed with Gap (balanced brand)
3. AI Governance Specialist (Month 3) — set guardrails
4. Data Engineer (Month 4) — data infrastructure
5. FDE #3 (Month 6) — embed with Banana Republic (premium brand)
6. AI Adoption Lead (Month 6) — training and enablement

**Total Year 1**: 6 FTE (4 FDEs + 2 supporting)

**Budget**: $1M-$1.2M (salaries only, no platform build costs)

---

### Phase 2: Year 2 (Scale to All Brands + Corporate)

**Add**:
- FDE #4 (Athleta)
- FDE #5 (Corporate Functions)
- FDE #6 (Distribution Centers & Supply Chain)

**Total Year 2**: 9 FTE (6 FDEs + 3 supporting)

**Budget**: $1.5M-$1.8M (salaries + vendor tools)

---

### Phase 3: Year 3 (Optimize & Cross-Brand Learning)

**Maintain**: 9 FTE (no growth)

**Shift**: FDEs rotate between brands (cross-pollination)

**Budget**: $1.5M-$1.8M (flat, no increase)

---

## BUDGET COMPARISON: FDE MODEL VS PLATFORM MODEL

| Category | Platform Model (Cycle 3) | FDE Model (Revised) | Savings |
|----------|--------------------------|---------------------|---------|
| **Year 1 Salaries** | $1.2M (7 FTE) | $1M (6 FTE) | $200K |
| **Year 1 Platform Build** | $600K | $0 (use existing infra) | $600K |
| **Year 1 Consultants** | $400K | $200K (governance only) | $200K |
| **Year 1 Total** | $2.2M | $1.2M | **$1M saved** |
| **Year 2 Salaries** | $2M (12 FTE) | $1.5M (9 FTE) | $500K |
| **Year 2 Platform** | $700K | $200K (vendor tools only) | $500K |
| **Year 2 Total** | $3M | $1.9M | **$1.1M saved** |
| **Year 3 Total** | $2.5M | $1.8M | **$700K saved** |

**3-Year Total Savings**: $2.8M (FDE model is 35-40% cheaper)

**Why**: No platform build costs, smaller team, leverage existing infrastructure

---

## FDE HIRING CRITERIA (GAP-SPECIFIC)

### Must-Have Skills

**Technical**:
- Python (scripting, automation, AI integrations)
- Cloud (AWS or Azure) — Gap likely uses one or both
- APIs & integrations — connect to Workday, ServiceNow, Shopify
- SQL — connect to inventory, sales, customer data
- AI/ML basics — LLMs, RAG, prompt engineering

**Soft**:
- Communication — explain AI to non-technical stakeholders
- Problem-solving — ambiguous, real-world environments
- Ownership — end-to-end, including support
- Empathy — understand employee pain points

**Experience**:
- 2-4+ years software engineering
- Client-facing or consulting experience
- Retail/operations experience a plus (not required)

---

### Nice-to-Have Skills

**Technical**:
- Retail systems knowledge (POS, inventory, merchandising)
- Data pipelines (Spark, Airflow)
- Front-end (React, TypeScript) — build user interfaces
- DevOps (Docker, Kubernetes) — deploy on existing infra

**Soft**:
- Retail operations knowledge
- Change management experience
- Training/enablement experience
- Multilingual (for international brands)

---

### Where to Hire

**Internal Promotion**:
- Software engineers from Gap's existing tech team
- Solutions architects or technical PMs
- Data engineers with customer-facing experience

**External Hire**:
- Palantir, Databricks, Stripe FDEs (proven FDE experience)
- Consulting firms (McKinsey, BCG, Deloitte) — technical consultants
- Startups (growth-stage, 50-200 people) — 58% of FDE jobs are here[8]

**Compensation**:
- FDE (2-4 years exp): $120K-$160K base
- FDE (4+ years exp): $150K-$200K base
- Total comp: $150K-$250K (base + bonus + equity)

**Source**: FDE hiring and compensation[5][8][9]

---

## VALIDATION: WHY FDE MODEL IS RIGHT FOR GAP

### Mical's Criteria

✅ **"Not building an application from scratch"**
- FDEs integrate AI onto existing infrastructure (Workday, ServiceNow, Shopify)
- No platform build costs

✅ **"Building an intelligent decision layer on top of existing infrastructure"**
- FDEs augment existing systems with AI, not replace them
- Rapid prototyping on existing infra

✅ **"Folks that can go out on site and make this work with stores, or in existing on-line teams"**
- FDEs embed on-site (stores, DCs, brand HQ)
- Work directly with store managers, merchandisers, supply chain operators

✅ **"Not an infra we build from scratch that we force everyone to use"**
- FDEs meet employees where they are (existing tools, workflows)
- Enable, don't force

---

### Research Validation

✅ **Proven model**: Palantir, Databricks, Stripe, Ramp, Accenture, Infosys all use FDE model

✅ **Internal FDE model exists**: Companies embed FDEs with internal business units (not just external customers)

✅ **Cost-effective**: 35-40% cheaper than platform model ($2.8M savings over 3 years)

✅ **Faster time-to-value**: Weeks (FDE) vs months (platform build)

✅ **Better adoption**: FDEs embedded with business units → higher trust, faster adoption

✅ **Scalable**: Start with 4 FDEs (Year 1), scale to 6 FDEs (Year 2), maintain (Year 3)

---

## NEXT STEPS

**Validation Questions for Mical**:

1. **FDE model feel right?** Embedded engineers vs centralized platform team?

2. **Team size: 6-9 FTE (mostly FDEs)?** Or start smaller/larger?

3. **Hiring: Internal promotion vs external FDE hires?** Where should we source talent?

4. **Budget: $1.2M-$1.9M/year (35-40% cheaper than platform model)?** Does this feel realistic?

5. **Ready to move to Cycle 4 (Gap Current State research)?** Or refine FDE model first?

---

**SOURCES**:
[1] FDE model overview (Palantir, Databricks, Stripe)
[2] Internal FDE models for enterprise AI
[3] Accenture, Infosys, Manhattan Associates FDE examples
[4] FDE vs traditional engineering
[5] FDE skills and hiring criteria
[6] FDE day-to-day responsibilities
[7] Ramp FDE team growth
[8] FDE job market analysis (58% at growth-stage startups)
[9] FDE compensation and experience levels
