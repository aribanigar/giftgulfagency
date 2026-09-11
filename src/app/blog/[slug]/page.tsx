import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import { blogPhotoIds, heroPhoto, wide } from "@/lib/photos";
import { siteConfig } from "@/lib/site-config";
import { getSection } from "@/lib/site-data";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Gifts Gulf Advertising`,
    description: post.metaDescription,
    alternates: { canonical: `${siteConfig.url}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: "article",
    },
  };
}

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedService = post.relatedSectionSlug
    ? getSection(post.relatedSectionSlug)
    : undefined;
  const sameCategory = blogPosts.filter(
    (p) => p.slug !== post.slug && p.category === post.category,
  );
  const otherPosts = blogPosts.filter(
    (p) => p.slug !== post.slug && p.category !== post.category,
  );
  const fallbackRelated = [...sameCategory, ...otherPosts].slice(0, 3);

  return (
    <div>
      <JsonLd data={articleSchema(post)} />
      <JsonLd data={faqPageSchema(post.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog` },
          { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
        ])}
      />

      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-zinc-950">
        <Image
          src={heroPhoto(blogPhotoIds[post.photoId])}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        <div className="section-hero-shade absolute inset-0" />
        <div className="hero-text-shadow relative mx-auto w-full max-w-3xl px-4 pb-12 pt-28 sm:px-6 sm:pb-16">
          <nav aria-label="Breadcrumb" className="font-mono text-xs text-zinc-300">
            <Link href="/" className="hover:text-green-400">
              Home
            </Link>
            <span className="mx-2 text-zinc-500">/</span>
            <Link href="/blog" className="hover:text-green-400">
              Blog
            </Link>
            <span className="mx-2 text-zinc-500">/</span>
            <span className="text-white">{post.category}</span>
          </nav>
          <h1 className="mt-5 max-w-2xl text-balance font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-5 flex items-center gap-4 text-sm text-zinc-300">
            <span>{dateFormatter.format(new Date(post.publishedAt))}</span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
        <p className="text-lg leading-relaxed text-zinc-700">{post.intro}</p>

        {post.sections.map((contentSection) => (
          <Reveal key={contentSection.heading} className="mt-10">
            <h2 className="font-heading text-xl font-semibold text-zinc-900 sm:text-2xl">
              {contentSection.heading}
            </h2>
            <div className="mt-4 space-y-4">
              {contentSection.blocks.map((block, i) =>
                block.type === "p" ? (
                  <p key={i} className="leading-relaxed text-zinc-600">
                    {block.text}
                  </p>
                ) : (
                  <ul key={i} className="space-y-2.5">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 leading-relaxed text-zinc-600"
                      >
                        <span
                          aria-hidden
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                ),
              )}
            </div>
          </Reveal>
        ))}
      </article>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="font-heading text-2xl font-semibold text-zinc-900">
            Frequently asked questions
          </h2>
          <div className="mt-8">
            <FaqAccordion faqs={post.faqs} />
          </div>
        </div>
      </section>

      {relatedService ? (
        <section className="border-t border-zinc-200 bg-white">
          <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-16">
            <h2 className="font-heading text-2xl font-bold text-zinc-900">
              Need this for your brand?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-zinc-600">
              {relatedService.name} is handled in-house, start to finish,
              across the UAE and Qatar.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={`/${relatedService.slug}`}>
                  View {relatedService.name}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="font-heading text-xl font-semibold text-zinc-900">
            More guides
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {fallbackRelated.map((p) => {
              const photo = wide(blogPhotoIds[p.photoId]);
              return (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group overflow-hidden rounded-[var(--radius-lg)] border border-zinc-200 bg-white transition-colors hover:border-green-600"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                    <Image
                      src={photo}
                      alt={p.title}
                      fill
                      sizes="(min-width:1024px) 25vw, 90vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-sm font-semibold text-zinc-900">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
