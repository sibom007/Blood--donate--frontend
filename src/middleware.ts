import { jwtDecode } from "jwt-decode";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { TJwtUser } from "./feature/auth/type";

const publicRoutes = ["/", "/sign-in", "/sign-up"];
const privateRoutes = ["/dashboard", "/request-blood"];

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  const refreshToken = request.cookies.get("refreshToken")?.value;

  let decoded: TJwtUser | null = null;

  if (refreshToken) {
    try {
      decoded = jwtDecode<TJwtUser>(refreshToken);
    } catch {
      decoded = null;
    }
  }

  const isAuthenticated = !!decoded;
  const role = decoded?.role;

  /* redirect logged-in users properly */
  if (isAuthenticated && (pathname === "/sign-in" || pathname === "/sign-up")) {
    const redirect = searchParams.get("redirect");

    const safeRedirect =
      redirect && redirect.startsWith("/") ? redirect : "/dashboard";

    return NextResponse.redirect(new URL(safeRedirect, request.url));
  }

  /* allow public routes */
  if (!isAuthenticated && publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  /* block private routes */
  if (
    !isAuthenticated &&
    privateRoutes.some((route) => pathname.startsWith(route))
  ) {
    const loginUrl = new URL("/sign-in", request.url);

    loginUrl.searchParams.set(
      "redirect",
      request.nextUrl.pathname + request.nextUrl.search,
    );

    return NextResponse.redirect(loginUrl);
  }

  /* role check */
  if (pathname.startsWith("/dashboard") && !role) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
