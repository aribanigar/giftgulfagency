import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { servicesByPillar } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services | Gifts Gulf Media & Advertising",
  description:
    "Signage, stickers, packaging, corporate gifts, events, fit-outs, social media, and website & software — every brand touchpoint, one partner.",
};

function ServiceRow({
  service,
}: {
  service: (typeof servicesByPillar.production)[number];
}) {
  const Icon = service.icon;
  return (
    <div
      id={service.slug}
      className="scroll-mt-24 border-b border-zinc-200 py-12 first:pt-0 last:border-b-0"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
        <div className="flex items-start gap-4 lg:flex-col lg:gap-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-green-50 text-green-700">
            <Icon className="h-6 w-6" strokeWidth={1.75} />
          </div>
          <h2 className="font-heading text-2xl font-semibold text-zinc-900">
            {service.name}
          </h2>
        </div>
        <div>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-600">
            {service.description}
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {service.capabilities.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-zinc-700">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div>
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h1 className="max-w-2xl font-heading text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Every brand touchpoint, one partner.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-zinc-600">
            Eight services across two pillars — brand production and digital
            growth — so nothing about how a business looks or is found online
            waits on a different vendor.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
          Brand Production
        </h2>
        <div className="mt-8">
          {servicesByPillar.production.map((service) => (
            <ServiceRow key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl border-t border-zinc-200 px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
          Digital Growth
        </h2>
        <div className="mt-8">
          {servicesByPillar.digital.map((service) => (
            <ServiceRow key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
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
