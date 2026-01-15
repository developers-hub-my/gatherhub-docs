---
title: Pricing Strategies
nextjs:
  metadata:
    title: Pricing Strategies
    description: Implement effective pricing strategies for your GatherHub events including early bird, tiered, and dynamic pricing.
---

Use strategic pricing to maximize registrations and revenue. GatherHub supports multiple pricing models to suit different event types. {% .lead %}

---

## Pricing Models

### Fixed Pricing

Single price throughout the sales period.

**Best for:**
- Simple events
- Workshops with consistent value
- Events with short sales windows

### Early Bird Pricing

Lower prices for early registrations that increase over time.

**Best for:**
- Building early momentum
- Rewarding committed attendees
- Cash flow management

### Tiered Pricing

Different prices for different participant categories.

**Best for:**
- Professional conferences
- Educational events
- Community-inclusive events

---

## Early Bird Pricing

### Setting Up Early Bird

Create multiple ticket types with different sales windows:

**Phase 1: Super Early Bird**
| Setting | Value |
|---------|-------|
| Name | Super Early Bird |
| Price | RM 99 |
| Sales Start | Immediately |
| Sales End | 8 weeks before event |
| Quantity | 50 |

**Phase 2: Early Bird**
| Setting | Value |
|---------|-------|
| Name | Early Bird |
| Price | RM 149 |
| Sales Start | 8 weeks before event |
| Sales End | 4 weeks before event |
| Quantity | 100 |

**Phase 3: Standard**
| Setting | Value |
|---------|-------|
| Name | Standard |
| Price | RM 199 |
| Sales Start | 4 weeks before event |
| Sales End | Event start |
| Quantity | 150 |

{% callout title="Communicating urgency" %}
Display remaining early bird tickets and countdown timers on your event page to create urgency.
{% /callout %}

### Early Bird Best Practices

- Set meaningful price differences (20-30% savings)
- Limit early bird quantities to create scarcity
- Announce price increases in advance
- Send reminder emails before deadlines

---

## Tiered Pricing

### Category-Based Tiers

Create different prices for participant types:

| Category | Price | Verification |
|----------|-------|--------------|
| Professional | RM 300 | None required |
| Government | RM 250 | Agency email verification |
| Student | RM 150 | Student ID upload |
| Senior (60+) | RM 150 | IC verification |

### Access-Based Tiers

Price based on what's included:

| Tier | Price | Includes |
|------|-------|----------|
| Basic | RM 100 | Main sessions only |
| Standard | RM 200 | All sessions + materials |
| Premium | RM 350 | All sessions + materials + certificate |
| VIP | RM 500 | Everything + meet & greet + preferred seating |

### Setting Up Tiered Tickets

1. Create separate ticket types for each tier
2. Clearly describe what each tier includes
3. Consider requiring verification for discounted tiers

---

## Group Pricing

### Group Discounts

Encourage organizations to send multiple attendees:

| Group Size | Price per Person | Savings |
|------------|------------------|---------|
| 1-2 | RM 200 | - |
| 3-5 | RM 180 | 10% |
| 6-10 | RM 160 | 20% |
| 10+ | RM 140 | 30% |

### Implementing Group Pricing

**Option 1: Separate Ticket Types**

Create ticket types for each group tier:
- "Individual Registration" - RM 200
- "Small Group (3-5)" - RM 180 each
- "Large Group (6+)" - RM 160 each

**Option 2: Discount Codes**

Create discount codes for group organizers:
- GROUP5 - 10% off for 5+ tickets
- GROUP10 - 20% off for 10+ tickets

See [Discount Codes](/docs/discount-codes) for setup.

---

## Free Events

### When to Use Free Pricing

- Community outreach events
- Product launches
- Networking events
- Internal company events

### Managing Free Event Registrations

{% callout type="warning" title="No-show rates" %}
Free events typically have 30-50% no-show rates. Overbook accordingly or use waitlists.
{% /callout %}

**Strategies to reduce no-shows:**

1. **Require confirmation** - Send reminder emails with confirmation requests
2. **Waitlist management** - Fill cancelled spots with waitlisted participants
3. **Nominal fee** - Consider a small fee (RM 10) that's refunded on attendance
4. **Deposit system** - Collect deposit, refund after check-in

---

## Dynamic Pricing

### Last-Minute Pricing

Adjust prices close to the event:

**Option 1: Increase for scarcity**
- Raise prices as event approaches
- Creates urgency to register early

**Option 2: Discount to fill seats**
- Lower prices to fill remaining capacity
- Better to have attendees than empty seats

### Implementing Dynamic Pricing

1. Monitor registration pace
2. Create new ticket types with adjusted prices
3. Hide old ticket types
4. Communicate price changes

---

## Pricing Psychology

### Price Anchoring

Show the highest-priced option first to make other options seem more affordable.

**Display order:**
1. VIP - RM 500 (anchor)
2. Premium - RM 350
3. Standard - RM 200 (most popular)
4. Basic - RM 100

### Charm Pricing

Use prices ending in 9 or 7:
- RM 199 instead of RM 200
- RM 97 instead of RM 100

### Value Comparison

Show what's included at each price point:

| Feature | Basic | Standard | Premium |
|---------|-------|----------|---------|
| Main sessions | Yes | Yes | Yes |
| Workshop access | No | Yes | Yes |
| Materials | No | Yes | Yes |
| Certificate | No | No | Yes |
| Networking dinner | No | No | Yes |
| **Price** | RM 100 | RM 200 | RM 350 |

---

## Revenue Optimization

### Calculate Break-Even

```
Break-even = Fixed Costs / (Price - Variable Cost per Attendee)
```

**Example:**
- Venue cost: RM 5,000
- F&B per person: RM 50
- Ticket price: RM 200
- Variable cost: RM 50
- Break-even: 5,000 / (200 - 50) = 34 attendees

### Maximize Revenue

| Strategy | When to Use |
|----------|-------------|
| Higher price, lower volume | Premium/exclusive events |
| Lower price, higher volume | Community building |
| Mixed tiers | Capture different market segments |

---

## Pricing Examples

### Corporate Training (1 day)

| Tier | Price | Target |
|------|-------|--------|
| Individual | RM 500 | Self-funded professionals |
| Corporate | RM 450 | Company-sponsored |
| Group (5+) | RM 400 | Multiple from same company |

### Tech Conference (2 days)

| Phase | Dates | Price |
|-------|-------|-------|
| Super Early Bird | 3 months out | RM 199 |
| Early Bird | 2 months out | RM 299 |
| Regular | 1 month out | RM 399 |
| Door | Event day | RM 499 |

### Community Workshop (half day)

| Category | Price |
|----------|-------|
| General Public | RM 50 |
| Students | RM 25 |
| Members | Free |

---

## Monitoring and Adjusting

### Track Key Metrics

| Metric | What It Tells You |
|--------|-------------------|
| Registration pace | Is pricing working? |
| Tier distribution | Which tiers are popular? |
| Discount code usage | Are promotions effective? |
| Abandonment rate | Is price a barrier? |

### When to Adjust

- Slow registrations → Consider discounts
- Selling out early → Price may be too low
- Low tier diversity → Adjust tier values
- High discount usage → Evaluate base pricing

---

## Next Steps

- [Create discount codes](/docs/discount-codes) for promotions
- [Set up payment methods](/docs/payment-setup) to collect payments
- [Configure waitlists](/docs/waitlist-management) for sold-out events
