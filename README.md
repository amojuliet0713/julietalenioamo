# J. Amo – Tech Manager & HubSpot Expert

A personal portfolio site for Juliet Amo, a tech professional specializing in CRM architecture, marketing automation, AI-driven dashboards, and cross-platform integrations.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + CSS custom properties |
| Forms | Netlify Forms |
| Deployment | Netlify |
| Language | TypeScript 5.7 (strict mode) |

## Sections

- **Hero / About** — intro, contact info, social links
- **Skills & Tools** — categorized skill tags
- **Services** — 6 service offerings
- **Work Experience** — timeline of 5 positions
- **Portfolio & Projects** — 4 featured project cards
- **Client Reviews** — testimonials + live submission form
- **Contact** — contact details + message form

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:3000`. For full Netlify feature support (forms, functions), use:

```bash
npx netlify dev
```

This starts at `http://localhost:8888` with Netlify platform emulation.

## Building

```bash
npm run build
```

Output goes to `dist/client/` (configured in `netlify.toml`).
