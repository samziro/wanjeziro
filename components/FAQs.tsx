'use client'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'

const faqs = [
  {
    q: 'How much does this cost?',
    a: 'Engagements start from KES 45,000 for a strategy sprint and scale based on scope. Every project starts with a free call — so you will know exactly what to expect before committing anything.',
  },
  {
    q: 'How quickly will I see results?',
    a: 'Most clients see measurable improvements in enquiry volume within 60–90 days. We set clear KPIs at the start so you know what success looks like.',
  },
  {
    q: 'Do you work with businesses outside Kenya?',
    a: 'I primarily work with SMEs in Kenya and East Africa, though I have worked with remote clients across Africa. If you are unsure, book a call and we will work it out.',
  },
  {
    q: 'What if I just need a website?',
    a: 'If what you need is a conversion-focused website, I can build that. But most clients get more value from a strategy session first — so we build the right thing, not just something that looks good.',
  },
  {
    q: 'Is this only for businesses that already run ads?',
    a: 'No. I work with SMEs at all stages — whether you are spending on ads already or starting from scratch with organic content and a website.',
  },
]

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(0)
  const { ref, visible } = useReveal()

  return (
    <section id="faqs" className="py-28 px-6 bg-[var(--cream)]">
      <div className="max-w-3xl mx-auto">
        <div ref={ref} className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-[var(--navy-700)]" />
            <span className="text-xs font-medium tracking-widest uppercase text-[var(--navy-700)]">FAQs</span>
            <span className="w-8 h-px bg-[var(--navy-700)]" />
          </div>
          <h2 className={`font-display text-4xl md:text-5xl font-medium leading-tight text-[var(--navy-900)] transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Questions people ask
          </h2>
          <p className="mt-4 text-base font-light opacity-60 text-[var(--navy-900)]">
            If you have one not listed here, just ask in the chat or send a message.
          </p>
        </div>

        <div className="divide-y divide-[var(--sand)]">
          {faqs.map((faq, i) => (
            <div key={i} className="group">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-6 py-6 text-left"
              >
                <span className={`font-display text-lg font-medium leading-snug transition-colors duration-300 ${open === i ? 'text-[var(--navy-700)]' : 'text-[var(--navy-900)]'}`}>
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-300 mt-0.5 ${open === i ? 'bg-[var(--navy-700)] text-white' : 'bg-[var(--navy-50)] text-[var(--navy-700)]'}`}>
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open === i ? 'max-h-64 pb-6' : 'max-h-0'}`}>
                <p className="text-sm font-light leading-relaxed text-[var(--navy-900)] opacity-70 border-l-2 border-[var(--navy-400)] pl-5">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm font-light opacity-50 text-[var(--navy-900)] mb-4">Still have a question?</p>
          <a href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--navy-900)] text-white text-sm font-medium hover:bg-[var(--navy-700)] transition-colors duration-300">
            Send a message
          </a>
        </div>
      </div>
    </section>
  )
}
