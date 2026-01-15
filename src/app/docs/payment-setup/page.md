---
title: Payment Setup
nextjs:
  metadata:
    title: Payment Setup
    description: Configure payment methods and settings for your GatherHub events.
---

Set up payment processing to accept paid registrations for your events. GatherHub supports multiple payment methods suitable for the Malaysian market. {% .lead %}

---

## Payment Options Overview

GatherHub supports three payment methods:

| Method | Description | Best For |
|--------|-------------|----------|
| Online Banking (FPX) | Direct bank transfer | Most transactions |
| DuitNow QR | QR code payment | Mobile-friendly payments |
| Manual Transfer | Bank transfer with receipt | Corporate bookings |

---

## Setting Up Payments

### Organization-Level Setup

Payment settings are configured at the organization level:

1. Go to **Organization Settings**
2. Click **Payment Settings**
3. Configure your payment methods

### Payment Gateway

GatherHub uses **BayarCash** as the payment gateway for:

- FPX (online banking)
- DuitNow QR payments

{% callout title="BayarCash Account" %}
Contact GatherHub support to set up your BayarCash merchant account and link it to your organization.
{% /callout %}

---

## FPX Setup

### What is FPX?

FPX (Financial Process Exchange) enables direct online bank transfers from Malaysian banks.

### Supported Banks

Major banks supported include:

- Maybank
- CIMB Bank
- Public Bank
- RHB Bank
- Hong Leong Bank
- AmBank
- Bank Islam
- And more...

### Configuration

1. Ensure BayarCash account is linked
2. FPX is enabled by default
3. Test with a small transaction

---

## DuitNow QR Setup

### What is DuitNow QR?

DuitNow QR allows instant payments by scanning a QR code with any participating banking app.

### How It Works

1. Participant selects DuitNow QR
2. QR code is displayed
3. Participant scans with banking app
4. Payment is processed instantly

### Configuration

1. Ensure BayarCash account is linked
2. Enable DuitNow QR in payment settings
3. Test with a small transaction

---

## Manual Transfer Setup

### What is Manual Transfer?

Participants transfer money to your bank account and upload proof of payment.

### Configuration

1. Go to **Payment Settings**
2. Enable **Manual Bank Transfer**
3. Enter your bank details:
   - Bank name
   - Account number
   - Account holder name
4. Set approval workflow

### Bank Details Display

Participants will see your bank details:

| Field | Example |
|-------|---------|
| Bank | Maybank |
| Account Number | 1234567890 |
| Account Name | Company Name |
| Reference | ORD-20240115-001 |

---

## Payment Settings

### General Settings

| Setting | Description |
|---------|-------------|
| Currency | Malaysian Ringgit (RM) |
| Payment Methods | Which methods to enable |
| Payment Timeout | Time to complete payment |
| Auto-cancel | Cancel if payment not received |

### Timeout Settings

| Setting | Recommended | Description |
|---------|-------------|-------------|
| FPX Timeout | 30 minutes | Time to complete FPX payment |
| DuitNow Timeout | 30 minutes | Time to complete DuitNow |
| Manual Timeout | 3 days | Time to upload receipt |

---

## Event-Level Settings

Override organization settings for specific events:

1. Go to event **Settings**
2. Click **Payment Settings**
3. Enable/disable specific methods
4. Save

### Use Cases

- Free events: Disable all payment methods
- Corporate events: Manual transfer only
- Public events: All methods enabled

---

## Testing Payments

### Test Mode

Before going live:

1. Enable test mode in settings
2. Process a test transaction
3. Verify confirmation flow
4. Disable test mode

### What to Test

- Payment page loads correctly
- Each payment method works
- Confirmation email is sent
- Ticket is generated
- Order appears in dashboard

---

## Transaction Fees

### Fee Structure

GatherHub charges a transaction fee for paid registrations:

| Component | Amount |
|-----------|--------|
| Platform fee | 3% of transaction |
| Fixed fee | RM 1 per transaction |

### Example

For a RM 100 ticket:

| Item | Amount |
|------|--------|
| Ticket price | RM 100.00 |
| Platform fee (3%) | RM 3.00 |
| Fixed fee | RM 1.00 |
| Total fees | RM 4.00 |
| You receive | RM 96.00 |

{% callout title="Free events" %}
No fees are charged for free events.
{% /callout %}

---

## Payouts

### How Payouts Work

1. Payments are collected by BayarCash
2. Funds are held until settlement
3. Payouts are made to your bank account
4. Settlement typically within 3-5 business days

### Payout Schedule

| Type | Timing |
|------|--------|
| Regular | Weekly settlements |
| Express | Next-day (additional fees) |

### Viewing Payouts

1. Go to **Organization Settings**
2. Click **Payouts**
3. View payout history and status

---

## Payment Security

### Data Protection

- All payment data is encrypted
- Card details are never stored
- PCI DSS compliant processing

### Fraud Prevention

- Bank-level authentication
- Transaction monitoring
- Suspicious activity alerts

---

## Best Practices

### Before the Event

- Test all payment methods
- Verify bank account details
- Set appropriate timeouts
- Configure confirmation emails

### Monitoring

- Check pending payments daily
- Process manual approvals promptly
- Monitor for failed transactions

### After the Event

- Reconcile payments received
- Review transaction reports
- Process any refunds needed

---

## Troubleshooting

### Payment not processing

- Check payment gateway status
- Verify configuration settings
- Test with different payment method
- Contact support if persistent

### Missing payment confirmation

- Check transaction status
- Verify email delivery
- Look for webhook errors
- Manually confirm if needed

### Bank account issues

- Verify account details are correct
- Contact BayarCash support
- Check for account restrictions

---

## Next Steps

- [Learn about payment methods](/docs/payment-methods) in detail
- [View orders and transactions](/docs/orders-transactions)
- [Process refunds](/docs/refunds) when needed
