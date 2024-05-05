import { NextRequest, NextResponse } from "next/server";

import { checkIsAdmin } from "@/helpers";

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

export default async function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const path = url.pathname;

  const isAdminRoute = path.startsWith("/admin");
  const cookies = request.cookies;
  const authCookie = (cookies.get("x-user")?.value || "") as string;
  const isAuthenticated = !!authCookie;

  if (isAdminRoute) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/login", url.origin));
    } else if (!(await checkIsAdmin(authCookie))) {
      return NextResponse.redirect(new URL("/", url.origin));
    }
  }

  const redirects: {
    [key: string]: string;
  } = {};

  if (path in redirects) {
    return NextResponse.redirect(new URL(redirects[path], request.url));
  }
}
