'use client'
import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Calendar } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'
import Image from 'next/image'

// Replace with your real Calendly link
const CALENDLY_URL = 'https://calendly.com/wanjeziro-digitalgrowth-strategitst/30min'

export default function Contact() {
  const { ref, visible } = useReveal()

  // Load Calendly widget script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
    return () => { document.head.removeChild(script) }
  }, [])

  return (
    <section id="contact" className="py-28 px-6 bg-[var(--navy-50)]">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div ref={ref} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[var(--navy-700)]" />
            <span className="text-xs font-medium tracking-widest uppercase text-[var(--navy-700)]">Let's talk</span>
          </div>
          <h2 className={`font-display text-4xl md:text-5xl font-medium leading-tight max-w-xl text-[var(--navy-900)] transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Let's talk about<br /><em>your business</em>
          </h2>
          <p className="mt-4 text-base font-light opacity-60 max-w-lg text-[var(--navy-900)]">
            If your business is active online but growth feels unpredictable, a few strategic changes could transform your results. Pick a time below and let's explore how your digital presence can work better.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT: Calendly embed */}
          <div>
            <div
              className="calendly-inline-widget w-full border border-[var(--sand)] bg-white overflow-hidden"
              data-url={`${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=2E5E99`}
              style={{ minWidth: '280px', height: '660px' }}
            />

            {/* Trust signals */}
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              {[
                { icon: Calendar, label: 'Free call' },
                { icon: Mail,     label: '20 minutes' },
                { icon: Phone,    label: 'No obligation' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1.5 py-3 border border-[var(--sand)] bg-white">
                  <Icon size={14} className="text-[var(--navy-700)]" />
                  <span className="text-[11px] font-light opacity-60 text-[var(--navy-900)]">{label}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp fallback */}
            <div className="mt-5 text-center">
              <a
                href="https://wa.me/254769751566?text=Hi%20Wanje%2C%20I'd%20like%20to%20discuss%20my%20digital%20growth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-light opacity-70 hover:opacity-100 transition-opacity text-[var(--navy-900)]"
              >
                Prefer <span className="text-green-500 font-medium italic">WhatsApp</span>? Start a conversation →
              </a>
            </div>
          </div>

          {/* RIGHT: Photo + contact details */}
          <div className="space-y-10">

            {/* Portrait */}
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src="/wanje_ziro.jpeg"
                alt="Wanje Ziro Digital Growth Strategist Watamu Kenya"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-50)]/70 to-transparent" />
            </div>

            {/* Quote */}
            <p className="text-sm font-light leading-relaxed opacity-70 border-l-2 border-[var(--navy-700)] pl-5 text-[var(--navy-900)]">
              I work with SMEs that want their digital presence to actually generate
              results — not just look good. If that sounds like you, let's talk.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                { icon: Mail,   label: 'samuelziro76@gmail.com' },
                { icon: Phone,  label: '+254 769 751 566' },
                { icon: MapPin, label: 'Watamu, Kilifi County, Kenya' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--navy-100)] flex items-center justify-center text-[var(--navy-700)]">
                    <Icon size={14} />
                  </div>
                  <span className="text-sm font-light opacity-70 text-[var(--navy-900)]">{label}</span>
                </div>
              ))}
            </div>

            {/* Who it's for */}
            <div className="border border-[var(--sand)] p-6 bg-white">
              <p className="text-xs font-medium tracking-widest uppercase opacity-40 mb-4 text-[var(--navy-900)]">
                This is for you if…
              </p>
              <ul className="space-y-3">
                {[
                  'You are active online but growth feels random',
                  'Your website exists but generates no leads',
                  'You want a system, not just another service',
                  'You are building something worth growing',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-light opacity-70 text-[var(--navy-900)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--navy-700)] mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}