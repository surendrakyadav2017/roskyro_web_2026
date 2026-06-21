# ROSKYRO — Website

ROSKYRO is an AI Growth Technology Company helping small and medium businesses across India get more
visibility, trust, and revenue through AI-powered systems across four pillars — **K**nowledge, **Y**ield,
**R**eputation, and **O**ptimization.

This repository is the marketing website at [roskyro.in](https://www.roskyro.in).

## Tech stack

- **React 19 + TypeScript** — UI
- **Vite** — build tool
- **React Router** — client-side routing (Home, Services, Pricing, Blog, About, Contact, legal pages)
- **Tailwind CSS v4** — styling
- **Vercel** — hosting

## Run locally

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`.

## Build for production

```bash
npm run build
```

Output is written to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## Type-check only

```bash
npm run lint
```

## Project structure

```
/pages            Route-level page components (Home, Services, Pricing, Blog, About, Contact, etc.)
/public           Static assets — logo, favicons, sitemap.xml, robots.txt
App.tsx           Route definitions
siteConfig.ts     Single source of truth for brand name, contact info, social links
blogData.ts       Blog post content (static, no CMS dependency)
solutionsData.ts  K-Y-R-O pillar content, pricing plans, problem/feature copy
Seo.tsx           Per-page <title>/meta updater for the SPA
JsonLd.tsx        Organization/WebSite/Service structured data (AEO/GEO)
```

## Deploying to Vercel

This project deploys to Vercel with zero extra configuration beyond what's already in `vercel.json`,
which handles SPA client-side routing rewrites (so direct visits to e.g. `/blog` don't 404).

1. Push this repository to GitHub.
2. Import the repo in Vercel.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

## Updating contact info or brand details

Edit `siteConfig.ts` — every page pulls from this single file, so updates propagate everywhere
automatically (navbar, footer, JSON-LD schema, contact page, WhatsApp links).

## Adding a blog post

Add a new entry to the `BLOG_POSTS` array in `blogData.ts`. No build step or CMS required — it's
plain data, fully type-checked, and automatically picked up by `/blog` and `/blog/:slug`.
