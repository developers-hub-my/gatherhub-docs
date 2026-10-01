---
title: Getting the App
nextjs:
  metadata:
    title: Getting the GatherHub App
    description: Install the GatherHub app on your Android phone or iPhone, and switch between the attendee view and the crew view.
---

GatherHub has an app for your phone. Attendees use it for their ticket, the agenda and check-in. Crew use the same app to scan guests and run the event day. {% .lead %}

---

## One app, two views

The GatherHub app is a web app you install from your browser (sometimes called a PWA). There's no app store and nothing to download. You add it to your home screen, and it opens full screen like any other app.

| View | Who uses it | What it's for |
|------|-------------|---------------|
| **Attendee view** | Everyone registered for an event | Today's plan, agenda, ticket and check-in, meeting people, polls and Q&A, rewards, certificates |
| **Crew view** | The event's creator, its crew, and the organization's owners and admins | Scanning guests at the door, sessions, activities and kit; looking up guests; watching the event live; Q&A and polls; the help desk |

Both views use the same look and the same sign-in. The app always opens in the attendee view.

{% quick-links %}

{% quick-link title="Using the app as an attendee" icon="presets" href="/docs/pwa-attendee" description="Home, Agenda, Ticket, Connect and More." /%}

{% quick-link title="Using the app as crew" icon="plugins" href="/docs/pwa-crew" description="Scanning, Guests, Sessions, Live and the help desk." /%}

{% quick-link title="Using the app without internet" icon="warning" href="/docs/pwa-offline" description="What works with no signal, and how saved scans are sent later." /%}

{% /quick-links %}

---

## Install the app

### Android (Chrome, Edge, Samsung Internet)

1. Open GatherHub in your browser and sign in.
2. Tap **Install** when the install message appears. You can also use the browser menu and choose **Install app** or **Add to Home screen**.
3. Confirm. The GatherHub icon appears on your home screen.

### iPhone and iPad (Safari)

1. Open GatherHub in **Safari** and sign in.
2. Tap the **Share** button.
3. Choose **Add to Home Screen**, then tap **Add**.

{% callout title="Install from Safari on iOS" %}
On iPhone and iPad, only Safari can add GatherHub to the home screen. If you opened the link in another app's built-in browser, open it in Safari first.
{% /callout %}

If you close the install message, it stays hidden on that phone for 30 days. You can still install the app from the browser menu at any time.

---

## The top bar

Every screen has the same bar at the top: a back button, the page title (usually the event name), the **Attendee | Crew** switch and your profile picture (avatar).

{% figure src="/images/pwa/attendee-91-account-menu-open.png" alt="Attendee home screen with the avatar menu open, showing Dashboard, My Stats, Leaderboard, Dark mode and Log Out" caption="The top bar, with the Attendee | Crew switch and the profile menu open." width=300 /%}

### Attendee | Crew switch

The switch appears only for people who help run an event:

- the person who created the event
- crew members of the event
- owners and admins of the event's organization

Everyone else sees only the attendee view, and the switch is hidden.

When you switch views while looking at an event, the app stays on that event if you're allowed there. For example, an organizer looking at an event's attendee Home who taps **Crew** lands on that same event's crew screens. If you aren't allowed there, you land on the start page of the other view instead.

### Avatar menu

Tap your profile picture to open the menu:

| Item | What it does |
|------|--------------|
| **Dashboard** | Opens the full GatherHub dashboard |
| **My Stats** | Your points, badges and activity across events |
| **Leaderboard** | The all-events leaderboard |
| **Dark mode** | Switches the app between light and dark colours |
| **Log out** | Signs you out and removes the app's saved pages from this phone |

---

## Updates

You never need to update the app yourself. The newest version loads the next time you open the app while connected to the internet.

{% callout type="warning" title="iPhone: when the start page changes" %}
An iPhone remembers which page the app opens on from the day you added it. If GatherHub changes that page, iPhone and iPad users need to remove the app from the home screen and add it again. Android phones pick up the change by themselves.
{% /callout %}

---

## What the app doesn't do (yet)

Setting up an event still happens in the GatherHub dashboard on a computer: creating events, tickets, sessions, certificate templates, polls and email campaigns. A few event-day tasks aren't in the app yet:

- **Registering walk-ins.** Add walk-in guests from the GatherHub dashboard. In the app, crew can only check in people who are already registered.
- **Everything else without internet.** Only camera scans by crew are saved for later. Searching for guests, voting and asking questions need internet. See [Using the app without internet](/docs/pwa-offline).

---

## Next steps

- [Using the app as an attendee](/docs/pwa-attendee)
- [Using the app as crew](/docs/pwa-crew)
- [Using the app without internet](/docs/pwa-offline)
