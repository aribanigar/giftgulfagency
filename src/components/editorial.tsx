import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionVisual } from "@/components/section-visual";
import { cn } from "@/lib/utils";

export type Crumb = { name: string; href?: string };

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function ArrowLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={cn("link-arrow", className)}>
      {children}
      <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
    </Link>
  );
}

/**
 * Dark page-opening banner used by every public page: optional rotating
 * photo background, eyebrow, huge uppercase headline, and an intro offset
 * to the right like an editorial spread. The fixed header sits on top of it.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  photos,
  cta,
  size = "lg",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  crumbs?: Crumb[];
  photos?: string[];
  cta?: { href: string; label: string };
  size?: "xl" | "lg" | "md";
  children?: ReactNode;
}) {
  const hasPhoto = Boolean(photos && photos.length);
  return (
    <section
      className={cn(
        "on-dark relative flex overflow-hidden bg-night text-white",
        hasPhoto ? "min-h-[88svh] items-end" : "items-end",
      )}
    >
      {hasPhoto ? (
        <>
          <SectionVisual photos={photos!} />
          <div className="page-hero-shade absolute inset-0" />
        </>
      ) : null}
      <Container className="relative pb-14 pt-36 sm:pb-20 sm:pt-44">
        {crumbs && crumbs.length ? (
          <nav aria-label="Breadcrumb" className="mb-8 text-xs text-white/60">
            {crumbs.map((c, i) => (
              <span key={c.name}>
                {i > 0 ? <span className="mx-2 text-white/30">/</span> : null}
                {c.href ? (
                  <Link href={c.href} className="hover:text-white">
                    {c.name}
                  </Link>
                ) : (
                  <span className="text-white/90">{c.name}</span>
                )}
              </span>
            ))}
          </nav>
        ) : null}
        {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
        <h1
          className={cn(
            "max-w-6xl",
            size === "xl" ? "display-xl" : size === "lg" ? "display-lg" : "display-md",
          )}
        >
          {title}
        </h1>
        {intro || cta ? (
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6 lg:col-start-7">
              {intro ? (
                <div className="text-base leading-relaxed text-white/75 sm:text-lg">
                  {intro}
                </div>
              ) : null}
              {cta ? (
                <div className="mt-8">
                  <ArrowLink href={cta.href} className="text-lg text-white">
                    {cta.label}
                  </ArrowLink>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
        {children}
      </Container>
    </section>
  );
}

/** Eyebrow + big uppercase headline, with an optional paragraph offset right. */
export function SectionIntro({
  eyebrow,
  title,
  children,
  as: Tag = "h2",
  size = "lg",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  as?: "h1" | "h2";
  size?: "xl" | "lg" | "md" | "sm";
  className?: string;
}) {
  const cls =
    size === "xl"
      ? "display-xl"
      : size === "lg"
        ? "display-lg"
        : size === "md"
          ? "display-md"
          : "display-sm";
  return (
    <div className={className}>
      {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
      <Tag className={cn(cls, "max-w-6xl")}>{title}</Tag>
      {children ? (
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12">
          <div className="text-base leading-relaxed text-current opacity-75 sm:text-lg lg:col-span-6 lg:col-start-7">
            {children}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export type HairlineItem = {
  href: string;
  title: string;
  meta?: string;
  external?: boolean;
};

/** Full-width rows split by hairlines, the iProspect list pattern. */
export function HairlineLinks({
  items,
  size = "md",
}: {
  items: HairlineItem[];
  size?: "md" | "lg";
}) {
  return (
    <ul className="hairline border-t">
      {items.map((item) => (
        <li key={item.href + item.title} className="hairline border-b">
          <Link
            href={item.href}
            className="group flex items-center justify-between gap-6 py-6 transition-colors sm:py-7"
          >
            <span className="min-w-0">
              <span
                className={cn(
                  "block font-semibold tracking-tight transition-colors group-hover:text-brand",
                  "[.on-dark_&]:group-hover:text-brand-bright",
                  size === "lg" ? "text-2xl sm:text-3xl" : "text-lg sm:text-2xl",
                )}
              >
                {item.title}
              </span>
              {item.meta ? (
                <span className="mt-1.5 block text-sm opacity-60">{item.meta}</span>
              ) : null}
            </span>
            <ArrowUpRight
              className="h-6 w-6 shrink-0 opacity-40 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
              strokeWidth={1.5}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Label/value grid with hairlines, used for quick facts. */
export function FactGrid({ facts }: { facts: { label: string; value: string }[] }) {
  return (
    <dl className="hairline grid grid-cols-1 border-t sm:grid-cols-2 lg:grid-cols-4">
      {facts.map((f) => (
        <div key={f.label} className="hairline border-b py-6 sm:pr-8">
          <dt className="eyebrow">{f.label}</dt>
          <dd className="mt-3 text-base leading-relaxed">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}
