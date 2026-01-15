---
title: Orders and Transactions
nextjs:
  metadata:
    title: Orders and Transactions
    description: View and manage orders, payments, and transaction history in GatherHub.
---

Track all financial transactions for your events, from registration orders to payment confirmations. {% .lead %}

---

## Orders Overview

An order is created when a participant registers for your event. Each order contains:

- Order number
- Participant details
- Ticket(s) purchased
- Payment information
- Status

---

## Viewing Orders

### Access Orders

1. Go to your event dashboard
2. Click **Orders** in the sidebar

Or view all orders:

1. Go to **Organization Settings**
2. Click **All Orders**

### Order List

| Column | Description |
|--------|-------------|
| Order # | Unique order identifier |
| Participant | Buyer's name |
| Tickets | Number and type of tickets |
| Amount | Total order value |
| Status | Payment and order status |
| Date | Order creation date |

---

## Order Status

### Status Types

| Status | Description |
|--------|-------------|
| Completed | Payment received, registration confirmed |
| Pending | Awaiting payment |
| Failed | Payment failed |
| Cancelled | Order was cancelled |
| Refunded | Full or partial refund issued |

### Status Indicators

- **Green** - Completed, paid
- **Yellow** - Pending action
- **Red** - Failed or cancelled
- **Blue** - Refunded

---

## Order Details

Click on any order to view full details:

### Order Information

| Field | Description |
|-------|-------------|
| Order Number | Unique identifier (ORD-XXXX-XXXXXX) |
| Created | Date and time of registration |
| Status | Current order status |
| Source | Where registration came from |

### Buyer Information

| Field | Description |
|-------|-------------|
| Name | Buyer's full name |
| Email | Contact email |
| Phone | Contact phone |

### Tickets

| Field | Description |
|-------|-------------|
| Ticket Type | Name of ticket purchased |
| Quantity | Number of tickets |
| Unit Price | Price per ticket |
| Subtotal | Quantity × Unit Price |

### Payment Details

| Field | Description |
|-------|-------------|
| Payment Method | FPX, DuitNow, Manual |
| Transaction ID | Gateway transaction reference |
| Payment Date | When payment was received |
| Amount Paid | Total amount received |

---

## Searching Orders

### Quick Search

Search by:

- Order number
- Participant name
- Email address
- Transaction ID

### Filters

| Filter | Options |
|--------|---------|
| Status | All, Completed, Pending, Failed, Cancelled |
| Date Range | Custom date range |
| Payment Method | FPX, DuitNow, Manual, All |
| Amount | Min/max amount |

---

## Order Actions

### Available Actions

| Action | Description |
|--------|-------------|
| View Details | See full order information |
| Resend Confirmation | Send confirmation email again |
| View Receipt | Download payment receipt |
| Issue Refund | Process full or partial refund |
| Cancel Order | Cancel the order |
| Add Note | Add internal notes |

### Action Availability

| Action | Completed | Pending | Cancelled |
|--------|-----------|---------|-----------|
| View | Yes | Yes | Yes |
| Resend | Yes | No | No |
| Receipt | Yes | No | No |
| Refund | Yes | No | No |
| Cancel | No | Yes | No |

---

## Transaction History

### What's Recorded

Every financial action is logged:

| Action | Details Recorded |
|--------|------------------|
| Payment Attempt | Method, amount, status |
| Payment Success | Transaction ID, time |
| Payment Failure | Error code, reason |
| Refund | Amount, reason, processor |

### Viewing Transaction Log

1. Open order details
2. Scroll to "Transaction History"
3. View chronological log

---

## Manual Payment Approval

For manual bank transfers:

### Approval Queue

1. Go to **Orders**
2. Filter by "Pending Approval"
3. Review each submission

### Approval Process

1. Click on pending order
2. View uploaded payment proof
3. Verify:
   - Amount matches
   - Reference number visible
   - Date is recent
4. Click **Approve** or **Reject**

### Rejection Reasons

If rejecting, provide reason:

- Incorrect amount
- Invalid reference
- Cannot verify transfer
- Duplicate submission

---

## Order Reports

### Available Reports

| Report | Contents |
|--------|----------|
| Orders Summary | Overview of all orders |
| Revenue Report | Total revenue by period |
| Payment Method | Breakdown by method |
| Ticket Sales | Sales by ticket type |

### Exporting Orders

1. Go to **Orders**
2. Apply filters (optional)
3. Click **Export**
4. Choose format (CSV/Excel)
5. Download

### Export Fields

- Order number
- Date
- Participant info
- Tickets
- Amount
- Payment method
- Status

---

## Financial Reconciliation

### Matching Payments

Reconcile orders with bank statements:

1. Export orders for date range
2. Compare with bank records
3. Match transaction IDs
4. Investigate discrepancies

### Common Discrepancies

| Issue | Cause | Resolution |
|-------|-------|------------|
| Missing payment | Webhook failure | Check gateway dashboard |
| Double payment | User error | Issue refund for duplicate |
| Wrong amount | Partial payment | Contact participant |

---

## Order Notifications

### Automatic Emails

| Event | Email Sent |
|-------|------------|
| Order created | Order confirmation |
| Payment received | Payment confirmation |
| Order cancelled | Cancellation notice |
| Refund issued | Refund confirmation |

### Manual Notifications

Send custom messages:

1. Open order
2. Click **Send Message**
3. Compose and send

---

## Best Practices

### Daily Checks

- Review pending payments
- Approve manual transfers
- Check for failed transactions

### Weekly Tasks

- Export transaction report
- Reconcile with bank
- Review refund requests

### Before Event

- Clear pending orders
- Follow up on incomplete payments
- Prepare check-in list

---

## Troubleshooting

### Payment not showing

1. Check payment gateway dashboard
2. Look for webhook errors
3. Verify transaction ID
4. Contact support if missing

### Duplicate orders

1. Check if same person
2. Verify both paid
3. Refund duplicate if needed
4. Merge participant records

### Wrong amount paid

1. Check original order amount
2. Verify what was paid
3. Contact participant
4. Collect difference or refund

---

## Next Steps

- [Process refunds](/docs/refunds) for cancellations
- [View revenue reports](/docs/revenue-reports)
- [Export transaction data](/docs/exporting-data)
