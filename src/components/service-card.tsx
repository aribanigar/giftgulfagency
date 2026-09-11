import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Section } from "@/lib/site-data";
import { sectionPhotos } from "@/lib/photos";

export function ServiceCard({ service }: { service: Section }) {
  const Icon = service.icon;
  const photo = sectionPhotos[service.slug];

  return (
    <Link
      href={`/${service.slug}`}
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden border border-zinc-900/10 bg-zinc-900"
    >
      {photo ? (
        <Image
          src={photo}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-center opacity-90 transition-transform duration-700 ease-out group-hover:scale-110"
        />
      ) : null}
      <div className="photo-shade absolute inset-0" />

      <div className="relative flex flex-col gap-3 p-6">
        <div className="flex h-10 w-10 items-center justify-center border border-white/25 bg-white/10 text-white backdrop-blur-sm">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </div>
        <h3 className="font-heading text-xl font-bold leading-tight text-white">
          {service.name}
        </h3>
        <p className="max-w-[30ch] text-sm leading-relaxed text-zinc-300">
          {service.short}
        </p>
        <div className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-green-400">
          Learn more
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
