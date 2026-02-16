# Job Search System — START HERE

**Welcome to your job search command center.**

---

## What Is This?

This is your end-to-end job search and interview preparation system. It's modeled after Interview Kickstart's methodology and incorporates all the processes we've developed during your recent applications (Glean, Gap Inc., FriendliAI, LinkedIn, Teradata, HappyRobot).

**Philosophy**: Quality over quantity. Every application is tailored. Fit assessment is the gateway.

---

## Quick Start (5 Minutes)

### 1. Read the README
Start with [README.md](README.md) — it explains the entire system.

### 2. Check Your Pipeline
Open [pipeline/pipeline-tracker.md](pipeline/pipeline-tracker.md) to see your current applications.

### 3. For a New Job Opportunity
Follow [tools/job-search-checklist.md](tools/job-search-checklist.md) step-by-step.

---

## Your Current Status (Feb 16, 2026)

**Active Applications**: 6  
**Interviews Scheduled**: 1 (FriendliAI on 2/17)  
**Offers**: 0

**This Week's Priorities**:
1. Prep for FriendliAI call (2/17)
2. Follow up on Pallet (2/17)
3. Follow up on Chime (2/19)
4. Apply to 3-5 new Tier 1 or Tier 2 opportunities

---

## How to Use This System

### For Every New Job Opportunity:

**Step 1: Assess Fit (30 min)**
```bash
# Copy the template
cp -r applications/_application-template applications/active/{company}-{role}

# Run fit assessment
# Use prompts/fit-assessment-prompt.md with Claude/GPT
```

**Step 2: If Fit 65+, Prepare Application (2-3 hours)**
- Company research
- Resume tailoring (use `prompts/resume-tailoring-prompt.md`)
- Cover letter (if required, use `prompts/cover-letter-prompt.md`)
- Application fields

**Step 3: Submit and Track**
- Submit application
- Update `pipeline/pipeline-tracker.md`
- Set follow-up reminder (1 week)

**Step 4: If Interview Scheduled, Prep (3-4 hours)**
- Deep company research
- Select 3-5 STAR stories from `profile/stories/`
- Draft 90-day plan
- Prepare questions for them
- Use `prompts/interview-prep-prompt.md`

---

## Key Files to Know

### Must-Read:
- [README.md](README.md) — System overview
- [tools/job-search-checklist.md](tools/job-search-checklist.md) — Step-by-step process
- [pipeline/pipeline-tracker.md](pipeline/pipeline-tracker.md) — Your current pipeline

### Templates:
- [applications/_application-template/](applications/_application-template/) — Copy this for each new application
- [templates/resume/](templates/resume/) — Resume templates by role type
- [templates/cover-letter/](templates/cover-letter/) — Cover letter templates

### Prompts (Use with Claude/GPT):
- [prompts/fit-assessment-prompt.md](prompts/fit-assessment-prompt.md) — Score job opportunities
- [prompts/resume-tailoring-prompt.md](prompts/resume-tailoring-prompt.md) — Tailor resume to JD
- [prompts/interview-prep-prompt.md](prompts/interview-prep-prompt.md) — Prepare for interviews

### Your Profile:
- [profile/master-resume.md](profile/master-resume.md) — Your complete work history
- [profile/stories/](profile/stories/) — STAR stories library
- [profile/numbers-inventory.md](profile/numbers-inventory.md) — Quantified achievements

---

## What's Already Done

### Migrated Applications:
- ✅ Glean (AI Outcomes Manager) — Interview prep complete
- ✅ Gap Inc (AI Strategy Manager) — Interview prep complete
- ⏳ FriendliAI (Agentic FDE) — Call scheduled 2/17
- ⏳ LinkedIn (TPM Core AI) — Applied, awaiting response
- ⏳ HappyRobot (French FDE) — Ready to apply
- ⏳ Teradata (AI Specialist France) — Applied, awaiting response

### Created Materials:
- ✅ System README and documentation
- ✅ Job search checklist (step-by-step process)
- ✅ Application template (copy for each new opportunity)
- ✅ Pipeline tracker (current status and weekly goals)
- ✅ Fit assessment prompt (score opportunities 0-100)
- ⏳ Resume tailoring prompt (coming next)
- ⏳ Interview prep prompt (coming next)
- ⏳ Profile assets (master resume, STAR stories, numbers inventory)

---

## Next Steps

### Immediate (Today):
1. Review [pipeline/pipeline-tracker.md](pipeline/pipeline-tracker.md)
2. Prep for FriendliAI call (2/17) — materials in `applications/active/friendliai-agentic-fde/`
3. Follow up on Pallet (2/17)

### This Week:
1. Follow up on Chime (2/19)
2. Follow up on Glean, Gap Inc, LinkedIn (2/23)
3. Apply to 3-5 new Tier 1 or Tier 2 opportunities
4. Reach out to 3 contacts for referrals

### Ongoing:
1. Check pipeline daily
2. Review pipeline weekly (Sundays)
3. Use fit assessment for every new opportunity
4. Tailor every resume and cover letter
5. Track everything

---

## Tips for Success

### Do:
- ✅ Run fit assessment for every opportunity (no blind applications)
- ✅ Only apply to Tier 1 and Tier 2 (fit 75+)
- ✅ Tailor every resume to the JD
- ✅ Prepare 3-5 STAR stories for interviews
- ✅ Send thank you notes within 24 hours
- ✅ Update pipeline weekly

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
Use [prompts/fit-assessment-prompt.md](prompts/fit-assessment-prompt.md) with Claude or GPT

### For resume tailoring:
Use [prompts/resume-tailoring-prompt.md](prompts/resume-tailoring-prompt.md) with your master resume and JD

### For interview prep:
Use [prompts/interview-prep-prompt.md](prompts/interview-prep-prompt.md) with company research and JD

### For everything else:
Follow [tools/job-search-checklist.md](tools/job-search-checklist.md) step-by-step

---

## Questions?

Read the [README.md](README.md) — it has everything you need.

---

**This system is your career coach on demand. Use it systematically, and you'll land the right role faster.**

**Good luck!** 🚀
