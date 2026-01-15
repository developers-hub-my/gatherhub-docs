---
title: Email Templates
nextjs:
  metadata:
    title: Email Templates
    description: Create and manage reusable email templates in GatherHub.
---

Save time and ensure consistency by creating reusable email templates for common communications. {% .lead %}

---

## Template Types

### System Templates

Pre-configured templates for automatic emails:

| Template | When Used |
|----------|-----------|
| Registration Confirmation | After registration |
| Payment Confirmation | After payment |
| Event Reminder | Before event |
| Check-in Confirmation | After check-in |
| Certificate Available | When certificate ready |

### Custom Templates

Your own templates for:

- Announcements
- Follow-ups
- Special communications
- Recurring messages

---

## Managing System Templates

### View System Templates

1. Go to **Communication**
2. Click **Templates**
3. Select **System Templates**

### Customize System Templates

1. Click on template to edit
2. Modify content (keeping placeholders)
3. Preview changes
4. Save

{% callout type="warning" title="System template placeholders" %}
Keep required placeholders in system templates. Removing them may cause errors in automatic emails.
{% /callout %}

---

## Creating Custom Templates

### Create New Template

1. Go to **Communication** > **Templates**
2. Click **Create Template**
3. Fill in details:

| Field | Description |
|-------|-------------|
| Template Name | Internal name |
| Subject | Default subject line |
| Content | Email body |
| Category | For organization |

### Template Content

Include:

- Static content (always the same)
- Placeholders (personalized per recipient)
- Formatting and structure

---

## Available Placeholders

### Participant Information

| Placeholder | Description |
|-------------|-------------|
| first_name | First name |
| last_name | Last name |
| full_name | Full name |
| email | Email address |
| phone | Phone number |

### Event Information

| Placeholder | Description |
|-------------|-------------|
| event_name | Event title |
| event_date | Event date |
| event_time | Event time |
| event_location | Venue details |
| event_description | Event description |

### Registration Information

| Placeholder | Description |
|-------------|-------------|
| ticket_type | Ticket type name |
| ticket_number | Ticket number |
| order_number | Order number |
| registration_date | When registered |

### Links

| Placeholder | Description |
|-------------|-------------|
| ticket_link | Link to view ticket |
| event_link | Link to event page |
| portal_link | Link to participant portal |

Note: In the email editor, wrap placeholders with curly braces.

---

## Template Examples

### Event Reminder

**Subject:** Reminder: (event_name) is Tomorrow!

**Body:**
- Greeting with participant's first name
- Event reminder message
- Event details: date, time, location
- Ticket type information
- Check-in instructions with QR code link

### Thank You

**Subject:** Thank You for Attending (event_name)!

**Body:**
- Greeting with participant's first name
- Thank you message
- Feedback survey link/button
- Call to stay connected

### Certificate Ready

**Subject:** Your Certificate is Ready - (event_name)

**Body:**
- Greeting with participant's first name
- Congratulations message
- Download certificate button
- Portal link for future access

Note: In the actual template editor, use placeholders with curly braces like first_name, event_name, etc.

---

## Using Templates

### Start from Template

1. Create new email campaign
2. Click **Use Template**
3. Select template
4. Content is populated
5. Customize as needed
6. Send

### Template vs Starting Fresh

| Approach | Best For |
|----------|----------|
| Use template | Consistent recurring messages |
| Start fresh | Unique one-time communications |

---

## Template Organization

### Categories

Organize templates by category:

- Pre-event
- During event
- Post-event
- Administrative
- Marketing

### Naming Convention

Use clear names:

- `Pre-Event - Reminder 1 Week`
- `Post-Event - Thank You`
- `Admin - Payment Reminder`

---

## Template Best Practices

### Design

- Keep layout simple
- Use consistent branding
- Mobile-friendly formatting
- Clear calls-to-action

### Content

- Concise messaging
- Action-oriented
- Appropriate tone
- Error-free

### Maintenance

- Review templates regularly
- Update outdated information
- Test before major sends
- Archive unused templates

---

## Troubleshooting

### Placeholder not working

- Check spelling exactly
- Include curly braces
- Verify field exists
- Test with sample data

### Formatting issues

- Preview before sending
- Test on different devices
- Simplify complex formatting
- Check image sizes

---

## Next Steps

- [Create email campaigns](/docs/email-campaigns)
- [Track email performance](/docs/campaign-tracking)
