---
title: Attendance Tracking
nextjs:
  metadata:
    title: Attendance Tracking
    description: Track attendance at event, session, and activity levels in GatherHub.
---

Track attendance at multiple levels to understand participation patterns and support features like certificate eligibility. {% .lead %}

---

## Attendance Levels

GatherHub tracks attendance at three levels:

| Level | Description | Use Case |
|-------|-------------|----------|
| Event | Overall event attendance | Simple events |
| Session | Per-session attendance | Multi-day events |
| Activity | Per-activity attendance | Workshops, certifications |

---

## Event-Level Attendance

### What It Tracks

- Did participant attend the event?
- When did they check in?
- Basic attendance record

### When to Use

- Single-day events
- Events without multiple tracks
- Basic attendance requirements

### How to View

1. Go to event dashboard
2. Click **Participants**
3. View Check-In column

---

## Session-Level Attendance

### What It Tracks

- Which sessions did participant attend?
- Check-in time for each session
- Attendance percentage across sessions

### When to Use

- Multi-day conferences
- Events with multiple tracks
- Training programs with modules

### Enabling Session Check-In

1. Go to **Event Settings**
2. Under **Check-In Settings**
3. Enable **Session Check-In**

### Checking In to Sessions

During the event:

1. Go to **Check-In**
2. Select the session
3. Scan participant QR code
4. Check-in recorded for that session

---

## Activity-Level Attendance

### What It Tracks

- Which activities did participant complete?
- Duration of participation
- Completion status

### When to Use

- Certification requirements
- CPD/CPE point tracking
- Detailed engagement analytics

### Enabling Activity Check-In

1. Go to **Event Settings**
2. Under **Check-In Settings**
3. Enable **Activity Check-In**

### Checking In to Activities

1. Go to **Check-In**
2. Select session, then activity
3. Scan participant QR code
4. Activity completion recorded

---

## Attendance Data

### Per Participant

View individual attendance:

1. Go to **Participants**
2. Click on participant name
3. View **Attendance** section

Shows:

- Event check-in status
- Sessions attended
- Activities completed
- Attendance percentage

### Event Summary

View overall attendance:

1. Go to event dashboard
2. View **Attendance** widget

Shows:

- Total checked in
- Check-in percentage
- Session breakdown
- Activity completion rates

---

## Attendance Percentage

### Calculation

Attendance percentage equals the number of sessions or activities attended divided by the total required, multiplied by 100.

### Configuration

Define which sessions/activities count:

| Setting | Description |
|---------|-------------|
| All sessions | Every session counts |
| Required sessions | Only marked sessions count |
| Minimum threshold | Required percentage to pass |

---

## Attendance Requirements

### For Certificates

Link attendance to certificates:

1. Go to **Certificates** > **Eligibility Rules**
2. Set attendance requirements:
   - Minimum check-in percentage
   - Required sessions
   - Required activities

### Example Requirements

| Requirement | Setting |
|-------------|---------|
| Minimum 80% attendance | Sessions: 80% |
| All mandatory sessions | Mark sessions as required |
| Complete all workshops | Activities: 100% |

---

## Real-Time Tracking

### Live Updates

During the event:

- Dashboard updates in real-time
- See check-ins as they happen
- Monitor session fill rates
- Track popular activities

### Alerts

Configure alerts for:

- Low attendance sessions
- Capacity reached
- VIP arrivals

---

## Attendance Reports

### Available Reports

| Report | Contents |
|--------|----------|
| Attendance Summary | Overview of all attendance |
| Session Report | Attendance by session |
| Activity Report | Attendance by activity |
| Participant Detail | Each participant's record |

### Exporting Data

1. Go to **Reports**
2. Select **Attendance**
3. Choose filters
4. Export to CSV/Excel

### Report Fields

| Field | Description |
|-------|-------------|
| Participant Name | Who attended |
| Event Check-In | Time of event check-in |
| Sessions Attended | List of sessions |
| Activities Completed | List of activities |
| Attendance % | Calculated percentage |

---

## No-Show Tracking

### Identifying No-Shows

Participants who registered but didn't attend:

1. Go to **Participants**
2. Filter by "Not Checked In"
3. View no-show list

### No-Show Analysis

| Metric | Description |
|--------|-------------|
| No-show rate | % of registered who didn't attend |
| By ticket type | Which tickets have higher no-shows |
| By registration date | Do early/late registrants differ |

### Reducing No-Shows

- Send reminder emails
- Require confirmation
- Use waitlist for cancellations
- Consider deposits for free events

---

## Manual Attendance Recording

### When Needed

- Scanner technical issues
- Offline check-in records
- Retroactive corrections

### How to Record

1. Go to **Participants**
2. Select participant
3. Click **Mark Attended**
4. Choose sessions/activities
5. Save

{% callout type="warning" title="Manual records" %}
Manual attendance records are flagged as "manually entered" in reports for audit purposes.
{% /callout %}

---

## Best Practices

### Before Event

- Configure check-in settings
- Set up sessions/activities
- Train check-in staff
- Test the system

### During Event

- Monitor dashboard
- Address issues quickly
- Track no-shows
- Adjust capacity if needed

### After Event

- Review attendance data
- Generate reports
- Process certificates
- Analyze patterns

---

## Troubleshooting

### Check-in not recording

1. Verify internet connection
2. Check offline queue
3. Try manual entry
4. Review error logs

### Wrong session recorded

1. Find participant record
2. Edit attendance
3. Correct session selection
4. Add note explaining change

### Missing attendance data

1. Check if check-in happened
2. Review offline sync status
3. Look for data in exports
4. Contact support

---

## Next Steps

- [Monitor the dashboard](/docs/checkin-dashboard) in real-time
- [Set up certificate eligibility](/docs/eligibility-rules) based on attendance
- [Generate attendance reports](/docs/attendance-reports)
