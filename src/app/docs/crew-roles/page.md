---
title: Crew Roles
nextjs:
  metadata:
    title: Crew Roles
    description: Understanding the different crew roles available in GatherHub event management.
---

GatherHub provides predefined crew roles to quickly assign appropriate access levels to your team members. {% .lead %}

---

## Available Roles

GatherHub ships six system roles. You can also create your own in **Crew → Roles** (Create Custom Role). For page-by-page detail, see the [Crew Access Matrix](/docs/crew-permissions).

| Role | What they do | Use for |
|---|---|---|
| **Organizer** | Everything an event manager does: settings, tickets, orders, earnings, reports, participants, certificates, engagement tools, blasts, crew. Cannot delete the event or request payouts | Co-organisers, event managers |
| **Coordinator** | Participants, check-in, reports, orders (view), edit event details, crew list | Registration desk leads, team leads |
| **Floor Manager** | Check-in, sessions, activities, kit, polls, Q&A, surveys, social wall, reports, crew list | On-site run-of-show |
| **Staff** | Check-in and issuing certificates | Registration and certificate desk |
| **Volunteer** | Check-in only | Gate scanners, helpers |
| **Speaker** | Crew list only; shown on the event page if you tick *Show on public event page* | Presenters, trainers |

---

## Role Comparison

| Can… | Organizer | Coordinator | Floor Manager | Staff | Volunteer | Speaker |
|---|:-:|:-:|:-:|:-:|:-:|:-:|
| View event details | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Edit event details form | ✅ | ✅ | — | — | — | — |
| Change settings, tickets, discounts, refunds | ✅ | — | — | — | — | — |
| View reports | ✅ | ✅ | ✅ | — | — | — |
| View orders | ✅ | ✅ | — | — | — | — |
| View earnings | ✅ | — | — | — | — | — |
| Manage participants | ✅ | ✅ | — | — | — | — |
| Check in attendees | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| Sessions, activities, kit | ✅ | — | ✅ | — | — | — |
| Polls, Q&A, surveys, social wall | ✅ | — | ✅ | — | — | — |
| Issue certificates | ✅ | — | — | ✅ | — | — |
| Speakers, sponsors, exhibitors | ✅ | — | — | — | — | — |
| Send blast email | ✅ | — | — | — | — | — |
| View crew list | ✅ | ✅ | ✅ | — | — | ✅ |
| Manage crew & roles | ✅ | — | — | — | — | — |
| Delete event, payouts | — | — | — | — | — | — |

---

## Choosing the Right Role

| Person | Recommended Role |
|--------|-----------------|
| Co-organizer | Organizer |
| Registration desk lead | Coordinator |
| Stage / floor lead on the day | Floor Manager |
| Registration or certificate desk helper | Staff |
| Event day volunteer at the gate | Volunteer |
| Workshop presenter | Speaker |

---

## Custom Permissions

Two ways to go beyond the system roles:

1. **Custom role:** in **Crew → Roles**, click **Create Custom Role**, name it and tick its permissions. You can reuse it for anyone on this event.
2. **Custom permissions for one person:** in **Crew**, edit the member and tick **Use custom permissions (override role defaults)**.

{% callout type="warning" title="Custom permissions replace the role" %}
When custom permissions are on, the person gets **only** the permissions you tick, not the role's list plus extras. To "add one permission", tick the role's existing permissions as well.
{% /callout %}

---

## Multiple Roles

### One Person, Multiple Events

A person can have different roles in different events:

| Event | Role |
|-------|------|
| Workshop A | Organizer |
| Conference B | Speaker |
| Training C | Staff |

### Same Event, Single Role

Each person has one role per event. Choose the highest level needed.

---

## Role Descriptions

### Communicating Roles

When inviting crew, explain:

- What they'll be doing
- What access they'll have
- What's expected of them
- Who to contact for help

### Example Message

```
You're invited as Staff for Tech Conference 2024.

Your role includes:
- Checking in participants
- Answering basic questions
- Directing attendees

Please arrive at 8 AM for briefing.
```

---

## Best Practices

### Principle of Least Privilege

- Give minimum access needed
- Start with lower roles
- Add permissions as needed
- Review regularly

### Role Documentation

- Document who has what role
- Record why they have it
- Update when changed
- Review before events

### Training by Role

- Create role-specific guides
- Brief on available features
- Practice using tools
- Provide support contact

---

## Next Steps

- [Invite crew members](/docs/inviting-crew)
- [Configure detailed permissions](/docs/crew-permissions)
- [Learn about check-in](/docs/checkin-overview) for staff roles
