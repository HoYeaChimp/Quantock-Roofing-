import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { site } from "@/data/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { StickyDesktopCTA } from "@/components/layout/StickyDesktopCTA";
import { CookieBanner } from "@/components/CookieBanner";
import { TrackingScripts } from "@/components/TrackingScripts";
import { JsonLd } from "@/components/JsonLd";
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";

/*
 * Fonts: the design uses the native Apple/system font stack (SF Pro on Apple
 * devices) defined in globals.css — zero font download, ideal CLS/LCP.
 * Optional: switch to a hosted font with next/font/google, e.g.
 *   import { Inter } from "next/font/google";
 *   const inter = Inter({ subsets: ["latin"], display: "swap" });
 * and add inter.className to <body>.
 */

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.businessName} | ${site.tagline}`,
    template: `%s | ${site.businessName}`,
  },
  description: site.description,
  icons: {
    icon: "/brand/quantock-roofing-logo.png",
    apple: "/brand/quantock-roofing-logo.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* enables scroll-reveal styles only when JS is available,
            so content is never hidden for no-JS visitors */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
      </head>
      <body>
        <SkipToContent />
        <Header />
        {children}
        <Footer />
        <StickyMobileCTA />
        <StickyDesktopCTA />
        <CookieBanner />
        <TrackingScripts />
        <JsonLd
          data={[organizationSchema(), localBusinessSchema(), websiteSchema()]}
        />
      </body>
    </html>
  );
}
