---
title: Processing Refunds
nextjs:
  metadata:
    title: Processing Refunds
    description: How to process full and partial refunds for GatherHub event registrations.
---

Process refunds when participants cancel or when event circumstances require reimbursement. {% .lead %}

---

## Refund Overview

Refunds return payment to participants for cancelled registrations or other situations requiring reimbursement.

### When to Issue Refunds

- Participant requests cancellation
- Event is cancelled
- Duplicate payment
- Overcharge correction
- Service not delivered

---

## Refund Types

### Full Refund

Returns the entire payment amount.

| Scenario | Action |
|----------|--------|
| Event cancellation | Refund all participants |
| Participant cancellation | Per your refund policy |
| Payment error | Correct the error |

### Partial Refund

Returns part of the payment.

| Scenario | Example |
|----------|---------|
| Partial attendance | Refund unused days |
| Service reduction | Refund feature not available |
| Goodwill gesture | Partial refund for issues |

---

## Processing a Refund

### Step-by-Step

1. Go to **Orders**
2. Find and open the order
3. Click **Issue Refund**
4. Select refund type:
   - Full refund
   - Partial refund (enter amount)
5. Enter refund reason
6. Confirm refund

### Refund Form

| Field | Description |
|-------|-------------|
| Original Amount | Total paid |
| Refund Amount | Amount to return |
| Reason | Why refund is being issued |
| Notes | Internal notes (optional) |

---

## Refund Methods

### Online Payments (FPX/DuitNow)

For payments made via BayarCash:

1. Refund is processed through gateway
2. Funds return to original payment source
3. Processing time: 3-14 business days
4. Participant receives notification

### Manual Payments

For bank transfers:

1. Process refund manually
2. Transfer to participant's account
3. Mark as refunded in system
4. Upload proof of refund

{% callout type="warning" title="Manual refunds" %}
Manual refunds require you to transfer funds outside GatherHub. Ensure you have participant's bank details.
{% /callout %}

---

## Refund Policies

### Creating a Policy

Define your refund policy covering:

| Element | Options |
|---------|---------|
| Timeframe | Days before event |
| Percentage | Full, partial, none |
| Method | Original payment, credit |
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

### Displaying Policy

Include your policy in:

- Event description
- Registration confirmation
- Terms and conditions
- FAQ page

---

## Refund Status

### Status Types

| Status | Description |
|--------|-------------|
| Pending | Refund initiated, processing |
| Processing | Being processed by gateway |
| Completed | Refund successful |
| Failed | Refund could not be processed |

### Tracking Refunds

1. Go to **Orders**
2. Filter by "Refunded"
3. View refund status and details

---

## Bulk Refunds

### When Needed

- Event cancellation
- Mass service issue
- Policy change affecting many

### Processing Bulk Refunds

1. Go to **Orders**
2. Filter relevant orders
3. Select multiple orders
4. Click **Bulk Refund**
5. Choose amount (full/partial)
6. Confirm

{% callout type="warning" title="Bulk refund caution" %}
Bulk refunds cannot be easily reversed. Double-check your selection before confirming.
{% /callout %}

---

## Refund Timeline

### Processing Times

| Payment Method | Refund Time |
|----------------|-------------|
| FPX | 3-7 business days |
| DuitNow | 1-3 business days |
| Manual | Immediate (your action) |

### Factors Affecting Time

- Bank processing schedules
- Weekend/holiday delays
- Verification requirements
- Account status

---

## Communication

### Automatic Notifications

When refund is issued:

- Participant receives email confirmation
- Details include amount and timeline
- Original order is updated

### Manual Communication

For complex situations:

1. Open order
2. Click **Send Message**
3. Explain refund details
4. Provide expected timeline

---

## Refund Fees

### Who Pays Fees?

| Approach | Description |
|----------|-------------|
| Absorb fees | You cover transaction fees |
| Deduct fees | Subtract from refund amount |
| No fees | Some gateways allow fee recovery |

### Calculating Net Refund

```
Original payment: RM 100
Transaction fee: RM 4 (3% + RM 1)
Refund option 1: RM 100 (absorb fees)
Refund option 2: RM 96 (deduct fees)
```

---

## Record Keeping

### What's Recorded

Every refund records:

| Field | Description |
|-------|-------------|
| Refund date | When issued |
| Original amount | Payment received |
| Refund amount | Amount returned |
| Reason | Why refunded |
| Processed by | Who initiated |
| Status | Current state |

### Refund Reports

Export refund data:

1. Go to **Reports**
2. Select **Refunds**
3. Choose date range
4. Export to CSV/Excel

---

## Handling Disputes

### Participant Claims No Refund

1. Check refund status in system
2. Verify transaction with gateway
3. Check participant's bank
4. Provide transaction proof

### Chargeback Requests

If participant files chargeback:

1. Gather evidence of refund
2. Provide transaction records
3. Respond through gateway
4. Document all communications

---

## Best Practices

### Before Processing

- Verify cancellation request
- Check refund policy eligibility
- Calculate correct amount
- Document reason

### After Processing

- Confirm refund initiated
- Update participant record
- Monitor for completion
- Follow up if delayed

### Policy Enforcement

- Apply policy consistently
- Document exceptions
- Communicate clearly
- Be reasonable

---

## Troubleshooting

### Refund failed

1. Check error message
2. Verify account status
3. Try again
4. Process manually if needed

### Wrong amount refunded

1. Check original calculation
2. Issue additional refund or
3. Request partial return
4. Document correction

### Participant disputes amount

1. Review policy and transaction
2. Explain calculation
3. Provide documentation
4. Escalate if needed

---

## Next Steps

- [View transaction reports](/docs/orders-transactions)
- [Set up email templates](/docs/email-templates) for refund notices
- [Track revenue impact](/docs/revenue-reports)
