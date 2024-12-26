import { NextResponse } from "next/server";
import middlewareAuth from "./utils/middlewareAuth";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/profile") || pathname.startsWith("/admin")) {
    const user = await middlewareAuth(req);

    if (!user) {
      return NextResponse.redirect(new URL("/signin", req.nextUrl));
    }
  }

  if (pathname.startsWith("/profile")) {
    const user = await middlewareAuth(req);

    if (user && user?.role === "ADMIN") {
      return NextResponse.redirect(new URL("/admin", req.nextUrl));
    }
  }

  if (pathname.startsWith("/admin")) {
    const user = await middlewareAuth(req);

    if (user && user?.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/profile", req.nextUrl));
    }
  }

  if (pathname.startsWith("/signin") || pathname.startsWith("/signup")) {
    const user = await middlewareAuth(req);

    if (user) {
      if (user?.role === "ADMIN") {
        return NextResponse.redirect(new URL("/admin", req.nextUrl));
      } else {
        return NextResponse.redirect(new URL("/profile", req.nextUrl));
      }
    }
  }
}

export const config = {
  matcher: ["/profile/:path*", "/signin", "/signup", "/admin/:path*"],
};
