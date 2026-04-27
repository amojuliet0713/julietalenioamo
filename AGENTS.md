# AGENTS.md

Project architecture guide for AI agents working on this codebase.

## Project Overview

A single-page personal portfolio built with TanStack Start. All content lives in `src/routes/index.tsx` as a single React component tree. There is no CMS or external data source — all portfolio data (skills, experience, projects, testimonials) is defined as constants at the top of that file.

## Directory Structure

```
public/
  __forms.html       # Static HTML skeleton for Netlify Forms build-time detection
  favicon.ico
  placeholder.png
src/
  routes/
    __root.tsx       # Root layout: Google Fonts link tags, HTML shell, page title
    index.tsx        # Entire portfolio (all sections as React components)
  styles.css         # Tailwind import + CSS custom properties (--teal, --gold, etc.)
  router.tsx         # TanStack Router setup
netlify.toml         # Build config: vite build, publish dist/client
```

## Key Architectural Decisions

### Single-file portfolio
All sections (Nav, Hero, Skills, Services, Experience, Projects, Testimonials, Contact, Footer) are defined in `src/routes/index.tsx`. Data arrays sit at the top of the file as constants. This keeps the portfolio easy to edit — changing content means editing the arrays, not hunting through multiple files.

### CSS Custom Properties for theming
Colors are defined as CSS variables in `src/styles.css`:
- `--teal` / `--teal-mid` / `--teal-light` — primary brand color
- `--gold` / `--gold-light` / `--gold-pale` — accent color
- `--text-dark` / `--text-body` / `--gray-mid` — typography

Tailwind is imported but used minimally (mostly for `hidden`, `sm:block`, `md:flex` responsive utilities). Most styling uses inline `style` props that reference CSS variables, matching the original HTML design.

### Netlify Forms
Two forms are handled via Netlify Forms:
- `contact` — the contact/inquiry form
- `testimonial` — the review submission form

Both submit via AJAX to `/__forms.html` (the static skeleton). The skeleton at `public/__forms.html` registers the forms with Netlify's build bot at deploy time. **Never change the fetch target to `/`** — SSR intercepts it and forms would silently fail.

### Testimonials state
The testimonials list is local React state initialized from `INITIAL_TESTIMONIALS`. New submissions are appended client-side immediately after form submission for instant feedback, while also being POSTed to Netlify Forms for persistence in the Netlify dashboard.

## Coding Conventions

- **TypeScript strict mode** — all types explicit
- **Inline styles** for component-specific layout (matches original HTML design intent)
- **Tailwind utilities** only for responsive breakpoints (`hidden`, `sm:block`, `md:flex`)
- **`className="font-serif"`** for Cormorant Garamond headings (defined via Tailwind config)
- **No external state management** — portfolio is static; only the testimonials/contact forms use `useState`

## Content Editing

To update portfolio content, edit the constant arrays near the top of `src/routes/index.tsx`:
- `SKILLS` — skill categories and tags
- `SERVICES` — service cards
- `EXPERIENCE` — work history entries
- `PROJECTS` — featured project cards
- `INITIAL_TESTIMONIALS` — pre-loaded client reviews
