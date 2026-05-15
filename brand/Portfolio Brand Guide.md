# Portfolio — Brand Guide

*May 2026*

---

## Brand Overview

Portfolio's visual identity is minimal, high-contrast, and modern. The brand projects seriousness of purpose through restraint: a two-color palette per mode, tight typography, and generous whitespace. The aesthetic says *professionals building infrastructure*, not *advocacy nonprofit*. Every element earns its place.

The site at **portfolio.sc** is the canonical expression of the brand. The system supports two modes — dark (the default) and light (used for documents and any light-mode web surface). Both modes are deliberately monochromatic, with no accent colors.

This guide replaces the March 2026 version. Notable changes: a light mode mirror was added, the typeface system was simplified from three fonts to two (Mint Sans was dropped in favor of using Momo Trust Display for the wordmark), a surface system was introduced for sectioned layouts, an icon set was specified, and document and channel templates were added.

---

## Color Palette

Portfolio uses two paired palettes — one for dark surfaces, one for light. Each is essentially two colors at high contrast, with one intermediate surface for sectioned layouts and one hairline rule color for boundaries. No accent colors. No saturated hues.

### Dark mode (default)

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Black | `#0A0A0A` | 10, 10, 10 | Page background, ground |
| Section | `#161616` | 22, 22, 22 | Elevated section backgrounds |
| Hairline | `#262626` | 38, 38, 38 | Section dividers, footer rule |
| Ghost border | `#333333` | 51, 51, 51 | Outline button border |
| Body text | `#C8C8C8` | 200, 200, 200 | Body copy |
| Wordmark / button | `#E6E6E6` | 230, 230, 230 | Wordmark, primary button surface |
| Emphasis | `#FFFFFF` | 255, 255, 255 | Hero heading, emphasis (use sparingly) |
| Muted | `#888888` | 136, 136, 136 | Captions, footer meta, eyebrow labels |

### Light mode

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Off-white | `#F6F4EE` | 246, 244, 238 | Page background, ground |
| Section | `#EEEAE0` | 238, 234, 224 | Elevated section backgrounds |
| Hairline | `#DDD7C5` | 221, 215, 197 | Section dividers, footer rule |
| Ghost border | `#B8B1A0` | 184, 177, 160 | Outline button border |
| Body text | `#2A2A2A` | 42, 42, 42 | Body copy |
| Wordmark / button | `#0A0A0A` | 10, 10, 10 | Wordmark, primary button surface |
| Emphasis | `#000000` | 0, 0, 0 | Hero heading, emphasis (use sparingly) |
| Muted | `#6E6B62` | 110, 107, 98 | Captions, footer meta, eyebrow labels |

The light mode ground is slightly warm — a hint of cream that distinguishes Portfolio's documents and surfaces from generic-default white. The dark mode stays neutral. The two modes are intentionally asymmetric in temperature: warm light + neutral dark.

If color is ever needed (charts, diagrams, status indicators), use shades from these scales — never saturated hues.

---

## Typography

Portfolio uses two typefaces:

**Momo Trust Display** — Display type and wordmark. A rounded, approachable geometric sans-serif designed by TYPE Associates (2024). Available on Google Fonts under the SIL Open Font License. Its soft geometry balances the severity of the monochromatic palette — warmth without softness.

**Inter** — Body, UI, and metadata. Regular (400) for body copy, Medium (500) for subheadings, buttons, and eyebrow labels. Loaded as a web font, falls back to system sans-serif.

| Role | Typeface | Weight | Fallback |
|------|----------|--------|----------|
| Wordmark | Momo Trust Display | Medium (500) | Nunito, Avenir Next, sans-serif |
| Hero / display headlines | Momo Trust Display | Regular (400) | Nunito, Avenir Next, sans-serif |
| Section headings | Momo Trust Display | Regular (400) | Nunito, Avenir Next, sans-serif |
| Subheadings / buttons | Inter | Medium (500) | system-ui, Arial, sans-serif |
| Body / UI | Inter | Regular (400) | system-ui, Arial, sans-serif |
| Eyebrow / caption | Inter | Medium (500), uppercase | system-ui, Arial, sans-serif |

### Type Scale

**Hero Heading**
- Font: Momo Trust Display Regular
- Size: 50px (desktop) / 36px (mobile)
- Letter-spacing: −2.5px desktop / −1.4px mobile (~−5% of font size)
- Line-height: 1.05
- Color: emphasis (`#FFFFFF` dark / `#000000` light)
- Example: *A special projects studio for democracy*

**Section Heading**
- Font: Momo Trust Display Regular
- Size: 25px (desktop) / 22px (mobile)
- Letter-spacing: −1.25px (~−5%)
- Line-height: 1.07
- Color: emphasis

**Body Copy**
- Font: Inter Regular
- Size: 16px
- Letter-spacing: −0.4px (~−2.5%)
- Line-height: 1.5
- Color: body

**Eyebrow / Section Label**
- Font: Inter Medium, uppercase
- Size: 11px
- Letter-spacing: `0.18em` (positive — uppercase needs space)
- Line-height: 1
- Color: muted

**Small / Caption**
- Font: Inter Regular
- Size: 13px
- Letter-spacing: −0.4px
- Line-height: 1.45
- Color: muted

### Tracking Note

Portfolio uses **negative letter-spacing across all running type sizes** — roughly −5% of font size for display type and −2.5% for body. This tight tracking is a signature of the brand: text feels dense and purposeful rather than loose and decorative. The only exception is uppercase eyebrow and caption labels, which use **positive** tracking (`0.18em`) — uppercase needs room to breathe. Never set Portfolio type at default (0) tracking.

---

## Wordmark

The Portfolio wordmark is set in **Momo Trust Display Medium**, with capital P and lowercase remaining letters. The mark renders light-on-dark in dark mode and dark-on-light in light mode. There is no icon or symbol — the name is the mark.

| Property | Value |
|----------|-------|
| Typeface | Momo Trust Display Medium (500) |
| Case | Capital P, lowercase rest (Portfolio) |
| Letter-spacing | ~−6% of font size (tighter than hero) |
| Color (dark mode) | `#E6E6E6` |
| Color (light mode) | `#0A0A0A` |
| Standard nav size | 22px |
| Footer size | 18px |
| Minimum size | 16px |
| Clear space | At least 1× the cap height on all sides |

**Usage rules:** The wordmark always appears as a standalone element with generous clear space. It should never be combined with taglines, icons, or other graphic elements in a lockup. The tagline ("A special projects studio for democracy") is a separate text element, never part of the wordmark.

**Color variations:** Two versions only — light wordmark on dark, dark wordmark on light. Never use the wordmark in color, gradients, or with effects like drop shadows or outlines.

**Note on weight:** Momo Trust Display ships as Regular on Google Fonts; the Medium weight used for the wordmark is browser-synthesized. For canonical wordmark renders (logo files, partner exports), export an SVG with the path baked in rather than relying on font-weight synthesis, which renders slightly differently across operating systems.

---

## Buttons & Interactive Elements

Two button styles, both using Inter Medium at 15px. The filled side of the brand is constant across modes — only foreground and background swap.

### Primary button (filled)

| Property | Dark mode | Light mode |
|----------|-----------|------------|
| Background | `#E6E6E6` | `#0A0A0A` |
| Text color | `#0A0A0A` | `#F6F4EE` |
| Border | none | none |
| Border radius | `12px` | `12px` |
| Padding | `13px 24px` | `13px 24px` |
| Font | Inter Medium, 15px, −0.3px | Inter Medium, 15px, −0.3px |
| Hover | Text underline | Text underline |

### Ghost button (outline)

| Property | Dark mode | Light mode |
|----------|-----------|------------|
| Background | `transparent` | `transparent` |
| Text color | `#E6E6E6` | `#0A0A0A` |
| Border | `1px solid #333333` | `1px solid #B8B1A0` |
| Border radius | `12px` | `12px` |
| Padding | `13px 24px` | `13px 24px` |
| Font | Inter Medium, 15px, −0.3px | Inter Medium, 15px, −0.3px |
| Hover | Text underline, border lifts one step | Text underline, border darkens one step |

### Button icons

When buttons need icons, use the **Tabler outline** set at 16px (matched to button text). Icons sit to the right of the label with an 8px gap. Example: `Get in touch ti-arrow-right`.

---

## Spacing & Layout

Portfolio uses generous, cinematic spacing. Large vertical padding creates breathing room that conveys confidence. The site feels like a full-screen manifesto, not a cluttered landing page.

| Element | Mobile (375px+) | Desktop (1280px+) |
|---------|----------------|-------------------|
| Section padding (vertical) | `80px` | `120px` |
| Section padding (horizontal) | `24px` | `200px` |
| Element gap | `16px` | `24px` |
| Min viewport height | `720px` | `1080px` |
| Breakpoint | — | `1280px` |
| Border radius (all surfaces) | `12px` | `12px` |

Content is always centered. Layouts use flexbox with column orientation on mobile and row on desktop.

---

## Surface System

The brand uses three surface layers to create depth without ornament. This is a tonal architecture — no shadows, no chrome, no card outlines.

| Layer | Dark mode | Light mode | Use |
|-------|-----------|------------|-----|
| Ground | `#0A0A0A` | `#F6F4EE` | Page background, hero |
| Section | `#161616` | `#EEEAE0` | Elevated sections (e.g. What we do) |
| Hairline | `#262626` | `#DDD7C5` | 0.5px rule between sections and above footer |

**Section transitions** use a single 0.5px solid hairline rule. No drop shadows, no inset shadows, no gradients. The combination of tonal step plus hairline creates the visual seam.

**No grain or texture.** Earlier iterations tested adding a subtle film grain across surfaces. It was removed. The brand's authority comes from restraint; texture undermined that.

---

## Imagery & Illustration

Minimal SVG illustrations only — abstract, geometric, monochromatic. Rendered in the same primary text color as running type (`#E6E6E6` dark / `#0A0A0A` light). SVGs use CSS custom properties (`var(--fill-0)`) for theming across modes.

**Style:** Geometric, abstract, monochromatic. Illustrations complement the text without competing with it.

**Photography:** Not currently used. If introduced, high-contrast black-and-white documentary photography only. Never stock-feeling, never staged.

**Format:** SVG for all illustrations and icons. PNG fallbacks at 2× resolution for email and contexts where SVG isn't supported.

---

## Iconography

When general-purpose icons are needed (UI controls, list bullets, table indicators, button affixes), use the **Tabler outline** icon set. Outline weight only — never filled variants. Sized to match the surrounding type, typically 16px or 20px.

The brand has no proprietary icon system. The wordmark is the only mark.

---

## Voice & Tone

Portfolio's written voice mirrors its visual identity: stripped down, direct, and serious without being stiff. It reads like a pitch from someone who respects your time and trusts your intelligence.

**Direct** — Short sentences. Active voice. No hedging or corporate filler. "Now's the time" — not "we believe the current moment presents an opportunity."

**Serious** — The stakes are real and the tone reflects it. No exclamation points, no emojis, no forced optimism. Urgency comes from substance, not punctuation.

**Invitational** — Despite the gravity, the voice is warm and welcoming. "Get in touch" — not "Apply now." The CTA is a handshake, not a form submission.

**Professional** — Written for peers, not donors or volunteers. Assumes intelligence and agency. "Professionals from across disciplines" — people with real careers and real expertise.

### The canonical tagline

> A special projects studio for democracy

This is the single canonical line. Use it as written. Do not pluralize, abbreviate, or substitute.

### Do

- "We take high-variance ideas and move them from concept to operating entity in weeks."
- "The times are weird. What is missing is not more organizations doing conventional work."
- "Now's the time."

### Don't

- "Join our amazing community of changemakers!"
- "We're excited to announce our groundbreaking new initiative!"
- "Together, we can make a difference!!!"

### On AI

Portfolio is an AI-forward studio, but the brand does not advertise this. The orientation lives in what the studio does, not in how it dresses. Avoid copy that names AI as a feature or differentiator. The work speaks for itself.

### On the broader portfolio

Each project inside Portfolio carries its own brand identity, team, and operating tempo. Portfolio's outward voice does not list its projects, name them publicly, or describe them in detail on portfolio.sc. Project names appear only on their own surfaces.

---

## Document & Channel Templates

Portfolio shows up in several channels beyond the website. Each has its own template grounded in the brand system.

### PDF / printed materials

Light mode by default. Off-white background (`#F6F4EE`), wordmark top-left at 22pt, body in Inter 11pt, headings in Momo Trust Display. Page margins 1in (US Letter) or 25mm (A4). No drop shadows, no decorative elements. Section dividers are 0.5px hairlines in `#DDD7C5`.

### Google Docs

**Template file:** `Studio/Brand/Portfolio Doc Template.docx` — opens directly in Word and Pages, and converts to Google Docs automatically when uploaded to Google Drive.

The template uses Inter for body (Google Docs supports Inter under Recommended Fonts). Wordmark "Portfolio" set as a header in Inter Bold 18pt — Nunito Bold is acceptable as fallback if Momo Trust Display is not available in the font picker. Body 11pt, line spacing 1.5. Headings: H1 Inter Regular 24pt, H2 Inter Regular 16pt. Background stays default white. The header has a 0.5pt hairline rule in `#B8B1A0` between the wordmark and the contact line; the footer has the same in `#DDD7C5`.

### Email signature

```
Amar Bakshi
Portfolio · A special projects studio for democracy
amar@portfolio.sc · portfolio.sc
```

Set in system sans-serif (email clients are unreliable with web fonts). No images, no social icons, no decorative HR rules. "Portfolio" bolded for slight emphasis.

### Decks (Keynote / Google Slides)

Light mode default for external decks; dark mode for internal review or staff-facing material. Same type system, same surface architecture. Title slide is wordmark plus tagline only. Section openers use the section-heading scale. Body slides keep bullets short — fewer than 5 lines per slide.

### Web (portfolio.sc)

Dark mode default. Light mode mirror available via `data-theme="light"` on the document root. Both modes use the same component primitives — only the palette swaps. The `tokens.css` companion file in this folder provides all CSS variables for both modes.

---

## Brand Artifacts

Beyond the website, Portfolio shows up on stationery, social previews, and small mark surfaces like favicons. Each artifact applies the same brand discipline.

### Favicon

The favicon is the wordmark reduced to a single letter — capital P — not an icon system. There is still no Portfolio symbol; the favicon is a constrained typographic mark adapted to a 16×16 surface.

| Property | Value |
|----------|-------|
| Source file | `Studio/Brand/favicon.svg` |
| Format | SVG primary; export 16×16, 32×32, 180×180 PNG + 32×32 ICO for fallbacks |
| Background | `#0A0A0A`, 6/32 corner radius (`rx="6"` on the 32-unit viewBox) |
| Mark | "P" silhouette, `#E6E6E6` |
| Construction | `<text>` element set in Momo Trust Display, font loaded via embedded `@import` so the favicon's P matches the wordmark exactly. For mobile app icons (Apple touch-icon, Android PWA) where the font may not load at render time, export outlined paths from the actual font in a design tool |
| HTML reference | `<link rel="icon" type="image/svg+xml" href="/favicon.svg">` |

The shipped `favicon.svg` uses dark mode colors only. If a light-mode favicon is ever needed (rare — most browsers darken tab chrome regardless of page theme), produce a second file rather than using `prefers-color-scheme` inside the SVG (cross-browser support remains uneven).

### Letterhead

US Letter (8.5×11 in) and A4 templates exist. Light mode default. Body in Inter 11pt, line spacing 1.5. Date and salutation at the top of the body block.

| Property | Value |
|----------|-------|
| Page size | US Letter (8.5×11 in) or A4 (210×297 mm) |
| Margins | 1 in (US Letter) / 25 mm (A4) |
| Header | Wordmark `Portfolio` in Momo Trust Display Medium, 18–22pt, top-left |
| Header rule | 0.5px hairline in `#B8B1A0` (warm gray, matches the ghost-button border), tight to the wordmark — 4pt above, 6pt below |
| Sub-header | "A special projects studio for democracy" plus address, Inter 9pt, `#6E6B62` |
| Body | Inter Regular 11pt, line-height 1.5, `#2A2A2A` |
| Footer | Contact line in Inter 9pt, `#6E6B62`, separated by 0.5px hairline |
| Ground | `#F6F4EE` if printing on coated stock; white acceptable on uncoated |

No drop shadows. No decorative elements. The page is type and rule — nothing else.

### Business Cards

Standard 3.5×2 in (89×51 mm) or 85×55 mm (metric). Light cards are the canonical version — ink wordmark on warm off-white ground, mirroring the brand's document and printed-material treatment. A dark variant exists for premium uncoated black stock when the occasion calls for it.

#### Light card (canonical)

| Property | Value |
|----------|-------|
| Size | 3.5×2 in (89×51 mm) |
| Corner radius | None (square corners) or 2 mm if rounded |
| Stock | Uncoated, 32pt minimum |
| Ground | `#F6F4EE` |
| Wordmark | `Portfolio` in Momo Trust Display Medium, 22pt, `#0A0A0A` |
| Tagline (front, bottom) | "A special projects studio for democracy", Inter Regular 8pt, `#6E6B62` |
| Name (back, top) | Inter Medium 12pt, `#0A0A0A` |
| Title (back, top) | Inter Regular 9pt, `#6E6B62` |
| Contact (back, bottom) | Inter Regular 9pt, `#2A2A2A`, line-height 1.5 |

#### Dark card (alternate)

Same layout, palette swapped: ground `#0A0A0A`, wordmark and name in `#E6E6E6`, tagline and title in `#888888`, contact in `#C8C8C8`. Use for premium uncoated dark stock when the occasion warrants the more dramatic treatment.

### Social Share Image (OG card)

The Open Graph image used for `og:image` and Twitter `summary_large_image` previews. 1200×630 pixels (Facebook/LinkedIn) — Twitter scales this down automatically.

| Property | Value |
|----------|-------|
| Dimensions | 1200×630 px |
| Format | PNG (preferred) or JPEG, 80% quality minimum |
| Ground | `#F6F4EE` (light mode) |
| Wordmark | `Portfolio` in Momo Trust Display Medium, 64pt, `#0A0A0A`, top-left at 64px margin |
| Tagline | "A special projects studio for democracy" in Momo Trust Display Regular, 76pt, `#000000`, left-aligned, bottom-left at 64px margin, max width 1000px |
| File | `og-default.png` |

Light mode is the default because social preview cards typically render in light UI surfaces. Variant images can be produced for specific shares (project launches, press) — same structure, same type system, swap the body copy.

### LinkedIn Header

The LinkedIn company page banner. Dark ground, wordmark and tagline right-aligned to avoid the company logo overlap zone at bottom-left.

| Property | Value |
|----------|-------|
| Dimensions | 1128 × 191 px |
| Source file | `Studio/Brand/assets/linkedin-header.svg` |
| Ground | `#0A0A0A` |
| Wordmark | `Portfolio` in Momo Trust Display Medium, 48pt, `#E6E6E6`, right-aligned at x=1064, y=90 |
| Tagline | "A special projects studio for democracy" in Momo Trust Display Regular, 28pt, `#FFFFFF`, right-aligned at x=1064, y=138 |
| Safe zone | Keep content out of the left ~250 px in the bottom ~100 px (company logo overlap) |
| Export | PNG at 1× (1128×191) for upload; 2× version optional for retina previews |

### LinkedIn Avatar (Company Logo)

The square logo displayed as a circle on LinkedIn company pages.

| Property | Value |
|----------|-------|
| Dimensions | 300 × 300 px |
| Source file | `Studio/Brand/assets/linkedin-avatar.svg` |
| Ground | `#0A0A0A` |
| Wordmark | `Portfolio` in Momo Trust Display Medium, 44pt, `#E6E6E6`, centered |
| Display | LinkedIn crops to circle — wordmark stays within the inscribed circle (radius 150 from center) |
| Export | PNG at 1× and 2× for retina displays |

### GitHub Organization Avatar

The square avatar for Portfolio's GitHub organization page. Reduces cleanly to a single P at small display sizes.

| Property | Value |
|----------|-------|
| Dimensions | 500 × 500 px (source); GitHub displays at 24–230 px |
| Source file | `Studio/Brand/assets/github-avatar.svg` |
| Ground | `#0A0A0A`, rounded corners (`rx=80`, 16% of viewBox) |
| Mark | "P" in Momo Trust Display Medium, ~76% of viewport height, `#E6E6E6`, centered |
| Display | GitHub shows avatars as circles or rounded squares depending on context — keep the P within the inscribed circle |

### Twitter / X Header

If Portfolio maintains a Twitter / X presence. Same family as the LinkedIn header, different aspect ratio.

| Property | Value |
|----------|-------|
| Dimensions | 1500 × 500 px |
| Source file | `Studio/Brand/assets/twitter-header.svg` |
| Ground | `#0A0A0A` |
| Wordmark | Momo Trust Display Medium, 64pt, `#E6E6E6`, left-aligned at x=80 |
| Tagline | Momo Trust Display Regular, 40pt, `#FFFFFF`, left-aligned below wordmark |
| Safe zone | Keep content out of bottom-center (profile pic overlap, ~200 × 200 px centered on bottom edge) |

### Twitter / X Avatar

| Property | Value |
|----------|-------|
| Dimensions | 400 × 400 px |
| Source file | `Studio/Brand/assets/twitter-avatar.svg` |
| Ground | `#0A0A0A` |
| Mark | "P" in Momo Trust Display Medium, `#E6E6E6`, centered |

### Wordmark Export Package

For partners, press, and project teams that need to use Portfolio's wordmark. Available in two color variants:

| File | Use |
|------|-----|
| `assets/wordmark-light.svg` | Ink wordmark (`#0A0A0A`) for use on light grounds — documents, light-mode web, slide footers |
| `assets/wordmark-dark.svg` | Light gray wordmark (`#E6E6E6`) for use on dark grounds — portfolio.sc default, dark print |

For PNG exports at specific sizes, open the SVG in a design tool and export. For ironclad production fidelity (printed materials, partner deliverables), outline the wordmark to paths in the design tool before exporting — see `logo-usage.md` for the production workflow.

### Deck Templates

Templates for Keynote and Google Slides. Three slide types:

**Title slide** — Wordmark top-left at 22pt. Deck title centered vertically in Momo Trust Display Regular 56pt. Subtitle in Inter Regular 20pt below the title. Light mode default for external decks; dark mode for internal review.

**Section divider** — Section number in Inter Medium 11pt eyebrow at top. Section title in Momo Trust Display Regular 48pt below. Brief sub-description in Inter Regular 16pt.

**Content slide** — Slide title in Momo Trust Display Regular 32pt top-left. Body content in Inter Regular 16pt. Footer with wordmark (left) and slide number (right) in Inter Regular 11pt muted. Keep bullets under 5 per slide.

**Template file:** `Studio/Brand/Portfolio Deck Template.pptx` — opens directly in Keynote and PowerPoint, and converts to Google Slides automatically when uploaded to Google Drive. Built from the spec above; use as a starting point and duplicate slides as needed.

---

## Asset Files

All downloadable Portfolio brand assets live in `Studio/Brand/assets/`. The favicon and tokens.css sit at `Studio/Brand/` root (one level up).

| File | Use |
|------|-----|
| `favicon.svg` (root) | Browser tab favicon for portfolio.sc |
| `tokens.css` (root) | Drop-in CSS variables for any Portfolio project |
| `logo-usage.md` (root) | Permitted-use rules for the wordmark |
| `Portfolio Deck Template.pptx` (root) | Deck template for Keynote, PowerPoint, or Google Slides |
| `Portfolio Doc Template.docx` (root) | Doc template for Word, Pages, or Google Docs |
| `Portfolio Memo Template.docx` (root) | Memo template (TO / FROM / DATE / RE) for Word, Pages, or Google Docs |
| `assets/wordmark-light.svg` | Wordmark for light grounds |
| `assets/wordmark-dark.svg` | Wordmark for dark grounds |
| `assets/linkedin-header.svg` | LinkedIn company page banner |
| `assets/linkedin-avatar.svg` | LinkedIn company logo |
| `assets/github-avatar.svg` | GitHub organization avatar |
| `assets/twitter-header.svg` | Twitter / X header |
| `assets/twitter-avatar.svg` | Twitter / X profile pic |
| `assets/og-default.svg` | Default Open Graph card |

For PNG exports at specific sizes, open the SVG in a design tool (Illustrator, Figma, Sketch, Affinity Designer) and export at the size needed. For ironclad production exports, outline the wordmark text to paths first — see `logo-usage.md`.

Both fonts (Momo Trust Display, Inter) are on Google Fonts under the SIL Open Font License. See `## Font Sources` at the end of this guide.

---

## Quick Reference

| Element | Dark mode | Light mode |
|---------|-----------|------------|
| Page background | `#0A0A0A` | `#F6F4EE` |
| Section background | `#161616` | `#EEEAE0` |
| Hairline | `#262626` | `#DDD7C5` |
| Body text | `#C8C8C8` | `#2A2A2A` |
| Heading text | `#FFFFFF` | `#000000` |
| Wordmark | `#E6E6E6` | `#0A0A0A` |
| Primary button (bg / text) | `#E6E6E6` / `#0A0A0A` | `#0A0A0A` / `#F6F4EE` |
| Ghost border | `#333333` | `#B8B1A0` |
| Muted text | `#888888` | `#6E6B62` |
| Border radius | `12px` | `12px` |
| Display font | Momo Trust Display | Momo Trust Display |
| Body font | Inter | Inter |
| Hero heading | 50px · −2.5px · 1.05 lh | 50px · −2.5px · 1.05 lh |
| Section heading | 25px · −1.25px · 1.07 lh | 25px · −1.25px · 1.07 lh |
| Body text | 16px · −0.4px · 1.5 lh | 16px · −0.4px · 1.5 lh |
| Desktop breakpoint | 1280px | 1280px |
| Desktop section padding | 120px vertical · 200px horizontal | 120px vertical · 200px horizontal |
| Icon set | Tabler outline | Tabler outline |

---

## Font Sources

- **Momo Trust Display:** [Google Fonts](https://fonts.google.com/specimen/Momo+Trust+Display) — SIL Open Font License
- **Inter:** [Google Fonts](https://fonts.google.com/specimen/Inter) — SIL Open Font License

### Recommended loading (web)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Momo+Trust+Display&family=Inter:wght@400;500&display=swap" rel="stylesheet">
```

### Recommended loading (Fontsource via jsdelivr, for CDN-allowlisted environments)

```css
@import url('https://cdn.jsdelivr.net/npm/@fontsource/momo-trust-display/index.css');
@import url('https://cdn.jsdelivr.net/npm/@fontsource-variable/inter/index.css');
```

---

## Companion files

- `tokens.css` — drop-in CSS custom properties for the entire system. Import into any Portfolio project.
- `Portfolio Brand Guide.html` — visual reference showing the system rendered in both modes.
