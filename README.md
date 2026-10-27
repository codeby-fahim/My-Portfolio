<div align="center">

# Fahim Portfolio

**A fast, accessible portfolio for a full-stack web developer — built with Next.js 16, React 19, and Tailwind CSS v4.**

[![Next.js](https://img.shields.io/badge/Next.js-16.4-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.3-087EA4?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-10B981)](#license)

</div>

---

**[Live Demo: https://my-portfolio-topaz-tau-78.vercel.app/](https://my-portfolio-topaz-tau-78.vercel.app/)**
---

## Overview

This repository contains the personal portfolio of **Md. Rakibul Islam Fahim**, a full-stack web developer based in Dhaka, Bangladesh. It showcases his background, technical skills, selected projects, and contact details through a clean, responsive, and accessible interface.

The site is intentionally small and content-driven: all copy lives in typed data modules, so updating the portfolio never requires touching layout code.

**Highlights**

- **Content-first architecture** — every section is generated from typed data in `src/data/`.
- **Static by default** — all routes are prerendered at build time for instant loads and simple hosting.
- **Accessible UI** — semantic landmarks, skip link, visible focus rings, labelled icon buttons, and reduced-motion support.
- **SEO ready** — per-page metadata, canonical URLs, Open Graph/Twitter cards (including a dynamically generated image), `sitemap.xml`, and `robots.txt`.
- **Print-friendly résumé** — a dedicated `/resume` route that prints cleanly to A4 / Save as PDF.
- **Thoughtful details** — scroll-spy navigation, mobile menu, copy-email button, and project deep pages with challenges and next steps.

---

## Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack, Cache Components) |
| UI runtime | [React 19](https://react.dev) with React Compiler enabled |
| Language | [TypeScript](https://www.typescriptlang.org) (strict) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/turbopack` |
| Icons | [react-icons](https://react-icons.github.io/react-icons/) |
| Fonts | Inter via `next/font` (self-hosted, `display: swap`) |
| Linting | ESLint 9 + `eslint-config-next` |

No UI component library is used — the interface is built from small, composable components and shared class tokens.

---

## Getting Started

### Prerequisites

- **Node.js 20.9+** (see `engines` in `package.json`)
- npm 10+ (or pnpm/yarn/bun — lockfile is npm)

### Installation

```bash
git clone <your-repository-url>
cd my-portfolio
npm install
```

### Environment variables

Copy the example file and adjust the site URL:

```bash
cp .env.example .env.local
```

```env
# Public URL used for canonical links, Open Graph metadata, sitemap.xml, and robots.txt.
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

| Variable | Required | Default | Purpose |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | No | `http://localhost:3000` | Canonical origin for metadata, sitemap, robots, and generated OG image URLs. Set this to your production domain before deploying. |

> The value is read at build time. Redeploy after changing it.

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

---

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload. |
| `npm run build` | Create an optimized production build and prerender all routes. |
| `npm start` | Serve the production build (run `build` first). |
| `npm run lint` | Lint the whole project with ESLint. |
| `npm run typecheck` | Type-check without emitting files (`tsc --noEmit`). |

Recommended pre-deploy check:

```bash
npm run lint && npm run typecheck && npm run build
```

---

## Routes

| Route | Rendering | Description |
| --- | --- | --- |
| `/` | Static | Hero, about, skills, selected projects, contact. |
| `/projects` | Static | Full project index with previews and tech tags. |
| `/projects/[projectId]` | Static (prerendered per project) | Case-study page: overview, challenges, improvements, tech stack, links, next project. |
| `/resume` | Static | Print-optimized résumé with a **Print / Save PDF** action. |
| `/sitemap.xml` | Static | Generated from site config and project data. |
| `/robots.txt` | Static | Allows crawling and points to the sitemap. |
| `/opengraph-image` | Static | 1200×630 social card generated with `next/og`. |

Unknown paths render a custom `not-found` page; runtime failures render `error.tsx`; route transitions show `loading.tsx`.

---

## Project Structure

```text
.
├── public/
│   └── image/                 # Portrait, logo, and project previews
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root shell: metadata, Navbar, main, Footer
│   │   ├── page.tsx           # Homepage composition
│   │   ├── globals.css        # Tailwind import, base styles, print styles
│   │   ├── icon.png           # Favicon / app icon
│   │   ├── opengraph-image.tsx
│   │   ├── robots.ts
│   │   ├── sitemap.ts
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   ├── not-found.tsx
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   └── [projectId]/page.tsx
│   │   └── resume/
│   │       ├── page.tsx
│   │       └── PrintResumeButton.tsx
│   ├── components/            # Navbar, Hero, About, Skills, Projects, Contact, Footer, …
│   ├── data/
│   │   ├── portfolio.ts       # Name, role, bio, links, nav, site URL
│   │   ├── projects.ts        # Project case studies
│   │   └── skills.ts          # Skill groups and icons
│   ├── lib/ui.ts              # Shared layout and button class tokens
│   └── types/project.ts       # IProject interface
├── .env.example
├── next.config.ts
└── package.json
```

Path alias: `@/*` → `src/*`.

---

## Editing Content

Everything on the site is driven by three files.

### `src/data/portfolio.ts`

Identity, tagline, bio paragraphs, contact details, social links, navigation labels, and the canonical site URL. Update this first if you fork the project.

```ts
export const siteConfig = {
  name: "Md. Rakibul Islam Fahim",
  role: "Full-Stack Web Developer",
  email: "fahimdf177@gmail.com",
  // …
} as const;
```

### `src/data/projects.ts`

An array of `IProject` objects. Add a project here and it automatically appears on the homepage, the `/projects` index, the résumé, the sitemap, and gets its own prerendered detail route.

```ts
{
  slug: "my-project",          // used as /projects/my-project
  name: "My Project",
  category: "Web App",
  description: "One or two sentences shown on cards and detail pages.",
  image: "/image/my-project.jpg",
  technologies: ["React", "Next.js"],
  liveLink: "https://example.com",
  githubLink: "https://github.com/…", // optional
  challenges: ["…"],
  improvements: ["…"],
}
```

Preview images live in `public/image/` and are rendered at a **2:1** aspect ratio. A 1600×800 JPEG or PNG works best.

### `src/data/skills.ts`

Grouped skills (`Frontend`, `Backend & Database`, `Tools & Workflow`) with a `react-icons` component per item. Groups and items are rendered automatically.

---

## Design System

The brand palette is intentionally narrow: **emerald** for emphasis and **deep navy** for dark surfaces.

| Token | Hex | Usage |
| --- | --- | --- |
| Navy | `#0B132B` | Navbar, hero, footer, dark panels |
| Emerald 500 | `#10B981` | Primary buttons, accents, active states |
| Emerald 400 | `#34D399` | Hover states on dark backgrounds |
| Emerald 600 | `#059669` | Focus ring in light themes |
| Emerald 700 | `#047857` | Text links on light backgrounds (AA contrast) |
| Slate 900 / 600 | `#0F172A` / `#475569` | Headings and body copy |
| Slate 200 / 50 | `#E2E8F0` / `#F8FAFC` | Borders and subtle section fills |

Conventions:

- Shared spacing, container, card, and button classes live in `src/lib/ui.ts` — reuse them instead of duplicating long class strings.
- Primary buttons use emerald backgrounds with **dark navy text** so contrast stays above WCAG AA.
- Sections use consistent `py-20 sm:py-24` rhythm and a `max-w-7xl` container.
- All animation is subtle and disabled automatically under `prefers-reduced-motion: reduce`.

---

## Accessibility

- Skip-to-content link and a single `<main>` landmark per page.
- Semantic `<header>`, `<nav>`, `<section>`, `<footer>` with labelled regions.
- `aria-current="location"` on the active nav item (scroll-spy on the homepage).
- Icon-only controls have accessible names; decorative icons are hidden with `aria-hidden`.
- Visible `:focus-visible` outline on every interactive element.
- Mobile menu is keyboard operable and exposes `aria-expanded` / `aria-controls`.
- Text/background pairs were chosen to meet WCAG AA contrast on both light and dark surfaces.
- Reduced-motion media query neutralizes transitions and smooth scrolling.

---

## SEO & Metadata

- Root metadata defines title template, description, keywords, authors, Open Graph, Twitter cards, and robots directives.
- Canonical URLs are derived from `NEXT_PUBLIC_SITE_URL` with a trailing-slash guard.
- Project detail pages generate their own title, description, and OG image from project data.
- `app/sitemap.ts` and `app/robots.ts` keep crawler hints in sync with content.
- `app/opengraph-image.tsx` renders a branded 1200×630 card at build time — no external image service required.

Set `NEXT_PUBLIC_SITE_URL` to your real domain so canonical and social URLs are absolute and correct.

---

## Printing the Résumé

The `/resume` page includes a **Print / Save PDF** button that calls the browser print dialog. Print styles in `globals.css`:

- switch to A4 with 14 mm margins,
- hide navigation, footer, and action buttons,
- force a white background and remove link underlines for clean output.

In Chrome or Edge, choose **Save as PDF** and enable *Background graphics* for the emerald accents.

---

## Deployment

### Vercel (recommended)

1. Push the repository to GitHub.
2. Import it in Vercel — the Next.js preset is detected automatically.
3. Add `NEXT_PUBLIC_SITE_URL` (for example `https://fahim.dev`) under **Settings → Environment Variables** for Production and Preview.
4. Deploy. Every route is prerendered, so no server database or runtime configuration is required.

### Self-hosting

```bash
npm ci
npm run build
NEXT_PUBLIC_SITE_URL=https://your-domain.com npm start
```

Run behind a reverse proxy (Nginx, Caddy, or a platform load balancer) and forward to port 3000.

---

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| `Unsupported Node.js version` during build | Upgrade to Node 20.9 or newer (`node -v`). |
| Canonical/OG URLs point to `localhost` | Set `NEXT_PUBLIC_SITE_URL` and rebuild — the value is inlined at build time. |
| A project preview shows an outdated image after replacing the file | Clear the Next.js image cache (delete the `.next/cache/images` folder) and restart, then hard-refresh the browser. |
| Port 3000 already in use | `npm run dev -- -p 3001` (or `npm start -- -p 3100`). |
| Build fails on a data edit | Run `npm run typecheck` — `IProject` and `siteConfig` are validated at compile time. |

---

## Contact

- **Email:** [fahimdf177@gmail.com](mailto:fahimdf177@gmail.com)
- **GitHub:** [@codeby-fahim](https://github.com/codeby-fahim)
- **LinkedIn:** [md-rakibul-islam-fahim](https://www.linkedin.com/in/md-rakibul-islam-fahim)
- **Location:** Mirpur-1, Dhaka, Bangladesh

Open to full-time roles, freelance work, and collaboration on thoughtful web products.

---

## License

The source code is available under the **MIT License**. Personal content — including the name, biography, résumé text, portrait, and project screenshots — remains © Md. Rakibul Islam Fahim and may not be reused without permission.

---

<div align="center">

Built with Next.js, React, TypeScript, and Tailwind CSS.

</div>
