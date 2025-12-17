import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DhoniDev-Ai | Full Stack AI Developer",
  description: "Full Stack AI Developer crafting smart products & frictionless experiences. Watch dev logs, AI builds & breakdowns on YouTube.",
  keywords: ["AI Developer", "Full Stack Developer", "AI Products", "YouTube", "ToneGenie", "Next.js"],
  authors: [{ name: "DhoniDev-Ai" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "DhoniDev-Ai | Full Stack AI Developer",
    description: "Full Stack AI Developer crafting smart products & frictionless experiences.",
    type: "website",
  },
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

        {children}
      </body>
    </html>

  );
}