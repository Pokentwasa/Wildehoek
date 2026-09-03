# Wildehoek — Farm Restaurant

A premium, editorial website for a farm-to-table restaurant, built as a
production-ready Next.js application. Server-rendered content first, with GSAP
motion layered on as progressive enhancement so nothing depends on JavaScript
to be crawlable.

> **Wildehoek** is a placeholder brand (name, address, copy and photography).
> Swap in the real restaurant's details via `lib/site.ts`, `data/*` and
> `public/images/` — no component changes required.

## Stack

- **Next.js 14** (App Router, Server Components by default)
- **TypeScript**
- **Tailwind CSS** (design tokens in `tailwind.config.ts`)
- **GSAP + ScrollTrigger** for reveals and internal image movement
- **Lenis** for optional, reduced-motion-aware smooth scroll
- **next/font** (Fraunces display serif + Hanken Grotesk humanist sans)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

> `next/font` downloads the two typefaces from Google Fonts at build time, so the
> first `dev`/`build` needs network access.

## Project structure

```
app/                     Routes (App Router)
  layout.tsx             Fonts, metadata, global JSON-LD, app shell
  page.tsx               Homepage composition
  restaurant | menu | farm | gatherings | visit | privacy
  journal/               Index + [slug] article pages
  robots.ts | sitemap.ts
components/
  layout/                Nav, Footer, PageHero, PageTransition, SmoothScroll, BookButton…
  sections/              Homepage + shared sections (Hero, FarmStory, MenuPreview…)
  ui/                    Reveal, ParallaxImage, TextLink, JsonLd, TrackedLink…
data/                    CMS-shaped content: menu, journal, experiences, events
lib/                     site config, schema (JSON-LD), gsap, analytics
public/images/           Placeholder photography (replace with real assets)
```

## SEO & crawlability

- All meaningful content is server-rendered — GSAP only enhances existing DOM.
- Reveal animations hide elements **only** when JS is present (an inline
  `js-ready` class), and are fully disabled under `prefers-reduced-motion`. With
  JS off, everything is visible.
- Per-page `<title>`, meta descriptions, canonicals, Open Graph + Twitter cards.
- JSON-LD: `Restaurant`, `WebSite`, `Organization`, `BreadcrumbList`, `Menu`,
  `Article`. No fake review aggregate.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`.
- Semantic HTML, one `<h1>` per page, breadcrumbs, internal linking between all
  sections.

## Making it CMS-ready

Content is isolated from presentation so a headless CMS (Poke Digital CMS,
Sanity, etc.) can drop in behind these modules:

| Content        | File                 | Model fields                                            |
| -------------- | -------------------- | ------------------------------------------------------- |
| Restaurant     | `lib/site.ts`        | name, address, geo, hours, contact, booking URL, social |
| Menu           | `data/menu.ts`       | category, dish, description, price, dietary, seasonal    |
| Journal        | `data/journal.ts`    | title, slug, hero, excerpt, body, date, author           |
| Events         | `data/events.ts`     | title, description, image, alt                            |
| Experiences    | `data/experiences.ts`| title, description, image, alt                            |

Replace the exported constants with async CMS queries; component props stay the same.

## Reservations & analytics

- **Reservations** open `site.bookingUrl` (Dineplan / OpenTable / bespoke) — set it
  once in `lib/site.ts`. Desktop CTA lives in the nav; mobile gets a discreet fixed
  bar after the hero.
- **Analytics** — `lib/analytics.ts` pushes GA4 / dataLayer events:
  `reservation_click`, `menu_view`, `directions_click`, `phone_click`,
  `email_click`, `event_enquiry`, `journal_view`. Add your GA4 / GTM snippet in
  `app/layout.tsx` to activate.

## Replacing the placeholders

1. Drop real photography into `public/images/` (keep the filenames, or update the
   references). Use the documentary, natural-light direction described in the brief.
2. Update `lib/site.ts` with the real name, address, hours, phone, booking URL.
3. Edit `data/*` with the real menu, stories and events.
4. Add a real `public/wildehoek-menu.pdf` (or point `site.menuPdf` at a CMS asset).
5. Review `app/privacy/page.tsx` for POPIA compliance.

## Accessibility

Keyboard-navigable, visible focus states, skip link, labelled controls, and full
`prefers-reduced-motion` support (motion off → the site is still complete and
beautiful).
