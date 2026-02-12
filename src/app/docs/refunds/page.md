---
title: Processing Refunds
nextjs:
  metadata:
    title: Processing Refunds
    description: How to process refund requests in GatherHub, including the multi-stage approval workflow, bank details, and proof of refund.
---

Process refunds when participants cancel or when event circumstances require reimbursement. {% .lead %}

---

## Refund Overview

GatherHub provides a multi-stage refund workflow with reference number tracking, proof uploads, and separate views for event managers and finance administrators.

### Refund Status Flow

Refund requests progress through these stages:

| Status | Color | Description |
|--------|-------|-------------|
| Pending | Yellow | Submitted by participant, awaiting review |
| Approved | Blue | Finance approved, awaiting completion |
| Rejected | Red | Finance rejected the request |
| Completed | Green | Refund processed and funds returned |

```
Pending → Approved → Completed
       → Rejected
```

---

## When to Issue Refunds

- Participant requests cancellation
- Event is cancelled
- Duplicate payment
- Overcharge correction
- Service not delivered

---

## Refund Policy

### Setting Up Your Policy

Each event has a **Refund Policy** text field that is displayed on the public event page. Configure this in your event settings.

| Element | Options |
|---------|---------|
| Timeframe | Days before event |
| Percentage | Full, partial, none |
| Method | Original payment, bank transfer |
| Processing fee | Deduct or absorb |

### Example Policy

```
Refund Policy:
- 30+ days before: Full refund
- 14-29 days before: 50% refund
- 7-13 days before: 25% refund
- Less than 7 days: No refund
- Processing fee: RM 5 deducted from all refunds
```

---

## Participant Submits a Refund Request

Participants initiate refund requests from their registration or ticket:

1. Navigate to their order or ticket details
2. Click **Request Refund**
3. Fill in the refund form:

| Field | Description | Required |
|-------|-------------|----------|
| Reason | Why requesting a refund | Yes |
| Bank Name | Destination bank for refund | Yes |
| Account Number | Bank account number | Yes |
| Account Holder | Name on the bank account | Yes |
| Proof of Payment | Receipt image or PDF | Yes |

4. Submit the request

A **reference number** is automatically generated (e.g., `RFD202602000001`) for tracking.

### Tracking Refund Requests

Participants can track their requests at **My Refund Requests** (`/my-refund-requests`):

- View all submitted requests
- Search by reference number
- Filter by status
- Monitor progress

---

## Event Manager View

Event managers can view refund requests for their events.

### Accessing Refund Requests

1. Go to **Manage > Events > [Your Event]**
2. Click **Refund Requests** in the sidebar
3. View all requests for this event

### Dashboard Stats

The refund dashboard shows:

| Stat | Description |
|------|-------------|
| Pending | Requests awaiting review |
| Approved | Approved but not yet completed |
| Rejected | Rejected requests |
| Completed | Successfully processed refunds |

### Search and Filter

- Search by reference number, participant name, or email
- Filter by status (default: pending)

{% callout title="Event manager access" %}
Event managers can view refund requests and details for their events, but approval and processing is handled by the finance team.
{% /callout %}

---

## Finance Admin Processing

Finance administrators process refund requests across all organization events.

### Accessing Finance Refunds

1. Go to **Finance > Refund Requests** (requires finance permission)
2. View all organization-wide refund requests
3. Global stats show totals across all events

### Approving a Refund

1. Find the pending request
2. Review the reason and proof of payment
3. Click **Approve**
4. Status changes to **Approved**

### Rejecting a Refund

1. Find the pending request
2. Click **Reject**
3. Enter admin notes (minimum 10 characters explaining the reason)
4. Status changes to **Rejected**

{% callout type="warning" title="Rejection notes required" %}
You must provide a reason when rejecting a refund. This helps maintain transparency and provides documentation for disputes.
{% /callout %}

### Completing a Refund

1. Find an approved request
2. Transfer funds to the participant's bank account
3. Click **Complete**
4. Optionally upload **proof of refund** (bank transfer screenshot)
5. Status changes to **Completed**

When a refund is completed:

- A refund payment transaction is recorded
- If all tickets on the order are refunded, the order is automatically marked as refunded
- Participant is notified

---

## Refund Methods

### Online Payments (FPX/DuitNow)

For payments made via BayarCash:

1. Refund is processed manually (transfer to bank)
2. Record the refund in the system
3. Upload proof of refund
4. Processing time: 3-14 business days

### Manual Payments

For bank transfers:

1. Transfer to participant's bank account
2. Mark as completed in system
3. Upload proof of refund

{% callout type="warning" title="Manual refunds" %}
All refunds require you to transfer funds outside GatherHub. Ensure you have the participant's bank details from their refund request.
{% /callout %}

---

## Proof Uploads

The refund system supports two types of proof documents:

| Type | Uploaded By | When |
|------|-------------|------|
| Proof of Payment | Participant | When submitting refund request |
| Proof of Refund | Finance admin | When completing the refund |

Accepted formats: JPEG, PNG, PDF.

---

## Reference Numbers

Every refund request is assigned an auto-generated reference number:

- **Format**: `RFD{YYMM}{6-digit-number}`
- **Example**: `RFD202602000001`
- Use reference numbers for tracking and communication

---

## Refund Timeline

### Processing Times

| Payment Method | Refund Time |
|----------------|-------------|
| FPX | 3-7 business days |
| DuitNow | 1-3 business days |
| Manual Transfer | Immediate (your action) |

### Factors Affecting Time

- Bank processing schedules
- Weekend/holiday delays
- Finance team review time
- Verification requirements

---

## Best Practices

### Before Processing

- Verify the refund request against your event's refund policy
- Check the proof of payment matches the order amount
- Calculate the correct refund amount (after any deductions)
- Review bank details for accuracy

### After Processing

- Upload proof of refund for your records
- Monitor that all related orders are updated
- Follow up with participant if there are delays

### Policy Enforcement

- Apply your refund policy consistently
- Document any exceptions with admin notes
- Communicate clearly with participants about timelines

---

## Troubleshooting

### Refund request not appearing

- Ensure the participant has submitted the request (check their order status)
- Check you're viewing the correct event's refund requests
- Verify the status filter isn't hiding the request

### Wrong amount on refund

- Check the original order and ticket amounts
- Verify any policy deductions were calculated correctly
- Contact the participant to clarify

### Participant disputes rejection

- Review the admin notes on the rejection
- Check the refund policy terms
- Provide documentation of the policy
- Consider making an exception if warranted

---

## Next Steps

- [View transaction reports](/docs/orders-transactions)
- [Set up email templates](/docs/email-templates) for refund notices
- [Track revenue impact](/docs/revenue-reports)
