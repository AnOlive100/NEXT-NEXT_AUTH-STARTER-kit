"use client"

// ========================================
// 🔐 LOGIN PAGE
// ========================================
// This page provides social login options (Google & GitHub)
// Users are redirected here when trying to access protected routes

import { signIn } from "next-auth/react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Loader2, Github, Chrome } from "lucide-react"

export default function LoginPage() {
    // Track which button is loading (prevents double-clicks)
    const [loading, setLoading] = useState<"google" | "github" | null>(null)

    /**
     * Handle social login
     * The signIn() function from NextAuth handles the OAuth flow:
     * 1. Redirects to provider (Google/GitHub)
     * 2. User authorizes the app
     * 3. Provider redirects back with auth code
     * 4. NextAuth exchanges code for user info
     * 5. User is redirected to callbackUrl
     */
    const handleSocialLogin = (provider: "google" | "github") => {
        setLoading(provider)
        signIn(provider, { callbackUrl: "/dashboard" })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-background p-4">
            <Card className="w-full max-w-md border-border/50 shadow-lg">
                <CardHeader className="text-center space-y-2">
                    <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
                    <CardDescription>
                        Sign in to your account to continue
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                    {/* ──────────────────────────────────────
                        SOCIAL LOGIN BUTTONS
                        ────────────────────────────────────── */}

                    {/* Google Login Button */}
                    <Button
                        variant="outline"
                        className="w-full"
                        disabled={loading !== null}
                        onClick={() => handleSocialLogin("google")}
                    >
                        {loading === "google" ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <Chrome className="mr-2 h-4 w-4" />
                        )}
                        Sign in with Google
                    </Button>

                    {/* GitHub Login Button */}
                    <Button
                        variant="outline"
                        className="w-full"
                        disabled={loading !== null}
                        onClick={() => handleSocialLogin("github")}
                    >
                        {loading === "github" ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <Github className="mr-2 h-4 w-4" />
                        )}
                        Sign in with GitHub
                    </Button>

                    {/* ──────────────────────────────────────
                        EMAIL/PASSWORD LOGIN (Coming Soon!)
                        ──────────────────────────────────────
                        
                        📧 TO ADD EMAIL/PASSWORD AUTHENTICATION:
                        
                        1. Uncomment CredentialsProvider in src/lib/auth.ts
                        2. Set up a database (Prisma, Drizzle, etc.)
                        3. Create a users table with email and hashed password
                        4. Install bcrypt: npm install bcrypt @types/bcrypt
                        5. Add the form below:
                        
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        <form onSubmit={handleEmailLogin} className="space-y-3">
                            <Input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <Button type="submit" className="w-full">
                                Sign in with Email
                            </Button>
                        </form>
                        
                        ────────────────────────────────────── */}

                    {/* Privacy Notice */}
                    <p className="text-xs text-center text-muted-foreground mt-4">
                        By signing in, you agree to our Terms of Service and Privacy Policy
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
