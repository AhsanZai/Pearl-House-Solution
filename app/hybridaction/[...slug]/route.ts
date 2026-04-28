import { type NextRequest, NextResponse } from "next/server";

/**
 * Browsers (or extensions / embedded runtimes) sometimes request
 * `/hybridaction/...?__callback__=...` on whatever origin the page is on.
 * This app does not use those APIs; the requests are not from our bundle.
 * Responding with a no-op JSONP body avoids noisy 404s in dev server logs.
 *
 * Only characters safe for a JS identifier are echoed in the callback name.
 */
const SAFE_JSONP_NAME = /^[A-Za-z_$][\w$]*$/;

export function GET(request: NextRequest) {
  const callback = request.nextUrl.searchParams.get("__callback__");
  if (callback && SAFE_JSONP_NAME.test(callback)) {
    return new NextResponse(`${callback}({});`, {
      status: 200,
      headers: { "Content-Type": "application/javascript; charset=utf-8" },
    });
  }
  return new NextResponse(null, { status: 204 });
}
