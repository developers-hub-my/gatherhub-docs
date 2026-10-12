---
title: Check-In Overview
nextjs:
  metadata:
    title: Check-In Overview
    description: Introduction to GatherHub's check-in system for tracking event attendance.
---

GatherHub's check-in system helps you track attendance efficiently using QR codes, providing real-time visibility into who has arrived at your event. {% .lead %}

---

## Check-In System Features

- **QR Code Scanning** - Fast, contactless check-in
- **Multi-Level Tracking** - Event, session, and activity attendance
- **Real-Time Dashboard** - Live attendance monitoring
- **Phone App for Crew** - Scan with the [GatherHub app](/docs/pwa-crew) on any phone with a camera
- **Works Without Internet** - Camera scans in the app are saved and sent when the connection returns ([details](/docs/pwa-offline))

---

## Check-In Methods

### QR Code Scanning

Primary check-in method:

1. Participant shows their QR code (from email or app)
2. Staff scans with device camera
3. System validates and records attendance
4. Confirmation displayed

### Manual Search

For participants without QR code, in the crew view of the [GatherHub app](/docs/pwa-crew):

1. Open **Guests** (or tap **Find guest** on the scanner)
2. Search by name, email, phone or ticket code
3. Select participant from results
4. Tap **Check in now**

On the dashboard's **On-site Check-In** page, type the **Ticket Number** or **QR UUID** under **Or enter manually** instead.

### Self Check-In

If enabled, participants check themselves in from the GatherHub app:

1. Open the event, tap **Ticket**, then **Check in**
2. Scan the event QR code shown at the venue, or enter the code you share
3. Fill in any details the event still needs
4. Take a photo, if the event requires one

{% figure src="/images/guides/14-online-qr-present.jpg" alt="Online QR on a phone with an Active badge, the QR and the 6-letter code" caption="The Online QR, shown by crew." width=380 /%}

Crew create the event QR code in the app under **More → Online QR**. Self check-in needs internet. See [Using the app as an attendee](/docs/pwa-attendee#check-in-yourself).

---

## Check-In Levels

### Event-Level Check-In

Track overall event attendance:

- Single check-in for entire event
- Best for simple, single-session events
- Provides basic attendance count

### Session-Level Check-In

Track attendance per session:

- Separate check-in for each session
- Useful for multi-day or multi-track events
- See who attended which sessions

### Activity-Level Check-In

Track participation in specific activities:

- Most granular tracking
- Perfect for workshops with limited capacity
- Track completion for certification

---

## Check-In Flow

### Standard Flow

```
Participant Arrives
        ↓
    Show QR Code
        ↓
    Staff Scans
        ↓
System Validates
        ↓
   ✓ Checked In
        ↓
Confirmation Shown
```

### Validation Checks

When scanning, system verifies:

- Valid ticket for this event
- Ticket is paid and not cancelled
- Not already checked in (there is no re-entry option)
- Within check-in window (from 60 minutes before the start until 1 day after the end)
- Right gate, if you use **Gates**

---

## Enabling Check-In

### Check-In Settings

Event check-in is on for every published event. There is no single check-in settings page. The options live here:

| Setting | Where | Description |
|---------|-------|-------------|
| Check-in window | Automatic | From 60 minutes before the start until 1 day after the end |
| Session Check-In | **Features** > **Event Sessions** | Enable per-session tracking |
| Activity Check-In | **Features** > **Event Activities** | Enable per-activity tracking |
| Self Check-In | **Online QR Check-In**, or **More → Online QR** in the app | Show a QR participants scan to check themselves in |
| Check-in photo | **On-site Check-In** | Off, Optional or Required |
| Gates | **Gates** | Limit which ticket types can enter at each gate |

### Recommended Settings

| Event Type | Recommendation |
|------------|----------------|
| Single-day workshop | Event check-in only. Crew start scanning when the window opens |
| Multi-day conference | Enable session-level check-in |
| Training with certification | Enable activity-level check-in |

---

## Check-In Equipment

### Recommended Setup

| Equipment | Purpose |
|-----------|---------|
| Smartphone/Tablet | Primary scanning device |
| Laptop | Dashboard monitoring |
| Backup phone | Secondary scanner |
| Portable charger | Keep devices powered |

### Device Requirements

- Camera for QR scanning
- Internet connection (the crew view of the app keeps camera scans when the connection drops)
- Modern web browser
- Screen visible in lighting conditions

---

## Staff Preparation

### Before the Event

- Test check-in system
- Train check-in staff
- Prepare backup procedures
- Charge all devices
- Print backup participant list

### On Event Day

- Access check-in screen
- Verify internet connection
- Test scan first arrival
- Monitor dashboard

---

## Handling Special Cases

### Participant Not Found

1. Verify correct event
2. Search by alternative details
3. Check registration status
4. Add them under **Participants** if needed

### Already Checked In

Options:

- Remind participant they're already checked in
- Let them through. A second scan doesn't create another check-in
- For events with sessions, scan them at the session too. Session check-in is separate from the gate

### Invalid QR Code

1. Search for them in **Guests**
2. Verify participant identity
3. Check for registration issues
4. Contact registration desk

---

## Check-In Best Practices

### Efficiency

- Have dedicated check-in stations
- Provide clear signage
- Use multiple scanners for high volume
- Prepare for queues at peak times

### Participant Experience

- Keep check-in process quick
- Have help available for issues
- Provide event information after check-in
- Consider welcome messages

### Data Quality

- Ensure every attendee checks in
- Track no-shows for planning
- Use data for certificates
- Review patterns for improvements

---

## Next Steps

- [Learn QR code scanning](/docs/qr-scanning) in detail
- [Use the app as crew](/docs/pwa-crew) on event day
- [Track attendance](/docs/attendance-tracking) at multiple levels
- [Monitor check-in](/docs/checkin-dashboard) in real-time
