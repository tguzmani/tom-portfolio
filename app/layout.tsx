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

const url = "https://tguzmani.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "Tomás Guzmán — Fullstack Developer",
  description:
    "Fullstack developer with 7+ years of experience building web applications. Specializing in React, TypeScript, NestJS, and Laravel.",
  openGraph: {
    title: "Tomás Guzmán — Fullstack Developer",
    description:
      "Turning ideas into products, fast. 7+ years building fullstack web applications.",
    url,
    siteName: "Tomás Guzmán",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomás Guzmán — Fullstack Developer",
    description:
      "Turning ideas into products, fast. 7+ years building fullstack web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
