"use client"

// ========================================
// 🔌 SESSION PROVIDER WRAPPER
// ========================================
// This component wraps your entire app to provide authentication context
// It must be a Client Component (hence "use client" at the top)

import { SessionProvider } from "next-auth/react"
import { type ReactNode } from "react"

interface ProvidersProps {
    children: ReactNode
}

/**
 * Providers Component
 * 
 * Wraps your app with NextAuth's SessionProvider
 * This makes the session available to all components via useSession()
 * 
 * @example
 * ```tsx
 * // In your root layout.tsx
 * import { Providers } from "@/components/Providers"
 * 
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         <Providers>{children}</Providers>
 *       </body>
 *     </html>
 *   )
 * }
 * ```
 */
export function Providers({ children }: ProvidersProps) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}
