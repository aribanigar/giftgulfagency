# Gifts Gulf — Website Theme

Reference doc for the visual design system: colors, typography, logo, and the
header/footer layout. Source of truth is always the code — this file just
collects it in one place.

## Stack

- **Tailwind CSS v4** — CSS-based config, no `tailwind.config.js`. All tokens
  live in `src/app/globals.css`.
- **shadcn/ui** primitives in `src/components/ui/`.
- Base radius: `--radius: 3px` — sharp, boxy corners, not shadcn's default rounded look.

## Colors

### Design tokens (`src/app/globals.css`)

Neutral shadcn defaults in `oklch()`, driving `background`/`foreground`/`card`/
`border`/etc. Light mode in `:root`, dark mode in `.dark`.

```css
:root {
  --background: oklch(1 0 0);        /* white */
  --foreground: oklch(0.145 0 0);    /* near-black */
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --radius: 3px;
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --border: oklch(1 0 0 / 10%);
  /* ...full set in globals.css */
}
```

Radius scale derives from `--radius`:
`sm: ×0.6`, `md: ×0.8`, `lg: ×1`, `xl: ×1.4`, `2xl: ×1.8`, `3xl: ×2.2`, `4xl: ×2.6`.

### Brand palette (used via Tailwind utilities, not CSS vars)

Documented in `src/lib/marketing/brand-dna.ts`:

| Name | Hex | Usage |
|---|---|---|
| Brand Green | `#16a34a` (Tailwind `green-600`) | Primary actions — buttons, links, active nav, badges, `viewport.themeColor` |
| Brand Black | `#111111` | Dark text/accents |
| Warm White | `#fafafa` | Section backgrounds |

Neutral scale is Tailwind `zinc-*`:
- `zinc-900` — headings
- `zinc-600` / `zinc-700` — body text
- `zinc-200` — borders/dividers
- `zinc-50` — subtle section backgrounds (top banner, footer link grid)

Hover state for the brand green is `green-700`.

## Typography

Two typefaces, loaded via `next/font/google` in `src/app/layout.tsx`:

```ts
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
```

Mapped in `globals.css`:

```css
--font-sans: "Geist", "Geist Fallback", ui-sans-serif, system-ui, sans-serif;
--font-mono: "Geist Mono", "Geist Mono Fallback", ui-monospace, monospace;
--font-heading: "Poppins", "Poppins Fallback", ui-sans-serif, system-ui, sans-serif;
```

`html { @apply font-sans; }` — **Geist** is the body/UI typeface (paragraphs,
labels, nav, buttons, form fields). **Poppins** is used for headings only
(`h1`–`h6` and components explicitly styled with `font-heading`), typically at
weight 600/700 (600 for smaller headings, 700 for large display/hero
headings). No serif or additional display font anywhere.

## Logo

- File: `public/gglogo.svg` (SVG, ~660 KB)
- Favicons: `src/app/icon.png`, `src/app/apple-icon.png`

| Placement | Size |
|---|---|
| Header (desktop) | `h-12 sm:h-14`, max-width `220px` |
| Footer | `h-11`, max-width `180px` |
| Mobile nav drawer | `h-10`, max-width `160px` |

A text fallback (`Gifts Gulf` + `International Gifting` tagline, uppercase
tracked-out) swaps in via `onError` if the SVG fails to load — see
`src/components/layout/header.tsx`.

## Header (`src/components/layout/header.tsx`)

Sticky, 3-tier, white background:

1. **Top banner** (`src/components/layout/top-banner.tsx`) — thin `zinc-50`
   strip, `border-b zinc-200`, currency selector right-aligned.
2. **Main bar** — `sticky top-0 z-50`, `bg-white border-b border-zinc-200`.
   Mobile hamburger (opens a slide-in `Sheet` drawer) → logo → inline
   `InstantSearchBar` (desktop only, hidden on `/search`) → right-side
   actions: Login/Sign Up or account menu, Quick Order, Import/Export,
   Wishlist, Cart (badge counts in `green-600`/`red-500`).
3. **Nav bar** (desktop only, `hidden lg:block`, `border-t zinc-100`) —
   "Collections" mega-menu (900px flyout: category list → subcategory grid →
   trending sidebar) plus New Arrivals / Gift Combos (conditional) / Custom
   Branding links.

Mobile gets a dedicated drawer nav (`MobileNav`) instead of the mega-menu,
plus its own search bar row below the main bar.

## Footer (`src/components/layout/footer.tsx`)

Large SEO-oriented mega-footer, `bg-zinc-50 border-t border-zinc-200`:

1. **Brand block** (left column, 260px) — logo, one-line description, phone
   (`tel:`) and email (`mailto:`) links, social icons (Facebook, Instagram,
   LinkedIn, YouTube, X — inline SVG, rendered only when the URL is set in
   `SiteSettings`).
2. **5-column link grid** (2 cols mobile → 3 tablet → 5 desktop) — Company,
   Partner With Us, Services, Resources, Shop by Location, Compliance, Gifts
   by Sector, Popular Products, Print/Signage/Fit-Out, Customer Support.
3. **Newsletter strip** — white background, top border, `NewsletterSignup`.
4. **Bottom bar** — `© {year} Gifts Gulf. All rights reserved.` + Privacy
   Policy / Terms & Conditions / Cookies / Sitemap links.

Mobile gets extra bottom padding (`pb-[calc(3.5rem+env(safe-area-inset-bottom))]`)
to clear the `MobileStickyBar`.

## Glassmorphism utilities (`globals.css` `@layer utilities`)

Available but only used selectively (e.g. overlay/floating panels), not on
the main header/footer:

```css
.glass         /* 55% white, 20px blur */
.glass-light   /* 70% white, 16px blur */
.glass-dark    /* 25% black, 20px blur */
.glass-card    /* 50% white, 12px blur, soft shadow */
.glass-sidebar /* 75% zinc-100, 24px blur, right border */
.glass-header  /* 65% white, 20px blur, bottom border */
```

## Summary

Clean B2B e-commerce visual language: white/zinc neutrals with a single
green (`#16a34a`) accent, sharp 3px-radius corners, a two-typeface system
(Poppins for headings, Geist for body/UI), a dense information-heavy
mega-footer, and a sticky mega-menu header built for a large,
category-driven catalogue.
