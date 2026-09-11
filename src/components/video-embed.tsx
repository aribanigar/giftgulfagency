import { parseVideoUrl } from "@/lib/video";

export function VideoEmbed({ url, title }: { url: string; title: string }) {
  const video = parseVideoUrl(url);
  if (!video) return null;

  return (
    <div className="aspect-video w-full overflow-hidden rounded-[var(--radius-xl)] border border-zinc-200 bg-zinc-900">
      {video.type === "file" ? (
        <video
          src={video.src}
          controls
          className="h-full w-full"
          aria-label={title}
        />
      ) : (
        <iframe
          src={video.embedUrl}
          title={title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}
