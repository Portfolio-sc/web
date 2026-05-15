# Portfolio Studio Brand

The canonical Portfolio brand reference. This repo mirrors `Studio/Brand/` in the Portfolio Google Drive and deploys to Vercel as the brand site.

## Contents

- `Portfolio Brand Guide.html` — the live brand site (root URL)
- `Portfolio Brand Guide.md` — canonical markdown specification
- `tokens.css` — drop-in CSS custom properties for both modes
- `favicon.svg` — 32×32 P-mark favicon
- `logo-usage.md` — permitted-use rules for the wordmark
- `assets/` — wordmark SVGs, LinkedIn / GitHub / Twitter / OG images
- `Portfolio Deck Template.pptx` — deck template (Keynote / PowerPoint / Google Slides)
- `Portfolio Doc Template.docx` — letterhead (Word / Pages / Google Docs)
- `Portfolio Memo Template.docx` — TO/FROM/DATE/RE memo (Word / Pages / Google Docs)

## Editing

Edit the brand markdown (`Portfolio Brand Guide.md`) for spec changes, the HTML for the live site, and `tokens.css` for the CSS variable system. Keep all three coherent.

The doc and memo templates are generated from `docx-js`; the deck template is generated from `pptxgenjs`. To regenerate, see the build scripts in the Portfolio toolchain.

## Local mirror

This repo mirrors `Studio/Brand/` in the Portfolio Google Drive. Treat them as a single source of truth — when one changes, sync the other.

## Deploy

Vercel auto-deploys on push to `main`. The root URL serves `Portfolio Brand Guide.html` via the rewrite in `vercel.json`.
