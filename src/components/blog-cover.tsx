import Image from "next/image";
import type { BlogPost } from "@/lib/blog-data";
import { blogPhotoIds, wide } from "@/lib/photos";
import { cn } from "@/lib/utils";

export function blogPhotoId(post: Pick<BlogPost, "photoId">) {
  return post.photoId ? blogPhotoIds[post.photoId] : undefined;
}

/**
 * Card image for a post. Posts without an exact-match photo get a
 * typographic cover (category + key figure) instead of a loosely related
 * stock photo.
 */
export function BlogCover({
  post,
  sizes,
  priority,
  className,
}: {
  post: Pick<BlogPost, "photoId" | "title" | "category" | "coverStat">;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const id = blogPhotoId(post);
  return (
    <div className={cn("relative overflow-hidden bg-night", className)}>
      {id ? (
        <Image
          src={wide(id)}
          alt={post.title}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <div className="on-dark absolute inset-0 flex flex-col justify-between p-6 text-white transition-colors duration-500 group-hover:bg-night-2 sm:p-8">
          <span className="eyebrow">{post.category}</span>
          <span className="font-heading text-3xl font-bold uppercase leading-[1.02] tracking-tight text-brand-bright [text-wrap:balance] sm:text-4xl">
            {post.coverStat ?? post.category}
          </span>
          <span aria-hidden className="h-px w-16 bg-white/30" />
        </div>
      )}
    </div>
  );
}
