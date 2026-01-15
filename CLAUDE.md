# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About GatherHub

GatherHub is **the operational hub for events and activities** — a comprehensive event management platform that helps organizations run purposeful gatherings from registration and payment through to attendance validation and verifiable certificates.

**Target use cases:** Trainings, workshops, seminars, conferences, community events, and corporate programs.

### GatherHub Ecosystem

| Repository | Purpose | Tech Stack |
|------------|---------|------------|
| `gatherhub-app` | Full-stack event platform (backend + organizer dashboard) | Laravel 12, Livewire 3, Flux UI, PHP 8.2+ |
| `gatherhub-web` | Marketing website and landing pages | Next.js 15, React 19, TypeScript |
| `gatherhub-docs` | **This repo** — Platform documentation | Next.js 15, Markdoc |

### Core Platform Features (gatherhub-app)

- **Event Management** — Create events with sessions, activities, custom fields, and capacity limits
- **Registration & Ticketing** — Multiple ticket types, custom forms, bulk import, waitlist handling
- **Payment Processing** — FPX, DuitNow QR (BayarCash), manual bank transfer
- **Check-In System** — QR code scanning, multi-level attendance tracking (event/session/activity)
- **Certificates** — Customizable templates, eligibility rules, QR verification, batch generation
- **Crew Management** — Role-based permissions for organizers, speakers, volunteers, staff
- **Communication** — Blast email campaigns with templates and tracking
- **Multi-tenancy** — Organization-level resources (venues, speakers, sponsors)

## Commands

```bash
npm install      # Install dependencies
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
npm start        # Start production server
```

## Architecture

This is a Next.js 15 documentation site using the Tailwind Plus "Syntax" template. Content is written in Markdoc (`.md` files) and rendered through React components.

### Key Directories

- `src/app/` - Next.js App Router pages; documentation lives in `src/app/docs/*/page.md`
- `src/markdoc/` - Markdoc configuration (custom tags, nodes, and search indexing)
- `src/components/` - React components for layout, navigation, and content display
- `src/lib/` - Utilities including navigation structure (`navigation.ts`)

### Content System

Documentation pages are Markdoc files at `src/app/docs/{slug}/page.md` with YAML frontmatter for metadata. The navigation structure is defined in `src/lib/navigation.ts` - add new pages there to include them in the sidebar.

### Markdoc Custom Tags

Available in `.md` files:

- `{% callout title="..." type="note|warning" %}...{% /callout %}` - Callout boxes
- `{% figure src="..." alt="..." caption="..." /%}` - Images with captions
- `{% quick-links %}` / `{% quick-link title="..." description="..." icon="..." href="..." /%}` - Link cards

### Search

Global search (⌘K) is powered by FlexSearch. The search index is built automatically at compile time from all `page.md` files. Configuration is in `src/markdoc/search.mjs`.

### Styling

Uses Tailwind CSS v4 with configuration in `src/styles/tailwind.css`. Code syntax highlighting uses Prism via `prism-react-renderer`.

## Documentation Guidelines

When writing documentation for GatherHub:

### Audience

- **Primary:** Event organizers using the platform
- **Secondary:** Crew members (speakers, volunteers, staff), participants

### Tone

- Professional, clear, and action-oriented
- Focus on tasks and outcomes, not technical implementation
- Use "you" to address the reader directly

### Content Structure

- Start with the user goal or outcome
- Provide step-by-step instructions for tasks
- Use callouts for warnings and important notes
- Include screenshots where helpful (use `{% figure %}` tag)

### Documentation Topics

Suggested documentation areas based on platform features:

1. **Getting Started** — Account setup, organization creation, first event
2. **Event Management** — Creating, editing, cloning, and archiving events
3. **Sessions & Activities** — Multi-track event scheduling
4. **Ticketing** — Ticket types, pricing, early bird, discount codes
5. **Registration** — Custom forms, participant management, bulk import
6. **Payments** — Payment methods, orders, refunds, transaction history
7. **Check-In** — QR scanning, attendance tracking, real-time dashboard
8. **Certificates** — Templates, eligibility rules, batch generation
9. **Crew Management** — Roles, permissions, invitations
10. **Communication** — Email campaigns, templates, scheduling
11. **Venues & Resources** — Venue library, speakers, sponsors
12. **Reports & Analytics** — Attendance reports, revenue tracking, exports
