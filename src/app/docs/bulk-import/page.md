---
title: Bulk Import Participants
nextjs:
  metadata:
    title: Bulk Import Participants
    description: Import multiple participants at once using CSV or Excel files in GatherHub.
---

Import participants in bulk using CSV or Excel files. This is useful for pre-registered events, corporate bookings, or migrating from other systems. {% .lead %}

---

## When to Use Bulk Import

- Corporate events with pre-registered attendees
- Internal events with employee lists
- Migrating from another registration system
- Community events with membership lists
- Pre-approved participant lists

---

## Import Process Overview

1. Download the import template
2. Fill in participant data
3. Upload the file
4. Map columns to fields
5. Review and validate
6. Confirm import

---

## Preparing Your File

### Download Template

1. Go to **Participants**
2. Click **Import**
3. Click **Download Template**

The template includes all standard and custom fields.

### File Formats

| Format | Extension | Notes |
|--------|-----------|-------|
| CSV | .csv | Universal, recommended |
| Excel | .xlsx | Preserves formatting |
| Excel | .xls | Legacy format |

### Required Columns

| Column | Required | Description |
|--------|----------|-------------|
| name | Yes | Participant's full name |
| email | Yes | Valid email address |
| ticket_type | Yes | Must match existing ticket type name |

### Optional Columns

| Column | Description |
|--------|-------------|
| phone | Phone number |
| [custom_field] | Your custom field responses |

---

## Template Format

### Standard Template

```csv
name,email,phone,ticket_type
John Smith,john@example.com,+60123456789,General Admission
Jane Doe,jane@example.com,+60198765432,VIP
```

### With Custom Fields

```csv
name,email,phone,ticket_type,dietary_requirements,t_shirt_size
John Smith,john@example.com,+60123456789,General Admission,Vegetarian,L
Jane Doe,jane@example.com,+60198765432,VIP,None,M
```

---

## Uploading the File

### Upload Steps

1. Go to **Participants** > **Import**
2. Click **Choose File** or drag and drop
3. Select your CSV or Excel file
4. Click **Upload**

### File Validation

The system checks:

- File format is valid
- Required columns are present
- Data types are correct

---

## Column Mapping

After upload, map your columns to GatherHub fields:

### Auto-Mapping

Common column names are automatically mapped:

- "name", "full_name", "participant_name" → Name
- "email", "email_address" → Email
- "phone", "telephone", "mobile" → Phone

### Manual Mapping

For unrecognized columns:

1. Click the dropdown for each column
2. Select the matching GatherHub field
3. Or choose "Skip this column"

---

## Data Validation

### Validation Checks

| Check | Error if... |
|-------|-------------|
| Email format | Invalid email address |
| Duplicate email | Email already registered |
| Ticket type | Doesn't match existing type |
| Required fields | Empty values |
| Custom field options | Value not in allowed options |

### Validation Results

| Status | Description |
|--------|-------------|
| Valid | Row will be imported |
| Warning | Will import with notes |
| Error | Row will be skipped |

---

## Handling Errors

### Viewing Errors

After validation, you'll see:

- Total rows in file
- Valid rows
- Rows with warnings
- Rows with errors

Click on errors to see details.

### Common Errors

| Error | Solution |
|-------|----------|
| Invalid email | Fix email format |
| Duplicate email | Remove duplicate or update existing |
| Unknown ticket type | Check ticket type name spelling |
| Missing required field | Fill in the value |

### Fixing Errors

1. Download error report
2. Fix errors in your spreadsheet
3. Re-upload corrected file

---

## Import Options

### Import Settings

| Option | Description |
|--------|-------------|
| Skip duplicates | Ignore rows with existing emails |
| Update duplicates | Update existing records |
| Send confirmations | Email confirmation to imported participants |
| Mark as paid | Set payment status to paid |

### Payment Handling

| Option | Use When |
|--------|----------|
| Mark as paid | Pre-paid or complimentary |
| Mark as pending | Need to collect payment later |
| Generate invoice | Send invoice for payment |

---

## Confirmation Emails

### During Import

Choose whether to send confirmation emails:

| Option | Behavior |
|--------|----------|
| Send confirmations | Each participant gets confirmation email |
| Don't send | Import silently, send later |

### After Import

Send confirmations to imported participants:

1. Filter by import date
2. Select participants
3. Click "Resend Confirmation"

---

## Import History

### View Past Imports

1. Go to **Participants** > **Import**
2. Click **Import History**

### History Details

| Info | Description |
|------|-------------|
| Date | When import occurred |
| File name | Original file name |
| Rows imported | Successfully imported |
| Rows skipped | Failed validation |
| Imported by | User who performed import |

---

## Best Practices

### Preparing Data

- Clean data before import
- Validate email addresses
- Use consistent formatting
- Remove empty rows

### Testing

- Test with a small file first
- Verify data appears correctly
- Check confirmation emails
- Validate custom field data

### Large Imports

- Break into smaller batches (500-1000 rows)
- Import during off-peak hours
- Monitor for errors

---

## Data Formatting Tips

### Names

- Consistent format (First Last)
- Remove titles if not needed
- Check for extra spaces

### Emails

- All lowercase
- No spaces
- Valid format (x@y.z)

### Phone Numbers

- Consistent format
- Include country code
- Numbers only (or consistent separators)

### Custom Fields

- Match exact option values
- Use correct format for dates/numbers
- Leave empty if not applicable

---

## Import Templates

### Corporate Training

```csv
name,email,phone,ticket_type,company,department,job_title
```

### Conference

```csv
name,email,ticket_type,dietary_requirements,session_preference
```

### Workshop

```csv
name,email,phone,ticket_type,experience_level,goals
```

---

## After Import

### Verify Data

1. Review imported participants
2. Check random samples
3. Verify custom field data
4. Test check-in for a few

### Follow Up

- Send event details
- Share joining instructions
- Confirm any special requirements

---

## Troubleshooting

### Import stuck or slow

- File may be too large
- Split into smaller files
- Check internet connection

### Wrong data in fields

- Check column mapping
- Verify template format
- Look for extra columns

### Participants not receiving emails

- Verify email addresses
- Check spam settings
- Review email delivery logs

---

## Next Steps

- [Manage imported participants](/docs/managing-participants)
- [Track registration status](/docs/registration-status)
- [Set up check-in](/docs/checkin-overview) for the event
