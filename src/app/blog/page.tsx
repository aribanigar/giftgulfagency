import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { blogPhotoIds, heroPhoto, wide } from "@/lib/photos";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/reveal";

const blogTitle = "Blog | Signage, Printing, Packaging & Digital Guides | Gifts Gulf Advertising";
const blogDescription =
  "Practical, factual guides on signage, printing, packaging, corporate gifting, social media, websites and SEO for businesses in the UAE and Qatar.";

export const metadata: Metadata = {
  title: blogTitle,
  description: blogDescription,
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: blogTitle,
    description: blogDescription,
    url: `${siteConfig.url}/blog`,
    images: [{ url: heroPhoto("signage-install"), width: 1920, height: 1080, alt: blogTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: blogTitle,
    description: blogDescription,
    images: [heroPhoto("signage-install")],
  },
};

const categoryStyles: Record<string, string> = {
  Signage: "bg-green-50 text-green-700",
  Printing: "bg-amber-50 text-amber-700",
  Packaging: "bg-sky-50 text-sky-700",
  "Gift Items": "bg-rose-50 text-rose-700",
  "Social Media": "bg-fuchsia-50 text-fuchsia-700",
  Digital: "bg-indigo-50 text-indigo-700",
  Events: "bg-orange-50 text-orange-700",
};

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <div>
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="font-mono text-xs tracking-[0.2em] text-green-700">
            Resources
          </p>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Guides on signage, print, packaging and digital.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">
            Practical, factual answers to the questions that come up before a
            brief: which material, which platform, which format, written for
            businesses in Dubai, Abu Dhabi, Sharjah and Doha.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => {
            const photo = wide(blogPhotoIds[post.photoId]);
            const badge = categoryStyles[post.category] ?? "bg-zinc-100 text-zinc-700";
            return (
              <Reveal
                key={post.slug}
                delay={(i % 3) * 90}
                className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] border border-zinc-200 bg-white transition-all hover:-translate-y-1 hover:border-green-600 hover:shadow-lg"
              >
                <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                    <Image
                      src={photo}
                      alt={post.title}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className={`rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wide ${badge}`}
                        >
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-zinc-400">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="mt-3 font-heading text-lg font-semibold text-zinc-900">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="mt-5 flex items-center gap-1.5 border-t border-zinc-100 pt-4 text-sm font-medium text-green-700">
                      Read the guide
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
