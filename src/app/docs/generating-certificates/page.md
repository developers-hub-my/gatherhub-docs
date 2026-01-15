---
title: Generating Certificates
nextjs:
  metadata:
    title: Generating Certificates
    description: Generate and distribute certificates to eligible participants in GatherHub.
---

Generate professional certificates for participants who meet your eligibility requirements, individually or in bulk. {% .lead %}

---

## Generation Options

| Option | Use Case |
|--------|----------|
| Bulk Generation | All eligible participants at once |
| Individual Generation | One participant at a time |
| Regeneration | Update existing certificates |

---

## Bulk Certificate Generation

### Prerequisites

Before generating:

- Certificate template configured
- Eligibility rules set
- Attendance data complete
- Event completed

### Generation Process

1. Go to **Certificates**
2. Click **Generate Certificates**
3. Select template (if multiple)
4. Review eligible participants
5. Click **Generate All**

### What Happens

1. System checks eligibility
2. Certificates are generated
3. Each gets unique number
4. Stored in participant records
5. Ready for distribution

---

## Individual Generation

### When to Use

- Late additions
- Special circumstances
- Testing templates
- VIP certificates

### How to Generate

1. Go to **Participants**
2. Select participant
3. Click **Certificates** tab
4. Click **Generate Certificate**
5. Select template
6. Confirm generation

---

## Certificate Preview

### Before Generation

Preview certificates:

1. Go to **Certificates** > **Preview**
2. Select a participant
3. View rendered certificate
4. Check all fields

### What to Verify

- Participant name renders correctly
- Event details accurate
- Dates formatted properly
- QR code positioned correctly
- Text is readable

---

## Generation Queue

### For Large Events

Bulk generation uses a queue:

1. Job is queued
2. Certificates generate in background
3. Progress shown on dashboard
4. Notification when complete

### Monitoring Progress

| Status | Meaning |
|--------|---------|
| Queued | Waiting to process |
| Processing | Currently generating |
| Completed | Successfully generated |
| Failed | Error occurred |

---

## Certificate Distribution

### Download Options

Participants can download:

| Format | Description |
|--------|-------------|
| PDF | Standard certificate format |
| PNG | Image format |

### Distribution Methods

| Method | Description |
|--------|-------------|
| Email | Send certificate via email |
| Portal | Available in participant portal |
| Direct Download | Download link |

---

## Email Distribution

### Sending Certificates

1. Go to **Certificates**
2. Select generated certificates
3. Click **Send by Email**
4. Customize message (optional)
5. Send

### Email Contents

- Congratulations message
- Certificate attached (PDF)
- Download link for portal access
- Verification information

---

## Participant Portal Access

### How Participants Access

1. Log in to participant portal
2. Go to **My Certificates**
3. View issued certificates
4. Download in preferred format

### Portal Features

- View all certificates
- Download PDF or PNG
- Share verification link
- View certificate details

---

## Regeneration

### When to Regenerate

- Template updates
- Data corrections
- Error fixes
- Format changes

### How to Regenerate

1. Go to **Certificates**
2. Select certificates to regenerate
3. Click **Regenerate**
4. Confirm (overwrites existing)

{% callout type="warning" title="Regeneration caution" %}
Regenerating keeps the same certificate number but updates content. Previously downloaded certificates may differ.
{% /callout %}

---

## Certificate Numbers

### Unique Identifiers

Each certificate has a unique number following the format: `CERT-EVENT-YEAR-SEQUENCE`

Example: `CERT-WORKSHOP-2024-00001`

### Number Uses

- Verification reference
- Record keeping
- Duplicate detection
- Audit trail

---

## Batch Operations

### Bulk Actions

| Action | Description |
|--------|-------------|
| Generate All | Generate for all eligible |
| Send All | Email all generated |
| Download All | ZIP file with all PDFs |
| Revoke All | Remove all certificates |

### Filtering Before Action

1. Filter eligible participants
2. Select specific group
3. Apply batch action
4. Confirm

---

## Certificate Management

### View Issued Certificates

1. Go to **Certificates**
2. Click **Issued**
3. View list of all certificates

### Certificate Record

| Field | Description |
|-------|-------------|
| Number | Unique identifier |
| Participant | Recipient name |
| Template | Which template used |
| Generated | Generation date |
| Status | Active/Revoked |

---

## Revoking Certificates

### When to Revoke

- Issued in error
- Eligibility revoked
- Participant request
- Fraud detected

### How to Revoke

1. Find certificate
2. Click **Revoke**
3. Enter reason
4. Confirm

### After Revocation

- Certificate marked as revoked
- Verification page shows revoked status
- Audit trail maintained

---

## Quality Assurance

### Before Mass Generation

1. Generate test certificate
2. Verify all fields
3. Check formatting
4. Test QR code
5. Review print quality

### Spot Checks

After generation:

- Sample random certificates
- Verify participant data
- Check for duplicates
- Confirm eligibility

---

## Troubleshooting

### Generation failed

1. Check error message
2. Verify template is valid
3. Check participant data
4. Review system logs
5. Try regenerating

### Certificate looks wrong

1. Check template design
2. Verify field mappings
3. Check character limits
4. Test with different names

### Participant didn't receive email

1. Verify email address
2. Check spam folder
3. Review email logs
4. Resend manually

---

## Best Practices

### Timing

- Wait until event ends
- Ensure all check-ins recorded
- Verify eligibility data
- Allow time for corrections

### Quality

- Test with sample certificates
- Review before mass sending
- Have backup of all certificates
- Document generation date

### Communication

- Inform participants when available
- Provide download instructions
- Include verification info
- Set expectations on timeline

---

## Next Steps

- [Set up verification](/docs/certificate-verification) page
- [Configure eligibility](/docs/eligibility-rules) rules
- [Design templates](/docs/certificate-templates)
