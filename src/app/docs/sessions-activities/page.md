---
title: Sessions and Activities
nextjs:
  metadata:
    title: Sessions and Activities
    description: Organize multi-track events with sessions and activities in GatherHub for complex event structures.
---

Organize complex events with sessions and activities to create multi-track schedules and track attendance at granular levels. {% .lead %}

---

## Understanding Sessions and Activities

### Sessions

Sessions are time-blocked segments of your event. Use sessions for:

- Multi-day events (Day 1, Day 2, etc.)
- Time blocks (Morning Session, Afternoon Session)
- Parallel tracks (Track A, Track B)

### Activities

Activities are specific items within sessions. Use activities for:

- Individual workshops or presentations
- Hands-on exercises
- Breakout discussions
- Networking segments

### Hierarchy

```
Event
├── Session 1 (e.g., "Day 1 - Morning")
│   ├── Activity 1 (e.g., "Opening Keynote")
│   ├── Activity 2 (e.g., "Workshop A")
│   └── Activity 3 (e.g., "Workshop B")
├── Session 2 (e.g., "Day 1 - Afternoon")
│   ├── Activity 4 (e.g., "Panel Discussion")
│   └── Activity 5 (e.g., "Networking")
└── Session 3 (e.g., "Day 2")
    └── Activity 6 (e.g., "Closing Ceremony")
```

---

## Creating Sessions

### Add a Session

1. Go to your event dashboard
2. Click **Sessions** in the sidebar
3. Click **Add Session**
4. Fill in the session details

### Session Properties

| Property | Required | Description |
|----------|----------|-------------|
| Title | Yes | Session name |
| Description | No | Session overview |
| Start Time | Yes | When the session begins |
| End Time | Yes | When the session ends |
| Location | No | Specific room or venue area |
| Capacity | No | Maximum participants for this session |

### Session Example

For a two-day conference:

| Session | Start Time | End Time |
|---------|------------|----------|
| Day 1 - Morning | 9:00 AM | 12:00 PM |
| Day 1 - Afternoon | 2:00 PM | 5:00 PM |
| Day 2 - Morning | 9:00 AM | 12:00 PM |
| Day 2 - Afternoon | 2:00 PM | 4:00 PM |

---

## Creating Activities

### Add an Activity

1. Go to the **Sessions** section
2. Select the session to add activities to
3. Click **Add Activity**
4. Fill in the activity details

### Activity Properties

| Property | Required | Description |
|----------|----------|-------------|
| Title | Yes | Activity name |
| Description | No | What happens in this activity |
| Start Time | No | Activity start (within session) |
| End Time | No | Activity end |
| Location | No | Specific room |
| Capacity | No | Maximum participants |
| Speaker | No | Assign a speaker to this activity |

### Activity Example

Within "Day 1 - Morning" session:

| Activity | Time | Speaker | Capacity |
|----------|------|---------|----------|
| Opening Keynote | 9:00 - 10:00 | Dr. Sarah Lee | All |
| Workshop: Marketing | 10:30 - 12:00 | John Smith | 30 |
| Workshop: Sales | 10:30 - 12:00 | Jane Doe | 30 |

---

## Participant Registration for Sessions

### Registration Options

Configure how participants register for sessions:

| Option | Description |
|--------|-------------|
| Auto-register for all | Participants are registered for all sessions |
| Choose sessions | Participants select which sessions to attend |
| Capacity-based | Sessions have limited spots |

### Session Selection During Registration

If session selection is enabled:

1. Participant fills out registration form
2. Available sessions are displayed
3. Participant selects their sessions
4. Confirmation shows selected sessions

{% callout title="Parallel sessions" %}
When sessions run at the same time, participants can only select one from each time slot.
{% /callout %}

---

## Session and Activity Check-In

### Multi-Level Attendance

Track attendance at different levels:

| Level | Description |
|-------|-------------|
| Event | Overall event attendance |
| Session | Attendance per session |
| Activity | Participation in specific activities |

### How It Works

1. **Event Check-In** - Participant arrives and checks in to the event
2. **Session Check-In** - Each session can have its own check-in
3. **Activity Check-In** - Track participation in individual activities

### Enable Session/Activity Check-In

1. Go to **Event Settings**
2. Under **Check-In Settings**, enable:
   - Session Check-In
   - Activity Check-In

---

## Managing Sessions

### Edit Sessions

1. Go to **Sessions**
2. Click on the session to edit
3. Modify details and save

### Reorder Sessions

Drag and drop sessions to reorder them in the event schedule.

### Delete Sessions

{% callout type="warning" title="Deleting sessions" %}
Deleting a session also removes all activities within it and any participant registrations for that session.
{% /callout %}

---

## Managing Activities

### Assign Speakers

Link activities to speakers from your speaker library:

1. Edit the activity
2. Select a speaker from the dropdown
3. Speaker details will appear on the event schedule

### Set Capacity Limits

Limit participation in popular activities:

1. Set the capacity for the activity
2. Participants can register until capacity is reached
3. Additional registrations are waitlisted or blocked

---

## Viewing the Schedule

### Participant View

Participants see their schedule in:

- Registration confirmation email
- Participant portal
- Event day check-in

### Organizer View

Organizers can view:

- Full event schedule grid
- Session attendance counts
- Activity registration lists

---

## Reports

### Session Reports

Export session-level data:

| Report | Content |
|--------|---------|
| Session Attendance | Check-in status per session |
| Session Registration | Who registered for each session |

### Activity Reports

Export activity-level data:

| Report | Content |
|--------|---------|
| Activity Participation | Check-in per activity |
| Activity Registration | Participants per activity |
| Speaker Schedule | Activities by speaker |

---

## Best Practices

### Session Design

- Keep session times consistent (e.g., 90-minute blocks)
- Allow buffer time between sessions for breaks
- Consider meal times in your schedule

### Activity Planning

- Don't overload sessions with too many activities
- Balance popular activities across time slots
- Prepare backup plans for speaker no-shows

### Capacity Management

- Set realistic capacity based on venue limits
- Monitor registration numbers before the event
- Have overflow plans for popular sessions

---

## Use Cases

### Conference with Tracks

```
Morning Session
├── Track A: Technical Workshop
├── Track B: Business Strategy
└── Track C: Networking

Afternoon Session
├── Track A: Advanced Technical
├── Track B: Leadership
└── Track C: Panel Discussion
```

### Training Program

```
Day 1
├── Introduction (all participants)
├── Module 1: Basics
└── Module 2: Intermediate

Day 2
├── Module 3: Advanced
├── Practical Exercise
└── Assessment
```

### Workshop Series

```
Session 1: Week 1
├── Theory Introduction
└── Hands-on Practice

Session 2: Week 2
├── Review
└── Project Work

Session 3: Week 3
├── Presentations
└── Certification
```

---

## Next Steps

- [Track attendance](/docs/attendance-tracking) at session and activity levels
- [Generate certificates](/docs/generating-certificates) based on session attendance
- [Set up speakers](/docs/speakers) to assign to activities
