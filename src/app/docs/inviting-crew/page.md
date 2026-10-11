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
4. They log in or create an account
5. Access granted to event
```

If the email already belongs to a GatherHub account, there is no invitation step. The person is added to the crew straight away. See [Existing Users vs New Users](#existing-users-vs-new-users).

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
| Email Address | Yes | Crew member's email |
| Name (Optional) | No | Used to greet them in the email |
| Role | Yes | Their assigned role |
| Display Title (Optional) | No | e.g., "Lead Coordinator, Stage Manager" |
| Show on public event page | No | List them on the event page |
| Use custom permissions (override role defaults) | No | Pick permissions for this person instead of the role's defaults |

There is no personal message field. Invite people one at a time. There is no bulk invite or CSV import for crew.

---

## Invitation Email

### What They Receive

The invitation email includes:

- Who invited them
- Event name and date
- Their assigned role and display title
- An **Accept Invitation** button
- The date the invitation expires

### Example Email

```
You're Invited to Join the Crew!

Hello [Name],

[Organizer Name] has invited you to join the crew for the event:

[Event Name]
Event Date: [Event Date]
Your Role: [Role]
Title: [Display Title]

[Accept Invitation]

This invitation will expire on [Date and time].
```

---

## Invitation Status

### Status Tracking

| Status | Description |
|--------|-------------|
| Pending | Invitation sent, not yet accepted |
| Accepted | Crew member has joined |
| Expired | Invitation link expired |
| Declined | Crew member clicked **Decline** on the invitation page |
| Cancelled | You cancelled the invitation |

### View Status

1. Go to **Crew Members**
2. Open invitations show under **Pending Invitations**. Expired, declined and cancelled ones drop off this list
3. Crew who have joined show in the members table as **Active** or **Inactive**. Filter by role with **All Roles**

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
3. See the event in their crew app at gatherhub.app/ops
4. Access permitted features

---

## Existing Users vs New Users

### Existing GatherHub Users

If the email already has a GatherHub account:

- They are added to the crew right away, as **Active**
- They get an email and an in-app notification
- No invitation to accept, and no new account needed

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

Invitations expire after **7 days**.

### Handling Expired Invitations

1. Expired invitations disappear from **Pending Invitations**
2. Send a new one with **Add Crew Member**
3. Contact crew member if needed

---

## Removing Crew Members

### Remove from Event

1. Go to **Crew Members**
2. Find crew member
3. Click **Remove**
4. Confirm removal

### What Happens

- Access to event revoked
- Cannot see event data
- Actions logged
- Can be added again if needed (they come back with the role you pick)

---

## Best Practices

### Before Sending

- Verify email addresses
- Choose correct roles
- Set a display title if they appear on the event page
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

1. For a crew member who has joined, click **Edit** on their row
2. Pick the correct **Role**
3. Click **Update Member**

For a pending invitation, cancel it and send a new one with the correct role.

---

## Next Steps

- [Configure permissions](/docs/crew-permissions) for fine-grained control
- [Learn about roles](/docs/crew-roles) in detail
- [Set up check-in](/docs/checkin-overview) for staff
