import { jwtDecode } from "jwt-decode";
import { NextRequest, NextResponse } from "next/server";

type Role = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ["/sign-in", "/sign-up"];

const roleBasedPrivateRoutes = {
  USER: [/^\/dashboard\/user/],

  ADMIN: [/^\/dashboard\/admin/],
};

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const refreshToken = request.cookies.get("refreshToken")?.value;

  /* PUBLIC ROUTES */
  if (pathname === "/") {
    return NextResponse.next();
  }

  /* AUTH ROUTES */
  if (authRoutes.includes(pathname)) {
    if (refreshToken) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
  }

  /* PRIVATE ROUTES */
  if (!refreshToken) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  try {
    const decoded = jwtDecode<{
      role: Role;
    }>(refreshToken);

    const role = decoded.role;

    /* ADMIN ROUTE */
    if (pathname.startsWith("/dashboard/admin") && role !== "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
