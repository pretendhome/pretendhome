# Job Search & Interview Preparation System

**Version**: 1.0  
**Last Updated**: February 16, 2026  
**Status**: Active Job Search

---

## Overview

End-to-end toolkit for strategic job search and interview preparation, modeled after Interview Kickstart methodology. This system transforms job searching from reactive application spam into a strategic, data-driven process.

**Philosophy**: Quality over quantity. Every application is tailored. Fit assessment is the gateway.

---

## Quick Start

### For a New Job Opportunity:

1. **Copy the template**:
   ```bash
   cp -r applications/_application-template applications/active/{company}-{role}
   ```

2. **Run fit assessment**:
   - Save JD to `jd.md`
   - Use `/prompts/fit-assessment-prompt.md`
   - Score the role (0-100)

3. **Decision gate**:
   - **Fit 85+** (Tier 1): Apply immediately
   - **Fit 75-84** (Tier 2): Apply this week
   - **Fit 65-74** (Tier 3): Apply if time permits
   - **Fit <65**: Pass

4. **If proceeding**:
   - Follow `/tools/job-search-checklist.md`
   - Use templates from `/templates/`
   - Track in `/pipeline/pipeline-tracker.md`

---

## Directory Guide

### `/profile` — Your Career Assets
Your master profile, stories, and achievements. **Single source of truth** for all applications.

- `master-resume.md` — Complete work history
- `career-analysis.md` — Role fit scores, target roles, strengths/gaps
- `stories/` — STAR stories library (reusable across applications)
- `numbers-inventory.md` — Quantified achievements
- `skills-matrix.md` — Skills mapped to evidence
- `references.md` — Reference contacts

### `/templates` — Reusable Templates
Copy-paste starting points for all materials.

- `resume/` — Resume templates by role type (FDE, TPM, AI Enablement, Strategy)
- `cover-letter/` — Cover letter templates and examples
- `outreach/` — Recruiter responses, referral requests, follow-ups
- `interview-prep/` — STAR story template, 90-day plan, questions
- `negotiation/` — Comp research, negotiation scripts

### `/applications` — Active and Historical Applications
One folder per application with all materials.

- `_application-template/` — **Copy this for each new application**
- `active/` — In-progress applications
- `completed/` — Submitted, awaiting response
- `archived/` — Rejected, withdrawn, or closed

### `/pipeline` — Job Search Pipeline Management
Track opportunities, networking, and weekly goals.

- `pipeline-tracker.md` — Master list of all opportunities (tiered by fit)
- `target-companies.md` — Companies to proactively research
- `target-roles.md` — Role types ranked by fit
- `networking-tracker.md` — Contacts, referrals, follow-ups
- `weekly-goals.md` — Weekly job search objectives

### `/research` — Market and Company Research
Salary data, industry trends, company deep dives.

- `salary-benchmarks.md` — Compensation data by role/location
- `industry-trends.md` — AI/ML job market insights
- `company-intel/` — Deep dives on target companies

### `/prompts` — AI Assistant Prompts
Copy-paste prompts for Claude/GPT to accelerate each phase.

- `fit-assessment-prompt.md` — Role fit scoring
- `resume-tailoring-prompt.md` — Resume customization
- `cover-letter-prompt.md` — Cover letter generation
- `interview-prep-prompt.md` — Interview preparation
- `company-research-prompt.md` — Company deep dive
- `compensation-research-prompt.md` — Comp analysis
- `story-polish-prompt.md` — STAR story refinement
- `deep-research-prompt.md` — Comprehensive job market research

### `/tools` — Process Checklists
Step-by-step guides for each phase.

- `job-search-checklist.md` — Complete process per application
- `status-definitions.md` — Pipeline stage definitions

---

## Core Processes

### Phase 1: Opportunity Identification
- Monitor job boards (LinkedIn, company sites, referrals)
- Use keywords: "AI Enablement", "Forward Deployed Engineer", "AI Outcomes", "TPM AI/ML", "AI Strategy"
- Maintain target company list
- Track networking and referrals

### Phase 2: Fit Assessment (30 minutes)
- Save JD to application folder
- Run fit assessment prompt
- Score 0-100 based on:
  - Role responsibilities match (40%)
  - Required skills match (30%)
  - Company/industry fit (20%)
  - Growth opportunity (10%)
- Identify strengths and gaps
- Make go/no-go decision

### Phase 3: Application Preparation (2-3 hours)
- **Company research**: Product, funding, news, culture, hiring manager
- **Resume tailoring**: Mirror JD language, highlight relevant experience
- **Cover letter**: If required, use template and customize
- **Application fields**: Prepare responses (why this company, salary expectations)
- **Compensation research**: Benchmark salary for role/location

### Phase 4: Submission
- Submit application
- Save confirmation
- Log in pipeline tracker
- Set follow-up reminder (1 week)

### Phase 5: Interview Preparation (3-4 hours)
- **Deep company research**: Product, competitors, recent news, culture
- **STAR stories**: Select 3-5 stories mapped to JD requirements
- **Technical prep**: Review relevant technical topics
- **90-day plan**: Draft plan for first 90 days in role
- **Questions for them**: Prepare 5-10 intelligent questions
- **Weakness framing**: Prepare honest but strategic responses

### Phase 6: Interview Execution
- Confirm logistics (time, location, format)
- Test tech (if video)
- Bring materials to reference
- Send thank you within 24 hours
- Debrief and update pipeline

### Phase 7: Negotiation (if offer received)
- Research market comp
- Evaluate total package (base, equity, benefits, growth)
- Prepare counter-offer strategy
- Use negotiation scripts from templates

### Phase 8: Pipeline Management (ongoing)
- Update pipeline tracker weekly
- Follow up on pending applications
- Review weekly goals
- Adjust strategy based on data

---

## Templates Available

### Resumes (by role type):
- `resume-template-fde.md` — Forward Deployed Engineer (Agentic)
- `resume-template-tpm.md` — Technical Program Manager AI/ML
- `resume-template-ai-enablement.md` — AI Enablement Lead
- `resume-template-strategy.md` — AI Strategy Manager

### Cover Letters:
- `cover-letter-template.md` — Generic structure
- `cover-letter-examples/` — Real examples from past applications

### Outreach:
- `recruiter-response-template.md` — Responding to recruiter outreach
- `hiring-manager-outreach.md` — Cold outreach to hiring managers
- `referral-request.md` — Asking for referrals
- `follow-up-templates.md` — Post-application and post-interview follow-ups

### Interview Prep:
- `star-story-template.md` — Structure for behavioral stories
- `90-day-plan-template.md` — First 90 days in role
- `questions-for-them.md` — Questions to ask interviewers
- `technical-prep-checklist.md` — Technical topics to review

### Negotiation:
- `comp-research-template.md` — Salary benchmarking
- `negotiation-scripts.md` — Counter-offer language

---

## AI Prompts (When to Use Each)

### `fit-assessment-prompt.md`
**When**: Immediately after finding a new job posting  
**Output**: Fit score (0-100), strengths/gaps analysis, go/no-go recommendation

### `resume-tailoring-prompt.md`
**When**: After deciding to apply (fit 65+)  
**Output**: Tailored resume mirroring JD language

### `cover-letter-prompt.md`
**When**: If cover letter is required or recommended  
**Output**: Customized cover letter highlighting fit

### `interview-prep-prompt.md`
**When**: Interview scheduled  
**Output**: Company research, STAR story selection, 90-day plan, questions

### `company-research-prompt.md`
**When**: Before applying or before interview  
**Output**: Company overview, product, funding, culture, news

### `compensation-research-prompt.md`
**When**: Before setting salary expectations or negotiating  
**Output**: Market comp data, negotiation strategy

### `story-polish-prompt.md`
**When**: Preparing for behavioral interviews  
**Output**: Refined STAR stories with clear impact

### `deep-research-prompt.md`
**When**: Targeting a specific company or role type  
**Output**: Comprehensive market analysis, company intel, role insights

---

## Current Pipeline

See `/pipeline/pipeline-tracker.md` for live status.

**Summary** (as of Feb 16, 2026):
- Active Applications: 6
- Interviews Scheduled: 1
- Offers: 0
- Target Weekly Applications: 3-5 (Tier 1 and Tier 2 only)

---

## Success Metrics

### Application Quality:
- Fit score average: 80+ (only apply to strong fits)
- Resume tailoring: 100% (every resume is customized)
- Cover letter when required: 100%

### Pipeline Velocity:
- Time to apply (Tier 1): <24 hours
- Time to apply (Tier 2): <1 week
- Interview prep time: 3-4 hours (systematic, not ad-hoc)

### Outcomes:
- Application-to-interview rate: Target 20%+
- Interview-to-offer rate: Target 30%+
- Offer acceptance rate: Target 80%+ (only pursue strong fits)

---

## System Maintenance

### Weekly:
- Update pipeline tracker
- Review weekly goals
- Follow up on pending applications
- Add new target companies

### Monthly:
- Review fit assessment accuracy (did interviews match expectations?)
- Update salary benchmarks
- Refresh STAR stories
- Update master resume with new achievements

### Per Application:
- Save all materials to application folder
- Log status in pipeline tracker
- Set follow-up reminders
- Debrief after interviews

---

## Tips for Success

### Do:
- ✅ Run fit assessment for every opportunity
- ✅ Tailor every resume to the JD
- ✅ Research the company before applying
- ✅ Prepare 3-5 STAR stories for interviews
- ✅ Send thank you notes within 24 hours
- ✅ Track everything in the pipeline

### Don't:
- ❌ Apply to roles with fit <65 (waste of time)
- ❌ Use generic resumes or cover letters
- ❌ Skip company research
- ❌ Wing behavioral interviews
- ❌ Forget to follow up
- ❌ Lose track of applications

---

## Getting Help

### For fit assessment:
Use `/prompts/fit-assessment-prompt.md` with Claude or GPT

### For resume tailoring:
Use `/prompts/resume-tailoring-prompt.md` with your master resume and JD

### For interview prep:
Use `/prompts/interview-prep-prompt.md` with company research and JD

### For everything else:
Follow `/tools/job-search-checklist.md` step-by-step

---

## Version History

### v1.0 (Feb 16, 2026)
- Initial system creation
- Migrated content from Gap, Glean, FriendliAI, LinkedIn, Teradata, HappyRobot applications
- Created templates, prompts, and process docs
- Established pipeline tracker

---

**This system is your career coach on demand. Use it systematically, and you'll land the right role faster.**
