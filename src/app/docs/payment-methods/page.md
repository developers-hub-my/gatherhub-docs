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
| FPX Online Banking | Online Banking | Instant | Most transactions |
| DuitNow QR | QR Payment | Instant | Mobile users |
| Bank Transfer | Manual transfer | When you approve | Corporate, offline |

FPX and DuitNow QR are processed through BayarCash. Free tickets skip payment: signed-in participants click **Confirm Free Registration**.

---

Paid orders open **Complete your order**, where the participant picks a payment channel and pays.

{% figure src="/images/guides/25-attendee-order-payment.jpg" alt="Complete your order page with the payment channel, Pay button and order summary" caption="Complete your order. Channels shown depend on your setup." /%}

---

## FPX (Online Banking)

### How FPX Works

1. Participant selects **FPX Online Banking** and clicks **Pay RM ...**
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

1. Participant selects **DuitNow QR** and clicks **Pay RM ...**
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

1. Participant selects **Bank Transfer**
2. **Bank transfer details** are displayed
3. Participant clicks **Submit Order (Pending Approval)**
4. Participant makes transfer via:
   - Online banking
   - ATM
   - Over the counter
5. Uploads proof of payment on the order page
6. Organizer approves

### What Participants See

```
Bank transfer details
Bank: [Bank name]
Account no: [Account number]
Account name: [Account holder]
Amount to pay: RM [Total]
Payment reference: [Order ID]

Please include your Order ID as payment reference.
```

The bank account shown is GatherHub's collection account, set by the platform administrator. It is not your organization's own account.

### Proof of Payment

Under **Upload payment receipt**, participants can upload one file (PNG, JPG, GIF or PDF, up to 5MB), such as:

- Screenshot of transfer confirmation
- Photo of ATM receipt
- Bank statement excerpt

They can add **Notes (optional)**, for example the transaction reference.

### Approval Process

1. Go to **Payment Approvals** in the event menu
2. Review the **Payment Receipt** and **Buyer's Notes**
3. Verify amount and reference
4. Click **Approve Payment** or **Reject Payment**

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
| Speed | Instant | Instant | When you approve |
| User effort | Medium | Low | High |
| Organizer effort | None | None | Approval needed |
| Mobile-friendly | Limited | Excellent | Good |
| Corporate-friendly | Good | Limited | Excellent |
| Receipt required | No | No | Yes |

---

## Enabling/Disabling Methods

### Platform Level

Payment channels are set once for the whole platform by the GatherHub administrator. Organizations and events can't turn individual channels on or off. Participants see the channels that are enabled.

### Event Level

**Payment Settings** in the event menu sets the **Platform Fee Mode**:

| Option | What happens |
|--------|--------------|
| Organizer Absorbs Fee | Fee is deducted from your earnings. Buyers pay only the ticket price |
| Buyer Pays Fee | Fee is added to the ticket price. You receive the full ticket amount |

Ticket income reaches you through **Payouts** to your organization's **Bank Accounts**.

---

## Payment Timeouts

### Timeout Settings

A payment session expires after **30 minutes** by default. The platform administrator sets this (**Payment Intent Expiry**). Organizers can't change it per event.

### What Happens on Timeout

1. Payment session expires
2. The order stays unpaid and no ticket is issued
3. The participant can open the order and pay again
4. GatherHub emails a reminder to buyers who left checkout without paying. You can see them under **Left Checkout**

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

1. The company registers and picks **Bank Transfer**
2. Company processes payment
3. Finance uploads the receipt on the order page
4. You approve under **Payment Approvals**

### Invoice Details

GatherHub doesn't generate invoices. If the company needs one, include:

- Event name and date
- Ticket details
- Bank account information
- Payment reference
- Due date

---

## Payment Receipts

### Automatic Receipts

GatherHub doesn't send a separate receipt document. After successful payment:

- The ticket confirmation email is sent to the buyer, with the tickets attached as PDF
- The order page shows the payment details
- Tickets are available in the participant portal

### Order Page Contents

- Event name
- Registration details
- Payment method and payment channel
- Platform fee, if the buyer pays it
- Total

---

## Best Practices

### For Organizers

- Pick the right **Platform Fee Mode** before you publish
- Watch **Left Checkout** for buyers who didn't finish
- Monitor pending payments
- Process approvals quickly
- Keep your payout bank account updated

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
