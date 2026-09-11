import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSection } from "@/lib/site-data";
import { SectionPage, sectionMetadata } from "@/components/section-page";

const section = getSection("social-media")!;

export const metadata: Metadata = sectionMetadata(section);

export default function Page() {
  if (!section) notFound();
  return <SectionPage section={section} />;
}
