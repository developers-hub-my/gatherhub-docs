---
title: Email Campaigns
nextjs:
  metadata:
    title: Email Campaigns
    description: Create and send email campaigns to event participants in GatherHub.
---

Communicate with your event participants through targeted email campaigns for announcements, reminders, and follow-ups. {% .lead %}

---

## Email Campaign Features

- **Targeted messaging** - Send to specific participant groups
- **Rich content** - HTML formatting with images
- **Personalization** - Dynamic fields for each recipient
- **Scheduling** - Send immediately or schedule for later
- **Tracking** - Monitor delivery and engagement

---

## Creating a Campaign

### Start a New Campaign

1. Go to event dashboard
2. Click **Communication** in sidebar
3. Click **New Campaign**
4. Follow the campaign wizard

### Campaign Steps

1. **Recipients** - Select who receives the email
2. **Content** - Write your message
3. **Review** - Preview and test
4. **Send** - Schedule or send immediately

---

## Selecting Recipients

### Recipient Options

| Option | Description |
|--------|-------------|
| All participants | Everyone registered |
| Confirmed only | Only confirmed registrations |
| Pending payment | Awaiting payment |
| Checked in | Those who attended |
| Not checked in | Registered but didn't attend |
| Specific tickets | Holders of certain ticket types |
| Custom filter | Advanced filtering |

### Custom Filters

Create filters based on:

- Registration status
- Ticket type
- Check-in status
- Custom field values
- Registration date

---

## Writing Email Content

### Email Editor

| Element | Description |
|---------|-------------|
| Subject | Email subject line |
| Preview text | Snippet shown in inbox |
| Body | Main email content |
| Sender name | From name |
| Reply-to | Where replies go |

### Formatting Options

- **Bold**, *italic*, underline
- Headings and paragraphs
- Bullet and numbered lists
- Links and buttons
- Images

---

## Personalization

### Available Placeholders

| Placeholder | Output |
|-------------|--------|
| first_name | Participant's first name |
| full_name | Full name |
| email | Email address |
| ticket_type | Their ticket type |
| event_name | Event name |
| event_date | Event date |
| ticket_number | Their ticket number |

### Example Usage

```
Hi [first_name],

Thank you for registering for [event_name]!

Your ticket type: [ticket_type]
Event date: [event_date]

We look forward to seeing you!
```

Note: In the actual email editor, placeholders use curly braces like `first_name` surrounded by braces.

---

## Scheduling

### Send Options

| Option | Description |
|--------|-------------|
| Send now | Immediately queue for delivery |
| Schedule | Set specific date and time |
| Save draft | Save for later editing |

### Scheduling Considerations

- Schedule during business hours
- Consider recipient time zones
- Avoid holidays and weekends
- Allow time for delivery

---

## Testing Before Sending

### Send Test Email

1. Complete email content
2. Click **Send Test**
3. Enter your email
4. Receive and review
5. Make adjustments

### What to Check

- Subject line renders correctly
- Personalization works
- Links are working
- Images display
- Mobile formatting
- No typos

---

## Campaign Types

### Pre-Event Campaigns

| Campaign | When to Send |
|----------|--------------|
| Registration confirmation | Immediately |
| Event reminder | 1 week, 1 day before |
| Venue information | 2-3 days before |
| Last-minute updates | Day before or day of |

### Post-Event Campaigns

| Campaign | When to Send |
|----------|--------------|
| Thank you | Within 24 hours |
| Certificate available | When ready |
| Feedback request | 1-3 days after |
| Follow-up resources | 1 week after |

---

## Email Best Practices

### Subject Lines

- Keep under 50 characters
- Be specific and relevant
- Create urgency if appropriate
- Avoid spam trigger words

### Content

- Keep it concise
- One main message per email
- Clear call-to-action
- Mobile-friendly design

### Timing

- Test different send times
- Consider your audience
- Don't over-communicate
- Space out emails

---

## Managing Campaigns

### View Campaign History

1. Go to **Communication**
2. Click **Campaigns**
3. See all sent and scheduled

### Campaign List

| Column | Description |
|--------|-------------|
| Subject | Email subject |
| Recipients | Number of recipients |
| Status | Draft, Scheduled, Sent |
| Sent Date | When sent |
| Open Rate | Percentage opened |

---

## Duplicating Campaigns

### Reuse Previous Campaigns

1. Find campaign to duplicate
2. Click **Duplicate**
3. Edit as needed
4. Send to new recipients

---

## Troubleshooting

### Low open rates

- Improve subject lines
- Check sender reputation
- Review send timing
- Verify email addresses

### Emails not delivered

- Check spam folders
- Verify email addresses
- Review bounce reports
- Contact support

### Formatting issues

- Test on multiple devices
- Use simple formatting
- Check image sizes
- Test links

---

## Next Steps

- [Use email templates](/docs/email-templates) for consistency
- [Track campaign performance](/docs/campaign-tracking)
- [Set up automated emails](/docs/event-settings) in event settings
