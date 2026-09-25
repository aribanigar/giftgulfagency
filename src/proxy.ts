import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { siteConfig } from "@/lib/site-config";

// Collapses every other hostname this app is reachable on (the bare
// Vercel domain, the apex domain) onto the one canonical host from
// siteConfig.url, with a permanent redirect. Without this, Google (and
// browsers) see the same page as three separate URLs — the actual cause
// of the recurring www/non-www/vercel.app duplication, not something
// that clears on its own or that a cache-clear on Google's side fixes.
//
// Preview/branch deployment URLs (e.g. *-git-*.vercel.app) are
// deliberately NOT in this list, so they keep working unredirected.
const CANONICAL_HOST = new URL(siteConfig.url).host;
const REDIRECT_HOSTS = new Set(["giftsgulfagency.com", "giftsgulfagency.vercel.app"]);

export function proxy(request: NextRequest) {
  // request.nextUrl.hostname reflects Next.js's internal request URL, not
  // necessarily the inbound Host header (confirmed to diverge under
  // `next start`) — the Host header itself is the reliable signal for
  // which domain a request actually arrived on.
  const host = request.headers.get("host");
  if (host && REDIRECT_HOSTS.has(host) && host !== CANONICAL_HOST) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = CANONICAL_HOST;
    url.port = "";
    return NextResponse.redirect(url, 308);
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
