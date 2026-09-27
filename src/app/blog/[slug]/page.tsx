import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { ArrowLink, Container, PageHero, SectionIntro } from "@/components/editorial";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import { heroPhoto } from "@/lib/photos";
import { BlogCover, blogPhotoId } from "@/components/blog-cover";
import { BlockView } from "@/components/guide-content";
import { getTopic, type Topic } from "@/lib/topics";
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
  const id = blogPhotoId(post);
  const image = id ? heroPhoto(id) : undefined;
  return {
    title: `${post.title} | Gifts Gulf Advertising`,
    description: post.metaDescription,
    alternates: { canonical: `${siteConfig.url}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      ...(image ? { images: [{ url: image, width: 1920, height: 1080, alt: post.title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      ...(image ? { images: [image] } : {}),
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
  const photo = blogPhotoId(post);
  const topics = (post.relatedTopics ?? []).map(getTopic).filter((t): t is Topic => Boolean(t));
  // Closest reads first: shared directory topics or tags, then same category.
  const score = (p: typeof post) =>
    (p.relatedTopics ?? []).filter((t) => post.relatedTopics?.includes(t)).length * 3 +
    (p.tags ?? []).filter((t) => post.tags?.includes(t)).length * 2 +
    (p.category === post.category ? 1 : 0);
  const fallbackRelated = blogPosts
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({ p, s: score(p) }))
    .sort((a, b) => b.s - a.s)
    .slice(0, 3)
    .map(({ p }) => p);

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

      <PageHero
        size="md"
        photos={photo ? [heroPhoto(photo)] : undefined}
        crumbs={[{ name: "Home", href: "/" }, { name: "Insights", href: "/blog" }, { name: post.category }]}
        eyebrow={post.category}
        title={post.title}
      >
        <p className="mt-8 text-sm text-white/70">
          {dateFormatter.format(new Date(post.publishedAt))} · {post.readTime} · By Gifts Gulf Advertising
        </p>
      </PageHero>

      <article className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 lg:col-start-3">
              {post.quickAnswer ? (
                <aside className="mb-12 border-l-4 border-brand bg-[#f3f4f2] p-6 sm:p-8">
                  <p className="eyebrow">Quick answer</p>
                  <p className="mt-3 text-lg leading-relaxed text-ink/85">{post.quickAnswer}</p>
                </aside>
              ) : null}

              <p className="text-xl leading-relaxed text-ink/80 sm:text-2xl sm:leading-relaxed">{post.intro}</p>

              {post.sections.map((contentSection) => (
                <Reveal key={contentSection.heading} className="mt-14">
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {contentSection.heading}
                  </h2>
                  <div className="mt-5 space-y-5 text-ink">
                    {contentSection.blocks.map((block, i) => (
                      <BlockView key={i} block={block} />
                    ))}
                  </div>
                </Reveal>
              ))}

              {topics.length > 0 ? (
                <div className="mt-16">
                  <p className="eyebrow mb-4">In the directory</p>
                  <ul className="hairline border-t">
                    {topics.map((t) => (
                      <li key={t.slug} className="hairline border-b">
                        <Link href={`/${t.slug}`} className="group flex items-center justify-between gap-6 py-5">
                          <span>
                            <span className="block text-lg font-semibold tracking-tight transition-colors group-hover:text-brand">{t.name}</span>
                            <span className="mt-1 block text-sm text-ink/55">{t.category} guide</span>
                          </span>
                          <span aria-hidden className="text-ink/40 transition-colors group-hover:text-brand">&rarr;</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {post.tags && post.tags.length > 0 ? (
                <ul className="mt-10 flex flex-wrap gap-2" aria-label="Tags">
                  {post.tags.map((tag) => (
                    <li key={tag} className="border border-ink/15 px-3 py-1 text-sm text-ink/65">{tag}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </Container>
      </article>

      <section className="bg-[#f3f4f2] py-24 sm:py-32">
        <Container>
          <SectionIntro eyebrow="FAQ" title="Questions, answered" size="md" />
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 lg:col-start-5">
              <FaqAccordion faqs={post.faqs} />
            </div>
          </div>
        </Container>
      </section>

      {relatedService ? (
        <section className="on-dark bg-night py-24 text-white sm:py-28">
          <Container>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="eyebrow mb-5">Need this for your brand?</p>
                <h2 className="display-md">{relatedService.name}, handled start to finish.</h2>
              </div>
              <div className="flex flex-col gap-6 lg:col-span-4 lg:col-start-9">
                <p className="text-lg leading-relaxed text-white/70">
                  Designed, produced and delivered by one team across the UAE and Qatar.
                </p>
                <div className="flex flex-wrap gap-8">
                  <ArrowLink href="/contact" className="text-lg">Get a quote</ArrowLink>
                  <ArrowLink href={`/${relatedService.slug}`} className="text-lg text-white/70">
                    View {relatedService.name}
                  </ArrowLink>
                </div>
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionIntro eyebrow="Keep reading" title="More guides" size="md" />
            <ArrowLink href="/blog" className="shrink-0 text-lg">All insights</ArrowLink>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {fallbackRelated.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                <BlogCover post={p} sizes="(min-width:640px) 33vw, 100vw" className="aspect-[4/3]" />
                <p className="eyebrow mt-6">{p.category}</p>
                <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-brand">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
