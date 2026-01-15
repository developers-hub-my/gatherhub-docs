---
title: Managing Your Events
nextjs:
  metadata:
    title: Managing Your Events
    description: Learn how to manage, edit, clone, and archive events in GatherHub from the events dashboard.
---

The events dashboard is your central hub for creating, managing, and monitoring all your events. {% .lead %}

---

## Events Dashboard

Access your events from the main navigation by clicking **Events**.

### Dashboard Views

| View | Description |
|------|-------------|
| All Events | View all events in your organization |
| My Events | Events you created |
| Crew Events | Events where you're a crew member |
| Upcoming | Future events |
| Past | Completed events |
| Drafts | Unpublished events |

### Search and Filter

Find events quickly using:

- **Search** - Search by event title
- **Status Filter** - Draft, Published, Archived
- **Date Filter** - Filter by event date range
- **Sort** - Sort by date, title, or registration count

---

## Event Lifecycle

Events progress through several states:

```
Draft → Published → Check-In Open → Completed → Archived
```

| State | Description |
|-------|-------------|
| Draft | Event is being configured, not visible to public |
| Published | Event is live and accepting registrations |
| Check-In Open | Event day, check-in is active |
| Completed | Event has ended |
| Archived | Event is hidden from listings, data preserved |

---

## Editing Events

### Edit Event Details

1. Go to your event dashboard
2. Click **Settings** in the sidebar
3. Make your changes
4. Click **Save**

{% callout type="warning" title="Editing published events" %}
Some changes to published events may affect registered participants. Significant changes (like date or venue) should be communicated to participants.
{% /callout %}

### What Can Be Edited

| Setting | Editable After Publishing |
|---------|---------------------------|
| Title | Yes |
| Description | Yes |
| Dates | Yes (notify participants) |
| Location | Yes (notify participants) |
| Capacity | Yes |
| Ticket prices | Yes (affects new registrations only) |
| Custom fields | Limited (existing data preserved) |

---

## Cloning Events

Clone an existing event to reuse its configuration for recurring programs.

### How to Clone

1. Go to the event you want to clone
2. Click the **Actions** menu (three dots)
3. Select **Clone Event**
4. Choose what to include:

| Option | Description |
|--------|-------------|
| Event details | Title, description, settings |
| Ticket types | All ticket configurations |
| Custom fields | Registration form fields |
| Sessions | Event sessions (without participants) |
| Activities | Activities within sessions |
| Certificate settings | Certificate template configuration |

5. Set the new event dates
6. Click **Clone**

{% callout title="After cloning" %}
The cloned event is created in Draft mode. Review all settings and update the title and dates before publishing.
{% /callout %}

### Clone Use Cases

- **Recurring workshops** - Clone monthly training sessions
- **Annual conferences** - Reuse last year's event structure
- **Template events** - Create a base event to clone for similar programs

---

## Archiving Events

Archive completed events to keep your dashboard clean while preserving all data.

### How to Archive

1. Go to the completed event
2. Click **Settings**
3. Scroll to **Danger Zone**
4. Click **Archive Event**

### Archived Event Behavior

- Hidden from main event listings
- All data (participants, certificates, etc.) is preserved
- Can be viewed by filtering for archived events
- Can be unarchived if needed

---

## Event Actions

### Quick Actions

From the events list, hover over an event to access quick actions:

| Action | Description |
|--------|-------------|
| View | Open event dashboard |
| Edit | Go to event settings |
| Clone | Create a copy of the event |
| Share | Copy event URL |
| Archive | Hide from active listings |

### Event Dashboard Actions

| Action | Location |
|--------|----------|
| Publish/Unpublish | Event overview or settings |
| Clone | Actions menu |
| Export data | Reports section |
| Send email | Communication section |
| Archive | Settings > Danger Zone |
| Delete | Settings > Danger Zone |

---

## Event Metrics

The event overview shows key metrics:

| Metric | Description |
|--------|-------------|
| Total Registrations | Number of registered participants |
| Check-In Rate | Percentage of participants checked in |
| Revenue | Total payments collected |
| Capacity | Registration vs. capacity percentage |

### Real-Time Updates

During live events, the dashboard updates in real-time:

- Check-in counter
- Session attendance
- Activity participation

---

## Bulk Operations

Perform actions on multiple events:

1. Select events using checkboxes
2. Click the bulk action menu
3. Choose an action:
   - Archive selected
   - Export selected
   - Delete selected (with confirmation)

---

## Event Permissions

Who can manage events:

| Role | Create | Edit | Delete | Clone |
|------|--------|------|--------|-------|
| Organization Admin | Yes | All events | All events | All events |
| Organization Member | Yes | Own events | Own events | Own events |
| Event Crew | No | Based on permissions | No | No |

See [Crew Permissions](/docs/crew-permissions) for crew-level access control.

---

## Best Practices

### Before the Event

- Publish event at least 2-4 weeks before the date
- Set up all ticket types and pricing
- Configure registration form with required fields
- Test the registration flow yourself
- Set up payment methods (for paid events)
- Prepare certificate template

### During the Event

- Monitor check-in from the dashboard
- Have backup check-in methods ready
- Keep track of attendance by session

### After the Event

- Generate certificates for qualifying participants
- Export attendance and participant data
- Send follow-up communication
- Review event analytics
- Archive the event

---

## Next Steps

- [Configure event settings](/docs/event-settings) in detail
- [Set up sessions and activities](/docs/sessions-activities)
- [Learn about check-in](/docs/checkin-overview) for event day
- [Generate certificates](/docs/generating-certificates) post-event
