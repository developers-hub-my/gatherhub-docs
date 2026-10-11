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
2. Click **Crew Members** in the sidebar
3. Click **Add Crew Member**, then choose **Invite by Email** (or **Select User** for someone already in your organization)
4. Fill in details:
   - Email address
   - Name (optional)
   - Role (Organizer, Coordinator, Staff, Volunteer, Floor Manager, Speaker)
   - Display title (optional)
5. Click **Add Member**

{% figure src="/images/guides/12-organiser-add-crew.jpg" alt="Add Crew Member dialog with Invite by Email, email, name, role and display title" caption="Add Crew Member → Invite by Email." /%}

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

{% figure src="/images/guides/13-organiser-crew-pending.jpg" alt="Event Crew page with one pending invitation and Resend and Cancel buttons" caption="Pending invitations, with Resend and Cancel." /%}

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
3. They see **Welcome to the Crew!** and an **Open crew app** button
4. The event appears in their crew app at gatherhub.app/ops

{% figure src="/images/guides/18-crew-welcome.jpg" alt="Welcome to the Crew page with the role and the Open crew app button" caption="Welcome to the Crew." /%}

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

1. **Accept Invitation** on the invitation page
2. **Login Required** → **Create Account**. The invited email is already filled in
3. After sign-up they come back to the invitation and it is accepted automatically

{% figure src="/images/guides/15-crew-invitation.jpg" alt="You're Invited page with the event, role, expiry date and Accept Invitation" caption="The invitation page." /%}

{% figure src="/images/guides/16-crew-login-required.jpg" alt="Login Required card with Log In and Create Account" caption="Login Required." /%}

{% figure src="/images/guides/17-crew-register-prefilled.jpg" alt="Create an account form with the invited email already filled in" caption="The invited email is filled in." /%}

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
