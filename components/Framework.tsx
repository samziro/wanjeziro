'use client'
import { Target, Radio, TrendingUp, BarChart2 } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'

const steps = [
  {
    number: '01',
    icon: Target,
    title: 'Clarity',
    description:
      'Identify the right customer and define a clear value proposition that sets you apart in the market.',
    color: 'bg-[var(--forest-light)] text-[var(--forest)]',
  },
  {
    number: '02',
    icon: Radio,
    title: 'Visibility',
    description:
      'Build a strategic online presence through content, SEO, and the right digital platforms.',
    color: 'bg-[#faf5eb] text-[#8a6a1a]',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Conversion',
    description:
      'Turn traffic into leads using funnels, persuasive messaging, and optimised user experience.',
    color: 'bg-[#f0f4ff] text-[#3a52a3]',
  },
  {
    number: '04',
    icon: BarChart2,
    title: 'Optimisation',
    description:
      'Track data, improve results, and systematically scale what is working for your business.',
    color: 'bg-[#fdf0f0] text-[#a33a3a]',
  },
]

export default function Framework() {
  const { ref, visible } = useReveal()

  return (
    <section id="framework" className="py-28 px-6 bg-[var(--cream)]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-[var(--forest)]" />
            <span className="text-xs font-medium tracking-widest uppercase text-[var(--forest)]">
              How it works
            </span>
            <span className="w-8 h-px bg-[var(--forest)]" />
          </div>
          <h2
            className={`font-display text-4xl md:text-5xl font-medium leading-tight transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            The Digital Growth Framework
          </h2>
          <p className="mt-4 text-base font-light opacity-60 max-w-xl mx-auto">
            A four-stage system that takes your business from scattered online
            activity to a consistent, converting digital presence.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[var(--sand)]">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className={`group p-8 border-r last:border-r-0 border-[var(--sand)] hover:bg-[var(--ink)] transition-colors duration-500 cursor-default`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="mb-6">
                  <span className="font-display text-xs opacity-30 group-hover:opacity-50 transition-opacity">
                    {step.number}
                  </span>
                </div>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-6 ${step.color} group-hover:bg-white/10 group-hover:text-white transition-colors duration-500`}
                >
                  <Icon size={18} />
                </div>
                <h3 className="font-display text-xl font-medium mb-3 group-hover:text-[var(--cream)] transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-sm font-light leading-relaxed opacity-60 group-hover:opacity-70 group-hover:text-[var(--cream)] transition-colors duration-500">
                  {step.description}
                </p>

                {/* Arrow connector (not on last) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-4 h-4 rotate-45 border-t border-r border-[var(--sand)] bg-[var(--cream)]" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs font-light opacity-40 mt-8 tracking-wide">
          Each stage builds on the last — results compound over time.
        </p>
      </div>
    </section>
  )
}
