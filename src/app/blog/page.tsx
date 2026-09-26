import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { blogPhotoIds, heroPhoto, wide } from "@/lib/photos";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/reveal";
import { Container, PageHero } from "@/components/editorial";

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

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  const [featured, ...rest] = posts;

  return (
    <div>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Insights" }]}
        eyebrow="Insights"
        title={<>Guides that help<br /><span className="text-brand-bright">you buy right.</span></>}
        intro={
          <p>
            Practical, factual answers to the questions that come up before a
            brief: which material, which platform, which format, written for
            businesses in Dubai, Abu Dhabi, Sharjah and Doha.
          </p>
        }
      />

      {featured ? (
        <section className="bg-white pt-24 sm:pt-32">
          <Container>
            <Link href={`/blog/${featured.slug}`} className="group grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="relative aspect-[16/10] overflow-hidden bg-night lg:col-span-7">
                <Image
                  src={wide(blogPhotoIds[featured.photoId])}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(min-width:1024px) 58vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-end lg:col-span-5">
                <p className="eyebrow">Latest · {featured.category}</p>
                <h2 className="display-sm mt-5 transition-colors group-hover:text-brand">{featured.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-ink/70">{featured.excerpt}</p>
                <span className="link-arrow mt-8 self-start text-base">
                  Read the guide <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </Container>
        </section>
      ) : null}

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <div className="hairline grid grid-cols-1 gap-x-10 gap-y-16 border-t pt-16 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 90}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-night">
                    <Image
                      src={wide(blogPhotoIds[post.photoId])}
                      alt={post.title}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
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
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
