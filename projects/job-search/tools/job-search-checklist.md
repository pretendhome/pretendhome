# Job Search Checklist

**Purpose**: Step-by-step process for each job application  
**Time**: 30 min assessment + 2-3 hours if proceeding + 3-4 hours interview prep

---

## New Opportunity Identified

### Step 1: Initial Assessment (30 minutes)

- [ ] Create application folder:
  ```bash
  cp -r applications/_application-template applications/active/{company}-{role}
  cd applications/active/{company}-{role}
  ```

- [ ] Save job description to `jd.md`

- [ ] Run fit assessment:
  - Use `/prompts/fit-assessment-prompt.md`
  - Provide JD + your master resume
  - Get fit score (0-100) and gap analysis

- [ ] Record fit score in `fit-assessment.md`

- [ ] Make go/no-go decision:
  - **85-100** (Tier 1): Apply immediately (within 24 hours)
  - **75-84** (Tier 2): Apply this week
  - **65-74** (Tier 3): Apply if time permits
  - **<65**: Pass (not worth the time)

- [ ] If passing, move folder to `applications/archived/` and stop here

- [ ] If proceeding, add to `/pipeline/pipeline-tracker.md`

---

## Application Preparation (2-3 hours)

### Step 2: Company Research (30 minutes)

- [ ] Company overview:
  - [ ] What do they do? (product/service)
  - [ ] Who are their customers?
  - [ ] Funding stage and investors
  - [ ] Recent news (launches, funding, leadership changes)

- [ ] Culture research:
  - [ ] Glassdoor reviews
  - [ ] LinkedIn employee posts
  - [ ] Company values and mission

- [ ] Hiring manager research:
  - [ ] Find hiring manager on LinkedIn
  - [ ] Review their background
  - [ ] Look for mutual connections

- [ ] Save research to `company-research.md`

### Step 3: Compensation Research (15 minutes)

- [ ] Use `/prompts/compensation-research-prompt.md`

- [ ] Research market comp for:
  - [ ] Role type
  - [ ] Location
  - [ ] Company stage (startup vs. enterprise)
  - [ ] Your experience level

- [ ] Determine salary range:
  - [ ] Minimum acceptable
  - [ ] Target
  - [ ] Stretch

- [ ] Save to `compensation.md`

### Step 4: Resume Tailoring (45 minutes)

- [ ] Use `/prompts/resume-tailoring-prompt.md`

- [ ] Provide:
  - [ ] Your master resume (`/profile/master-resume.md`)
  - [ ] Job description (`jd.md`)
  - [ ] Fit assessment (`fit-assessment.md`)

- [ ] Review AI-generated resume:
  - [ ] Mirror JD language (keywords, phrases)
  - [ ] Highlight relevant experience
  - [ ] Quantify achievements
  - [ ] Remove irrelevant details

- [ ] Save tailored resume to `resume.md`

- [ ] Export to PDF/DOCX if required

### Step 5: Cover Letter (30 minutes, if required)

- [ ] Check if cover letter is required or recommended

- [ ] If yes, use `/prompts/cover-letter-prompt.md`

- [ ] Provide:
  - [ ] Job description
  - [ ] Company research
  - [ ] Your fit assessment

- [ ] Review AI-generated cover letter:
  - [ ] Personalize opening (why this company)
  - [ ] Highlight 2-3 key fit points
  - [ ] Show enthusiasm and cultural fit
  - [ ] Strong closing with call to action

- [ ] Save to `cover-letter.md`

### Step 6: Application Form Fields (15 minutes)

- [ ] Prepare responses for common fields:
  - [ ] Why do you want to work here?
  - [ ] Why are you a good fit for this role?
  - [ ] Salary expectations
  - [ ] Availability to start
  - [ ] Work authorization
  - [ ] Referral source

- [ ] Save to `application-fields.md`

---

## Submission (15 minutes)

### Step 7: Submit Application

- [ ] Submit via company portal or email

- [ ] Save confirmation:
  - [ ] Screenshot or email confirmation
  - [ ] Application ID (if provided)
  - [ ] Submission date

- [ ] Update `README.md` in application folder:
  - [ ] Status: "Submitted"
  - [ ] Date submitted
  - [ ] Next action: "Follow up in 1 week"

- [ ] Update `/pipeline/pipeline-tracker.md`:
  - [ ] Move to appropriate tier
  - [ ] Set follow-up date

- [ ] Set calendar reminder:
  - [ ] Follow up in 1 week if no response

- [ ] Move folder to `applications/completed/` (awaiting response)

---

## Interview Scheduled (3-4 hours prep)

### Step 8: Deep Company Research (45 minutes)

- [ ] Use `/prompts/company-research-prompt.md` for deep dive

- [ ] Research:
  - [ ] Product deep dive (features, pricing, customers)
  - [ ] Competitors and differentiation
  - [ ] Recent news and press releases
  - [ ] Leadership team backgrounds
  - [ ] Company culture and values
  - [ ] Glassdoor interview reviews

- [ ] Update `company-research.md`

### Step 9: STAR Story Selection (45 minutes)

- [ ] Review job description requirements

- [ ] Select 3-5 STAR stories from `/profile/stories/` that map to:
  - [ ] Key responsibilities in JD
  - [ ] Required skills
  - [ ] Company values

- [ ] For each story, prepare:
  - [ ] Situation (context)
  - [ ] Task (challenge)
  - [ ] Action (what you did)
  - [ ] Result (quantified impact)

- [ ] Use `/prompts/story-polish-prompt.md` to refine

- [ ] Save selected stories to `interview-prep.md`

### Step 10: Technical Preparation (30 minutes)

- [ ] Review technical topics relevant to role:
  - [ ] AI/ML concepts (if technical role)
  - [ ] Agentic systems architecture
  - [ ] RAG, embeddings, LLMs
  - [ ] Tools and platforms mentioned in JD

- [ ] Prepare talking points for:
  - [ ] Palette (your agentic system)
  - [ ] AWS GenAI partnerships
  - [ ] Relevant projects

- [ ] Add to `interview-prep.md`

### Step 11: 90-Day Plan (30 minutes)

- [ ] Use `/templates/interview-prep/90-day-plan-template.md`

- [ ] Draft plan for first 90 days:
  - [ ] Days 1-30: Learn (shadow, meet team, understand product)
  - [ ] Days 31-60: Contribute (lead small projects, build relationships)
  - [ ] Days 61-90: Scale (own larger initiatives, measure outcomes)

- [ ] Tailor to role and company

- [ ] Add to `interview-prep.md`

### Step 12: Questions for Them (15 minutes)

- [ ] Prepare 5-10 intelligent questions:
  - [ ] About the role (success metrics, challenges, team structure)
  - [ ] About the company (product roadmap, culture, growth)
  - [ ] About the team (who you'd work with, collaboration style)
  - [ ] About the interviewer (their experience, what they love about company)

- [ ] Use `/templates/interview-prep/questions-for-them.md`

- [ ] Add to `interview-prep.md`

### Step 13: Weakness Framing (15 minutes)

- [ ] Prepare honest but strategic responses for:
  - [ ] "What's your biggest weakness?"
  - [ ] "Tell me about a time you failed"
  - [ ] "What's a skill you're working to improve?"

- [ ] Frame as:
  - [ ] Honest acknowledgment
  - [ ] What you're doing to improve
  - [ ] Progress you've made

- [ ] Add to `interview-prep.md`

### Step 14: Logistics (15 minutes)

- [ ] Confirm interview details:
  - [ ] Date and time (convert to your timezone)
  - [ ] Format (phone, video, in-person)
  - [ ] Duration
  - [ ] Who you're meeting with

- [ ] If video:
  - [ ] Test tech (camera, mic, internet)
  - [ ] Check background and lighting
  - [ ] Have backup plan (phone number if tech fails)

- [ ] If in-person:
  - [ ] Confirm location and parking
  - [ ] Plan to arrive 10 minutes early
  - [ ] Bring printed resume

- [ ] Prepare materials to reference:
  - [ ] Print `interview-prep.md`
  - [ ] Have company research handy
  - [ ] Have questions ready

---

## Post-Interview (30 minutes)

### Step 15: Thank You Note

- [ ] Send within 24 hours

- [ ] Personalize for each interviewer:
  - [ ] Thank them for their time
  - [ ] Reference specific conversation points
  - [ ] Reiterate your interest and fit
  - [ ] Mention next steps

- [ ] Save to `communications/thank-you-{name}.md`

### Step 16: Debrief

- [ ] Write debrief notes:
  - [ ] What went well
  - [ ] What could have been better
  - [ ] Questions they asked
  - [ ] Red flags or concerns
  - [ ] Your level of interest (still high? changed?)

- [ ] Save to `interview-prep.md`

### Step 17: Update Pipeline

- [ ] Update `README.md` in application folder:
  - [ ] Status: "Interviewed"
  - [ ] Date of interview
  - [ ] Next action: "Awaiting feedback"

- [ ] Update `/pipeline/pipeline-tracker.md`

- [ ] Set follow-up reminder:
  - [ ] If they gave timeline, follow up 1 day after
  - [ ] If no timeline, follow up in 1 week

---

## Offer Received (2-3 hours)

### Step 18: Evaluate Offer

- [ ] Review offer details:
  - [ ] Base salary
  - [ ] Equity (type, vesting schedule, strike price)
  - [ ] Bonus/commission
  - [ ] Benefits (health, 401k, PTO, etc.)
  - [ ] Start date
  - [ ] Other perks

- [ ] Compare to market comp research

- [ ] Evaluate total package:
  - [ ] Is base salary at or above target?
  - [ ] Is equity meaningful? (% of company, valuation)
  - [ ] Are benefits competitive?
  - [ ] Is there room for growth?

- [ ] Save offer details to `compensation.md`

### Step 19: Negotiation (if needed)

- [ ] Use `/prompts/compensation-research-prompt.md` to validate market comp

- [ ] Use `/templates/negotiation/negotiation-scripts.md` for language

- [ ] Prepare counter-offer:
  - [ ] Be specific (numbers, not ranges)
  - [ ] Justify with market data
  - [ ] Be collaborative, not adversarial
  - [ ] Have walk-away number in mind

- [ ] Negotiate via phone or video (not email)

- [ ] Save negotiation notes to `compensation.md`

### Step 20: Decision

- [ ] Make final decision:
  - [ ] Does role align with career goals?
  - [ ] Is compensation fair?
  - [ ] Is company culture a fit?
  - [ ] Is there growth opportunity?
  - [ ] Do you trust the leadership?

- [ ] If accepting:
  - [ ] Send acceptance email
  - [ ] Confirm start date
  - [ ] Ask about onboarding process
  - [ ] Update pipeline tracker
  - [ ] Move folder to `applications/archived/`

- [ ] If declining:
  - [ ] Send polite decline email
  - [ ] Thank them for the opportunity
  - [ ] Keep door open for future
  - [ ] Update pipeline tracker
  - [ ] Move folder to `applications/archived/`

---

## Weekly Pipeline Review (30 minutes)

### Step 21: Review Pipeline

- [ ] Open `/pipeline/pipeline-tracker.md`

- [ ] For each active application:
  - [ ] Check status
  - [ ] Follow up if needed
  - [ ] Update next action

- [ ] Review weekly goals:
  - [ ] Did you hit target applications? (3-5 per week)
  - [ ] Are you focusing on Tier 1 and Tier 2?
  - [ ] Are you following up consistently?

- [ ] Adjust strategy:
  - [ ] Are you getting interviews? (target 20%+ of applications)
  - [ ] Are you getting offers? (target 30%+ of interviews)
  - [ ] Do you need to adjust fit assessment criteria?

- [ ] Set goals for next week

---

## Time Estimates

| Phase | Time | When |
|-------|------|------|
| Fit Assessment | 30 min | Immediately upon finding opportunity |
| Application Prep | 2-3 hours | Within 24 hours (Tier 1) or 1 week (Tier 2) |
| Interview Prep | 3-4 hours | As soon as interview is scheduled |
| Post-Interview | 30 min | Within 24 hours of interview |
| Offer Evaluation | 2-3 hours | Upon receiving offer |
| Weekly Review | 30 min | Every Sunday |

**Total per application**: 6-10 hours (spread over 2-4 weeks)

---

## Success Criteria

- [ ] Every application has a fit score (no blind applications)
- [ ] Every resume is tailored to the JD
- [ ] Every interview has 3-5 prepared STAR stories
- [ ] Every interview has a 90-day plan
- [ ] Every interview has 5-10 questions prepared
- [ ] Every interview gets a thank you note within 24 hours
- [ ] Pipeline is updated weekly
- [ ] Follow-ups are sent consistently

---

**Use this checklist for every application. Consistency = results.**
