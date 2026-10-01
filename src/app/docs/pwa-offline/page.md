---
title: Using the App Without Internet
nextjs:
  metadata:
    title: Using the GatherHub App Without Internet
    description: What the GatherHub app can do with weak or no signal, how crew scans are saved and sent later, and how attendees keep their ticket on their phone.
---

Venues often have weak signal. The GatherHub app lets crew keep scanning and lets attendees keep their ticket on screen when the internet drops. When the connection comes back, the app catches up by itself. {% .lead %}

---

## What works without internet

| Works without internet | Needs internet |
|------------------------|----------------|
| Crew scanning with the camera, in all four modes: Gate, Session, Activity and Kit | Searching for guests (**Find guest**, **Search participants**, the Guests tab) and typing a ticket code |
| An attendee's ticket and QR code, once saved on the phone | Attendees checking themselves in with the event QR or a code |
| The "you're offline" pages for attendees and crew | Voting in polls, asking questions, answering surveys |
| | Live numbers, Q&A and poll control, and the help desk |

{% callout type="warning" title="Only camera scans are saved for later" %}
With no internet, crew must scan the QR code with the camera. Searching by name and typing a code won't work until you're back online. Attendees' votes and questions aren't saved for later either.
{% /callout %}

---

## How crew scans are saved and sent

1. When there's no internet, each camera scan is **saved on the phone**. A message tells you: "Saved offline — will sync automatically", with how many scans are waiting.
2. If you scan the same code twice within 3 seconds, it's only saved once.
3. When the internet comes back, the app sends the saved scans to GatherHub. It tries:
   - as soon as the phone is back online,
   - every 30 seconds while scans are waiting,
   - whenever you open or reload the app,
   - and, on Android phones, when the phone gets its signal back while the app is still open in the background.
4. Each scan keeps the time you actually scanned it, not the time it was sent.
5. If a guest was already checked in (for example, scanned on two phones), the scan simply counts as done. It isn't an error.

A message tells you when scans have been sent, and warns you if some need your attention.

### Kit scans without internet

In Kit mode, choose the item first (**Choose item…**), then scan. The app needs to know what you're handing out before it can save the scan.

{% callout title="Gate results without internet" %}
With no internet, the app can't check the ticket with GatherHub, so you won't see "Wrong gate", "Already in" or "Ticket cancelled" at the door. Any problems show up later, when the scans are sent, in the Sync centre.
{% /callout %}

---

## The waiting-scans badge

A small badge appears in the top bar when you have no internet, or when scans are waiting to be sent. It shows how many are waiting. In the crew view, tap it to open the Sync centre. When you're online and nothing is waiting, the badge disappears.

---

## The Sync centre

Open it from **More → Sync centre**, or tap the waiting-scans badge.

{% figure src="/images/pwa/crew-23-sync-centre.png" alt="Sync centre showing online status, zero scans waiting to sync and zero needing attention" caption="The Sync centre when everything has been sent." width=300 /%}

| Part | What it shows |
|------|---------------|
| Status | **Online** or **Offline**. When online, waiting scans are sent every 30 seconds |
| **Waiting to sync** | Scans saved on this phone that haven't been sent yet |
| **Needs attention** | Scans GatherHub didn't accept |
| **Sync now** | Send waiting scans right away |
| **Reload** | Refresh the list |

Each scan in the list shows its type (Gate, Session, Activity or Kit), the guest or item, when it was scanned, and why it wasn't accepted.

### Fixing scans that need attention

GatherHub may not accept a scan when, for example:

- the person isn't registered for this event,
- your crew role doesn't allow that kind of scan,
- or the check-in wasn't allowed for another reason, which is shown.

For each one, choose:

| Button | Use it when |
|--------|-------------|
| **Find guest** | You want to look the person up and check them in by hand |
| **Retry** | The problem is fixed (for example, your role was changed). Needs internet |
| **Discard** | The scan shouldn't count. It won't be recorded |

If scans couldn't be sent because you were logged out, or because of a problem on GatherHub's side, they stay waiting and the app tries again by itself. If you were logged out, log in again so they can be sent.

{% callout title="Keep the app open until scans are sent" %}
On every phone, saved scans are only sent while the app is open (on screen or in the background). Don't close the app until **Waiting to sync** shows 0.
{% /callout %}

{% callout type="warning" title="Don't log out with scans waiting" %}
Waiting scans are only on this phone. Before you hand the phone to someone else or clear the browser, check that **Waiting to sync** shows 0.
{% /callout %}

---

## Your ticket without internet

Your ticket is saved on your phone when you open the event's **Home** while you have internet. After that, the **Ticket** tab opens even with no signal and shows your QR code.

If you open a page that isn't saved, the app shows a "you're offline" page instead. It lists your tickets, marks each one **Saved** or **Not saved**, and lets you open the saved ones.

{% figure src="/images/pwa/attendee-35-offline-page.png" alt="Attendee offline page listing tickets marked Saved or Not saved, with a Reload button" caption="Saved tickets still open without internet." width=300 /%}

{% callout title="Tip for organizers" %}
In your reminder email, ask attendees to install the app and open the event once before they travel. That saves their ticket on their phone.
{% /callout %}

---

## The "you're offline" pages

| View | What you see when a page isn't saved |
|------|--------------------------------------|
| **Attendee** | Your tickets, which ones are saved, and a **Reload** button |
| **Crew** | The Sync centre, so you can keep track of saved scans |

When the internet comes back, the page says you're back online. Tap **Reload** to carry on.

---

## iPhone and iPad

- **Keep the app open to send scans.** iPhones don't get the extra background nudge Android phones get. Scans are sent while the app is open: when the internet comes back, every 30 seconds, or when you tap **Sync now**. Keep the app open until **Waiting to sync** shows 0.
- **When the start page changes.** If GatherHub changes the page the app opens on, remove the app from your home screen and add it again.
- **Install from Safari.** Other browsers on iPhone can't add the app to your home screen.

---

## Troubleshooting

### Scans stay in "Waiting to sync"

1. Check that the status says **Online**.
2. Tap **Sync now**.
3. If you were logged out, log in again.
4. On iPhone, keep the app open on screen until the number drops.

### A scan says "Needs attention"

Read the reason. Use **Find guest** to check the person in by hand, **Retry** once the problem is fixed, or **Discard** it.

### My ticket won't open without internet

The ticket wasn't saved before you lost signal. When you're back online, open the event's Home once and try again. Until then, give your name to the crew so they can find you once they're online.

### The camera says "Starting camera…" and nothing happens

Allow GatherHub to use the camera in your browser or phone settings, then reload. While you have internet, you can use **Type code** or **Find guest** instead.

---

## Next steps

- [Using the app as crew](/docs/pwa-crew)
- [Using the app as an attendee](/docs/pwa-attendee)
- [QR code scanning](/docs/qr-scanning)
