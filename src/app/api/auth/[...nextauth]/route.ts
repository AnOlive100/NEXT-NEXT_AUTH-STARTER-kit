// ========================================
// 🔐 NEXTAUTH API ROUTE HANDLER
// ========================================
// This is the standard Next.js App Router handler for NextAuth
// It handles all authentication requests at /api/auth/*
//
// Routes handled automatically:
// - /api/auth/signin
// - /api/auth/signout
// - /api/auth/callback/:provider
// - /api/auth/session
// - /api/auth/csrf
// - /api/auth/providers

import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth"

// Create the NextAuth handler with our configuration
const handler = NextAuth(authOptions)

// Export as GET and POST to handle both request methods
export { handler as GET, handler as POST }
