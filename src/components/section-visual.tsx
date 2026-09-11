import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { sectionPhotos } from "@/lib/photos";

export function SectionVisual({
  slug,
  icon: Icon,
}: {
  slug: string;
  icon: LucideIcon;
}) {
  const photo = sectionPhotos[slug];

  return (
    <div className="relative aspect-[21/9] overflow-hidden rounded-[var(--radius-xl)] border border-zinc-200 bg-zinc-900">
      {photo ? (
        <Image
          src={photo}
          alt=""
          fill
          sizes="(min-width: 1024px) 900px, 100vw"
          className="ken-burns object-cover object-center"
        />
      ) : null}
      <div className="photo-shade absolute inset-0" />

      <div className="absolute bottom-5 left-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-700 shadow-lg shadow-green-900/25 sm:h-20 sm:w-20">
        <Icon className="h-8 w-8 text-white sm:h-9 sm:w-9" strokeWidth={1.6} />
      </div>
    </div>
  );
}
