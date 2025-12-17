"use client";

import { Youtube, Sparkles, Wand2, Coffee, ArrowUpRight } from "lucide-react";

export default function Page() {
  return (
    <main className="max-h-screen bg-[#050505] text-slate-100 flex items-center justify-center px-4 py-10">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_60%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.2),transparent_60%)] opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.8),rgba(5,5,5,0.95))]" />
        {/* subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-size-[40px_40px] opacity-40" />
      </div>

      <div className="w-full max-w-4xl mx-auto">
        {/* PROFILE HEADER */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center">
            {/* Avatar */}
            <div className="relative mr-4">
              <div className="h-16 w-16 rounded-full overflow-hidden border border-white/10 shadow-sky-400 shadow-2xs">
                <img
                  src="/logo.png"
                  alt="Hardik Jain Logo"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Status dot */}
              <div className="absolute -right-0.5 -bottom-0.5 h-5 w-5 rounded-full bg-[#050505] flex items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
                </span>
              </div>
            </div>

            <div>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                DhoniDev-Ai
              </h1>
              <p className="mt-1 text-sm md:text-base text-slate-300/90">
                Full Stack AI Developer · Crafting smart products & frictionless
                experiences.
              </p>
            </div>
          </div>

          {/* Quick meta */}
          <div className="mt-4 md:mt-0 flex md:justify-end">
            <div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center">
              <Sparkles className="h-3.5 w-3.5 text-amber-300 mr-1.5" />
              <span className="text-xs md:text-sm text-slate-300/80">
                Building AI-native products
              </span>
            </div>
          </div>
        </header>

        {/* BENTO GRID */}
        <section className="mt-8 flex flex-wrap -m-2">
          {/* YouTube - large card */}
          <div className="w-full md:w-2/3 p-2">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-5 md:p-6 h-full transform transition duration-200 hover:-translate-y-1 hover:scale-[1.01] shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_45px_rgba(248,113,113,0.45)]"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -inset-40 opacity-0 hover:opacity-60 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,rgba(248,113,113,0.45),transparent_55%)]" />
              <div className="relative flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-2xl bg-[#18181b]/80 flex items-center justify-center border border-red-500/50 shadow-[0_0_25px_rgba(248,113,113,0.8)] mr-3">
                    <Youtube className="h-5 w-5 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.16em] text-red-300/80">
                      YouTube
                    </p>
                    <h2 className="text-lg md:text-xl font-semibold">
                      Dev logs, AI builds & breakdowns
                    </h2>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-300 ml-2 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <p className="text-sm text-slate-300/90 mb-4">
                  In-depth tutorials, live coding sessions, and{" "}
                  <span className="text-slate-50">
                    real-world AI product walkthroughs
                  </span>{" "}
                  — shipped weekly.
                </p>

                <div className="mt-auto flex flex-wrap">
                  <span className="inline-flex items-center rounded-full border border-red-400/60 bg-red-500/20 px-3 py-1 text-xs font-medium text-red-100 shadow-[0_0_25px_rgba(248,113,113,0.7)] mr-2 mb-2">
                    ✦ Watch latest build
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] text-slate-300/90 mr-2 mb-2">
                    Long-form deep dives · Shorts
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* ToneGenie (Tool) */}
          <div className="w-full md:w-1/3 p-2">
            <a
              href="#tonegenie"
              className="block rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-4 md:px-5 md:py-6 h-full transform transition duration-200 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(56,189,248,0.45)]"
            >
              <div className="flex items-center mb-3">
                <div className="h-9 w-9 rounded-xl bg-[#020617]/80 flex items-center justify-center border border-cyan-400/60 shadow-[0_0_22px_rgba(56,189,248,0.8)] mr-3">
                  <Wand2 className="h-4 w-4 text-cyan-300" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-cyan-300/80">
                    AI Tool
                  </p>
                  <h2 className="text-base font-semibold">ToneGenie</h2>
                </div>
              </div>
              <p className="text-xs md:text-sm text-slate-300/90 mb-3">
                Instantly rewrite your content in any tone — friendly, bold,
                or professional — with one click.
              </p>
              <div className="inline-flex items-center text-[11px] md:text-xs text-cyan-200/90">
                Open playground
                <ArrowUpRight className="h-3 w-3 ml-1" />
              </div>
            </a>
          </div>

          {/* Starter Kits - New Drop */}
          <div className="w-full md:w-1/2 p-2">
            <a
              href="#starter-kits"
              className="block rounded-2xl border border-amber-400/70 bg-linear-to-br  from-amber-500/20 via-[#020617] to-amber-500/10 backdrop-blur-xl px-4 py-4 md:px-5 md:py-6 h-full transform transition duration-200 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(251,191,36,0.6)]"
            >
              <div className="flex items-center mb-3">
                <div className="px-2.5 py-1 rounded-full bg-black/60 border border-amber-300/80 text-[11px] font-medium text-amber-100 mr-2">
                  Coming Soon...
                </div>
                <span className="text-[11px] text-amber-100/90">
                  AI starter bundles
                </span>
              </div>
              <h2 className="text-base md:text-lg font-semibold mb-2">
                Full Stack AI Starter Kits
              </h2>
              <p className="text-xs md:text-sm text-amber-50/90 mb-3">
                Production-ready boilerplates for SaaS, dashboards & landing
                pages — wired with auth, payments, and AI prompts.
              </p>
              <div className="flex flex-wrap">
                <span className="text-[11px] md:text-xs text-amber-100/90 mr-2 mb-1">
                  Next.js · Stripe · Prisma
                </span>
                <span className="text-[11px] md:text-xs text-amber-100/90 mb-1">
                  Plug-and-ship templates
                </span>
              </div>
            </a>
          </div>

          {/* Support CTA */}
          <div className="w-full md:w-1/2 p-2">
            <a
              href="https://www.buymeacoffee.com"
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border border-emerald-400/70 bg-linear-to-br from-emerald-500/25 via-[#020617] to-emerald-500/15 backdrop-blur-xl px-4 py-4 md:px-5 md:py-6 h-full transform transition duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(52,211,153,0.7)]"
            >
              <div className="flex items-center mb-3">
                <div className="h-9 w-9 rounded-xl bg-[#022c22]/80 flex items-center justify-center border border-emerald-300/70 shadow-[0_0_22px_rgba(52,211,153,0.9)] mr-3">
                  <Coffee className="h-4 w-4 text-emerald-100" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-emerald-200/90">
                    Support
                  </p>
                  <h2 className="text-base font-semibold">Buy me a Tea</h2>
                </div>
              </div>
              <p className="text-xs md:text-sm text-emerald-50/95 mb-3">
                If my work helped you ship faster,{" "}
                <span className="font-medium">fuel the next build</span> with a
                Tea or two.
              </p>
              <div className="inline-flex items-center text-[11px] md:text-xs text-emerald-100/95">
                Support my work
                <ArrowUpRight className="h-3 w-3 ml-1" />
              </div>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}