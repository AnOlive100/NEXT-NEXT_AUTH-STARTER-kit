// ========================================
// 🛡️ MIDDLEWARE - ROUTE PROTECTION
// ========================================
// This file runs BEFORE every request to protected routes
// It checks authentication and authorization (roles)

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

/**
 * Middleware function
 * Protects routes based on authentication and user roles
 */
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  
  // Get the user's session token
  const token = await getToken({ req, secret: process.env.AUTH_SECRET })

  // ──────────────────────────────────────
  // 📍 ROUTE DEFINITIONS
  // ──────────────────────────────────────
  const isAuthPage = pathname.startsWith("/auth")
  const isDashboardRoute = pathname.startsWith("/dashboard")
  const isSettingsRoute = pathname.startsWith("/settings")

  // ──────────────────────────────────────
  // 🔒 PROTECTION LOGIC
  // ──────────────────────────────────────

  // ✅ RULE 1: Protect /dashboard and /settings - ALL AUTHENTICATED USERS
  if (isDashboardRoute || isSettingsRoute) {
    if (!token) {
      const loginUrl = new URL("/auth/login", req.url)
      loginUrl.searchParams.set("callbackUrl", pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  // ✅ RULE 2: Redirect authenticated users away from login page
  if (token && isAuthPage && pathname === "/auth/login") {
    const dashboardUrl = new URL("/dashboard", req.url)
    return NextResponse.redirect(dashboardUrl)
  }

  // ✅ Allow the request to continue
  return NextResponse.next()
}

// ──────────────────────────────────────
// ⚙️ MIDDLEWARE CONFIGURATION
// ──────────────────────────────────────
// Specify which routes this middleware should run on
// This improves performance by not running on every single route

export const config = {
  matcher: [
    // Protected routes
    "/dashboard/:path*",
    "/settings/:path*",
    // Auth routes (to redirect if already logged in)
    "/auth/login",
  ],
}
