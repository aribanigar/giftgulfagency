"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export type BlogCard = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image?: string;
  coverStat?: string;
  tags: string[];
};

export function BlogBrowser({ posts, categories }: { posts: BlogCard[]; categories: string[] }) {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const p of posts) c[p.category] = (c[p.category] ?? 0) + 1;
    return c;
  }, [posts]);

  const q = query.trim().toLowerCase();
  const visible = posts.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      (!q || `${p.title} ${p.excerpt} ${p.tags.join(" ")}`.toLowerCase().includes(q)),
  );

  return (
    <div>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div role="tablist" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={category === c}
              onClick={() => setCategory(c)}
              className={cn(
                "border px-4 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
                category === c ? "border-ink bg-ink text-white" : "border-ink/15 text-ink/70 hover:border-ink/40",
              )}
            >
              {c}
              <span className="ml-2 opacity-50">{c === "All" ? posts.length : counts[c]}</span>
            </button>
          ))}
        </div>
        <label className="relative block w-full lg:w-80">
          <span className="sr-only">Search guides</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search, e.g. A4 size, roll-up, frosted"
            className="w-full border border-ink/20 bg-white px-4 py-3 text-base outline-none lg:text-[15px] transition-colors focus:border-brand"
          />
        </label>
      </div>

      <p className="mt-8 text-sm text-ink/55" aria-live="polite">
        {visible.length} {visible.length === 1 ? "guide" : "guides"}
      </p>

      <div className="hairline mt-6 grid grid-cols-1 gap-x-10 gap-y-16 border-t pt-12 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <div className="relative aspect-[4/3] overflow-hidden bg-night">
              {post.image ? (
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="on-dark absolute inset-0 flex flex-col justify-between p-6 text-white transition-colors duration-500 group-hover:bg-night-2 sm:p-8">
                  <span className="eyebrow">{post.category}</span>
                  <span className="font-heading text-3xl font-bold uppercase leading-[1.02] tracking-tight text-brand-bright [text-wrap:balance] sm:text-4xl">
                    {post.coverStat ?? post.category}
                  </span>
                  <span aria-hidden className="h-px w-16 bg-white/30" />
                </div>
              )}
            </div>
            <div className="mt-6 flex items-center justify-between gap-3">
              <p className="eyebrow">{post.category}</p>
              <p className="text-sm text-ink/50">{post.readTime}</p>
            </div>
            <h2 className="mt-3 text-xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-brand">
              {post.title}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/65">{post.excerpt}</p>
          </Link>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-12 text-lg text-ink/65">
          No guides match that search. Try a shorter term, or{" "}
          <Link href="/contact" className="underline underline-offset-4 hover:text-brand">ask us directly</Link>.
        </p>
      ) : null}
    </div>
  );
}
