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

The registration panel (**Register for Event**) on the event page has:

1. **Ticket Selection** - The ticket and **Number of Tickets**
2. **Discount Code** - Optional
3. **Contact details** - Name, email and phone of the person registering
4. **Participant details** - Details for each ticket holder (if they tick **Enter different details for each ticket**)
5. **Custom Fields** - Additional questions you've configured
6. **Payment** - For paid tickets, on the checkout page after the panel

---

## Standard Fields

### Buyer Fields

These fields are always collected from the person registering:

| Field | Required | Description |
|-------|----------|-------------|
| Full Name | Yes | Buyer's full name |
| Email | Yes | Contact email for confirmations |
| Phone Number | Yes | Contact phone number |

### Attendee Fields

When the buyer gets more than one ticket and ticks **Enter different details for each ticket**:

| Field | Required | Description |
|-------|----------|-------------|
| Full Name | Yes | Attendee's name |
| Email | Yes | Attendee's email |
| Phone Number | Yes | Attendee's phone |

---

## Configuring Forms

### Access Form Settings

There is no separate form builder. The form is shaped by:

1. **Custom Fields** in the event menu - your extra questions
2. **Details** > **Registration** - quick registration and the data & privacy notice

### Form Options

| Option | Where | Description |
|--------|-------|-------------|
| Custom fields | **Custom Fields** | Add questions, mark them required, set the scope |
| Quick registration | **Details** > **Registration** | Guests register for free tickets without an account |
| Data & privacy notice | **Details** > **Registration** | Shows your notice and adds a required consent checkbox |
| Require organiser approval | **Ticket Types** | Registrations land as pending until you approve them |

---

## Custom Fields

Add your own questions to the registration form. See [Custom Event Fields](/docs/custom-fields) for details.

### Order-Level Fields

Collected once per registration:

- Billing information
- Organization details
- Invoice requirements

### Ticket-Level Fields

Collected for each ticket:

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

{% figure src="/images/guides/24-attendee-registration-drawer.jpg" alt="Register for Event panel with the ticket, quantity, discount code and contact details" caption="The registration panel on the event page." /%}

### Multiple Attendees

```
1. Select ticket type and quantity (up to 20)
2. Enter buyer info
3. Tick "Enter different details for each ticket" and enter each attendee's info
4. Complete custom fields
5. Review order
6. Process payment
7. The confirmation email, with every ticket attached, goes to the buyer
```

---

## Form Validation

### Built-in Validation

| Field Type | Validation |
|------------|------------|
| Email | Valid email format |
| Phone | Required, up to 20 characters |
| Required fields | Must not be empty |
| Number fields | Must be a number |
| Date fields | Must be a valid date |
| Dropdown and radio | Must be one of your options |

### Custom Validation

For each custom field you can set:

- **Field Type** (Text Input, Text Area, Number, Email, Phone, Date, Dropdown Select, Radio Buttons, Checkbox, Checkbox Group)
- **This field is required**
- **Placeholder Text**

There are no length or pattern rules beyond the field type.

---

## Data & Privacy Consent

### Adding a Notice

1. Go to **Details** > **Registration**
2. Write your **Data & privacy notice**: who collects the data, why, and who it's shared with
3. Click **Save Registration Settings**

### What Participants See

- Your notice on the event page and registration forms
- A consent checkbox
- Must tick it to register

---

## Form Customization Tips

### Keep It Short

- Only ask for what you need
- More fields = lower completion rates
- Use order-level fields for questions that don't change per ticket

### Clear Labels

- Use descriptive field labels
- Use the placeholder text to show an example answer
- Provide examples where helpful

### Logical Order

- Group related fields together
- Put important questions early
- End with optional fields

---

## Form Preview

Preview your form before publishing:

1. On Event Home, open the **Publish** step to preview your event page
2. Open the registration panel from a ticket
3. Check the fields and wording
4. Make adjustments in **Custom Fields** as needed

---

## Registration Confirmation

### Confirmation Page

After a quick (free, no account) registration, the panel shows **You're registered!** with the email used and the ticket number. Paid registrations land on the order page after payment.

### Confirmation Email

Automatically sent to the buyer, containing:

- Registration details
- Ticket(s) as PDF attachments with QR code
- Event information

---

## Editing Registrations

### Participant Self-Service

Participants can view their tickets in [My Registrations](/docs/my-registrations) and the GatherHub app. They can't edit their registration details. Ask them to contact you.

### Organizer Edits

Organizers can edit any registration:

1. Go to **Participants**
2. Open the row's menu and click **Edit**
3. Edit their details
4. Save changes

---

## Best Practices

### For Higher Completion

- Minimize required fields
- Turn on quick registration for free events
- Keep custom fields few and short

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

- Check the field was saved under **Custom Fields**
- Ticket-level fields show once per ticket, below the contact details
- Reload the event page after changes

### Confirmation not received

- Check spam folder
- Verify email address is correct
- Ask them to check [My Registrations](/docs/my-registrations), where the ticket is always available
- Contact support to resend the ticket email

---

## Next Steps

- [Add custom fields](/docs/custom-fields) to collect specific information
- [Import participants](/docs/bulk-import) in bulk
- [Manage registrations](/docs/managing-participants) from the dashboard
