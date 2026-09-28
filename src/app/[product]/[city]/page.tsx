import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopicCityView, topicCityMetadata } from "@/components/topic-city-page";
import { buildTopicCityPage, topicCityPairs } from "@/lib/topic-city";

export function generateStaticParams() {
  return topicCityPairs().map(({ topicSlug, citySlug }) => ({ product: topicSlug, city: citySlug }));
}

// Only planned topic x city pairs exist; anything else is a 404.
export const dynamicParams = false;

type Params = Promise<{ product: string; city: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { product, city } = await params;
  const page = buildTopicCityPage(product, city);
  return page ? topicCityMetadata(page) : {};
}

export default async function Page({ params }: { params: Params }) {
  const { product, city } = await params;
  const page = buildTopicCityPage(product, city);
  if (!page) notFound();
  return <TopicCityView page={page} />;
}
