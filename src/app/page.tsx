import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";
import { servicesByPillar, sectors } from "@/lib/site-data";

const processSteps = [
  {
    n: "01",
    title: "Brief",
    text: "We start with the brand, the space, and the outcome you need — not a generic questionnaire.",
  },
  {
    n: "02",
    title: "Design",
    text: "Concepts move fast, with production and installation constraints considered from the first sketch.",
  },
  {
    n: "03",
    title: "Produce",
    text: "Signage, print, packaging and fit-out work happens in-house, so nothing waits on a third party.",
  },
  {
    n: "04",
    title: "Launch & Grow",
    text: "Install, go live, then keep momentum with the social, web and software side of the business.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-green-700">
              Media &amp; Advertising
            </span>
            <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-zinc-900 sm:text-6xl">
              Every brand touchpoint.
              <br />
              One partner.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
              Gifts Gulf designs, produces and installs everything a brand
              shows up as — signage, print, packaging and gifting, events
              and fit-outs — then keeps it growing online with social,
              websites and software.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
            How we work
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div key={step.n} className="relative pl-0">
                <span className="font-heading text-3xl font-bold text-green-600/30">
                  {step.n}
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold text-zinc-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {step.text}
                </p>
                {i < processSteps.length - 1 ? (
                  <span
                    aria-hidden
                    className="absolute right-[-1rem] top-2 hidden h-px w-8 bg-zinc-300 lg:block"
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-green-700">
              Brand Production
            </span>
            <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
              Everything a brand shows up as, made in-house
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicesByPillar.production.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Stat bar */}
      <section className="border-b border-zinc-200 bg-zinc-900">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-14 sm:grid-cols-3 sm:px-6">
          <div>
            <div className="font-heading text-4xl font-bold text-white">8</div>
            <p className="mt-2 text-sm text-zinc-400">
              Services under one roof, from signage to software.
            </p>
          </div>
          <div>
            <div className="font-heading text-4xl font-bold text-white">2</div>
            <p className="mt-2 text-sm text-zinc-400">
              Sides of every brand covered — physical and digital.
            </p>
          </div>
          <div>
            <div className="font-heading text-4xl font-bold text-white">1</div>
            <p className="mt-2 text-sm text-zinc-400">
              Partner to brief, instead of a different vendor per job.
            </p>
          </div>
        </div>
      </section>

      {/* Digital growth */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-green-700">
              Digital Growth
            </span>
            <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
              Keep the momentum going online
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {servicesByPillar.digital.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
            Working across
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-24">
          <h2 className="font-heading text-3xl font-bold text-zinc-900 sm:text-4xl">
            Let&apos;s build your next brand moment.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-600">
            Tell us what you need — signage, an exhibition stand, a new
            website, or all of it — and we&apos;ll take it from there.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
