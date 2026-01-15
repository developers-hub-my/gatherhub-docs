---
title: Custom Event Fields
nextjs:
  metadata:
    title: Custom Event Fields
    description: Collect additional participant information with custom fields in GatherHub registration forms.
---

Collect additional information from participants beyond the standard registration fields using custom fields. {% .lead %}

---

## Understanding Custom Fields

Custom fields allow you to gather specific information needed for your event. Examples:

- Dietary requirements for catering
- T-shirt sizes for merchandise
- Professional certifications
- Company information
- Emergency contact details

---

## Field Types

### Text Fields

| Type | Description | Example Use |
|------|-------------|-------------|
| Short Text | Single line input | Job title, company name |
| Long Text | Multi-line textarea | Special requests, bio |
| Email | Email input with validation | Alternative contact email |
| Phone | Phone number input | Emergency contact |
| URL | Web address input | LinkedIn profile, portfolio |

### Selection Fields

| Type | Description | Example Use |
|------|-------------|-------------|
| Dropdown | Single selection from list | Country, department |
| Radio Buttons | Single selection, all visible | Gender, experience level |
| Checkboxes | Multiple selections | Interests, dietary restrictions |

### Other Fields

| Type | Description | Example Use |
|------|-------------|-------------|
| Number | Numeric input | Years of experience |
| Date | Date picker | Date of birth |
| File Upload | Document/image upload | Resume, photo |

---

## Creating Custom Fields

### Add a Custom Field

1. Go to your event dashboard
2. Click **Registration** in the sidebar
3. Click **Custom Fields**
4. Click **Add Field**

### Field Configuration

| Setting | Description |
|---------|-------------|
| Label | Field name shown to participants |
| Field Type | Type of input (text, dropdown, etc.) |
| Required | Whether the field must be filled |
| Placeholder | Example text shown in empty field |
| Help Text | Additional instructions for participants |
| Options | For dropdown/radio/checkbox fields |

### Example: Dietary Requirements

| Setting | Value |
|---------|-------|
| Label | Dietary Requirements |
| Field Type | Checkboxes |
| Required | No |
| Options | Vegetarian, Vegan, Halal, Gluten-free, No restrictions |
| Help Text | Select all that apply |

---

## Field Levels

### Order-Level Fields

Collected once per registration order. Use for:

- Billing information
- Invoice requirements
- Group registration contact

### Ticket-Level Fields

Collected for each ticket/participant. Use for:

- Individual dietary needs
- T-shirt sizes
- Personal information

{% callout title="When to use each level" %}
Use order-level for information about the person paying. Use ticket-level for information about each attendee.
{% /callout %}

---

## Field Validation

### Built-in Validation

| Validation | Description |
|------------|-------------|
| Required | Field must have a value |
| Email format | Must be valid email address |
| Phone format | Must be valid phone number |
| URL format | Must be valid web address |
| Number range | Must be within min/max values |
| Character limit | Maximum text length |

### Custom Validation

Set validation rules for specific requirements:

| Rule | Example |
|------|---------|
| Minimum length | At least 10 characters for feedback |
| Maximum length | 500 characters for bio |
| Pattern | Specific format requirements |

---

## Conditional Fields

Show or hide fields based on previous answers.

### Example: Conditional T-Shirt Field

```
If ticket type = "VIP Package"
  Then show "T-Shirt Size" field
Else
  Hide "T-Shirt Size" field
```

### Setting Up Conditional Logic

1. Create the conditional field
2. Click **Add Condition**
3. Select the trigger field
4. Set the condition (equals, contains, etc.)
5. Choose show/hide behavior

---

## Managing Custom Fields

### Edit Fields

1. Go to **Registration** > **Custom Fields**
2. Click on the field to edit
3. Modify settings and save

{% callout type="warning" title="Editing published fields" %}
Editing fields after registration has started may affect data consistency. Avoid changing field types or removing options.
{% /callout %}

### Reorder Fields

Drag and drop fields to change their order in the registration form.

### Delete Fields

Deleting a field removes it from the form. Existing data for that field is preserved in participant records.

---

## Viewing Custom Field Data

### In Participant List

1. Go to **Participants**
2. Custom field data appears in participant details
3. Click on a participant to see all their responses

### In Exports

Custom field data is included in participant exports:

1. Go to **Reports** > **Export Data**
2. Select **Participants**
3. Choose which fields to include
4. Export to CSV or Excel

---

## Best Practices

### Field Design

- Keep labels clear and concise
- Use help text for complex questions
- Group related fields together
- Mark truly required fields only

### Data Collection

- Only collect information you need
- Explain why you're asking for sensitive data
- Consider privacy implications
- Be mindful of data protection regulations

### Form Length

- Keep registration forms short when possible
- Too many fields can reduce completion rates
- Use conditional fields to hide irrelevant questions

---

## Common Custom Fields

### Corporate Events

| Field | Type | Level |
|-------|------|-------|
| Company Name | Short Text | Order |
| Job Title | Short Text | Ticket |
| Department | Dropdown | Ticket |
| Employee ID | Short Text | Ticket |

### Training Programs

| Field | Type | Level |
|-------|------|-------|
| Experience Level | Radio | Ticket |
| Certification Number | Short Text | Ticket |
| Learning Objectives | Long Text | Ticket |
| Special Requirements | Long Text | Order |

### Conferences

| Field | Type | Level |
|-------|------|-------|
| Dietary Requirements | Checkboxes | Ticket |
| T-Shirt Size | Dropdown | Ticket |
| LinkedIn Profile | URL | Ticket |
| Networking Interests | Checkboxes | Ticket |

### Community Events

| Field | Type | Level |
|-------|------|-------|
| How did you hear about us? | Dropdown | Order |
| Emergency Contact Name | Short Text | Ticket |
| Emergency Contact Phone | Phone | Ticket |
| Photo Consent | Radio | Ticket |

---

## Exporting Field Data

### Standard Export

All custom field data is included in participant exports with columns matching field labels.

### Filtered Export

Export specific field values:

1. Go to **Reports** > **Export**
2. Apply filters (e.g., only vegetarian attendees)
3. Export filtered results

---

## Next Steps

- [Configure registration forms](/docs/registration-forms) layout
- [Import participants](/docs/bulk-import) with custom field data
- [Send targeted emails](/docs/email-campaigns) based on field values
