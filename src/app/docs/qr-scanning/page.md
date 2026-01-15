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

- Sent in confirmation email
- Available in participant portal
- Can be displayed on mobile device
- Can be printed from ticket

### What's Encoded

The QR code contains:

- Ticket identifier
- Verification hash
- Event reference

---

## Accessing the Scanner

### From Event Dashboard

1. Go to your event dashboard
2. Click **Check-In** in the sidebar
3. Scanner opens automatically

### Direct URL

Access check-in directly at `gatherhub.app/manage/events/123/check-in` (replacing 123 with your event ID).

### Mobile Access

- Bookmark the check-in page
- Add to home screen for quick access
- Works on iOS and Android

---

## Using the Scanner

### Scanning Process

1. Click **Scan QR Code** (if not auto-started)
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
- Options to retry or search manually

---

## Camera Settings

### Granting Permission

First time using scanner:

1. Browser asks for camera access
2. Click "Allow"
3. Camera activates

### Switching Cameras

On devices with multiple cameras:

1. Click camera toggle icon
2. Switch between front/back cameras
3. Select best camera for scanning

### Troubleshooting Camera

| Issue | Solution |
|-------|----------|
| No camera prompt | Check browser permissions |
| Black screen | Allow camera in device settings |
| Blurry image | Clean camera lens |
| Wrong camera | Switch to other camera |

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
| Damaged QR | Try manual search |
| Small QR code | Move closer or zoom |

---

## Scanner Interface

### Main Screen Elements

| Element | Description |
|---------|-------------|
| Camera viewfinder | Shows camera feed |
| Scan indicator | Frame showing scan area |
| Flash toggle | Turn on device flash |
| Camera switch | Toggle front/back camera |
| Manual search | Search without scanning |

### After Successful Scan

| Element | Description |
|---------|-------------|
| Participant name | Who was checked in |
| Ticket type | Their ticket |
| Check-in time | When checked in |
| Next scan | Button to continue |

---

## Handling Scan Results

### Confirmed Check-In

Normal flow:

1. Scan successful
2. Participant confirmed
3. Welcome them
4. Click "Next" for more scans

### Already Checked In

If participant scans again:

- Warning shows they're already checked in
- Original check-in time displayed
- Choose to allow re-entry or note

### Invalid Ticket

If ticket is not valid:

- Error message explains why
- Common reasons:
  - Wrong event
  - Cancelled registration
  - Not yet paid
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

If internet connection is lost:

- Scanner continues working
- Check-ins stored locally
- Syncs when connection restored
- Visual indicator shows offline status

### Offline Limitations

- Cannot verify against server
- May allow duplicate check-ins
- No real-time dashboard updates
- Requires sync before reports

### Returning Online

1. Connection restored automatically
2. Queued check-ins sync
3. Dashboard updates
4. Any conflicts flagged

---

## Security Considerations

### QR Code Security

- Each QR code is unique
- Contains verification hash
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
| Dedicated scanner | For high-volume events |

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
5. Use manual search

### Camera not working

1. Check browser permissions
2. Restart browser
3. Try different browser
4. Restart device

### Scans not saving

1. Check internet connection
2. Verify logged in
3. Refresh page
4. Check offline queue

---

## Next Steps

- [Track attendance](/docs/attendance-tracking) at multiple levels
- [Monitor check-in dashboard](/docs/checkin-dashboard)
- [Generate certificates](/docs/generating-certificates) based on attendance
