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
    default: 'Website Designer Watamu | Digital Marketing for Hotels & SMEs',
    template: '%s | Wanje Ziro',
  },
  description:
    'Affordable website designer and digital marketing services in Watamu, Kenya. I help hotels, restaurants, curio shops, guesthouses and tour operators in Watamu, Malindi & Kilifi get a professional website, Google visibility and more customers online.',

  // Keywords
 keywords: [
    'website designer Watamu',
    'web designer Watamu',
    'affordable website designer Watamu',
    'digital marketing Watamu',
    'digital marketing Malindi',
    'website designer Malindi',
    'hotel website design Watamu',
    'restaurant website Watamu',
    'tourism website design Watamu',
    'digital marketing for hotels Watamu',
    'digital marketing for restaurants Watamu',
    'digital marketing for tour operators Watamu',
    'cheap website Watamu',
    'Google Business Profile Watamu',
    'SME digital marketing Kenya coast',
    'website design for small businesses Watamu',
    'social media marketing Watamu',
    'local SEO Watamu',
    'digital marketing for SMEs Watamu',
    'web development Watamu Kenya',
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
    title: 'Website Designer Watamu | Digital Marketing for Hotels & SMEs',
    description:
      'Affordable website designer and digital marketing in Watamu, Kenya. Perfect for hotels, restaurants, curio shops and tour operators who want more customers online.',
    locale: 'en_KE',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wanje Ziro — Website Designer & Digital Marketing Watamu',
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: 'summary_large_image',
    title: 'Website Designer Watamu | Digital Marketing for Hotels & SMEs',
    description:
      'Affordable website designer and digital marketing in Watamu, Kenya. Helping small businesses get found by tourists and grow online.',
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
      name: 'Website Designer Watamu | Digital Marketing for Hotels & SMEs',
     description:
      'Affordable website designer and digital marketing in Watamu, Kenya. Perfect for hotels, restaurants, curio shops and tour operators who want more customers online.',
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
