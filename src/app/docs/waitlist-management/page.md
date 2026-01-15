---
title: Waitlist Management
nextjs:
  metadata:
    title: Waitlist Management
    description: Configure and manage waitlists for sold-out GatherHub events to capture demand and fill cancellations.
---

Waitlists help you capture demand when tickets sell out and automatically fill spots from cancellations. {% .lead %}

---

## Understanding Waitlists

When event capacity is reached, waitlists allow interested participants to:

- Express interest in attending
- Automatically receive notification when spots open
- Get priority access to cancelled tickets

---

## Enabling Waitlists

### Event-Level Waitlist

Enable waitlist for your entire event:

1. Go to **Event Settings**
2. Under **Registration Settings**
3. Toggle **Enable Waitlist** on

### Ticket-Level Waitlist

Enable waitlist for specific ticket types:

1. Go to **Tickets**
2. Edit the ticket type
3. Toggle **Enable Waitlist** on

{% callout title="Which to use?" %}
Use event-level waitlist when overall capacity is the limit. Use ticket-level when specific ticket types have limited availability.
{% /callout %}

---

## How Waitlists Work

### Participant Experience

When tickets are sold out:

1. Participant sees "Sold Out" status
2. "Join Waitlist" option appears
3. Participant enters their details
4. They receive waitlist confirmation email

### When Spots Open

When a registered participant cancels:

1. Next waitlisted person is notified
2. They receive an email with a registration link
3. They have a limited time to complete registration
4. If they don't respond, the spot goes to the next person

---

## Waitlist Settings

### Configuration Options

| Setting | Description |
|---------|-------------|
| Enable Waitlist | Turn waitlist on/off |
| Auto-notify | Automatically notify when spots open |
| Notification Window | Time given to complete registration |
| Max Waitlist Size | Limit how many can join waitlist |

### Notification Window

Set how long waitlisted participants have to claim their spot:

| Duration | Use Case |
|----------|----------|
| 24 hours | Standard events |
| 48 hours | Events far in the future |
| 12 hours | Events happening soon |
| 4 hours | Last-minute registrations |

{% callout type="warning" title="Setting notification windows" %}
Shorter windows fill spots faster but may frustrate participants who miss the deadline. Consider your event timeline.
{% /callout %}

---

## Managing the Waitlist

### View Waitlist

1. Go to your event dashboard
2. Click **Participants** in the sidebar
3. Select the **Waitlist** tab

### Waitlist Information

| Column | Description |
|--------|-------------|
| Position | Order in the waitlist |
| Name | Participant name |
| Email | Contact email |
| Ticket Type | Which ticket they want |
| Joined | When they joined the waitlist |
| Status | Waiting, Notified, Expired, Registered |

### Waitlist Actions

| Action | Description |
|--------|-------------|
| Promote | Move participant to confirmed registration |
| Notify | Manually send registration invitation |
| Remove | Remove from waitlist |
| Reorder | Change waitlist position |

---

## Automatic vs Manual Processing

### Automatic Processing

When enabled, the system automatically:

1. Detects cancellation or capacity increase
2. Notifies the next waitlisted person
3. Reserves their spot temporarily
4. Moves to the next person if they don't respond

### Manual Processing

For more control, process waitlist manually:

1. Review cancellation
2. Choose who to notify from waitlist
3. Send invitation
4. Track response

{% callout title="When to use manual" %}
Use manual processing when you need to prioritize certain waitlisted participants (e.g., VIPs, partners) over others.
{% /callout %}

---

## Waitlist Communications

### Automatic Emails

| Email | When Sent |
|-------|-----------|
| Waitlist Confirmation | When participant joins waitlist |
| Spot Available | When a spot opens for them |
| Spot Claimed | When they successfully register |
| Spot Expired | When they missed the deadline |

### Email Content

**Spot Available Email includes:**
- Notification that a spot is available
- Link to complete registration
- Deadline to claim the spot
- Original ticket details

---

## Handling Cancellations

### Participant Cancellations

When a registered participant cancels:

1. Their spot is released
2. Waitlist is checked for next person
3. Notification is sent automatically (if enabled)

### Refunds and Waitlist

Cancellation and refund processing is separate from waitlist management:

1. Process refund according to your policy
2. Spot is automatically offered to waitlist
3. New registration creates new payment

---

## Capacity Management

### Increasing Capacity

If you can accommodate more participants:

1. Go to **Event Settings**
2. Increase **Maximum Participants**
3. System automatically processes waitlist

### Adding Tickets

When you add more tickets:

1. Edit ticket type
2. Increase quantity
3. Waitlisted participants are notified

---

## Waitlist Strategies

### Overbooking for Free Events

Free events often have high no-show rates. Consider:

1. Set event capacity to actual venue limit
2. Enable waitlist when "sold out"
3. As event approaches, promote waitlisted participants
4. Plan for expected no-shows

### VIP Waitlist Priority

Prioritize certain waitlisted participants:

1. View the waitlist
2. Identify VIP/priority participants
3. Use "Promote" to move them up
4. Or manually notify them first

### Communication While Waiting

Keep waitlisted participants engaged:

1. Send updates about their position
2. Notify of new events they might like
3. Offer alternative ticket types if available

---

## Reporting

### Waitlist Metrics

Track waitlist performance:

| Metric | Description |
|--------|-------------|
| Total Waitlisted | People who joined waitlist |
| Conversion Rate | Waitlisted → Registered |
| Average Wait Time | Time from join to registration |
| Expiration Rate | People who missed deadline |

### Demand Insights

Waitlist data helps plan future events:

- High waitlist = consider larger venue
- Quick conversion = strong demand
- Low conversion = review notification timing

---

## Best Practices

### Setting Expectations

- Clearly communicate waitlist position
- Provide estimated chances of getting in
- Be honest about likelihood near event date

### Timing

- Process waitlist promptly after cancellations
- Give adequate time to respond
- Send reminders before deadline expires

### Communication

- Keep waitlisted participants informed
- Thank them for their patience
- Offer alternatives when possible

---

## Troubleshooting

### Participant didn't receive notification

1. Check spam/junk folder
2. Verify email address is correct
3. Check notification was sent (event log)
4. Manually resend if needed

### Spots not filling from waitlist

1. Verify waitlist is enabled
2. Check auto-notify setting
3. Review notification window setting
4. Process manually if needed

### Wrong person notified

1. Check waitlist order
2. Review any manual changes
3. Contact the correct person directly
4. Adjust waitlist order if needed

---

## Next Steps

- [Configure registration settings](/docs/registration-forms) for waitlist sign-ups
- [Set up email templates](/docs/email-templates) for waitlist notifications
- [View reports](/docs/reports-overview) on waitlist conversion
