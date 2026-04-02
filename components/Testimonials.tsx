'use client'
import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Chef Joshua',
    image: '/Joshua.jpg',
    role: 'Owner, Coastal Kitchen',
    location: 'Watamu, Kenya',
    quote: 'Before working with Wanje, we were posting every day and getting likes — but zero bookings from it. Within 90 days of launching our new website and funnel, our direct bookings increased by 70%. The strategy made all the difference.',
    rating: 5,
  },
  {
    name: 'Fit Hunter',
    image: '/fithunter.jpg',
    role: 'CEO, Fithunter Kenya',
    location: 'Watamu, Kenya',
    quote: 'Wanje does not just build websites — he thinks about your business. He asked questions no one had ever asked us, and what he built is not just beautiful but actually brings us leads every week. Worth every shilling.',
    rating: 5,
  },
  {
    name: 'Tapps Broilers Enterprise',
    image: '/tapps.png',
    role: 'Owner, Tapps Broilers Enterprise',
    location: 'Watamu, Kenya',
    quote: 'We had tried two other agencies before. Wanje was the first person who showed us the full picture — visibility, conversion, the whole system. Enrolment enquiries from our website tripled in one term.',
    rating: 5,
  },
  {
    name: 'Dabaso Rock Conservation',
    image: '/dabaso.jpg',
    role: 'Founder, Dabaso Conservation Group',
    location: 'Watamu, Kenya',
    quote: 'I was sceptical about hiring someone for digital strategy — I thought I could figure it out myself. Wanje structured our entire online presence in a way I could not have done alone. Our cost per lead dropped by half.',
    rating: 5,
  },
]

export default function Testimonials() {
  const { ref, visible } = useReveal()

  return (
    <section id="testimonials" className="py-28 px-6 bg-[var(--navy-900)]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-[var(--navy-400)]" />
            <span className="text-xs font-medium tracking-widest uppercase text-[var(--navy-400)]">Social proof</span>
            <span className="w-8 h-px bg-[var(--navy-400)]" />
          </div>
          <h2 className={`font-display text-4xl md:text-5xl font-medium leading-tight text-white transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            What clients say
          </h2>
          <p className="mt-4 text-base font-light opacity-50 max-w-lg mx-auto text-white">
            Real businesses, real results — across Kenya and East Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5">
          {testimonials.map((t, i) => (
            <div key={t.name}
              className={`bg-[var(--navy-900)] p-8 md:p-10 border border-white/10 hover:border-[var(--navy-400)] transition-colors duration-500`}>
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#7BA4D0">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote icon */}
              <Quote size={20} className="text-[var(--navy-400)] opacity-40 mb-4" />

              {/* Quote text */}
              <p className="text-base font-light leading-relaxed text-white opacity-75 mb-8 italic font-display">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-[var(--navy-700)]">
                  {/* Placeholder — replace src with actual client photos */}
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs font-light opacity-50 text-white">{t.role}</p>
                  <p className="text-xs font-light opacity-35 text-[var(--navy-400)]">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-12 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '10+', label: 'Projects completed' },
            { value: '98%', label: 'Client satisfaction' },
            { value: '60–90', label: 'Days to first results' },
            { value: '2 yrs', label: 'Industry experience' },
          ].map(stat => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-medium text-[var(--navy-400)]">{stat.value}</p>
              <p className="text-xs font-light opacity-40 text-white mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
