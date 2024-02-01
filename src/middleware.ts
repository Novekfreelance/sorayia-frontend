import { NextResponse, type NextRequest } from "next/server";
// import { CustomRequestCookies } from "./types/CustomCookies";

export function middleware(request: NextRequest) {
  const accessToken = true;
  if (!accessToken) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:path*",
};
