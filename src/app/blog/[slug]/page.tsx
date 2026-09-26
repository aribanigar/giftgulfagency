import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { ArrowLink, Container, PageHero, SectionIntro } from "@/components/editorial";
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
  const image = heroPhoto(blogPhotoIds[post.photoId]);
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
      images: [{ url: image, width: 1920, height: 1080, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [image],
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

      <PageHero
        size="md"
        photos={[heroPhoto(blogPhotoIds[post.photoId])]}
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
              <p className="text-xl leading-relaxed text-ink/80 sm:text-2xl sm:leading-relaxed">{post.intro}</p>

              {post.sections.map((contentSection) => (
                <Reveal key={contentSection.heading} className="mt-14">
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {contentSection.heading}
                  </h2>
                  <div className="mt-5 space-y-5">
                    {contentSection.blocks.map((block, i) =>
                      block.type === "p" ? (
                        <p key={i} className="text-[17px] leading-[1.75] text-ink/75">
                          {block.text}
                        </p>
                      ) : (
                        <ul key={i} className="hairline border-t">
                          {block.items.map((item) => (
                            <li key={item} className="hairline flex items-start gap-4 border-b py-4 text-[17px] leading-relaxed text-ink/75">
                              <span aria-hidden className="mt-3 h-0.5 w-3 shrink-0 bg-brand" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      ),
                    )}
                  </div>
                </Reveal>
              ))}
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
                <div className="relative aspect-[4/3] overflow-hidden bg-night">
                  <Image
                    src={wide(blogPhotoIds[p.photoId])}
                    alt={p.title}
                    fill
                    sizes="(min-width:640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
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
