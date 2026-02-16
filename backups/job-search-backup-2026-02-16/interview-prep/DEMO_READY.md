# Live Demo: "Find Me the Best Job Market Fit"

**Status**: READY FOR DEMO  
**Duration**: 2-3 minutes  
**Impact**: Shows Palette solving YOUR real problem in real-time

---

## What This Demo Does

**You say**: "Find me the best fits for today's job market"

**Palette does**:
1. **Argy** (Research) → Finds top 5 job matches with fit scores
2. **Rex** (Architecture) → Creates 30-day strategy + learning path
3. **Theri** (Build) → Generates customized resume for top role
4. **Anky** (Validate) → Calculates probability metrics (resume screen, phone screen, technical, culture fit)

**Output**: Actionable job search plan with probability of success for each role

---

## Why This Demo Wins

1. **Personal stakes** - You're solving YOUR real problem (audience invested)
2. **Multi-agent** - Shows Palette's core value (4 agents working together)
3. **Fast** - 2 minutes, full workflow (shows power)
4. **Concrete** - Real companies, real roles, real probabilities (not theory)
5. **Memorable** - "He found his next job during the demo"

**vs. Generic AI demo**: "Here's a chatbot"  
**This demo**: "Here's a multi-agent system with structured output and metrics"

---

## Setup (Before Class)

### 1. Install Dependencies
```bash
cd /home/mical/fde/projects/agent-class/interview-prep
pip3 install anthropic
```

### 2. Set API Key
```bash
export ANTHROPIC_API_KEY='sk-ant-...'
```

### 3. Test It Once
```bash
./setup_demo.sh
```

This will:
- Check Python 3 installed
- Check anthropic package installed
- Check API key set
- Run demo once and save backup output

### 4. Have Backup Ready
If live demo fails, show `demo_output_backup.txt`

---

## Demo Flow (What You Say)

### Before Demo (Slide: "Now Watch It In Action")

> "Alright, you've seen the framework. Now let me show you something real.
>
> I'm going to use Palette to solve MY actual problem right now. I just left AWS. I need a job.
>
> Watch what happens when I say: **'Find me the best fits for today's job market.'**"

### [Switch to Terminal, Run Command]

```bash
python3 demo_job_fit.py
```

### [While It Runs, Narrate]

> "This is a 4-agent workflow:
>
> **Argy** is searching the job market right now — Anthropic, OpenAI, Databricks — looking for roles where my agentic AI + customer-facing skills are the core value.
>
> **Rex** will build a strategy — what to apply to first, what skills to learn.
>
> **Theri** will generate a customized resume for the top role.
>
> **Anky** will calculate my probability of success — resume screen, phone screen, technical, culture fit.
>
> This is Palette in action. Real problem. Real output."

### [As Results Appear]

**Phase 1: Argy**
> "Top 5 matches. Fit scores: 92, 88, 85. Notice: It's telling me WHY each is a match and WHERE the gaps are."

**Phase 2: Rex**
> "Strategy: Apply to these 3 this week. Learn these 2 skills. Reach out to these people. That's prioritization."

**Phase 3: Theri**
> "Customized resume. Using keywords from the job description. This gets past the ATS."

**Phase 4: Anky**
> "Probability metrics. Resume: 85%. Phone: 90%. Technical: 88%. Overall: 87%. I know where to focus my prep."

### [Return to Slides]

> "That was 2 minutes. Four agents. Real problem solved.
>
> This is 'structured thinking' and 'metrics-first approach' in action.
>
> And by the way... I'm actually going to apply to those jobs after this class."

---

## Files

- `demo_job_fit.py` - Main demo script (4-agent workflow)
- `setup_demo.sh` - Setup script (checks dependencies, runs test)
- `DEMO_SCRIPT_LIVE.md` - Full narration script (this file)
- `demo_output_backup.txt` - Backup output (if live demo fails)

---

## Troubleshooting

**Problem**: API timeout  
**Solution**: Use backup output file

**Problem**: Rate limit  
**Solution**: Run setup script 5 minutes before class to warm up

**Problem**: Script fails  
**Solution**: Show backup output, say "Here's what it looks like when you run it"

---

## Post-Demo Q&A

**"How did you build this?"**
> "Palette Framework. Three tiers: Core principles, agent definitions, decision logs. Built over 2.5 years at AWS. Open source."

**"Does this really work?"**
> "I just showed you. And I'm applying to those jobs. I'll let you know if I get interviews."

**"Can I use this?"**
> "Absolutely. Swap out the candidate profile for yours. Framework works for any problem."

---

## The Power Move

**Most people**: Teach theory, show slides  
**You**: Solve your real problem live, with structured output and metrics

**That's the difference.** 🎯

---

## Checklist (Day of Demo)

- [ ] API key set (`echo $ANTHROPIC_API_KEY`)
- [ ] Script tested (`./setup_demo.sh`)
- [ ] Backup output ready (`demo_output_backup.txt`)
- [ ] Terminal window open and ready
- [ ] Narration script reviewed (`DEMO_SCRIPT_LIVE.md`)

**You're ready.** Go show them what Palette can do.
