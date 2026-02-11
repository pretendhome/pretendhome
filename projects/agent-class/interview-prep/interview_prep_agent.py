#!/usr/bin/env python3
"""
Interview Prep Agent - Palette Framework
Emulates Interview Kickstart's proven methodology

Workflow:
1. Yuty (Narrative) - Refines the prep prompt to match Interview Kickstart methodology
2. Argy (Research) - Company research + industry context
3. Rex (Architecture) - Interview strategy + 90-day plan framework
4. Theri (Build) - STAR stories + technical talking points
5. Anky (Validate) - Gap analysis + probability assessment

Usage:
    python3 interview_prep_agent.py <job_description_file>
"""

import sys
from pathlib import Path

def print_section(title):
    print(f"\n{'='*70}")
    print(f"  {title}")
    print(f"{'='*70}\n")

def yuty_refine_prompt(job_desc):
    """Phase 1: Yuty refines prep prompt using Interview Kickstart methodology"""
    print_section("PHASE 1: YUTY (NARRATIVE) - Refining Prep Strategy")
    print("🎯 Analyzing Interview Kickstart methodology...")
    print("   Structuring prep around proven interview frameworks\n")
    
    prompt = f"""You are Yutyrannus (Yuty), the narrative and system coherence agent.

TASK: Refine this interview prep request using Interview Kickstart's proven methodology.

INTERVIEW KICKSTART METHODOLOGY (from research):
1. **Problem-Solution-Impact Framework** (not just STAR)
   - Problem: What was broken/inefficient/risky?
   - Solution: What YOU specifically did (not "we")
   - Impact: Quantified business outcome (%, $, time saved)
   - Learning: What you'd do differently

2. **Behavioral Interview Categories** (7 core areas)
   - Leadership & Influence
   - Problem Solving & Decision Making
   - Communication & Stakeholder Management
   - Technical Depth & System Design
   - Conflict Resolution & Difficult Conversations
   - Innovation & Risk Taking
   - Results & Impact Measurement

3. **Technical Interview Prep** (for technical roles)
   - System design scenarios (whiteboard-ready)
   - Trade-off analysis frameworks
   - Scalability and reliability thinking
   - Build vs. buy decision frameworks

4. **Company-Specific Prep**
   - Company mission/values alignment
   - Recent news/initiatives (last 90 days)
   - Competitive landscape
   - Industry trends affecting the company

5. **Mock Interview Practice**
   - Record yourself answering questions
   - 2-minute rule (answer in <2 min, then expand if asked)
   - Pause-and-pivot technique (if you lose thread)
   - Confidence calibration (not too humble, not arrogant)

JOB DESCRIPTION:
{job_desc}

OUTPUT: Refined interview prep prompt structured around Interview Kickstart methodology.

Format:
**INTERVIEW PREP STRATEGY - [Role] at [Company]**

**I. BEHAVIORAL PREP (Problem-Solution-Impact Framework)**
[Map 7 behavioral categories to likely questions for this role]

**II. TECHNICAL PREP (System Design & Trade-offs)**
[Identify 3-5 technical scenarios they'll ask about]

**III. COMPANY-SPECIFIC PREP**
[Research areas: mission, recent news, competitive landscape]

**IV. MOCK INTERVIEW PLAN**
[Practice schedule: record, review, iterate]

**V. SUCCESS METRICS**
[How to know you're ready]

Be specific. Focus on what Interview Kickstart would prioritize."""

    # For demo, return structured output
    result = f"""**INTERVIEW PREP STRATEGY - Sr. Manager, AI Strategy & Enterprise Enablement at Gap Inc.**

**I. BEHAVIORAL PREP (Problem-Solution-Impact Framework)**

Interview Kickstart teaches: Every story needs Problem → Solution (YOUR actions) → Impact (quantified) → Learning

**7 Behavioral Categories Mapped to This Role:**

1. **Leadership & Influence** (HIGH PRIORITY)
   - Likely Q: "Tell me about leading a cross-functional AI initiative without direct authority"
   - Your story needs: Merchandising + Supply Chain + HR alignment, YOUR influence tactics, adoption metrics
   
2. **Problem Solving & Decision Making** (HIGH PRIORITY)
   - Likely Q: "Describe a build vs. buy decision for an AI platform"
   - Your story needs: Evaluation criteria YOU created, trade-offs YOU analyzed, outcome with $ impact

3. **Communication & Stakeholder Management** (CRITICAL)
   - Likely Q: "How do you translate complex AI concepts for non-technical executives?"
   - Your story needs: Specific executive (VP/C-level), YOUR communication approach, decision they made

4. **Technical Depth & System Design** (MEDIUM-HIGH)
   - Likely Q: "Design an AI-powered employee onboarding system for 10,000+ employees"
   - Your story needs: Architecture YOU proposed, scalability YOU considered, integration points

5. **Conflict Resolution & Difficult Conversations** (MEDIUM)
   - Likely Q: "Tell me about resistance to AI adoption you faced and how you handled it"
   - Your story needs: Specific stakeholder concern, YOUR approach to address it, outcome

6. **Innovation & Risk Taking** (MEDIUM)
   - Likely Q: "Describe a pilot program you championed that had uncertain ROI"
   - Your story needs: Risk YOU identified, mitigation YOU designed, learning from outcome

7. **Results & Impact Measurement** (HIGH PRIORITY)
   - Likely Q: "How do you measure success of AI enablement initiatives?"
   - Your story needs: Metrics YOU defined, baseline YOU established, improvement YOU delivered

**II. TECHNICAL PREP (System Design & Trade-offs)**

Interview Kickstart teaches: Whiteboard-ready system design with explicit trade-offs

**5 Technical Scenarios for This Role:**

1. **GenAI Platform Comparison** (ChatGPT vs. Claude vs. CoPilot)
   - Framework: Security, Cost, Integration, Use Case Fit, Vendor Lock-in
   - Your answer: "For Gap Inc., I'd evaluate on 5 dimensions..." [2-min answer ready]

2. **RAG Architecture for Enterprise Knowledge**
   - Framework: Ingestion → Chunking → Embedding → Retrieval → Generation → Feedback
   - Your answer: "For Workday integration, I'd design..." [whiteboard-ready diagram]

3. **AI Adoption Measurement Framework**
   - Framework: Leading indicators (usage, engagement) → Lagging indicators (productivity, satisfaction)
   - Your answer: "I'd track 3 leading and 3 lagging metrics..." [specific metrics ready]

4. **Build vs. Buy Decision Framework**
   - Framework: Strategic differentiation, Time-to-value, Total cost, Maintenance burden
   - Your answer: "I use a 2x2 matrix: strategic value vs. build complexity..." [draw on whiteboard]

5. **Pilot-to-Scale Playbook**
   - Framework: Hypothesis → Pilot (n=50) → Validate → Scale (n=10,000) → Operationalize
   - Your answer: "My playbook has 5 gates with go/no-go criteria..." [process diagram ready]

**III. COMPANY-SPECIFIC PREP**

Interview Kickstart teaches: Show you've done your homework (last 90 days of news)

**Research Workstream:**

1. **Gap Inc. AI Initiatives** (30 min)
   - Search: "Gap Inc. AI" + "Gap Inc. digital transformation" (last 90 days)
   - Find: 3 recent announcements, 2 executive quotes, 1 partnership
   - Prepare: "I saw you recently announced [X]... how does this role support that?"

2. **Gap Inc. Mission & Values** (15 min)
   - Read: Gap Inc. careers page, annual report (AI mentions)
   - Identify: 3 values that align with your background
   - Prepare: "Your focus on [value] resonates because..." [personal story]

3. **Retail AI Competitive Landscape** (45 min)
   - Research: Target, Walmart, Nordstrom AI employee enablement
   - Identify: 2 things they're doing well, 1 gap Gap Inc. could exploit
   - Prepare: "I noticed Target is doing [X], but I see an opportunity for Gap to..."

4. **Workday + ServiceNow AI Capabilities** (30 min)
   - Read: Workday AI features, ServiceNow AI capabilities
   - Identify: 3 features relevant to Gap Inc. use cases
   - Prepare: "Workday's [feature] could enable [use case] for merchandising teams..."

5. **Gap Inc. Organizational Structure** (15 min)
   - LinkedIn: Search "Gap Inc. Office of AI" (find team members)
   - Identify: 3 people you'd partner with, their backgrounds
   - Prepare: "I see [Name] leads [function]... I'd partner with them on..."

**IV. MOCK INTERVIEW PLAN**

Interview Kickstart teaches: Practice out loud, record yourself, iterate

**Week 1: Story Development**
- Day 1-2: Write 7 stories (one per behavioral category) in Problem-Solution-Impact format
- Day 3-4: Record yourself telling each story (aim for 90 seconds)
- Day 5: Review recordings, identify filler words, refine

**Week 2: Technical Practice**
- Day 1-2: Whiteboard 5 technical scenarios (draw diagrams, practice explaining)
- Day 3-4: Record yourself answering technical questions (aim for 2 minutes)
- Day 5: Review recordings, ensure trade-offs are explicit

**Week 3: Mock Interviews**
- Day 1: Mock behavioral interview (friend/colleague asks questions)
- Day 2: Review feedback, refine weak stories
- Day 3: Mock technical interview (whiteboard session)
- Day 4: Review feedback, refine technical answers
- Day 5: Final run-through (both behavioral + technical)

**Interview Kickstart's 2-Minute Rule:**
- Answer in <2 minutes
- Pause: "Would you like me to go deeper on any part?"
- Expand only if they ask

**Pause-and-Pivot Technique:**
- If you lose your thread: "Let me pause and reframe that..."
- If you don't know: "I haven't worked with [X] directly, but here's how I'd approach it..."

**V. SUCCESS METRICS (How to Know You're Ready)**

Interview Kickstart teaches: You're ready when you can do these 5 things:

1. **Tell any of your 7 stories in 90 seconds** (without notes)
   - Test: Record yourself, time it, no filler words

2. **Whiteboard any of the 5 technical scenarios in 5 minutes** (clear diagram + trade-offs)
   - Test: Friend asks scenario, you draw and explain

3. **Answer "Why Gap Inc.?" in 60 seconds** (mission alignment + recent news)
   - Test: Record yourself, ensure it's specific (not generic)

4. **Ask 5 smart questions** (that show you've researched)
   - Test: Write them down, ensure they're not Google-able

5. **Handle "Tell me about yourself" in 90 seconds** (career narrative with through-line)
   - Test: Record yourself, ensure it connects to THIS role

**CONFIDENCE CALIBRATION:**
- Not too humble: "I led..." (not "We did...")
- Not arrogant: "I learned..." (show growth mindset)
- Quantify impact: "Improved by 40%..." (not "Made it better...")

**RED FLAGS TO AVOID:**
- Rambling (>2 min without pausing)
- Vague impact ("It went well...")
- Blaming others ("My manager didn't...")
- No learning ("I'd do it the same way...")

**YOU'RE READY WHEN:**
- You can answer any question in <2 min
- You have 3 examples ready for each behavioral category
- You can whiteboard 5 technical scenarios
- You've researched Gap Inc. (last 90 days)
- You've practiced out loud (recorded + reviewed)

**FINAL PREP (Day Before Interview):**
- Review your 7 stories (read, don't memorize)
- Review your 5 technical scenarios (draw diagrams)
- Review Gap Inc. research (recent news)
- Review your questions for them
- Get 8 hours of sleep (seriously)

**INTERVIEW DAY:**
- Arrive 10 min early (not 30, not 5)
- Bring: Notebook, pen, printed resume, questions list
- First 30 seconds: Smile, firm handshake, "Thanks for having me"
- Last question: "What are the next steps in your process?"

---

**This is Interview Kickstart's methodology applied to YOUR Gap Inc. interview.**

Next: Argy researches Gap Inc., Rex builds your strategy, Theri writes your stories, Anky validates your readiness.
"""
    
    print(result)
    return result

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 interview_prep_agent.py <job_description_file>")
        print("\nExample:")
        print("  python3 interview_prep_agent.py gap_inc_job.txt")
        sys.exit(1)
    
    job_file = Path(sys.argv[1])
    if not job_file.exists():
        print(f"ERROR: File not found: {job_file}")
        sys.exit(1)
    
    job_desc = job_file.read_text()
    
    # Demo intro
    print("\n" + "="*70)
    print("  INTERVIEW PREP AGENT - Palette Framework")
    print("  Emulating Interview Kickstart Methodology")
    print("="*70)
    print(f"\nJob: {job_file.name}")
    print("\nWorkflow:")
    print("  1. Yuty → Refine prep strategy (Interview Kickstart methodology)")
    print("  2. Argy → Company research + industry context")
    print("  3. Rex → Interview strategy + 90-day plan")
    print("  4. Theri → STAR stories + technical talking points")
    print("  5. Anky → Gap analysis + readiness assessment")
    print("\nExecuting...\n")
    
    # Phase 1: Yuty refines the prompt
    refined_strategy = yuty_refine_prompt(job_desc)
    
    # Phases 2-5 would follow (Argy, Rex, Theri, Anky)
    print_section("NEXT PHASES")
    print("Phase 2: Argy will research Gap Inc. AI initiatives")
    print("Phase 3: Rex will build your interview strategy")
    print("Phase 4: Theri will write your 7 STAR stories")
    print("Phase 5: Anky will validate your readiness")
    print("\n[Full workflow coming next...]\n")

if __name__ == "__main__":
    main()
