---
title: Setting Up Ticket Types
nextjs:
  metadata:
    title: Setting Up Ticket Types
    description: Create and configure ticket types for your GatherHub events with pricing, capacity, and availability settings.
---

Ticket types define how participants register for your event. Create multiple ticket types to offer different registration options, pricing tiers, and access levels. {% .lead %}

---

## Understanding Ticket Types

Each event needs at least one ticket type. Ticket types can represent:

- **Pricing tiers** - VIP, Standard, Economy
- **Participant categories** - Adult, Student, Senior
- **Access levels** - Full Access, Single Day, Workshop Only
- **Registration types** - Individual, Group, Corporate

---

## Creating a Ticket Type

### Add a Ticket Type

1. Go to your event dashboard
2. Click **Ticket Types** in the sidebar
3. Click **Add Ticket Type**

{% figure src="/images/guides/08-organiser-add-free-ticket.jpg" alt="Add ticket type form with name, price, early bird price, description and capacity" caption="Adding a free Walk-in / Guest ticket (price 0)." /%}

{% figure src="/images/guides/09-organiser-ticket-types.jpg" alt="Ticket Types list with Early Bird, Standard, VIP and a free Walk-in / Guest ticket" caption="Ticket types. Free tickets show a FREE badge." /%}

### Ticket Settings

| Setting | Required | Description |
|---------|----------|-------------|
| Ticket Name | Yes | Ticket name (e.g., "General Admission") |
| Price (RM) | Yes | Cost per ticket. Set to 0 for a free ticket |
| Early Bird Price (RM) | No | Discounted price used until the event's early bird deadline |
| Description | No | What's included with this ticket |
| Capacity | No | Total tickets available. Leave blank for unlimited |

Click **Create Ticket Type** to save.

### Early Bird Pricing

Early bird is set per event, not per ticket:

1. Go to **Details** and turn on **Enable Early Bird Pricing**
2. Set the **Early Bird Deadline**
3. Give each ticket type an **Early Bird Price (RM)**

Until the deadline, tickets with an early bird price sell at that price. After it, the regular price applies.

---

## Ticket Configuration Options

### Pricing

| Option | Description |
|--------|-------------|
| Free (RM 0) | No payment required. Shows a **FREE** badge |
| Fixed Price | Set price per ticket. Paid tickets must be at least RM 10.00 |

### Quantity and Limits

| Setting | Description |
|---------|-------------|
| Capacity | Maximum tickets available for this type |
| Per order | A buyer can get 1 to 20 tickets in one order |

When a ticket type's capacity is used up, it shows as **Sold Out** on the event page and can't be selected.

### Per-Ticket Settings

| Setting | Description |
|---------|-------------|
| Require organiser approval | Registrations land as pending until you approve them under **Registration Approvals** |
| Eligibility | Buyers must pass one or more verification sources before they can buy this tier. Set **Max per verified person**, whether any or every source must pass, and when to check (**At purchase**, **At check-in**, or **At purchase and check-in**) |
| Allow transfers | Turn off to name-lock the tier so holders can't transfer their ticket |

{% callout title="Verification sources" %}
Eligibility needs at least one verification source. If you have none, the form links you to add one first.
{% /callout %}

---

## Ticket Type Examples

### Free Workshop

| Setting | Value |
|---------|-------|
| Ticket Name | Free Registration |
| Price (RM) | 0 |
| Capacity | 50 |

### Conference with Tiers

**Standard with early bird**
| Setting | Value |
|---------|-------|
| Ticket Name | Standard |
| Price (RM) | 200.00 |
| Early Bird Price (RM) | 150.00 |
| Capacity | 200 |

Turn on **Enable Early Bird Pricing** in **Details** and set the deadline to 2 weeks before the event.

**VIP**
| Setting | Value |
|---------|-------|
| Ticket Name | VIP Access |
| Price (RM) | 500.00 |
| Capacity | 20 |
| Description | Includes front row seating and meet & greet |

### Training with Categories

| Ticket Type | Price | Description |
|-------------|-------|-------------|
| Professional | RM 300 | For working professionals |
| Student | RM 150 | Valid student ID required (use **Eligibility** or **Require organiser approval** to screen) |
| Corporate | RM 250 | For company-sponsored staff |

---

## Managing Ticket Types

### Edit Ticket Types

1. Go to **Ticket Types**
2. Click **Edit** on the ticket type
3. Modify settings and click **Update Ticket Type**

{% callout type="warning" title="Editing after sales" %}
Price changes only affect future purchases. Tickets already sold keep the price the buyer paid.
{% /callout %}

### Delete Ticket Types

Click **Delete** and confirm. You can't delete a ticket type that has sold tickets.

---

## Ticket List

Each ticket type in the list shows:

| Item | Meaning |
|------|---------|
| FREE badge or price | Free ticket, or the regular price in RM |
| Early Bird | The early bird price, when set |
| Capacity | Total and how many are still available, or **Unlimited** |
| Sold | Tickets issued so far |

---

## Collecting Attendee Information

Extra questions are set up under **Custom Fields**, not on the ticket type. Each field has a **Scope**:

| Scope | Collected |
|-------|-----------|
| Order-level | Once per order |
| Ticket-level | For each ticket |

Custom fields apply to every ticket type in the event. See [Custom Fields](/docs/custom-fields).

---

## Capacity Management

### Overall vs Ticket Capacity

| Level | Where | Description |
|-------|-------|-------------|
| Event capacity | **Details** > **Max Participants** | Shown in your capacity stats and dashboards |
| Ticket capacity | **Ticket Types** > **Capacity** | Stops sales for that ticket type when reached |

Sales are stopped by ticket capacity. Keep the ticket capacities within your venue's limit.

### Example

Venue limit: 100

| Ticket Type | Capacity | Notes |
|-------------|----------|-------|
| VIP | 20 | Limited to 20 |
| Standard | 80 | Together with VIP, adds up to 100 |

---

## Best Practices

### Naming

- Use clear, descriptive names
- Include what's different about each tier
- Avoid confusing similar names

### Pricing

- Research comparable events in your market
- Consider your costs and value provided
- Use psychological pricing (RM 99 vs RM 100)

### Capacity

- Don't oversell beyond venue capacity
- Reserve some tickets for late registrations
- Consider no-show rates for free events

### Timing

- Open sales early to build momentum
- Create urgency with early bird deadlines
- Close sales with enough time to prepare

---

## Troubleshooting

### Ticket not appearing

- Make sure the event is published
- Check that the ticket type isn't **Sold Out**
- Check whether the event has already ended

### Can't delete ticket

- Ticket types with sold tickets can't be deleted
- Create a new ticket type instead
- Contact support for special cases

### Oversold tickets

- Ticket capacity is enforced at checkout
- Each ticket type has its own capacity
- Review each ticket type's **Capacity**

---

## Next Steps

- [Set up pricing strategies](/docs/pricing-strategies) for timed pricing
- [Create discount codes](/docs/discount-codes) for promotions
- [Configure registration forms](/docs/registration-forms) for your event
