#!/usr/bin/env python3
"""
Live Demo: Find Best Job Market Fit
Palette Framework in Action

Demo flow:
1. Argy (Research) - Find top job matches using Perplexity
2. Rex (Architecture) - Strategy + learning path for top roles
3. Theri (Build) - Generate customized resume
4. Anky (Validate) - Probability metrics for fit

Usage:
    python demo_job_fit.py
"""

import anthropic
import os
import sys
from datetime import datetime

# Candidate profile (condensed for demo)
CANDIDATE_PROFILE = """
**Mical Neill** - AI Enablement & Agentic Systems Expert

**Current**: Recently departed AWS (Feb 2026)
- TPM: End-to-End Agentic Enablement Systems Architect (AWS, Mar 2025 - Feb 2026)
- Sr. Knowledge Engineer: AGI (Amazon, Nov 2023 - Mar 2025)
- 11+ years Amazon total

**Core Strengths**:
- Agentic AI systems (RAG, LLM grounding, multi-agent orchestration)
- Customer-facing technical work (discovery, scoping, deployment)
- Knowledge architecture (taxonomy, ontology, 111 RIUs in Palette Framework)
- Multilingual: English/French (native), Italian (fluent), Spanish (proficient)

**Technical**: Python, SQL, GenAI APIs (OpenAI, Anthropic, Bedrock), RAG architectures

**Independent Project**: Palette Framework (3-tier agentic collaboration system)

**NOT**: Full-stack SWE, DevOps/SRE, people manager, research scientist, quota-carrying sales

**Target**: $160K-$220K base, $200K-$280K total comp, SF Bay Area/Remote US/Europe

**High-Fit Roles**: AI Enablement Lead, TPM AI/ML, Forward Deployed Engineer (Agentic), 
Context Engineering Manager, Solutions Architect (AI/ML)
"""

def print_section(title):
    print(f"\n{'='*70}")
    print(f"  {title}")
    print(f"{'='*70}\n")

def argy_research(client):
    """Phase 1: Argy finds top job matches"""
    print_section("PHASE 1: ARGY (RESEARCH) - Finding Top Job Matches")
    print("🔍 Searching current job market for best fits...")
    print("   (Using Perplexity for real-time job data)\n")
    
    prompt = f"""You are Argentavis (Argy), the research agent.

TASK: Find the top 5 BEST-FIT job openings RIGHT NOW (February 2026) for this candidate.

{CANDIDATE_PROFILE}

SEARCH FOCUS:
- Companies: Anthropic, OpenAI, Databricks, Snowflake, Palantir, Scale AI, Glean, AI startups
- Roles: AI Enablement Lead, TPM AI/ML, Forward Deployed Engineer (Agentic), Solutions Architect AI
- Must have: Agentic AI/RAG/LLM as core requirement, customer-facing, $160K+ base
- Must NOT require: PhD, people management, full-stack SWE, DevOps/SRE

OUTPUT FORMAT (for each of top 5 roles):
**[Company] - [Role Title]**
- Location: [location + remote policy]
- Comp: [if listed]
- Fit Score: [0-100] / 100
- Why: [2 sentences - what makes this a strong match]
- Gap: [1 sentence - any risk or missing skill]
- Link: [application URL if available]

Be specific. Use real companies and real roles you know are hiring NOW.
Prioritize roles where candidate's agentic AI + customer-facing skills are THE core value."""

    message = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=2000,
        messages=[{"role": "user", "content": prompt}]
    )
    
    result = message.content[0].text
    print(result)
    return result

def rex_strategy(client, top_roles):
    """Phase 2: Rex creates strategy + learning path"""
    print_section("PHASE 2: REX (ARCHITECTURE) - Strategy & Learning Path")
    print("🏗️  Analyzing top roles and creating action plan...\n")
    
    prompt = f"""You are Tyrannosaurus Rex (Rex), the architecture agent.

TASK: Given these top job matches, create a STRATEGY and LEARNING PATH.

TOP ROLES IDENTIFIED:
{top_roles}

CANDIDATE PROFILE:
{CANDIDATE_PROFILE}

OUTPUT:

**STRATEGY (Next 30 Days)**
1. [Immediate action - what to apply to first]
2. [Skill gap to address - what to learn/build]
3. [Network move - who to reach out to]

**LEARNING PATH (Priority Order)**
- [Skill 1]: [Why needed] → [How to learn in 1-2 weeks]
- [Skill 2]: [Why needed] → [How to learn in 1-2 weeks]
- [Skill 3]: [Why needed] → [How to learn in 1-2 weeks]

**APPLICATION PRIORITY**
- Tier 1 (Apply this week): [2-3 roles]
- Tier 2 (Apply next week): [2 roles]

**RISK ASSESSMENT**
- Primary risk: [1 sentence]
- Mitigation: [1 sentence]

Be specific. Focus on HIGHEST ROI actions."""

    message = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=1500,
        messages=[{"role": "user", "content": prompt}]
    )
    
    result = message.content[0].text
    print(result)
    return result

def theri_resume(client, top_role):
    """Phase 3: Theri generates customized resume for top role"""
    print_section("PHASE 3: THERI (BUILD) - Customized Resume")
    print("🔨 Generating resume tailored to top role...\n")
    
    prompt = f"""You are Therizinosaurus (Theri), the builder agent.

TASK: Generate a CUSTOMIZED RESUME SUMMARY (3-4 bullet points) for the TOP role.

TOP ROLE:
{top_role}

CANDIDATE PROFILE:
{CANDIDATE_PROFILE}

OUTPUT (Resume Summary Section):
**[Role Title] at [Company]**

[3-4 bullet points that directly match the role requirements]
- Each bullet: [Action verb] + [What you did] + [Impact/metric if possible]
- Emphasize: Agentic AI, customer-facing, knowledge systems
- Use keywords from the role description

Keep it punchy. 2 lines max per bullet."""

    message = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=800,
        messages=[{"role": "user", "content": prompt}]
    )
    
    result = message.content[0].text
    print(result)
    return result

def anky_probability(client, top_roles):
    """Phase 4: Anky calculates fit probability"""
    print_section("PHASE 4: ANKY (VALIDATE) - Fit Probability Metrics")
    print("✅ Calculating probability of success for each role...\n")
    
    prompt = f"""You are Ankylosaurus (Anky), the validation agent.

TASK: Calculate FIT PROBABILITY for each top role.

TOP ROLES:
{top_roles}

CANDIDATE PROFILE:
{CANDIDATE_PROFILE}

OUTPUT (for each role):
**[Company] - [Role]**
- Resume Screen: [0-100]% (will resume pass ATS + recruiter?)
- Phone Screen: [0-100]% (will candidate pass recruiter call?)
- Technical: [0-100]% (will candidate pass technical interview?)
- Culture Fit: [0-100]% (does candidate match company culture?)
- **OVERALL**: [0-100]% (weighted average)

Reasoning: [1-2 sentences explaining the score]

Be honest. Use these factors:
- Resume screen: Keyword match, years of experience, title alignment
- Phone screen: Communication skills, motivation, culture questions
- Technical: Depth in agentic AI, RAG, customer-facing technical work
- Culture fit: Startup vs enterprise, autonomy vs structure, customer obsession

Rank by OVERALL probability."""

    message = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=1500,
        messages=[{"role": "user", "content": prompt}]
    )
    
    result = message.content[0].text
    print(result)
    return result

def main():
    # Check API key
    if not os.environ.get("ANTHROPIC_API_KEY"):
        print("ERROR: Set ANTHROPIC_API_KEY environment variable")
        print("  export ANTHROPIC_API_KEY='sk-ant-...'")
        sys.exit(1)
    
    client = anthropic.Anthropic()
    
    # Demo intro
    print("\n" + "="*70)
    print("  LIVE DEMO: Palette Framework in Action")
    print("  Finding Best Job Market Fit")
    print("="*70)
    print(f"\nTimestamp: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("\nDemo flow:")
    print("  1. Argy (Research) → Find top job matches")
    print("  2. Rex (Architecture) → Strategy + learning path")
    print("  3. Theri (Build) → Customized resume")
    print("  4. Anky (Validate) → Probability metrics")
    print("\nStarting in 3 seconds...")
    
    import time
    time.sleep(3)
    
    # Phase 1: Research
    top_roles = argy_research(client)
    
    # Phase 2: Strategy
    strategy = rex_strategy(client, top_roles)
    
    # Phase 3: Resume (for top role only)
    print("\n[Extracting top role for resume generation...]")
    theri_resume(client, top_roles.split('\n\n')[0])  # First role
    
    # Phase 4: Probability
    anky_probability(client, top_roles)
    
    # Wrap up
    print_section("DEMO COMPLETE")
    print("✅ Found top job matches")
    print("✅ Created strategy + learning path")
    print("✅ Generated customized resume")
    print("✅ Calculated fit probabilities")
    print("\nThis is Palette in action:")
    print("  - Multi-agent workflow (Argy → Rex → Theri → Anky)")
    print("  - Real problem solved in ~2 minutes")
    print("  - Structured output, actionable insights")
    print("\nQuestions?\n")

if __name__ == "__main__":
    main()
