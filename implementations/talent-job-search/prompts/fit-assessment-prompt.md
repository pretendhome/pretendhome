# Fit Assessment Prompt

**Purpose**: Score job opportunities (0-100) and identify strengths/gaps  
**Time**: 5-10 minutes  
**Output**: Fit score, tier recommendation, gap analysis

---

## Instructions

Copy this prompt and provide it to Claude or GPT along with:
1. The job description
2. Your master resume (`/profile/master-resume.md`)

---

## Prompt

```
You are a career coach helping me assess fit for a job opportunity. I need you to:

1. **Score this role 0-100** based on:
   - Role responsibilities match (40 points)
   - Required skills match (30 points)
   - Company/industry fit (20 points)
   - Growth opportunity (10 points)

2. **Identify my strengths** for this role (what makes me a strong candidate)

3. **Identify gaps** (what I'm missing or weak on)

4. **Recommend a tier**:
   - Tier 1 (85-100): Apply immediately (within 24 hours)
   - Tier 2 (75-84): Apply this week
   - Tier 3 (65-74): Apply if time permits
   - Pass (<65): Not worth the time

5. **Provide go/no-go recommendation** with reasoning

---

## My Profile

**Target Roles**:
- AI Enablement Lead
- Forward Deployed Engineer (Agentic)
- AI Outcomes Manager
- Technical Program Manager AI/ML
- AI Strategy Manager

**Core Strengths**:
- 11+ years at Amazon (AWS, AGI, Alexa)
- Built Palette: 3-tier agentic system (105 RIUs, 93 knowledge library entries, 7 production agents)
- AWS GenAI partnerships: Launched 27+ models, grew Stability AI 5X YoY
- Enterprise enablement: +17% attendance, +50% high-CSAT sessions, +67% sales plays covered
- Customer-facing: 291+ data leaders, 98+ CxOs, 24% YoY growth
- Technical: Agentic systems, RAG, embeddings, LLMs, prompt engineering
- Languages: Native French, fluent Italian, proficient Spanish

**Growth Edges**:
- Backend ownership (can architect, less hands-on coding)
- Unfamiliar codebases (can learn quickly, not instant)
- Infra/perf awareness (understand concepts, less deep expertise)
- GTM framing (strong on enablement, less on sales/marketing)
- Sales pressure (comfortable with customers, less with quota pressure)

**Deal Breakers**:
- Pure research roles (I'm a builder and enabler, not a researcher)
- Roles requiring PhD or deep ML research background
- Roles requiring 5+ years in a specific industry I don't have (e.g., healthcare, finance)
- Roles requiring hands-on coding 80%+ of the time
- Roles with no customer interaction (I thrive on customer-facing work)

---

## Job Description

[PASTE JOB DESCRIPTION HERE]

---

## My Resume

[PASTE YOUR MASTER RESUME HERE]

---

## Output Format

Please provide your assessment in this format:

### Fit Score: X/100

**Breakdown**:
- Role responsibilities match: X/40
- Required skills match: X/30
- Company/industry fit: X/20
- Growth opportunity: X/10

### Tier: [1, 2, 3, or Pass]

### Strengths (Why I'm a Strong Candidate)
1. [Strength 1]
2. [Strength 2]
3. [Strength 3]

### Gaps (What I'm Missing or Weak On)
1. [Gap 1]
2. [Gap 2]
3. [Gap 3]

### Recommendation: [Apply Immediately / Apply This Week / Apply If Time / Pass]

**Reasoning**: [1-2 sentences explaining the recommendation]

### Key Talking Points (If Applying)
- [Talking point 1: How to position strength]
- [Talking point 2: How to address gap]
- [Talking point 3: Why this role is a fit]
```

---

## Example Output

### Fit Score: 88/100

**Breakdown**:
- Role responsibilities match: 36/40 (Strong match on AI enablement, customer-facing work, agentic systems)
- Required skills match: 26/30 (Have most required skills, light on specific tool X)
- Company/industry fit: 18/20 (Company stage and culture align well)
- Growth opportunity: 8/10 (Good growth potential, some overlap with past roles)

### Tier: 1 (Apply Immediately)

### Strengths (Why I'm a Strong Candidate)
1. **Agentic systems expertise**: Built Palette (3-tier system, 7 production agents) - directly maps to role requirements
2. **Customer-facing experience**: Worked with 291+ data leaders, 98+ CxOs - strong fit for customer outcomes role
3. **Proven enablement track record**: +17% attendance, +50% high-CSAT sessions - demonstrates ability to drive adoption

### Gaps (What I'm Missing or Weak On)
1. **Tool X experience**: Role mentions Tool X, which I haven't used (but similar to Tool Y I have used)
2. **Industry Z background**: Role prefers Industry Z experience, which I don't have (but have transferable skills)
3. **Hands-on coding**: Role mentions some coding, which is a growth edge for me (can do, but not my strength)

### Recommendation: Apply Immediately

**Reasoning**: Strong fit on core responsibilities (AI enablement, customer-facing, agentic systems) with minor gaps that are addressable. Company stage and culture align well. This is a Tier 1 opportunity.

### Key Talking Points (If Applying)
- Lead with Palette (proof of agentic systems expertise)
- Emphasize customer-facing experience (291+ data leaders, 98+ CxOs)
- Address Tool X gap by highlighting similar Tool Y experience and ability to learn quickly
- Frame Industry Z gap as "domain-agnostic methodology" (proven ability to enable across industries)

---

## After Running This Prompt

1. Save the output to `fit-assessment.md` in your application folder
2. If fit score is 65+, proceed with application preparation
3. If fit score is <65, move application folder to `archived/` and pass on this opportunity
4. Add the opportunity to `/pipeline/pipeline-tracker.md` with the appropriate tier
