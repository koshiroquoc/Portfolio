---
target: home page
total_score: 19
max_score: 24
na_heuristics: 5,7,9,10
p0_count: 0
p1_count: 1
timestamp: 2026-08-08T23-38-36Z
slug: src-pages-index-astro
---
⚠️ DEGRADED: single-context (Assessment A sub-agent failed to return after two bounded attempts; Assessment B remained isolated)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---:|---|
| 1 | Visibility of System Status | 3 | Active nav is clear, but `About` remains active through the unrepresented Off-the-clock section. |
| 2 | Match System / Real World | 3 | Evidence is credible, though recruiter-facing summaries still lead with some unexplained technical shorthand. |
| 3 | User Control and Freedom | 4 | Navigation is simple, direct, and free of traps. |
| 4 | Consistency and Standards | 4 | Typography, figure labels, metrics, color, and interaction patterns form a coherent system. |
| 5 | Error Prevention | n/a | The static portfolio has no consequential input flow. |
| 6 | Recognition Rather Than Recall | 3 | Labels and project titles are visible; project depth is discoverable, but the cards lack a strong case-study affordance. |
| 7 | Flexibility and Efficiency | n/a | Not material for this Experience-mode portfolio. |
| 8 | Aesthetic and Minimalist Design | 2 | The visual language is strong, but the empty photo strip and repeated bordered enclosures add visible incompleteness and template-like weight. |
| 9 | Error Recovery | n/a | No user error flow exists on the reviewed surface. |
| 10 | Help and Documentation | n/a | The portfolio is self-contained and does not require help content. |
| **Total** | | **19/24** | **Good foundation; one release-blocking credibility gap and several focused refinements.** |

## Design Specificity Verdict

**LLM assessment:** The portfolio feels authored for Quoc rather than copied from a generic developer template. The statistics-paper framing is carried through axis ticks, figure rules, mono evidence labels, technical diagrams, and the decision to publish real metrics and failed checks. The concept is strongest in the hero, causal project, and contact section. It becomes less specific where familiar portfolio conventions take over: rounded bordered cards, pill tags, repeated inner frames, and a photo gallery shell with no photos.

**Deterministic scan:** Impeccable returned zero findings for `src/pages/index.astro` (`[]`, exit code 0). This is useful but incomplete evidence: the detector correctly found no banned gradients, over-animation, or obvious structural slop, yet it did not identify the four visible `TODO: EXIF` placeholders or the experiential cost of the empty section.

**Visual overlays:** No reliable user-visible overlay was created. The in-app browser blocked the required mutable-injection preflight, so the live detector server was not started. Fallback evidence was a clean CLI scan, live desktop/mobile screenshots, DOM inspection, and clean browser console logs.

## Overall Impression

The first impression is disciplined, credible, and unusually specific for a student portfolio. The biggest opportunity is not a wholesale redesign: it is removing the unfinished evidence, flattening the most template-like enclosures, and making the Product/Experimentation Data Science thesis unmistakable in the first scan.

## What's Working

1. **The visual metaphor earns its keep.** Axis ticks, figure captions, restrained matplotlib accents, and project diagrams all reinforce measurement rather than merely decorating the page.
2. **The project evidence is defensible.** Real metrics, negative results, robustness specifications, and explicit team roles create more trust than generic outcome claims.
3. **The responsive foundation is sound.** The hero fits both 1440×900 and 390×844 viewports, cards stack cleanly, the portrait retains impact, and no horizontal overflow was observed.

## Priority Issues

### [P1] An empty hobby section breaks the credibility arc

**Why it matters:** After a strong hero, dense project evidence, and a personal portrait, four blank boxes labeled `photo 1` through `photo 4` plus `TODO: EXIF` make the site look abandoned at the exact moment it should add personality. This is the clearest source of an unfinished, AI-generated-template feeling.

**Fix:** Remove Fig. 04 entirely until four real photos and real EXIF values exist. Renumber Contact to Fig. 04 while the section is absent. Restore the photo strip only when its evidence is real.

**Suggested command:** `$impeccable distill`

### [P2] The visual system becomes card-heavy in the projects section

**Why it matters:** The large bordered project card contains another bordered diagram frame; the two secondary projects repeat the same rounded enclosure and pill grammar. The diagrams are specific, but the surrounding UI starts to resemble a familiar AI portfolio kit.

**Fix:** Preserve the project hierarchy while reducing enclosure: keep one outer boundary per project, let diagrams sit directly on the paper surface or use rules instead of inset rounded frames, and make tags read like a compact legend rather than generic pills. Add a quiet mono `View case study →` cue so the action is explicit.

**Suggested command:** `$impeccable polish`

### [P2] Product/Experimentation Data Science is present but not yet the sharpest first-frame claim

**Why it matters:** The hero says “I build data systems,” and the largest proof number is “174 automated tests.” Both are credible, but they initially position Quoc closer to data engineering or SWE. The causal project and About copy reveal the stronger product-measurement thesis only after scrolling.

**Fix:** Keep the defensible numbers, but make experimentation and decision quality the lead. A stronger headline or supporting sentence should connect systems to product decisions, causal inference, and evaluation before the stats row.

**Suggested command:** `$impeccable clarify`

### [P2] Mobile scanning is functional but unnecessarily dense

**Why it matters:** At 390px the nav consumes nearly the full width, the first project card is roughly 775px tall, and the About section is a long wall of text before the portrait. A recruiter scanning one-handed must work harder than the desktop hierarchy suggests.

**Fix:** Tighten the mobile nav label spacing without shrinking tap targets, shorten About to two compact paragraphs, and reduce repeated project metadata so the title, purpose, and one decisive metric appear before secondary detail.

**Suggested command:** `$impeccable adapt`

## Persona Red Flags

**Recruiter / first-time reviewer:** The hero is confident, but `MRR@5`, `ATT`, and robustness terminology arrive quickly. The empty photo gallery then creates doubt about whether the site is actually finished. The primary action on each project is also less explicit than it should be.

**Sam, keyboard and screen-reader user:** Semantic landmarks, one H1, section headings, native links, image alt text, and global focus styling are present. Remaining risk: the diagrams contain dense visual information and need concise accessible names or descriptions that communicate their purpose, not every node.

**Casey, distracted mobile reviewer:** The hero fits the viewport and the cards stack correctly. The cramped top nav, long first project card, and text-heavy About section increase scroll cost; the placeholder gallery is especially likely to be read as “unfinished” before Casey reaches Contact.

## Minor Observations

- The active navigation system has no state for Toolkit or Off the clock, so the orange dot can describe the previous section rather than the current one.
- The portrait treatment is memorable and on-palette; the caption is appropriately restrained.
- The contact section is an excellent ending: direct, legible, and more distinctive than a conventional CTA card.
- Inter is acceptable here because the design brief explicitly binds it; replacing it merely to satisfy an anti-pattern rule would weaken consistency.

## Questions to Consider

- What if the first ten seconds communicated “I design trustworthy experiments for product decisions” before “I build data systems”?
- Can the project diagrams become the surface itself, with fewer rounded containers between the evidence and the reader?
- Is the hobby section valuable enough to keep only when the actual photographs can carry it?
