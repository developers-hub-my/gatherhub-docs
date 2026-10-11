---
title: Quick Start Guide
nextjs:
  metadata:
    title: Quick Start Guide
    description: Create your first GatherHub event in under 10 minutes with this step-by-step guide.
---

Create your first event in under 10 minutes. This guide walks you through the essential steps to get your event up and running. {% .lead %}

{% callout title="Before you begin" %}
You need a GatherHub account to create events. If you haven't signed up yet, see [Account Setup](/docs/account-setup) first.
{% /callout %}

---

## Step 1: Access the Event Dashboard

1. Log in to GatherHub at [gatherhub.app](https://gatherhub.app)
2. From the main dashboard, click **Events** in the sidebar
3. Click the **New Event** button

---

## Step 2: Enter Basic Information

The event creation wizard starts with basic details:

| Field | What to enter |
|-------|---------------|
| Event Title | A clear, descriptive name for your event |
| Description | Overview of what the event covers |
| Start Date | When the event begins |
| End Date | When the event ends |
| Visibility | Public (listed), Private (optional access code) or Unlisted (link only) |

{% callout type="note" title="Tip" %}
Every new event is saved as a draft. Drafts are only visible to you and your crew members until you publish.
{% /callout %}

{% figure src="/images/guides/03-organiser-wizard-basic.jpg" alt="Event wizard step 1, Basic Information, with title, description, dates and visibility" caption="Step 1 of the wizard: basic information." /%}

---

## Step 3: Set the Location

Choose the **Location Type**:

- **Physical** - In-person event at a venue
- **Virtual** - Online event with a platform and meeting link
- **Hybrid** - Both physical and virtual attendance options

For physical events, you can:
- **Select from Library** - pick a venue from your organization's venue library
- **Enter Custom Venue** - type a venue name, city and country

You can also pick an **Event Category** and tags. Click **Skip** if you want to set the location later.

---

## Step 4: Review and Create

1. Review all your event details
2. Click **Create Event**
3. Your event is created as a draft and you land on Event Home, which has a checklist of what's left to set up

---

## Step 5: Configure Tickets

Tickets are not part of the wizard. Add at least one ticket type after the event is created:

1. In the event menu, go to **Ticket Types**
2. Click **Add Ticket Type**
3. Enter the ticket details:
   - **Ticket Name** - e.g., "General Admission", "VIP", "Student"
   - **Price (RM)** - Set to 0 for free tickets
   - **Capacity** - Maximum tickets available (leave blank for unlimited)
4. Click **Create Ticket Type**

Example ticket setup for a free workshop:

| Field | Value |
|-------|-------|
| Ticket Name | General Admission |
| Price (RM) | 0 |
| Capacity | 50 |

---

## Step 6: Publish Your Event

To make your event visible to participants:

1. On Event Home, open the **Publish** step. It shows a preview of your public event page
2. Click **Publish Event**
3. Copy the event URL to share with potential attendees

{% figure src="/images/guides/10-organiser-preview-publish.jpg" alt="Preview mode banner with Edit Event and Publish Event above the event page preview" caption="Preview mode: Publish Event goes live." /%}

{% callout type="warning" title="Important" %}
Published events can receive registrations immediately. Make sure your ticket settings and registration form are configured before publishing.
{% /callout %}

---

## What's Next?

Your basic event is ready. Here are some features to explore:

### Customize Registration

- Add [custom fields](/docs/custom-fields) to collect additional participant information
- Configure [registration forms](/docs/registration-forms) with required fields

### Add Structure

- Create [sessions and activities](/docs/sessions-activities) for multi-track events
- Set capacity limits per session

### Set Up Payments

- Connect [payment methods](/docs/payment-methods) to accept paid registrations
- Create [discount codes](/docs/discount-codes) for promotions

### Prepare for Event Day

- Learn about the [check-in system](/docs/checkin-overview)
- Have your crew [install the GatherHub app](/docs/pwa-overview) and try [scanning](/docs/pwa-crew) before the day
- Set up [certificate templates](/docs/certificate-templates) for post-event delivery

### Invite Your Team

- Add [crew members](/docs/crew-overview) to help manage the event
- Assign [roles and permissions](/docs/crew-roles)

---

## Quick Reference

| Task | Where to find it |
|------|------------------|
| Edit event details | Event menu > Details |
| View registrations | Event menu > Participants |
| Check in attendees | Event menu > On-site Check-In, or the GatherHub app > Crew > Scan |
| Send emails | Event menu > Blast Emails |
| Generate certificates | Event menu > Issue Certificates |
| View reports | Event menu > Reports Overview |
