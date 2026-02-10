# 30-Minute Demo: AI Use Case & Metrics - Problem Framing and AI Fit

**Instructor**: Mical  
**Date**: 2026-02-11  
**Duration**: 30 minutes  
**Audience**: PM/TPM/EM candidates preparing for AI/agentic system interviews

---

## Learning Objectives

By the end of this session, you will:
1. Know how to frame problems to determine if AI is a good fit
2. Understand how to assess market validation using company/funding data
3. Have a repeatable framework for answering "Is this a good AI use case?" in interviews
4. Know how to differentiate in mature vs. emerging AI markets

---

## Session Structure

1. **Introduction** (2 min) - Why this matters in interviews
2. **Framework: Problem Framing for AI Fit** (8 min) - The 4-question method
3. **Market Validation Using Company Data** (8 min) - How to assess if a problem is real
4. **Interview Scenarios** (10 min) - 2 concrete examples with frameworks
5. **Common Mistakes & Wrap-Up** (2 min) - What interviewers look for

---

## 1. Introduction (2 minutes)

### Why This Matters

In PM/TPM/EM interviews for AI roles, you'll face questions like:
- "How would you evaluate if [problem] is a good fit for AI?"
- "A customer wants to build [AI solution]. How do you assess viability?"
- "What metrics would you use to determine if this AI project is successful?"

**The trap**: Candidates jump to solutions without validating the problem is AI-suitable.

**What interviewers want**: Structured thinking that shows you can:
- Frame problems correctly
- Assess market validation
- Identify risks early
- Set success metrics before building

---

## 2. Framework: Problem Framing for AI Fit (8 minutes)

### The 4-Question Method

When evaluating if a problem is AI-suitable, ask these 4 questions in order:

#### Question 1: Is there a pattern?
**What you're checking**: Can this problem be solved by recognizing patterns in data?

**Good AI fit**:
- Customer support tickets (pattern: common questions)
- Code completion (pattern: syntax and context)
- Document extraction (pattern: invoice structure)

**Poor AI fit**:
- One-off strategic decisions (no pattern)
- Creative brand positioning (subjective, no clear pattern)
- Novel research problems (no historical data)

**Interview signal**: Shows you understand AI is pattern recognition, not magic.

---

#### Question 2: Is there data?
**What you're checking**: Is there enough quality data to train/fine-tune, or can you use existing models?

**Good AI fit**:
- Historical customer conversations (thousands of examples)
- Public code repositories (billions of lines)
- Existing documents (structured or semi-structured)

**Poor AI fit**:
- Brand new process (no historical data)
- Highly sensitive data (can't access for training)
- Rare events (not enough examples)

**Interview signal**: Shows you think about data availability before architecture.

---

#### Question 3: Is it repetitive or high-volume?
**What you're checking**: Does this problem happen often enough to justify AI investment?

**Good AI fit**:
- 10,000+ support tickets per month
- Developers writing code daily
- Processing 1,000+ documents per week

**Poor AI fit**:
- Quarterly strategic planning (4x per year)
- Annual compliance audits (1x per year)
- One-time data migration

**Interview signal**: Shows you understand ROI and prioritization.

---

#### Question 4: Can you measure success?
**What you're checking**: Are there clear metrics to know if AI is working?

**Good AI fit**:
- Support: Resolution time, CSAT, ticket deflection rate
- Code: Acceptance rate, time saved, bugs introduced
- Documents: Extraction accuracy, processing time

**Poor AI fit**:
- "Make our brand more innovative" (vague)
- "Improve employee morale" (indirect)
- "Better strategic decisions" (hard to attribute)

**Interview signal**: Shows you think about evaluation before building.

---

### Framework Summary

```
Is there a pattern? → YES
Is there data? → YES
Is it repetitive/high-volume? → YES
Can you measure success? → YES
→ GOOD AI FIT (proceed to scoping)

Any NO? → DIG DEEPER
- Can you reframe the problem?
- Can you start with a smaller scope?
- Is traditional software better?
```

---

## 3. Market Validation Using Company Data (8 minutes)

### Why Market Validation Matters

In interviews, you'll be asked: "How do you know if this AI idea is viable?"

**The answer**: Look at how many companies are solving this problem and how much funding they've raised.

**Funded companies = market validation**

---

### Validation Tiers

#### Tier 1: VERY HIGH VALIDATION (20+ companies, $1B+ total funding)
**Examples**:
- Customer support automation: 25+ companies, $1.2B+ (Sierra $525M, Intercom $240M, Ada $190M)
- Code generation: 30+ companies, $1.4B+ (Cursor $900M, Tabnine $55M, Codeium $65M)
- Sales intelligence: 25+ companies, $2B+ (Gong $584M, Clari $576M, Outreach $489M)

**What this means**:
- Proven ROI with billion-dollar valuations
- Clear customer demand (unicorns in 2 years)
- Mature market (harder to differentiate)

**Interview approach**: "This is a highly validated market. Here's how I'd differentiate..."

---

#### Tier 2: HIGH VALIDATION (10-20 companies, $200M-$1B)
**Examples**:
- Agentic workflow orchestration: 20+ companies, $200M+ (LangChain $35M, Sierra $525M, Dust $16M)
- AI governance: 10+ companies, $200M+ (Credo AI $21M, Arthur AI $47M, Fiddler AI $57M)
- Data observability: 10+ companies, $400M+ (Monte Carlo $236M, Anomalo $72M, Datafold $21M)

**What this means**:
- Growing category with strong validation
- Customer demand emerging (multiple unicorns forming)
- Room for differentiation

**Interview approach**: "This is a validated, growing category. Here's how I'd capture market share..."

---

#### Tier 3: LOW/GAP VALIDATION (0-5 companies, <$50M)
**Examples**:
- AI-powered decision logs: 0 companies (services, not product)
- Internal demo generation: 0 companies (consulting, not SaaS)
- Agent-specific patterns: 2-3 companies (too new, stealth)

**What this means**:
- Unproven market OR not AI-suitable
- High risk, high reward
- Need strong validation plan

**Interview approach**: "This is white space. Here's how I'd validate if it's real..."

---

### How to Use This in Interviews

**When asked**: "How would you evaluate if [problem] is viable?"

**Your answer structure**:
1. "Let me check market validation first..."
2. "I see [X] companies solving this with [Y] total funding..."
3. "This tells me [high/medium/low] validation..."
4. "Given that, my approach would be..."

**Example**:
> "Let me check market validation. I see 20+ companies in customer support automation with $700M+ in funding—companies like Intercom, Ada, and Forethought. This tells me it's a highly validated market with proven ROI. Given that, my approach would focus on differentiation: either vertical-specific (e.g., healthcare support) or workflow-specific (e.g., post-purchase support). The risk isn't 'will customers buy?'—it's 'how do we stand out?'"

---

## 4. Interview Scenarios (10 minutes)

### Scenario 1: Mature Market Assessment

**Interview Question**:
> "A customer wants to build an AI-powered customer support chatbot. How would you evaluate if this is a good idea?"

---

#### Your Answer Framework

**Step 1: Apply the 4-Question Method**

"Let me frame the problem first using 4 questions:

1. **Is there a pattern?** YES - Customer support has common questions, known resolution paths
2. **Is there data?** Need to check - Do they have historical tickets? Conversation logs?
3. **Is it repetitive?** Need to check - What's their ticket volume? (Need 1,000+ per month for ROI)
4. **Can we measure success?** YES - Ticket deflection rate, resolution time, CSAT

**Initial assessment**: Likely a good AI fit IF they have data and volume."

---

**Step 2: Check Market Validation**

"Let me check market validation:
- I see 25+ companies in this space with $1.2B+ total funding
- Key players: Sierra ($525M, $10B valuation in 2 years), Intercom ($240M), Ada ($190M)
- This is a **very highly validated market** with proven ROI and multiple unicorns

**What this tells me**: Customers will buy this. The challenge is differentiation."

---

**Step 3: Dig Deeper (Critical Questions)**

"Before proceeding, I'd ask:

1. **Data availability**: 'Do you have 6+ months of historical tickets with resolutions?'
   - If NO → Start with human-in-the-loop, build data set
   - If YES → Can fine-tune or use RAG

2. **Volume**: 'How many tickets per month?'
   - If <500 → ROI questionable, might not justify AI investment
   - If 1,000+ → Strong ROI case

3. **Differentiation**: 'What makes your support unique?'
   - Vertical-specific (healthcare, finance) → Domain expertise moat
   - Workflow-specific (post-purchase, technical) → Workflow moat
   - Generic → Hard to compete with Intercom/Ada

4. **Integration requirements**: 'What systems need to integrate?'
   - CRM, ticketing, knowledge base → Standard integrations
   - Custom internal tools → Integration complexity risk"

---

**Step 4: Recommendation**

"My recommendation:

**IF** they have data + volume + differentiation angle:
- **MVP scope**: Start with top 10 question types (80/20 rule)
- **Success metrics**: 
  - Early (0-3 months): Accuracy on top 10 questions (>85%)
  - Medium (3-6 months): Ticket deflection rate (>30%)
  - Long-term (6+ months): CSAT maintained or improved, cost per ticket reduced
- **Risk**: Differentiation in crowded market—need clear positioning

**IF** they lack data or volume:
- Consider traditional automation (decision trees, FAQs) first
- Build data set with human-in-the-loop
- Revisit AI in 6-12 months"

---

**What Interviewers Look For**:
- ✅ Structured thinking (4-question method)
- ✅ Market awareness (knew about competitors)
- ✅ Risk identification (differentiation challenge)
- ✅ Metrics-first approach (defined success criteria)
- ✅ Scoping discipline (MVP = top 10 questions, not everything)

---

### Scenario 2: Emerging Category Risk Assessment

**Interview Question**:
> "A customer wants to build an agentic workflow automation platform—AI agents that can orchestrate tasks across multiple tools. How would you evaluate this?"

---

#### Your Answer Framework

**Step 1: Apply the 4-Question Method**

"Let me frame this:

1. **Is there a pattern?** MAYBE - Workflows have patterns, but multi-tool orchestration is complex
2. **Is there data?** PARTIAL - Individual tool usage data exists, but cross-tool workflows are less documented
3. **Is it repetitive?** YES - If targeting common workflows (e.g., 'onboard new employee', 'process invoice')
4. **Can we measure success?** YES - Time saved, error rate, task completion rate

**Initial assessment**: Potentially good AI fit, but higher complexity than single-task AI."

---

**Step 2: Check Market Validation**

"Let me check market validation:
- I see 20+ companies in agentic orchestration with $200M+ funding
- Key players: Sierra ($525M, agentic customer support), LangChain ($35M), Dust ($16M), Fixie.ai ($17M)
- Plus open-source: CrewAI, AutoGen (Microsoft), LangGraph
- This is a **validated, rapidly growing category** (most companies founded 2022-2023)
- 80% are agentic-native (agent-first architecture)

**What this tells me**: 
- Market is forming with strong validation (Sierra hit $10B valuation in 2 years)
- Early adopters exist, but mainstream adoption still emerging
- High growth potential, but also higher risk than mature categories"

---

**Step 3: Dig Deeper (Critical Questions)**

"Before proceeding, I'd ask:

1. **Target workflow**: 'What specific workflow are you automating?'
   - Broad ('automate everything') → RED FLAG, too vague
   - Specific ('automate invoice processing across 3 tools') → Good starting point

2. **Tool integration complexity**: 'Which tools need to integrate?'
   - Standard APIs (Slack, Gmail, Salesforce) → Lower risk
   - Custom internal tools → High integration risk
   - Need to build connectors? → Scope creep risk

3. **Agent reliability requirements**: 'What happens if the agent makes a mistake?'
   - Low stakes (scheduling meetings) → Can tolerate errors
   - High stakes (financial transactions) → Need human-in-the-loop
   - Critical (healthcare, legal) → May not be ready for full automation

4. **Competitive positioning**: 'Why not use Zapier/Make + AI features?'
   - Need multi-step reasoning → Agentic approach justified
   - Simple if-then logic → Traditional automation sufficient"

---

**Step 4: Recommendation**

"My recommendation:

**IF** they have a specific, low-stakes workflow with standard tool integrations:
- **MVP scope**: ONE workflow, 3-5 tools max, human-in-the-loop for final approval
- **Success metrics**:
  - Early (0-3 months): Task completion rate (>70%), error rate (<10%)
  - Medium (3-6 months): Time saved per workflow (>50%), user adoption (>20 active users)
  - Long-term (6+ months): Expand to 2-3 workflows, reduce human-in-the-loop
- **Risk**: Category is emerging—customer education required, reliability expectations need management

**IF** they want broad automation or high-stakes workflows:
- **RED FLAG**: Too risky for current AI capabilities
- Recommend starting with traditional automation + AI enhancement
- Revisit full agentic approach in 12-18 months as tech matures

**Key difference from Scenario 1**:
- Mature market (support) → Risk is differentiation
- Emerging market (agentic) → Risk is category validation + reliability"

---

**What Interviewers Look For**:
- ✅ Risk awareness (emerging category = higher risk)
- ✅ Scoping discipline (ONE workflow, not everything)
- ✅ Reliability considerations (human-in-the-loop for new tech)
- ✅ Competitive awareness (why not Zapier?)
- ✅ Phased approach (crawl → walk → run)

---

## 5. Common Mistakes & Wrap-Up (2 minutes)

### Common Mistakes in Interviews

**Mistake 1: Jumping to Solutions**
- ❌ "We'll use GPT-4 with RAG and fine-tuning..."
- ✅ "Let me first validate if this is AI-suitable using the 4-question method..."

**Mistake 2: Ignoring Market Validation**
- ❌ "This is a great idea, let's build it!"
- ✅ "Let me check if other companies are solving this... I see 20+ companies with $700M funding, so it's validated..."

**Mistake 3: Vague Success Metrics**
- ❌ "We'll measure user satisfaction and engagement..."
- ✅ "Early metric: 85% accuracy on top 10 questions. Medium-term: 30% ticket deflection rate..."

**Mistake 4: Ignoring Risks**
- ❌ "AI can solve this easily!"
- ✅ "The risk here is differentiation in a crowded market. We'd need vertical-specific positioning..."

**Mistake 5: Over-Scoping MVP**
- ❌ "We'll automate all customer support..."
- ✅ "MVP: Top 10 question types, human-in-the-loop for edge cases..."

---

### What Interviewers Look For (By Role)

**PM (Product Manager)**:
- Customer empathy (did you ask about their data/volume?)
- Market awareness (knew about competitors)
- Prioritization (scoped to MVP, not everything)
- Metrics-first thinking (defined success before building)

**TPM (Technical Program Manager)**:
- Risk identification (data availability, integration complexity)
- Execution planning (phased approach, milestones)
- Cross-functional coordination (mentioned human-in-the-loop, customer education)
- Technical feasibility (understood AI limitations)

**EM (Engineering Manager)**:
- Technical depth (knew about RAG, fine-tuning, agentic architecture)
- Team scoping (realistic about what can be built in 3-6 months)
- Quality bar (mentioned accuracy thresholds, error rates)
- Reliability considerations (human-in-the-loop for high-stakes)

---

### Key Takeaways

1. **Use the 4-Question Method** to frame AI suitability:
   - Is there a pattern?
   - Is there data?
   - Is it repetitive/high-volume?
   - Can you measure success?

2. **Check market validation** using company/funding data:
   - 20+ companies, $500M+ = High validation (differentiation risk)
   - 10-20 companies, $100M-$500M = Emerging (category risk)
   - 0-5 companies, <$50M = White space (validation risk)

3. **Scope aggressively** for MVP:
   - Mature markets: Focus on differentiation
   - Emerging markets: Focus on ONE workflow, human-in-the-loop

4. **Define metrics early**:
   - Early (0-3 months): Accuracy, completion rate
   - Medium (3-6 months): Adoption, time saved
   - Long-term (6+ months): ROI, cost reduction

5. **Identify risks explicitly**:
   - Mature markets: Differentiation, competition
   - Emerging markets: Category validation, reliability
   - Always: Data availability, integration complexity

---

### Resources

**Company-RIU Mapping Library**: `/home/mical/fde/palette/company-library/v1.0/`
- 127 AI companies mapped to problem patterns
- Use to check market validation in interviews

**Practice**: Take any AI use case and apply the 4-question method + market validation check

---

**Questions?**

---

## Appendix: Quick Reference

### 4-Question Method Checklist
- [ ] Is there a pattern?
- [ ] Is there data?
- [ ] Is it repetitive/high-volume?
- [ ] Can you measure success?

### Market Validation Tiers
- **VERY HIGH**: 20+ companies, $1B+ (unicorns, proven ROI)
- **HIGH**: 10-20 companies, $200M-$1B (growing, validated)
- **MEDIUM**: 5-10 companies, $50M-$200M (emerging)
- **LOW/GAP**: 0-5 companies, <$50M (white space or unproven)

### MVP Scoping Rules
- Start with ONE workflow or top 10 use cases
- Human-in-the-loop for new tech
- 3-6 month timeline for first value

### Success Metrics Template
- **Early** (0-3 months): Accuracy, completion rate
- **Medium** (3-6 months): Adoption, time saved
- **Long-term** (6+ months): ROI, cost reduction
