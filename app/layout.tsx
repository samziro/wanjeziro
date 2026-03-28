import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

const BASE_URL = 'https://wanjeziro.co.ke'

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
  ],

  // Authorship
  authors: [{ name: 'Wanje Ziro', url: BASE_URL }],
  creator: 'Wanje Ziro',
  publisher: 'Wanje Ziro',

  // Canonical
  alternates: {
    canonical: '/',
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp previews)
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

  // Verification (add your real codes from Google Search Console / Bing)
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

// Structured data — JSON-LD (Person + LocalBusiness schema)
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
          src="https://www.googletagmanager.com/gtag/js?id=G-R8LP3ZTJN4"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R8LP3ZTJN4');
            `,
          }}
        />
      </head>
      <body className="grain">{children}</body>
    </html>
  )
}
