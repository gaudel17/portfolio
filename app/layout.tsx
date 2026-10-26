import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import SystemBar from "@/app/components/layout/SystemBar";
import Navigation from "@/app/components/layout/Navigation";
import Footer from "@/app/components/layout/Footer";
import MouseGlow from "@/app/components/layout/MouseGlow";
import ProgressBar from "@/app/components/ui/ProgressBar";
import { cn } from "@/app/lib/utils/cn";
import portfolio from "@/app/lib/config/portfolio";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolio.url),

  title: {
    default: portfolio.seo.title,
    template: portfolio.seo.titleTemplate ?? "%s",
  },

  description: portfolio.seo.description,

  applicationName: portfolio.seo.applicationName,
  authors: [{ name: portfolio.profile.name, url: portfolio.url }],
  creator: portfolio.profile.name,
  publisher: portfolio.profile.name,
  category: "technology",
  referrer: "origin-when-cross-origin",

  keywords: portfolio.seo.keywords,

  verification: {
    google: process.env.GOOGLE_VERIFICATION,
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: portfolio.url,
    title: portfolio.seo.title,
    description: portfolio.seo.description,
    siteName: portfolio.seo.applicationName,
    images: [
      {
        url: `${portfolio.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `${portfolio.profile.name} - ${portfolio.profile.role}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: portfolio.seo.title,
    description: portfolio.seo.description,
    images: [`${portfolio.url}/opengraph-image`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        geistSans.variable,
        geistMono.variable,
        geistSans.className,
      )}
    >
      <body className="antialiased app-bg text-foreground overflow-x-hidden transition-colors duration-300">
        <div aria-hidden="true" className="lamp-beam" />

        <MouseGlow />

        <SystemBar />
        <ProgressBar />
        <Navigation />

        <main className="relative z-10  pt-0 ">{children}</main>
        <Footer />

        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id={process.env.UMAMI_ID ?? ""}
        />
      </body>
    </html>
  );
}
