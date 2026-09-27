import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProduct } from "@/lib/products";
import { topics, getTopic } from "@/lib/topics";
import { ProductPage, productMetadata } from "@/components/product-page";
import { TopicPage, topicMetadata } from "@/components/topic-page";

// Serves both catalogue products and directory topics at root-level slugs.
// Slug uniqueness across the two is enforced in src/lib/topics/index.ts.
export function generateStaticParams() {
  return [...products.map((p) => ({ product: p.slug })), ...topics.map((t) => ({ product: t.slug }))];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ product: string }>;
}): Promise<Metadata> {
  const { product: slug } = await params;
  const product = getProduct(slug);
  if (product) return productMetadata(product);
  const topic = getTopic(slug);
  if (topic) return topicMetadata(topic);
  return {};
}

export default async function Page({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product: slug } = await params;
  const product = getProduct(slug);
  if (product) return <ProductPage product={product} />;
  const topic = getTopic(slug);
  if (topic) return <TopicPage topic={topic} />;
  notFound();
}
