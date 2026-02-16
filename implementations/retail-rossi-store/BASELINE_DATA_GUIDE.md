# BASELINE DATA POPULATION GUIDE
## What It Takes to Unblock Final Funding Submission

**Status**: BLOCKING condition identified by all three experts  
**Timeline**: 1-2 days  
**Difficulty**: Easy (just data extraction, no analysis required)  
**Impact**: Transforms projections from "theoretical" to "validated"

---

## WHAT IS BASELINE DATA?

**Baseline data = actual operational numbers from Rossi's existing gallery**

Currently, the business plan has:
- Projections: "$350K Year 1 retail"
- Models: "10% workshop conversion rate"
- Estimates: "$4,375 gross per artist"

**But zero actual numbers from the existing 791 Valencia Street operation.**

All three experts said the same thing:
- Business Manager: "No actual baseline data (all projections)"
- Underwriter: "Analysis is not evidence. Needs real data."
- BCG: "Artist pipeline entirely unvalidated"

---

## WHAT DATA IS NEEDED?

### 1. Revenue Data (12 months)

**Source**: Square/Shopify POS system

**What to pull**:
```
Monthly revenue breakdown:
- Originals sales: $X
- Prints sales: $X
- Merchandise sales: $X
- Event sales: $X
- Online sales: $X
- Total: $X

Example:
Jan 2025: $28,450 (Originals: $15K, Prints: $8K, Merch: $3.5K, Events: $1.5K, Online: $450)
Feb 2025: $31,200 (Originals: $18K, Prints: $7K, Merch: $4K, Events: $2K, Online: $200)
...
Dec 2025: $42,800 (Originals: $25K, Prints: $10K, Merch: $5K, Events: $2.5K, Online: $300)

TOTAL 12 MONTHS: $XXX,XXX
```

**Why it matters**: 
- If actual = $350K → projections are credible
- If actual = $200K → need to explain 75% growth
- If actual = $100K → projections are not credible

---

### 2. Transaction Data (12 months)

**Source**: Square/Shopify POS system

**What to pull**:
```
Monthly transaction metrics:
- Walk-in transactions: X
- Online orders: X
- Average transaction value (walk-in): $X
- Average transaction value (online): $X

Example:
Jan 2025: 45 walk-in transactions, avg $632 | 3 online orders, avg $150
Feb 2025: 52 walk-in transactions, avg $600 | 5 online orders, avg $40
...

TOTAL 12 MONTHS: XXX transactions, $XXX average
```

**Why it matters**: Validates "$1,923/day" projection in underwriter analysis

---

### 3. Artist Revenue Distribution (12 months)

**Source**: Square/Shopify POS system (sales by artist)

**What to pull**:
```
Top 10 artists by revenue (anonymized):
1. Artist A: $45,000 gross sales (50 pieces sold, avg $900)
2. Artist B: $38,500 gross sales (85 pieces sold, avg $453)
3. Artist C: $32,000 gross sales (40 pieces sold, avg $800)
...
10. Artist J: $12,000 gross sales (60 pieces sold, avg $200)

All others (70+ artists): $XX,XXX gross sales

TOTAL: $XXX,XXX across 80+ artists
```

**Why it matters**: 
- Validates Pareto distribution (top 10% generate 60-70% of sales)
- Shows actual artist earnings (not projected)
- Proves 50/50 split is working (or not)

---

### 4. Foot Traffic & Engagement (estimates okay)

**Source**: Manual observation / Instagram analytics / email list

**What to provide**:
```
Gallery foot traffic:
- Average daily visitors: ~30-60 (estimate based on observation)
- Conversion rate: ~3-5% (industry standard, or actual if tracked)

Social media:
- Instagram followers: X,XXX (actual from Instagram)
- Instagram engagement rate: X% (actual from Instagram)
- Email list size: X,XXX (actual from Mailchimp/etc)

Event attendance (last 6 events):
- Event 1 (date): XX attendees, $X,XXX sales
- Event 2 (date): XX attendees, $X,XXX sales
...
```

**Why it matters**: Shows community engagement, validates "discovery funnel"

---

### 5. Cost Data (12 months)

**Source**: QuickBooks / bank statements / receipts

**What to pull**:
```
Monthly operating costs:
- Rent: $X/month (actual lease)
- Utilities: $X/month (actual bills)
- Insurance: $X/month (actual policy)
- Staff/contractors: $X/month (actual payroll)
- Supplies: $X/month (actual expenses)
- Marketing: $X/month (actual expenses)

TOTAL 12 MONTHS: $XXX,XXX in operating costs
```

**Why it matters**: Validates expense projections, shows actual margins

---

## HOW TO EXTRACT THE DATA

### Option 1: Square Dashboard (if using Square)

1. Log into Square Dashboard (squareup.com)
2. Go to "Reports" → "Sales Summary"
3. Set date range: Last 12 months
4. Export to CSV
5. Open in Excel/Google Sheets
6. Copy monthly totals into template

**Time**: 30 minutes

---

### Option 2: Shopify Admin (if using Shopify)

1. Log into Shopify Admin
2. Go to "Analytics" → "Reports"
3. Select "Sales over time" report
4. Set date range: Last 12 months
5. Export to CSV
6. Open in Excel/Google Sheets
7. Copy monthly totals into template

**Time**: 30 minutes

---

### Option 3: Manual from Bank Statements

1. Download 12 months of bank statements
2. Filter for revenue deposits (sales)
3. Filter for expense withdrawals (rent, utilities, etc)
4. Manually tally by month
5. Copy into template

**Time**: 2-3 hours (tedious but doable)

---

## WHERE TO PUT THE DATA

**Template location**: `remediation/condition-1-trailing-actuals.md`

**What to do**:
1. Open the template
2. Find all fields marked `[ACTUAL]`
3. Replace with real numbers from POS system
4. Save as `condition-1-trailing-actuals-POPULATED.md`

**Example**:

**BEFORE**:
```
| Feb 2025 | [ACTUAL] | [ACTUAL] | [ACTUAL] | [ACTUAL] | [ACTUAL] | [ACTUAL] | **[ACTUAL]** |
```

**AFTER**:
```
| Feb 2025 | $18,000 | $7,000 | $4,000 | $2,000 | $200 | $0 | **$31,200** |
```

---

## WHAT HAPPENS AFTER DATA IS POPULATED

### Immediate Impact

**Business Manager score**: 87 → 92 (baseline data gap closed)  
**Underwriter score**: 87 → 92 (evidence provided)  
**BCG score**: GO → GO (no change, but confidence increases)

### Credibility Transformation

**Before**: "We project $350K Year 1 retail"  
**After**: "We did $320K last year. We project $350K Year 1 (9% growth)"

**Before**: "Artists will earn $3,125 net per artist"  
**After**: "Top 10 artists earned $15K-22K last year. We project similar in Year 1."

**Before**: "The model works (Creative Growth proves it)"  
**After**: "The model works (we've been doing it for X years at 791 Valencia)"

### Funding Impact

**Underwriter said**: "$150K conditional" (because no baseline data)  
**After baseline data**: "$185K approved" (evidence provided)

**BCG said**: "GO with 90-day validation"  
**After baseline data**: "GO with high confidence"

---

## WHAT IF THE DATA IS BAD?

### Scenario 1: Revenue is Lower Than Expected

**If actual = $200K (not $350K)**:

**Don't hide it. Reframe it.**

**Before**: "We project $350K Year 1"  
**After**: "We did $200K last year with minimal marketing and no online strategy. With $6K digital investment and monthly Artist Drops, we project $280-320K Year 1 (40-60% growth)"

**Impact**: Still credible if growth drivers are specific

---

### Scenario 2: Artist Earnings are Lower Than Expected

**If top artists earn $5K-8K (not $18K-22K)**:

**Don't hide it. Acknowledge it.**

**Before**: "Artists earn $18K-22K"  
**After**: "Top artists currently earn $5K-8K. With expanded online sales and brand collaborations, we project $10K-15K Year 1 (50-100% increase)"

**Impact**: Shows the problem is real, solution is needed

---

### Scenario 3: Costs are Higher Than Expected

**If rent is $12K/month (not $10K)**:

**Don't hide it. Update projections.**

**Before**: "Rent: $10K/month ($120K/year)"  
**After**: "Rent: $12K/month ($144K/year)"

**Impact**: Increases funding need, but honesty builds trust

---

## THE BRUTAL TRUTH

**All three experts said the same thing**:

> "We don't need a better plan. We need to know if the plan matches reality."

**Baseline data answers one question**:

> "Is Rossi already doing $300K+ with 80 artists? Or is this a startup projecting from zero?"

**If $300K+**: You're scaling a working model (fundable)  
**If $100-200K**: You're growing an early-stage operation (still fundable, but different story)  
**If <$100K**: You're building from scratch (need to explain why projections are 3-5x current)

**The data doesn't need to be perfect. It needs to be real.**

---

## STEP-BY-STEP: 1-2 DAY PLAN

### Day 1 Morning (2 hours)
- [ ] Log into Square/Shopify
- [ ] Export 12-month sales report
- [ ] Open in Excel/Google Sheets
- [ ] Calculate monthly totals

### Day 1 Afternoon (2 hours)
- [ ] Pull transaction data (count, average value)
- [ ] Pull artist revenue distribution (top 10 + others)
- [ ] Pull cost data (rent, utilities, staff)

### Day 1 Evening (1 hour)
- [ ] Open `remediation/condition-1-trailing-actuals.md`
- [ ] Replace all `[ACTUAL]` fields with real numbers
- [ ] Save as `condition-1-trailing-actuals-POPULATED.md`

### Day 2 Morning (2 hours)
- [ ] Review populated template
- [ ] Check for obvious errors (typos, wrong totals)
- [ ] Add any missing context (notes, explanations)

### Day 2 Afternoon (1 hour)
- [ ] Update business plan with actual baseline
- [ ] Update cash flow model with actual baseline
- [ ] Flag any major deltas (actual vs projected)

**TOTAL TIME: 8 hours over 2 days**

---

## WHO NEEDS TO DO THIS?

**Option 1**: Rossi team member with POS access (best)  
**Option 2**: Bookkeeper/accountant (if Rossi has one)  
**Option 3**: Business Manager (if given POS login credentials)

**Required access**:
- Square/Shopify admin login
- Bank statements (last 12 months)
- Lease agreement (for rent confirmation)

**No special skills required**: If you can use Excel, you can do this.

---

## BOTTOM LINE

**What it takes**: 8 hours, POS system access, Excel  
**What it unlocks**: $185K funding approval (vs $150K conditional)  
**What it proves**: The model isn't theoretical — it's already working

**This is the single highest-ROI task in the entire project.**

**8 hours of data entry = $35K more funding + 10 points higher credibility.**

---

*Baseline data population guide prepared February 7, 2026. Template ready at `remediation/condition-1-trailing-actuals.md`. All fields marked `[ACTUAL]` must be replaced with real numbers from POS system.*

**Do this first. Everything else depends on it.**
