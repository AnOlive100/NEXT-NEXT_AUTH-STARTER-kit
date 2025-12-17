// ========================================
// 🔐 NEXTAUTH CONFIGURATION
// ========================================
// This file contains the core authentication setup for your app
// It uses Auth.js (NextAuth) for handling OAuth providers and sessions

import NextAuth, { type NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
// 📧 Uncomment below to add email/password authentication later
// import CredentialsProvider from "next-auth/providers/credentials"
import { z } from "zod"
import { getServerSession as _getServerSession } from "next-auth"

// ========================================
// 🔧 ENVIRONMENT VARIABLE VALIDATION
// ========================================
// STEP 1: Make sure you have a .env.local file with all required variables
// STEP 2: Copy from .env.example if you haven't already
// This validation will throw an error if any required env vars are missing

const envSchema = z.object({
  AUTH_SECRET: z.string().min(1, "❌ AUTH_SECRET is required - generate one with: openssl rand -base64 32"),
  GOOGLE_CLIENT_ID: z.string().optional(), // Optional if you're not using Google
  GOOGLE_CLIENT_SECRET: z.string().optional(),
  GITHUB_CLIENT_ID: z.string().optional(), // Optional if you're not using GitHub
  GITHUB_CLIENT_SECRET: z.string().optional(),
})

const env = envSchema.parse(process.env)

// ========================================
// 🎛️ PROVIDER TOGGLE SECTION
// ========================================
// ✅ EASY CUSTOMIZATION: Comment out any provider you don't want to use
// Each provider is independent - you can use one, both, or add more!

const providers = [
  // ──────────────────────────────────────
  // 🌐 GOOGLE PROVIDER
  // ──────────────────────────────────────
  // ✅ To ENABLE: Make sure GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET are in .env.local
  // ❌ To DISABLE: Comment out this entire block (lines below)
  ...(env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET
    ? [
        GoogleProvider({
          clientId: env.GOOGLE_CLIENT_ID,
          clientSecret: env.GOOGLE_CLIENT_SECRET,
          // Optional: Request additional scopes
          // authorization: {
          //   params: {
          //     scope: "openid email profile",
          //   },
          // },
        }),
      ]
    : []),

  // ──────────────────────────────────────
  // 🐙 GITHUB PROVIDER
  // ──────────────────────────────────────
  // ✅ To ENABLE: Make sure GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET are in .env.local
  // ❌ To DISABLE: Comment out this entire block (lines below)
  ...(env.GITHUB_CLIENT_ID && env.GITHUB_CLIENT_SECRET
    ? [
        GitHubProvider({
          clientId: env.GITHUB_CLIENT_ID,
          clientSecret: env.GITHUB_CLIENT_SECRET,
          // Optional: Request additional scopes
          // authorization: {
          //   params: {
          //     scope: "read:user user:email",
          //   },
          // },
        }),
      ]
    : []),

  // ──────────────────────────────────────
  // 📧 EMAIL/PASSWORD PROVIDER (Coming Soon!)
  // ──────────────────────────────────────
  // ✅ To ADD LATER: Uncomment the import at the top and this block
  // You'll need to:
  // 1. Set up a database (Prisma, Drizzle, etc.)
  // 2. Create a users table with email and hashed password
  // 3. Install bcrypt: npm install bcrypt @types/bcrypt
  // 4. Implement the authorize function below
  //
  // CredentialsProvider({
  //   name: "Email",
  //   credentials: {
  //     email: { label: "Email", type: "email" },
  //     password: { label: "Password", type: "password" },
  //   },
  //   async authorize(credentials) {
  //     // TODO: Validate credentials against your database
  //     // 1. Find user by email
  //     // 2. Compare password with bcrypt
  //     // 3. Return user object if valid, null if not
  //     return null
  //   },
  // }),
]

// ========================================
// ⚙️ NEXTAUTH OPTIONS
// ========================================
// This is the main configuration object for NextAuth

export const authOptions: NextAuthOptions = {
  // 🔑 Secret key for encrypting tokens (REQUIRED)
  secret: env.AUTH_SECRET,

  // 💾 Session strategy: "jwt" (recommended) or "database"
  // JWT = Stateless, no database needed
  // Database = More control, requires database setup
  session: {
    strategy: "jwt",
    // Optional: Customize session expiry
    // maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  // 🔌 Authentication providers (Google, GitHub, etc.)
  providers,

  // 🎯 Callbacks: Customize the authentication flow
  callbacks: {
    // ──────────────────────────────────────
    // 📝 JWT Callback
    // ──────────────────────────────────────
    // This runs whenever a JWT is created or updated
    // Use this to add custom data to the token
    async jwt({ token, user, account }) {
      // On initial sign in, user object is available
      if (user) {
        token.id = user.id
        // All users get "USER" role
        token.role = "USER"
      }
      
      return token
    },

    // ──────────────────────────────────────
    // 🎫 Session Callback
    // ──────────────────────────────────────
    // This runs whenever a session is checked (useSession, getServerSession)
    // Use this to add data from the token to the session object
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.role = "USER"
      }
      return session
    },

    // ──────────────────────────────────────
    // 🔗 Redirect Callback (Optional)
    // ──────────────────────────────────────
    // Customize where users go after sign in/out
    // async redirect({ url, baseUrl }) {
    //   // Redirect to dashboard after sign in
    //   if (url === baseUrl) return `${baseUrl}/dashboard`
    //   // Allow relative callback URLs
    //   if (url.startsWith("/")) return `${baseUrl}${url}`
    //   // Allow callback URLs on the same origin
    //   if (new URL(url).origin === baseUrl) return url
    //   return baseUrl
    // },
  },

  // 🎨 Custom pages (optional)
  pages: {
    signIn: "/auth/login", // Custom login page
    error: "/auth/error", // Custom error page
    // signOut: "/auth/signout", // Custom sign out page
    // verifyRequest: "/auth/verify", // Email verification page
  },

  // 🐛 Debug mode (useful during development)
  // Uncomment to see detailed logs
  // debug: process.env.NODE_ENV === "development",

  // 🔒 Security options
  // useSecureCookies: process.env.NODE_ENV === "production",
  // cookies: {
  //   sessionToken: {
  //     name: `__Secure-next-auth.session-token`,
  //     options: {
  //       httpOnly: true,
  //       sameSite: "lax",
  //       path: "/",
  //       secure: true,
  //     },
  //   },
  // },
}

// ========================================
// 🛠️ HELPER FUNCTIONS
// ========================================

/**
 * Use this in Server Components to get the current session
 * 
 * @example
 * ```tsx
 * import { getServerSession } from "@/lib/auth"
 * 
 * export default async function Page() {
 *   const session = await getServerSession()
 *   if (!session) redirect("/auth/login")
 *   return <div>Hello {session.user.name}</div>
 * }
 * ```
 */
export const getServerSession = () => _getServerSession(authOptions)

/**
 * Use this to get the NextAuth handler
 * This is exported in the API route: app/api/auth/[...nextauth]/route.ts
 */
export default NextAuth(authOptions)
