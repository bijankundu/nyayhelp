import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const path = url.pathname;

  const redirects: {
    [key: string]: string;
  } = {};

  if (path in redirects) {
    return NextResponse.redirect(new URL(redirects[path], req.url));
  }
}
