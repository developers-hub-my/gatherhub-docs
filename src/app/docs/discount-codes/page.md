---
title: Discount Codes
nextjs:
  metadata:
    title: Discount Codes
    description: Create and manage promotional discount codes for your GatherHub events.
---

Create promotional codes to offer discounts, track marketing campaigns, and reward specific groups of participants. {% .lead %}

---

## Understanding Discount Codes

Discount codes (also called promo codes or coupon codes) allow participants to receive a reduced price during registration. Use them for:

- Marketing promotions
- Partner referrals
- Group discounts
- VIP access
- Loyalty rewards

---

## Creating a Discount Code

### Add a Discount Code

1. Go to your event dashboard
2. Click **Tickets** in the sidebar
3. Select **Discount Codes**
4. Click **Add Discount Code**

### Basic Settings

| Setting | Description |
|---------|-------------|
| Code | The text participants enter (e.g., EARLY20) |
| Discount Type | Percentage or fixed amount |
| Discount Value | Amount off (e.g., 20% or RM 50) |

### Usage Limits

| Setting | Description |
|---------|-------------|
| Total Uses | Maximum times the code can be used |
| Uses per Customer | Maximum times one person can use it |
| Minimum Order | Minimum purchase amount required |

### Validity Period

| Setting | Description |
|---------|-------------|
| Valid From | When the code becomes active |
| Valid Until | When the code expires |

---

## Discount Types

### Percentage Discount

Reduces the price by a percentage.

| Setting | Example |
|---------|---------|
| Code | SAVE20 |
| Type | Percentage |
| Value | 20% |
| Result | RM 200 ticket → RM 160 |

### Fixed Amount Discount

Reduces the price by a specific amount.

| Setting | Example |
|---------|---------|
| Code | SAVE50 |
| Type | Fixed Amount |
| Value | RM 50 |
| Result | RM 200 ticket → RM 150 |

### Free Tickets

Give away free tickets with 100% discount.

| Setting | Example |
|---------|---------|
| Code | SPEAKER |
| Type | Percentage |
| Value | 100% |
| Result | Free registration |

---

## Restricting Discount Codes

### Ticket Type Restrictions

Apply codes to specific ticket types only:

1. Edit the discount code
2. Under "Applies To", select specific ticket types
3. Code won't work on other ticket types

**Example:**
- STUDENT20 → Only applies to "Student" ticket type
- VIP50 → Only applies to "VIP Access" ticket type

### Quantity Requirements

Set minimum or maximum tickets:

| Restriction | Use Case |
|-------------|----------|
| Minimum 3 tickets | Group discount |
| Maximum 1 ticket | One-time use promo |
| Minimum RM 500 order | High-value discount |

---

## Discount Code Examples

### Early Bird Extension

For participants who missed early bird pricing:

| Setting | Value |
|---------|-------|
| Code | EARLYBIRD |
| Type | Fixed Amount |
| Value | RM 50 |
| Valid Until | 1 week after early bird ends |
| Total Uses | 20 |

### Partner Promotion

For participants from a partner organization:

| Setting | Value |
|---------|-------|
| Code | PARTNER2024 |
| Type | Percentage |
| Value | 15% |
| Total Uses | 100 |
| Applies To | All ticket types |

### Speaker/VIP Complimentary

For invited speakers or VIPs:

| Setting | Value |
|---------|-------|
| Code | SPEAKER-JOHN (unique per person) |
| Type | Percentage |
| Value | 100% |
| Total Uses | 1 |
| Uses per Customer | 1 |

### Group Discount

For organizations sending multiple attendees:

| Setting | Value |
|---------|-------|
| Code | GROUP10 |
| Type | Percentage |
| Value | 10% |
| Minimum Order | 5 tickets |

### Flash Sale

Limited-time promotion:

| Setting | Value |
|---------|-------|
| Code | FLASH |
| Type | Percentage |
| Value | 30% |
| Valid From | Monday 9 AM |
| Valid Until | Monday 6 PM |
| Total Uses | 50 |

---

## Managing Discount Codes

### View Code Performance

Monitor how codes are being used:

| Metric | Description |
|--------|-------------|
| Times Used | Number of successful redemptions |
| Revenue Impact | Total discount amount given |
| Remaining Uses | Uses left before limit |

### Edit Codes

Modify code settings:

1. Go to **Discount Codes**
2. Click on the code to edit
3. Change settings and save

{% callout type="warning" title="Editing active codes" %}
Changes apply to future uses only. Past discounts are not affected.
{% /callout %}

### Deactivate Codes

Stop a code from being used:

1. Edit the discount code
2. Set "Valid Until" to a past date
3. Or set "Total Uses" to the current usage count

### Delete Codes

Remove unused codes:

1. Select the code
2. Click Delete
3. Confirm deletion

{% callout type="note" title="Deleting used codes" %}
You can delete codes that have been used. Historical discount data is preserved in order records.
{% /callout %}

---

## Code Naming Best Practices

### Make Codes Memorable

- Use short, easy-to-type codes
- Avoid confusing characters (0/O, 1/l)
- Use relevant words (STUDENT, EARLY, VIP)

### Include Context

| Purpose | Example Codes |
|---------|---------------|
| Time-based | EARLY2024, JAN50 |
| Partner | ACME20, PARTNER15 |
| Campaign | LAUNCH, WEBINAR |
| Category | STUDENT, MEMBER |

### Consider Security

- Avoid easily guessable codes for valuable discounts
- Use unique codes for VIP/speaker comps
- Track usage to detect sharing

---

## Discount Code Strategies

### Tiered Discounts

Offer different discounts for different actions:

| Action | Code | Discount |
|--------|------|----------|
| Newsletter signup | NEWS10 | 10% |
| Social media share | SHARE15 | 15% |
| Referral | REFER20 | 20% |

### Limited Availability

Create urgency with limited codes by advertising messages like: "First 50 registrations with code EARLY get 30% off!"

### Partner Revenue Sharing

Track partner referrals:

| Partner | Code | Their Commission |
|---------|------|------------------|
| Tech Blog | TECHBLOG | 15% of sales |
| Industry Assoc | ASSOC | 10% of sales |

---

## Participant Experience

### How Participants Apply Codes

1. Select ticket type and quantity
2. Enter discount code in the promo field
3. Click "Apply"
4. See updated price with discount

### What Participants See

- Original price with strikethrough
- Discount amount
- Final price after discount

### Error Messages

| Message | Cause |
|---------|-------|
| "Invalid code" | Code doesn't exist or expired |
| "Code expired" | Past validity period |
| "Usage limit reached" | Total uses exhausted |
| "Already used" | Customer used their limit |
| "Minimum not met" | Order below minimum requirement |
| "Not applicable" | Code doesn't apply to selected tickets |

---

## Reporting

### Discount Code Report

Export discount usage data:

1. Go to **Reports**
2. Select **Discount Codes**
3. Choose date range
4. Export to CSV/Excel

**Report includes:**
- Code used
- Order details
- Discount amount
- Redemption date

### Revenue Impact Analysis

Calculate the impact of discounts:

| Metric | Calculation |
|--------|-------------|
| Total Discounts Given | Sum of all discount amounts |
| Revenue Without Discounts | Total if no codes used |
| Discount Rate | Discounts / Revenue Without |
| Orders Using Codes | Count of orders with discounts |

---

## Best Practices

### Setting Discounts

- Keep discounts meaningful (10% minimum)
- Don't devalue your event with excessive discounts
- Balance acquisition cost vs lifetime value

### Promoting Codes

- Share codes through appropriate channels
- Track which channels drive registrations
- Create channel-specific codes for tracking

### Monitoring Usage

- Check for unusual usage patterns
- Monitor for code sharing/leaking
- Adjust limits if codes are overused

---

## Next Steps

- [Set up pricing strategies](/docs/pricing-strategies) with discount integration
- [Configure waitlist](/docs/waitlist-management) for sold-out events
- [Track campaign performance](/docs/reports-overview) with discount data
