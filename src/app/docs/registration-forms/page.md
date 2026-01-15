---
title: Registration Forms
nextjs:
  metadata:
    title: Registration Forms
    description: Customize registration forms in GatherHub to collect the information you need from participants.
---

Customize your registration forms to collect exactly the information you need from participants while keeping the process simple and efficient. {% .lead %}

---

## Form Structure

Registration forms consist of:

1. **Buyer Information** - Details of the person making the purchase
2. **Ticket Selection** - Which tickets and how many
3. **Attendee Information** - Details for each ticket holder (if enabled)
4. **Custom Fields** - Additional questions you've configured
5. **Payment** - Payment method and processing

---

## Standard Fields

### Buyer Fields

These fields are always collected from the person registering:

| Field | Required | Description |
|-------|----------|-------------|
| Name | Yes | Buyer's full name |
| Email | Yes | Contact email for confirmations |
| Phone | No | Contact phone number |

### Attendee Fields

When "Collect Attendee Information" is enabled:

| Field | Required | Description |
|-------|----------|-------------|
| Full Name | Yes | Attendee's name |
| Email | Yes | Attendee's email |
| Phone | Optional | Attendee's phone |

---

## Configuring Forms

### Access Form Settings

1. Go to your event dashboard
2. Click **Registration** in the sidebar
3. Select **Form Settings**

### Form Options

| Option | Description |
|--------|-------------|
| Require phone number | Make phone mandatory |
| Collect attendee info | Gather details per ticket |
| Allow different attendees | Buyer can register others |
| Terms and conditions | Require acceptance |

---

## Custom Fields

Add your own questions to the registration form. See [Custom Event Fields](/docs/custom-fields) for details.

### Order-Level Fields

Collected once per registration:

- Billing information
- Organization details
- Invoice requirements

### Ticket-Level Fields

Collected for each attendee:

- Dietary requirements
- T-shirt sizes
- Professional certifications

---

## Registration Flow

### Single Attendee

```
1. Select ticket type
2. Enter buyer/attendee info
3. Complete custom fields
4. Review order
5. Process payment
6. Receive confirmation
```

### Multiple Attendees

```
1. Select ticket type and quantity
2. Enter buyer info
3. Enter each attendee's info
4. Complete custom fields
5. Review order
6. Process payment
7. Each attendee receives confirmation
```

---

## Form Validation

### Built-in Validation

| Field Type | Validation |
|------------|------------|
| Email | Valid email format |
| Phone | Valid phone format |
| Required fields | Must not be empty |
| Number fields | Valid number, min/max |

### Custom Validation

Set validation rules for custom fields:

- Minimum/maximum length
- Specific formats
- Required conditions

---

## Terms and Conditions

### Adding Terms

1. Go to **Form Settings**
2. Enable "Require Terms Acceptance"
3. Enter your terms text or link
4. Save

### What Participants See

- Checkbox with terms text
- Link to full terms document
- Must check to proceed

---

## Form Customization Tips

### Keep It Short

- Only ask for what you need
- More fields = lower completion rates
- Use conditional fields to hide irrelevant questions

### Clear Labels

- Use descriptive field labels
- Add help text for complex questions
- Provide examples where helpful

### Logical Order

- Group related fields together
- Put important questions early
- End with optional fields

---

## Form Preview

Preview your form before publishing:

1. Go to **Registration** > **Form Settings**
2. Click **Preview Form**
3. Test the complete registration flow
4. Make adjustments as needed

---

## Registration Confirmation

### Confirmation Page

After successful registration, participants see:

- Order confirmation number
- Summary of registration details
- Ticket information
- Next steps

### Confirmation Email

Automatically sent containing:

- Registration details
- Ticket(s) with QR code
- Event information
- Calendar invite (optional)

---

## Editing Registrations

### Participant Self-Service

If enabled, participants can:

1. Access their registration via email link
2. Update allowed fields
3. View their tickets

### Organizer Edits

Organizers can edit any registration:

1. Go to **Participants**
2. Click on the participant
3. Edit their details
4. Save changes

---

## Best Practices

### For Higher Completion

- Minimize required fields
- Use smart defaults
- Enable autofill-friendly field names
- Show progress indicator

### For Better Data

- Use dropdowns for consistent data
- Validate inputs appropriately
- Provide clear error messages
- Test on mobile devices

### For Participant Experience

- Mobile-responsive design
- Quick loading times
- Clear confirmation messages
- Easy access to tickets

---

## Troubleshooting

### Form not saving

- Check all required fields are filled
- Verify email format is correct
- Clear browser cache
- Try different browser

### Custom fields not appearing

- Verify field is set to visible
- Check conditional logic settings
- Ensure field applies to selected ticket type

### Confirmation not received

- Check spam folder
- Verify email address is correct
- Check email delivery logs
- Resend confirmation manually

---

## Next Steps

- [Add custom fields](/docs/custom-fields) to collect specific information
- [Import participants](/docs/bulk-import) in bulk
- [Manage registrations](/docs/managing-participants) from the dashboard
