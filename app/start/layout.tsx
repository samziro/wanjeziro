import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Book a Free Strategy Call — Wanje Ziro',
  description: 'Stop guessing. Book a free 20-minute strategy call and find out exactly what is holding your digital growth back.',
  robots: { index: false, follow: false }, // keep landing page out of organic results
}

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return children
}
