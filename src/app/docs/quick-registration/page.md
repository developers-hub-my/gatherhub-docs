---
title: Quick Registration and Guest Checkout
nextjs:
  metadata:
    title: Quick Registration and Guest Checkout
    description: Let guests register for free tickets or buy paid tickets with only their name, email and phone, without creating a GatherHub account.
---

Let people register or buy a ticket without creating an account first. Guests type their name, email and phone, and their ticket arrives by email. {% .lead %}

---

## What It Does

| Setting | What guests can do without an account |
|---------|---------------------------------------|
| **Quick registration** | Register for **free** tickets |
| **Allow guest checkout for paid tickets** | Also **buy paid** tickets and pay online |

Without these switches, a visitor who is not signed in sees **Login to Register** and must create an account before registering or paying. Visitors arriving from ads or social media often drop off at that step. Guest checkout removes it.

---

## Turning It On

1. Open your event and click **Details**
2. Go to the **Registration** tab
3. Switch on **Quick registration**
4. To sell paid tickets to guests as well, switch on **Allow guest checkout for paid tickets**
5. Click **Save Registration Settings**

{% figure src="/images/guides/07-organiser-quick-registration.jpg" alt="Event Details, Registration tab, with the Quick registration switch and the data and privacy notice field" caption="Details → Registration." /%}

{% callout title="Guest checkout needs Quick registration" %}
**Allow guest checkout for paid tickets** is greyed out until **Quick registration** is on. If you turn Quick registration off, paid guest checkout stops too.
{% /callout %}

The **Data & privacy notice** on the same tab applies to guests as well. When it is set, guests must tick a box agreeing to it before they can register or pay.

---

## What Guests See

### On the event page

For a visitor who is not signed in, each eligible ticket shows:

| Ticket | Label |
|--------|-------|
| Free ticket | **Register Now** |
| Paid ticket (guest checkout on) | **Buy Ticket** |
| Ticket that is not eligible | **Login to Register** |

### The registration form

Clicking the ticket opens the registration panel with the message **No account needed**. Guests fill in:

- Full name, email and phone
- Your custom fields, if you added any
- The privacy consent checkbox, if you set a data & privacy notice
- A discount code (paid tickets only)

The button at the bottom reads **Complete Registration** for a free ticket and **Continue to Payment** for a paid one.

### Signing in instead

The panel also has a **Have an account? Sign in** link. A guest who signs in comes straight back to the event page with the same ticket open and the details they typed still filled in. The account's own name and email are used.

---

## Limits

| Limit | Details |
|-------|---------|
| One ticket per guest order | Guests can't pick a quantity. To buy several tickets at once, the buyer needs an account |
| No add-ons | Add-ons (merchandise, meals, accessories) are hidden from guests. Buying them needs an account |
| Verified tickets need an account | Tickets that require eligibility verification always ask the buyer to sign in |
| One registration per email | If the email is already registered for the event, the guest is told to check their inbox for the ticket |
| Event and ticket limits still apply | Sold-out tickets and ended events can't be booked |

---

## After a Guest Registers

### Free tickets

The ticket is issued straight away. The panel shows a success message and the ticket is emailed to the guest.

### Paid tickets

1. The guest clicks **Continue to Payment**. GatherHub reserves the order and opens the guest's order page, titled **Complete your order**
2. The guest chooses a payment method and pays, the same way a signed-in buyer does
3. After a successful payment, the ticket is issued and emailed to the guest
4. The payment result page has a **View Your Tickets** button that opens the order page

{% callout title="100% discount codes" %}
If a discount code brings a paid ticket down to RM 0, the ticket is issued right away, like a free ticket. No payment step is shown.
{% /callout %}

### The guest's order link

Guests have no account to sign in to, so their order page opens through a **secure link**:

- The ticket email's **View Order Details** button uses this link
- The link is valid for **7 days**
- It only works exactly as sent. A shortened or edited link is refused

After 7 days the link stops working. The ticket itself is not affected.

### Setting a password (optional)

Once a paid guest order is complete, the order page offers **Keep your tickets in one place** with a **Set a password** button. Setting a password lets the buyer sign in later to see the ticket and event updates. It is optional. The ticket is issued and emailed whether or not they set one.

---

## Failed or Cancelled Payment

If the payment fails or the guest cancels at the payment page:

- No ticket is issued and no registration is created
- For a failed payment, the result page shows **Payment Failed** with a **Try Again** button that opens the order page
- The order is marked failed. To try again, the guest picks the ticket again on the event page and fills in the form

---

## When to Use It

| Situation | Recommended setting |
|-----------|---------------------|
| Free event with walk-ins | Quick registration on |
| Paid event promoted through ads or social media | Both switches on |
| Event selling ticket bundles or add-ons | Leave guest checkout off, or expect those buyers to sign in |
| Members-only tickets with verification | Either. Verified tickets always need an account |

---

## Next Steps

- [Set up ticket types](/docs/ticket-types) and their prices
- [Add custom fields](/docs/custom-fields) to the registration form
- [Set up payments](/docs/payment-setup) before selling paid tickets
- [Walk-in guide](/docs/guide-walk-in) for registering at the door
