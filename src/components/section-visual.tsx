"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const ROTATE_MS = 4500;

/**
 * Full-bleed background for a section page's hero — a single photo, or,
 * when given more than one, an auto-rotating crossfade carousel (pauses
 * on hover, dots let you jump to any slide). Fills its positioned parent;
 * the parent controls the section's height and overlays its own content.
 */
export function SectionVisual({ photos }: { photos: string[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const multi = photos.length > 1;

  useEffect(() => {
    if (!multi || paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [multi, paused, photos.length]);

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {photos.map((photo, i) => (
        <Image
          key={photo}
          src={photo}
          alt=""
          fill
          sizes="100vw"
          priority={i === 0}
          className={
            "ken-burns object-cover object-center transition-opacity duration-1000 ease-in-out " +
            (i === index ? "opacity-100" : "opacity-0")
          }
        />
      ))}

      {multi ? (
        <div className="absolute right-4 top-6 z-10 flex gap-2 sm:right-6">
          {photos.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show photo ${i + 1} of ${photos.length}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={
                "h-2 w-2 rounded-full transition-colors " +
                (i === index ? "bg-white" : "bg-white/40 hover:bg-white/70")
              }
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
