---
title: Event Config Templates
nextjs:
  metadata:
    title: Event Config Templates
    description: Save event configurations as reusable templates and create new events from them instantly.
---

Save your event setup as a template and reuse it to create new events in seconds. {% .lead %}

---

## What Are Event Templates?

Event config templates capture your event's complete setup — ticket types, sessions, activities, crew roles, certificate settings, and more — so you can recreate similar events without starting from scratch.

### What's Included in a Template

| Configuration | Included |
|---------------|----------|
| Event settings | Description, timezone, location, refund policy |
| Ticket types | Names, prices, quantities, limits |
| Sessions | Names, locations, capacities, mandatory flags |
| Activities | Names, points, capacities, mandatory flags |
| Kit items | Names, quantities, mandatory flags |
| Crew roles | Role names and permission sets |
| Certificate templates | Certificate design configurations |
| Sponsor tiers | Tier names and details |
| Custom fields | Registration form field definitions |
| Feature toggles | Which features are enabled |

---

## Saving a Template

### From the Events Listing

1. Go to **Manage > Events**
2. Find the event you want to save as a template
3. Click the **Actions** menu (three dots) on the event
4. Select **Save as Template**
5. Enter a template name and optional description
6. Click **Save**

{% callout title="Template naming" %}
Use descriptive names that help you identify templates later, such as "Annual Conference Setup" or "Half-Day Workshop Template".
{% /callout %}

---

## Creating an Event from a Template

### From the Templates Page

1. Go to **Manage > Templates**
2. Browse your saved templates
3. Click **Create Event** on the template you want to use
4. Enter the new event title and dates
5. Click **Create**

The new event is created with all the template's settings pre-configured. You'll be redirected to the event management page to make any adjustments.

{% callout type="warning" title="Review after creating" %}
Always review the new event's settings after creating from a template. Update dates, descriptions, and any event-specific details before publishing.
{% /callout %}

---

## Managing Templates

### Viewing Templates

Access all your templates at **Manage > Templates**. Templates are scoped to your organization — all organization members can see and use them.

### Template Details

Each template shows:

- **Name** — Template display name
- **Description** — Optional notes about the template
- **Created by** — Who saved the template
- **Created date** — When it was saved

---

## Use Cases

### Recurring Events

Save your monthly meetup or weekly workshop as a template. Each new instance starts with the same ticket types, sessions, and settings.

### Standardized Programs

Organizations running standardized training programs can create a template with approved session structures, certificate templates, and crew roles.

### Event Series

For conference series with consistent formatting, save the first event as a template and use it as the base for subsequent editions.

---

## Tips

- **Keep templates current** — If your event format changes, save a new template from an updated event
- **Use clear names** — Include the event type and any key differentiators in the name
- **Templates vs. cloning** — Use templates for creating events with the same *structure* but different content. Use [cloning](/docs/managing-events) to duplicate an event with its existing data

---

## Next Steps

- [Create your first event](/docs/creating-events) to save as a template
- [Configure sessions and activities](/docs/sessions-activities) before saving
- [Set up crew roles](/docs/crew-roles) to include in your template
