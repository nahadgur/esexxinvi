import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { buildGlobalSchema } from "./global-schema";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Invisalign Essex | Find Top Invisalign Providers Across Essex',
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // NOTE: No alternates.canonical here — each page sets its own.
  // Setting a canonical in layout causes all pages without their own
  // canonical to inherit the root URL, triggering GSC "Duplicate without
  // user-selected canonical" errors.
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    locale: "en_GB",
    images: [{ url: "/android-chrome-512x512.png", width: 512, height: 512, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/android-chrome-512x512.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const globalSchema = buildGlobalSchema();

  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-HLB4W9H9DZ" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HLB4W9H9DZ');`}
        </Script>
        {children}
      </body>
    </html>
  );
}
