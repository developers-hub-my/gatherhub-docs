---
title: Certificate Templates
nextjs:
  metadata:
    title: Certificate Templates
    description: Create and customize certificate templates for your GatherHub events.
---

Design professional certificates that recognize participant achievement and can be verified for authenticity. {% .lead %}

---

## Certificate System Overview

GatherHub's certificate system includes:

- **Customizable templates** with your branding
- **Dynamic fields** that auto-fill participant data
- **Eligibility rules** based on attendance
- **QR verification** for authenticity
- **Batch generation** for all participants

---

## Creating a Template

### Access Template Editor

1. Go to your event dashboard
2. Click **Certificates** in the sidebar
3. Click **Template Settings**
4. Click **Create Template** or edit existing

### Template Components

| Component | Description |
|-----------|-------------|
| Background | Certificate background image |
| Header | Title and organization info |
| Body | Main certificate content |
| Participant Details | Name, date, event info |
| Footer | Signature, verification |
| QR Code | Verification QR placement |

---

## Template Settings

### Basic Settings

| Setting | Description |
|---------|-------------|
| Template Name | Internal name for the template |
| Certificate Title | Title shown on certificate |
| Orientation | Portrait or Landscape |
| Paper Size | A4, Letter, or Custom |

### Design Settings

| Setting | Description |
|---------|-------------|
| Background Image | Upload your design |
| Primary Color | Main accent color |
| Font Family | Typography choice |
| Logo | Organization logo |

---

## Dynamic Fields

Insert placeholders that auto-fill with participant data:

### Available Placeholders

| Placeholder | Output |
|-------------|--------|
| participant_name | Full name |
| event_name | Event title |
| event_date | Event date |
| certificate_number | Unique cert number |
| issue_date | When certificate issued |
| organization_name | Your organization |

Note: In the template editor, wrap placeholders with curly braces.

### Example Text

```
This is to certify that

[participant_name]

has successfully completed

[event_name]

held on [event_date]

Certificate No: [certificate_number]
```

Note: In templates, placeholders use curly braces (shown here with brackets for display purposes).

---

## Background Design

### Recommended Specifications

| Spec | Landscape | Portrait |
|------|-----------|----------|
| Size | 297 × 210 mm | 210 × 297 mm |
| Resolution | 300 DPI | 300 DPI |
| Format | PNG, JPG | PNG, JPG |
| Max File | 5 MB | 5 MB |

### Design Tips

- Leave space for text content
- Use high-quality graphics
- Consider print quality
- Test with sample data

---

## Text Positioning

### Layout Areas

| Area | Content |
|------|---------|
| Top | Title, organization logo |
| Center | Participant name (largest text) |
| Middle | Event name, description |
| Bottom | Signatures, date, QR code |

### Typography Guidelines

| Element | Suggested Style |
|---------|-----------------|
| Participant name | Large, prominent font |
| Certificate title | Medium, formal font |
| Body text | Readable, standard size |
| Footer | Small, subtle |

---

## Signature Section

### Adding Signatures

Include signature images:

1. Upload signature image
2. Position on template
3. Add signer name and title

### Signature Options

| Option | Description |
|--------|-------------|
| Image signature | Scanned signature |
| Text name | Typed name and title |
| Multiple signers | Add several signatures |
| Dynamic signer | Based on crew role |

---

## QR Code Placement

### QR Code Settings

| Setting | Description |
|---------|-------------|
| Position | Where on certificate |
| Size | QR code dimensions |
| Include text | "Verify at..." text |

### Verification Info

QR code links to verification page showing:

- Certificate authenticity
- Participant name
- Event details
- Issue date

---

## Template Preview

### Preview Options

1. Click **Preview**
2. View with sample data
3. Test different names
4. Check print layout

### What to Check

- Text is readable
- Names fit properly
- QR code is scannable
- Branding is correct
- Layout is balanced

---

## Multiple Templates

### Why Multiple Templates

- Different certificate types
- Different events
- Participation vs completion
- Different achievement levels

### Template Selection

When generating certificates:

1. Choose template to use
2. Generate for participants
3. Each uses selected template

---

## Template Best Practices

### Design

- Keep design professional
- Use your brand colors
- Ensure readability
- Balance visual elements

### Content

- Clear, concise text
- Accurate event information
- Proper grammar
- Meaningful recognition

### Technical

- High-resolution images
- Test printing
- Verify QR functionality
- Check file sizes

---

## Template Examples

### Workshop Certificate

```
Certificate of Completion

This certifies that [participant_name]
has successfully completed the workshop

[event_name]

Duration: 8 hours
Date: [event_date]
Certificate No: [certificate_number]
```

### Conference Attendance

```
Certificate of Attendance

[participant_name]

attended

[event_name]

[event_date]
[organization_name]
```

### Training with Achievement

```
Certificate of Achievement

This is to certify that [participant_name]
has demonstrated competency in

[event_name]

Score: [achievement_points]
Level: [achievement_level]
Date: [event_date]
```

Note: In templates, placeholders use curly braces (shown here with brackets for display purposes).

---

## Troubleshooting

### Template not saving

- Check all required fields
- Verify image formats
- Reduce file sizes
- Clear browser cache

### Text not displaying correctly

- Check placeholder syntax
- Verify font availability
- Test with shorter names
- Adjust text areas

### Poor print quality

- Use higher resolution images
- Check DPI settings
- Use vector graphics where possible
- Test on different printers

---

## Next Steps

- [Set eligibility rules](/docs/eligibility-rules) for certificate recipients
- [Generate certificates](/docs/generating-certificates) for participants
- [Set up verification](/docs/certificate-verification) page
