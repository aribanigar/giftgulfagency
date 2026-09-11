"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";

const ROTATE_MS = 4500;

/**
 * A single photo, or — when given more than one — an auto-rotating
 * crossfade carousel (pauses on hover, dots allow jumping to any slide).
 * `children` renders the icon badge — passed in from the server so this
 * client component never has to receive a component reference as a prop.
 */
export function SectionVisual({
  photos,
  children,
}: {
  photos: string[];
  children?: ReactNode;
}) {
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
      className="relative aspect-[21/9] overflow-hidden rounded-[var(--radius-xl)] border border-zinc-200 bg-zinc-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {photos.map((photo, i) => (
        <Image
          key={photo}
          src={photo}
          alt=""
          fill
          sizes="(min-width: 1024px) 900px, 100vw"
          priority={i === 0}
          className={
            "ken-burns object-cover object-center transition-opacity duration-1000 ease-in-out " +
            (i === index ? "opacity-100" : "opacity-0")
          }
        />
      ))}
      <div className="photo-shade absolute inset-0" />

      {children}

      {multi ? (
        <div className="absolute bottom-5 right-5 flex gap-2">
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
