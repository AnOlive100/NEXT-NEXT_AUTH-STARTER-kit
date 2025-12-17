import "next-auth"
import "next-auth/jwt"

// ========================================
// 🔧 NEXTAUTH TYPE EXTENSIONS
// ========================================
// This file extends NextAuth's default types to include our custom fields
// You don't need to import this file anywhere - TypeScript will pick it up automatically

declare module "next-auth" {
  /**
   * Extends the built-in session.user object
   * This is what you'll get when you call useSession() or getServerSession()
   */
  interface Session {
    user: {
      /** User's unique ID from the database/provider */
      id: string
      /** User's role: either "USER" or "ADMIN" */
      role: "USER" | "ADMIN"
      /** User's display name */
      name?: string | null
      /** User's email address */
      email?: string | null
      /** User's profile image URL */
      image?: string | null
    }
  }

  /**
   * Extends the built-in user object
   * This is what you get in the JWT callback when a user signs in
   */
  interface User {
    /** User's role - defaults to "USER" if not specified */
    role?: "USER" | "ADMIN"
  }
}

declare module "next-auth/jwt" {
  /**
   * Extends the JWT token object
   * This is stored in the encrypted JWT and passed between callbacks
   */
  interface JWT {
    /** User's unique ID */
    id: string
    /** User's role */
    role: "USER" | "ADMIN"
  }
}
