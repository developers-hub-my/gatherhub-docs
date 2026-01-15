---
title: Event Settings
nextjs:
  metadata:
    title: Event Settings
    description: Configure event settings including dates, capacity, visibility, and registration options in GatherHub.
---

Configure your event settings to control how your event operates, from registration deadlines to check-in windows. {% .lead %}

---

## Accessing Event Settings

1. Go to your **Events** dashboard
2. Select the event you want to configure
3. Click **Settings** in the event sidebar

---

## General Settings

### Event Information

| Setting | Description |
|---------|-------------|
| Title | Event name displayed to participants |
| Slug | URL-friendly identifier (auto-generated, can be customized) |
| Description | Rich text event details |
| Category | Event type for organization |

### Event Dates

| Setting | Description |
|---------|-------------|
| Start Date/Time | When the event begins |
| End Date/Time | When the event ends |
| Timezone | Event timezone for scheduling |

{% callout title="Multi-day events" %}
For events spanning multiple days, set the start date to the first day and end date to the last day. Use sessions to organize each day's schedule.
{% /callout %}

---

## Registration Settings

### Registration Window

Control when participants can register:

| Setting | Description |
|---------|-------------|
| Registration Opens | Date and time registration becomes available |
| Registration Closes | Date and time registration ends |

{% callout type="note" title="Default behavior" %}
If not specified, registration opens immediately when the event is published and closes at the event start time.
{% /callout %}

### Capacity Settings

| Setting | Description |
|---------|-------------|
| Maximum Participants | Overall event capacity limit |
| Enable Waitlist | Allow registrations after capacity is reached |

When capacity is reached:
- New registrations are added to the waitlist
- Waitlisted participants are automatically notified when spots open
- You can manually promote waitlisted participants

### Registration Options

| Option | Description |
|--------|-------------|
| Require Approval | Registrations require manual approval before confirmation |
| Allow Modifications | Participants can edit their registration details |
| Allow Cancellations | Participants can cancel their own registrations |

---

## Check-In Settings

Configure when and how check-in operates:

### Check-In Window

| Setting | Description |
|---------|-------------|
| Check-In Opens | When check-in becomes available |
| Check-In Closes | When check-in ends |

{% callout title="Recommended settings" %}
Open check-in 30-60 minutes before the event starts. Close check-in at the event end time or shortly after.
{% /callout %}

### Check-In Options

| Option | Description |
|--------|-------------|
| Allow Self Check-In | Participants can check themselves in |
| Require QR Code | Only allow check-in via QR scanning |
| Session Check-In | Enable check-in at the session level |
| Activity Check-In | Enable check-in at the activity level |

---

## Visibility Settings

### Event Visibility

| Status | Description |
|--------|-------------|
| Draft | Event is hidden from public. Only visible to you and crew members. |
| Published | Event is visible and open for registration. |
| Archived | Event is hidden from listings but data is preserved. |

### Listing Options

| Option | Description |
|--------|-------------|
| Show on Organization Page | Display event on your public organization page |
| Allow Search Indexing | Allow search engines to index the event page |
| Featured Event | Highlight this event in your listings |

---

## Communication Settings

### Email Notifications

Configure automatic emails sent to participants:

| Email | When sent |
|-------|-----------|
| Registration Confirmation | Immediately after successful registration |
| Payment Confirmation | After payment is completed |
| Event Reminder | Before the event (configurable timing) |
| Check-In Confirmation | After participant checks in |
| Certificate Available | When certificate is ready for download |

### Reminder Settings

| Setting | Description |
|---------|-------------|
| Send Event Reminder | Enable/disable reminder emails |
| Reminder Timing | How long before the event to send (e.g., 1 day, 1 hour) |

---

## Advanced Settings

### Custom Fields

Add custom data collection for the event:

- Event-level fields (same for all tickets)
- Ticket-level fields (different per ticket type)

See [Custom Event Fields](/docs/custom-fields) for details.

### SEO Settings

Optimize your event page for search engines:

| Setting | Description |
|---------|-------------|
| Meta Title | Custom title for search results |
| Meta Description | Description shown in search results |
| Social Image | Image displayed when shared on social media |

### Integration Settings

| Setting | Description |
|---------|-------------|
| Google Analytics ID | Track event page visits |
| Facebook Pixel ID | Track conversions for Facebook ads |

---

## Danger Zone

{% callout type="warning" title="Proceed with caution" %}
These actions can significantly affect your event and may not be reversible.
{% /callout %}

### Cancel Event

Canceling an event:
- Notifies all registered participants
- Prevents new registrations
- Does not automatically process refunds (handle manually)

### Delete Event

Deleting an event:
- Permanently removes all event data
- Cannot be undone
- Consider archiving instead to preserve data

---

## Settings Quick Reference

| Category | Key Settings |
|----------|-------------|
| General | Title, dates, description, location |
| Registration | Open/close dates, capacity, waitlist |
| Check-In | Open/close times, check-in options |
| Visibility | Draft/Published, listing options |
| Communication | Email notifications, reminders |
| Advanced | Custom fields, SEO, integrations |

---

## Next Steps

- [Set up ticket types](/docs/ticket-types) for registration pricing
- [Configure registration forms](/docs/registration-forms) with custom fields
- [Add sessions and activities](/docs/sessions-activities) for event structure
