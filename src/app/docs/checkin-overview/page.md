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
- **Mobile-Friendly** - Works on any device with a camera
- **Offline Support** - Continue checking in during connectivity issues

---

## Check-In Methods

### QR Code Scanning

Primary check-in method:

1. Participant shows their QR code (from email or app)
2. Staff scans with device camera
3. System validates and records attendance
4. Confirmation displayed

### Manual Search

For participants without QR code:

1. Search by name or email
2. Select participant from results
3. Click to check in
4. Confirmation displayed

### Self Check-In

If enabled, participants can:

1. Scan event QR code displayed at venue
2. Enter their ticket number
3. Confirm their identity
4. Check themselves in

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
- Registration is confirmed
- Not already checked in (unless re-entry allowed)
- Within check-in window

---

## Enabling Check-In

### Check-In Settings

1. Go to event **Settings**
2. Click **Check-In Settings**
3. Configure options:

| Setting | Description |
|---------|-------------|
| Check-In Opens | When check-in starts |
| Check-In Closes | When check-in ends |
| Session Check-In | Enable per-session tracking |
| Activity Check-In | Enable per-activity tracking |
| Self Check-In | Allow participants to self-check |
| Re-entry | Allow multiple check-ins |

### Recommended Settings

| Event Type | Recommendation |
|------------|----------------|
| Single-day workshop | Open 30 min before, close at end |
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
- Internet connection (or offline mode)
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
4. Add manually if needed

### Already Checked In

Options:

- Remind participant they're already checked in
- Enable re-entry for multiple check-ins
- Note for event with sessions

### Invalid QR Code

1. Try manual search
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
- [Track attendance](/docs/attendance-tracking) at multiple levels
- [Monitor check-in](/docs/checkin-dashboard) in real-time
