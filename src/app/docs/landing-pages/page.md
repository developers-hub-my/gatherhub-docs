---
title: Event Landing Pages
nextjs:
  metadata:
    title: Event Landing Pages
    description: Replace your standard event page with a custom landing page built from a template or your own HTML, with live event data and ticket buttons.
---

Give your event a landing page of its own. Start from a ready-made template and edit the text and colours, or paste in your own HTML. Once published, it replaces the standard event page at your event's usual link. {% .lead %}

---

## Where to Find It

1. Open your event
2. In the event menu, open the **Grow** group and click **Landing Pages**

In simple mode, **Landing Pages** is under **More tools**.

You need permission to manage the event's settings to see this page. See the [Crew Access Matrix](/docs/crew-permissions).

---

## Creating a Page

1. Under **New page**, enter a **Page name** (for example, "Early bird campaign"). Visitors don't see this name
2. Choose what to **Start from**: one of the templates below, or **Custom HTML**
3. Click **Create page**

The page is created as a **Draft**. Nobody sees it until you publish it.

### Templates

| Template | Best for | Sections |
|----------|----------|----------|
| **Minimal Event** | Clean one-pager | Hero, date & venue, about, tickets, footer |
| **Training & Workshop** | Courses and hands-on sessions | Hero, learning outcomes, agenda, trainer, date & venue, tickets, FAQ, footer |
| **Conference & Seminar** | Multi-speaker events | Hero, highlights, speakers, programme, venue, tickets, footer |
| **Webinar & Product Launch** | Short online sessions and launches | Hero, highlights, host, call to action, FAQ, footer |
| **Sales Campaign (AIDCA)** | Persuasive sales pages (Attention, Interest, Desire, Conviction, Action) | Hero, problem, benefits, testimonials, call to action, packages, FAQ, footer |

Every template comes filled in with your event's title, date, venue, banner and organiser name, using [placeholders](#placeholders).

---

## Editing a Template Page

### Colours

Pick four colours: **Primary colour**, **Background**, **Card background** and **Text colour**.

### Sections

Each section has its own controls:

| Control | What it does |
|---------|--------------|
| Click the section name | Open or close its fields |
| Up / down arrows | Move the section |
| Eye icon | Show or hide the section. Hidden sections stay in the editor but aren't shown on the page |

### Section types

| Section | Fields |
|---------|--------|
| Hero | Small heading, heading, subheading, image URL, button label, button link |
| Date & venue | Heading, note. The date and venue come from your event |
| Text block | Heading, text (a blank line starts a new paragraph) |
| Highlights | Heading, items |
| Agenda | Heading, items |
| Speakers | Heading, speakers |
| Testimonials | Heading, quotes |
| Ticket list | Heading, note. Lists your tickets with prices and register buttons |
| FAQ | Heading, questions |
| Call to action | Heading, text, button label, button link |
| Footer | Text |

List fields take **one item per line**, with parts separated by a vertical bar (`|`):

- **Highlights:** `Hands-on labs | Guided exercises with real-world scenarios.` (title, description)
- **Agenda:** `09:00 | Registration & welcome` (time, item)
- **Speakers:** `Aina Rahman | CTO, Acme | https://…/aina.jpg` (name, role, photo URL)
- **Testimonials:** `Worth every ringgit. | Past attendee` (quote, name)
- **FAQ:** `Is it free? | See the ticket options above.` (question, answer)

### Edit as HTML

Click **Edit as HTML** to turn a template page into custom HTML, for changes the fields can't make. From then on you edit the page as code. You can't switch it back to the field editor.

---

## Custom HTML Pages

Choose **Custom HTML** when creating a page, or use **Edit as HTML** on a template page. You can:

- Type or paste HTML into the **HTML** box
- Click **Upload .html (max 1 MB)** to load a `.html` or `.htm` file. It replaces the HTML box and saves a draft

HTML, CSS and JavaScript are all allowed. The page can be at most **1 MB**.

A new custom page starts with a small example that shows the event title, date, venue and a register button.

{% callout title="Tip: AI-generated pages" %}
You can ask an AI assistant to write the page for you. Tell it to:

- Produce **one complete HTML file** with the CSS inside a `<style>` tag
- Use the GatherHub placeholders, such as `{{event.title}}`, `{{event.date}}`, `{{event.venue}}` and `{{register_url}}`, instead of typing the details in
- Use `{{tickets}}` where the ticket list should go
- Use the image URLs you copied from **Images**

Paste the result into the HTML box, save a draft and check the preview. Because the page uses placeholders, a later change to your event's date or venue shows up on the page without editing the HTML.
{% /callout %}

---

## Placeholders

Placeholders are filled in with your event's current details every time the page is shown. Use them in template fields or anywhere in your HTML. The **Placeholders & ticket buttons** box in the editor lists them all with a **Copy** button.

| Placeholder | Becomes |
|-------------|---------|
| `{{register_url}}` | Link to the ticket list on the standard event page |
| `{{tickets}}` | Your ticket list, with prices and a **Register** button for each ticket (or **Sold out**) |
| `{{ticket_url:<ticket ID>}}` | Link that opens the registration form for one ticket. The editor lists one for each of your tickets |
| `{{event.title}}` | Event title |
| `{{event.date}}` | Date, for example "Saturday, 14 November 2026". Multi-day events show the first and last day |
| `{{event.time}}` | Start and end time |
| `{{event.venue}}` | Venue name, or "Online" for a virtual event |
| `{{event.description}}` | Event description with basic formatting (paragraphs, bold, italic, lists, headings, quotes). Links and images are removed |
| `{{event.banner}}` | Event banner image URL |
| `{{event.url}}` | Standard event page URL |
| `{{event.organizer}}` | Organiser (organisation) name |

Placeholders are not case-sensitive. A placeholder the editor doesn't know is left on the page as typed, so check the preview for leftover `{{…}}` text.

### Ticket buttons

Every register link opens the **standard** event page, where the registration form lives:

- `{{register_url}}` scrolls to the ticket list
- `{{ticket_url:…}}` opens the registration form for that ticket straight away

The editor offers a ready-made **Register button** you can copy:

```html
<a href="{{register_url}}" target="_top">Register now</a>
```

If the visitor isn't signed in and the ticket isn't open to [guests](/docs/quick-registration), they're asked to sign in first.

---

## Images

The **Images** box shows your event's banners and gallery images.

- Click an image to copy its URL, then paste it into an image field or your HTML
- Click **Upload image** to add a JPG, PNG or WebP (up to 5 MB) to the event gallery

---

## Sharing & SEO

Each page has its own search and social sharing settings:

| Field | Used for | If left blank |
|-------|----------|---------------|
| **Page title** | Browser tab and search results | The event's SEO meta title, then the event title |
| **Meta description** | Search results and link previews (up to 500 characters) | The event's SEO meta description, then the start of the event description |
| **Social share image URL** | Image shown when the link is shared | The event banner |

Search engines see your event's usual link as the page address.

---

## Preview

The right side of the editor shows a **Preview (saved draft)**:

- Switch between **Desktop**, **Tablet** and **Mobile** widths
- **Open preview** opens the draft in a new tab

The preview shows the last saved draft, so click **Save draft** to see your latest changes.

---

## Publishing

| Action | What happens |
|--------|--------------|
| **Save draft** | Saves your changes. The public page doesn't change |
| **Publish** | Makes this page your public event page |
| **Update** | Shown when the page is already live. Pushes your latest changes to the public page |
| **Restore standard event page** | Shows the standard event page again. Your landing pages are kept |

Only one landing page is live at a time. Publishing a page replaces whichever landing page was live before.

### Page status

| Badge | Meaning |
|-------|---------|
| **Draft** | Never published |
| **Live** | Visitors see this page at your event link |
| **Published, not live** | Published before, but another page or the standard page is showing now |
| **Unpublished changes** | You saved changes that aren't live yet. Click **Update** |

While a landing page is live, a banner at the top of **Landing Pages** links to **View live** and to the **Standard page**.

### Which page visitors see

| Link | Shows |
|------|-------|
| Your event link | The live landing page, or the standard page if none is live |
| Your event link with `?view=standard` | Always the standard event page |

Deleting a live page also restores the standard event page.

---

## Security & Limits

Your landing page runs in a **sandbox**, separate from GatherHub:

- Scripts run, but they can't read GatherHub cookies or logins, and can't reach the dashboard or other GatherHub pages
- Links open in the full browser window, not inside the page
- Forms that send data to another website are your responsibility. GatherHub doesn't receive or protect that data, so make sure you have the visitor's consent
- HTML pages are limited to 1 MB
- Registration and payment always happen on the standard GatherHub event page

{% callout type="warning" title="Third-party code" %}
Only paste HTML and scripts you trust. Tracking scripts and forms from other services collect visitor data under your name.
{% /callout %}

---

## Next Steps

- [Turn on guest checkout](/docs/quick-registration) so landing page visitors can buy without an account
- [Set up ticket types](/docs/ticket-types) to fill your ticket list
- [Event settings](/docs/event-settings) for the event's own SEO fields
