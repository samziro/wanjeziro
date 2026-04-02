import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"

const BASE_URL = 'https://wanjeziro.co.ke'
const GA4_ID = 'G-R8LP3ZTJN4'
const CLARITY_ID = 'W2ttveztg2'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // Core
  title: {
    default: 'Wanje Ziro — Digital Growth Strategist for SMEs',
    template: '%s | Wanje Ziro',
  },
  description:
    'Wanje Ziro helps SMEs in Kenya turn their online presence into a consistent customer system through high-performance websites, digital marketing strategy, and conversion-focused growth systems.',

  // Keywords
 keywords: [
    'digital growth strategist Kenya',
    'SME digital marketing Kenya',
    'website designer Watamu',
    'conversion strategy Kenya',
    'digital marketing consultant Kilifi',
    'SME website Kenya',
    'lead generation Kenya',
    'online marketing for small businesses Kenya',
    'digital marketing watamu',
    'website design watamu kenya',
    'tourism digital marketing kenya coast',
    'digital marketing for hotels kenya',
    'hotel website design watamu',
    'website design mombasa kenya',
    'digital marketing for restaurants kenya',
    'tourism website design watamu',
    'digital marketing for tour operators kenya',
    'digital marketing for local businesses kenya',
    'digital marketing for SMEs kenya',
    'digital marketing for small businesses kenya',
    ''
  ],


  // Authorship
  authors: [{ name: 'Wanje Ziro', url: BASE_URL }],
  creator: 'Wanje Ziro',
  publisher: 'Wanje Ziro',

  // Canonical
  alternates: {
    canonical: '/',
  },

  // Open Graph
  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'Wanje Ziro',
    title: 'Wanje Ziro — Digital Growth Strategist for SMEs',
    description:
      'Helping SMEs in Kenya move from random digital activity to structured growth. Websites, marketing systems, and conversion strategy.',
    locale: 'en_KE',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wanje Ziro — Digital Growth Strategist for SMEs',
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: 'summary_large_image',
    title: 'Wanje Ziro — Digital Growth Strategist for SMEs',
    description:
      'Helping SMEs in Kenya move from random digital activity to structured growth.',
    images: ['/og-image.jpg'],
    creator: '@wanjeziro',
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
    // bing: 'YOUR_BING_VERIFICATION_CODE',
  },

  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  // App
  applicationName: 'Wanje Ziro',
  category: 'Digital Marketing',
}

// Structured data — JSON-LD
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${BASE_URL}/#person`,
      name: 'Wanje Ziro',
      jobTitle: 'Digital Growth Strategist',
      description:
        'Wanje Ziro helps SMEs in Kenya build structured digital systems that turn online presence into consistent customers.',
      url: BASE_URL,
      sameAs: [
        'https://linkedin.com/in/wanjeziro',
        'https://twitter.com/wanjeziro',
        'https://facebook.com/wanjezir0',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Watamu',
        addressRegion: 'Kilifi County',
        addressCountry: 'KE',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${BASE_URL}/#business`,
      name: 'Wanje Ziro — Digital Growth Strategy',
      description:
        'Digital growth strategy, high-performance websites, and marketing systems for SMEs in Kenya.',
      url: BASE_URL,
      founder: { '@id': `${BASE_URL}/#person` },
      areaServed: ['Kenya', 'East Africa'],
      serviceType: [
        'Digital Marketing Strategy',
        'Website Design and Development',
        'Lead Generation Systems',
        'Brand Development',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Watamu',
        addressRegion: 'Kilifi County',
        addressCountry: 'KE',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'wanje@wanjeziro.com',
        availableLanguage: ['English', 'Swahili'],
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = window.gtag || gtag;
              gtag('js', new Date());
              gtag('config', '${GA4_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* Contentsquare UXA Hotjar */}
        <script src="https://t.contentsquare.net/uxa/642ddce8a9301.js"></script>

        {/* Microsoft Clarity */}
        <Script
          id="clarity-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_ID}");
            `,
          }}
        />
      </head>
      <body className="grain">{children}</body>
      <Analytics />
    </html>
  )
}