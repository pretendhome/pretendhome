# Live Demo Script: "Find Me the Best Job Market Fit"

**Duration**: 2-3 minutes  
**Impact**: Shows Palette solving YOUR real problem in real-time

---

## Setup (Before Demo)

```bash
cd /home/mical/fde/projects/agent-class/interview-prep
export ANTHROPIC_API_KEY='your-key-here'

# Test once to make sure it works
python demo_job_fit.py
```

---

## Demo Script (What You Say)

### Slide: "Now Watch It In Action"

**[Pause after explaining the framework]**

> "Alright, you've seen the framework. Now let me show you something real.
>
> I'm going to use Palette to solve MY actual problem right now. I just left AWS. I need a job.
>
> Watch what happens when I say: **'Find me the best fits for today's job market.'**"

---

### [Switch to Terminal]

**[Run the command]**
```bash
python demo_job_fit.py
```

**[While it runs, narrate]**

> "This is a 4-agent workflow:
>
> **Argy** (Research agent) is searching the job market right now — Anthropic, OpenAI, Databricks, AI startups — looking for roles where my agentic AI + customer-facing skills are the core value.
>
> **Rex** (Architecture agent) will take those matches and build a strategy — what to apply to first, what skills to learn, who to reach out to.
>
> **Theri** (Builder) will generate a customized resume for the top role.
>
> **Anky** (Validator) will calculate my probability of success for each role — resume screen, phone screen, technical interview, culture fit.
>
> This is Palette in action. Multi-agent workflow. Real problem. Real output."

---

### [As Results Appear]

**Phase 1: Argy Research**

> "Here's Argy. Top 5 job matches. Look at the fit scores — 92, 88, 85...
>
> Notice: It's not just listing jobs. It's telling me WHY each is a strong match and WHERE the gaps are.
>
> That's the 4-Question Method applied to each role."

**Phase 2: Rex Strategy**

> "Now Rex. Strategy for the next 30 days.
>
> Apply to these 3 roles this week. Learn these 2 skills in the next 2 weeks. Reach out to these people.
>
> This is what a TPM does — prioritize, sequence, de-risk."

**Phase 3: Theri Resume**

> "Theri just generated a customized resume summary for the top role.
>
> Notice: It's using keywords from the job description. It's emphasizing agentic AI and customer-facing work.
>
> This is what gets past the ATS and catches the recruiter's eye."

**Phase 4: Anky Probability**

> "And here's Anky with the probability metrics.
>
> Resume screen: 85%. Phone screen: 90%. Technical: 88%. Culture fit: 85%. Overall: 87%.
>
> This tells me: I have a strong shot, but I need to nail the technical interview. That's where I focus my prep."

---

### [Return to Slides]

**[Pause, let it sink in]**

> "That was 2 minutes. Four agents. Real problem solved.
>
> This is what I mean by 'structured thinking' and 'metrics-first approach.'
>
> The framework isn't theory — it's a tool you can use TODAY.
>
> And by the way... I'm actually going to apply to those jobs after this class."

**[Smile, wait for reaction]**

---

## Why This Demo Works

1. **Personal stakes** - You're solving YOUR real problem (audience feels it)
2. **Fast** - 2 minutes, full workflow (shows power)
3. **Concrete** - Real companies, real roles, real probabilities (not abstract)
4. **Multi-agent** - Shows Palette's core value (orchestration)
5. **Memorable** - They'll remember "he found his next job during the demo"

---

## Backup Plan (If Script Fails)

**Have a pre-run output ready** as a text file:

```bash
# Before the class, run once and save output
python demo_job_fit.py > demo_output.txt
```

If live demo fails, show the saved output and say:
> "Here's what it looks like when you run it..."

---

## Post-Demo Transition

> "Questions about the demo?
>
> [Take 1-2 questions]
>
> Alright, let's wrap up with key takeaways..."

**[Go to final slide]**

---

## Key Talking Points

**If they ask: "How did you build this?"**
> "Palette Framework. Three tiers: Core principles, agent definitions, decision logs. I built it over 2.5 years at AWS. It's open source — you can use it too."

**If they ask: "Does this really work?"**
> "I just showed you. And I'm actually going to apply to those jobs. I'll let you know if I get interviews."

**If they ask: "Can I use this for my job search?"**
> "Absolutely. The framework works for any problem. Just swap out the candidate profile for yours."

---

## Technical Notes

**Model**: Claude Sonnet 4 (fast, high quality)  
**Tokens**: ~6K total (cheap, <$0.10 per run)  
**Time**: ~90-120 seconds (depends on API speed)  
**Failure modes**: API timeout (use backup), rate limit (run earlier to warm up)

---

## What Makes This Different

**Most demos**: "Here's a chatbot that answers questions"  
**This demo**: "Here's a multi-agent system solving my real problem with structured output and probability metrics"

**Most demos**: Abstract, theoretical  
**This demo**: Personal, concrete, actionable

**Most demos**: "AI is cool"  
**This demo**: "AI + framework = real value"

---

**You're not just teaching the framework. You're USING it live. That's the power move.** 🎯
