import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogCategories, blogPosts } from "@/lib/blog-data";
import { BlogCover, blogPhotoId } from "@/components/blog-cover";
import { BlogBrowser, type BlogCard } from "./blog-browser";
import { heroPhoto, wide } from "@/lib/photos";
import { siteConfig } from "@/lib/site-config";
import { Container, PageHero } from "@/components/editorial";
import { EnquiryBand } from "@/components/enquiry-band";

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
    images: [{ url: heroPhoto("signage-3dletters"), width: 1920, height: 1080, alt: blogTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: blogTitle,
    description: blogDescription,
    images: [heroPhoto("signage-3dletters")],
  },
};

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  const [featured, ...rest] = posts;
  const cards: BlogCard[] = rest.map((p) => {
    const id = blogPhotoId(p);
    return {
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category,
      readTime: p.readTime,
      image: id ? wide(id) : undefined,
      coverStat: p.coverStat,
      tags: p.tags ?? [],
    };
  });

  return (
    <div>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Insights" }]}
        eyebrow="Insights"
        title={<>Guides that help<br /><span className="text-brand-bright">you buy right.</span></>}
        intro={
          <p>
            {blogPosts.length} practical guides to the questions that come up
            before a brief: sizes, materials, formats, approvals and costs, for
            businesses across the UAE, Qatar and the GCC.
          </p>
        }
      />

      {featured ? (
        <section className="bg-white pt-24 sm:pt-32">
          <Container>
            <Link href={`/blog/${featured.slug}`} className="group grid grid-cols-1 gap-10 lg:grid-cols-12">
              <BlogCover
                post={featured}
                priority
                sizes="(min-width:1024px) 58vw, 100vw"
                className="aspect-[16/10] lg:col-span-7"
              />
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
          <BlogBrowser posts={cards} categories={blogCategories} />
        </Container>
      </section>

      <EnquiryBand
        source="/blog"
        title={<>Ready to<br />brief us?</>}
        intro={<p>If a guide answered your question, send the job details here and we will quote it.</p>}
      />
    </div>
  );
}
