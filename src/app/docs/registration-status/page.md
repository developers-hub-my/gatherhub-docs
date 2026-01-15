---
title: Registration Status
nextjs:
  metadata:
    title: Registration Status
    description: Understand and manage participant registration statuses in GatherHub.
---

Registration status tracks where each participant is in the registration lifecycle. Understanding statuses helps you manage your event effectively. {% .lead %}

---

## Status Overview

Every registration has a status that indicates its current state:

| Status | Description |
|--------|-------------|
| Confirmed | Registration is complete and valid |
| Pending Payment | Waiting for payment |
| Pending Approval | Waiting for organizer approval |
| Waitlisted | On the waitlist |
| Cancelled | Registration has been cancelled |

---

## Status Lifecycle

### Typical Flow

For free events: Registration → Confirmed

For paid events:
1. Registration submitted → Pending Payment
2. Payment completed → Confirmed
3. Payment expired → Cancelled

### With Approval Required

1. Registration submitted → Pending Approval
2. Organizer approves → Confirmed
3. Organizer rejects → Cancelled

---

## Confirmed Status

### What It Means

- Registration is complete
- Payment is received (for paid events)
- Participant can attend the event

### Actions Available

| Action | Description |
|--------|-------------|
| Edit | Modify participant details |
| Cancel | Cancel the registration |
| Check In | Mark as checked in |
| Send Email | Send communication |

---

## Pending Payment Status

### What It Means

- Registration form submitted
- Payment not yet received
- Participant cannot check in yet

### Payment Scenarios

| Scenario | Next Status |
|----------|-------------|
| Payment completed | Confirmed |
| Payment expired | Cancelled |
| Manual payment approved | Confirmed |

### Managing Pending Payments

1. Go to **Participants**
2. Filter by "Pending Payment"
3. Review each registration
4. Take action:
   - Approve manual payment
   - Send payment reminder
   - Cancel if abandoned

{% callout title="Payment reminders" %}
Consider sending reminder emails to participants with pending payments, especially as the event approaches.
{% /callout %}

---

## Pending Approval Status

### What It Means

- Registration requires manual approval
- Organizer needs to review before confirming
- Common for exclusive or screened events

### Enabling Approval Requirement

1. Go to **Event Settings**
2. Under Registration Settings
3. Enable "Require Approval"

### Approving Registrations

1. Go to **Participants**
2. Filter by "Pending Approval"
3. Review each registration
4. Click **Approve** or **Reject**

### Approval Workflow

| Decision | Result |
|----------|--------|
| Approve | Status changes to Confirmed |
| Reject | Status changes to Cancelled |
| Request info | Stay pending, contact participant |

---

## Waitlisted Status

### What It Means

- Event or ticket type is at capacity
- Participant is in line for available spots
- Not yet confirmed to attend

### Waitlist Details

| Info | Description |
|------|-------------|
| Position | Place in the waitlist queue |
| Joined | When they joined the waitlist |
| Ticket Type | Which ticket they want |

### Managing Waitlist

See [Waitlist Management](/docs/waitlist-management) for details on:

- Promoting waitlisted participants
- Automatic notifications
- Manual processing

---

## Cancelled Status

### What It Means

- Registration is no longer valid
- Participant cannot attend
- Spot is released for others

### Cancellation Reasons

| Reason | Who Initiated |
|--------|---------------|
| Participant cancelled | Self-service cancellation |
| Organizer cancelled | Manual cancellation |
| Payment expired | System automatic |
| Approval rejected | Organizer decision |
| Event cancelled | Affects all registrations |

### Cancelled Records

Cancelled registrations:

- Remain in the system for records
- Are excluded from active counts
- Can be viewed with status filter
- Include cancellation timestamp

---

## Status Transitions

### Allowed Transitions

| From | To | How |
|------|----|-----|
| Pending Payment | Confirmed | Payment received |
| Pending Payment | Cancelled | Payment timeout |
| Pending Approval | Confirmed | Approved |
| Pending Approval | Cancelled | Rejected |
| Waitlisted | Confirmed | Spot available |
| Waitlisted | Cancelled | Removed from waitlist |
| Confirmed | Cancelled | Cancellation |

### Manual Status Changes

Organizers can manually change status:

1. Open participant details
2. Click **Change Status**
3. Select new status
4. Add note explaining the change
5. Confirm

{% callout type="warning" title="Manual changes" %}
Manual status changes bypass normal workflows. Use carefully and document the reason.
{% /callout %}

---

## Status Notifications

### Automatic Emails

| Status Change | Email Sent |
|---------------|------------|
| → Confirmed | Registration confirmation |
| → Cancelled | Cancellation notice |
| → Waitlisted | Waitlist confirmation |
| Waitlist → Confirmed | Spot available notice |

### Customizing Notifications

Configure notification content:

1. Go to **Event Settings**
2. Select **Communication**
3. Edit email templates per status

---

## Tracking Status Changes

### Activity Log

Each registration maintains a history:

| Log Entry | Info |
|-----------|------|
| Timestamp | When change occurred |
| Old Status | Previous status |
| New Status | New status |
| Changed By | User or system |
| Notes | Reason for change |

### Viewing History

1. Open participant details
2. Scroll to Activity section
3. View status change history

---

## Reporting by Status

### Status Summary

View registration breakdown:

| Metric | Description |
|--------|-------------|
| Total Confirmed | Active registrations |
| Pending Payment | Awaiting payment |
| Pending Approval | Awaiting review |
| Waitlisted | In waitlist |
| Cancelled | Cancelled registrations |

### Export by Status

1. Go to **Participants**
2. Filter by status
3. Click **Export**
4. Download filtered list

---

## Best Practices

### Monitor Pending Registrations

- Check pending payments regularly
- Follow up before payment deadlines
- Review approval queue promptly

### Clean Up Cancelled

- Archive old cancelled records
- Review cancellation patterns
- Adjust policies if needed

### Communicate Status Changes

- Send timely notifications
- Explain next steps clearly
- Provide contact for questions

---

## Troubleshooting

### Wrong status displayed

- Check payment status
- Review activity log
- Verify approval settings

### Can't change status

- Some transitions are restricted
- Check if payment is involved
- Contact support if needed

### Missing notification

- Check spam folder
- Verify email address
- Review notification settings

---

## Next Steps

- [Process payments](/docs/payment-methods) for pending registrations
- [Manage waitlist](/docs/waitlist-management) for capacity issues
- [View reports](/docs/reports-overview) on registration status
