// ========================================
// 📊 DASHBOARD PAGE
// ========================================
// This is the main dashboard for ALL authenticated users
// Both USER and ADMIN roles can access this page

import { getServerSession } from "@/lib/auth"
import { redirect } from "next/navigation"
import { UserAccountNav } from "@/components/UserAccountNav"
import { Sparkles, LayoutDashboard, Rocket, Coffee, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default async function DashboardPage() {
    // Get the current session (server-side)
    const session = await getServerSession()

    // Redirect to login if not authenticated
    if (!session) {
        redirect("/auth/login")
    }

    const user = session.user

    return (
        <div className="min-h-screen text-slate-100">
            {/* Ambient background - matching landing page */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_60%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.2),transparent_60%)] opacity-80" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.8),rgba(5,5,5,0.95))]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-size-[40px_40px] opacity-40" />
            </div>

            {/* Header */}
            <header className="border-b border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center">
                            <LayoutDashboard className="h-5 w-5 text-cyan-300" />
                        </div>
                        <h1 className="text-2xl font-bold">Dashboard</h1>
                    </div>
                    <UserAccountNav />
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto space-y-6">
                    {/* Welcome Card */}
                    <div className="rounded-2xl p-4 border border-white/10 bg-white/5 backdrop-blur-xl transform transition duration-200 hover:border-white/20">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <h2 className="text-2xl font-semibold mb-2">Welcome back, {user.name}! 👋</h2>
                                <div className="space-y-1 text-sm text-slate-300/90">
                                    <p><span className="text-slate-400">Email:</span> {user.email}</p>
                                    <p><span className="text-slate-400">User ID:</span> {user.id}</p>
                                </div>
                            </div>
                            <Sparkles className="h-8 w-8 text-amber-300" />
                        </div>
                    </div>


                    {/* Getting Started Card */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <Rocket className="h-5 w-5 text-cyan-300" />
                            Getting Started
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="h-6 w-6 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center shrink-0">
                                    <span className="text-sm font-medium text-cyan-300">1</span>
                                </div>
                                <div>
                                    <p className="font-medium">Customize your profile</p>
                                    <p className="text-sm text-slate-400">
                                        Add your bio, avatar, and preferences in Settings
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="h-6 w-6 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center shrink-0">
                                    <span className="text-sm font-medium text-cyan-300">2</span>
                                </div>
                                <div>
                                    <p className="font-medium">Create your first project</p>
                                    <p className="text-sm text-slate-400">
                                        Start building something amazing
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start  gap-3">
                                <div className="h-6 w-6 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center shrink-0">
                                    <span className="text-sm font-medium text-cyan-300">3</span>
                                </div>
                                <div>
                                    <p className="font-medium">Invite team members</p>
                                    <p className="text-sm text-slate-400">
                                        Collaborate with others on your projects
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Support Card - Buy me a tea */}
                    <Link
                        href="https://youtube-snippets.vercel.app/payment"
                        target="_blank"
                        rel="noreferrer"
                        className="block rounded-2xl border border-emerald-400/70 bg-gradient-to-br from-emerald-500/25 via-transparent to-emerald-500/15 backdrop-blur-xl p-4 transform transition duration-200 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(52,211,153,0.7)]"
                    >
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-xl bg-emerald-500/20 border border-emerald-300/70 flex items-center justify-center">
                                <Coffee className="h-6 w-6 text-emerald-100" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
                                    Buy me a Tea ☕
                                </h3>
                                <p className="text-sm text-emerald-50/90">
                                    If this starter kit helped you ship faster, fuel the next build with a Tea or two!
                                </p>
                            </div>
                            <ArrowUpRight className="h-5 w-5 text-emerald-100" />
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    )
}
