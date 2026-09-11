export type ParsedVideo =
  | { type: "youtube"; embedUrl: string }
  | { type: "vimeo"; embedUrl: string }
  | { type: "file"; src: string }
  | null;

export function parseVideoUrl(url: string): ParsedVideo {
  const trimmed = url.trim();
  if (!trimmed) return null;

  try {
    const parsed = new URL(trimmed);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = parsed.pathname.slice(1);
      if (id) return { type: "youtube", embedUrl: `https://www.youtube.com/embed/${id}` };
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsed.pathname === "/watch") {
        const id = parsed.searchParams.get("v");
        if (id) return { type: "youtube", embedUrl: `https://www.youtube.com/embed/${id}` };
      }
      if (parsed.pathname.startsWith("/embed/")) {
        return { type: "youtube", embedUrl: trimmed };
      }
      if (parsed.pathname.startsWith("/shorts/")) {
        const id = parsed.pathname.split("/")[2];
        if (id) return { type: "youtube", embedUrl: `https://www.youtube.com/embed/${id}` };
      }
    }

    if (host === "vimeo.com") {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      if (id && /^\d+$/.test(id)) {
        return { type: "vimeo", embedUrl: `https://player.vimeo.com/video/${id}` };
      }
    }
    if (host === "player.vimeo.com") {
      return { type: "vimeo", embedUrl: trimmed };
    }

    if (/\.(mp4|webm|ogg)$/i.test(parsed.pathname)) {
      return { type: "file", src: trimmed };
    }
  } catch {
    return null;
  }

  return null;
}
