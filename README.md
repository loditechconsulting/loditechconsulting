# LoDi Tech Consulting website

Marketing site for LoDi Tech Consulting Private Limited: React 19, Vite 8 and Tailwind CSS v4,
prerendered to static HTML at build time.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build + prerender into dist/
npm run preview    # serve dist/ locally
npm run lint
```

## Before going live

Copy `.env.example` to `.env.local` (or set the same variables in your hosting provider):

| Variable | Purpose |
|---|---|
| `VITE_SITE_URL` | Public URL, e.g. `https://www.example.com`. Enables canonical URLs, Open Graph images, structured-data URLs and `sitemap.xml`. |
| `VITE_FORM_ENDPOINT` | Where the consultation form posts JSON, e.g. `https://api.web3forms.com/submit` or a Formspree form URL. |
| `VITE_FORM_ACCESS_KEY` | Access key, if the provider needs one (Web3Forms does). |

Without a form endpoint, the form falls back to opening the visitor's email app with the request
pre-filled, so no enquiry is silently lost.

Also check `src/content/site.js`:

- **Case studies:** every figure must be confirmed by the client.
- **`company.social`:** add full LinkedIn / X profile URLs to show the social icons.

## Editing content

All copy (company details, services, industries, approach, case studies) lives in
`src/content/site.js`. Components only handle layout.

Brand colours and fonts are tokens in `src/index.css` (`@theme`). Change `--color-brand` there and
every `bg-brand` / `text-brand` / `border-brand` updates.

## How it's built

- `index.html` and `privacy/index.html` are the two pages (Vite multi-page build).
- `npm run build` runs the client build, then an SSR build of `src/entry-server.jsx`, then
  `scripts/prerender.mjs`, which writes the rendered HTML into each page, adds SEO tags and
  JSON-LD, and generates `robots.txt` / `sitemap.xml`. The client then hydrates the static HTML.
- Dialogs use the native `<dialog>` element (focus handling, Escape and inert background come from
  the browser).
- The font (Plus Jakarta Sans) is self-hosted via `@fontsource-variable`, so there are no Google
  Fonts requests.

## Deploying

Any static host works (Netlify, Vercel, Cloudflare Pages, S3 + CloudFront, cPanel). Build command
`npm run build`, output directory `dist`. The privacy page is served from `/privacy/`.
