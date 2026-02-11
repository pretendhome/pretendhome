# Theri Build Spec: Email Sequences
**Agent**: Therizinosaurus (Theri) | **Phase**: 3 — Build Spec | **Date**: 2026-02-11

---

## Overview

9 emails across 3 phases: pre-drop (4), drop-day (2), post-drop (3). All emails built in Shopify Email or Klaviyo. Segmentation by signup source (pre-launch list vs. existing Rossi list vs. purchasers).

---

## 1. Pre-Drop Sequence (T-8 to T-1)

### Email 1: Welcome / Something Is Coming
**Trigger**: Email signup from landing page
**Send**: Immediately upon signup
**Segment**: New pre-launch signups

| Field | Content |
|-------|---------|
| **Subject A** | Something is coming to Rossi Mission |
| **Subject B** | You're on the list. Here's what's next. |
| **Preview text** | 25 years in the making. |
| **Header image** | MQ studio teaser (dark, atmospheric) |
| **Body** | "Thank you for joining us. We're working on something special — a tribute 25 years in the making, from one of NYC's most legendary graffiti writers. We'll share the full story soon. For now, know this: you'll be the first to hear when it drops." |
| **CTA** | "Follow @rossimission on Instagram" (button) |
| **Footer** | Standard Rossi Mission footer + unsubscribe |

---

### Email 2: The Story
**Trigger**: Scheduled send
**Send**: T-4 weeks (day of public announcement)
**Segment**: All pre-launch signups + existing Rossi email list

| Field | Content |
|-------|---------|
| **Subject A** | The story behind our first drop |
| **Subject B** | MQ x Tie One: 25 years of tribute |
| **Preview text** | NYC legend. SF legacy. A quarter century of art. |
| **Header image** | MQ + Tie One sticker art collage |
| **Body** | Condensed narrative (200 words): Who is MQ. Who was Tie One. The 25-year tribute. "For the first time, this work comes to a gallery — and it's coming to San Francisco, Tie One's city." |
| **CTA** | "Read the full story" → blog post |
| **Secondary CTA** | "Share this story" → social share links |

---

### Email 3: Product Reveal
**Trigger**: Scheduled send
**Send**: T-1 week (7 days before drop)
**Segment**: All pre-launch + existing list

| Field | Content |
|-------|---------|
| **Subject A** | The collection is revealed |
| **Subject B** | MQ x Tie One — see every piece |
| **Preview text** | Originals. Prints. Tees. Stickers. From $10. |
| **Header image** | Product grid collage (all items) |
| **Body** | "Here's what's dropping. [X] products, from $10 sticker packs to one-of-a-kind originals. Everything is limited. Nothing restocks." Brief description of each product tier. |
| **Product showcase** | 3-4 hero products with images, names, prices, edition sizes |
| **CTA** | "Preview the collection" → landing page |
| **Details** | "Gallery opening: [Date], 6-10pm, 791 Valencia St. Online drop: [Date], 10am PT." |

---

### Email 4: Final Countdown
**Trigger**: Scheduled send
**Send**: T-1 day (day before gallery opening)
**Segment**: All pre-launch + existing list

| Field | Content |
|-------|---------|
| **Subject A** | Tomorrow night. 6pm. 791 Valencia. |
| **Subject B** | MQ x Tie One drops in 24 hours |
| **Preview text** | Gallery opens tomorrow. Online drops Saturday morning. |
| **Header image** | Gallery setup / installation shot (if available) or hero piece |
| **Body** | "Tomorrow is the night. Gallery opening at 791 Valencia, 6-10pm. MQ will be there. If you can't make it in person, the online drop goes live Saturday at 10am PT. Everything is limited. When it's gone, it's gone." |
| **CTA 1** | "RSVP for tomorrow night" (if applicable) |
| **CTA 2** | "Set a reminder for the online drop" (calendar link) |

---

## 2. Drop-Day Sequence (T-0 to T+1)

### Email 5: Gallery Recap + Online Drop Imminent
**Trigger**: Scheduled send
**Send**: T+1 morning (Saturday, 8am PT — 2 hours before online drop)
**Segment**: All pre-launch + existing list (EXCLUDE in-person purchasers if trackable)

| Field | Content |
|-------|---------|
| **Subject A** | Last night was incredible. The online drop is in 2 hours. |
| **Subject B** | MQ x Tie One is live at 10am PT |
| **Preview text** | [X] items already sold at the gallery. Don't miss out. |
| **Header image** | Best photo from gallery opening (crowd, MQ, art on walls) |
| **Body** | "Last night, MQ brought the Tie One tribute to life at 791 Valencia. [Brief recap: X people attended, X pieces sold, MQ spoke about...]. The online drop goes live at 10am PT. Here's what's available." |
| **Product status** | List items with "Available" / "Only X left" / "SOLD OUT at gallery" |
| **CTA** | "Shop at 10am PT" → landing page |
| **Countdown** | Inline countdown to 10am PT |

---

### Email 6: Drop Is Live
**Trigger**: Scheduled send
**Send**: T+1 at 10am PT exactly
**Segment**: All pre-launch + existing list

| Field | Content |
|-------|---------|
| **Subject A** | It's live. MQ x Tie One is available now. |
| **Subject B** | The drop is open. |
| **Preview text** | Limited stock. Shop now before it's gone. |
| **Header image** | Product hero shot |
| **Body** | "The MQ x Tie One collection is now available online. Everything is limited edition. Nothing restocks. When it's gone, it's gone." |
| **Product grid** | All available products with prices and "Shop" buttons |
| **CTA** | "Shop the Collection" → collection page |

---

## 3. Post-Drop Sequence (T+2 to T+21)

### Email 7: Thank You (Purchasers Only)
**Trigger**: Post-purchase automation
**Send**: 24 hours after purchase
**Segment**: Purchasers only

| Field | Content |
|-------|---------|
| **Subject A** | Thank you for being part of the Tie One tribute |
| **Subject B** | Your MQ x Tie One order is confirmed |
| **Preview text** | You're part of something that's been 25 years in the making. |
| **Header image** | Artwork detail or MQ creating |
| **Body** | "Thank you for supporting the MQ x Tie One tribute. You're now part of a story 25 years in the making. [If cause allocation confirmed: X% of proceeds support [cause/fund].] Your order details are below. Shipping within [X] business days." |
| **Order details** | Standard order confirmation |
| **CTA** | "Share your purchase" → social share with pre-written text |
| **Secondary** | "Visit the exhibition at 791 Valencia through [end date]" |

---

### Email 8: Exhibition Reminder (Non-Purchasers)
**Trigger**: Scheduled send
**Send**: T+7 (one week into exhibition)
**Segment**: Pre-launch signups who did NOT purchase

| Field | Content |
|-------|---------|
| **Subject A** | The exhibition is still open — and so are some items |
| **Subject B** | MQ x Tie One: last week at 791 Valencia |
| **Preview text** | See the art in person before it closes. |
| **Header image** | Exhibition installation shot |
| **Body** | "The MQ x Tie One exhibition is open at 791 Valencia through [end date]. Some items are still available in-store and online. If you haven't seen the work in person, this is your chance." |
| **Product status** | Available items only (with "Low stock" indicators) |
| **CTA** | "Visit the exhibition" (address + hours) |
| **Secondary CTA** | "Shop remaining items" → collection page |

---

### Email 9: Drop Close / Community Thank You
**Trigger**: Scheduled send
**Send**: T+21 (drop close day)
**Segment**: Full list (all pre-launch + existing + purchasers)

| Field | Content |
|-------|---------|
| **Subject A** | MQ x Tie One: Thank you, San Francisco |
| **Subject B** | The drop is closed. Here's what happened. |
| **Preview text** | [X] pieces sold. [X] people visited. Tie One's legacy continues. |
| **Header image** | Best overall photo from the drop/exhibition |
| **Body** | "The MQ x Tie One tribute drop at Rossi Mission is now closed. Here's what happened: [Stats: items sold, exhibition visitors, community response]. Thank you to MQ for 25 years of keeping Tie One's memory alive, and to everyone who supported this collection. [If cause allocation: $X raised for [cause].] This was Rossi Mission's first drop. There will be more. Stay tuned." |
| **CTA** | "Follow @rossimission for future drops" |
| **Secondary** | "Share this story" → social share |

---

## 4. Segmentation Rules

| Segment | Definition | Receives |
|---------|-----------|----------|
| **Pre-launch signups** | Signed up via landing page pre-drop | Emails 1-6, 8 or 7 (based on purchase), 9 |
| **Existing Rossi list** | Already on Rossi email list | Emails 2-6, 8 or 7 (based on purchase), 9 |
| **Purchasers** | Made a purchase (any channel) | Email 7, 9 |
| **Non-purchasers** | Signed up but didn't buy | Email 8, 9 |

---

## 5. Technical Requirements

| Requirement | Spec |
|------------|------|
| **Platform** | Shopify Email or Klaviyo |
| **From name** | "Rossi Mission" |
| **From email** | hello@rossimission.com (or similar) |
| **Reply-to** | Same as from email |
| **Template** | Consistent branded template across all 9 emails |
| **Images** | Max 600px wide, <200KB each, alt text on all |
| **Mobile** | All emails must render correctly on iOS Mail, Gmail, Outlook |
| **Tracking** | UTM parameters on all links (utm_source=email, utm_medium=email, utm_campaign=mq-tie-one) |
| **Compliance** | CAN-SPAM compliant, unsubscribe link in every email |

---

## Acceptance Criteria

- [ ] All 9 emails drafted with subject line A/B variants
- [ ] Segmentation logic configured in email platform
- [ ] Pre-launch welcome email fires immediately on signup
- [ ] Scheduled emails set for correct dates relative to drop
- [ ] Post-purchase automation configured and tested
- [ ] All links have correct UTM parameters
- [ ] Mobile rendering tested on iOS and Android
- [ ] Unsubscribe works correctly across all segments
