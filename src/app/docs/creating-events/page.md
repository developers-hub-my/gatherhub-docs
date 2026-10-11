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

1. **Basic** - Event title, description, dates, and visibility
2. **Location** - Location type, venue, category and tags (optional, you can **Skip** it)
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
| Start Date & Time | When the event begins (today or later) |
| End Date & Time | When the event ends (on or after the start) |
| Timezone | Automatically set to your organization's timezone. Change it later under **Location** |

### Event Visibility

| Option | Description |
|--------|-------------|
| Public | Listed in the event directory and on your organization page |
| Private | Not listed. You can set an access code in event details that people need to register |
| Unlisted | Not listed. Anyone with the link can open it |

{% callout type="note" title="Recommendation" %}
Every new event is saved as a draft, whatever the visibility. Nobody can register until you publish.
{% /callout %}

{% figure src="/images/guides/03-organiser-wizard-basic.jpg" alt="Event wizard step 1, Basic Information, with title, description, dates and visibility" caption="Step 1: basic information." /%}

---

## Step 2: Location Settings

### Location Type

Choose how participants will attend:

| Type | Description |
|------|-------------|
| Physical | In-person event at a venue |
| Virtual | Online event with a meeting link |
| Hybrid | Both in-person and online options |

If you skip this step, the event is saved as **Physical** with no venue.

### Physical Events

For physical events, you need to specify a venue:

**Option 1: Select from Library**
- Choose from venues saved in your organization
- All venue details are automatically filled in

**Option 2: Enter Custom Venue**
- Enter the **Venue Name**
- Add the **City** and **Country**
- Add the street address, postcode and map coordinates later under **Location** in the event menu

### Virtual Events

For virtual events:

1. Select **Virtual** as the location type
2. Pick the **Platform** (Zoom, Google Meet, Microsoft Teams, Webex, Discord, YouTube Live, Twitch, StreamYard or Other)
3. Add the **Meeting Link**

### Hybrid Events

For hybrid events, configure both:

- Physical venue details for in-person attendees
- Virtual meeting link for remote participants

{% figure src="/images/guides/04-organiser-wizard-location.jpg" alt="Event wizard step 2, Location and Category, with location type, venue, city, country, category and tags" caption="Step 2: location and category." /%}

---

## Step 3: Review and Create

Before creating your event, review:

- Event title and description are accurate
- Dates and times are correct
- Location information is complete
- Visibility is set appropriately

Click **Create Event** to proceed.

{% figure src="/images/guides/05-organiser-wizard-review.jpg" alt="Event wizard step 3, Review and Create, with the event summary and a note that it will be saved as draft" caption="Step 3: review, then Create Event." /%}

---

## After Creating Your Event

You land on **Event Home**. Its setup checklist shows what is left before you can publish.

{% figure src="/images/guides/06-organiser-event-home.jpg" alt="Event Home with stats, the before-the-event checklist and the setup progress card" caption="Event Home and its setup checklist." /%}

The event menu groups your tools by phase:

| Group | What you'll find |
|-------|------------------|
| Build | Home, Details, Location, Media, SEO, Features, Ticket Types, Custom Fields, Sessions, Activities, Speakers |
| Grow | Marketing, Referrals, Blast Emails, Discount Codes, Sponsors |
| Sell | Orders, Left Checkout, Registration Approvals, Payment Approvals, Refund Requests, Earnings, Payment Settings |
| Run | On-site Check-In, Online QR Check-In, Gates, Participants, Crew Members, Polls, Q&A |
| Wrap | Certificates, Surveys, Reports |

Some items only show once you turn the feature on under **Features**. In simple mode, less-used tools sit under **More tools**. Click **Show all tools (advanced)** at the bottom of the menu to list everything.

---

## Publishing Your Event

To make your event visible to participants:

1. Ensure you've configured:
   - At least one ticket type
   - Custom fields, if you need extra participant information
   - Payment settings (for paid events)

2. On Event Home, open the **Publish** step. It shows a preview of your event page. Click **Publish Event**

3. Share your event URL with potential attendees. **Details** also has the **Event QR** (PNG or SVG) for posters and slides

{% figure src="/images/guides/10-organiser-preview-publish.jpg" alt="Preview mode banner with Edit Event and Publish Event above the event page preview" caption="Preview, then Publish Event." /%}

{% figure src="/images/guides/11-organiser-event-qr.jpg" alt="Event Details with the public event link and the Event QR with PNG and SVG downloads" caption="The public link and Event QR, once published." /%}

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
| Location Type | No | Physical (default), Virtual, or Hybrid |
| Venue | No | Library venue or custom venue for Physical/Hybrid events |
| Meeting Link | No | Online link for Virtual/Hybrid events (must be a valid URL) |
| Max Participants | No | Overall capacity limit, set under **Details** |
| Visibility | Yes | Public, Private or Unlisted |
| Status | Auto | Starts as Draft, becomes Published when you publish |

---

## Next Steps

After creating your event:

1. [Configure event settings](/docs/event-settings) for advanced options
2. [Set up ticket types](/docs/ticket-types) for registration
3. [Customize registration forms](/docs/registration-forms)
4. [Add sessions and activities](/docs/sessions-activities) for complex events
5. [Invite crew members](/docs/inviting-crew) to help manage
