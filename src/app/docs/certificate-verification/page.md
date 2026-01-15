---
title: Certificate Verification
nextjs:
  metadata:
    title: Certificate Verification
    description: How GatherHub certificate verification works for validating participant credentials.
---

Certificate verification allows anyone to confirm the authenticity of certificates issued through GatherHub. {% .lead %}

---

## Verification System

Each certificate includes a QR code and unique number that links to a verification page confirming:

- Certificate authenticity
- Participant name
- Event details
- Issue date
- Current status

---

## Verification Methods

### QR Code Scan

1. Scan QR code on certificate
2. Opens verification page
3. Shows certificate details
4. Confirms authenticity

### Manual Verification

1. Go to verification page
2. Enter certificate number
3. View verification result
4. Confirm details match

### Verification URL

The verification URL follows this format: `gatherhub.app/verify/CERT123456` where the last part is the unique certificate number.

---

## What Verification Shows

### Valid Certificate

When certificate is valid:

| Field | Content |
|-------|---------|
| Status | Valid ✓ |
| Participant | Full name |
| Event | Event name |
| Date | Event date |
| Issued | Issue date |
| Certificate # | Unique number |

### Revoked Certificate

When certificate has been revoked:

| Field | Content |
|-------|---------|
| Status | Revoked ✗ |
| Reason | Why revoked |
| Revoked Date | When revoked |

### Invalid Certificate

When certificate number doesn't exist:

| Field | Content |
|-------|---------|
| Status | Not Found |
| Message | Certificate not in system |

---

## Public Verification Page

### Design

The verification page is:

- Publicly accessible (no login needed)
- Mobile-friendly
- Clean, professional design
- Shows essential info only

### Branding

Your organization's:

- Logo displayed
- Name shown
- Contact information

---

## QR Code Details

### What's Encoded

QR codes contain:

- Verification URL
- Certificate identifier
- Checksum for integrity

### QR Code Placement

Recommended positions:

- Bottom corner
- Near signature area
- Clearly visible but not distracting

### Scanning

QR code can be scanned with:

- Smartphone camera
- QR scanner app
- Any QR reader

---

## Employer Verification

### Common Use Cases

Employers verify certificates for:

- Job applications
- Professional credentials
- Training completion
- Compliance requirements

### What Employers See

Clear confirmation of:

- Participant completed event
- Event was legitimate
- Certificate is authentic
- No signs of tampering

---

## Batch Verification

### For Organizations

Verify multiple certificates:

1. Access verification API
2. Submit certificate numbers
3. Receive verification results
4. Process programmatically

### API Verification

Send a GET request to `/api/verify/CERT123456` (replacing with the actual certificate number).

The response includes:

| Field | Example |
|-------|---------|
| valid | true |
| participant | John Smith |
| event | Training Workshop |
| issued | 2024-01-15 |

---

## Preventing Fraud

### Built-in Security

- Unique certificate numbers
- QR codes link to verification
- Revocation capability
- Audit trail

### Red Flags

Signs of potentially fraudulent certificates:

- QR code doesn't scan
- Verification fails
- Details don't match
- Poor print quality

### If Fraud Suspected

1. Verify through GatherHub
2. Contact issuing organization
3. Request additional proof
4. Report fraudulent claims

---

## Managing Verification

### Access Logs

Track verification attempts:

| Log Entry | Content |
|-----------|---------|
| Timestamp | When verified |
| Certificate | Which certificate |
| IP Address | Verifier's location |
| Result | Valid/Invalid |

### Viewing Logs

1. Go to **Certificates**
2. Click **Verification Logs**
3. Filter by date/certificate
4. Export if needed

---

## Certificate Status

### Status Types

| Status | Meaning |
|--------|---------|
| Active | Valid, can be verified |
| Revoked | Invalidated, shows revoked |
| Expired | If expiration set |

### Status Changes

Update certificate status:

1. Go to **Certificates**
2. Find certificate
3. Change status
4. Status reflected in verification

---

## Customization

### Verification Page Content

Customize what's displayed:

| Element | Customizable |
|---------|--------------|
| Logo | Yes |
| Colors | Yes |
| Additional text | Yes |
| Contact info | Yes |
| Social links | Yes |

### Custom Verification Messages

Add messages like:

- "This certificate is valid and authentic"
- "Contact us at email for inquiries"
- "This certificate was issued by [Organization]"

---

## Verification Best Practices

### For Issuers

- Include clear QR codes
- Provide verification instructions
- Keep records current
- Respond to verification inquiries

### For Verifiers

- Always verify, don't just view
- Check QR code, not just visuals
- Compare details with claims
- Contact issuer if uncertain

---

## Troubleshooting

### QR code doesn't work

1. Check code is clear
2. Try different scanner
3. Use manual verification
4. Contact issuer

### Verification shows wrong info

1. Check certificate number
2. Verify correct event
3. Contact issuer to correct
4. Request new certificate

### Certificate shows as revoked

1. Contact issuer
2. Ask reason for revocation
3. Request correction if error
4. Get replacement if needed

---

## Integration Options

### Website Widget

Add verification to your website:

```html
<iframe src="gatherhub.app/verify/embed" />
```

### API Integration

Programmatic verification:

- RESTful API available
- Returns JSON response
- Batch verification supported
- Authentication required

---

## Next Steps

- [Create certificate templates](/docs/certificate-templates)
- [Set eligibility rules](/docs/eligibility-rules)
- [Generate certificates](/docs/generating-certificates)
