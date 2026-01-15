---
title: Inviting Crew Members
nextjs:
  metadata:
    title: Inviting Crew Members
    description: How to invite and onboard crew members for your GatherHub events.
---

Invite team members to help manage your event by sending email invitations with role assignments. {% .lead %}

---

## Invitation Process

### How It Works

```
1. Organizer sends invitation
2. Crew member receives email
3. They click accept link
4. Account created/linked
5. Access granted to event
```

---

## Sending Invitations

### Send an Invitation

1. Go to event dashboard
2. Click **Crew** in sidebar
3. Click **Invite Crew Member**
4. Fill in details:
   - Email address
   - Role (Organizer, Coordinator, Staff, Volunteer, Speaker)
   - Personal message (optional)
5. Click **Send Invitation**

### Invitation Form

| Field | Required | Description |
|-------|----------|-------------|
| Email | Yes | Crew member's email |
| Role | Yes | Their assigned role |
| Message | No | Personal note in invitation |

---

## Bulk Invitations

### Invite Multiple People

1. Go to **Crew** > **Invite**
2. Click **Bulk Invite**
3. Enter multiple emails (one per line)
4. Select role for all
5. Send invitations

### CSV Import

Import from spreadsheet:

```csv
email,role
john@example.com,Staff
jane@example.com,Coordinator
bob@example.com,Volunteer
```

---

## Invitation Email

### What They Receive

The invitation email includes:

- Event name and details
- Their assigned role
- Link to accept
- Your personal message
- Instructions to get started

### Example Email

```
You've been invited to join [Event Name]!

[Organizer Name] has invited you to be a [Role].

Event: [Event Name]
Date: [Event Date]
Your Role: [Role]

Message from organizer:
[Your personal message]

Click here to accept this invitation:
[Accept Button]
```

---

## Invitation Status

### Status Tracking

| Status | Description |
|--------|-------------|
| Pending | Invitation sent, not yet accepted |
| Accepted | Crew member has joined |
| Expired | Invitation link expired |
| Declined | Crew member declined |

### View Status

1. Go to **Crew**
2. See status for each member
3. Filter by status if needed

---

## Managing Pending Invitations

### Resend Invitation

If they haven't accepted:

1. Find pending invitation
2. Click **Resend**
3. New email sent with fresh link

### Cancel Invitation

To withdraw an invitation:

1. Find pending invitation
2. Click **Cancel**
3. Invitation link becomes invalid

### Change Role Before Acceptance

1. Cancel current invitation
2. Send new invitation with correct role

---

## After Acceptance

### What Happens

When crew member accepts:

1. Account linked to event
2. Role permissions applied
3. Event appears in their dashboard
4. They can start working

### Crew Member Experience

They will:

1. Click accept link
2. Sign in or create account
3. See event in their dashboard
4. Access permitted features

---

## Existing Users vs New Users

### Existing GatherHub Users

If they already have an account:

- Invitation links to their account
- Event added to their dashboard
- No new account needed

### New Users

If they don't have an account:

- Prompted to create account
- Account linked to invitation
- Event access after account creation

---

## Invitation Expiration

### Default Expiration

Invitations expire after **14 days**.

### Handling Expired Invitations

1. View expired invitations
2. Delete or resend
3. Contact crew member if needed

---

## Removing Crew Members

### Remove from Event

1. Go to **Crew**
2. Find crew member
3. Click **Remove**
4. Confirm removal

### What Happens

- Access to event revoked
- Cannot see event data
- Actions logged
- Can be re-invited if needed

---

## Best Practices

### Before Sending

- Verify email addresses
- Choose correct roles
- Prepare personal message
- Have event info ready

### Follow Up

- Check for pending invitations
- Remind those who haven't accepted
- Update if roles change
- Remove inactive members

### Communication

- Explain their responsibilities
- Provide event details
- Share relevant documents
- Give contact for questions

---

## Troubleshooting

### Invitation not received

1. Check spam folder
2. Verify email address
3. Resend invitation
4. Try alternate email

### Cannot accept invitation

1. Check link is valid
2. Ensure not expired
3. Try different browser
4. Contact organizer

### Wrong role assigned

1. Remove crew member
2. Send new invitation
3. With correct role

---

## Next Steps

- [Configure permissions](/docs/crew-permissions) for fine-grained control
- [Learn about roles](/docs/crew-roles) in detail
- [Set up check-in](/docs/checkin-overview) for staff
