======================================================================
  ARGY RESEARCH — CYCLE 2
  Risk/Governance Models from Retailers
======================================================================

**Research Question**: How do major retailers govern AI at enterprise scale? What are the decision rights, risk frameworks, and governance structures?

**Date**: February 12, 2026
**Sources**: Perplexity deep research (cited below)

---

## KEY FINDING: LIMITED PUBLIC DISCLOSURE

**Reality**: Most retailers do not publicly disclose detailed AI governance structures.

**What we found**:
- Walmart: Most detailed (system-centric agentic framework)
- Target: Operational focus (no formal governance disclosed)
- Best Buy, Zara, ASOS, Stitch Fix: No public governance information
- LVMH: Strategy disclosed (maison autonomy), governance structure not detailed

**What we're using instead**: Enterprise AI governance best practices from consulting firms (McKinsey, BCG, Deloitte, Gartner) + Walmart as primary retail example

---

## WALMART: SYSTEM-CENTRIC AGENTIC FRAMEWORK

### Governance Model

**Approach**: System-centric agentic AI framework (transitioned 2025 from model-centric)

**Structure**:
- **Centralized Strategy**: Walmart Global Tech sets overall AI direction
- **Federated Execution**: Purpose-built agents deployed across functions
- **Vendor Partnerships**: Microsoft Azure OpenAI, Pactum AI, OpenAI (ChatGPT Enterprise), Google Gemini

**Key Agents**:
- **Sparky**: Customer-facing (shopping assistance)
- **My Assistant**: Associate-facing (task management, restocking, spill prioritization)
- **Marty**: Supplier-facing (vendor communication)

**Decision Rights**:
- Platform decisions: Walmart Global Tech (centralized)
- Use case deployment: Functional teams (federated)
- Vendor selection: Centralized with collaborative integration

**Risk Management**:
- Workforce AI literacy programs (OpenAI Certifications)
- Purposeful scaling (pilots before enterprise rollout)
- No explicit brand safety protocols disclosed

**Source**: Walmart 2025 AI framework announcements[2][3][5]

---

## TARGET: TARGETED OPERATIONAL MODEL

### Governance Model

**Approach**: Targeted operational AI (specific fixes, not enterprise-wide platform)

**Structure**:
- **Federated Approach**: Blends internal development with external expertise (Bain & Company for GenAI)
- **No Centralized AI Office**: AI embedded within functional teams

**Key Initiatives**:
- **Target Trend Brain**: Fashion trend prediction (merchandising team)
- **Inventory Optimization**: ML analyzing sales patterns, seasonal trends (supply chain team)
- **Store Companion**: Chatbot for associates (operations team)
- **Holiday Gift Finder**: Customer-facing AI (marketing team)

**Decision Rights**:
- Use case decisions: Functional teams (merchandising, supply chain, operations)
- Vendor partnerships: Collaborative (Bain & Company, unnamed vendors)
- No disclosed centralized governance

**Risk Management**:
- No public details on formal risk frameworks
- No brand safety protocols disclosed

**Source**: Target AI initiatives announcements[1][2][4]

---

## LVMH: MAISON AUTONOMY (STRATEGY DISCLOSED, GOVERNANCE INFERRED)

### Governance Model (from Cycle 1 research)

**Approach**: "Quiet tech" with maison autonomy

**Structure**:
- **Centralized Platform**: MaIA (generative AI agent) — 40K employees, 2M+ monthly requests
- **Federated Use Cases**: 75 maisons each develop own AI plans
- **Shared Infrastructure**: Google Cloud partnership, LVMH AI Factory

**Decision Rights** (inferred):
- Platform decisions: LVMH AI Factory (centralized)
- Use case decisions: Maison leadership (federated)
- Brand safety: Per-maison (luxury brand voice protection)

**Risk Management**:
- Employee dashboard use as KPI — non-adoption halts initiatives
- "Quiet tech" philosophy — AI operates invisibly (reduces customer-facing risk)
- No explicit governance structure disclosed

**Key Principle**: Augmentation over automation

**Source**: LVMH AI strategy reports, Google Cloud partnership[1][3][6][9] (from Cycle 1)

---

## ENTERPRISE AI GOVERNANCE BEST PRACTICES

### Who Owns AI Decisions?

**Primary Model**: Cross-functional AI Governance Committee (not single owner)

**Committee Composition**:
- Chief AI Officer (CAIO) or Head of AI — champions strategy
- CTO — technical development and deployment
- CIO — data governance
- Chief Risk Officer — risk assessments
- CISO — security
- Legal/Compliance — regulatory compliance
- Data Protection Officer — privacy
- Business Leaders — functional representation

**Meeting Cadence**: Quarterly for high-level approvals, ad-hoc for escalations

**Source**: Enterprise AI governance frameworks[1][2][6]

---

### Decision Rights: Central vs. Federated

**Hybrid Model** (most common):

| Decision Type | Owner | Approval Required |
|---------------|-------|-------------------|
| AI Platform Selection | Central (Office of AI) | Governance Committee |
| AI Strategy & Roadmap | Central (Office of AI) | Governance Committee + Board |
| Use Case Prioritization | Federated (Business Units) | Governance Committee (high-risk only) |
| Use Case Implementation | Federated (Business Units) | Product Owners (low-risk), Committee (high-risk) |
| Model Deployment | Federated (Data Science Teams) | Model Owners + Risk Review |
| Data Governance | Central (CIO/CDO) | Data Stewards |
| Risk Assessment | Central (Chief Risk Officer) | Governance Committee |
| Compliance | Central (Legal/Compliance) | Governance Committee |
| Budget Allocation | Hybrid (Platform = Central, Use Cases = Federated) | CFO + Governance Committee |

**RACI Matrix**: Documents decision rights, escalation, dispute resolution

**Source**: Enterprise AI governance frameworks[1][2][4]

---

### Escalation Paths

**Tiered Escalation**:

**Level 1**: Business Unit / Product Owner
- Low-risk decisions
- Day-to-day implementation
- Monitoring and iteration

**Level 2**: Model Owner / Data Steward
- Medium-risk decisions
- Model performance issues
- Data quality concerns

**Level 3**: AI Governance Committee
- High-risk decisions
- Policy violations
- Cross-functional conflicts
- Budget overruns

**Level 4**: Board / CEO
- Critical incidents
- Brand safety breaches
- Regulatory violations
- Strategic pivots

**Emergency Response**: Direct escalation to Level 3 or 4 for incidents

**Source**: Enterprise AI governance frameworks[1][2][3]

---

### Approval Processes

**Risk-Based Approval**:

**Low-Risk AI Use Cases** (auto-approved):
- Internal-facing only (no customer exposure)
- Deterministic logic (no generative AI)
- No PII processing
- Existing data sources only
- Approval: Product Owner

**Medium-Risk AI Use Cases** (committee review):
- Customer-facing (non-critical)
- Generative AI (with guardrails)
- PII processing (with controls)
- New data sources
- Approval: AI Governance Committee

**High-Risk AI Use Cases** (full review + board approval):
- Customer-facing (critical path)
- Generative AI (brand voice)
- Sensitive PII (financial, health)
- Regulatory implications
- ONE-WAY DOOR decisions
- Approval: AI Governance Committee + Board

**Tools**:
- Risk assessment checklists
- Compliance dashboards
- Model lineage tracking
- Continuous monitoring KPIs

**Source**: Enterprise AI governance frameworks[1][2][6]

---

## AI RISK TAXONOMY (RETAIL-SPECIFIC)

### Category 1: Brand Safety Risks

**Customer-Facing AI**:
- Off-brand tone or messaging
- Inappropriate product recommendations
- Offensive or biased content generation
- Misinformation about products or policies

**Mitigation**:
- Content guardrails (Bedrock Guardrails / equivalent)
- Brand voice guidelines per brand
- Human review for high-stakes content
- Red-team testing before deployment

**Example**: LVMH "quiet tech" — AI operates invisibly to reduce customer-facing risk

---

### Category 2: Operational Risks

**Supply Chain AI**:
- Incorrect demand forecasts → overstock/stockout
- Pricing errors → margin loss or customer dissatisfaction
- Vendor communication errors → relationship damage

**Mitigation**:
- Deterministic rules for critical decisions
- Human-in-the-loop for high-value transactions
- Baseline behavior snapshots (pre-AI metrics)
- Rollback procedures

**Example**: Walmart's purposeful scaling — pilots before enterprise rollout

---

### Category 3: Compliance & Privacy Risks

**Customer Data AI**:
- CCPA/GDPR violations (improper PII use)
- PCI compliance (payment data exposure)
- FTC regulations (deceptive practices)
- Bias in personalization (discriminatory outcomes)

**Mitigation**:
- PII/Compliance triage (RIU-012)
- Data governance frameworks
- Privacy-by-design
- Regular audits

**Example**: Target's federated approach — functional teams own compliance for their use cases

---

### Category 4: Employee Trust Risks

**Workforce AI**:
- Fear of job loss (automation anxiety)
- Lack of transparency (black box AI)
- Forced adoption without training
- Surveillance concerns

**Mitigation**:
- "AI as amplification, not replacement" narrative
- Dashboard use as KPI (LVMH pattern)
- 5-minute recipes (behavior change, not just training)
- Opt-in adoption where possible

**Example**: Walmart's AI literacy programs (OpenAI Certifications)

---

### Category 5: Financial Risks

**Investment AI**:
- Overspending on tool sprawl
- Failed pilots without kill criteria
- Vendor lock-in
- ROI not materializing

**Mitigation**:
- Phased investment (pilots before scale)
- Kill criteria defined upfront
- TCO analysis (one platform vs. tool sprawl)
- Conservative ROI estimates

**Example**: Gap's recommended approach — Year 1 pilots, Year 2 scale, Year 3 budget reduction

---

## GOVERNANCE FRAMEWORKS (CONSULTING FIRM BEST PRACTICES)

### McKinsey/BCG/Deloitte Consensus

**6 Pillars of AI Governance**:

1. **Data Governance**
   - Clean, privacy-compliant first-party data
   - Transparent AI models
   - Data lineage tracking
   - Source-of-truth inventory

2. **Cross-Functional Governance Structures**
   - AI Governance Committee (IT, legal, compliance, data science, business)
   - RACI matrices for decision rights
   - Escalation paths
   - Dispute resolution

3. **Lifecycle Integration**
   - Checkpoints at data collection, model design, deployment, monitoring
   - Automated bias testing
   - Audit trails
   - Drift detection

4. **Regulatory Alignment**
   - Map controls to EU AI Act, GDPR, U.S. executive orders
   - Compliance metrics
   - Regular audits
   - Policy evolution

5. **Technology Enforcement**
   - Dashboards for monitoring
   - Model management platforms
   - Predictive analytics for threat detection
   - Automated compliance checks

6. **Continuous Measurement**
   - KPIs: remediation time, compliance rate, incident frequency
   - Quarterly reviews
   - Feedback loops
   - Iterative improvement

**Source**: Deloitte 2026 AI report, consulting firm frameworks[1][2][3][4][5][8]

---

## GAP INC. GOVERNANCE MODEL (RECOMMENDED)

### Hybrid: LVMH Maison Autonomy + Enterprise Best Practices

**Structure**:

**Centralized (Office of AI)**:
- AI Governance Committee (quarterly)
  - Sr. Manager AI Strategy (Mical) — chair
  - CTO — technical oversight
  - CIO — data governance
  - Chief Risk Officer — risk assessment
  - Legal/Compliance — regulatory
  - Brand Leaders (Old Navy, Gap, BR, Athleta) — functional representation
- Platform decisions (one agentic system)
- Risk/compliance frameworks
- Cross-brand learning mechanisms

**Federated (Brand Teams)**:
- Use case prioritization (per brand)
- Implementation (per brand)
- Adoption programs (per brand)
- Brand-specific pilots
- Brand-level success metrics

**Decision Rights**:

| Decision Type | Owner | Approval |
|---------------|-------|----------|
| Platform Selection | Office of AI | Governance Committee + CFO |
| AI Strategy & Roadmap | Office of AI | Governance Committee + Board |
| Use Case Prioritization | Brand Leaders | Office of AI (high-risk only) |
| Use Case Implementation | Brand Teams | Product Owners (low-risk), Committee (high-risk) |
| Model Deployment | Data Science Teams | Model Owners + Risk Review |
| Data Governance | CIO | Data Stewards |
| Risk Assessment | Chief Risk Officer | Governance Committee |
| Compliance | Legal/Compliance | Governance Committee |
| Budget (Platform) | Office of AI | CFO + Governance Committee |
| Budget (Use Cases) | Brand Leaders | Brand CFOs |

**Escalation Path**:
1. Brand Team → Brand Leader
2. Brand Leader → Office of AI (Mical)
3. Office of AI → Governance Committee
4. Governance Committee → Board/CEO (critical incidents only)

**Approval Process**:
- Low-risk: Brand Product Owner
- Medium-risk: Office of AI review
- High-risk: Governance Committee
- ONE-WAY DOOR: Governance Committee + Board

---

## RISK MITIGATION STRATEGIES (BY PATTERN)

### From Walmart (Centralized Risk)
- **Risk**: Big bet, high failure cost
- **Gap Mitigation**: Phased investment (Year 1 pilots, Year 2 scale, Year 3 optimize)

### From LVMH (Maison Autonomy Risk)
- **Risk**: Fragmentation, duplication
- **Gap Mitigation**: Shared platform (one agentic system), cross-brand governance

### From Target (Federated Risk)
- **Risk**: No centralized oversight, inconsistent quality
- **Gap Mitigation**: Office of AI provides guardrails, risk frameworks, compliance

### From Enterprise Best Practices
- **Risk**: Shadow AI, tool sprawl, compliance violations
- **Gap Mitigation**: Governance Committee, RACI matrices, automated compliance checks

---

## GOVERNANCE MATURITY MODEL

### Level 1: Ad-Hoc (Target's Current State)
- No centralized governance
- Functional teams deploy AI independently
- No risk frameworks
- Reactive to incidents

### Level 2: Defined (Walmart's Approach)
- Centralized strategy
- Federated execution
- Basic risk management (literacy programs)
- Purposeful scaling

### Level 3: Managed (LVMH's Approach)
- Shared platform with brand autonomy
- Dashboard use as KPI
- Non-adoption halts initiatives
- Cross-brand learning

### Level 4: Optimized (Gap's Target State)
- Hybrid governance (central + federated)
- AI Governance Committee
- Automated compliance
- Continuous improvement
- Budget reduction through efficiency

**Gap's Goal**: Reach Level 4 by Year 2

---

## VALIDATION QUESTIONS FOR MICAL

Before moving to Cycle 3 (Operating Models):

1. **Does the hybrid governance model (LVMH autonomy + enterprise best practices) feel right?** Or should we lean more centralized (Walmart) or more federated (Target)?

2. **AI Governance Committee composition — who's missing?** Should HR be included (employee AI adoption)? Should Finance be separate from CFO?

3. **Escalation path — 4 levels feel right?** Or should there be a faster path to CEO for critical incidents?

4. **Risk taxonomy — which category feels most urgent for Gap?** Brand safety? Operational? Compliance? Employee trust? Financial?

5. **Ready for Cycle 3 (Operating Models for Multi-Brand AI)?** Or dig deeper on governance first?

---

**SOURCES**:
[1] Enterprise AI governance frameworks (McKinsey, BCG, Deloitte, Gartner)
[2] Walmart 2025 AI framework announcements
[3] Target AI initiatives announcements
[4] Databricks AI Governance Framework
[5] Deloitte 2026 AI report
[6] AI Governance Committee best practices
[7] Cross-functional governance structures
[8] Regulatory alignment frameworks (EU AI Act, GDPR)
