'use client'
import { useReveal } from '@/hooks/useReveal'

const problems = [
  'They post content consistently.',
  'They run ads every month.',
  'They have a website.',
  'But sales remain unpredictable.',
]

export default function Problem() {
  const { ref, visible } = useReveal()

  return (
    <section id="about" className="py-28 px-6 bg-[var(--ink)] text-[var(--cream)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div ref={ref}>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-[var(--forest)]" />
              <span className="text-xs font-medium tracking-widest uppercase text-[var(--forest)]">
                The problem
              </span>
            </div>

            <h2
              className={`font-display text-4xl md:text-5xl font-medium leading-tight mb-8 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Many businesses are{' '}
              <em>active online.</em>
              <br />
              But growth feels random.
            </h2>

            <p className="text-base font-light opacity-60 leading-relaxed max-w-md">
              The truth is — activity is not the same as strategy. Without a
              structured system, digital marketing becomes noise. That is the gap
              I help businesses solve.
            </p>
          </div>

          {/* Right column */}
          <div className="space-y-1 pt-2">
            {problems.map((item, i) => (
              <div
                key={item}
                className={`group flex items-center gap-5 py-5 border-b border-white/10 transition-all duration-700`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span
                  className="text-[var(--forest)] font-display text-sm opacity-60"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-lg font-light opacity-70 group-hover:opacity-100 transition-opacity">
                  {item}
                </p>
              </div>
            ))}

            <div className="pt-8">
              <p className="font-display text-xl italic opacity-40 border-l-2 border-[var(--forest)] pl-5">
                "Because activity is not the same as strategy."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
