---
title: Payment Methods
nextjs:
  metadata:
    title: Payment Methods
    description: Detailed guide to FPX, DuitNow QR, and manual bank transfer payment methods in GatherHub.
---

GatherHub offers multiple payment methods to suit different participant preferences and use cases. {% .lead %}

---

## Available Payment Methods

| Method | Type | Speed | Best For |
|--------|------|-------|----------|
| FPX | Online Banking | Instant | Most transactions |
| DuitNow QR | QR Payment | Instant | Mobile users |
| Manual Transfer | Bank Transfer | 1-3 days | Corporate, offline |

---

## FPX (Online Banking)

### How FPX Works

1. Participant selects FPX at checkout
2. Chooses their bank from the list
3. Redirected to bank's login page
4. Authenticates and approves payment
5. Redirected back with confirmation

### Participant Experience

```
Select Payment Method
        ↓
   Choose Bank
        ↓
Bank Login Page
        ↓
 Approve Payment
        ↓
 Return to Event
        ↓
  Confirmation
```

### Supported Banks

**Retail Banks:**
- Maybank2u
- CIMB Clicks
- Public Bank
- RHB Now
- Hong Leong Connect
- AmOnline
- Bank Islam
- Bank Rakyat
- Affin Bank
- Alliance Bank
- Standard Chartered
- HSBC
- OCBC
- UOB

**Business Banks:**
- Maybank2E
- CIMB BizChannel
- And others...

### FPX Tips

{% callout title="Best practices for FPX" %}
- Ensure popup blockers are disabled
- Use supported browsers (Chrome, Firefox, Safari)
- Complete payment within the timeout window
- Don't close the browser during processing
{% /callout %}

---

## DuitNow QR

### How DuitNow QR Works

1. Participant selects DuitNow QR
2. QR code is displayed on screen
3. Opens banking app on phone
4. Scans the QR code
5. Confirms payment in app
6. Payment is confirmed instantly

### Participant Experience

```
Select DuitNow QR
        ↓
  QR Code Shown
        ↓
Scan with Bank App
        ↓
Confirm in App
        ↓
 Instant Confirm
```

### Compatible Apps

Any Malaysian bank app supporting DuitNow:

- Maybank MAE
- CIMB OCTO
- Touch 'n Go eWallet
- Boost
- GrabPay
- ShopeePay
- BigPay
- And many more...

### DuitNow Tips

{% callout title="Best practices for DuitNow" %}
- Have banking app ready before starting
- Ensure phone has camera access
- Good lighting helps QR scanning
- Payment must be completed within timeout
{% /callout %}

---

## Manual Bank Transfer

### How Manual Transfer Works

1. Participant selects Manual Transfer
2. Bank details are displayed
3. Participant makes transfer via:
   - Online banking
   - ATM
   - Over the counter
4. Uploads proof of payment
5. Organizer approves

### What Participants See

```
Bank: Maybank
Account Number: 1234567890
Account Name: ABC Organization Sdn Bhd
Reference: ORD-2024-001234

Please transfer the exact amount and use
the reference number for identification.
```

### Proof of Payment

Participants can upload:

- Screenshot of transfer confirmation
- Photo of ATM receipt
- Bank statement excerpt
- Transaction reference

### Approval Process

1. Payment notification received
2. Review proof of payment
3. Verify amount and reference
4. Approve or reject

| Status | Action |
|--------|--------|
| Valid payment | Approve → Confirmed |
| Incorrect amount | Contact participant |
| No reference | Request clarification |
| Suspicious | Investigate further |

---

## Payment Method Comparison

| Feature | FPX | DuitNow QR | Manual |
|---------|-----|------------|--------|
| Speed | Instant | Instant | 1-3 days |
| User effort | Medium | Low | High |
| Organizer effort | None | None | Approval needed |
| Mobile-friendly | Limited | Excellent | Good |
| Corporate-friendly | Good | Limited | Excellent |
| Receipt required | No | No | Yes |

---

## Enabling/Disabling Methods

### Organization Level

1. Go to **Organization Settings**
2. Click **Payment Settings**
3. Toggle methods on/off
4. Save

### Event Level

1. Go to event **Settings**
2. Click **Payment**
3. Enable/disable for this event
4. Save

---

## Payment Timeouts

### Timeout Settings

| Method | Default | Adjustable |
|--------|---------|------------|
| FPX | 30 min | 15-60 min |
| DuitNow | 30 min | 15-60 min |
| Manual | 72 hours | 24h-7 days |

### What Happens on Timeout

1. Payment session expires
2. Registration is cancelled (if enabled)
3. Spot is released
4. Participant can re-register

---

## Handling Payment Issues

### FPX Issues

| Issue | Solution |
|-------|----------|
| Bank not listed | Try another browser/device |
| Redirect failed | Disable popup blocker |
| Session expired | Start new payment |
| Bank error | Try again or use different method |

### DuitNow Issues

| Issue | Solution |
|-------|----------|
| QR won't scan | Improve lighting, clean camera |
| App not supported | Use different banking app |
| Payment failed | Check balance, try again |
| Timeout | Start new payment session |

### Manual Transfer Issues

| Issue | Solution |
|-------|----------|
| Wrong amount | Contact participant for difference |
| No reference | Ask for transaction details |
| Can't verify | Request additional proof |
| Delayed | Check with bank |

---

## Corporate Payments

### Best Practice for Corporate

Use Manual Transfer for corporate bookings:

1. Send invoice with bank details
2. Company processes payment
3. Finance uploads receipt
4. You approve and confirm

### Invoice Details

Include in invoice:

- Event name and date
- Ticket details
- Bank account information
- Payment reference
- Due date

---

## Payment Receipts

### Automatic Receipts

After successful payment:

- Receipt is generated automatically
- Sent via email to participant
- Available in participant portal

### Receipt Contents

- Organization name
- Event name
- Order number
- Payment method
- Amount paid
- Transaction ID
- Date and time

---

## Best Practices

### For Organizers

- Enable multiple payment methods
- Set appropriate timeouts
- Monitor pending payments
- Process approvals quickly
- Keep bank details updated

### For Participants

- Choose familiar payment method
- Complete payment promptly
- Keep reference number
- Check spam for confirmation
- Contact organizer if issues

---

## Next Steps

- [View orders and transactions](/docs/orders-transactions)
- [Process refunds](/docs/refunds) when needed
- [Track revenue](/docs/revenue-reports) from payments
