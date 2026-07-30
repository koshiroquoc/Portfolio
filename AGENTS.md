# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Repository status

Greenfield. No code has been written yet — the repo contains only `design-handoff/`,
a bundle exported from Codex Design (Codex.ai/design). The task is to build the
portfolio site described in the Design section below.

Key handoff files:
- `design-handoff/design-specification-file/project/Portfolio.dc.html` — the HTML/CSS
  prototype. Read it in full (plus the files it imports: `support.js`, `image-slot.js`)
  before implementing. It is the pixel-parity reference; recreate its visual output in
  the real stack, but do not copy its internal structure.
- `design-handoff/design-specification-file/project/Portfolio-print-sng65x.dc.html` —
  print variant of the prototype.
- `design-handoff/design-specification-file/project/assets/portrait.jpg` and
  `project/uploads/portrait-*.JPG` — real photo assets.
- `design-handoff/design-specification-file/project/uploads/design-spec.md` is spec **v1**
  and is superseded by the Design section below (merged from
  `design-handoff/design-spec-v2.md`). Ignore v1 where they conflict.

Do not render the prototype files or screenshot them during implementation planning —
read the source directly. (Playwright screenshots of the *built* site are part of the
QA loop, see Build order.)

## Commands

No build tooling exists yet. Scaffold with Astro + Tailwind CSS (static output).
Once scaffolded, the standard Astro commands apply:

```sh
npm run dev        # dev server
npm run build      # static production build
npm run preview    # preview the build
```

## Design (merged from design-spec-v2.md — authoritative)

Personal portfolio for Quoc Nguyen — Data Science / Math student targeting
MLE & SWE-with-data roles. Concept: the site is set like a well-designed
figure from a statistics paper — paper background, plot-gridline structure,
monospace figure captions, matplotlib blue/orange as the only accents.
Even the hobby section speaks in measured data (photo EXIF captions).

Scope (fixed, do not expand): one-page Home + 2 project detail pages.
Build budget: 2 days. Quality comes from the detail below, not more pages.

### Stack
- Astro + Tailwind CSS. Static output. Deploy: GitHub → Vercel/Netlify.
- Images via Astro's image optimization (webp/avif, lazy-loaded below fold).
- Fonts: Google Fonts with `display=swap` — Space Grotesk, Inter,
  JetBrains Mono. Preload the two weights used above the fold.

### Design tokens

#### Color (ONLY these)
| Token | Hex | Usage |
|---|---|---|
| bg | #FBFBF9 | page background |
| bg-band | #F4F4F0 | full-bleed background band behind photo strip |
| ink | #131313 | headings, body |
| muted | #6E6E68 | secondary text, captions |
| grid | #E7E7E2 | dividers, axis ticks, card borders |
| accent | #1F77B4 | links, CTA, one hero word, active states (matplotlib blue) |
| accent-strong | #175A8E | link/button hover |
| point | #FF7F0E | data-point dot ≤ 8px, interaction feedback only (matplotlib orange) |

Rules: no gradients, no third color, orange never used for text or fills
larger than a dot. Light mode only — no dark mode toggle.

#### Spacing scale (use only these values)
4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 120 px.
Section vertical padding: 120 desktop, 64 mobile. Card padding: 32/24.

#### Typography (fluid)
| Role | Size | Font |
|---|---|---|
| Hero headline | clamp(40px, 6.5vw, 96px), lh 1.05, tracking -0.02em | Space Grotesk 600 |
| Section H2 | clamp(26px, 3vw, 40px) | Space Grotesk 600 |
| Metric numerals | clamp(28px, 3.2vw, 44px) | JetBrains Mono 500 |
| Body | 17px desktop / 16px mobile, lh 1.6 | Inter 400 |
| Mono caption | 13px, uppercase, letter-spacing 0.08em | JetBrains Mono 400 |

Max line length 80 characters everywhere.

### Layout system
- Content container: 1140px max, centered, 24px side padding on mobile.
- Edge-bleed rule: these elements run the FULL viewport width while text
  stays inside the container — section divider lines, hero axis tick
  marks / gridlines, and the photo-strip background band. Structure
  bleeds, text doesn't.
- Hero: exactly 100svh minus nav height, content vertically centered.
- All other sections: min-height 75vh, content vertically centered, so
  each Fig reads like one "page" while scrolling.
- Cards: 1px grid border, 12px radius, no shadow at rest.

### Page 1 — Home (one page, 6 sections)

#### Nav
Mono wordmark `quoc_nguyen.py` left; PROJECTS / ABOUT / CONTACT right,
mono uppercase 13px. Active link marked with the orange point dot.
Sticky; gains a 1px grid bottom border once scrolled past the hero.

#### Hero
Eyebrow (mono): `QUOC NGUYEN — DATA SCIENCE / MATH`.
Headline: "I build ML systems and measure whether they actually work."
with "measure" in accent blue. Faint axis tick marks along left and
bottom edges (grid color, full-bleed).
Caption (mono): location · "Open to MLE / SWE roles — Fall 2026".
Stats row: exactly 3 numerals in large mono with mono labels.
RULE: only numbers defensible in a technical interview. No inflated
counts. "2 SYSTEMS IN PRODUCTION" (true) beats "6+ PROJECTS" (vague).

#### Fig. 01 — Projects
Two cards side by side (stacked on mobile). Each card, top to bottom:
1. Visual slot: 16:9 image — architecture diagram or product screenshot,
   treated to match the palette (line-art on paper, or blue duotone).
2. Title (Space Grotesk) + one-line description of what it does and for whom.
3. Three real metrics as mono numerals with labels
   (e.g. eval pass rate / p50 latency / tool-call success;
   rows processed per day / DAG tasks / data-quality checks).
4. Tag pills (mono 12px, grid border).
Card links to its detail page. Hover: 3px lift, border → accent,
orange point dot fades in at top-right corner, 180ms.

#### Fig. 02 — Toolkit
Mono tags grouped in three labeled columns:
- LANGUAGES: Python · R · SQL · C++
- ML & EVALS: PyTorch · scikit-learn · RAG→Agents · eval harnesses
- DATA & INFRA: Airflow/Dagster · dbt · Docker · Git · CI
No proficiency bars or percentages, ever. Tags are static (no hover
inflation) — this section is for 3-second scanning.

#### Fig. 03 — About
Left: 3–4 sentence bio (studying what, builds what, looking for what —
production-minded angle). Right: one proper self-portrait, blue duotone
treatment, mono caption: `Self-portrait · shot on <camera>`.

#### Fig. 04 — Off the clock
Full-bleed bg-band (#F4F4F0). One row of 4 photos (2×2 grid on mobile),
consistent treatment (all blue duotone or all B&W — pick one).
Each photo captioned in mono with its real EXIF data:
`f/2.8 · 1/250s · ISO 400`. One intro line max — the captions do the
talking. This is the second inside-joke of the site: even the hobby
is measured.

#### Fig. 05 — Contact
Large mono links: email (accent, this is the CTA) · github · linkedin.
Footer caption: `Fig. 01 — Quoc Nguyen · 2026 · built like a figure
from a stats paper.`

### Pages 2–3 — Project detail (one template, used twice)
Sections in order:
1. Header: title, one-line summary, links (live demo · repo) as mono.
2. Problem — what breaks without this, 3–5 sentences.
3. Architecture — one clear figure (diagram), captioned `Fig. 01 — …`.
4. Evaluation — THE differentiator, give it the most space: what was
   measured, how the eval was designed, results as a metric grid or
   small table, what the numbers mean, what failed and was fixed.
5. Stack — mono tag row.
6. Next steps — 2–3 honest bullets.
Same tokens, same 75vh rhythm, same caption style.

### Motion — exactly three, nothing else
1. Page load: hero text fades up 12px, 400ms ease-out, 60ms stagger.
2. Links: underline slides left→right on hover, 200ms.
3. Project cards: lift + border + orange dot, 180ms.
All disabled under `prefers-reduced-motion: reduce`.

### States & accessibility
- Visible keyboard focus: 2px accent outline, 2px offset, on every
  interactive element.
- Semantic structure: one h1 (hero), h2 per Fig section; alt text on
  every image; nav is a <nav>, sections are <section>.
- Contrast: muted-on-bg and accent-on-bg must pass WCAG AA.
- Tap targets ≥ 44px on mobile.

### Assets & meta
- Favicon: single orange point dot on paper background.
- OG image (1200×630): hero headline lockup on paper with axis ticks.
- Real <title> + meta description per page. Sitemap.
- 404 page: mono `Fig. 404 — figure not found.` + link home. Ten
  minutes of work, disproportionate charm.

### QA checklist — agent must self-review against this before showing work
- [ ] Hero fits one viewport with no scroll at 1440px and 390px.
- [ ] Every line of text ≤ 80 characters.
- [ ] All spacing values come from the spacing scale; nothing off-grid.
- [ ] Exactly two accent colors present; orange appears only as dots.
- [ ] Dividers/ticks/photo-band bleed full width; text never does.
- [ ] All three animations work; reduced-motion disables them.
- [ ] Keyboard-only navigation reaches everything with visible focus.
- [ ] Lighthouse ≥ 95 performance; images optimized; fonts swap.
- [ ] No placeholder text or dash metrics remain (mark unknowns `TODO:`).
List violations found and fixes made, then show the result.

### Content rules
- Every number on the site must be real and defensible in an interview.
- No empty sections: if a section has no content yet, cut it — an empty
  shell looks worse than absence. (This is why there is no blog/Notes.)

### Hard don'ts
- No gradients, glassmorphism, dark mode, 3D, stock illustrations.
- No third-party stat widgets (GitHub graphs etc.) — slow and off-palette.
- No animations beyond the three defined.
- No scope creep: 3 pages, 2 days. Ship, then return to project work.

### Build order
Day 1: Home page to pixel parity with the design handoff — build, then
Playwright screenshot loop at 1440px and 390px until the QA checklist
passes. Stop for review before proceeding.
Day 2: two project detail pages from the template, meta/OG/404, deploy
to production. Done means live at a public URL.
