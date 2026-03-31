'use client'
import { useEffect, useRef } from 'react'
import { ArrowDownRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (lineRef.current) {
        lineRef.current.style.width = '100%'
      }
    }, 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 pt-32 px-6 overflow-hidden bg-[var(--cream)]">
      {/* Background texture pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 39px,
            #1a1410 39px,
            #1a1410 40px
          ), repeating-linear-gradient(
            90deg,
            transparent,
            transparent 39px,
            #1a1410 39px,
            #1a1410 40px
          )`,
        }}
      />

      {/* Accent blob */}
      <div
        className="absolute top-32 right-0 w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #2d7d2d 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Hero headshot — replace /wanje.jpg with your photo */}
      <div className="absolute right-0 top-0 h-full w-[48%] hidden lg:block">
        <Image
          src="/wanje_ziro.jpeg"
          alt="Wanje Ziro Digital Growth strategist watamu kenya"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Left fade into cream */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--cream)] via-[var(--cream)]/40 to-transparent" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--cream)] to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="w-8 h-px bg-[var(--navy-700)]" />
          <span className="text-xs font-medium tracking-widest uppercase text-[var(--navy-700)]">
            Digital Growth Strategist · Watamu, Kenya
          </span>
        </div>

        {/* Main headline */}
        <div className="overflow-hidden mb-6">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] animate-fade-up text-[var(--navy-900)]"
            style={{ animationDelay: '0.2s' }}>
            Turning online
            <br />
            <em className="not-italic text-[var(--navy-700)]">presence</em> into
            <br />
            customers.
          </h1>
        </div>

        {/* Animated line */}
        <div
          ref={lineRef}
          className="h-px bg-[var(--sand)] mb-10 transition-all duration-1000 ease-out"
          style={{ width: 0 }}
        />

        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 animate-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          <p className="text-base md:text-lg font-light text-[var(--navy-900)] opacity-70 max-w-md leading-relaxed">
            I help SMEs replace random posting and ads with a structured digital growth system so you get predictable customers, not just activity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
               href="#contact"
              className="group flex items-center gap-2 px-7 py-4 bg-[var(--navy-900)] text-[var(--cream)] text-sm font-medium hover:bg-[var(--navy-700)] transition-colors duration-300"
            >
              Book a strategy call
              <ArrowDownRight
                size={15}
                className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"
              />
            </a>
            <a
              href="#work"
              className="flex items-center gap-2 px-7 py-4 border border-[var(--sand)] text-sm font-medium text-[var(--navy-900)] hover:border-[var(--navy-700)] transition-colors duration-300"
            >
              View case studies
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 pt-10 border-t border-[var(--sand)] grid grid-cols-3 gap-6 animate-fade-up" style={{ animationDelay: '0.7s' }}>
          {[
            { value: '10+', label: 'SMEs served since 2024' },
            { value: '3×', label: ' avg. leads in 90 days' },
            { value: '2 yrs', label: 'working with East African SMEs ' },
          ].map(stat => (
            <div key={stat.label}>
              <p className="font-display text-3xl md:text-4xl font-medium text-[var(--navy-700)]">{stat.value}</p>
              <p className="text-xs font-light text-[var(--navy-900)] opacity-50 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll indicator
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] tracking-widest uppercase">scroll</span>
        <div className="w-px h-8 bg-[var(--ink)]" style={{ animation: 'pulse 2s infinite' }} />
      </div> */}
    </section>
  )
}
