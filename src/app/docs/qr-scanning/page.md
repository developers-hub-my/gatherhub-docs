---
title: QR Code Scanning
nextjs:
  metadata:
    title: QR Code Scanning
    description: How to use QR code scanning for event check-in in GatherHub.
---

QR code scanning provides the fastest and most reliable way to check in participants at your event. {% .lead %}

---

## How QR Codes Work

### Participant QR Codes

Each registered participant receives a unique QR code:

- Sent in confirmation email, with a PDF ticket attached
- Available in the [GatherHub app](/docs/pwa-attendee) under **Ticket**
- Can be displayed on mobile device, even without internet once saved
- Can be printed from the PDF ticket

### What's Encoded

The QR code contains a check-in link with the ticket's unique, random QR ID. The ticket itself also has a **Ticket Number** that crew can type in if the QR won't scan.

---

## Accessing the Scanner

### From Event Dashboard

1. Go to your event dashboard
2. Click **On-site Check-In** in the event menu
3. Click **Scan QR Code with Camera**

### Direct URL

The check-in page is at `gatherhub.app/manage/events/<event-id>/check-in`, where `<event-id>` is the long ID in your event's dashboard address. Bookmark it from the event menu instead of typing it.

### Handheld Scanner

On the **On-site Check-In** page, turn on **Handheld scanner mode**, plug in a USB or Bluetooth barcode scanner, and scan. The page captures the scan and checks the ticket in automatically.

### On a Phone: the Crew View of the App

For scanning at the door, crew should use the GatherHub app on their phone:

1. [Install the app](/docs/pwa-overview#install-the-app) on Android or iPhone
2. Tap **Crew** in the top bar and pick your event
3. Tap **Scan**, the centre tab

The app scans at the gate, at sessions, at activities and for kit, and keeps scanning when the internet drops. See [Using the app as crew](/docs/pwa-crew).

{% figure src="/images/pwa/crew-03-scan-gate.png" alt="Gate scanner in the crew view of the app" caption="The gate scanner in the GatherHub app." width=300 /%}

---

## Using the Scanner

### Scanning Process

1. Click **Scan QR Code with Camera**
2. Allow camera access when prompted
3. Point camera at QR code
4. Hold steady until scanned
5. View confirmation

### Successful Scan

When scan succeeds:

- Green confirmation appears
- Participant name displayed
- Ticket details shown
- Check-in recorded

### Failed Scan

If scan fails:

- Red error message appears
- Reason displayed
- Scan again, or type the code under **Or enter manually** (**QR UUID** or **Ticket Number**)

---

## Camera Settings

### Granting Permission

First time using scanner:

1. Browser asks for camera access
2. Click "Allow"
3. Camera activates

### Which Camera

The scanner always uses the back camera. There is no front/back toggle.

### Troubleshooting Camera

| Issue | Solution |
|-------|----------|
| No camera prompt | Check browser permissions |
| Black screen | Allow camera in device settings |
| Blurry image | Clean camera lens |
| Wrong camera | Use a device with a back camera |

---

## Scanning Tips

### For Best Results

- Hold device 6-12 inches from QR code
- Ensure QR code is well-lit
- Avoid shadows on code
- Keep both device and code steady
- Center QR code in viewfinder

### Challenging Conditions

| Condition | Solution |
|-----------|----------|
| Low light | Increase screen brightness |
| Glare on screen | Angle device differently |
| Damaged QR | Type the ticket number |
| Small QR code | Move closer or zoom |

---

## Scanner Interface

### Main Screen Elements

| Element | Description |
|---------|-------------|
| Total Tickets, Checked In, Pending | Live counts for the event |
| Check-in photo | Off, Optional or Required photo at check-in |
| Scan QR Code with Camera | Opens the camera scanner |
| Or enter manually | Check in by **QR UUID** or **Ticket Number** |
| Recent Check-Ins | The latest people checked in |

### After Successful Scan

| Element | Description |
|---------|-------------|
| Ticket Number | The ticket scanned |
| Ticket Type | Their ticket |
| Participant | Name and email |
| Check-in Time | When checked in |

---

## Handling Scan Results

### Confirmed Check-In

Normal flow:

1. Scan successful
2. Participant confirmed
3. Welcome them
4. Tap **Scan Next** for more scans

{% figure src="/images/guides/27-gate-success.jpg" alt="Green Checked in result with the participant, ticket number and Scan Next" caption="Checked in." width=300 /%}

### Already Checked In

If participant scans again:

- **Ticket already checked in.** shows
- Original check-in time displayed
- They are not checked in twice. There is no re-entry option

### Invalid Ticket

If ticket is not valid:

- Error message explains why
- Common reasons:
  - Wrong event (**Ticket not found for this event.**)
  - Cancelled registration (**Ticket has been cancelled.**)
  - Not yet paid (**Ticket not paid. Please complete payment first.**)
  - Too early (**Check-in is not open yet.** Crew can scan from 60 minutes before the start)
  - Wrong gate, if you use **Gates**
- Direct to registration desk

---

## Batch Scanning

### High-Volume Events

For events with many arrivals:

1. Set up multiple scan stations
2. Use separate devices
3. All sync to same dashboard
4. Consider queuing systems

### Speed Tips

- Keep scanner ready between scans
- Position scanners at entry points
- Have manual backup ready
- Pre-assign staff to stations

---

## Offline Mode

### When Offline

Only the scanner in the **GatherHub app** (crew view) keeps working without internet. The check-in page in the dashboard on a computer needs a connection.

In the app, if the internet drops:

- Camera scans keep working and are saved on the phone
- A badge in the top bar shows how many scans are waiting
- Saved scans are sent automatically when the internet comes back
- Each scan keeps the time it was actually made

### Offline Limitations

- Tickets can't be checked at the moment of scanning, so "Wrong gate" or "Ticket cancelled" only shows up later, in the app's **Sync centre**
- Searching by name and typing a code need internet
- Dashboard numbers update only after scans are sent

A guest scanned on two phones is counted once. It doesn't create a duplicate check-in.

### Returning Online

1. The app notices the connection is back
2. Saved scans are sent automatically
3. Anything GatherHub didn't accept appears in the **Sync centre**, where you can retry or discard it

See [Using the app without internet](/docs/pwa-offline) for details.

---

## Security Considerations

### QR Code Security

- Each QR code is unique
- Uses a random ID, not a running number
- Cannot be easily guessed
- Logged when scanned

### Preventing Fraud

- Check participant identity if suspicious
- Look for obvious reproductions
- Monitor for multiple scan attempts
- Report suspicious activity

---

## Device Recommendations

### Best Devices

| Device | Notes |
|--------|-------|
| Modern smartphone | Best camera quality |
| Tablet | Larger screen for visibility |
| USB / Bluetooth barcode scanner | For high-volume events, with **Handheld scanner mode** |

### Browser Support

| Browser | Support |
|---------|---------|
| Chrome | Excellent |
| Safari | Good |
| Firefox | Good |
| Edge | Good |

---

## Troubleshooting

### QR code won't scan

1. Check lighting conditions
2. Clean camera lens
3. Try different angle
4. Move closer/further
5. Type the ticket number under **Or enter manually**

### Camera not working

1. Check browser permissions
2. Restart browser
3. Try different browser
4. Restart device

### Scans not saving

1. Check internet connection
2. Verify logged in
3. Refresh page
4. In the app, open **More → Sync centre** to see scans waiting to be sent

---

## Next Steps

- [Use the app as crew](/docs/pwa-crew) for scanning on a phone
- [Track attendance](/docs/attendance-tracking) at multiple levels
- [Monitor check-in dashboard](/docs/checkin-dashboard)
- [Generate certificates](/docs/generating-certificates) based on attendance
