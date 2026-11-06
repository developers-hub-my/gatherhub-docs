---
title: Reports Overview
nextjs:
  metadata:
    title: Reports Overview
    description: One event report page that says how your event went in one sentence, with arrivals, People's Choice, feedback, PDF reports to share and Excel exports.
---

The event report tells you how your event went at a glance: who registered, who came, when they arrived and who won People's Choice. Share it as a PDF or download the raw rows in Excel. {% .lead %}

---

## Opening the Report

Open your event and go to **Wrap → Reports Overview**.

{% figure src="/images/features/reports-01-overview.jpg" alt="Event report page with a one-line summary, the metrics band, arrivals per hour and People's Choice winners" caption="Wrap → Reports Overview." /%}

{% callout title="Plan feature" %}
Reports need the **Advanced reporting** feature on your organisation's plan. Without it, the Reports pages are not shown. In **Simple** sidebar mode, the other report pages (Registration, Attendance, Financial) are under **More tools**.
{% /callout %}

---

## What's on the Page

| Section | Shows |
|---|---|
| **Report period** | **Whole event** (from registration opening to the end of the event), **Event day**, or **Custom…** dates |
| Summary line | One sentence, for example "32 registered, RM 47.50 net. 84% turned up." |
| Figures | **Registered**, **Attended**, **Did not attend**, **Approved** (only with an approval step), **Booth votes**, **Net revenue** (paid events only) |
| **When people arrived** | Check-ins per hour in the event's time zone, with a tab per day for multi-day events. **Also on the day** adds kit collected and engagement counts when you used them |
| **People's Choice** | Winners by category and the overall top 5, when Vote was used. See [Vote Results](/docs/booth-voting-results) |
| **By ticket type** | Only when the event has more than one ticket type |
| Participant journey | Applied → Approved → Attended → Feedback, with an approval step or a survey |
| **Feedback** | NPS and responses, when you ran a survey |
| Downloads | The PDF reports and the Excel exports |

The report counts **people**, not orders. Attended means unique people checked in, so a second scan of the same ticket doesn't count twice.

{% callout title="Some orders need a look" %}
If the event has duplicate or unpaid orders, or paid orders with no ticket, a notice links to **Review orders**. The report figures count people, so they are not affected. This notice never appears in the PDF.
{% /callout %}

---

## PDF Reports

Click **PDF report** at the top of the page.

{% figure src="/images/features/reports-02-pdf-modal.jpg" alt="PDF report dialog with the report type, orientation, include check-in photos option, preview, download and email" caption="Preview, download or email a PDF report." /%}

| Option | Choices |
|---|---|
| **Report** | **Event Summary**: a short report for management or sponsors (about 2 pages). **Full Report**: every table, for your records |
| **Orientation** | Landscape or Portrait |
| **Include check-in photos (up to 24)** | Off by default. The PDF will then contain attendee faces, so share it carefully |

Click **Preview** or **Download**, or fill in **Recipients** (up to 10) and an optional message and click **Send report**.

The **Full Report** only includes sections the event used: registration, attendance, orders and payments, People's Choice, sessions and activities, feedback, certificates, and kit, engagement and operations. Its contents page lists what was left out and why.

---

## Excel Exports

Click **Excel exports**, or use the Downloads section, for raw rows including custom fields:

| Export | Contains |
|---|---|
| Participants | Everyone registered, with custom fields |
| Attendance | Every check-in with time and method |
| Tickets | Every issued ticket |
| Revenue summary | Gross, fees and net by ticket type. Hidden on free events |

People added by the organiser or registered at the door are labelled **Walk-in / added by organiser** in reports when they are not on one of your ticket types. See [Walk-in guide](/docs/guide-walk-in).

---

## Next Steps

- [Attendance reports](/docs/attendance-reports)
- [Revenue reports](/docs/revenue-reports)
- [Exporting data](/docs/exporting-data)
