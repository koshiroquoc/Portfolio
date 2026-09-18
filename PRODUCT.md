# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary audience is recruiters and hiring managers evaluating Quoc Van
Nguyen for Product Data Science and Experimentation Data Science opportunities.
They need to assess his judgment, technical depth, and ability to
produce trustworthy evidence quickly from a portfolio scan, then verify the
details in project write-ups.

## Product Purpose

This portfolio presents Quoc's work as evidence that he can decide what should
be measured, design evaluations before reading results, and build the data
systems needed to support those decisions. Success means a qualified reviewer
understands his production-minded measurement approach, trusts the claims, and
has enough evidence to continue to a project detail page or contact him.

## Positioning

The portfolio is not a gallery of model demos. It shows causal designs,
evaluation harnesses, robustness checks, and published failures alongside the
results. Every quantitative claim must be traceable to real project evidence
and defensible in a technical interview.

## Operating Context

Visitors usually arrive from an application, resume, GitHub profile, or direct
link. The home page must support a fast recruiter scan while project detail
pages support a deeper technical review of the problem, architecture,
evaluation design, results, failures, and next steps.

## Capabilities and Constraints

- Static Astro site styled with Tailwind CSS and deployed from GitHub.
- One-page home, project detail pages, and a small 404 page.
- Light mode only.
- Real metrics only; unknown facts remain explicitly marked `TODO:`.
- No empty sections, fabricated proof, third-party stat widgets, or scope creep.
- The current recruitment target is Product/Experimentation Data Science.
- The Off-the-clock photo section is intentionally deferred. Restore it when
  Quoc supplies several real photos; read and display their real EXIF data and
  reuse the full-bleed photo-band treatment from the design handoff.

## Brand Commitments

- Name: Quoc Van Nguyen.
- Voice: rigorous, direct, concise, honest about uncertainty and failed checks.
- Core idea: the site reads like a carefully designed figure from a statistics
  paper, using measured evidence as both content and personality.
- Existing headshot and project evidence must be preserved.

## Evidence on Hand

- Three detailed projects currently represented in the implementation:
  protected bike-lane causal analysis, a Da Nang RAG assistant, and Divvy
  demand forecasting.
- Published evaluation metrics, automated test counts, robustness
  specifications, and project-specific technical write-ups in `src/`.
- A professional headshot at `src/assets/headshot.jpeg`.
- The current résumé at `public/resume.pdf`.
- Off-the-clock photos and their EXIF data are not yet present. The section is
  omitted until those assets exist; future work must not invent the values.

## Product Principles

1. Evidence before assertion.
2. Evaluation design is a first-class artifact, not an appendix.
3. Make technical judgment legible in a short recruiter scan.
4. State ownership, uncertainty, and failures honestly.
5. Distinctiveness should come from the work and its measured presentation,
   not decorative novelty.

## Accessibility & Inclusion

The site must support keyboard navigation, visible focus, reduced motion,
semantic structure, descriptive image text, mobile tap targets, and WCAG AA
contrast.
