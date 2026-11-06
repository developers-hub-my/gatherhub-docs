---
title: Team Pass (Guest Seats)
nextjs:
  metadata:
    title: Team Pass (Guest Seats)
    description: Sell one ticket that admits several people. The buyer pays once and names their guests at checkout or later, and each guest gets their own ticket.
---

A team pass is one ticket for several people. The buyer pays once and names their guests, at checkout or later. Each guest gets their own ticket and QR. {% .lead %}

---

## Create a Team Pass

1. Open your event and go to **Build → Ticket Types**
2. Click **Add Ticket Type**, or **Edit** on an existing one
3. Set **People per ticket** to more than 1 (up to 10)
4. Set the price for the whole pass
5. Save the ticket type

{% figure src="/images/features/teampass-02-people-per-ticket.jpg" alt="Ticket type form with the Capacity (seats) and People per ticket fields and their help text" caption="People per ticket above 1 makes a team pass." /%}

The ticket list shows the pass with **Team pass: 3 people** when a capacity is set.

{% figure src="/images/features/teampass-01-ticket-types.jpg" alt="Ticket Types list with a Team Pass (3 people) ticket at RM 120" caption="A three-person team pass in the ticket list." /%}

{% callout title="Capacity counts people" %}
**Capacity (seats)** counts people, not passes. A capacity of 30 on a 3-person pass sells 10 passes.
{% /callout %}

---

## Naming the Guests

| When | Who | Where |
|---|---|---|
| At checkout | Buyer | The registration panel shows **Your guests (optional)** with a name and email per guest. They can leave it blank |
| Later | Buyer | Attendee app → **Ticket** → **Your guests**. Fill in a name and email per seat and tap **Send** |
| Anytime | Organiser | **Sell → Orders** → open the order → **Guest seat · not named yet** → name, email, **Send** |

Each guest receives only their own ticket by email, plus an email to set a password for their account. In **Run → Participants**, the row menu has **Resend set-password link** and **Mark email verified**.

---

## Rules

| Rule | Detail |
|---|---|
| Price | Charged per pass, not per person |
| Empty seats | An unnamed seat has no QR and can't be scanned. It still holds its place in the capacity |
| Waitlist | Empty seats are not released to the waitlist |
| Refunds | Guest seats can't be refunded on their own |

---

## Next Steps

- [Setting up ticket types](/docs/ticket-types)
- [Orders and transactions](/docs/orders-transactions)
