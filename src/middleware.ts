import { jwtDecode } from "jwt-decode";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { TJwtUser } from "./feature/auth/type";

const publicRoutes = ["/", "/sign-in", "/sign-up"];

const getDashboardRoute = (role: string) => {
  return `/dashboard/${role.toLowerCase()}`;
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

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

  const roleDashboard = role ? getDashboardRoute(role) : null;

  /* prevent logged users from auth pages */
  if (isAuthenticated && (pathname === "/sign-in" || pathname === "/sign-up")) {
    return NextResponse.redirect(new URL(roleDashboard!, request.url));
  }

  /* allow public routes */
  if (!isAuthenticated && publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  /* block dashboard routes if not logged in */
  if (!isAuthenticated && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  /* check role exists for dashboard */
  if (pathname.startsWith("/dashboard")) {
    if (!role) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
