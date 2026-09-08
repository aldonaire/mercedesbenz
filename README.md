# 2027 Mercedes-Benz E 450 — Model Landing Page

A single-page, mobile-first marketing site for the 2027 Mercedes-Benz E 450, built for **Helms Bros., Inc.** (Bayside, NY).

**Live site:** https://mercedesbenz-two.vercel.app

## About this project

This is a practical/take-home test built for a job interview. The brief: create one model landing page for a 2027 model, referencing Helms Bros.' own site as the client context.

**Sourcing constraint:** all images and video used in this project are sourced exclusively from Mercedes-Benz USA's official site/social channels or Helms Bros.' own official site/social channels — no stock photography, no AI-generated vehicle imagery. See `source.md` for the full asset attribution table.

**Page intent:** this is a showcase/model page, not a lead-generation or test-drive booking funnel — copy and CTAs are intentionally informational rather than transactional.

## Tech stack

- **React** (JSX components, no routing — single page)
- Plain global CSS (`index.css`) using CSS custom properties for design tokens — no CSS Modules, no CSS-in-JS
- **Fraunces** (display serif) + **Manrope** (body sans), loaded via Google Fonts
- No animation libraries — scroll-reveal effects use the native `IntersectionObserver` API; carousels/sliders use native CSS scroll-snap where present
- Deployed on **Vercel**

## Project structure

```
src/
├── App.jsx                 # Section order / page composition
├── index.css                # Design tokens, reset, and all component styles
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Introduction.jsx
│   ├── Design.jsx
│   ├── Performance.jsx
│   ├── Technology.jsx
│   ├── Interior.jsx
│   ├── Gallery.jsx
│   ├── CTA.jsx
│   ├── Footer.jsx
│   └── StaggeredText.jsx    # Reusable word-by-word headline reveal
└── assets/
    ├── hero/
    ├── exterior/
    ├── interior/
    ├── technology/
    └── gallery/
```

## Page sections (in order)

1. **Hero** — full-bleed model shot, model name as primary headline
2. **Introduction** — short editorial copy
3. **Design** — full-bleed intro + alternating image/text feature list (exterior details)
4. **Performance** — key vehicle spec sheet with count-up stat animation
5. **Technology** — consolidated feature panels (interface, interaction, connectivity)
6. **Interior** — full-bleed intro + grouped comfort/cabin/storage/security details
7. **Gallery** — image carousel with lightbox
8. **CTA** — closing statement linking to Helms Bros.' E-Class inventory
9. **Footer** — nav recap, dealer contact info

## Design system

- **Palette:** Graphite `#0E1013` (dark), Ivory `#F5F3EF` (light), Bronze `#8C7A63` (accent) — plus `--color-muted-on-dark`, `--color-muted-on-light`, and `--color-accent-on-light` tokens to keep text contrast accessible on every background variant
- **Layout:** mobile-first throughout, breakpoints primarily at `1024px` (with a couple of section-specific exceptions)
- **Motion:** scroll-triggered reveals via `IntersectionObserver`, respecting `prefers-reduced-motion` throughout
- **Accessibility:** semantic HTML, visible keyboard focus states, reduced-motion support, and descriptive image alt text.


## Getting started

```bash
npm install
npm run dev
```
