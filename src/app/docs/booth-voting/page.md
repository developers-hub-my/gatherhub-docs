---
title: Vote (People's Choice)
nextjs:
  metadata:
    title: Vote (People's Choice)
    description: Let visitors scan a booth QR and vote for the exhibitors they like. Set up Vote, add exhibitors with categories, and see what visitors see.
---

Run a People's Choice award at a showcase, expo, hackathon or bazaar. Each booth gets its own QR. Visitors scan it with their phone camera and tap **Vote for this booth**. No app to install. {% .lead %}

---

## How It Works

| Step | Who | What happens |
|---|---|---|
| 1 | Organiser | Turns on **Vote** and adds the exhibitors |
| 2 | Organiser | Prints the booth QR posters, or sends each booth its own ([Booth QR Posters & Signage](/docs/print-signage)) |
| 3 | Visitor | Scans a booth QR and votes, one vote per booth |
| 4 | Organiser and crew | Watch the results live and show them on the big screen ([Vote Results & Presenting](/docs/booth-voting-results)) |

{% callout title="Where to find it" %}
Open your event, then **Run → Vote**. Exhibitors are under **Grow → Exhibitors**. In **Simple** sidebar mode both are under **More tools**. Click **Show all tools (advanced)** at the bottom of the sidebar to list them in their groups.
{% /callout %}

---

## Step 1: Turn On Vote

1. Open your event and go to **Run → Vote**
2. Click the **Settings** tab
3. Switch on the toggle in the **Vote settings** card
4. Set the **Award title**. The default is **People's Choice**
5. Optionally set **Voting opens** and **Voting closes**. Leave them blank to open now and never close
6. Click **Save settings**

{% figure src="/images/features/vote-01-settings.jpg" alt="Vote page, Settings tab, with the voting switch on, the award title People's Choice, the voting window and the Who can vote switches" caption="Run → Vote → Settings." /%}

The badge next to the **Vote** heading shows the status: **Off**, **Scheduled**, **Open** or **Closed**.

### Vote settings

| Setting | What it does | Default |
|---|---|---|
| **Checked-in visitors only** | Only people checked in at the event can vote. Off lets every registered participant vote | **On** |
| **Block votes for own booth** | Exhibitor team members can't vote for their own booth | On |
| **Limit votes per visitor** | Caps how many booths one visitor can vote for (1–100). Off: one vote per booth, as many booths as they like | Off |
| **Let visitors change their votes** | Visitors can remove a vote while voting is open | On |
| **Show live results to visitors** | Publishes the public leaderboard. Off keeps the ranking hidden until you reveal it, so early leaders don't snowball | Off |

{% callout title="Checked-in visitors only is on by default" type="warning" %}
Visitors who registered but were never scanned in see **Check in first** when they try to vote. Check people in at the entrance, or switch this setting off if your event has no check-in.
{% /callout %}

---

## Step 2: Add Exhibitors

Go to **Grow → Exhibitors**. The page shows totals, category filter chips and the list of exhibitors.

{% figure src="/images/features/vote-03-exhibitors.jpg" alt="Exhibitors page with stats, category chips, the quick add row and a list of 12 exhibitors" caption="Grow → Exhibitors." /%}

There are three ways to add exhibitors:

| Way | How |
|---|---|
| **Quick add** | Type the name and **Booth no.** (for example A-01), then press Enter. Add contact details later from the row menu |
| **Full form** | Click **Full form** for every field: name, booth number, category, description, website, logo, contact name, email and phone |
| **Bulk import** | Click **Bulk import**, paste one exhibitor per line, click **Preview**, then import. Or **Upload CSV** |

### Bulk import format

Paste one line per exhibitor, straight from Excel or Google Sheets:

```text
A-01, EcoBin Smart Recycling, pic@ecobin.my, #Project
B-02, Durian Delight, , #Food & Beverage
```

Only the name is required. The category goes last and starts with `#`. A category that doesn't exist yet is created for you. Names already in the event are skipped.

{% figure src="/images/features/vote-04-bulk-import.jpg" alt="Bulk import exhibitors modal with a text box for pasting one exhibitor per line" caption="Bulk import: paste, preview, import." /%}

A CSV file uses the headers `name, booth_number, contact_name, contact_email, description, category`.

### The booth PIC

The **PIC** (person in charge) of a booth is its contact name, email and phone, plus any exhibitor staff you invited. GatherHub sends the booth QR poster to the PIC. A booth with no phone and no email can't be sent its QR. The Vote **Overview** tab counts these as **Booths without a PIC contact**.

### Categories

Every event starts with five categories: **Project, Startup, Product, Food & Beverage, Art & Design**. Click **Categories** on the Exhibitors page to add, rename, reorder or delete them.

{% figure src="/images/features/vote-05-categories.jpg" alt="Exhibitor categories modal listing the five default categories" caption="Categories group exhibitors and give a winner per category." /%}

Categories are used for the filter chips, the public booth directory and **Winners by category** in the results.

### Bulk actions

Tick exhibitors to **Activate**, **Deactivate**, **Send invites**, **Set category…**, **Clear category** or **Delete** them. Inactive exhibitors are hidden from the booth directory and don't take votes.

---

## Step 3: Check the Overview

The **Overview** tab shows booths, votes cast, voters and booths without a PIC contact. Once votes come in it also shows the top 5.

{% figure src="/images/features/vote-02-overview.jpg" alt="Vote Overview tab with booth, vote and voter counts and the top 5" caption="Run → Vote → Overview." /%}

---

## What Visitors See

### 1. Scan the booth QR

The visitor points their phone camera at the booth poster. The booth page opens, with no login needed. They tap **Vote for this booth**.

{% figure src="/images/features/vote-30-visitor-booth.jpg" alt="Booth vote page for Batik Generator AI, booth B-01, with the Vote for this booth button" caption="One tap to vote." width=380 /%}

### 2. Say who is voting (first booth only)

A visitor who isn't signed in sees **Who's voting?** They can **Log in**, or type the **Email you registered with** and tap **Continue**.

{% figure src="/images/features/vote-31-whos-voting.jpg" alt="Who's voting sheet with a Log in button and an email field for people without an account" caption="Guests vote with the email they registered with." width=380 /%}

If the email isn't registered for the event and [Quick registration](/docs/quick-registration) is on, the visitor can register on the spot with their name and phone, then vote. The phone remembers the visitor for 30 days, so the next booth is one tap.

### 3. Vote counted

{% figure src="/images/features/vote-32-vote-counted.jpg" alt="Vote counted screen saying Batik Generator AI has your vote for People's Choice" caption="Then on to the next booth." width=380 /%}

### Messages visitors may see

| Message | Why |
|---|---|
| **Check in first** | **Checked-in visitors only** is on and the visitor hasn't been scanned in |
| **You already voted for {booth}** | One vote per booth. **Remove my vote** shows when changes are allowed |
| **All votes used** | **Limit votes per visitor** is on and they used them all |
| **Voting hasn't opened yet** / **Voting has closed** | Outside the voting window |
| **This is your own booth** | **Block votes for own booth** is on |
| **QR not recognised** | The booth QR was reset. Reprint the poster |

{% figure src="/images/features/vote-33-check-in-first.jpg" alt="Check in first message: voting opens once you're checked in" caption="What a registered visitor sees before being checked in." width=380 /%}

Signed-in visitors also get **My votes**, a list of their votes with a **Scan booth QR** button, and a **Booth voting** card on the event home in the [attendee app](/docs/pwa-attendee).

{% callout title="Guest voting and email" %}
Anyone who knows a registered attendee's email could vote as them. **Checked-in visitors only** is the strongest safeguard. Repeated attempts on one email are limited to 5 per hour.
{% /callout %}

---

## Next Steps

- [Print the booth QR posters and event-day signage](/docs/print-signage)
- [Watch the results and present them](/docs/booth-voting-results)
