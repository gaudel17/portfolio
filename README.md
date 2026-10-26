# Portfolio Website Template

A bold, motion-rich personal portfolio template built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

The project ships with dummy placeholder content ("John Doe") so you can clone it, swap in your own data, and deploy your own portfolio in minutes.

## Highlights

- App Router architecture with reusable sections and components
- Dynamic, animated pages powered by Framer Motion
- Rich portfolio sections: hero, principles, projects, about, contact
- Magnetic buttons, mouse glow, scroll progress bar, confetti easter egg
- Dark theme with lamp-mode toggle
- Semantic HTML with Schema.org structured data (Person, WebSite, Breadcrumbs, ItemList)
- Per-page Open Graph images generated at build time with `next/og`
- Sitemap and robots.txt generated automatically
- Typed, data-driven content for easy maintenance

## Tech Stack

| Category   | Technology                          |
| ---------- | ----------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack)  |
| Runtime/UI | React 19, React DOM 19              |
| Language   | TypeScript                          |
| Styling    | Tailwind CSS 4                      |
| Animation  | Framer Motion                       |
| Icons      | Lucide React                        |
| Effects    | canvas-confetti                     |
| Linting    | ESLint 9 + eslint-config-next       |

## Routes

- `/` - Hero + working principles + selected work
- `/about` - Profile, introduction, work experience, education, skills
- `/projects` - All selected project cards
- `/contact` - Contact cards, social links, availability info

---

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm (or pnpm / yarn / bun if you prefer)

### Installation

```bash
# 1. Clone or download this template
git clone <your-repo-url> my-portfolio
cd my-portfolio

# 2. Install dependencies
npm install

# 3. (Optional) Set up environment variables
cp .env.local.example .env.local

# 4. Start the dev server
npm run dev
```

Open http://localhost:3000 in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## Customization Guide

All personal content lives under `app/lib/`. Replace the dummy "John Doe" data with your own.

### 1. Core Data Files

| File                                | What to change                                                        |
| ----------------------------------- | --------------------------------------------------------------------- |
| `app/lib/data/about.ts`             | Name, role, location, profile image, social links, introduction paragraphs, work experience, education, technical skills |
| `app/lib/constants/social.ts`       | Social links used by the footer (GitHub, LinkedIn, Facebook, Instagram, Email) |
| `app/lib/constants/location.ts`     | City, country, continent, timezone, flag emoji, map coordinates        |
| `app/lib/data/tooltips.ts`          | Fun tooltip texts shown on hover over social/contact actions           |
| `app/types/project.ts`              | Your projects: title, descriptions, role, tags, live URL, GitHub URL, featured flag |

> Note: keep the `image` paths pointing at your own files in `public/projects/`.

### 2. Hardcoded Text in Components

Some display text is currently written directly inside components. Search for `John Doe` and replace every occurrence:

| File                                        | Contains                                                       |
| ------------------------------------------- | -------------------------------------------------------------- |
| `app/components/sections/Hero.tsx`          | Kicker line ("John Doe · Frontend Developer"), stats, CTA labels, portrait alt text |
| `app/components/sections/HomeSections.tsx`  | Section headings, principle cards, status note                 |
| `app/components/layout/Footer.tsx`          | Footer name, description, nav labels, share text, copyright    |
| `app/(pages)/contact/page.tsx`              | Email address, phone number, action links, timezone text       |
| `app/(pages)/projects/page.tsx`             | Page heading, work-index card labels, GitHub link              |

Quick way to find them all:

```bash
grep -rn "John Doe\|johndoe\|example.com" app/
```

### 3. SEO & Metadata

Update titles, descriptions, keywords, canonical URLs, and structured data:

| File                                    | What to change                                                     |
| --------------------------------------- | ------------------------------------------------------------------ |
| `app/layout.tsx`                        | Global metadata: site URL (`metadataBase`), default title/description, keywords, Open Graph/Twitter cards |
| `app/page.tsx`                          | Home page metadata + Person/WebSite/ProfilePage JSON-LD            |
| `app/(pages)/about/layout.tsx`          | About page metadata + breadcrumb JSON-LD                           |
| `app/(pages)/projects/layout.tsx`       | Projects page metadata + breadcrumb JSON-LD                        |
| `app/(pages)/projects/page.tsx`         | ItemList JSON-LD for projects                                      |
| `app/(pages)/contact/layout.tsx`        | Contact page metadata + breadcrumb JSON-LD                         |
| `app/sitemap.ts`                        | Replace `BASE_URL` with your production domain                     |
| `app/robots.ts`                         | Replace sitemap/host URLs with your production domain              |

### 4. Open Graph Images

Dynamic OG images are rendered from JSX. Update the text inside:

- `app/opengraph-image.tsx` (home)
- `app/(pages)/about/opengraph-image.tsx`
- `app/(pages)/projects/opengraph-image.tsx`
- `app/(pages)/contact/opengraph-image.tsx`

### 5. Replace Images

Swap these files in `public/` with your own (keep the same filenames to avoid code changes):

| File                    | Used for                              |
| ----------------------- | ------------------------------------- |
| `public/heroimage.png`  | Home page hero portrait               |
| `public/about.png`      | About page profile photo              |
| `public/imagecp.png`    | Contact page portrait                 |
| `public/picofme.png`    | SEO fallback image (referenced in config/metadata) |
| `public/projects/*.png` | Project card screenshots (16:10 works best) |

### 6. Environment Variables

Copy `.env.local.example` to `.env.local` and fill in (both optional):

```bash
# Umami analytics website ID (leave empty to disable analytics script)
UMAMI_ID=

# Google Search Console verification token (leave empty to disable meta tag)
GOOGLE_VERIFICATION=
```

These are read in `app/layout.tsx` and `app/lib/config/portfolio.ts`. Nothing is required for local development.

### 7. Branding Extras

- Favicon: replace `app/icon.svg` and `app/apple-icon.png`
- Theme colors: edit CSS variables in `app/globals.css` (`--brand-primary`, `--brand-signal`, etc.)
- Site name in `package.json` (`"name"` field)

---

## Project Structure

```text
app/
	layout.tsx                # Global shell, fonts, metadata, analytics script
	page.tsx                  # Home page composition + JSON-LD
	globals.css               # Tailwind theme, brand colors, effects
	robots.ts                 # robots.txt generator
	sitemap.ts                # sitemap.xml generator
	opengraph-image.tsx       # Home OG image (generated)
	(pages)/
		about/                  # About page + layout metadata + OG image
		projects/               # Projects page + layout metadata + OG image
		contact/                # Contact page + layout metadata + OG image
	components/
		sections/               # Hero, HomeSections
		layout/                 # Navigation, Footer, SystemBar, MouseGlow
		ui/                     # OptimizedImage, Tooltip, ThemeToggle, ProgressBar
		animations/             # MagneticWrapper
	lib/
		config/portfolio.ts     # Central portfolio config (reference/template values)
		constants/              # Static constants (location, socials)
		data/                   # About/profile/tooltips data
		hooks/                  # useTime, useMousePosition
		utils/                  # cn() class-name helper
	types/                    # Shared app-level types + project data
public/
	projects/                 # Project images
	heroimage.png, about.png, imagecp.png, picofme.png
```

## Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server                 |
| `npm run build`   | Create optimized production build        |
| `npm run start`   | Serve the production build               |
| `npm run lint`    | Run ESLint checks                        |

## SEO Checklist Before Going Live

1. Replace every `https://www.example.com` occurrence with your real domain.
2. Update `app/sitemap.ts` and `app/robots.ts`.
3. Add your `GOOGLE_VERIFICATION` token to `.env.local` and verify in Google Search Console.
4. Optionally add your `UMAMI_ID` for privacy-friendly analytics.
5. Deploy, then submit your sitemap: `https://your-domain.com/sitemap.xml`.

## Deployment

The app deploys cleanly on Vercel or any Node-compatible host.

Recommended Vercel flow:

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Add environment variables (`UMAMI_ID`, `GOOGLE_VERIFICATION`) if you use them.
4. Build command: `npm run build` (default).
5. Deploy and point your custom domain at the project.

## Notes

- React Compiler is enabled in `next.config.ts`.
- Path alias `@/*` maps to the repository root (configured in `tsconfig.json`).
- No database or API keys are needed - everything is static content.

## License

No license file is included. Add a `LICENSE` if you plan to publish the template publicly.
