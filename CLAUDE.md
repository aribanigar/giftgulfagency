# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Gifts Gulf Advertising (giftsgulfagency.com): marketing + lead-gen site for printing, signage, events/exhibitions, packaging, gift items, fit-out and social media across the GCC. Next.js 16 App Router, React 19, TypeScript, Tailwind v4, deployed on Vercel.

**Not the same project as giftsgulf.com** (no "agency"), which is a separate, unrelated site. Don't carry facts, NAP or copy between them.

## Branches

The GitHub default branch is a stale `claude/*` branch. Work from `main` (`git checkout main` after cloning).

## Commands

```bash
npm install
npm run dev      # localhost:3000
npm run build    # also the type check, and runs the slug-collision guard (see below)
npm run lint     # eslint (flat config, eslint-config-next)
```

There is no test suite. `npm run build` is the verification step.

Photo uploads to Cloudinary (read creds from `.env.local`):

```bash
node scripts/upload-photos-to-cloudinary.mjs                       # all of public/photos
node scripts/upload-selected-photos.mjs blog-a4-size.jpg other.jpg  # just these files
```

## Next.js 16 caveat

`AGENTS.md` (auto-written by `next dev`) warns this Next.js version has breaking API/convention changes. Read the relevant guide in `node_modules/next/dist/docs/` before writing framework code. Notably, middleware is `src/proxy.ts` exporting `proxy()`, not `middleware.ts`.

## Architecture

Almost all content is **typed data in `src/lib/`**, rendered by a few shared page components in `src/components/`. Adding a page usually means adding a data entry, not a route.

- **Service sections** (`/printing`, `/signages`, `/packaging`, ...): `sections` in `src/lib/site-data.ts`. Each `src/app/<slug>/page.tsx` is a thin wrapper around `<SectionPage>`.
- **Root-level slugs** `src/app/[product]/page.tsx` serve two kinds of data: catalogue `products` (`src/lib/products.ts`, rendered by `product-page.tsx`) and directory `topics` (`src/lib/topics/*.ts`, aggregated in `topics/index.ts`, rendered by `topic-page.tsx`). Products, topics and sections share one URL namespace; `topics/index.ts` throws at build time on a duplicate slug.
- **Topic x city pages** `/[product]/[city]`: generated only for the pairs listed in `cityPlan` in `src/lib/topic-city.ts` (deliberately limited to pairs with real search demand, to avoid thin near-duplicate pages). `dynamicParams = false`.
- **Locations**: `/locations/[slug]` from `src/lib/locations.ts`, `/locations/[slug]/[place]` from `src/lib/places.ts` (areas and venues). Copy says "we deliver and install in", never "located in". GCC city metadata is in `src/lib/gcc-cities.ts`.
- **Blog**: `blogPosts` in `src/lib/blog-data.ts` = long-form `corePosts` (same file) + narrow single-question `guidePosts` from `src/lib/blog/*.ts`. Content blocks use helpers from `src/lib/content-types.ts`.
- **Internal linking / sidebars**: `src/lib/related-links.ts` builds sidebar link lists across topics, cities, places, guides and services; `components/sidebar/` holds the sidebar and quick-quote form.
- **SEO**: JSON-LD builders in `src/lib/schema.ts` (organization, service, product, location, article, FAQ, breadcrumb), emitted via `components/json-ld.tsx`. `src/app/sitemap.ts` enumerates every data source above, so new data entries appear in the sitemap automatically. `siteConfig.url` (`src/lib/site-config.ts`, from `NEXT_PUBLIC_SITE_URL`) is the canonical origin; `src/proxy.ts` 308-redirects the apex and `giftsgulfagency.vercel.app` hosts onto it (preview URLs are intentionally left alone).

### Photos

`src/lib/photos.ts` builds Cloudinary URLs (`gifts-gulf/<id>`, cropped/sized per use, `f_auto,q_auto`) when `CLOUDINARY_CLOUD_NAME` is set, else falls back to `/photos/<id>.jpg`. Next image optimization is off (`unoptimized: true`) because Cloudinary already optimizes. A photo id must exist both in `public/photos/` and on Cloudinary, so upload after adding/replacing a file. `blogPhotoIds` maps blog slugs to photos; Pixabay sources are recorded in `scripts/pixabay-photo-credits.json`.

### Leads, quotes and admin (Upstash Redis)

- `src/lib/settings.ts`: editable site settings (contact email/phone/address, social links, featured video) in Redis, read through `unstable_cache` tagged `site-settings` and invalidated with `updateTag`. Falls back to `defaultSettings` when Redis isn't configured.
- `src/lib/leads.ts`: lead records (status `new -> contacted -> quoted -> won/lost`, optional `Quote` with a secret token, notes, email log) stored in Redis.
- Flow: contact/quick-quote form -> `src/app/contact/actions.ts` (server action) -> `persistLead` + `notifyNewEnquiry` (`src/lib/notify.ts`, which logs each send as an `EmailEvent` on the lead). Admin at `/admin` (password via `ADMIN_PASSWORD`, sha256 cookie session in `src/lib/admin-auth.ts`) manages leads and sends quotes; the customer accepts at `/quote/[id]?t=<token>`, which marks the lead `won` and emails the admin.
- Email: nodemailer over SMTP (`src/lib/email/send.ts`, defaults to Hostinger, port 465). Without `SMTP_USER`/`SMTP_PASS` sends are skipped and logged, not thrown. Templates in `src/lib/email/templates.ts`.

Env vars: see `.env.example`, plus `SMTP_HOST/PORT/USER/PASS`, `EMAIL_FROM`, `ADMIN_NOTIFY_EMAIL`. Redis accepts either `KV_REST_API_*` or `UPSTASH_REDIS_REST_*` naming.

## Design

`THEME.md` documents the design system (Tailwind v4 tokens in `src/app/globals.css`, `--radius: 3px` sharp corners, brand green `#16a34a`, zinc neutrals). It references `src/lib/marketing/brand-dna.ts`, which no longer exists on `main`; treat the code as the source of truth.

## Content

README notes contact details and claims (in-house production, sector coverage, etc.) are partly draft copy; confirm facts with the owner before adding new claims, offices or numbers to copy or schema.
