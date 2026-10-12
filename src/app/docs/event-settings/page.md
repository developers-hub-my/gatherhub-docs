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
3. Click **Details** in the event menu

**Details** has these tabs: **Basic Information**, **Category**, **Organizer**, **Capacity**, **Early Bird**, **Registration** and **Refund Policy**. Each tab has its own save button.

---

## General Settings

### Event Information

| Setting | Tab | Description |
|---------|-----|-------------|
| Event Title | Basic Information | Event name displayed to participants |
| Slug | Basic Information | URL-friendly identifier (auto-generated, can be customized) |
| Description | Basic Information | Rich text event details |
| Event Category and Tags | Category | Help people discover your event |
| Organizer Name, Organization, Organizer Bio, Contact Email, Contact Phone, Website | Organizer | Who is running the event, shown on the event page |

### Event Dates

| Setting | Description |
|---------|-------------|
| Start Date & Time | When the event begins |
| End Date & Time | When the event ends |
| Timezone | Event timezone for scheduling. Set it under **Location** |

{% callout title="Multi-day events" %}
For events spanning multiple days, set the start date to the first day and end date to the last day. Use sessions to organize each day's schedule.
{% /callout %}

---

## Registration Settings

### Registration Window

There are no separate open and close dates. Registration is open once the event is published, and closes when the event ends.

{% callout type="note" title="Default behavior" %}
Use ticket capacity to stop sales early. A ticket type that reaches its capacity shows as **Sold Out**.
{% /callout %}

### Capacity Settings

| Setting | Where | Description |
|---------|-------|-------------|
| Max Participants | Basic Information | Overall event capacity. Self-registration stops when it's reached. Leave blank for unlimited |
| Per-Date Capacity | Capacity | Cap registrations for each day of a multi-day event. Leave blank for unlimited |
| Waitlist | Capacity | Turn on a waitlist for a date |

### Registration Options

| Option | Where | Description |
|--------|-------|-------------|
| Require organiser approval | **Ticket Types** | Registrations for that ticket land as pending until you approve them |
| Enable Early Bird Pricing | Early Bird | Use each ticket's early bird price until the **Early Bird Deadline** |
| Refund Policy | Refund Policy | Shown on the public event page |

**Quick registration** (Details → Registration) lets guests register for free tickets with only name, email and phone, without an account. Turn it on for events with walk-ins. A **data & privacy notice** here adds a required consent checkbox to the form.

{% figure src="/images/guides/07-organiser-quick-registration.jpg" alt="Event Details, Registration tab, with the Quick registration switch and the data and privacy notice field" caption="Details → Registration." /%}

---

## Check-In Settings

### Check-In Window

Crew can scan tickets from 60 minutes before the event starts until 1 day after it ends. The event must be published. There are no check-in open or close fields in **Details**.

{% callout title="Recommended settings" %}
Have your crew open the scanner and test a ticket before the doors open, inside the 60-minute window.
{% /callout %}

### Check-In Options

| Option | Where | Description |
|--------|-------|-------------|
| Check-in photo | **On-site Check-In** | Off, Optional (default) or Required photo at check-in |
| Self check-in | **Online QR Check-In** | Show a rolling QR that online participants scan to check themselves in |
| Session check-in | **Features** > **Event Sessions** | Check-in at the session level |
| Activity check-in | **Features** > **Event Activities** | Check-in at the activity level |

---

## Visibility Settings

### Event Status

Set under **Details** > **Basic Information** > **Status**:

| Status | Description |
|--------|-------------|
| Draft | Event is hidden from public. Only visible to you and crew members |
| Published | Event is visible and open for registration |
| Postponed | Event is on hold until new dates are set |
| Cancelled | Event is not going ahead |
| Completed | Event is over |
| Archived | Event is hidden from listings but data is preserved |

To publish for the first time, use the **Publish** step on Event Home.

### Event Visibility

| Option | Description |
|--------|-------------|
| Public | Listed in the event directory and on your organization page |
| Private | Not listed. You can set an **Access code** visitors must enter to view the event page |
| Unlisted | Not listed. Anyone with the link can open it |

---

## Communication Settings

### Email Notifications

GatherHub sends these emails automatically. They can't be turned off per event:

| Email | When sent |
|-------|-----------|
| Ticket confirmation | After a successful registration or payment |
| Registration status | When you approve or reject a pending registration |
| Check-in notification | After the participant checks in |
| Certificate issued | When a certificate is issued |
| Checkout reminder | When a buyer leaves checkout without paying |

To send other messages, such as a reminder before the event, use **Blast Emails**.

---

## Advanced Settings

### Custom Fields

Add custom data collection for the event under **Custom Fields**:

- **Order-level** fields (collected once per order)
- **Ticket-level** fields (collected for each ticket)

See [Custom Event Fields](/docs/custom-fields) for details.

### SEO Settings

Optimize your event page for search engines under **SEO**:

| Setting | Description |
|---------|-------------|
| Meta Title | Custom title for search results. Leave blank to use the event title |
| Meta Description | Description shown in search results (up to 500 characters) |

The page shows a **Search Engine Preview** as you type.

### Integration Settings

Google Analytics and the Meta Pixel are set up once for the whole platform by the administrator, not per event.

---

## Danger Zone

{% callout type="warning" title="Proceed with caution" %}
These actions can significantly affect your event and may not be reversible.
{% /callout %}

### Cancel Event

Set **Status** to **Cancelled** in **Details** > **Basic Information**. Canceling an event:
- Does not notify participants (send a blast email yourself)
- Does not automatically process refunds (handle manually)

### Delete Event

On the **Events** list, open the event's menu and click **Delete**. Deleting an event:
- Removes it from your events list
- Can't be undone in the app
- Consider setting **Status** to **Archived** instead to keep it

---

## Settings Quick Reference

| Category | Key Settings |
|----------|-------------|
| General | Title, slug, dates, description, category, organizer |
| Registration | Capacity, per-date waitlist, early bird, quick registration, refund policy |
| Check-In | Check-in photo, online QR check-in, session and activity check-in |
| Visibility | Status, Public/Private/Unlisted, access code |
| Communication | Automatic emails, blast emails |
| Advanced | Custom fields, SEO |

---

## Next Steps

- [Set up ticket types](/docs/ticket-types) for registration pricing
- [Configure registration forms](/docs/registration-forms) with custom fields
- [Add sessions and activities](/docs/sessions-activities) for event structure
