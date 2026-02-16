# Theri Build Spec: Landing Page
**Agent**: Therizinosaurus (Theri) | **Phase**: 3 — Build Spec | **Date**: 2026-02-11

---

## Overview

Shopify product collection page for the MQ x Tie One tribute drop. This page serves as the primary digital storefront, email capture mechanism, and storytelling vehicle. Must be mobile-responsive, SEO-optimized, and capable of handling the drop-day traffic pattern (spike on Saturday 10am PT).

**Platform**: Shopify (existing Rossi Mission store)
**URL**: rossimission.com/collections/mq-x-tie-one (or /drops/mq-tie-one)

---

## 1. Page Architecture

### Above the Fold (Hero Section)

| Element | Spec |
|---------|------|
| **Hero image** | Full-width. MQ creating Tie One tribute art in studio. Moody, authentic. NOT a product shot. Aspect: 16:9 desktop, 4:5 mobile. |
| **Headline** | "MQ x Tie One: 25 Years of Tribute" |
| **Subheadline** | "A limited collection by NYC graffiti legend MQ, honoring his friend Jonathan 'Tie One' Lim (1979-1998)" |
| **CTA Button** | Pre-drop: "Get Notified When It Drops" (email capture). Drop day: "Shop the Collection" |
| **Countdown** | Pre-drop: countdown timer to Saturday 10am PT. Post-drop: "Available for [X] more days" |

### Section 2: The Story (Scrollable)

| Element | Spec |
|---------|------|
| **Layout** | Two-column on desktop (text left, image right). Single column mobile. |
| **Heading** | "The Story" |
| **Text** | 150-200 words. The 5-minute narrative condensed. Lead with MQ's 25-year tribute practice. Contextualize Tie One's life and death. End with "This collection brings that tribute into a gallery for the first time." |
| **Image** | MQ's Tie One sticker art (historical, showing the 25-year practice) |
| **Link** | "Read the full story →" (links to blog post with complete narrative) |

### Section 3: Artist Bios (Side-by-Side)

| Element | Spec |
|---------|------|
| **Layout** | Two cards side-by-side (desktop), stacked (mobile) |
| **Card 1: MQ** | Photo (MQ portrait or at work). "MQ (MKUE / MQUE)" / "NYC, early 1980s–present" / "DMS crew. Martinez Gallery. Living Proof New York. 40+ years in graffiti." / 3-4 sentence bio. |
| **Card 2: Tie One** | Photo (if available and family-approved) or artwork in his style. "Tie One (Jonathan See Lim)" / "1979-1998, San Francisco" / "Reds, RTC, THR, BBB. Bay Area legend." / 3-4 sentence tribute. |

### Section 4: Product Grid

| Element | Spec |
|---------|------|
| **Layout** | Standard Shopify collection grid. 3 columns desktop, 2 mobile. |
| **Sorting** | Default: "Featured" (curated order: hero pieces first, then prints, then apparel, then accessories) |
| **Product cards** | Image + title + price + "SOLD OUT" badge when applicable |
| **Filters** | Category: Art / Apparel / Accessories. Price: Under $25, $25-$100, $100+. |
| **Edition info** | Show "Edition of 25" or "Limited to 100" on each card |

### Section 5: Exhibition Info

| Element | Spec |
|---------|------|
| **Heading** | "Visit the Exhibition" |
| **Details** | Address: 791 Valencia Street, San Francisco. Opening: [Date], 6pm-10pm. Exhibition runs: [Date range]. Map embed (Google Maps). |
| **CTA** | "RSVP for Opening Night" (Eventbrite or email) |

### Section 6: Email Capture (Footer)

| Element | Spec |
|---------|------|
| **Heading** | "Stay Connected" |
| **Text** | "Get updates on future drops, events, and artist stories from Rossi Mission." |
| **Form** | Email input + Submit button. Shopify or Klaviyo integration. |

---

## 2. SEO Spec

| Element | Value |
|---------|-------|
| **Title tag** | "MQ x Tie One: 25 Years of Tribute | Rossi Mission SF" |
| **Meta description** | "Limited tribute collection by NYC graffiti legend MQ honoring Tie One (1979-1998). Original art, prints, apparel. Available at Rossi Mission, 791 Valencia St, San Francisco." |
| **H1** | "MQ x Tie One: 25 Years of Tribute" |
| **H2s** | "The Story" / "The Artists" / "The Collection" / "Visit the Exhibition" |
| **Alt text** | Descriptive alt text on all images (e.g., "MQ creating Tie One tribute sticker art in studio") |
| **Schema** | Product schema on all product pages. Event schema on exhibition info. |
| **Canonical** | Self-referencing canonical URL |

---

## 3. Mobile Responsiveness Requirements

| Breakpoint | Layout |
|-----------|--------|
| Desktop (1024px+) | Full-width hero, 2-column story, 3-column product grid |
| Tablet (768-1023px) | Full-width hero, 2-column story, 2-column product grid |
| Mobile (<768px) | Full-width hero (4:5 crop), single-column story, 2-column product grid |

- All text must be readable without zooming
- CTA buttons must be thumb-accessible (minimum 44x44px touch target)
- Product images must lazy-load for performance
- Countdown timer must be visible without scrolling on mobile

---

## 4. Email Capture Mechanics

### Pre-Drop (T-8 to T-1)
- **Trigger**: Landing page visit
- **Popup**: Timed popup (5 seconds) with email capture. "Be the first to know when MQ x Tie One drops."
- **Inline form**: Bottom of hero section AND footer
- **Thank you**: Redirect to confirmation page with social share buttons
- **Data**: Name, email → Shopify/Klaviyo list tagged "mq-tie-one-prelaunch"

### Drop Day (T+1)
- **Popup**: Disabled (don't interrupt buyers)
- **Inline form**: Moved below product grid. "Sold out? Join the waitlist."
- **Waitlist**: Per-product waitlist via Shopify app (Back in Stock or similar)

---

## 5. Content Brief

### Hero Image Requirements
- MQ in studio or creating art (NOT a product flat-lay)
- Moody lighting, authentic setting
- Show MQ's hands, paint, stickers — the creative process
- Resolution: minimum 2400x1350px (16:9) and 1200x1500px (4:5 mobile crop)

### Product Photography
- **Art pieces**: White background, clean, with visible texture/detail
- **Apparel**: Flat-lay on neutral surface AND model shots if possible
- **Stickers/pins**: Grouped lifestyle shots (on laptop, notebook, etc.)
- **Consistency**: Same lighting and background across all product shots
- **Detail shots**: Close-ups of signatures, edition numbers, print details

### Blog Post: Full Story
- 800-1,200 words covering:
  - Who is MQ (credentials, history, crews)
  - Who was Tie One (life, art, death, legacy)
  - The 25-year tribute practice (stickers, global reach)
  - Why now, why Rossi Mission, why San Francisco
  - How to participate (products, exhibition, community)
- Include: 3-5 images, source links, pull quotes from MQ

---

## 6. Technical Requirements

| Requirement | Spec |
|------------|------|
| **Page load** | <3 seconds on 4G mobile |
| **Image optimization** | WebP format, lazy loading, responsive srcset |
| **Countdown timer** | JavaScript with timezone awareness (PT). Switches to "Shop Now" at drop time. |
| **Inventory display** | Real-time. "X left" when <10 remaining. "SOLD OUT" when 0. |
| **Cart behavior** | Standard Shopify cart. No reservation/hold system for first drop (keep simple). |
| **Analytics** | Google Analytics 4 + Shopify analytics. UTM tracking on all inbound links. |
| **Email integration** | Klaviyo or Shopify Email for capture forms |

---

## Acceptance Criteria

- [ ] Hero section loads with image, headline, CTA on desktop and mobile
- [ ] Email capture form works and routes to correct list
- [ ] Countdown timer displays correctly across timezones
- [ ] All 12 products display with correct prices, images, edition info
- [ ] "SOLD OUT" badges appear when inventory reaches 0
- [ ] Page loads in <3 seconds on mobile (test with Lighthouse)
- [ ] SEO meta tags are correct (verify with browser dev tools)
- [ ] Exhibition info displays with working map embed
- [ ] Blog post is linked and accessible
- [ ] Analytics tracking fires on page load and purchase events
