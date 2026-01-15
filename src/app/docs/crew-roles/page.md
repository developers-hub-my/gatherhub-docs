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

### Organizer

Full access to event management.

**Permissions:**
- All event settings
- All participant management
- All check-in functions
- All certificate functions
- All communication features

**Use for:** Co-organizers, event managers

### Coordinator

Manages participants and event operations.

**Permissions:**
- View and edit event details
- Manage participants
- Handle check-in
- Send communications
- View reports

**Use for:** Team leads, department heads

### Staff

Handles operational tasks.

**Permissions:**
- View event details
- Perform check-in
- View participant info
- Limited editing

**Use for:** Operations team, registration desk

### Volunteer

Assists with basic tasks.

**Permissions:**
- View event schedule
- Perform check-in
- View own assigned tasks
- Basic participant lookup

**Use for:** Volunteer helpers, event assistants

### Speaker

Views own sessions and participant info.

**Permissions:**
- View event overview
- View own sessions/activities
- View session attendees
- Update own profile

**Use for:** Presenters, trainers, facilitators

---

## Role Comparison

| Permission | Organizer | Coordinator | Staff | Volunteer | Speaker |
|------------|-----------|-------------|-------|-----------|---------|
| View event | ✓ | ✓ | ✓ | ✓ | ✓ |
| Edit event | ✓ | ✓ | - | - | - |
| View participants | ✓ | ✓ | ✓ | Limited | Own session |
| Edit participants | ✓ | ✓ | - | - | - |
| Check-in | ✓ | ✓ | ✓ | ✓ | - |
| Issue certificates | ✓ | ✓ | - | - | - |
| Send emails | ✓ | ✓ | - | - | - |
| View reports | ✓ | ✓ | Limited | - | - |
| Manage crew | ✓ | - | - | - | - |

---

## Choosing the Right Role

### Decision Guide

```
Does the person need full control?
├── Yes → Organizer
└── No → Does the person manage others?
    ├── Yes → Coordinator
    └── No → Is the person presenting?
        ├── Yes → Speaker
        └── No → Do they need to edit data?
            ├── Yes → Staff
            └── No → Volunteer
```

### Common Assignments

| Person | Recommended Role |
|--------|-----------------|
| Co-organizer | Organizer |
| Registration desk lead | Coordinator |
| Registration desk helper | Staff |
| Event day volunteer | Volunteer |
| Workshop presenter | Speaker |
| Technical support | Staff |
| VIP liaison | Coordinator |

---

## Role Limitations

### What Each Role Cannot Do

**Coordinator:**
- Cannot manage other crew members
- Cannot delete the event
- Cannot change event ownership

**Staff:**
- Cannot edit event settings
- Cannot manage participants
- Cannot send mass communications

**Volunteer:**
- Cannot access detailed participant data
- Cannot edit anything
- Cannot view reports

**Speaker:**
- Cannot manage participants
- Cannot perform check-in
- Cannot access other sessions

---

## Custom Permissions

### Beyond Default Roles

For needs not covered by default roles:

1. Assign the closest role
2. Go to **Crew** > **Permissions**
3. Customize specific permissions
4. Save changes

### Example Customizations

| Default Role | Added Permission | Use Case |
|--------------|-----------------|----------|
| Staff | Issue certificates | Certificate desk |
| Volunteer | View all participants | Info booth |
| Speaker | Check-in for session | Self-managed check-in |

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
