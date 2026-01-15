---
title: Eligibility Rules
nextjs:
  metadata:
    title: Eligibility Rules
    description: Configure who qualifies for certificates based on attendance and other criteria in GatherHub.
---

Define who qualifies for certificates by setting eligibility rules based on attendance, completion, and other criteria. {% .lead %}

---

## Understanding Eligibility

Eligibility rules determine which participants receive certificates. Rules can be based on:

- Attendance percentage
- Session completion
- Activity participation
- Manual approval
- Custom criteria

---

## Setting Up Eligibility

### Access Settings

1. Go to your event dashboard
2. Click **Certificates**
3. Select **Eligibility Rules**

### Rule Types

| Rule Type | Description |
|-----------|-------------|
| Attendance-based | Requires minimum attendance |
| Completion-based | Requires specific completions |
| Manual | Organizer selects recipients |
| Automatic | All checked-in participants |

---

## Attendance-Based Rules

### Minimum Attendance

Set a percentage threshold:

| Setting | Example |
|---------|---------|
| Minimum Percentage | 80% |
| Based On | Sessions, Activities, or Both |

### How It Works

```
Eligible if: Attendance % ≥ Minimum Required %

Example:
- Minimum: 80%
- Participant attended: 4 of 5 sessions (80%)
- Result: Eligible ✓
```

### Configuration

1. Enable **Attendance-based eligibility**
2. Set **Minimum percentage** (e.g., 80%)
3. Choose what counts:
   - All sessions
   - Required sessions only
   - All activities
   - Required activities only

---

## Session Requirements

### Required Sessions

Mark specific sessions as required:

1. Go to **Sessions**
2. Edit session
3. Enable **Required for certificate**
4. Save

### Session Rules

| Rule | Description |
|------|-------------|
| All required | Must attend all required sessions |
| Any required | Must attend at least one |
| Minimum count | Must attend X required sessions |

### Example

```
Required Sessions: Opening, Training, Closing
Rule: Must attend all required sessions

Participant A: Opening ✓, Training ✓, Closing ✓ → Eligible ✓
Participant B: Opening ✓, Training ✗, Closing ✓ → Not Eligible ✗
```

---

## Activity Requirements

### Required Activities

Mark activities as mandatory:

1. Go to **Activities**
2. Edit activity
3. Enable **Required for certificate**
4. Save

### Activity Rules

| Rule | Description |
|------|-------------|
| Complete all | Must complete all activities |
| Complete any | Must complete at least one |
| Minimum count | Must complete X activities |
| Points threshold | Must earn X points |

---

## Points-Based Eligibility

### Point System

Assign points to sessions/activities:

| Item | Points |
|------|--------|
| Opening Keynote | 10 |
| Workshop A | 20 |
| Workshop B | 20 |
| Networking | 5 |
| Closing | 10 |

### Threshold Settings

| Setting | Value |
|---------|-------|
| Required Points | 50 |
| Maximum Points | 65 |

### How It Works

Participant earns points based on attendance. Certificate issued if points meet threshold.

---

## Achievement Levels

### Multiple Certificate Tiers

Create different certificate levels:

| Level | Requirement |
|-------|-------------|
| Bronze | 60% attendance |
| Silver | 80% attendance |
| Gold | 100% attendance |

### Configuration

1. Create multiple certificate templates
2. Set different eligibility rules for each
3. Assign templates to levels
4. Generate based on achievement

---

## Manual Eligibility

### When to Use

- Special circumstances
- Custom criteria not captured by rules
- VIP or speaker certificates
- Corrections

### Setting Manual Eligibility

1. Go to **Participants**
2. Select participant
3. Click **Certificate Eligibility**
4. Toggle eligible/not eligible
5. Add reason

{% callout title="Manual override" %}
Manual eligibility settings override automatic rules. Document the reason for audit purposes.
{% /callout %}

---

## Exclusion Rules

### Excluding Participants

Prevent specific participants from receiving certificates:

| Reason | Action |
|--------|--------|
| Did not complete | Mark as ineligible |
| Conduct issues | Manual exclusion |
| Requested exclusion | Honor request |
| Data errors | Correct and reassess |

### How to Exclude

1. Go to **Participants**
2. Select participant
3. Toggle **Certificate Eligibility** off
4. Add exclusion reason

---

## Checking Eligibility

### Before Generation

Preview who qualifies:

1. Go to **Certificates**
2. Click **Check Eligibility**
3. View eligible participants
4. Review borderline cases

### Eligibility Report

| Column | Description |
|--------|-------------|
| Participant | Name |
| Attendance | Percentage |
| Points | If applicable |
| Status | Eligible/Not eligible |
| Reason | Why status |

---

## Rule Examples

### Training Program

```
Rules:
- Minimum 80% session attendance
- Complete final assessment activity
- No early departures from sessions
```

### Conference

```
Rules:
- Check in to event
- Attend at least 1 session
- (More lenient for networking events)
```

### Certification Course

```
Rules:
- 100% attendance of all required sessions
- Complete all practical activities
- Pass assessment (80%+ score)
```

### Workshop Series

```
Rules:
- Attend all 4 workshops
- Complete take-home assignments
- Present final project
```

---

## Best Practices

### Setting Rules

- Be clear about requirements upfront
- Communicate rules to participants
- Set achievable but meaningful thresholds
- Consider different attendee circumstances

### During Event

- Track attendance accurately
- Note any issues or exceptions
- Update manual eligibility as needed

### After Event

- Review eligibility before generating
- Handle edge cases thoughtfully
- Document exceptions

---

## Troubleshooting

### Participant should be eligible but isn't

1. Check attendance records
2. Verify check-in was recorded
3. Review required vs optional sessions
4. Check manual eligibility settings

### Too few eligible participants

1. Review threshold settings
2. Check attendance data accuracy
3. Consider rule adjustments
4. Use manual override if justified

### Participant contests eligibility

1. Review their attendance record
2. Check for missing check-ins
3. Verify data accuracy
4. Consider appeal process

---

## Next Steps

- [Create certificate templates](/docs/certificate-templates)
- [Generate certificates](/docs/generating-certificates) for eligible participants
- [Set up verification](/docs/certificate-verification)
