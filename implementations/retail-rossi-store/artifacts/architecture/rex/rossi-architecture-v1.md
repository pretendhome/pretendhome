# Rossi Mission Project - Business Model Architecture

**Architect**: Rex v1.0-rossi  
**Date**: 2026-02-06  
**Status**: DRAFT (requires human confirmation of ONE-WAY DOOR decisions)

---

## Executive Summary

This architecture scales Rossi Mission SF from a single Mission District gallery into a multi-city graffiti artist discovery engine while preserving its core identity: 50/50 artist profit-split, community-first culture, and scarcity economics.

**Key architectural decisions**:

1. **Organizational Structure**: Fiscal sponsorship hybrid (501(c)(3) via sponsor + for-profit LLC for retail) - enables grant access while protecting 50/50 artist split
2. **Governance Model**: Dual-board (artist-majority advisory + small governing board) - eliminates founder dependency while maintaining operational expertise
3. **Revenue Model**: 7-stream diversification (retail, workshops, grants, events, collaborations, online, residency sponsorships) - protects against single-source failure
4. **Expansion Strategy**: Stüssy International Tribe model (partner galleries, not franchises) - cultural fit over revenue, breadth over depth
5. **Artist Pipeline**: Integrated three-pillar system (workshops → residencies → content) - signature style + champion + documentation = career launch

**Research foundation**: All decisions grounded in 6 Argy research reports analyzing global markets, nonprofit structures, governance models, grant landscape, comparable organizations, and revenue models.

**Case study patterns applied**: Scarcity economics (Supreme), community-before-commerce (Stüssy), content-driven discovery (GX1000), artist career pipeline (Chito → Barry McGee), diversified revenue (6-7 streams), distributed governance (ALIFE/FA lessons).

---

## 🚨 ONE-WAY DOOR DECISIONS REQUIRING CONFIRMATION

The following decisions are irreversible or high-cost to change. Human confirmation required before proceeding:

1. **Organizational Structure** (Decision 1) - Fiscal sponsorship hybrid
2. **Governance Model** (Decision 2) - Dual-board structure
3. **Revenue Allocation Formula** (Decision 3) - How 50/50 split scales multi-city
4. **Partner Gallery Criteria** (Decision 4) - Who can join network
5. **Geographic Expansion Order** (Decision 5) - Which cities, when
6. **Workshop/Residency Pricing** (Decision 6) - Free vs. sliding scale vs. fixed
7. **Brand Collaboration Policy** (Decision 7) - What types allowed

---

## DECISION 1: Organizational Structure

**Type**: 🚨 ONE-WAY DOOR (affects grant eligibility, tax status, legal commitments)

**Research source**: task-2-nonprofit-vs-forprofit.md, task-4-grant-landscape.md

### Stage 1: Gradient Descent (Available Options)

**Viable options**:

1. **Full 501(c)(3) Nonprofit** - Traditional nonprofit structure
2. **Fiscal Sponsorship Hybrid** - 501(c)(3) sponsor + for-profit LLC
3. **For-Profit Corporation** - C-Corp or LLC, no nonprofit status
4. **501(c)(7) Social Club** - Member-benefit organization

**Eliminated**:
- B-Corp (requires for-profit structure, loses grant access)
- Cooperative (may not qualify for 501(c)(3), complex multi-city scaling)

### Stage 2: Game Theory (Competitive Analysis)

**Option 1 (Full 501(c)(3)) vs Option 2 (Fiscal Sponsorship)**

Full 501(c)(3) wins when:
- Organization needs maximum grant access
- Long-term institutional stability is priority
- Can restructure artist payments as "program expenses" not profit-sharing

Fiscal Sponsorship wins when:
- Need to preserve 50/50 profit-split model
- Want operational flexibility (retail through LLC)
- Can't wait 6-12 months for IRS approval

**Weakness in Full 501(c)(3) exposed by Fiscal Sponsorship**:
- "No private benefit" rule conflicts with 50/50 artist split [Research: task-2, IRS ruling on artist co-op]
- IRS concluded artist co-op "could not qualify under 501(c)(3) because it was 'a vehicle for advancing [the artists'] careers and promoting the sale of their work'" [Research: task-2]
- Would require reframing artist payments as "program expenses" (workshops, residencies) not profit-sharing

**Option 2 (Fiscal Sponsorship) vs Option 3 (For-Profit)**

Fiscal Sponsorship wins when:
- Grant funding is critical (SF Arts Commission $10.4M/year, California Arts Council active) [Research: task-4]
- Donor tax deductions matter
- Mission-driven perception is valuable

For-Profit wins when:
- Complete operational flexibility is priority
- Grant funding is not needed
- Can generate sufficient revenue from retail/collaborations alone

**Weakness in Fiscal Sponsorship exposed by For-Profit**:
- More complex structure (two entities to manage)
- Fiscal sponsor takes 5-15% administrative fee
- Some operational constraints (sponsor approval for major decisions)

### Stage 3: Integration Reasoning

**Existing decisions**:
✓ Supports 50/50 split (retail through LLC preserves profit-sharing)
✓ Enables three pillars (workshops/residencies through 501(c)(3), events/retail through LLC)
✓ Satisfies nonprofit transition goal (achieves 501(c)(3) benefits via sponsor)

**Future decisions**:
✓ Enables grant funding (sponsor's 501(c)(3) status qualifies for SF Arts Commission, California Arts Council)
✓ Allows brand collaborations (LLC can pursue commercial partnerships)
⚠️  Requires coordination (two entities, clear separation of activities)

**Case study patterns**:
✓ Diversified revenue (nonprofit grants + for-profit retail)
✓ Community-before-commerce (nonprofit structure signals mission-driven)
⚠️  Complexity risk (two entities to manage)

### Recommendation: Option 2 (Fiscal Sponsorship Hybrid)

**Structure**:
- **Rossi Mission Project** (501(c)(3) via fiscal sponsor like Fractured Atlas or Intersection for the Arts)
  - Operates: Workshops, artist residencies, community events, content/documentation
  - Revenue: Grants, workshop fees, residency sponsorships, donations
  - Expenses: Artist stipends, program costs, content production
  
- **Rossi Gallery LLC** (for-profit)
  - Operates: Retail sales (gallery + online), brand collaborations, merchandise
  - Revenue: Product sales, licensing, collaborations
  - Expenses: COGS, artist payments (50/50 split), rent, operations

**Rationale**:
1. Preserves 50/50 artist profit-split (through LLC) while accessing grants (through 501(c)(3))
2. SF Arts Commission awarded $10.4M to 151 orgs in 2025-2026 [Research: task-4] - reliable funding source
3. California Arts Council has 10+ grant categories fitting Rossi's model [Research: task-4]
4. Avoids "private benefit" conflict (retail profits through LLC, public programs through nonprofit)
5. Faster than full 501(c)(3) (fiscal sponsor already has IRS approval)

**Risks**:
- Fiscal sponsor administrative fee (5-15% of grants)
- Two entities to manage (accounting, legal, coordination)
- Sponsor approval required for major decisions
- Must maintain clear separation (retail vs. programs)

**Mitigation**:
- Choose sponsor with arts expertise (Fractured Atlas, Intersection for the Arts)
- Establish clear operating agreement (what requires sponsor approval)
- Separate bank accounts, accounting systems
- Annual review of structure (can transition to full 501(c)(3) later if needed)

**If this is wrong**:
- Signal: Fiscal sponsor fees exceed grant revenue
- Signal: Coordination overhead slows operations
- Pivot: Transition to full 501(c)(3) (if can restructure artist payments) OR full for-profit (if grants not materializing)

---

## DECISION 2: Governance Model

**Type**: 🚨 ONE-WAY DOOR (affects decision-making authority, founder dependency, artist trust)

**Research source**: task-3-governance-models.md, task-5-comparable-organizations.md

### Stage 1: Gradient Descent (Available Options)

**Viable options**:

1. **Traditional Board** (7-9 members, artist minority, nonprofit expertise majority)
2. **Artist-Majority Board** (51%+ artists, nonprofit expertise minority)
3. **Dual-Board Model** (Artist advisory council + small governing board)
4. **Collective Leadership** (Distributed leadership team, no single authority)

**Eliminated**:
- Single executive director (violates founder dependency elimination pattern)
- Worker cooperative (difficult to scale to 80+ artists, may not qualify for 501(c)(3))

### Stage 2: Game Theory (Competitive Analysis)

**Option 1 (Traditional Board) vs Option 2 (Artist-Majority)**

Traditional wins when:
- Nonprofit operational expertise is critical (grant writing, compliance, financial oversight)
- Fiscal discipline is priority
- Board members have fundraising networks

Artist-Majority wins when:
- Artist trust is critical (50/50 split credibility depends on artist control)
- Cultural decisions dominate (which artists to represent, what collaborations to pursue)
- Community perception matters (artists leading, not outsiders)

**Weakness in Traditional exposed by Artist-Majority**:
- "Arts boards are no strangers to spreadsheets and financial data, but effective governance requires a much wider set of experience and skills" [Research: task-3, ArtsHub 2026]
- Artists may distrust governance (feels like corporate takeover, undermines 50/50 split credibility)
- Board may prioritize revenue over artist welfare

**Weakness in Artist-Majority exposed by Traditional**:
- May lack nonprofit operational expertise (grant writing, 990 filing, compliance)
- Could struggle with fiscal discipline (artists may prioritize programs over sustainability)
- Slow decision-making (80+ artists = many voices, consensus difficult)

**Option 3 (Dual-Board) vs Option 2 (Artist-Majority)**

Dual-Board wins when:
- Need both artist voice AND nonprofit expertise
- Want clear separation of concerns (artistic vs. fiduciary)
- Can manage coordination between two bodies

Artist-Majority wins when:
- Simplicity is priority (one decision-making body)
- Artists willing to learn nonprofit operations
- Can recruit artists with business expertise

**Weakness in Dual-Board exposed by Artist-Majority**:
- Two bodies to coordinate (potential for conflict)
- Advisory council may feel powerless if governing board overrides
- More complex structure

**Weakness in Artist-Majority exposed by Dual-Board**:
- Single board must balance artistic AND fiduciary duties (role confusion)
- Harder to recruit (need artists with nonprofit expertise)

### Stage 3: Integration Reasoning

**Existing decisions**:
✓ Supports 50/50 split (artist advisory council ensures artist voice in profit allocation)
✓ Enables three pillars (governing board handles fiduciary, artists handle program design)
✓ Satisfies fiscal sponsorship model (governing board coordinates with sponsor)

**Future decisions**:
✓ Enables multi-city scaling (each location can have local artist representatives on advisory council)
✓ Protects partner criteria (artists vet cultural fit of new galleries)
⚠️  Requires clear boundaries (what decisions belong to which body)

**Case study patterns**:
✓ Eliminates founder dependency (distributed decision-making across two bodies)
✓ Protects scarcity (artists resist over-commercialization via advisory council)
✓ Community-before-commerce (artists have formal voice in strategic decisions)

### Recommendation: Option 3 (Dual-Board Model)

**Structure**:

**Governing Board** (5 members):
- 2 nonprofit/business expertise (grant writing, finance, legal)
- 2 artists (from Rossi roster, rotating 2-year terms)
- 1 community representative (Mission District resident/business owner)

**Responsibilities**:
- Fiduciary oversight (budget approval, financial reporting, legal compliance)
- Fiscal sponsor coordination
- Fundraising strategy
- Executive director hiring/oversight (if/when hired)

**Meets**: Quarterly

**Artist Advisory Council** (9-12 members):
- Majority from Rossi's 80+ artist roster (elected by artists, 2-year terms)
- 2-3 external artists (for outside perspective)

**Responsibilities**:
- Artist selection (who joins Rossi roster)
- Curatorial decisions (exhibitions, events)
- Partner gallery vetting (cultural fit assessment)
- Workshop/residency program design
- Brand collaboration approval (what aligns with Rossi values)

**Meets**: Monthly

**Decision-Making Protocol**:
- **Governing Board decides**: Budget, legal, compliance, fundraising, sponsor coordination
- **Artist Advisory Council decides**: Artist selection, curation, partner vetting, program design, brand collaborations
- **Both bodies consult**: Strategic direction, expansion decisions, major partnerships

**Rationale**:
1. Balances artist voice (advisory council) with nonprofit expertise (governing board)
2. Eliminates founder dependency (distributed across 14-17 people)
3. Scales to multi-city (each location adds representatives to advisory council)
4. Protects 50/50 split credibility (artists control artistic decisions)
5. Meets fiscal sponsor requirements (governing board provides oversight)

**Risks**:
- Coordination overhead (two bodies, potential for conflict)
- Advisory council may feel powerless if governing board overrides
- Slower decision-making (two bodies to consult)

**Mitigation**:
- Clear decision-making protocol (documented in bylaws)
- Governing board commits to non-interference in artistic decisions
- Joint meetings 2x/year (alignment, conflict resolution)
- Sunset clause (review structure after 2 years, adjust if not working)

**If this is wrong**:
- Signal: Constant conflict between boards
- Signal: Advisory council feels ignored
- Signal: Decision-making paralysis
- Pivot: Consolidate to artist-majority single board OR shift to collective leadership model

---

## DECISION 3: Revenue Model & 50/50 Split Mechanics

**Type**: 🚨 ONE-WAY DOOR (affects artist contracts, financial sustainability, grant eligibility)

**Research source**: task-6-revenue-models.md, task-4-grant-landscape.md

### Stage 1: Gradient Descent (Revenue Streams)

**Required**: Minimum 6-7 revenue streams (diversification pattern from research)

**Viable streams**:

1. **Retail Sales** (gallery + online) - Original art, prints, merchandise
2. **Workshops** - Public classes, corporate team-building, school programs
3. **Grants** - SF Arts Commission, California Arts Council, private foundations
4. **Events** - Exhibitions, live painting, music crossovers, private viewings
5. **Brand Collaborations** - Licensing, limited editions, corporate murals
6. **Residency Sponsorships** - Corporate sponsors, individual donors for artist residencies
7. **Online/Digital** - Print-on-demand, digital downloads, NFTs (if market recovers)

**Research validation**: "Successful organizations have 5-7 revenue streams, never just one" [Research: task-6]. Music industry "expanded rights" (merch, sponsorships, branding) = $3.5B market [Research: task-6].

### Stage 2: Game Theory (50/50 Split Mechanics)

**Core constraint**: 50/50 artist profit-split is NON-NEGOTIABLE for retail sales.

**Question**: How does 50/50 split apply to other revenue streams?

**Option A: 50/50 applies to ALL revenue**
- Artist gets 50% of workshop fees, grant money, event revenue, etc.
- Pros: Simplest, most generous to artists
- Cons: Unsustainable (grants/workshops have high operational costs)

**Option B: 50/50 applies to RETAIL ONLY, other streams have different splits**
- Retail: 50/50 (artist gets 50% of product sales)
- Workshops: 60/40 (teaching artist gets 60%, Rossi gets 40% for overhead)
- Grants: 100% to operations (funds programs, not individual artists)
- Events: Variable (depends on artist role - performer vs. exhibitor)
- Collaborations: Negotiated per deal (artist gets majority, Rossi gets finder's fee)
- Residencies: 100% to artist (stipend + materials covered by sponsorship)

**Option B wins**: Sustainable, aligns with nonprofit model (grants fund programs), preserves 50/50 brand identity for retail.

### Stage 3: Integration Reasoning

**Existing decisions**:
✓ Fiscal sponsorship hybrid (retail through LLC = 50/50, programs through nonprofit = variable splits)
✓ Dual-board governance (artist advisory council approves split formulas)

**Future decisions**:
✓ Enables multi-city scaling (each location operates same split model)
✓ Protects grant eligibility (grants fund programs, not private benefit)

**Case study patterns**:
✓ Diversified revenue (7 streams, each with appropriate economics)
✓ Artist empowerment (50/50 retail split is industry-leading)
✓ Financial sustainability (operational streams fund growth)

### Recommendation: 7-Stream Model with Differentiated Splits

**Revenue Stream 1: Retail Sales (Gallery + Online)**
- **Entity**: Rossi Gallery LLC (for-profit)
- **Split**: 50/50 (artist gets 50% of net sales after COGS)
- **Projected**: $500K Year 1 → $1.2M Year 3 (current flagship + online growth)
- **Artist payment**: Monthly, based on actual sales

**Revenue Stream 2: Workshops**
- **Entity**: Rossi Mission Project (via fiscal sponsor)
- **Split**: 60/40 (teaching artist gets 60%, Rossi gets 40% for overhead/materials)
- **Pricing**: Sliding scale ($50-$150 per person public, $2K-$5K corporate events)
- **Projected**: $80K Year 1 → $250K Year 3 (monthly public + quarterly corporate)
- **Artist payment**: Per workshop, paid within 30 days

**Revenue Stream 3: Grants**
- **Entity**: Rossi Mission Project (via fiscal sponsor)
- **Split**: 100% to operations (funds programs, staff, overhead)
- **Sources**: SF Arts Commission ($25K-$50K/year), California Arts Council ($10K-$25K/year), private foundations ($10K-$50K/year)
- **Projected**: $50K Year 1 → $125K Year 3
- **Artist benefit**: Indirect (funded programs, residencies, content production)

**Revenue Stream 4: Events**
- **Entity**: Hybrid (ticket sales through nonprofit, bar/merch through LLC)
- **Split**: Variable by artist role
  - Exhibiting artist: 50% of sales (same as retail)
  - Performing artist (live painting, music): $500-$2K flat fee
  - Event revenue (tickets, bar): 100% to Rossi (covers production costs)
- **Projected**: $60K Year 1 → $180K Year 3 (monthly events, 100-200 attendees)

**Revenue Stream 5: Brand Collaborations**
- **Entity**: Rossi Gallery LLC (for-profit)
- **Split**: 70/30 (artist gets 70%, Rossi gets 30% finder's fee)
- **Types**: Corporate murals, product design, advertising campaigns
- **Projected**: $40K Year 1 → $200K Year 3 (2-3 deals/year, $20K-$100K each)
- **Artist payment**: Per project, 50% upfront, 50% on completion

**Revenue Stream 6: Residency Sponsorships**
- **Entity**: Rossi Mission Project (via fiscal sponsor)
- **Split**: 100% to artist (stipend + materials + travel covered by sponsor)
- **Sponsorship levels**: $5K (1-month residency), $10K (2-month), $25K (named residency)
- **Projected**: $30K Year 1 → $100K Year 3 (6-10 residencies/year)
- **Artist benefit**: Direct (stipend, materials, exposure)

**Revenue Stream 7: Online/Digital**
- **Entity**: Rossi Gallery LLC (for-profit)
- **Split**: 50/50 (same as retail)
- **Products**: Print-on-demand, digital downloads, limited edition prints
- **Projected**: $20K Year 1 → $80K Year 3 (passive income, low overhead)
- **Artist payment**: Monthly, based on actual sales

**Total Projected Revenue**:
- Year 1: $780K
- Year 2: $1.2M
- Year 3: $2.1M

**Revenue Diversification**: No single stream >40% of total (retail is largest at 35-40%, but supplemented by 6 other streams).

**Rationale**:
1. Preserves 50/50 retail split (brand identity, artist trust)
2. Diversifies risk (7 streams, no single-source dependency)
3. Aligns with fiscal sponsorship model (grants through nonprofit, retail through LLC)
4. Sustainable (operational streams fund growth, not just artist payments)
5. Scalable (same model applies to multiple locations)

**Risks**:
- Complexity (different splits for different streams, artist confusion)
- Grant dependency (if grants don't materialize, operational funding gap)
- Workshop capacity (limited by teaching artist availability)

**Mitigation**:
- Clear artist contracts (specify splits by revenue type)
- Conservative grant projections (assume 50% success rate)
- Train artists as workshop instructors (expand capacity)
- Annual review (adjust splits if economics don't work)

**If this is wrong**:
- Signal: Artists confused/upset about variable splits
- Signal: Operational funding insufficient (grants not covering costs)
- Signal: Revenue concentration (one stream >50% of total)
- Pivot: Simplify to 3-4 core streams OR adjust splits based on actual economics

---

## DECISION 4: Partner Gallery Criteria (Network Expansion Model)

**Type**: 🚨 ONE-WAY DOOR (defines brand identity, cultural positioning, quality standards)

**Research source**: task-5-comparable-organizations.md, task-1-global-markets.md

### Stage 1: Gradient Descent (Expansion Models)

**Viable options**:

1. **Franchise Model** - Rossi owns/controls all locations, standardized operations
2. **Partner Gallery Network** (Stüssy International Tribe model) - Independent galleries join network, cultural fit over control
3. **Pop-Up Model** - Temporary locations, test markets before committing
4. **Hybrid** - Rossi-owned flagships + partner network

**Eliminated**:
- Licensing model (loses quality control, brand dilution risk)
- Acquisition model (capital-intensive, violates nonprofit mission)

### Stage 2: Game Theory (Model Comparison)

**Option 1 (Franchise) vs Option 2 (Partner Network)**

Franchise wins when:
- Brand consistency is critical (standardized experience)
- Quality control is priority (Rossi controls operations)
- Capital is available (can fund new locations)

Partner Network wins when:
- Cultural fit matters more than control (local artists know local scene)
- Capital is limited (partners fund their own operations)
- Scalability is priority (faster expansion, lower risk)

**Weakness in Franchise exposed by Partner Network**:
- Capital-intensive (Rossi must fund each location)
- Slow expansion (limited by capital availability)
- Violates community-before-commerce pattern (corporate expansion feel)
- Doesn't leverage local cultural knowledge

**Weakness in Partner Network exposed by Franchise**:
- Quality control risk (partners may not maintain standards)
- Brand dilution risk (inconsistent experience across locations)
- Revenue sharing (partners keep majority of profits)

**Option 2 (Partner Network) vs Option 4 (Hybrid)**

Partner Network wins when:
- Want maximum scalability (partners fund expansion)
- Trust local partners (cultural fit vetting works)
- Simplicity is priority (one model, not two)

Hybrid wins when:
- Want flagship control (Rossi-owned in key markets)
- Can fund 2-3 owned locations (SF, LA, NYC)
- Want to test both models

**Weakness in Partner Network exposed by Hybrid**:
- No owned locations outside SF (less control over brand)
- Revenue dependent on partner performance
- Harder to demonstrate model success (no owned proof points)

### Stage 3: Integration Reasoning

**Existing decisions**:
✓ Fiscal sponsorship hybrid (partners can be for-profit or nonprofit)
✓ Dual-board governance (artist advisory council vets partners)
✓ 50/50 split model (partners must adopt same artist-first economics)

**Future decisions**:
✓ Enables rapid scaling (partners fund their own operations)
✓ Protects scarcity (network grows breadth, not depth per location)
✓ Maintains cultural fit (artist advisory council approves partners)

**Case study patterns**:
✓ Community-before-commerce (Stüssy International Tribe: "cultural network first, monetize second")
✓ Scarcity economics (Supreme: "breadth over depth" - more locations, not more inventory)
✓ Distributed governance (partners have autonomy, not top-down control)

### Recommendation: Option 2 (Partner Gallery Network) - Stüssy International Tribe Model

**Model**: Independent galleries join Rossi network, maintain autonomy, share brand/resources.

**Partner Criteria** (Artist Advisory Council approves):

**MUST HAVE (Non-Negotiable)**:
1. **Artist-First Economics** - 40%+ profit share to artists (Rossi's 50/50 is gold standard, but 40%+ acceptable)
2. **Cultural Fit** - Graffiti/street art focus, community-embedded, not gentrification-driven
3. **Quality Standards** - Curated roster (not open-call), demonstrated artist development track record
4. **Mission Alignment** - Artist empowerment over profit maximization
5. **Geographic Fit** - Not in same city as existing Rossi location (avoid cannibalization)

**SHOULD HAVE (Preferred)**:
1. **Existing Community** - Established relationships with local artists, not starting from scratch
2. **Physical Space** - Brick-and-mortar location (not online-only)
3. **Track Record** - 2+ years operating, demonstrated sustainability
4. **Content Capability** - Can document artists (photography, video, social media)
5. **Event Infrastructure** - Can host exhibitions, workshops, live events

**NICE TO HAVE (Bonus)**:
1. **Complementary Strengths** - Different artistic style/medium (murals vs. canvas, etc.)
2. **Network Connections** - Relationships with brands, collectors, institutions
3. **Workshop Capability** - Can teach/mentor emerging artists
4. **Nonprofit Status** - 501(c)(3) or fiscal sponsorship (enables grant collaboration)

**DISQUALIFYING (Automatic Rejection)**:
1. **Gentrification Driver** - Gallery displacing local community, not serving it
2. **Artist Exploitation** - <30% artist share, predatory contracts, IP rights grabs
3. **Cultural Appropriation** - Non-community members extracting from culture without giving back
4. **Brand Conflicts** - Represents artists with values misaligned to Rossi (e.g., corporate sellouts)
5. **Quality Issues** - Poor curation, low artistic standards, "anyone can exhibit" model

**Partner Benefits**:
- **Brand Association** - "Rossi Network" credibility, cross-promotion
- **Artist Access** - Can exhibit Rossi roster artists (with artist consent)
- **Resource Sharing** - Content templates, workshop curricula, grant writing support
- **Collective Bargaining** - Negotiate brand collaborations as network (higher fees)
- **Knowledge Exchange** - Monthly network calls, annual summit, shared learnings

**Partner Obligations**:
- **Quality Standards** - Maintain curatorial standards, artist-first economics
- **Brand Guidelines** - Use "Rossi Network" branding appropriately, not misrepresent relationship
- **Data Sharing** - Report artist sales, workshop attendance (aggregate, not individual artist data)
- **Artist Consent** - Cannot exhibit Rossi roster artists without artist approval
- **Annual Review** - Participate in network evaluation, open to feedback

**Revenue Model**:
- **No Franchise Fees** - Partners do not pay Rossi to join network (community-first, not profit extraction)
- **Revenue Sharing on Collaborations** - If Rossi brokers brand deal for network, 20% finder's fee (80% to partner/artist)
- **Workshop Revenue** - If Rossi artist teaches at partner location, standard 60/40 split (60% to artist, 40% to hosting partner)
- **Grant Collaboration** - If joint grant application, split based on program delivery (negotiated per grant)

**Expansion Timeline**:
- **Year 1**: 0 partners (focus on SF flagship, develop partner playbook)
- **Year 2**: 2-3 partners (LA, Oakland, Portland - test model)
- **Year 3**: 5-7 partners (add NYC, Seattle, Austin, Denver)
- **Year 4-5**: 10-15 partners (national network)

**Geographic Priority** (based on task-1-global-markets.md):
1. **Los Angeles** - Established street art scene, proximity to SF, strong collector base
2. **Oakland** - Bay Area expansion, lower rent, strong graffiti culture
3. **Portland** - Active street art scene, community-focused, cultural fit
4. **New York City** - Largest art market, institutional validation, high visibility
5. **Seattle** - Tech money, emerging street art scene, cultural fit
6. **Austin** - Growing art scene, SXSW visibility, music/art crossover
7. **Denver** - Emerging market, lower competition, outdoor mural culture

**Rationale**:
1. Stüssy International Tribe model proven (cultural network → commercial success) [Research: task-5]
2. Scalable (partners fund their own operations, Rossi provides brand/resources)
3. Protects scarcity (network grows breadth, not depth - more locations, not more inventory per location)
4. Community-before-commerce (cultural fit over revenue potential)
5. Artist advisory council vets partners (ensures cultural alignment)
6. No franchise fees (community-first, not profit extraction)

**Risks**:
- Quality control (partners may not maintain standards)
- Brand dilution (inconsistent experience across locations)
- Partner failure (if partner closes, reflects on Rossi brand)
- Revenue dependency (Rossi doesn't own partner revenue)

**Mitigation**:
- Rigorous vetting (artist advisory council approval required)
- Annual review (can remove partners who don't maintain standards)
- Partner playbook (clear guidelines, best practices, quality standards)
- Pilot phase (2-3 partners in Year 2, learn before scaling)
- Exit clause (partners can leave network, Rossi can remove partners)

**If this is wrong**:
- Signal: Partners not maintaining quality standards
- Signal: Brand dilution (inconsistent experience hurting Rossi reputation)
- Signal: Partner conflicts (competing for same artists, brand deals)
- Pivot: Shift to hybrid model (Rossi-owned flagships in key markets) OR tighten partner criteria

---

## DECISION 5: Geographic Expansion Order

**Type**: 🚨 ONE-WAY DOOR (first partners set precedent, early failures damage brand)

**Research source**: task-1-global-markets.md, task-5-comparable-organizations.md

### Recommendation: Phased Expansion (Year 1-5)

**Year 1 (2026): Strengthen SF Flagship**
- **Focus**: Prove model at scale, develop partner playbook, build content library
- **Milestones**:
  - Launch fiscal sponsorship structure
  - Establish dual-board governance
  - Implement 7-stream revenue model
  - Document 50+ artist stories (content library)
  - Run 12 workshops (monthly)
  - Launch 3 residencies
  - Secure first grants (SF Arts Commission, California Arts Council)
- **Revenue Target**: $780K
- **Why**: Must prove model works before replicating. Partner playbook requires real operational data.

**Year 2 (2027): First Partner Cohort (LA + Oakland)**
- **Partners**: 2-3 galleries
  - **Los Angeles** (priority 1): Established street art scene, proximity to SF, strong collector base [Research: task-1]
  - **Oakland** (priority 2): Bay Area expansion, lower rent, strong graffiti culture, can share SF resources
  - **Portland** (optional 3rd): Active street art scene, community-focused, cultural fit
- **Why LA First**: "Largest art market in California, established street art scene, proximity allows hands-on support" [Research: task-1]
- **Why Oakland Second**: Bay Area expansion, can share SF workshop instructors, lower risk
- **Support Model**: Monthly check-ins, quarterly in-person visits, shared content library
- **Revenue Target**: $1.2M (SF flagship growth + partner collaboration revenue)

**Year 3 (2028): East Coast + Pacific Northwest (NYC + Seattle + Portland)**
- **Partners**: 3-4 galleries (total network: 5-7)
  - **New York City** (priority 1): Largest US art market, institutional validation, high visibility [Research: task-1]
  - **Seattle** (priority 2): Tech money, emerging street art scene, cultural fit
  - **Portland** (if not added Year 2): Active street art scene, community-focused
  - **Austin** (optional): Growing art scene, SXSW visibility, music/art crossover
- **Why NYC Year 3**: "Requires strong brand credibility - wait until SF + LA proven" [Research: task-1]
- **Support Model**: Regional hubs (LA supports West Coast, NYC supports East Coast)
- **Revenue Target**: $2.1M (SF flagship + partner network + brand collaborations)

**Year 4-5 (2029-2030): National Network (10-15 partners)**
- **Additional Markets**: Denver, Austin, Chicago, Philadelphia, Miami, Atlanta
- **Selection Criteria**: Partner applications (open call), artist advisory council vetting
- **Support Model**: Annual network summit, monthly virtual calls, regional hubs
- **Revenue Target**: $3.5M-$5M (network effects, collective brand deals)

**Geographic Rationale** (from task-1-global-markets.md):
- **LA**: "Established street art scene, strong collector base, proximity to SF"
- **Oakland**: Bay Area expansion, lower rent, strong graffiti culture
- **NYC**: "Largest US art market, institutional validation"
- **Seattle**: Tech money, emerging street art scene
- **Portland**: Active street art scene, community-focused
- **Austin**: SXSW visibility, music/art crossover
- **Denver**: Outdoor mural culture, lower competition

**Risk Mitigation**:
- Start with geographically close partners (LA, Oakland) - easier to support
- Wait until Year 3 for NYC (requires strong brand credibility)
- Pilot with 2-3 partners before scaling (learn from early cohort)
- Regional hub model (partners support each other, not just Rossi HQ)

---

## DECISION 6: Workshop & Residency Pricing

**Type**: 🚨 ONE-WAY DOOR (affects accessibility, revenue sustainability, grant eligibility)

**Research source**: task-6-revenue-models.md, task-4-grant-landscape.md

### Recommendation: Sliding Scale + Corporate Subsidy Model

**Public Workshops** (Community Access):
- **Pricing**: Sliding scale $50-$150 per person (4-hour workshop)
  - $50: Community rate (Mission District residents, students, low-income)
  - $100: Standard rate (general public)
  - $150: Supporter rate (subsidizes community rate)
- **Capacity**: 12-15 people per workshop
- **Frequency**: Monthly (12/year)
- **Revenue**: $80K/year (assumes 50% community rate, 30% standard, 20% supporter)
- **Artist Payment**: 60% of revenue ($48K/year to teaching artists)

**Corporate Workshops** (Revenue Generator):
- **Pricing**: $2,500-$5,000 per session (team-building, 3-4 hours, 15-25 people)
- **Frequency**: Quarterly (4-6/year)
- **Revenue**: $15K-$30K/year
- **Artist Payment**: 60% of revenue ($9K-$18K/year to teaching artists)
- **Rationale**: Corporate rate subsidizes community access (Robin Hood model)

**School Programs** (Grant-Funded):
- **Pricing**: Free to schools (funded by grants)
- **Frequency**: 10-15 schools/year (1-2 sessions per school)
- **Revenue**: $0 (grant-funded)
- **Artist Payment**: $500-$1,000 per session (from grant funds)
- **Rationale**: Serves educational mission (grant eligibility), builds pipeline (discover young artists)

**Artist Residencies**:
- **Pricing**: Free to artists (sponsored)
- **Sponsorship Levels**:
  - $5,000: 1-month residency (stipend + materials + studio space)
  - $10,000: 2-month residency
  - $25,000: Named residency (sponsor recognition)
- **Frequency**: 6-10 residencies/year
- **Revenue**: $30K-$100K/year (from sponsors)
- **Artist Benefit**: 100% (stipend, materials, travel, studio, documentation)
- **Rationale**: Charitable pillar (nonprofit mission), artist career development

**Rationale**:
1. Sliding scale ensures accessibility (community members can afford)
2. Corporate workshops subsidize community access (Robin Hood model)
3. Grant-funded school programs serve educational mission (501(c)(3) requirement)
4. Free residencies align with charitable mission (nonprofit credibility)
5. Revenue sustainable ($80K workshops + $30K residencies = $110K/year, covers costs)

**Risks**:
- Community rate abuse (non-eligible people claiming community rate)
- Corporate workshop pipeline (inconsistent demand)
- Grant dependency (school programs require ongoing grants)

**Mitigation**:
- Honor system for community rate (trust-based, no verification required)
- Corporate outreach (dedicated BD effort, tech companies, agencies)
- Diversify school funding (multiple grants, not single-source)

---

## DECISION 7: Brand Collaboration Policy

**Type**: 🚨 ONE-WAY DOOR (defines brand integrity, artist trust, cultural positioning)

**Research source**: task-5-comparable-organizations.md (Supreme cautionary tale)

### Recommendation: Artist-Approved, Mission-Aligned Only

**Approval Process**:
1. **Brand Inquiry** → Rossi staff screens (mission alignment, artist fit)
2. **Artist Advisory Council Review** → Votes on cultural fit
3. **Individual Artist Consent** → Each participating artist must approve
4. **Contract Negotiation** → 70/30 split (artist gets 70%, Rossi gets 30% finder's fee)
5. **Execution** → Artist creates work, Rossi manages logistics

**Approval Criteria** (Artist Advisory Council):

**APPROVED**:
- **Mission-Aligned Brands**: Patagonia, Ben & Jerry's, local SF businesses, arts organizations
- **Artist-Owned Brands**: Other artist collectives, independent streetwear brands
- **Community Benefit**: Collaborations that give back (% of sales to community programs)
- **Creative Freedom**: Brand gives artist full creative control

**CASE-BY-CASE**:
- **Mainstream Brands**: Nike, Adidas, Apple (depends on specific project, artist consent)
- **Tech Companies**: Google, Meta, Salesforce (depends on values alignment)
- **Alcohol/Cannabis**: Depends on brand values, community impact

**REJECTED**:
- **Fast Fashion**: H&M, Zara, Shein (labor exploitation, environmental harm)
- **Extractive Corporations**: Oil companies, private prisons, weapons manufacturers
- **Gentrification Drivers**: Luxury developers, corporate landlords displacing communities
- **Cultural Appropriators**: Brands with history of stealing from street culture without credit

**Supreme Lesson Applied**:
"Scarcity and growth are really oppositional" [Research: task-5, Supreme]. Limit collaborations to 3-5/year (scarcity protects value). Reject high-volume deals (Target, Walmart) even if lucrative.

**Revenue Cap**: No single collaboration >15% of annual revenue (prevents brand dependency).

**Artist Veto Power**: Any artist can veto collaboration, even if council approved (individual autonomy).

**Rationale**:
1. Protects brand integrity (mission-aligned only)
2. Maintains artist trust (artists control what they're associated with)
3. Applies scarcity economics (3-5 collaborations/year, not unlimited)
4. Prevents Supreme's mistake (growth over values)
5. Artist advisory council ensures cultural fit

**Risks**:
- Revenue opportunity cost (rejecting lucrative deals)
- Artist disagreement (council approves, individual artist vetoes)
- Brand perception (too selective, seen as elitist)

**Mitigation**:
- Transparent criteria (brands know requirements upfront)
- Respect artist veto (individual autonomy over collective decision)
- Communicate values (public statement on collaboration policy)

---

## Operations Structure

### Team Roles (Year 1-3 Scaling)

**Year 1 (SF Flagship Only)**:
- **Executive Director** (0.5 FTE): Fiscal sponsor coordination, fundraising, board management
- **Gallery Manager** (1.0 FTE): Daily operations, artist relations, inventory, events
- **Content Producer** (0.5 FTE): Artist documentation, social media, workshop marketing
- **Workshop Coordinator** (0.25 FTE): Schedule workshops, manage instructors, handle registrations
- **Teaching Artists** (Contract): 3-5 artists teaching monthly workshops
- **Total**: 2.25 FTE + contractors

**Year 2 (SF + 2-3 Partners)**:
- **Executive Director** (1.0 FTE): Full-time, partner network management added
- **Gallery Manager** (1.0 FTE): SF flagship operations
- **Content Producer** (1.0 FTE): Full-time, partner content support added
- **Workshop Coordinator** (0.5 FTE): SF + partner coordination
- **Partner Liaison** (0.5 FTE): Partner onboarding, support, quality control
- **Teaching Artists** (Contract): 5-8 artists (SF + partners)
- **Total**: 4.0 FTE + contractors

**Year 3 (SF + 5-7 Partners)**:
- **Executive Director** (1.0 FTE)
- **Gallery Manager** (1.0 FTE): SF flagship
- **Content Director** (1.0 FTE): Leads content team
- **Content Producer** (0.5 FTE): Supports content director
- **Workshop Director** (1.0 FTE): Manages workshop program across network
- **Partner Network Manager** (1.0 FTE): Full-time partner support
- **Grant Writer** (0.5 FTE): Dedicated fundraising support
- **Teaching Artists** (Contract): 10-15 artists (network-wide)
- **Total**: 6.0 FTE + contractors

### Location Management

**SF Flagship** (791 Valencia Street):
- **Retail Hours**: Wed-Sun, 12pm-7pm (5 days/week)
- **Events**: Monthly exhibitions, quarterly major events
- **Workshops**: Monthly public workshops, quarterly corporate
- **Inventory**: Cap at 250 SKUs (scarcity economics)
- **Artist Rotation**: 20-30 artists featured at any time (from 80+ roster)

**Partner Locations**:
- **Autonomy**: Partners set their own hours, event schedule
- **Brand Guidelines**: Must use "Rossi Network" branding, maintain quality standards
- **Inventory**: Recommended cap at 200-300 SKUs (scarcity economics)
- **Artist Sharing**: Can exhibit Rossi roster artists (with artist consent)

### Artist Onboarding

**Selection Process**:
1. **Application/Referral** → Artist submits portfolio OR existing artist refers
2. **Artist Advisory Council Review** → Evaluates artistic quality, cultural fit
3. **Trial Period** → 3-month trial (artist exhibits work, no long-term commitment)
4. **Full Roster** → After trial, artist joins full roster (2-year renewable contract)

**Selection Criteria**:
- **Artistic Quality**: Distinctive style, technical skill, creative vision
- **Cultural Fit**: Graffiti/street art roots, community-embedded, mission-aligned
- **Career Stage**: Emerging to mid-career (not established museum artists)
- **Geographic Diversity**: Represent multiple neighborhoods, cities (as network grows)
- **Medium Diversity**: Murals, canvas, sculpture, digital, mixed media

**Contract Terms**:
- **Duration**: 2 years, renewable
- **Exclusivity**: Non-exclusive (artists can sell elsewhere)
- **Profit Split**: 50/50 on retail sales (after COGS)
- **IP Rights**: Artist retains all IP, Rossi gets license to reproduce for marketing only
- **Termination**: Either party can terminate with 30 days notice

### Inventory Management (Scarcity Economics)

**SKU Limits** (per location):
- **SF Flagship**: 250 SKUs max
- **Partner Locations**: 200-300 SKUs recommended
- **Rationale**: "Scarcity and growth are really oppositional" [Research: task-5, Supreme]

**Inventory Mix**:
- **Originals**: 30-40% of SKUs ($500-$3,000+ each)
- **Limited Edition Prints**: 30-40% of SKUs ($100-$500 each)
- **Merchandise**: 20-30% of SKUs ($15-$100 each)
- **Collaborations**: 5-10% of SKUs (limited releases)

**Replenishment Strategy**:
- **Originals**: One-of-a-kind, not replenished (scarcity)
- **Prints**: Limited editions (50-200 prints), not reprinted once sold out
- **Merchandise**: Seasonal releases (Spring, Fall), limited quantities
- **Collaborations**: Drop model (limited release, no restock)

**Expansion Strategy**:
- **Add Locations, Not SKUs**: Network grows to 10-15 locations, each with 200-300 SKUs (breadth over depth)
- **Add Artists, Not Inventory**: Roster grows to 150-200 artists, but each location shows 20-30 at a time (rotation)

### Content Production (Operational Function)

**Content Types**:
- **Artist Stories**: 5-10 min video profiles (signature style, process, inspiration)
- **Process Videos**: Time-lapse of mural creation, studio work
- **Workshop Recaps**: Highlight reels from workshops, student testimonials
- **Event Coverage**: Exhibition openings, live painting, music events
- **Behind-the-Scenes**: Artist interviews, studio visits, residency documentation

**Production Schedule**:
- **Artist Stories**: 2-3/month (24-36/year)
- **Process Videos**: 1-2/month (12-24/year)
- **Workshop Recaps**: Monthly (12/year)
- **Event Coverage**: Monthly (12/year)
- **Behind-the-Scenes**: Weekly (52/year)

**Distribution Channels**:
- **Instagram**: Daily posts, stories, reels
- **YouTube**: Long-form artist stories, process videos
- **TikTok**: Short-form process videos, workshop highlights
- **Email Newsletter**: Monthly, artist spotlights + event calendar
- **Website**: Artist profiles, portfolio galleries, shop

**Budget**: $60K-$100K/year (Content Producer salary + equipment + editing)

**Rationale**: "Documentation is the discovery engine" [Research: task-5, GX1000 model]. Content is operational function, not marketing cost.

### Technology Infrastructure

**E-Commerce**:
- **Platform**: Shopify (Year 1-2), custom (Year 3+)
- **Features**: Artist profiles, product galleries, inventory management, order fulfillment
- **Integration**: POS system (Square), accounting (QuickBooks)

**CRM**:
- **Platform**: Airtable (Year 1-2), Salesforce (Year 3+)
- **Use Cases**: Artist roster management, collector database, workshop registrations, partner tracking

**Inventory Tracking**:
- **Platform**: Shopify inventory + custom SKU limits
- **Alerts**: Notify when approaching SKU cap (scarcity enforcement)

**Content Management**:
- **Platform**: Notion (internal), WordPress (public website)
- **Use Cases**: Content calendar, artist documentation, partner playbook

**Communication**:
- **Internal**: Slack (team), Zoom (partner calls)
- **External**: Mailchimp (newsletter), Instagram (social)

---

## Financial Projections Framework

**Note**: Detailed numbers are Yuty's job (narrative generation). This section provides the model structure.

### Revenue Projections (3-Year)

**Year 1** (SF Flagship Only):
- Retail Sales: $500K
- Workshops: $80K
- Grants: $50K
- Events: $60K
- Collaborations: $40K
- Residency Sponsorships: $30K
- Online/Digital: $20K
- **Total**: $780K

**Year 2** (SF + 2-3 Partners):
- Retail Sales: $750K (SF growth + partner collaboration revenue)
- Workshops: $150K (SF + partners)
- Grants: $75K (increased capacity)
- Events: $100K (SF + partners)
- Collaborations: $80K (network effect)
- Residency Sponsorships: $50K
- Online/Digital: $45K
- **Total**: $1.25M

**Year 3** (SF + 5-7 Partners):
- Retail Sales: $1.2M (SF + partner network)
- Workshops: $250K (network-wide)
- Grants: $125K (multi-location applications)
- Events: $180K (network-wide)
- Collaborations: $200K (collective brand deals)
- Residency Sponsorships: $100K
- Online/Digital: $80K
- **Total**: $2.1M

### Expense Categories

**Cost of Goods Sold (COGS)**: 30-40% of retail sales (artist materials, production, shipping)

**Artist Payments**: 50% of net retail sales (after COGS), 60% of workshop revenue, 70% of collaboration revenue

**Operations**:
- Rent (SF flagship): $8K-$12K/month
- Staff salaries: $150K (Year 1) → $400K (Year 3)
- Content production: $60K-$100K/year
- Technology: $10K-$20K/year
- Marketing: $20K-$40K/year
- Insurance, legal, accounting: $20K-$40K/year

**Fiscal Sponsor Fee**: 5-15% of grant revenue

### Break-Even Analysis

**Year 1**: Break-even or small deficit (investment year)
**Year 2**: Break-even or small surplus (partner revenue offsets expansion costs)
**Year 3**: 10-15% surplus (network effects, operational efficiency)

### Key Assumptions

- **Growth Rates**: 20-30% annual (conservative for nonprofit)
- **Grant Success Rate**: 50% (apply for $150K, receive $75K)
- **Workshop Capacity**: 12-15 people/workshop, 80% fill rate
- **Partner Revenue**: 20% finder's fee on collaborations, no franchise fees
- **Artist Retention**: 80% year-over-year (20% churn)

### Sensitivity Analysis

**If Grants Cut 50%**:
- Impact: -$25K-$60K revenue/year
- Mitigation: Increase workshop frequency, pursue more collaborations

**If Retail Declines 20%**:
- Impact: -$100K-$240K revenue/year
- Mitigation: Diversified revenue (6 other streams), online sales growth

**If Partner Fails**:
- Impact: Minimal (partners fund their own operations)
- Mitigation: Rigorous vetting, annual review, exit clause

---

## Risk Analysis

### CRITICAL Risks (Must Address Before Launch)

**Risk 1: Fiscal Sponsorship Rejection**
- **Description**: Fiscal sponsor (Fractured Atlas, Intersection for the Arts) rejects application due to retail/nonprofit separation concerns
- **Probability**: Medium (20-30%)
- **Impact**: High (blocks grant access, delays launch 6-12 months)
- **Mitigation**:
  - Apply to multiple sponsors simultaneously (Fractured Atlas, Intersection for the Arts, California Lawyers for the Arts)
  - Clearly document retail (LLC) vs. programs (nonprofit) separation
  - Emphasize educational mission (workshops, residencies, content)
  - Backup plan: Launch as full for-profit, transition to nonprofit later
- **Contingency**: If all sponsors reject, operate as for-profit LLC Year 1, reapply with operational track record Year 2

**Risk 2: 50/50 Split Unsustainable**
- **Description**: 50% artist payment leaves insufficient margin for operations, growth
- **Probability**: Medium (30-40%)
- **Impact**: High (financial unsustainability, cannot scale)
- **Mitigation**:
  - Conservative financial projections (assume worst-case margins)
  - Diversified revenue (grants, workshops, collaborations supplement retail)
  - Operational efficiency (lean team, shared resources with partners)
  - Annual review (adjust split if economics don't work, with artist consent)
- **Contingency**: Renegotiate split to 60/40 (artist gets 60%, Rossi gets 40%) if 50/50 proves unsustainable - requires artist advisory council approval

**Risk 3: Grant Funding Unreliable**
- **Description**: NEA canceled Bay Area grants in 2025 [Research: task-4], federal funding politically vulnerable
- **Probability**: High (50-60% for federal, 10-20% for state/local)
- **Impact**: Medium (lose $25K-$50K/year if grants cut)
- **Mitigation**:
  - Do NOT rely on federal grants (NEA unreliable)
  - Focus on state (California Arts Council) and local (SF Arts Commission) - more stable
  - Diversify grant sources (10+ applications/year, not single-source)
  - Grants are 6-10% of revenue (not majority) - can survive without them
- **Contingency**: If grants cut, increase workshop frequency (corporate workshops subsidize community access)

### HIGH Risks (Should Address)

**Risk 4: Partner Quality Control**
- **Description**: Partner galleries don't maintain quality standards, damage Rossi brand
- **Probability**: Medium (30-40%)
- **Impact**: Medium (brand dilution, loss of credibility)
- **Mitigation**:
  - Rigorous vetting (artist advisory council approval required)
  - Annual review (can remove partners who don't maintain standards)
  - Partner playbook (clear guidelines, best practices, quality standards)
  - Pilot phase (2-3 partners Year 2, learn before scaling)
  - Exit clause (partners can leave, Rossi can remove partners)
- **Contingency**: Remove underperforming partners, tighten criteria for future partners

**Risk 5: Founder Dependency (Despite Mitigation)**
- **Description**: Dual-board model still relies on founder(s) for vision, relationships, credibility
- **Probability**: Medium (40-50%)
- **Impact**: High (if founder exits, organization struggles)
- **Mitigation**:
  - Dual-board distributes decision-making (14-17 people, not 1-2)
  - Document institutional knowledge (partner playbook, artist onboarding process, brand guidelines)
  - Hire executive director (not founder) by Year 2
  - Artist advisory council has autonomy (can operate without founder)
- **Contingency**: If founder exits, artist advisory council leads transition, governing board hires new ED

**Risk 6: Artist Retention**
- **Description**: Artists leave Rossi for traditional galleries (higher prices, museum connections)
- **Probability**: Medium (30-40%)
- **Impact**: Medium (lose top artists, weakens roster)
- **Mitigation**:
  - 50/50 split is industry-leading (traditional galleries take 50-60% commission)
  - Artist career pipeline (workshops, residencies, content) provides value beyond sales
  - Non-exclusive contracts (artists can sell elsewhere, reduces pressure)
  - Artist advisory council (artists have voice in governance, not just beneficiaries)
- **Contingency**: Accept 20% annual churn as normal, focus on discovering new artists (pipeline model)

**Risk 7: Scarcity vs. Growth Tension**
- **Description**: Pressure to grow revenue conflicts with scarcity economics (Supreme's mistake)
- **Probability**: High (60-70% as organization scales)
- **Impact**: High (over-expansion destroys brand value)
- **Mitigation**:
  - SKU caps enforced (250 SKUs per location, no exceptions)
  - Artist advisory council enforces scarcity (resists over-commercialization)
  - Partner network model (breadth over depth - more locations, not more inventory)
  - Brand collaboration limits (3-5/year, no high-volume deals)
- **Contingency**: If revenue pressure mounts, add locations (breadth) not SKUs (depth)

### MEDIUM Risks (Monitor)

**Risk 8: SF Retail Vacancy Fluctuations**
- **Description**: Valencia Street vacancy increases, foot traffic declines
- **Probability**: Low-Medium (20-30%)
- **Impact**: Medium (retail sales decline 10-20%)
- **Mitigation**:
  - Valencia Street west of Van Ness is strong (2.1% vacancy) [Research: task-1]
  - Diversified revenue (retail is 35-40% of total, not majority)
  - Online sales growth (reduces dependence on foot traffic)
  - Events drive traffic (monthly exhibitions, not just retail)
- **Contingency**: Increase online marketing, expand e-commerce, consider relocation if vacancy >10%

**Risk 9: Content Production Costs**
- **Description**: Content production ($60K-$100K/year) doesn't generate sufficient ROI
- **Probability**: Medium (30-40%)
- **Impact**: Low-Medium (operational expense without clear revenue attribution)
- **Mitigation**:
  - Content is operational function (artist discovery, not marketing cost) [Research: task-5, GX1000 model]
  - Track metrics (social media growth, website traffic, artist inquiries)
  - Repurpose content (one artist story → Instagram, YouTube, TikTok, newsletter)
  - Grant-funded (some grants cover documentation/marketing)
- **Contingency**: Reduce production frequency (1 artist story/month instead of 2-3), use lower-cost tools (iPhone vs. pro camera)

**Risk 10: Workshop Capacity Constraints**
- **Description**: Limited teaching artists, can't scale workshop revenue
- **Probability**: Medium (40-50%)
- **Impact**: Low-Medium (workshop revenue caps at $150K-$250K)
- **Mitigation**:
  - Train artists as instructors (expand capacity)
  - Partner network shares instructors (Rossi artist teaches at LA partner)
  - Corporate workshops prioritized (higher revenue per session)
  - Online workshops (scale beyond in-person capacity)
- **Contingency**: Accept workshop revenue cap, focus on other streams (collaborations, grants)

---

## Artist Career Pipeline (Three-Pillar Integration)

**Core Insight**: "Signature style + personal champion + documentation = career launch" [Research: task-5, Chito → Barry McGee trajectory]

**The three expansion pillars are NOT separate programs - they are an integrated artist development pipeline.**

### Stage 1: Discovery & Signature Style Development (Workshops)

**Function**: Teach emerging artists to develop distinctive signature style

**Workshop Curriculum**:
- **Fundamentals**: Spray technique, color theory, composition
- **Style Development**: Finding your voice, building a visual language
- **Business Skills**: Pricing, contracts, IP rights, career planning

**Outcome**: Artist develops recognizable signature style (prerequisite for career launch)

**Pipeline Metric**: 10-15% of workshop participants join Rossi roster (discovery funnel)

### Stage 2: Champion & Network Building (Residencies)

**Function**: Provide personal champion (mentor) and network connections

**Residency Structure**:
- **Mentor Assignment**: Established Rossi artist mentors resident
- **Network Access**: Introductions to collectors, galleries, brands
- **Exhibition Opportunity**: Residency culminates in solo/group show
- **Documentation**: Content team captures entire process

**Outcome**: Artist gains personal champion (mentor) and network connections (collectors, galleries)

**Pipeline Metric**: 80% of residents secure gallery representation or brand collaboration within 12 months

### Stage 3: Documentation & Visibility (Content Production)

**Function**: Create documentation that travels globally (digital visibility)

**Content Strategy**:
- **Artist Story**: 5-10 min video profile (signature style, process, inspiration)
- **Process Documentation**: Time-lapse of mural creation, studio work
- **Exhibition Coverage**: Opening night, collector interviews, sales
- **Social Amplification**: Instagram, YouTube, TikTok, newsletter

**Outcome**: Artist's work "travels globally within hours, even if originals were erased days later" [Research: task-1, Times of India]

**Pipeline Metric**: Artist social media following grows 50-200% during residency

### Integration: How the Three Pillars Work Together

**Example: Emerging Artist "Maria"**

1. **Workshop** (Month 1-3): Maria takes 3-month workshop series, develops signature style (geometric graffiti + Mission District iconography)

2. **Roster Trial** (Month 4-6): Maria joins Rossi roster (trial period), exhibits work at SF flagship, sells 5 pieces

3. **Residency** (Month 7-9): Maria selected for 2-month residency, mentored by established Rossi artist "Carlos"
   - Carlos introduces Maria to collectors, galleries, brand contacts
   - Maria creates 10 new pieces during residency
   - Content team documents entire process (artist story video, process time-lapses, Instagram takeover)

4. **Exhibition** (Month 10): Maria's residency culminates in solo show at SF flagship
   - Opening night: 150 attendees, 8 pieces sold ($12K revenue, $6K to Maria)
   - Content: Exhibition coverage video, collector interviews, social media amplification
   - Press: SF Chronicle covers show, Maria's Instagram grows from 500 to 3,000 followers

5. **Career Launch** (Month 11-12): Maria secures gallery representation in LA (Rossi partner), lands brand collaboration (local SF business), invited to paint mural for "Vacant to Vibrant" program

**Result**: Maria goes from unknown workshop participant to represented artist with brand deals in 12 months.

**This is the Rossi model**: Workshops discover talent → Residencies provide champions → Content creates visibility → Artists launch careers.

**Scalability**: As network grows to 10-15 locations, pipeline scales:
- 120-180 workshops/year (10-15 locations × 12 workshops/year)
- 60-150 residencies/year (10-15 locations × 6-10 residencies/year)
- 240-540 artist stories/year (10-15 locations × 2-3 stories/month)
- **Result**: 100-200 artist career launches/year (national graffiti artist discovery engine)

---

## Next Steps

### Immediate (Week 1-4)

1. **Human Review**: Confirm all 7 ONE-WAY DOOR decisions
2. **Fiscal Sponsor Applications**: Apply to Fractured Atlas, Intersection for the Arts, California Lawyers for the Arts
3. **Governing Board Recruitment**: Identify 5 board members (2 nonprofit expertise, 2 artists, 1 community)
4. **Artist Advisory Council Election**: Rossi's 80+ artists elect 9-12 council members
5. **Legal Structure**: Form Rossi Gallery LLC (for-profit), establish fiscal sponsorship agreement

### Short-Term (Month 1-3)

1. **Grant Applications**: SF Arts Commission (3 programs), California Arts Council (2-3 programs)
2. **Partner Playbook**: Document partner criteria, application process, quality standards
3. **Workshop Curriculum**: Develop 3-month workshop series (fundamentals, style development, business skills)
4. **Content Production**: Hire content producer, document 10 artist stories (build library)
5. **Technology Setup**: Shopify store, Airtable CRM, Notion workspace

### Medium-Term (Month 4-12)

1. **Launch Programs**: Monthly workshops, quarterly events, first 3 residencies
2. **Secure Grants**: Receive first grant funding (SF Arts Commission, California Arts Council)
3. **Partner Outreach**: Identify 10-15 potential partners (LA, Oakland, Portland), begin vetting
4. **Financial Review**: Assess Year 1 performance, adjust projections for Year 2
5. **Hire Executive Director**: Recruit ED to lead Year 2 expansion

### Long-Term (Year 2-3)

1. **Partner Launch**: Onboard 2-3 partners (Year 2), 3-4 more (Year 3)
2. **Scale Programs**: Expand workshops, residencies, content across network
3. **Brand Collaborations**: Secure 3-5 collaborations/year (collective network deals)
4. **Governance Review**: Assess dual-board model, adjust if needed
5. **Transition to Full 501(c)(3)**: If fiscal sponsorship works, consider transitioning to independent nonprofit (Year 3-4)

---

## 🦖 Rex Handoff to Yuty

**Architecture complete.** Key decisions:

1. **Organizational Structure** - 🚨 ONE-WAY DOOR - Fiscal sponsorship hybrid (501(c)(3) + LLC)
2. **Governance Model** - 🚨 ONE-WAY DOOR - Dual-board (artist advisory + governing board)
3. **Revenue Model** - 🚨 ONE-WAY DOOR - 7-stream diversification, differentiated splits
4. **Partner Criteria** - 🚨 ONE-WAY DOOR - Stüssy International Tribe model, cultural fit over revenue
5. **Expansion Order** - 🚨 ONE-WAY DOOR - LA/Oakland (Year 2), NYC/Seattle (Year 3)
6. **Pricing Model** - 🚨 ONE-WAY DOOR - Sliding scale workshops, free residencies
7. **Brand Policy** - 🚨 ONE-WAY DOOR - Artist-approved, mission-aligned only, 3-5 collaborations/year

**ONE-WAY DOORS requiring human confirmation**: 7

**Research sources used**:
- task-1-global-markets.md (geographic expansion, market patterns)
- task-2-nonprofit-vs-forprofit.md (organizational structure, fiscal sponsorship)
- task-3-governance-models.md (dual-board model, artist advisory council)
- task-4-grant-landscape.md (SF Arts Commission, California Arts Council, NEA unreliability)
- task-5-comparable-organizations.md (Stüssy Tribe, Supreme scarcity, Chito pipeline, ALIFE founder dependency)
- task-6-revenue-models.md (7-stream diversification, workshop economics, collaboration splits)

**Case study patterns applied**:
1. ✓ Scarcity Economics (Supreme) - SKU caps, breadth over depth, limited collaborations
2. ✓ Community-Before-Commerce (Stüssy) - Partner criteria prioritize cultural fit, no franchise fees
3. ✓ Content-Driven Discovery (GX1000) - Content as operational function, $60K-$100K/year budget
4. ✓ Artist Career Pipeline (Chito → Barry McGee) - Three pillars integrated (workshops → residencies → content)
5. ✓ Diversified Revenue (6-7 streams) - 7 revenue streams, no single source >40%
6. ✓ Distributed Governance (ALIFE/FA lesson) - Dual-board, 14-17 decision-makers, founder dependency eliminated

**Ready for narrative generation.**

Switching to Yuty for business plan section-by-section generation...

---

**END OF ARCHITECTURE DOCUMENT**
