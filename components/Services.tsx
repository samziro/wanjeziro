'use client'
import { Globe, Zap, Megaphone, Palette, ArrowUpRight } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'

const services = [
  {
    icon: Globe,
    title: 'Professional Websites for Watamu Businesses',
    tagline: 'From no website to bookings in weeks',
    description:
      'Modern, mobile-friendly websites designed specifically for hotels, restaurants, curio shops, guesthouses and tour operators in Watamu & Malindi. Built to look professional and get real customer enquiries.',
    deliverables: [
      'Custom design for your business',
      'Fast loading & mobile friendly',
      'Google-friendly SEO setup',
      'Online booking & contact forms',
    ],
  },
  {
    icon: Zap,
    title: 'Digital Growth Systems',
    tagline: 'Stop random posting. Start getting consistent customers',
    description:
      'I build a simple, easy-to-manage digital system so your business is visible to tourists and locals 24/7 — turning online activity into actual bookings and sales.',
    deliverables: [
      'Lead capture & follow-up system',
      'Simple content calendar',
      'WhatsApp & email automation',
      'Monthly performance report',
    ],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing for Coastal SMEs',
    tagline: 'Targeted marketing that brings real results',
    description:
      'Practical digital marketing strategies focused on Watamu and Malindi tourists. I help you get found on Google, Instagram and Facebook with posts and ads that actually convert.',
    deliverables: [
      'Audience & competitor research',
      'Instagram & Facebook strategy',
      'Google Ads & local SEO',
      'Clear monthly goals & tracking',
    ],
  },
  {
    icon: Palette,
    title: 'Branding & Content Development',
    tagline: 'Look professional and stand out to tourists',
    description:
      'Clear branding, professional photos, and simple content that makes your business memorable. Perfect for restaurants, hotels and experiences in Watamu that want to attract more international visitors.',
    deliverables: [
      'Brand messaging that sells',
      'Logo & visual identity refresh',
      'Photo & video content guidelines',
      'Ready-to-post templates',
    ],
  },
]

export default function Services() {
  const { ref, visible } = useReveal()

  return (
    <section id="services" className="py-28 px-6 bg-[var(--navy-50)]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[var(--navy-700)]" />
            <span className="text-xs font-medium tracking-widest uppercase text-[var(--navy-700)]">
              Services
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className={`font-display text-4xl md:text-5xl font-medium leading-tight transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Services That Get
              <br />
              <em>Watamu Businesses More Customers Online</em>
            </h2>
            <p className="text-sm font-light opacity-60 max-w-sm text-[var(--navy-900)]">
              Every service is designed for small hotels, restaurants, shops and tour operators in Watamu &amp; Malindi who want simple, affordable solutions that deliver real results.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[var(--sand)]">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group bg-[var(--cream)] p-8 md:p-10 hover:bg-[var(--navy-900)] transition-colors duration-500 cursor-default"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--navy-50)] flex items-center justify-center text-[var(--navy-700)] group-hover:bg-[var(--navy-700)] group-hover:text-white transition-colors duration-500">
                    <Icon size={18} />
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 group-hover:opacity-40 text-white transition-opacity duration-300"
                  />
                </div>

                <p className="text-[10px] font-medium tracking-widest uppercase text-[var(--navy-700)] opacity-70 mb-2">
                  {service.tagline}
                </p>

                <h3 className="font-display text-2xl font-medium mb-4 text-[var(--navy-900)] group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>

                <p className="text-sm font-light leading-relaxed opacity-60 text-[var(--navy-900)] group-hover:text-white mb-6 transition-colors duration-500">
                  {service.description}
                </p>

                <ul className="space-y-1.5">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs font-light opacity-50 text-[var(--navy-900)] group-hover:text-white transition-colors duration-500"
                    >
                      <span className="w-1 h-1 rounded-full bg-[var(--navy-400)] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
