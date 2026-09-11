import type { Metadata } from "next";
import Image from "next/image";
import { sections } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";
import { sectionPhotos } from "@/lib/photos";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Portfolio | Gifts Gulf Advertising",
  description:
    "Work across printing, signages, events and exhibitions, packaging, gift items and social media for clients in the UAE and Qatar.",
  alternates: { canonical: `${siteConfig.url}/portfolio` },
};

export default function PortfolioPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-zinc-200 bg-zinc-950">
        <Image
          src={sectionPhotos["events-exhibitions"]}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="photo-shade-strong absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h1 className="max-w-2xl font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Work, by category.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-zinc-300">
            This page is set up to hold real project photography and case
            studies from across the UAE and Qatar, organised by service.
            The images below are stock placeholders — swap for actual
            completed work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, i) => {
            const Icon = section.icon;
            const photo = sectionPhotos[section.slug];
            return (
              <Reveal
                key={section.slug}
                delay={(i % 3) * 90}
                className="group flex flex-col overflow-hidden border border-zinc-200 bg-white transition-colors hover:border-green-600"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                  {photo ? (
                    <Image
                      src={photo}
                      alt=""
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  ) : null}
                  <div className="photo-shade absolute inset-0" />
                  <span className="absolute bottom-3 right-3 bg-green-600 px-2 py-1 font-mono text-[10px] tracking-wider text-white">
                    {section.name}
                  </span>
                  <div className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center border border-white/25 bg-white/10 text-white backdrop-blur-sm">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="font-heading text-base font-semibold text-zinc-900">
                      {section.name}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600">
                      {section.short}
                    </p>
                  </div>
                  <p className="mt-4 border-t border-zinc-100 pt-3 font-mono text-[11px] tracking-wide text-zinc-400">
                    Photography pending
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
