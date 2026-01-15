# GatherHub Documentation

Official documentation for [GatherHub](https://gatherhub.app) - the event management platform that proves participation.

Built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [Markdoc](https://markdoc.io).

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the documentation.

## Project Structure

```
src/
├── app/
│   ├── docs/          # Documentation pages (Markdoc .md files)
│   └── page.md        # Homepage
├── components/        # React components
├── lib/
│   └── navigation.ts  # Sidebar navigation structure
└── markdoc/           # Markdoc configuration and custom tags
```

## Writing Documentation

Documentation pages are written in Markdoc format at `src/app/docs/{slug}/page.md`.

### Frontmatter

```yaml
---
title: Page Title
nextjs:
  metadata:
    title: Page Title
    description: SEO description
---
```

### Available Components

```markdown
{% callout title="Note" type="note" %}
Important information here.
{% /callout %}

{% callout type="warning" title="Warning" %}
Warning message here.
{% /callout %}

{% figure src="/images/screenshot.png" alt="Description" caption="Caption" /%}

{% quick-links %}
{% quick-link title="Title" icon="installation" href="/docs/page" description="Description" /%}
{% /quick-links %}
```

### Adding New Pages

1. Create `src/app/docs/{slug}/page.md`
2. Add entry to `src/lib/navigation.ts`

## Search

Global search is powered by [FlexSearch](https://github.com/nextapps-de/flexsearch). Use `⌘K` or `Ctrl+K` to open.

The search index is built automatically from all documentation pages.

## Related Repositories

- [gatherhub-app](https://github.com/gatherhub/gatherhub-app) - Main application (Laravel)
- [gatherhub-web](https://github.com/gatherhub/gatherhub-web) - Marketing website (Next.js)

## License

This documentation site is built using the [Tailwind Plus](https://tailwindcss.com/plus) Syntax template.
