---
title: Managing Permissions
nextjs:
  metadata:
    title: Managing Permissions
    description: Configure fine-grained crew permissions for GatherHub event management.
---

Control exactly what each crew member can do with granular permission settings beyond the default role permissions. {% .lead %}

---

## Permission System

### How Permissions Work

```
Role → Default Permissions → Custom Overrides → Final Access
```

Each crew member has:

1. Base permissions from their role
2. Optional custom permissions
3. Combined effective permissions

---

## Permission Categories

### Participant Management

| Permission | Description |
|------------|-------------|
| View participants | See participant list and details |
| Edit participants | Modify participant information |
| Add participants | Manually add participants |
| Delete participants | Remove participants |
| Export participants | Download participant data |

### Check-In

| Permission | Description |
|------------|-------------|
| Perform check-in | Check in attendees |
| View check-in stats | See attendance dashboard |
| Undo check-in | Reverse check-in actions |
| Check-in any session | Check into all sessions |

### Certificates

| Permission | Description |
|------------|-------------|
| View certificates | See issued certificates |
| Generate certificates | Create new certificates |
| Issue certificates | Distribute to participants |
| Revoke certificates | Invalidate certificates |

### Communication

| Permission | Description |
|------------|-------------|
| Send emails | Send individual emails |
| Send blast emails | Send mass communications |
| View email history | See sent communications |
| Manage templates | Edit email templates |

### Event Settings

| Permission | Description |
|------------|-------------|
| View event settings | See configuration |
| Edit event details | Modify event info |
| Manage tickets | Edit ticket types |
| Manage sessions | Edit sessions/activities |

---

## Viewing Permissions

### Check Crew Permissions

1. Go to **Crew**
2. Click on crew member
3. View **Permissions** tab
4. See current access

### Permission Display

| Permission | Status |
|------------|--------|
| View participants | ✓ Granted |
| Edit participants | ✓ Granted |
| Delete participants | ✗ Denied |
| Perform check-in | ✓ Granted |

---

## Customizing Permissions

### Add Permission

1. Go to crew member's profile
2. Click **Permissions**
3. Enable additional permission
4. Save changes

### Remove Permission

1. Go to crew member's profile
2. Click **Permissions**
3. Disable specific permission
4. Save changes

### Reset to Default

1. Go to crew member's profile
2. Click **Reset Permissions**
3. Returns to role defaults

---

## Permission Matrix

### By Role

| Permission | Organizer | Coordinator | Staff | Volunteer | Speaker |
|------------|-----------|-------------|-------|-----------|---------|
| View participants | ✓ | ✓ | ✓ | Limited | Own |
| Edit participants | ✓ | ✓ | - | - | - |
| Perform check-in | ✓ | ✓ | ✓ | ✓ | - |
| Generate certificates | ✓ | ✓ | - | - | - |
| Send blast emails | ✓ | ✓ | - | - | - |
| Edit event settings | ✓ | Limited | - | - | - |
| Manage crew | ✓ | - | - | - | - |

---

## Common Permission Scenarios

### Registration Desk Staff

```
Role: Staff
Added permissions:
+ Add participants (for walk-ins)
+ Edit participants (corrections)
```

### Certificate Issuer

```
Role: Staff
Added permissions:
+ View certificates
+ Generate certificates
+ Issue certificates
```

### Session Coordinator

```
Role: Coordinator
Scope limited to:
- Specific sessions only
- Participants in those sessions
```

### Volunteer Coordinator

```
Role: Coordinator
Added permissions:
+ Manage crew (volunteers only)
- Financial access
```

---

## Permission Inheritance

### From Role

Permissions start from role:

```
Staff Role → Base Permissions
├── View participants ✓
├── Perform check-in ✓
├── Edit participants ✗
└── Send emails ✗
```

### Custom Additions

Add specific permissions:

```
Staff Role + Custom
├── View participants ✓ (from role)
├── Perform check-in ✓ (from role)
├── Edit participants ✓ (added)
└── Send emails ✗ (not added)
```

---

## Permission Audit

### Tracking Changes

All permission changes are logged:

| Log Entry | Content |
|-----------|---------|
| Timestamp | When changed |
| Who | Who made change |
| Permission | Which permission |
| Action | Granted/Revoked |
| By | Who authorized |

### Viewing Audit Log

1. Go to **Crew**
2. Click **Permission Log**
3. Filter by member or date
4. Export if needed

---

## Security Considerations

### Principle of Least Privilege

- Start with minimal access
- Add permissions as needed
- Review periodically
- Remove when not needed

### Sensitive Permissions

High-risk permissions to grant carefully:

| Permission | Risk |
|------------|------|
| Delete participants | Data loss |
| Export participants | Privacy |
| Manage crew | Access escalation |
| Edit event settings | Event integrity |

### Regular Review

- Review crew permissions before events
- Remove unnecessary access
- Update for role changes
- Document decisions

---

## Permission Groups

### Create Permission Groups

For common permission sets:

```
"Check-In Team"
├── View participants
├── Perform check-in
├── View check-in stats
└── Add participants (walk-ins)

"Certificate Team"
├── View participants
├── View certificates
├── Generate certificates
└── Issue certificates
```

### Apply to Members

1. Select crew members
2. Apply permission group
3. All receive same permissions

---

## Troubleshooting

### Cannot access feature

1. Check permission settings
2. Verify role assignment
3. Look for custom restrictions
4. Contact organizer

### Too much access

1. Review current permissions
2. Remove unnecessary ones
3. Consider different role
4. Document changes

### Permission conflict

1. Check custom vs role permissions
2. Custom takes precedence
3. Reset if unclear
4. Re-apply needed permissions

---

## Best Practices

### Before Event

- Set up all crew permissions
- Test access as each role
- Document permission decisions
- Brief crew on their access

### During Event

- Monitor for access issues
- Quick escalation path
- Temporary grants if needed
- Log any changes

### After Event

- Review permission usage
- Remove temporary grants
- Document lessons learned
- Update for next event

---

## Next Steps

- [Learn about roles](/docs/crew-roles)
- [Invite crew members](/docs/inviting-crew)
- [Set up check-in](/docs/checkin-overview) access
