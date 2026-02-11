# Theri Build Spec: Automation Opportunities
**Agent**: Therizinosaurus (Theri) | **Phase**: 3 — Build Spec | **Date**: 2026-02-11

---

## Overview

Identifies where AI agents, automation tools, and scripts can assist with the MQ x Tie One drop execution. Each opportunity is rated for feasibility, impact, and recommended tools. These are NOT requirements for the first drop — they are opportunities that can save time and be built incrementally.

---

## 1. Content Generation

### Social Media Captions
| Aspect | Detail |
|--------|--------|
| **What** | Generate Instagram/TikTok captions for the 40-post content calendar |
| **Feasibility** | HIGH — Claude or similar LLM can draft all captions from the narrative arc and content calendar spec |
| **Impact** | MEDIUM — saves 4-6 hours of copywriting. Still needs human review for tone. |
| **Tool** | Claude (via Palette agents or direct) |
| **When** | T-6 (batch generate all captions for review) |

### Email Copy
| Aspect | Detail |
|--------|--------|
| **What** | Draft all 9 emails from the email sequence spec |
| **Feasibility** | HIGH — spec provides subject lines, body structure, CTAs |
| **Impact** | HIGH — saves 8-10 hours. Email copy is the highest-leverage content. |
| **Tool** | Claude (via Palette agents or direct) |
| **When** | T-5 (batch draft all emails for review) |

### Product Descriptions
| Aspect | Detail |
|--------|--------|
| **What** | Write Shopify product descriptions for all 12 products |
| **Feasibility** | HIGH — product details + narrative context = structured task |
| **Impact** | MEDIUM — saves 2-3 hours. Product descriptions must be accurate. |
| **Tool** | Claude |
| **When** | T-3 (after product photography is done) |

### Blog Post / Long-Form Story
| Aspect | Detail |
|--------|--------|
| **What** | Write the 800-1,200 word blog post for the landing page |
| **Feasibility** | HIGH — research documents provide all source material |
| **Impact** | HIGH — the story is the product. This is the most important piece of content. |
| **Tool** | Claude, with human editing for voice/tone |
| **When** | T-4 (before announcement) |

### Press Pitches
| Aspect | Detail |
|--------|--------|
| **What** | Customize press pitch templates for each outlet (art press, local, streetwear, Asian-American) |
| **Feasibility** | HIGH — templates in rex-narrative-arc.md, customize per outlet |
| **Impact** | HIGH — press coverage is the #1 awareness driver for segments 2 and 4 |
| **Tool** | Claude |
| **When** | T-4 to T-2 (staggered per channel sequencing) |

---

## 2. Outreach Personalization

### Press Outreach
| Aspect | Detail |
|--------|--------|
| **What** | Personalize press pitch emails for specific journalists/editors |
| **Feasibility** | MEDIUM — requires knowing who covers graffiti/street art at each outlet |
| **Impact** | HIGH — personalized pitches get 2-3x higher response rates |
| **Tool** | Claude for personalization + manual journalist research |
| **Research needed** | Identify: 3 Juxtapoz writers, 2 Hyperallergic writers, 2 SFGate reporters, 1 Hypebeast writer, 2 Asian-American media writers |
| **When** | T-5 (research), T-4 to T-2 (send) |

### Influencer / Community Outreach
| Aspect | Detail |
|--------|--------|
| **What** | Draft DMs to graffiti community accounts, sticker artists, MQ's network |
| **Feasibility** | HIGH — template DMs with personalization |
| **Impact** | MEDIUM — community seeding amplifies organic reach |
| **Tool** | Claude for drafting, manual sending |
| **When** | T-4 to T-2 |

---

## 3. Customer Service / FAQ

### FAQ Bot / Knowledge Base
| Aspect | Detail |
|--------|--------|
| **What** | Create FAQ page and/or chatbot for common drop questions |
| **Feasibility** | HIGH — predictable questions for a drop |
| **Impact** | MEDIUM — reduces manual response time during drop |
| **Tool** | Shopify FAQ page (static) or Tidio/Gorgias chatbot |

### Predicted FAQs
| Question | Answer |
|----------|--------|
| When does the drop go live? | [Date], 10am PT online. Gallery opening [Date], 6pm. |
| Will items be restocked? | No. All items are limited edition and will not be restocked. |
| Can I buy in-store? | Yes, during the exhibition at 791 Valencia St, San Francisco. |
| Do you ship internationally? | Yes, international shipping is calculated at checkout. |
| What's the return policy? | All drop items are final sale. |
| Is this a real MQ collaboration? | Yes. MQ created all artwork for this collection. |
| Who was Tie One? | [Brief answer + link to blog post] |
| What percentage goes to [cause]? | [Answer based on Decision 6] |
| Can I pick up my order in-store? | Yes, local pickup is available at 791 Valencia Street. |

---

## 4. Analytics and Reporting

### Real-Time Drop Dashboard
| Aspect | Detail |
|--------|--------|
| **What** | Monitor drop performance in real-time on drop day |
| **Feasibility** | HIGH — Shopify provides live view of orders |
| **Impact** | HIGH — enables real-time decisions (social posts about sellouts, inventory alerts) |
| **Tool** | Shopify Analytics (native) + manual monitoring |
| **When** | T+1 (drop day) |

### Post-Drop Report
| Aspect | Detail |
|--------|--------|
| **What** | Generate comprehensive post-drop analysis |
| **Feasibility** | HIGH — export Shopify data + GA4 data, analyze with Claude |
| **Impact** | HIGH — informs future drops (what sold, what didn't, conversion rates, AOV, traffic sources) |
| **Tool** | Claude for analysis, Shopify/GA4 for data export |
| **When** | T+22 (after drop closes) |

### Metrics to Track
| Phase | Metrics |
|-------|---------|
| **Pre-drop** | Email signups, landing page visits, social engagement (likes, shares, saves), email open rates |
| **Drop day** | Orders per hour, conversion rate, AOV, sellout times per product, traffic sources, cart abandonment rate |
| **Post-drop** | Total revenue, total units, sellthrough %, email list growth, social follower growth, press mentions, waitlist signups |

---

## 5. Future Drop Automation (Post-First-Drop)

These are NOT needed for the first drop but should be built if the drop model is successful:

### Waitlist-to-Launch Pipeline
| Aspect | Detail |
|--------|--------|
| **What** | Automatically notify waitlist subscribers when next drop is announced |
| **Feasibility** | HIGH — Klaviyo segment + automation |
| **Impact** | HIGH for Drop 2 — built-in audience |

### Inventory Alert System
| Aspect | Detail |
|--------|--------|
| **What** | Auto-post on Instagram when items hit low stock thresholds |
| **Feasibility** | MEDIUM — requires Shopify Flow + social posting integration |
| **Impact** | HIGH — real-time scarcity drives conversions |

### Post-Purchase UGC Collection
| Aspect | Detail |
|--------|--------|
| **What** | Automated email asking buyers to share photos of their purchases |
| **Feasibility** | HIGH — Klaviyo post-purchase flow + branded hashtag |
| **Impact** | MEDIUM — user-generated content for future marketing |

### Artist Pipeline CRM
| Aspect | Detail |
|--------|--------|
| **What** | Track artist outreach, agreements, production timelines for future drops |
| **Feasibility** | MEDIUM — Airtable or Notion database |
| **Impact** | HIGH long-term — systematizes the drop model for repeat execution |

---

## 6. Summary: Priority Matrix

| Opportunity | Feasibility | Impact | Priority | When |
|------------|-------------|--------|----------|------|
| Email copy generation | HIGH | HIGH | **DO FIRST** | T-5 |
| Blog post / story writing | HIGH | HIGH | **DO FIRST** | T-4 |
| Press pitch customization | HIGH | HIGH | **DO FIRST** | T-4 |
| Social caption generation | HIGH | MEDIUM | **DO SECOND** | T-6 |
| Product descriptions | HIGH | MEDIUM | **DO SECOND** | T-3 |
| FAQ page creation | HIGH | MEDIUM | **DO SECOND** | T-2 |
| Press outreach personalization | MEDIUM | HIGH | **DO SECOND** | T-4 |
| Post-drop report | HIGH | HIGH | **DO AFTER** | T+22 |
| Real-time dashboard monitoring | HIGH | HIGH | **DO ON DROP DAY** | T+1 |
| Waitlist pipeline (Drop 2) | HIGH | HIGH | **FUTURE** | Post-drop |
| Inventory alerts (auto-social) | MEDIUM | HIGH | **FUTURE** | Post-drop |
| UGC collection | HIGH | MEDIUM | **FUTURE** | Post-drop |
| Artist pipeline CRM | MEDIUM | HIGH | **FUTURE** | Post-drop |

---

## Acceptance Criteria

- [ ] All automation opportunities documented with feasibility and impact ratings
- [ ] Priority matrix provides clear execution sequence
- [ ] All recommendations use existing tools (no custom development)
- [ ] FAQ answers drafted and ready for implementation
- [ ] Post-drop metrics defined for success measurement
- [ ] Future automation opportunities captured for Drop 2 planning
