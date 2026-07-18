# Portfolio Design Spec — "Figure 01"

Personal portfolio for a Data Science / Math student targeting MLE roles.
Concept: the site is designed like a well-set figure from a statistics paper —
clean paper background, plot-gridline dividers, monospace figure captions,
and the matplotlib color pair as the only accent. Minimal, fresh, slightly
technical, young. 2–3 pages max. Build budget: 1–2 days.

## Stack
- Astro + Tailwind CSS (static, fast, deploy to Vercel/Netlify/GitHub Pages)
- No component library needed. No CMS. Content lives in markdown/JSON.

## Design tokens

### Color (use ONLY these)
| Role | Hex | Usage |
|---|---|---|
| bg | #FBFBF9 | page background (paper white) |
| ink | #131313 | headings, body text |
| muted | #6E6E68 | secondary text, captions |
| grid | #E7E7E2 | 1px dividers, hero axis ticks, card borders |
| accent | #1F77B4 | links, CTA, one highlighted word in hero, active nav (matplotlib blue) |
| accent-strong | #175A8E | link hover state |
| point | #FF7F0E | tiny "data point" dot only — hover markers, active indicators (matplotlib orange). Never for text or large areas. |

Rules: never introduce gradients, purple, or a second large accent.
The orange dot must stay ≤ 8px and appear only on interaction.

### Typography
- Display: **Space Grotesk** (Google Fonts) — 600/500. Headings, hero.
- Body: **Inter** — 400/500. 16–18px, line-height 1.6.
- Utility: **JetBrains Mono** — 400/500. Figure captions, metrics, nav labels, dates.

Type scale (desktop / mobile):
- Hero: 72px / 40px, Space Grotesk 600, tracking -0.02em
- H2: 32px / 26px
- Body: 17px / 16px
- Caption/mono labels: 13px, uppercase, letter-spacing 0.08em

### Layout
- Max content width 1040px, centered; 24px side padding on mobile.
- Generous whitespace: 120px between sections (64px mobile).
- Dividers: 1px solid grid color, full content width.
- Cards: 1px grid border, 12px radius, no shadow at rest.

## Signature element (the one memorable thing)
Every section header is set like a scientific figure caption in JetBrains Mono:
`Fig. 01 — Projects`, `Fig. 02 — Notes`, `Fig. 03 — Contact`.
The hero block is framed by faint axis tick marks (grid color) along its left
and bottom edges, like the corner of a matplotlib plot. Subtle — visible on a
second look, not decoration shouting for attention.

## Pages & sections

### Page 1 — Home
1. Nav: name (mono) left; links right. Active link gets the orange point dot.
2. Hero: one large statement, e.g. name + "I build ML systems and measure
   whether they actually work." One word or phrase (e.g. "measure") set in
   accent blue. Below: mono caption line with location + "Open to MLE/SWE
   roles — Fall 2026".
3. Projects (Fig. 01): two large cards —
   - Agentic AI system: 1-line description, then 2–3 real metrics in large
     mono numerals (e.g. eval pass rate, latency, tool-call success). Tags:
     Python, RAG→Agent, Evals, Deployed.
   - Data engineering pipeline: same pattern (rows/day processed, DAG tasks,
     data-quality checks). Tags: Airflow/Dagster, SQL, ETL, CI.
   Card hover: lift 3px, border shifts to accent, orange point dot appears
   at the card's top-right corner.
4. About (Fig. 02): short bio + one self-shot portrait, duotone-treated in
   accent blue (CSS filter or preprocessed). Photography credit line in mono:
   "Self-portrait, shot on <camera>".
5. Contact (Fig. 03): email, GitHub, LinkedIn as mono links.

### Page 2 — Project detail (one template, reused for both projects)
Problem → Architecture (simple diagram or image) → Eval/metrics section
(this is the differentiator — give it the most space) → Stack → Links
(live demo, repo).

### Optional Page 3 — Notes
Simple list of writeups (title, date in mono, 1-line summary). Skip if no
content yet — an empty blog looks worse than no blog.

## Motion (exactly three, nothing more)
1. Page load: hero text fades up 12px, 400ms ease-out, 60ms stagger.
2. Links: underline slides in left→right on hover, 200ms.
3. Cards: 3px lift + border color change + orange dot fade-in, 180ms.
Respect `prefers-reduced-motion: reduce` — disable all three.

## Quality floor
- Fully responsive down to 360px.
- Visible keyboard focus states (accent blue outline).
- Lighthouse: 95+ performance, real <title>/<meta description>, OG image.
- All metrics on the site must be real numbers from the actual projects —
  no placeholder "99% accuracy".

## Hard don'ts
- No gradients, no glassmorphism, no dark mode toggle (light only).
- No stock illustrations or 3D blobs.
- No more than the three animations listed.
- No second accent color beyond the defined blue + orange point.
- Total build time cap: 2 days. Ship, then return to project work.
