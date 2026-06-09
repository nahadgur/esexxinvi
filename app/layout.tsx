import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { DM_Sans, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/data/site';
import { buildOrganization, buildWebSite } from '@/lib/schema';
import { ConsentBanner } from '@/components/ConsentBanner';
import { SiteChrome } from '@/components/SiteChrome';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Invisalign Dentists Essex | Verified Platinum providers',
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  authors: [{ name: `${siteConfig.name} editorial team`, url: `${siteConfig.url}/editorial-policy/` }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'health',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = buildOrganization();
  const webSiteSchema = buildWebSite();

  return (
    <html lang="en-GB" className={`${dmSans.variable} ${cormorant.variable}`}>
      <head>
        <meta name="google-site-verification" content="dcdrTVarxyLM5Qd8YERt_3__dhu4A_yvxKoByxxODeU" />
        {/* No global canonical: each page sets its own via generateMetadata.
            A layout-level canonical makes every page without alternates.canonical
            point at the homepage, which triggers GSC "Duplicate without
            user-selected canonical" warnings across the whole site. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <a href="#main" className="skip-to-content">Skip to content</a>

        {/* GA4 — loads with consent denied by default; ConsentBanner upgrades to granted on opt-in */}
        <Script id="ga-consent-default" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 500
            });`}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.ga4Id}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteConfig.ga4Id}', { 'anonymize_ip': true });`}
        </Script>

        <SiteChrome>{children}</SiteChrome>

        <ConsentBanner />
      </body>
    </html>
  );
}
