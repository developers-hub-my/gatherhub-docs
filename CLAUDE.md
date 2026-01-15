# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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
