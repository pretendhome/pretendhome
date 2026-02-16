# Theri Build Spec: Shopify Flows
**Agent**: Therizinosaurus (Theri) | **Phase**: 3 — Build Spec | **Date**: 2026-02-11

---

## Overview

All e-commerce infrastructure for the MQ x Tie One drop, built entirely with Shopify native tools and commonly available apps. No custom development required.

---

## 1. Collection Setup

### Collection: MQ x Tie One
| Setting | Value |
|---------|-------|
| **Collection type** | Manual |
| **Title** | MQ x Tie One: 25 Years of Tribute |
| **URL handle** | /collections/mq-x-tie-one |
| **Description** | SEO-optimized description (see landing page spec) |
| **Image** | Hero image from landing page spec |
| **Sort order** | Manual (curated: hero pieces → prints → apparel → accessories) |

### Product Tags (For Filtering)
| Tag | Products |
|-----|----------|
| `mq-tie-one` | All 12 products |
| `art-original` | Original works (3 products) |
| `art-print` | Limited + open prints (2 products) |
| `apparel` | Tees, hoodie, hat (4 products) |
| `accessories` | Stickers, pins, zine (3 products) |
| `limited-edition` | Limited prints + originals (5 products) |

---

## 2. Product Setup (Per Product)

### Template for Each Product

| Field | Spec |
|-------|------|
| **Title** | "[Product Name] — MQ x Tie One" |
| **Description** | 100-200 words. Product details + connection to tribute story. Include edition size, materials, dimensions. |
| **Images** | 3-5 per product. Primary + detail + lifestyle/context. |
| **Price** | As specified in revenue model |
| **Compare at price** | Leave blank (never show discounts) |
| **SKU** | MQT-[category]-[number] (e.g., MQT-TEE-A01) |
| **Inventory tracking** | ON. Exact quantity per edition size. |
| **Continue selling when out of stock** | OFF (critical — this enforces scarcity) |
| **Weight** | Accurate (for shipping calculation) |
| **Variants** | Apparel: S/M/L/XL/2XL. Art: single variant. |

### Product-Specific Setup

| # | Product | Variants | Inventory | Notes |
|---|---------|----------|-----------|-------|
| 1 | Sticker pack | None | 300 | Digital or free shipping eligible |
| 2 | Enamel pin | None | 200 | Ship in branded packaging |
| 3 | Zine | None | 200 | Ship flat or in rigid mailer |
| 4 | Graphic tee A | S/M/L/XL/2XL | 20 per size | Bella+Canvas 3001 or similar |
| 5 | Graphic tee B | S/M/L/XL/2XL | 20 per size | Same blank as tee A |
| 6 | Hoodie | S/M/L/XL/2XL | 15 per size | Independent Trading Co. or similar |
| 7 | Hat | One size | 100 | Adjustable snapback |
| 8 | Open print | None | 150 | Ship in tube or flat pack |
| 9 | Limited print | None | 25 | Ship flat in rigid mailer with certificate |
| 10 | Original 9x12 | None | 8 | Ship with insurance, signature required |
| 11 | Original 18x24 | None | 4 | Ship with insurance, signature required |
| 12 | Hero piece | None | 2 | Local pickup or premium shipping with insurance |

---

## 3. Inventory Management

### Pre-Drop
- All products set to **"Draft"** status until drop goes live
- Collection page shows "Coming Soon" state with email capture
- No product URLs accessible until publish

### Drop Launch (T+1, 10am PT)
- Scheduled publish: all products switch from Draft to Active simultaneously
- Use Shopify's scheduled publishing feature OR manual publish at exactly 10am PT
- If manual: designate one person responsible for publishing

### During Drop
- **Real-time inventory tracking**: Shopify native
- **"Low stock" indicator**: Show "Only X left" when inventory <10 (use Shopify theme setting or app)
- **Sold out behavior**: Product remains visible with "SOLD OUT" badge. Remove "Add to Cart" button. Add "Join Waitlist" button (via app).

### Post-Drop (T+21)
- All remaining products set back to Draft
- Collection page updated to "This drop has ended" message
- Email capture remains active for future drops

---

## 4. Waitlist System

### App Recommendation
- **Back in Stock** (Shopify app) or **Notify Me! Restock Alerts**
- Free tier is sufficient for first drop

### Configuration
| Setting | Value |
|---------|-------|
| **Trigger** | Product goes out of stock |
| **Display** | "Notify me when available" button replaces "Add to Cart" |
| **Email capture** | Customer enters email |
| **Notification** | DO NOT auto-notify (items won't restock). Use emails for future drop marketing. |
| **Data** | Export waitlist emails → add to "mq-tie-one-waitlist" segment for future drops |

---

## 5. Shipping Configuration

### Shipping Rates

| Category | Method | Rate | Carrier |
|----------|--------|------|---------|
| **Stickers, pins, zine** | USPS First Class | $4.99 flat | Shopify Shipping |
| **Apparel (tees, hoodie, hat)** | USPS Priority | $8.99 flat | Shopify Shipping |
| **Open prints** | USPS Priority (tube/flat) | $9.99 flat | Shopify Shipping |
| **Limited prints** | USPS Priority (rigid mailer) | $12.99 flat | Shopify Shipping |
| **Originals** | UPS/FedEx with insurance | Calculated at checkout | Shopify Shipping |
| **Hero pieces** | Local pickup OR premium shipping | Calculated / Free pickup | Manual |

### Free Shipping Threshold
- **$100+ orders**: Free standard shipping (USPS Priority)
- Encourages upselling from single sticker pack to tee + stickers

### Shipping Zones
- **Domestic (US)**: All rates above
- **International**: Calculated at checkout (Shopify Shipping rates)
- **Local pickup**: Available for all items. 791 Valencia Street, SF. Pickup during exhibition hours.

---

## 6. Abandoned Cart Recovery

### Shopify Native Abandoned Cart Email
| Setting | Value |
|---------|-------|
| **Timing** | 1 hour after abandonment |
| **Subject** | "Your MQ x Tie One items are still waiting" |
| **Body** | "You left something behind. These items are limited edition — they won't be restocked. Complete your order before they're gone." |
| **Include** | Cart items with images + "Complete Order" button |
| **Discount** | NO discount code (never discount a scarcity-based drop) |

### Second Abandoned Cart (via Klaviyo if available)
| Setting | Value |
|---------|-------|
| **Timing** | 24 hours after abandonment |
| **Subject** | "Still available — for now" |
| **Body** | Brief reminder + remaining inventory status |

---

## 7. Post-Purchase Automation

### Order Confirmation (Shopify Default + Customized)
| Element | Customization |
|---------|--------------|
| **Header** | Add "Thank you for supporting the MQ x Tie One tribute" |
| **Body** | Include 2-3 sentences about the tribute story |
| **Footer** | "Share your purchase: [social share links]" |

### Shipping Confirmation (Shopify Default)
Standard Shopify shipping notification with tracking.

### Review Request (Optional)
| Setting | Value |
|---------|-------|
| **Timing** | 14 days after delivery |
| **Platform** | Shopify Product Reviews or Judge.me |
| **Ask** | "How was your MQ x Tie One purchase?" |

---

## 8. Analytics Setup

### Shopify Analytics (Native)
- Monitor: Total sales, conversion rate, AOV, top products, traffic sources
- Set up: Sales by product report, filtered to MQ x Tie One collection

### Google Analytics 4
| Event | Configuration |
|-------|--------------|
| **page_view** | Auto-tracked |
| **view_item** | Product page views (Shopify GA4 integration) |
| **add_to_cart** | Cart additions |
| **begin_checkout** | Checkout starts |
| **purchase** | Completed orders |
| **sign_up** | Email captures (custom event) |

### UTM Tracking
| Source | UTM Parameters |
|--------|---------------|
| Email | utm_source=email&utm_medium=email&utm_campaign=mq-tie-one |
| Instagram | utm_source=instagram&utm_medium=social&utm_campaign=mq-tie-one |
| TikTok | utm_source=tiktok&utm_medium=social&utm_campaign=mq-tie-one |
| Press | utm_source=[outlet]&utm_medium=press&utm_campaign=mq-tie-one |
| Direct | (no UTM — organic/direct traffic) |

---

## 9. POS Setup (In-Store)

### Square / Shopify POS
| Requirement | Spec |
|------------|------|
| **Device** | iPad with Shopify POS app |
| **Payment** | Credit card (tap/chip) + Cash |
| **Inventory sync** | Real-time with online store (critical for drop day) |
| **Receipts** | Email receipts (capture customer email at POS) |
| **Tax** | California sales tax auto-calculated |

### Opening Night (T-0) POS Workflow
1. All products loaded into POS with correct prices and inventory
2. Inventory syncs with online store in real-time
3. If item sells out in-store, online store updates immediately
4. Cash option available (many graffiti community members prefer cash)
5. Email receipt captures customer email for post-purchase sequence

---

## Acceptance Criteria

- [ ] All 12 products created in Shopify with correct pricing, inventory, and variants
- [ ] Manual collection created with curated sort order
- [ ] Product tags applied for filtering
- [ ] Inventory tracking enabled, "continue selling when out of stock" OFF
- [ ] Scheduled publishing configured for drop time
- [ ] Shipping rates configured (flat rate + calculated for originals)
- [ ] Free shipping threshold set at $100
- [ ] Local pickup enabled for 791 Valencia
- [ ] Abandoned cart email customized (no discount)
- [ ] Waitlist app installed and configured on all products
- [ ] GA4 e-commerce tracking verified
- [ ] POS configured and tested with inventory sync
- [ ] All products in Draft status until drop day
