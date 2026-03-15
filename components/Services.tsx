'use client'
import { Globe, Zap, Megaphone, Palette, ArrowUpRight } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'

const services = [
  {
    icon: Zap,
    title: 'Digital Growth Systems',
    tagline: 'From scattered activity to structured pipeline',
    description:
      'Build a complete digital marketing system that moves the right people from discovery to paying customer — consistently, not by chance.',
    deliverables: ['Marketing funnel design', 'Lead capture systems', 'Email automation', 'Conversion tracking'],
  },
  {
    icon: Globe,
    title: 'High-Performance Websites',
    tagline: 'Built to convert, not just impress',
    description:
      'Conversion-focused websites designed to attract your ideal client, communicate value clearly, and turn visitors into enquiries.',
    deliverables: ['UX-first design', 'SEO foundation', 'Speed optimisation', 'Mobile-first build'],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing Strategy',
    tagline: 'Stop guessing. Start marketing intentionally.',
    description:
      'A clear, actionable marketing strategy built around your business goals — so every post, ad, and email has a purpose.',
    deliverables: ['Audience research', 'Channel strategy', 'Content planning', 'KPI framework'],
  },
  {
    icon: Palette,
    title: 'Brand & Content Development',
    tagline: 'A presence people remember and trust',
    description:
      'Clear messaging and professional visual identity that ensures your business looks and sounds credible at every touchpoint.',
    deliverables: ['Brand identity', 'Messaging framework', 'Content templates', 'Visual guidelines'],
  },
]

export default function Services() {
  const { ref, visible } = useReveal()

  return (
    <section id="services" className="py-28 px-6 bg-[var(--sand)] bg-opacity-30">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[var(--forest)]" />
            <span className="text-xs font-medium tracking-widest uppercase text-[var(--forest)]">
              Services
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className={`font-display text-4xl md:text-5xl font-medium leading-tight transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              What I help
              <br />
              <em>you build</em>
            </h2>
            <p className="text-sm font-light opacity-60 max-w-sm">
              Every engagement is focused on one outcome: turning your digital
              presence into a reliable source of customers.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[var(--sand)]">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group bg-[var(--cream)] p-8 md:p-10 hover:bg-[var(--ink)] transition-colors duration-500 cursor-default"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--forest-light)] flex items-center justify-center text-[var(--forest)] group-hover:bg-white/10 group-hover:text-white transition-colors duration-500">
                    <Icon size={18} />
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 group-hover:opacity-50 text-white transition-opacity duration-300"
                  />
                </div>

                <p className="text-[10px] font-medium tracking-widest uppercase text-[var(--forest)] group-hover:text-[var(--forest)] opacity-70 mb-2">
                  {service.tagline}
                </p>
                <h3 className="font-display text-2xl font-medium mb-4 group-hover:text-[var(--cream)] transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-sm font-light leading-relaxed opacity-60 group-hover:opacity-60 group-hover:text-[var(--cream)] mb-6 transition-colors duration-500">
                  {service.description}
                </p>

                <ul className="space-y-1.5">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs font-light opacity-50 group-hover:opacity-50 group-hover:text-[var(--cream)] transition-colors duration-500"
                    >
                      <span className="w-1 h-1 rounded-full bg-[var(--forest)] group-hover:bg-white/50 flex-shrink-0 transition-colors duration-500" />
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
