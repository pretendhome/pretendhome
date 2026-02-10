#!/usr/bin/env python3
"""Generate AI Use Case & Metrics slide deck using the IK template.

Topic: AI Use Case & Metrics
  - Problem framing and AI fit
  - Success metrics and evaluation readiness
  - MVP scope and prioritization

Structure: 5 Instructional Design Principles (Gagné) as section backbone.
"""

from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE
import os

# -- Load template --
TEMPLATE = '/home/mical/fde/projects/agent-class/Open Template_ML_Switch-up_ Live class.pptx'
OUTPUT = '/home/mical/fde/projects/agent-class/interview-prep/AGENTIC_SYSTEMS_CLASS.pptx'

prs = Presentation(TEMPLATE)

# Remove all existing template slides (iterate in reverse)
xml_slides = prs.slides._sldIdLst
for sldId in list(xml_slides):
    rId = sldId.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id')
    prs.part.drop_rel(rId)
    xml_slides.remove(sldId)

# -- Layout references --
LAYOUT_TITLE_BODY = prs.slide_layouts[0]    # TITLE_AND_BODY_4: idx=0 Title, idx=1 Body
LAYOUT_BLANK = prs.slide_layouts[1]          # BLANK
LAYOUT_SECTION = prs.slide_layouts[2]        # SECTION_HEADER: idx=0 Title
LAYOUT_TITLE = prs.slide_layouts[4]          # TITLE: idx=0 CENTER_TITLE
LAYOUT_TITLE_SUB = prs.slide_layouts[20]     # TITLE_1: CENTER_TITLE + SUBTITLE

# -- Colors matching the template theme --
TITLE_BLUE = RGBColor(0x00, 0xB0, 0xF0)
ACCENT_BLUE = RGBColor(0x38, 0x96, 0xD2)
DARK_TEXT = RGBColor(0x2D, 0x2D, 0x2D)
WHITE = RGBColor(0xFF, 0xFF, 0xFF)
LIGHT_GRAY = RGBColor(0x99, 0x99, 0x99)
MED_GRAY = RGBColor(0x66, 0x66, 0x66)
ACCENT_TEAL = RGBColor(0x2A, 0x9D, 0x8F)
ACCENT_ORANGE = RGBColor(0xE7, 0x6F, 0x51)

FONT = 'Fira Sans'
SLIDE_W = prs.slide_width   # 9144000 EMU
SLIDE_H = prs.slide_height  # 5143500 EMU


def set_text(shape, text, font_size=None, bold=None, color=None, font_name=FONT):
    """Set text on a placeholder shape with formatting."""
    shape.text = ""
    tf = shape.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = text
    run = p.runs[0] if p.runs else p.add_run()
    if not p.runs:
        run.text = text
    if font_size:
        run.font.size = Pt(font_size)
    if bold is not None:
        run.font.bold = bold
    if color:
        run.font.color.rgb = color
    if font_name:
        run.font.name = font_name


def add_bullet_body(shape, items, font_size=18, color=DARK_TEXT, font_name=FONT,
                    spacing=Pt(4)):
    """Populate a body placeholder with bullet items.

    items: list of (text, bold, indent_level) tuples
    """
    tf = shape.text_frame
    tf.word_wrap = True
    tf.clear()

    for i, item in enumerate(items):
        if len(item) == 3:
            text, bold, indent = item
        else:
            text, bold = item
            indent = 0

        if i == 0:
            p = tf.paragraphs[0]
        else:
            p = tf.add_paragraph()

        p.text = text
        p.level = indent
        p.space_after = spacing

        for run in p.runs:
            run.font.size = Pt(font_size)
            run.font.bold = bold
            run.font.color.rgb = color
            run.font.name = font_name


def add_textbox(slide, left, top, width, height, text, font_size=18,
                bold=False, color=DARK_TEXT, alignment=PP_ALIGN.LEFT,
                font_name=FONT):
    """Add a free-positioned text box."""
    txBox = slide.shapes.add_textbox(Emu(left), Emu(top),
                                      Emu(width), Emu(height))
    tf = txBox.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = text
    p.font.size = Pt(font_size)
    p.font.bold = bold
    p.font.color.rgb = color
    p.font.name = font_name
    p.alignment = alignment
    return txBox


def add_multi_textbox(slide, left, top, width, height, lines, font_size=16,
                      color=DARK_TEXT, font_name=FONT, alignment=PP_ALIGN.LEFT,
                      spacing=Pt(4)):
    """Add a text box with multiple paragraphs. lines: [(text, bold), ...]"""
    txBox = slide.shapes.add_textbox(Emu(left), Emu(top),
                                      Emu(width), Emu(height))
    tf = txBox.text_frame
    tf.word_wrap = True

    for i, (text, bold) in enumerate(lines):
        if i == 0:
            p = tf.paragraphs[0]
        else:
            p = tf.add_paragraph()
        p.text = text
        p.font.size = Pt(font_size)
        p.font.bold = bold
        p.font.color.rgb = color
        p.font.name = font_name
        p.alignment = alignment
        p.space_after = spacing
    return txBox


def content_slide(title_text, body_items, title_size=40, body_size=18):
    """Create a TITLE_AND_BODY slide with title and bulleted content."""
    slide = prs.slides.add_slide(LAYOUT_TITLE_BODY)
    title_ph = slide.placeholders[0]
    set_text(title_ph, title_text, font_size=title_size, bold=True, color=TITLE_BLUE)

    body_ph = slide.placeholders[1]
    add_bullet_body(body_ph, body_items, font_size=body_size)
    return slide


def section_header_slide(title_text, subtitle_text=None):
    """Create a SECTION_HEADER slide."""
    slide = prs.slides.add_slide(LAYOUT_SECTION)
    title_ph = slide.placeholders[0]

    tf = title_ph.text_frame
    tf.clear()
    p = tf.paragraphs[0]
    p.text = title_text
    p.font.size = Pt(40)
    p.font.bold = True
    p.font.color.rgb = WHITE
    p.font.name = FONT

    if subtitle_text:
        p2 = tf.add_paragraph()
        p2.text = subtitle_text
        p2.font.size = Pt(22)
        p2.font.bold = False
        p2.font.color.rgb = LIGHT_GRAY
        p2.font.name = FONT

    return slide


# ================================================================
# SLIDE 1: TITLE
# ================================================================
slide = prs.slides.add_slide(LAYOUT_TITLE_SUB)
title_ph = slide.placeholders[0]
sub_ph = slide.placeholders[1]

tf = title_ph.text_frame
tf.clear()
p = tf.paragraphs[0]
p.text = "AI Use Case & Metrics"
p.font.size = Pt(40)
p.font.bold = True
p.font.color.rgb = TITLE_BLUE
p.font.name = FONT
p.alignment = PP_ALIGN.CENTER

tf2 = sub_ph.text_frame
tf2.clear()
p2 = tf2.paragraphs[0]
p2.text = "Problem Framing  |  Success Metrics  |  MVP Scope"
p2.font.size = Pt(20)
p2.font.bold = False
p2.font.color.rgb = MED_GRAY
p2.font.name = FONT
p2.alignment = PP_ALIGN.CENTER

p3 = tf2.add_paragraph()
p3.text = "Instructor: Mical Neill  |  Interview Prep / Live Class  |  Feb 2026"
p3.font.size = Pt(16)
p3.font.bold = False
p3.font.color.rgb = LIGHT_GRAY
p3.font.name = FONT
p3.alignment = PP_ALIGN.CENTER

# ================================================================
# SLIDE 2: INSTRUCTOR INTRODUCTION (BLANK layout)
# ================================================================
slide = prs.slides.add_slide(LAYOUT_BLANK)

add_textbox(slide,
    left=Inches(0.4), top=Inches(0.3),
    width=Inches(9.0), height=Inches(0.6),
    text="Instructor Introduction", font_size=30,
    bold=True, color=TITLE_BLUE)

add_textbox(slide,
    left=Inches(0.5), top=Inches(1.0),
    width=Inches(9.0), height=Inches(0.5),
    text="Mical Neill", font_size=24,
    bold=True, color=DARK_TEXT)

add_multi_textbox(slide,
    left=Inches(0.5), top=Inches(1.6),
    width=Inches(9.0), height=Inches(3.5),
    lines=[
        ("7 years in AWS Knowledge Architecture", False),
        ("Currently building multi-agent systems for product strategy and research", False),
        ("", False),
        ("Background:", True),
        ("  Designed knowledge systems at scale (AWS)", False),
        ("  Built and shipped agentic AI applications in production", False),
        ("  Mapped 127 AI companies across 12 use cases for this class", False),
        ("", False),
        ("Teaching Philosophy (from IK):", True),
        ("  Learn patterns, not memorized answers", False),
        ("  Prepare for unseen problems with transferable frameworks", False),
    ],
    font_size=16, color=DARK_TEXT, spacing=Pt(3))

# ================================================================
# SLIDE 3: TODAY'S AGENDA
# ================================================================
slide = content_slide(
    "Today's Agenda",
    [
        ("5 sections, each mapped to an Instructional Design Principle:", True, 0),
        ("", False, 0),
        ("1. Gain Attention \u2014 The interview trap everyone falls into", False, 0),
        ("2. State Objectives \u2014 What you'll be able to do after this class", False, 0),
        ("3. Present Information \u2014 Frameworks: 4-Question Method, Market Validation, MVP Scope", False, 0),
        ("4. Assess Performance \u2014 Two live interview scenarios (mature vs. emerging market)", False, 0),
        ("5. Provide Feedback \u2014 Common mistakes + decision framework", False, 0),
        ("", False, 0),
        ("Based on Gagn\u00e9's Events of Instruction \u2014 applied to AI product thinking", False, 0),
    ],
    title_size=36, body_size=18
)

# ================================================================
# SLIDE 4: SECTION \u2014 PRINCIPLE 1
# ================================================================
section_header_slide(
    "PRINCIPLE 1 \u2014 Gain Attention",
    "The trap that kills most AI interview answers"
)

# ================================================================
# SLIDE 5: THE HOOK
# ================================================================
slide = content_slide(
    "The Hook: The Interview Trap",
    [
        ("Common interview questions:", True, 0),
        ('"How would you evaluate if [problem] is a good fit for AI?"', False, 1),
        ('"A customer wants to build [AI solution]. How do you assess viability?"', False, 1),
        ('"What metrics would you use to determine success?"', False, 1),
        ("", False, 0),
        ("The Trap:", True, 0),
        ("Jumping to solutions without validating the problem", False, 1),
        ('"We\'ll use GPT-4 with RAG and fine-tune on their data..."', False, 1),
        ("", False, 0),
        ("What Interviewers Actually Want:", True, 0),
        ("Structured thinking \u2014 a repeatable framework", False, 1),
        ("Risk awareness \u2014 not just optimism", False, 1),
        ("Metrics-first approach \u2014 define success before building", False, 1),
        ("", False, 0),
        ("Today: a framework that works for any AI use case question", True, 0),
    ],
    title_size=32, body_size=16
)

# ================================================================
# SLIDE 6: SECTION \u2014 PRINCIPLE 2
# ================================================================
section_header_slide(
    "PRINCIPLE 2 \u2014 State the Learning Objective",
    "What you'll be able to do after this class"
)

# ================================================================
# SLIDE 7: LEARNING OBJECTIVES
# ================================================================
slide = content_slide(
    "Learning Objectives",
    [
        ("By the end of this class, you will be able to:", True, 0),
        ("", False, 0),
        ("1. Frame problems to determine if AI is a good fit", False, 0),
        ("Using the 4-Question Method: pattern, data, volume, measurability", False, 1),
        ("", False, 0),
        ("2. Assess market validation using company and funding data", False, 0),
        ("Funded companies = market validation signal", False, 1),
        ("", False, 0),
        ("3. Apply a repeatable framework: \"Is this a good AI use case?\"", False, 0),
        ("Structured approach that works for any AI scenario", False, 1),
        ("", False, 0),
        ("4. Differentiate mature vs. emerging AI markets", False, 0),
        ("Different risks require different recommendations", False, 1),
    ],
    title_size=36, body_size=16
)

# ================================================================
# SLIDE 8: WHY THIS MATTERS
# ================================================================
slide = content_slide(
    "Why This Matters \u2014 For Your Interview",
    [
        ("What interviewers look for by role:", True, 0),
        ("", False, 0),
        ("PM: Customer empathy, market awareness, prioritization", False, 0),
        ("Can you separate real problems from shiny tech?", False, 1),
        ("", False, 0),
        ("TPM: Risk identification, execution planning, feasibility", False, 0),
        ("Can you scope what's buildable vs. aspirational?", False, 1),
        ("", False, 0),
        ("EM: Technical depth, team scoping, reliability", False, 0),
        ("Can you assess whether AI actually helps here?", False, 1),
        ("", False, 0),
        ("The pattern-based approach (from IK):", True, 0),
        ("Learn frameworks, not memorize answers", False, 1),
        ("Prepare for unseen problems with transferable thinking", False, 1),
    ],
    title_size=32, body_size=16
)

# ================================================================
# SLIDE 9: SECTION \u2014 PRINCIPLE 3
# ================================================================
section_header_slide(
    "PRINCIPLE 3 \u2014 Present Information",
    "Chunked into 4 modules (avoid cognitive overload)"
)

# ================================================================
# SLIDE 10: THE 4-QUESTION METHOD
# ================================================================
slide = content_slide(
    "Framework: The 4-Question Method",
    [
        ("Before building anything, run every AI use case through 4 questions:", True, 0),
        ("", False, 0),
        ("1. Is there a pattern?", True, 0),
        ("Can this be solved by recognizing patterns in data?", False, 1),
        ("", False, 0),
        ("2. Is there data?", True, 0),
        ("Enough quality data to train, fine-tune, or retrieve from?", False, 1),
        ("", False, 0),
        ("3. Is it repetitive or high-volume?", True, 0),
        ("Does this happen often enough to justify AI investment?", False, 1),
        ("", False, 0),
        ("4. Can you measure success?", True, 0),
        ("Are there clear metrics to know if AI is working?", False, 1),
        ("", False, 0),
        ("All 4 must be YES or CHECKABLE before proceeding", True, 0),
    ],
    title_size=32, body_size=16
)

# ================================================================
# SLIDE 11: Q1 & Q2 DEEP DIVE
# ================================================================
slide = content_slide(
    "Q1: Is There a Pattern?  |  Q2: Is There Data?",
    [
        ("Good AI Fit (Pattern):", True, 0),
        ("Customer support tickets \u2014 common questions recur", False, 1),
        ("Code completion \u2014 syntax and context are predictable", False, 1),
        ("Document extraction \u2014 invoices have structure", False, 1),
        ("", False, 0),
        ("Poor AI Fit (No Pattern):", True, 0),
        ("One-off strategic decisions, creative brand positioning, novel research", False, 1),
        ("", False, 0),
        ("Good AI Fit (Data):", True, 0),
        ("Historical conversations (thousands of examples)", False, 1),
        ("Public code repos (billions of lines)", False, 1),
        ("Existing documents (structured/semi-structured)", False, 1),
        ("", False, 0),
        ("Poor AI Fit (No Data):", True, 0),
        ("Brand new process, highly sensitive/inaccessible data, rare events", False, 1),
        ("", False, 0),
        ("Key insight: AI is pattern recognition, not magic", True, 0),
    ],
    title_size=28, body_size=14
)

# ================================================================
# SLIDE 12: Q3 & Q4 DEEP DIVE
# ================================================================
slide = content_slide(
    "Q3: Is It Repetitive?  |  Q4: Can You Measure?",
    [
        ("Good AI Fit (Volume):", True, 0),
        ("10,000+ support tickets/month", False, 1),
        ("Developers writing code daily", False, 1),
        ("1,000+ documents processed per week", False, 1),
        ("", False, 0),
        ("Poor AI Fit (Low Volume):", True, 0),
        ("Quarterly strategic planning (4x/year)", False, 1),
        ("Annual compliance audits (1x/year)", False, 1),
        ("Key insight: ROI requires volume", False, 1),
        ("", False, 0),
        ("Good Metrics (Measurable):", True, 0),
        ("Support: resolution time, CSAT, ticket deflection rate", False, 1),
        ("Code: acceptance rate, time saved, bugs introduced", False, 1),
        ("Documents: extraction accuracy, processing time", False, 1),
        ("", False, 0),
        ("Poor Metrics (Vague):", True, 0),
        ("\"Make our brand more innovative\" or \"improve morale\"", False, 1),
        ("Key insight: Define metrics before building", True, 1),
    ],
    title_size=28, body_size=14
)

# ================================================================
# SLIDE 13: MARKET VALIDATION FRAMEWORK
# ================================================================
slide = content_slide(
    "Market Validation Framework",
    [
        ("Funded companies = market validation  (127 companies mapped across 12 use cases)", True, 0),
        ("", False, 0),
        ("HIGH Validation: 20+ companies, $500M+ total funding", True, 0),
        ("Sales & GTM: 25+ co's, $2B+ (Gong, Clari, Outreach)", False, 1),
        ("Customer Support: 20+ co's, $700M+ (Intercom, Ada, Forethought)", False, 1),
        ("Document Processing: 20+ co's, $600M+ (Hyperscience, Rossum, Instabase)", False, 1),
        ("Dev Productivity: 30+ co's, $500M+ (Cursor, Tabnine, Codeium, Replit)", False, 1),
        ("Knowledge Mgmt: 20+ co's, $450M+ (Glean, Notion AI, Perplexity)", False, 1),
        ("Risk: Differentiation in a crowded market", False, 1),
        ("", False, 0),
        ("MEDIUM Validation: 5-20 companies, $100M-$500M", True, 0),
        ("Agentic Orchestration: 15 co's, $150M+ \u2014 80% agent-native, founded 2022-23", False, 1),
        ("AI Governance: 8-10 co's, growing with regulation (Credo AI, Arthur, Fiddler)", False, 1),
        ("AI Infra/MLOps: 10+ co's (W&B, Comet, LangSmith, Helicone)", False, 1),
        ("Risk: Category still being defined", False, 1),
        ("", False, 0),
        ("LOW / White Space: 0-5 companies, <$50M", True, 0),
        ("AI Decision Logs, Internal Demo Generation, Agent-Specific Patterns", False, 1),
        ("Risk: Market may not exist \u2014 but could be an opportunity", False, 1),
    ],
    title_size=28, body_size=13
)

# ================================================================
# SLIDE 14: MARKET VALIDATION \u2014 REAL COMPANIES (from Palette Company Library)
# ================================================================
slide = content_slide(
    "Real Data: 127 Companies Across 12 AI Use Cases",
    [
        ("Research: 127 companies mapped, 23 agent-native, Seed through Series F+", True, 0),
        ("", False, 0),
        ("Highest Funded Use Cases:", True, 0),
        ("Sales & GTM: Gong $584M, Clari $576M, Outreach $489M, Apollo $100M", False, 1),
        ("Customer Support: Intercom $240M, Ada $190M, Kustomer $174M", False, 1),
        ("Document Processing: Hyperscience $218M, Instabase $132M, Rossum $100M", False, 1),
        ("RAG Infrastructure: Pinecone $138M, Weaviate $67M, Vectara $28M", False, 1),
        ("Knowledge Mgmt: Glean $360M, Notion AI $343M, Perplexity $100M", False, 1),
        ("", False, 0),
        ("Emerging / Agent-Native:", True, 0),
        ("Orchestration: LangChain $35M, Fixie $17M, Dust $16M, Lindy $3M", False, 1),
        ("Workflow Automation: Zapier $1.3B, Make $38M, Bardeen $18M", False, 1),
        ("AI Evaluation: Patronus $17M, Braintrust $5M, Humanloop $5M", False, 1),
        ("", False, 0),
        ("Gap / White Space (0 dedicated companies):", True, 0),
        ("AI Decision Logs, Internal Demo Generation, Agent-Specific Patterns", False, 1),
    ],
    title_size=26, body_size=13
)

# ================================================================
# SLIDE 15: SUCCESS METRICS & EVALUATION READINESS
# ================================================================
slide = content_slide(
    "Success Metrics & Evaluation Readiness",
    [
        ("Metrics should be time-phased:", True, 0),
        ("", False, 0),
        ("Early (0-3 months):", True, 0),
        ("Accuracy on core task (e.g., 85% on top 10 question types)", False, 1),
        ("User adoption rate, error rate baseline", False, 1),
        ("", False, 0),
        ("Medium (3-6 months):", True, 0),
        ("Business impact (e.g., 30% ticket deflection, 50% time saved)", False, 1),
        ("Active users at scale, cost per interaction", False, 1),
        ("", False, 0),
        ("Long-term (6+ months):", True, 0),
        ("Sustained quality (CSAT maintained), cost reduction", False, 1),
        ("Expansion to adjacent use cases", False, 1),
        ("", False, 0),
        ("Evaluation readiness: can you measure TODAY?", True, 0),
        ("If no baseline data exists, that's your first milestone", False, 1),
    ],
    title_size=32, body_size=15
)

# ================================================================
# SLIDE 16: MVP SCOPE & PRIORITIZATION
# ================================================================
slide = content_slide(
    "MVP Scope & Prioritization",
    [
        ("The 80/20 rule for AI MVPs:", True, 0),
        ("Solve the top 10 use cases, not all of them", False, 1),
        ("", False, 0),
        ("MVP scoping principles:", True, 0),
        ("ONE workflow, not \"automate everything\"", False, 1),
        ("3-5 integrations, not the entire tool ecosystem", False, 1),
        ("Human-in-the-loop for edge cases", False, 1),
        ("", False, 0),
        ("Prioritization criteria:", True, 0),
        ("Volume: how often does this task happen?", False, 1),
        ("Data readiness: is training/retrieval data available?", False, 1),
        ("Measurability: can we prove success in 90 days?", False, 1),
        ("Risk tolerance: what happens when AI is wrong?", False, 1),
        ("", False, 0),
        ("Red flag: if you can't scope the MVP to one sentence, it's too broad", True, 0),
    ],
    title_size=32, body_size=15
)

# ================================================================
# SLIDE 17: SECTION \u2014 PRINCIPLE 4
# ================================================================
section_header_slide(
    "PRINCIPLE 4 \u2014 Assess Performance",
    "Two live interview scenarios"
)

# ================================================================
# SLIDE 18: SCENARIO 1 \u2014 MATURE MARKET
# ================================================================
slide = content_slide(
    "Scenario 1: Mature Market Assessment",
    [
        ("Interview question:", True, 0),
        ('"A customer wants to build an AI-powered customer support chatbot."', False, 1),
        ('"How would you evaluate if this is a good idea?"', False, 1),
        ("", False, 0),
        ("Apply the 4-Question Method:", True, 0),
        ("Pattern? YES \u2014 common questions, resolution paths recur", False, 1),
        ("Data? CHECK \u2014 need 6+ months of historical tickets", False, 1),
        ("Repetitive? CHECK \u2014 need 1,000+ tickets/month", False, 1),
        ("Measurable? YES \u2014 deflection rate, CSAT, resolution time", False, 1),
        ("", False, 0),
        ("Market validation: 20+ companies, $700M+  \u2014  HIGH", True, 0),
        ("Intercom $240M, Ada $190M, Kustomer $174M, Forethought $92M", False, 1),
        ("Challenge is differentiation, not viability", False, 1),
        ("", False, 0),
        ("MVP: Top 10 question types (80/20 rule)", True, 0),
        ("Metrics: 85% accuracy (0-3mo), 30% deflection (3-6mo), CSAT maintained (6+mo)", False, 1),
    ],
    title_size=28, body_size=14
)

# ================================================================
# SLIDE 19: SCENARIO 2 \u2014 EMERGING CATEGORY
# ================================================================
slide = content_slide(
    "Scenario 2: Emerging Category Risk",
    [
        ("Interview question:", True, 0),
        ('"A customer wants to build an agentic workflow automation platform."', False, 1),
        ('"How would you evaluate this?"', False, 1),
        ("", False, 0),
        ("Apply the 4-Question Method:", True, 0),
        ("Pattern? MAYBE \u2014 workflows have patterns, but complex", False, 1),
        ("Data? PARTIAL \u2014 individual tools yes, cross-tool less", False, 1),
        ("Repetitive? YES \u2014 if targeting common workflows", False, 1),
        ("Measurable? YES \u2014 time saved, error rate", False, 1),
        ("", False, 0),
        ("Market validation: 15 co's, $150M+  \u2014  EMERGING", True, 0),
        ("LangChain $35M, Fixie $17M, Dust $16M, Lindy $3M \u2014 all founded 2022-23", False, 1),
        ("23 agent-native companies in this space \u2014 80% in this cluster", False, 1),
        ("", False, 0),
        ("MVP: ONE workflow, 3-5 tools, human-in-the-loop", True, 0),
        ("Metrics: 70% completion (0-3mo), 50% time saved (3-6mo)", False, 1),
        ("Key difference: mature = differentiation risk, emerging = category + reliability risk", True, 0),
    ],
    title_size=28, body_size=13
)

# ================================================================
# SLIDE 20: SECTION \u2014 PRINCIPLE 5
# ================================================================
section_header_slide(
    "PRINCIPLE 5 \u2014 Provide Feedback",
    "Reinforce the framework, identify common mistakes"
)

# ================================================================
# SLIDE 21: COMMON MISTAKES
# ================================================================
slide = content_slide(
    "Common Mistakes in AI Use Case Interviews",
    [
        ("Mistake 1: Jumping to solutions", True, 0),
        ("BAD: \"We'll use GPT-4 with RAG...\"", False, 1),
        ("GOOD: \"Let me validate AI suitability first...\"", False, 1),
        ("", False, 0),
        ("Mistake 2: Ignoring market validation", True, 0),
        ("BAD: \"Great idea, let's build!\"", False, 1),
        ("GOOD: \"I see 20+ companies with $700M funding \u2014 differentiation is key\"", False, 1),
        ("", False, 0),
        ("Mistake 3: Vague metrics", True, 0),
        ("BAD: \"Measure user satisfaction\"", False, 1),
        ("GOOD: \"85% accuracy on top 10, 30% deflection rate by month 6\"", False, 1),
        ("", False, 0),
        ("Mistake 4: Ignoring risks", True, 0),
        ("BAD: \"AI can solve this easily!\"", False, 1),
        ("GOOD: \"Risk is differentiation in a crowded market\"", False, 1),
        ("", False, 0),
        ("Mistake 5: Over-scoping the MVP", True, 0),
        ("BAD: \"Automate all support\"  |  GOOD: \"MVP: Top 10 question types\"", False, 1),
    ],
    title_size=28, body_size=14
)

# ================================================================
# SLIDE 22: KEY TAKEAWAYS & NEXT STEPS
# ================================================================
slide = content_slide(
    "Key Takeaways & Next Steps",
    [
        ("5 takeaways \u2014 one per instructional design principle:", True, 0),
        ("", False, 0),
        ("1. Gain Attention \u2014 Don't fall into the solution-first trap", False, 0),
        ("Interviewers want structured thinking, not tech enthusiasm", False, 1),
        ("", False, 0),
        ("2. Objectives \u2014 Use the 4-Question Method every time", False, 0),
        ("Pattern? Data? Volume? Measurable? \u2014 all must pass", False, 1),
        ("", False, 0),
        ("3. Information \u2014 Market validation = funded companies", False, 0),
        ("High validation = differentiation risk. Low = existence risk", False, 1),
        ("", False, 0),
        ("4. Assessment \u2014 Time-phase your metrics (0-3, 3-6, 6+ months)", False, 0),
        ("Scope MVP aggressively: one workflow, measurable in 90 days", False, 1),
        ("", False, 0),
        ("5. Feedback \u2014 Name risks explicitly, avoid the 5 common mistakes", False, 0),
        ("Mature market \u2260 emerging market \u2014 different risks, different recs", False, 1),
        ("", False, 0),
        ("Pattern-based learning: prepare for unseen problems, not memorized solutions", True, 0),
    ],
    title_size=32, body_size=14
)

# ================================================================
# SLIDE 23: LIVE DEMO — AI USE CASE EVALUATOR
# ================================================================
slide = prs.slides.add_slide(LAYOUT_BLANK)

add_textbox(slide,
    left=Inches(0.4), top=Inches(0.2),
    width=Inches(9.0), height=Inches(0.6),
    text="Live Demo: AI Use Case Evaluator", font_size=30,
    bold=True, color=TITLE_BLUE)

add_multi_textbox(slide,
    left=Inches(0.5), top=Inches(1.0),
    width=Inches(9.0), height=Inches(4.2),
    lines=[
        ("You just learned the framework. Now watch an agent apply it.", True),
        ("", False),
        ("One prompt. Any use case. Full evaluation in ~30 seconds.", False),
        ("", False),
        ("What it builds:", True),
        ("  4-Question Method analysis (pattern, data, volume, measurable)", False),
        ("  Market validation signal (company count + funding tier)", False),
        ("  MVP scope (one sentence + constraints)", False),
        ("  Time-phased metrics (0-3mo, 3-6mo, 6+mo)", False),
        ("  Risk assessment + recommendation (go / conditional / no-go)", False),
        ("", False),
        ("Audience: suggest a use case.", True),
        ("", False),
        ("  Example: \"AI-powered resume screening for recruiters\"", False),
        ("  Example: \"AI that detects fraudulent insurance claims\"", False),
        ("  Example: \"AI copilot for financial advisors\"", False),
    ],
    font_size=16, color=DARK_TEXT, spacing=Pt(3))

# ================================================================
# SAVE
# ================================================================
os.makedirs(os.path.dirname(OUTPUT), exist_ok=True)
prs.save(OUTPUT)
print(f"Slide deck saved to: {OUTPUT}")
print(f"Total slides: {len(prs.slides)}")
