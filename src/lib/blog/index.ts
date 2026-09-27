import type { BlogPost } from "@/lib/blog-data";
import { eventsGiftsPosts } from "./events-gifts";
import { merchPosts } from "./merch";
import { printProductPosts } from "./print-products";
import { signageGuidePosts } from "./signage-guides";
import { sizePosts } from "./sizes";
import { stickerPosts } from "./stickers";

/** Narrow, single-question guides (Kashmir Pulse pattern), merged into blogPosts. */
export const guidePosts: BlogPost[] = [
  ...sizePosts,
  ...merchPosts,
  ...signageGuidePosts,
  ...stickerPosts,
  ...printProductPosts,
  ...eventsGiftsPosts,
];
