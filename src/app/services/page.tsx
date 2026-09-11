import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";
import { JsonLd } from "@/components/json-ld";
import { pillars, pillarOrder, servicesByPillar } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Advertising, Signage & Printing Services in UAE & Qatar | Gifts Gulf",
  description:
    "Website development, SEO and social media alongside signage, large-format printing, interior fit-outs, exhibition booths, screen printing and UV-printed gifts — across Dubai, Abu Dhabi, Sharjah and Doha.",
  alternates: { canonical: `${siteConfig.url}/services` },
};

export default function ServicesPage() {
  return (
    <div>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
        ])}
      />

      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h1 className="max-w-2xl font-heading text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Every brand touchpoint, across the UAE &amp; Qatar.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-zinc-600">
            Twelve services across four pillars — digital growth, signage &amp;
            large format, interiors &amp; experiences, and print &amp;
            personalisation — so nothing about how a business looks, is
            found, or is remembered waits on a different vendor.
          </p>
        </div>
      </section>

      {pillarOrder.map((pillar) => (
        <section
          key={pillar}
          id={pillar}
          className="scroll-mt-20 border-b border-zinc-200 px-4 py-16 last:border-b-0 sm:px-6 sm:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
                {pillars[pillar].label}
              </h2>
              <p className="text-sm font-medium text-zinc-500">
                {pillars[pillar].tagline}
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {servicesByPillar[pillar].map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-zinc-900 sm:text-3xl">
            Not sure which service you need?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-zinc-600">
            Tell us what you&apos;re trying to achieve and we&apos;ll put
            together the right mix.
          </p>
          <div className="mt-7">
            <Button asChild size="lg">
              <Link href="/contact">
                Talk to Us <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
