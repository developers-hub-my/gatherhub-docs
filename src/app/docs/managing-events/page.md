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

### What Events You See

The events dashboard shows all events you're involved with, regardless of organization:

| Relationship | Visibility |
|-------------|------------|
| Events you created | Always visible |
| Events in your organization | Always visible |
| Events you're crew on | Always visible (any organization) |

Each event shows its **organization name** so you can tell which organization it belongs to.

### Filtering Events

| Filter | Description |
|--------|-------------|
| All Events | Events you created, your org's events, and crew events |
| My Events | Only events you created |
| Crew Events | Only events where you're a crew member (not creator) |
| Status | Filter by Draft, Published, etc. |

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

### Clone vs. Templates

- **Clone** — duplicates an event with its data for a one-off copy
- **[Event Config Templates](/docs/event-templates)** — saves event structure as a reusable template for creating multiple events

### Clone Use Cases

- **Recurring workshops** — Clone monthly training sessions
- **Annual conferences** — Reuse last year's event structure

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
| Check-In | Go to check-in page |
| Clone | Create a copy of the event |
| Save as Template | Save event config as a reusable template |
| Publish/Unpublish | Toggle event visibility |
| Delete | Remove the event |

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
- [Save event as a template](/docs/event-templates) for reuse
- [Learn about check-in](/docs/checkin-overview) for event day
- [Generate certificates](/docs/generating-certificates) post-event
