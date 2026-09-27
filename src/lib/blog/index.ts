import type { BlogPost } from "@/lib/blog-data";
import { merchPosts } from "./merch";
import { signageGuidePosts } from "./signage-guides";
import { sizePosts } from "./sizes";

/** Narrow, single-question guides (Kashmir Pulse pattern), merged into blogPosts. */
export const guidePosts: BlogPost[] = [...sizePosts, ...merchPosts, ...signageGuidePosts];
