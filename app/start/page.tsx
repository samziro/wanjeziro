'use client'
import { useState } from 'react'
import Image from 'next/image'
import { CheckCircle, ArrowDown, Shield, Clock, Phone } from 'lucide-react'

const WHATSAPP_NUMBER  = '254769751566'
const WHATSAPP_MESSAGE = encodeURIComponent("Hi Wanje! I saw your ad and I'd like to book a free strategy call.")
const WHATSAPP_URL     = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

// Replace with your Calendly embed URL
const CALENDLY_URL = "https://calendly.com/wanjeziro-digitalgrowth-strategitst/30min"

const painPoints = [
  'You post consistently but enquiries stay flat — the content is not converting.',
  'You have a website, but it is not bringing you clients — it just sits there.',
  'You are not sure which channels are actually worth your time and money.',
]

export default function LandingPage() {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false)

  const scrollToCalendly = () => {
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[var(--cream)] font-body">

      {/* ── Logo only header ───────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--cream)]/95 backdrop-blur-sm border-b border-[var(--sand)] px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="font-display text-lg font-medium text-[var(--navy-900)]">Wanje Ziro</span>
          <button
            onClick={scrollToCalendly}
            className="text-xs font-medium px-4 py-2 bg-[var(--navy-700)] text-white hover:bg-[var(--navy-900)] transition-colors duration-200">
            Book free call →
          </button>
        </div>
      </header>

      <main className="pt-20">

        {/* ── HERO ───────────────────────────────────────────────────── */}
        <section className="px-6 py-20 md:py-28 bg-[var(--navy-900)] text-white relative overflow-hidden">
          {/* Subtle radial glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #2E5E99 0%, transparent 70%)', filter: 'blur(80px)' }} />

          <div className="max-w-3xl mx-auto relative z-10 text-center">
            {/* Eyebrow — should mirror the ad */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--navy-700)]/40 border border-[var(--navy-400)]/30 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--navy-400)]" />
              <span className="text-xs font-medium tracking-widest uppercase text-[var(--navy-400)]">Free 20-minute strategy call</span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-medium leading-[1.1] mb-6">
              Your business is active online.
              <br />
              <em className="text-[var(--navy-400)]">So why is growth still unpredictable?</em>
            </h1>

            <p className="text-lg font-light opacity-70 leading-relaxed mb-10 max-w-xl mx-auto">
              In 20 minutes, I will show you exactly what is holding your digital presence back — and what one strategic change could do for your business.
            </p>

            <button
              onClick={scrollToCalendly}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--navy-700)] text-white text-sm font-medium hover:bg-[var(--navy-400)] hover:text-[var(--navy-900)] transition-colors duration-300 shadow-lg">
              Book my free strategy call
              <ArrowDown size={15} className="group-hover:translate-y-1 transition-transform" />
            </button>

            <p className="text-xs opacity-30 mt-4 font-light">No credit card. No obligation. 20 minutes.</p>
          </div>
        </section>

        {/* ── PAIN POINTS ───────────────────────────────────────────── */}
        <section className="px-6 py-16 bg-[var(--cream)]">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--navy-700)] mb-6 text-center">
              Does any of this sound familiar?
            </p>
            <div className="space-y-4">
              {painPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-4 p-5 border border-[var(--sand)] bg-white hover:border-[var(--navy-400)] transition-colors duration-300">
                  <span className="w-6 h-6 rounded-full bg-[var(--navy-100)] text-[var(--navy-700)] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                    {i + 1}
                  </span>
                  <p className="text-sm font-light text-[var(--navy-900)] opacity-80 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm font-light opacity-50 text-[var(--navy-900)] mt-6">
              If you nodded at even one of these, this call is for you.
            </p>
          </div>
        </section>

        {/* ── CASE STUDY ─────────────────────────────────────────────── */}
        <section className="px-6 py-16 bg-[var(--navy-50)]">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--navy-700)] mb-10 text-center">
              What one strategy session can do
            </p>

            <div className="border border-[var(--sand)] bg-white p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-medium px-3 py-1 bg-[var(--navy-50)] text-[var(--navy-700)]">Case study</span>
                <span className="text-xs opacity-40">Watamu, Kenya</span>
              </div>
              <h3 className="font-display text-2xl font-medium text-[var(--navy-900)] mb-2">Fit Hunter</h3>
              <p className="text-xs opacity-40 text-[var(--navy-900)] mb-8">Website + Digital Growth System</p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { label: 'Problem', text: 'No online presence. Losing clients to competitors who appeared first on Google.' },
                  { label: 'Solution', text: 'New conversion-focused website, local SEO foundation, and a WhatsApp lead capture funnel.' },
                  { label: 'Result', text: '3× increase in online enquiries. First page Google ranking within 90 days.' },
                ].map(col => (
                  <div key={col.label}>
                    <p className="text-[10px] font-medium tracking-widest uppercase opacity-40 mb-2 text-[var(--navy-900)]">{col.label}</p>
                    <p className="text-sm font-light leading-relaxed opacity-70 text-[var(--navy-900)]">{col.text}</p>
                  </div>
                ))}
              </div>

              {/* Result metric pills */}
              <div className="flex flex-wrap gap-3">
                {['3× more enquiries', 'Page 1 Google', '90-day turnaround'].map(r => (
                  <span key={r} className="text-xs font-medium px-4 py-2 bg-[var(--navy-900)] text-white">
                    ✓ {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ────────────────────────────────────────────── */}
        <section className="px-6 py-16 bg-[var(--navy-900)]">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#7BA4D0">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <blockquote className="font-display text-xl md:text-2xl italic font-medium text-white leading-relaxed mb-8 max-w-2xl opacity-90">
                "Wanje was the first person who showed us the full picture — visibility, conversion, the whole system. Enrolment enquiries from our website tripled in one term."
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--navy-400)]">
                  <Image src="/fithunter.jpg" alt="Fit Hunter" fill className="object-cover object-top" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-white">Fit Hunter</p>
                  <p className="text-xs font-light opacity-50 text-white">Director, Kilifi Academy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CALENDLY EMBED ──────────────────────────────────────────── */}
        <section id="book" className="px-6 py-20 bg-[var(--cream)]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-medium text-[var(--navy-900)] mb-3">
                Book your free strategy call
              </h2>
              <p className="text-sm font-light opacity-60 text-[var(--navy-900)]">
                Pick a time that works for you. 20 minutes. No pitch. Just strategy.
              </p>
            </div>
            {/* ── URGENCY SIGNAL ─────────────────────────────────────── */}
            <div className="mb-8 flex items-center justify-center gap-3 px-5 py-3.5 border border-[var(--sand)] bg-white">
              <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 animate-pulse" />
              <p className="text-xs font-light text-[var(--navy-900)] opacity-70 text-center">
                I work with <span className="font-medium opacity-100">3–4 new clients per month.</span> A small number of April strategy call slots are still open — book below to secure yours.
              </p>
            </div>
            {/* Calendly iframe */}
            <div className="w-full border border-[var(--sand)] overflow-hidden bg-white" style={{ minHeight: '680px' }}>
              <iframe
                src={CALENDLY_URL}
                width="100%"
                height="680"
                frameBorder="0"
                title="Book a strategy call with Wanje Ziro"
                onLoad={() => setCalendlyLoaded(true)}
                className={`transition-opacity duration-500 ${calendlyLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
              {!calendlyLoaded && (
                <div className="flex flex-col items-center justify-center h-[680px] gap-4">
                  <div className="w-8 h-8 border-2 border-[var(--navy-700)] border-t-transparent rounded-full animate-spin" />
                  <p className="text-sm font-light opacity-40 text-[var(--navy-900)]">Loading calendar…</p>
                </div>
              )}
            </div>

            {/* Trust signals */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                { icon: CheckCircle, label: 'Completely free' },
                { icon: Clock,       label: '20 minutes only' },
                { icon: Shield,      label: 'No obligation' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <Icon size={18} className="text-[var(--navy-700)]" />
                  <span className="text-xs font-light opacity-60 text-[var(--navy-900)]">{label}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp fallback */}
            <div className="mt-8 text-center border-t border-[var(--sand)] pt-8">
              <p className="text-xs font-light opacity-50 text-[var(--navy-900)] mb-3">
                Prefer to message first?
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--navy-700)] hover:text-[var(--navy-900)] transition-colors">
                <Phone size={14} />
                Chat on WhatsApp instead
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ── MINIMAL FOOTER ──────────────────────────────────────────── */}
      <footer className="py-8 px-6 border-t border-[var(--sand)] bg-[var(--cream)]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-sm font-medium text-[var(--navy-900)] opacity-60">Wanje Ziro</span>
          <div className="flex gap-6">
            <a href="/privacy" className="text-xs font-light opacity-30 hover:opacity-60 transition-opacity text-[var(--navy-900)]">Privacy policy</a>
            <a href="mailto:wanje@wanjeziro.com" className="text-xs font-light opacity-30 hover:opacity-60 transition-opacity text-[var(--navy-900)]">wanje@wanjeziro.com</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
