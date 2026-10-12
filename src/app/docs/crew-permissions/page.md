---
title: Crew Access Matrix
nextjs:
  metadata:
    title: Crew Access Matrix
    description: Exactly what each crew role and permission can do across GatherHub event management.
---

Every crew member gets their access from **one role** on the event. The role is a list of permissions, and each permission opens a set of pages in the event menu. This page lists all of them. {% .lead %}

---

## How access is decided

```
Crew role (system or custom) ─┐
                              ├─► Effective permissions ─► Pages in the event menu
Custom permissions (optional) ┘   (custom REPLACES the role's list)
```

- **One role per person per event.** Pick it when you add the crew member.
- **Custom permissions replace the role completely.** They don't add to it. Tick **Use custom permissions (override role defaults)** in **Crew → Edit Crew Member**, then tick every permission that person needs, including the ones the role already had.
- **Only active crew count.** A pending invitation or removed member has no access.
- **Your organisation doesn't matter.** A crew member from another organisation (or with none) gets exactly the access their role gives. Paid features follow the **event owner's plan**, not the crew member's plan.
- **Event owner and organisation owner/admins** always have full access. They are not crew.

---

## Access matrix by system role

✅ = allowed · — = not allowed

| Area / page | Permission | Organizer | Coordinator | Floor Manager | Staff | Volunteer | Speaker |
|---|---|:-:|:-:|:-:|:-:|:-:|:-:|
| Event details (view) | any active crew | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Edit event details form | Update Event Details | ✅ | ✅ | — | — | — | — |
| Reports + PDF / email report | View Reports | ✅ | ✅ | ✅ | — | — | — |
| Orders (view) | View Orders | ✅ | ✅ | — | — | — | — |
| Ticket types | Manage Ticket Types | ✅ | — | — | — | — | — |
| Earnings | View Earnings | ✅ | — | — | — | — | — |
| Location, media, SEO, features, custom fields, payment settings | Full Event Management | ✅ | — | — | — | — | — |
| Discounts, bundles, refunds, manual payment approval, order actions | Full Event Management | ✅ | — | — | — | — | — |
| SMS / WhatsApp blast, marketing studio | Full Event Management | ✅ | — | — | — | — | — |
| Lucky draw, booth voting, scavenger hunt, gamification, seating, tables, gates | Full Event Management | ✅ | — | — | — | — | — |
| Certificate settings / templates / revoke | Full Event Management | ✅ | — | — | — | — | — |
| Issue certificates | Issue Certificates | ✅ | — | — | ✅ | — | — |
| Participants & registrations | Manage Participants | ✅ | ✅ | — | — | — | — |
| Gate check-in & attendance ¹ | Check In Attendees | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| Sessions + session check-in | Manage Sessions | ✅ | — | ✅ | — | — | — |
| Activities + activity check-in | Manage Activities | ✅ | — | ✅ | — | — | — |
| Kit collection | Manage Kit Collection | ✅ | — | ✅ | — | — | — |
| Polls | Manage Polls | ✅ | — | ✅ | — | — | — |
| Q&A | Moderate Q&A | ✅ | — | ✅ | — | — | — |
| Surveys | Manage Surveys | ✅ | — | ✅ | — | — | — |
| Social wall | Moderate Social Wall | ✅ | — | ✅ | — | — | — |
| Speakers | Manage Speakers | ✅ | — | — | — | — | — |
| Sponsors | Manage Sponsors | ✅ | — | — | — | — | — |
| Exhibitors | Manage Exhibitors | ✅ | — | — | — | — | — |
| Blast email | Send Blast Email | ✅ | — | — | — | — | — |
| Email history | View Email History | ✅ | — | — | — | — | — |
| Crew list | View Crew List | ✅ | ✅ | ✅ | — | — | ✅ |
| Add / edit / remove crew | Manage Crew Members | ✅ | — | — | — | — | — |
| Custom crew roles | Manage Crew Roles | ✅ | — | — | — | — | — |
| Delete event, payouts | owner / org admin only | — | — | — | — | — | — |

¹ Crew can check in only on a **published** event, inside the crew window: from the check-in grace period before the event starts (default 60 minutes) until 1 day after it ends. The event owner can check in at any time, which helps with testing.

Some pages also need the feature switched on for the event (for example Sessions, Certificates, Polls), and paid features need the event owner's plan to include them. If a role allows a page but the menu item is missing, check **Features** first.

---

## All crew permissions

These are the permissions you can tick on a custom role or as custom permissions.

| Permission | What it opens |
|---|---|
| Check In Attendees | Gate scanner, manual check-in, attendance list (crew window only) |
| Manage Participants | Participant registrations: add, approve, edit, import, walk-in |
| Issue Certificates | Certificates menu; issue certificates to participants |
| Manage Kit Collection | Kit items and the kit collection scanner |
| Manage Sessions | Sessions and session check-in |
| Manage Activities | Activities and activity check-in |
| Manage Speakers | Speakers |
| Manage Sponsors | Sponsors |
| Manage Exhibitors | Exhibitors and booths |
| Manage Polls | Live polls and poll results |
| Moderate Q&A | Q&A moderation |
| Manage Surveys | Surveys and survey results |
| Moderate Social Wall | Social wall moderation |
| Send Blast Email | Compose and send blast emails |
| View Email History | Sent blast emails |
| View Crew List | Crew list (read only) |
| View Reports | All report pages, PDF download and emailed report |
| Manage Ticket Types | Ticket types |
| View Orders | Orders list |
| View Earnings | Earnings |
| Manage Crew Members | Add, edit and remove crew |
| Manage Crew Roles | Create and edit custom crew roles |
| Update Event Details | The event details form |
| Full Event Management | Everything an event manager does: settings, location, media, SEO, features, custom fields, discounts, refunds, payment approval, order actions, SMS/WhatsApp, engagement tools, certificate setup |

{% callout type="warning" title="Full Event Management is powerful" %}
It gives the same day-to-day control as the event owner, including refunds and discounts. Give it only to people you would trust to run the event. Deleting the event and requesting payouts stay with the owner and organisation admins.
{% /callout %}

---

## Common setups

| Need | Use |
|---|---|
| Co-organiser who runs everything | **Organizer** |
| Registration desk lead (participants, orders, reports) | **Coordinator** |
| On-site run-of-show (sessions, kit, polls, Q&A) | **Floor Manager** |
| Check-in + certificate desk | **Staff** |
| Gate scanner only | **Volunteer** |
| Presenter listed on the crew page | **Speaker** |
| Finance helper who should see money but not change settings | Custom role: View Orders + View Earnings + View Reports |
| Coordinator who also sends blasts | Custom permissions: Coordinator's list **plus** Send Blast Email |

---

## Troubleshooting

| Symptom | Check |
|---|---|
| Menu item missing | The role lacks the permission, the event feature is off, or the owner's plan doesn't include the feature |
| "403 Forbidden" | Same as above. Also check the crew member is **active**, not still invited |
| Scanner says check-in isn't open yet | Outside the crew window; see note ¹ |
| Custom permissions removed access they had before | Custom permissions replace the role. Tick the role's permissions again as well |

---

## Next steps

- [Crew roles](/docs/crew-roles)
- [Invite crew members](/docs/inviting-crew)
- [Check-in overview](/docs/checkin-overview)
