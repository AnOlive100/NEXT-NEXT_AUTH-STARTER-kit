import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextAuth Starter Kit | Production-Ready Authentication",
  description: "Production-ready Next.js 15 authentication starter kit with Google & GitHub OAuth, protected routes, and beautiful UI. Built with TypeScript and Tailwind CSS.",
  keywords: ["NextAuth", "Next.js", "Authentication", "OAuth", "TypeScript", "Tailwind CSS", "Starter Kit", "Google Login", "GitHub Login"],
  authors: [{ name: "DhoniDev-Ai" }],
  openGraph: {
    title: "NextAuth Starter Kit | Production-Ready Authentication",
    description: "Production-ready Next.js 15 authentication starter kit with Google & GitHub OAuth, protected routes, and beautiful UI.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}