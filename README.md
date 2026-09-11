# Gifts Gulf — Media & Advertising

Marketing site for Gifts Gulf: signage, stickers, packaging, corporate
gifts, events & exhibitions, and fit-outs, plus social media, website and
software development.

See [THEME.md](./THEME.md) for the design system (colors, typography,
layout conventions).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- shadcn/ui-style primitives in `src/components/ui/`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/` — pages (home, services, portfolio, about, contact)
- `src/components/layout/` — header, footer
- `src/lib/site-data.ts` — service list, nav links, sectors (single source
  of truth used across pages)

## Known placeholders

Contact details on `/contact` (email, phone, address) and the claims of
in-house production, sector coverage, etc. across the site are draft copy —
replace with verified details before launch.
