---
title: Creating an Event
nextjs:
  metadata:
    title: Creating an Event
    description: Step-by-step guide to creating events in GatherHub using the event creation wizard.
---

Create events using GatherHub's guided wizard that walks you through each step from basic information to publishing. {% .lead %}

---

## Event Creation Wizard

The event creation wizard consists of three steps:

1. **Basic Information** - Event title, description, dates, and visibility
2. **Location** - Venue selection and location type
3. **Review** - Confirm details and create the event

---

## Step 1: Basic Information

### Event Title

Choose a clear, descriptive title that tells participants what the event is about.

**Good examples:**
- "Digital Marketing Workshop 2024"
- "Leadership Training for Managers"
- "Annual Tech Conference"

**Avoid:**
- "Event" (too generic)
- "Workshop" (missing context)

### Event Description

Write a compelling description that includes:

- What participants will learn or experience
- Who the event is for
- Key highlights or speakers
- What to expect

{% callout title="Formatting tip" %}
Use the rich text editor to format your description with headings, bullet points, and links for better readability.
{% /callout %}

### Event Dates

| Field | Description |
|-------|-------------|
| Start Date | When the event begins |
| Start Time | Event start time |
| End Date | When the event ends |
| End Time | Event end time |
| Timezone | Automatically set to your organization's timezone |

### Event Visibility

| Option | Description |
|--------|-------------|
| Draft | Event is hidden from public view. Only you and crew members can see it. |
| Published | Event is visible on your event page and open for registration. |

{% callout type="note" title="Recommendation" %}
Start with Draft mode to configure all settings before publishing. You can publish when ready.
{% /callout %}

---

## Step 2: Location Settings

### Location Type

Choose how participants will attend:

| Type | Description |
|------|-------------|
| Physical | In-person event at a venue |
| Virtual | Online event with a meeting link |
| Hybrid | Both in-person and online options |

### Physical Events

For physical events, you need to specify a venue:

**Option 1: Select from Venue Library**
- Choose from venues saved in your organization
- All venue details are automatically filled in

**Option 2: Enter New Venue**
- Enter the venue name
- Add the full address
- Optionally add venue notes (parking instructions, building access, etc.)

### Virtual Events

For virtual events:

1. Select "Virtual" as the location type
2. Add your meeting link (Zoom, Google Meet, Microsoft Teams, etc.)
3. Optionally add joining instructions

### Hybrid Events

For hybrid events, configure both:

- Physical venue details for in-person attendees
- Virtual meeting link for remote participants

---

## Step 3: Review and Create

Before creating your event, review:

- Event title and description are accurate
- Dates and times are correct
- Location information is complete
- Visibility is set appropriately

Click **Create Event** to proceed.

---

## After Creating Your Event

Once created, your event dashboard gives you access to:

| Section | What you can do |
|---------|-----------------|
| Overview | View event summary and key metrics |
| Settings | Edit event details and configuration |
| Tickets | Create and manage ticket types |
| Registration | Customize registration forms |
| Participants | View and manage registered participants |
| Sessions | Add sessions for multi-track events |
| Check-In | Access check-in tools |
| Certificates | Configure certificate settings |
| Communication | Send emails to participants |
| Reports | View analytics and export data |

---

## Publishing Your Event

To make your event visible to participants:

1. Ensure you've configured:
   - At least one ticket type
   - Registration form settings
   - Payment methods (for paid events)

2. Click **Publish Event** on the event dashboard

3. Share your event URL with potential attendees

{% callout type="warning" title="Before publishing" %}
Published events can immediately receive registrations. Make sure all settings are configured correctly.
{% /callout %}

---

## Event Properties Reference

| Property | Required | Description |
|----------|----------|-------------|
| Title | Yes | Event name (max 255 characters) |
| Description | No | Rich text event details |
| Start Date | Yes | Event start date and time |
| End Date | Yes | Event end date and time |
| Location Type | Yes | Physical, Virtual, or Hybrid |
| Venue | Conditional | Required for Physical/Hybrid events |
| Meeting Link | Conditional | Required for Virtual/Hybrid events |
| Max Participants | No | Overall capacity limit |
| Visibility | Yes | Draft or Published |

---

## Next Steps

After creating your event:

1. [Configure event settings](/docs/event-settings) for advanced options
2. [Set up ticket types](/docs/ticket-types) for registration
3. [Customize registration forms](/docs/registration-forms)
4. [Add sessions and activities](/docs/sessions-activities) for complex events
5. [Invite crew members](/docs/inviting-crew) to help manage
