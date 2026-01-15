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
2. Click **Tickets** in the sidebar
3. Click **Add Ticket Type**

### Basic Settings

| Setting | Required | Description |
|---------|----------|-------------|
| Name | Yes | Ticket name (e.g., "General Admission") |
| Description | No | What's included with this ticket |
| Price | Yes | Cost per ticket (RM 0 for free) |
| Quantity | Yes | Total tickets available |

### Availability Settings

| Setting | Description |
|---------|-------------|
| Sales Start | When ticket sales begin |
| Sales End | When ticket sales close |
| Visibility | Show or hide on registration page |

---

## Ticket Configuration Options

### Pricing

| Option | Description |
|--------|-------------|
| Free (RM 0) | No payment required |
| Fixed Price | Set price per ticket |
| Variable Price | Allow buyers to choose amount (donations) |

### Quantity and Limits

| Setting | Description |
|---------|-------------|
| Total Quantity | Maximum tickets available for this type |
| Min per Order | Minimum tickets required per purchase |
| Max per Order | Maximum tickets allowed per purchase |

{% callout title="Group registrations" %}
Set min/max per order to control group sizes. For example, "Team Registration" might require minimum 3 and maximum 10 tickets.
{% /callout %}

### Per-Ticket Settings

| Setting | Description |
|---------|-------------|
| Collect Attendee Info | Gather details for each ticket holder |
| Custom Fields | Add ticket-specific questions |
| Session Selection | Allow attendees to choose sessions |

---

## Ticket Type Examples

### Free Workshop

| Setting | Value |
|---------|-------|
| Name | Free Registration |
| Price | RM 0.00 |
| Quantity | 50 |
| Max per Order | 1 |

### Conference with Tiers

**Early Bird**
| Setting | Value |
|---------|-------|
| Name | Early Bird |
| Price | RM 150.00 |
| Quantity | 100 |
| Sales End | 2 weeks before event |

**Standard**
| Setting | Value |
|---------|-------|
| Name | Standard |
| Price | RM 200.00 |
| Quantity | 200 |
| Sales Start | After Early Bird ends |

**VIP**
| Setting | Value |
|---------|-------|
| Name | VIP Access |
| Price | RM 500.00 |
| Quantity | 20 |
| Description | Includes front row seating and meet & greet |

### Training with Categories

| Ticket Type | Price | Description |
|-------------|-------|-------------|
| Professional | RM 300 | For working professionals |
| Student | RM 150 | Valid student ID required |
| Group (5+) | RM 250/person | For company groups |

---

## Managing Ticket Types

### Edit Ticket Types

1. Go to **Tickets**
2. Click on the ticket type to edit
3. Modify settings and save

{% callout type="warning" title="Editing after sales" %}
Some settings cannot be changed after tickets have been sold. Price changes only affect future purchases.
{% /callout %}

### Reorder Tickets

Drag and drop to change the display order on the registration page.

### Hide/Show Tickets

- **Hidden tickets** don't appear on the public registration page
- Use for invitation-only ticket types
- Can be shared via direct link

### Pause Sales

Temporarily stop sales for a ticket type:

1. Edit the ticket type
2. Set Sales End to the current date
3. Or set Visibility to Hidden

---

## Ticket Status

Each ticket type shows its status:

| Status | Meaning |
|--------|---------|
| On Sale | Currently available for purchase |
| Scheduled | Sales haven't started yet |
| Sold Out | All tickets purchased |
| Sales Ended | Past the sales end date |
| Hidden | Not visible on registration page |

---

## Attendee Information Collection

### Per-Ticket Attendee Details

When enabled, collect information for each ticket:

1. Edit the ticket type
2. Enable "Collect Attendee Information"
3. Configure which fields to collect

**Standard Fields:**
- Name
- Email
- Phone

**Custom Fields:**
Add ticket-specific fields like:
- Dietary requirements
- T-shirt size
- Professional credentials

### Different Info per Ticket Type

Each ticket type can have different custom fields:

| Ticket Type | Extra Fields |
|-------------|--------------|
| VIP | Meal preference, photo consent |
| Student | Student ID, institution |
| Professional | Company, job title |

---

## Capacity Management

### Overall vs Ticket Capacity

| Level | Description |
|-------|-------------|
| Event Capacity | Maximum total participants |
| Ticket Capacity | Maximum per ticket type |

The event capacity limits total registrations across all ticket types.

### Example

Event capacity: 100

| Ticket Type | Capacity | Notes |
|-------------|----------|-------|
| VIP | 20 | Limited to 20 |
| Standard | 150 | Limited by event capacity |

Even though Standard has 150 capacity, total registrations stop at 100 (event capacity).

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

### Quantity

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

- Check visibility settings
- Verify sales dates are current
- Ensure quantity is greater than zero

### Can't edit ticket

- Some fields lock after first sale
- Create a new ticket type instead
- Contact support for special cases

### Oversold tickets

- Ticket quantities are enforced
- Check if multiple ticket types share capacity
- Review event capacity settings

---

## Next Steps

- [Set up pricing strategies](/docs/pricing-strategies) for timed pricing
- [Create discount codes](/docs/discount-codes) for promotions
- [Configure registration forms](/docs/registration-forms) for each ticket type
