---
title: Using the App as Crew
nextjs:
  metadata:
    title: Using the GatherHub App as Crew
    description: Run event day from your phone with the GatherHub crew app — scan at the gate, sessions, activities and kit, look up guests, moderate Q&A and polls, and handle the help desk.
---

The crew view of the GatherHub app is made for working at the event: scanning guests comes first, and everything else is one tap away. {% .lead %}

---

## Who can use it

You get the crew view if you created the event, you're on the event's crew, or you're an owner or admin of its organization. Tap **Crew** in the top bar to switch over. What you can do inside depends on your [crew role and permissions](/docs/crew-permissions). Pages you aren't allowed to use don't appear.

---

## Pick an event

The crew start page lists the events you help run. Events happening now show how many people are in.

{% figure src="/images/pwa/crew-01-event-picker.png" alt="Crew event picker with a live event and its headcount" caption="Pick the event you're working on." width=300 /%}

Opening an event takes you straight to **Scan** if you're allowed to check people in. Otherwise you land on **Live**.

---

## The tabs

| Tab | What's in it |
|-----|--------------|
| **Guests** | Guest search and the guest details panel; Certificates (if you can issue them) |
| **Sessions** | Sessions and Activities, each with its own scanner |
| **Scan** (centre) | The scanner, with four modes: Gate, Session, Activity, Kit |
| **Live** | Now, Stats, Q&A, Polls, Surveys |
| **More** | A panel with the help desk and phone tools |

---

## Scan

Buttons at the top of the scanner switch between four modes. Session, Activity and Kit appear only when the event uses them.

| Mode | Use it for |
|------|------------|
| **Gate** | Main entrance check-in |
| **Session** | Checking people into a session room |
| **Activity** | Recording participation in an activity |
| **Kit** | Handing out kit items |

### Gate

1. Choose where you're standing under **Scanning at**: **All gates** or a named gate.
2. Point the camera at the guest's ticket QR. The app accepts the QR from the emailed ticket and from the attendee app.
3. Read the result, then scan the next guest.

The counter at the top shows how many guests are in and the check-in percentage. If the camera can't read a code, use **Type code** to enter the ticket code, or **Find guest** to search by name.

{% figure src="/images/pwa/crew-03-scan-gate.png" alt="Gate scanner with a gate picker, check-in counter, camera view and Type code and Find guest buttons" caption="Gate mode: pick your gate, then scan." width=300 /%}

### Gate results

Each result shows an icon and a short word, with the reason underneath, so you don't have to rely on colour.

| Result | Meaning | What to do |
|--------|---------|------------|
| **Checked in** | The guest is in | Welcome them |
| **Wrong gate** | The ticket is for another gate | Send the guest to the right gate |
| **Already in** | The ticket was already checked in; the earlier time is shown | Check the person matches the ticket |
| **Ticket cancelled** | The ticket was cancelled; the order number is shown | Send the guest to the help desk |
| **Ticket not found** | The code doesn't match any ticket for this event | Check they're at the right event, or use **Find guest** |
| **Not admitted** | The ticket can't be used for another reason | Read the reason and send them to the help desk |

When the guest has a check-in or profile photo, it appears with their name, ticket type and ticket number so you can confirm who they are.

### Session

Open **Sessions**, pick a session, and scan. A room counter shows how many people are in against the room's capacity, the seats left, and the session time and room. Use **Search participants** if a code won't scan.

{% figure src="/images/pwa/crew-07-scan-session.png" alt="Session scanner with a room counter showing 12 of 200 in room and 188 seats left" caption="Session mode: the room counter fills as you scan." width=300 /%}

{% callout type="warning" title="The room counter doesn't stop scans" %}
The counter is for information. Scanning still works when the room is full, so keep an eye on the seats left.
{% /callout %}

### Activity

Open **Sessions**, switch to **Activities**, pick an activity, and scan. It works like Session mode.

### Kit

1. Scan the guest's registration QR, or tap **Search participants**.
2. The guest's kit checklist opens. Tap **Give** on each item you hand over.
3. Tap **Scan Next** for the next guest.

{% figure src="/images/pwa/crew-11-scan-kit.png" alt="Kit collection scanner" caption="Kit mode: scan, then give items from the checklist." width=300 /%}

To scan kit with no internet, choose the item first (**Choose item…**), then scan. See [Using the app without internet](/docs/pwa-offline).

---

## Guests

Search by name, email, phone or ticket code, and filter by **All**, **In** or **Not in**. Tap a guest to open their details panel.

The details panel shows:

- the guest's ticket type, email and check-in status
- **Check in now** or **Undo check-in**
- **Give kit**
- phone, ticket number, registration source and registration time
- each session and kit item with its status (for example Pending or Collected)
- their points

{% figure src="/images/pwa/crew-05-guests-person-sheet.png" alt="Guest details panel with Undo check-in, Give kit, ticket details, session and kit statuses" caption="The guest details panel: undo a check-in or give kit without scanning." width=300 /%}

Use **Undo check-in** when someone was checked in by mistake. Searching for guests needs internet.

### Certificates

If you can issue certificates, **Guests** also has a **Certificates** page for the event.

---

## Live

**Now** is a single screen for how the event is going:

- **In venue now** against the event's capacity
- **Checked in** percentage (checked in out of registered)
- arrivals in the **last 15 min**
- **Engagement**: questions waiting for approval, running polls and open surveys, each linking to its page

When sessions are running, it also shows **Sessions now**. The footer reminds you of your role at the event (for example Organizer).

{% figure src="/images/pwa/crew-02-live-now.png" alt="Live Now view with in-venue count, check-in percentage, recent arrivals and engagement list" caption="Live → Now: headcount, check-in rate and what needs attention." width=300 /%}

The strip at the top has the other live pages:

| Page | What you can do |
|------|-----------------|
| **Stats** | Check-in progress, session and activity attendance, recent check-ins, and (where your role allows) paid orders and revenue |
| **Q&A** | Open or pause submissions; **Approve** or **Reject** questions, **Pin** one, and **Answer** it. Filter by Pending, Live, Answered or Rejected |
| **Polls** | **Start** draft polls and **Close** running ones, and see votes and voters. Create polls in the web dashboard |
| **Surveys** | **Activate** draft surveys, **Close** or **Re-open** them, and see responses and average ratings |

Each session also has its own monitor screen, which shows how full the room is.

{% figure src="/images/pwa/crew-13-live-qa.png" alt="Q&A list with pending, live, answered and rejected filters" caption="Q&A moderation: approve, pin, answer or reject." width=300 /%}

---

## The More panel

{% figure src="/images/pwa/crew-90-more-sheet-open.png" alt="Crew More panel with Help desk and Device sections" caption="The crew More panel." width=300 /%}

### Help desk

Each item appears only if your role allows it.

| Item | What it's for |
|------|---------------|
| **Orders** | Look up an order by name, email or order ID, filter by status, and see the order's tickets and payment history |
| **Discount codes** | View and manage the event's discount codes |
| **Secret codes** | View and manage the event's secret codes |
| **Blast email** | Send an announcement (for example a room change) to **Everyone**, **Checked in** or **Not yet in**, now or scheduled, and see opens and clicks |
| **Online QR** | Create the event QR that attendees scan to check themselves in |

### Online check-in QR

1. Open **More → Online QR** and tap **New QR code**.
2. Add a description (for example "Start of event"), how many minutes it stays valid, and optional points.
3. Tap **Present** to show the QR full screen on a projector or a second screen.

While a QR is active you can **Extend 5 min** or **Deactivate** it. Attendees scan it from the attendee app's **Ticket → Check in** page. See [the attendee app](/docs/pwa-attendee#check-in-yourself).

### This phone

| Item | What it's for |
|------|---------------|
| **Sync centre** | Scans saved on this phone while there was no internet. See [Using the app without internet](/docs/pwa-offline#the-sync-centre) |
| **All events** | Back to the event picker |

---

## Next steps

- [Using the app without internet](/docs/pwa-offline)
- [Crew roles](/docs/crew-roles) and [permissions](/docs/crew-permissions)
- [Check-in overview](/docs/checkin-overview)
