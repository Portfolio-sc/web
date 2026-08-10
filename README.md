# Portfolio Web

The public Portfolio website, live at **[portfolio.sc](https://portfolio.sc)**.

Static HTML/CSS/JS pages served by Vercel, with a handful of Vercel serverless
functions backing the contact form and open-roles list. No build step, no
framework, no bundler — every page is deployed as-is.

## Pages

- `index.html` — homepage: hero, "what we do" cards, how we work, get involved
- `contact/` — the "get involved" form (general interest + role applications)
- `privacy/` — Privacy Policy
- `sms-terms/` — SMS Terms
- `404.html` — custom 404 page
- `brand/` — the Portfolio brand guide microsite (fonts, logo usage, templates, OG image assets) — treat as mostly self-contained; it has its own `README.md`

## Serverless functions (`api/`)

These run on Vercel as standard Node serverless functions (not Edge):

- `api/submit.js` — handles both the main "get involved" form and role
  applications from `contact/`. Parses multipart form data with `busboy`,
  optionally uploads a resume to Vercel Blob, and writes the submission to
  the `Candidates` table in Airtable.
- `api/roles.js` — `GET` endpoint the contact page calls to render the list
  of open roles. Reads the `Roles` table in Airtable, filtered to
  `Status = Active` and the `audience` query param, and caches the response
  at the edge for 60s.
- `api/ideas.js` — fire-and-forget endpoint for the optional "got an idea"
  field on the main form. Writes to the `Ideas` table in Airtable.

All three read/write the same Airtable base (`appzQL8dEZizmhgOR`).

**Spam protection:** both forms in `contact/index.html` include a hidden
honeypot field (`website`) that real visitors never see or fill. If it's
non-empty, the client fakes a normal success without calling the API, and
each API route independently checks for it too — so a bot that skips the
page's JS and POSTs directly still gets a fake-success response instead of
landing in Airtable.

### Required environment variables (set in Vercel project settings)

- `AIRTABLE_API_KEY` — Airtable personal access token with read/write scope
  on the base above. Used by all three API routes.
- Vercel Blob storage must be attached to the project (Vercel Storage tab →
  create/connect a Blob store) so `@vercel/blob`'s `put()` calls in
  `api/submit.js` work — Vercel injects the token for this automatically
  once the store is connected; no separate env var to set by hand.

## Design system

The homepage and the shared pages use two intentionally separate but
visually-synced CSS setups:

- `index.html` defines its own set of custom properties (`--pf-bg-ground`,
  `--pf-text-body`, `--pf-font-display`, etc.) and its own header
  (`.site-header` / `.pf-wordmark`), all inline in a `<style>` block.
- `contact/`, `privacy/`, `sms-terms/`, and `404.html` share
  `assets/css/page-shell.css`, which defines its own equivalent custom
  properties (`--bg`, `--fg`, `--font-body`, etc.) and header
  (`.topbar` / `.wordmark`).

They're kept as two systems rather than unified into one shared stylesheet,
but numbers (colors, type sizes, spacing) are kept in sync by hand — if you
change a heading size or color on one, check whether the other needs the
same change to stay visually consistent. `.pf-hero` on the homepage and
`.header` on privacy/sms-terms use the same discrete breakpoints (36px
below 1280px, 50px at 1280px+) for exactly this reason.

Fonts (all loaded from Google Fonts): Momo Trust Display for the hero
headline and wordmark, Space Grotesk for section and card headings, and
Inter for body copy and UI — each with system-font fallbacks.

## Local development

No build step — open any HTML file directly, or serve the folder locally:

```
python3 -m http.server 8000
```

The `api/` functions won't run under a plain static server. To test them
locally, use the Vercel CLI:

```
npm install -g vercel
vercel dev
```

which needs `AIRTABLE_API_KEY` set (e.g. via `vercel env pull` or a local
`.env` file) and picks up `vercel.json`'s redirects/rewrites/headers.

## Deploy workflow

The project is connected to this GitHub repo via Vercel's GitHub
integration:

1. Push a branch → Vercel automatically builds a preview deployment at a
   unique `*.vercel.app` URL. Use this to sanity-check changes (including
   `vercel.json` header/redirect changes, which a plain local static server
   won't apply).
2. Open a pull request into `main` on GitHub.
3. Merging the PR triggers a production deployment — `main` is the branch
   attached to the `portfolio.sc` and `www.portfolio.sc` custom domains, so
   a merge goes live immediately.

`vercel.json` also defines: a permanent redirect for `/brand` → `/brand/`,
clean-URL rewrites for `/contact`, `/privacy`, and `/sms-terms`, a proxy
rewrite for `/formation` and `/formation/*` to a separate Vercel project,
and a baseline set of security headers (CSP, HSTS, frame/referrer/
permissions policy) applied to every route.
