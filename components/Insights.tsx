'use client'
import { ArrowUpRight } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'
import Image from 'next/image'

const articles = [
  {
    number: '01',
    title: 'Why businesses get views but no customers',
    excerpt:
      'Most SMEs confuse visibility with conversion. Here is why the gap between them is costing you sales, and what to do about it.',
    tag: 'Conversion',
    readTime: '4 min read',
    color: '#2d7d2d',
    bg: '#f0f7f0',
  },
  {
    number: '02',
    title: 'The difference between visibility and conversion',
    excerpt:
      'Being seen is just the first step. Here is the framework I use to help businesses bridge the gap from audience to revenue.',
    tag: 'Strategy',
    readTime: '5 min read',
    color: '#8a6a1a',
    bg: '#faf5eb',
  },
  {
    number: '03',
    title: 'Why most SME websites fail to generate leads',
    excerpt:
      'It is almost never about the design. The real reasons your website is not converting visitors — and how to fix them fast.',
    tag: 'Websites',
    readTime: '6 min read',
    color: '#3a52a3',
    bg: '#f0f4ff',
  },
  {
    number: '04',
    title: '5 questions every business should ask about their marketing',
    excerpt:
      'Before spending another shilling on ads or content, answer these five questions. Your answers will change how you market.',
    tag: 'SME Growth',
    readTime: '3 min read',
    color: '#a33a3a',
    bg: '#fdf0f0',
  },
]

export default function Insights() {
  const { ref, visible } = useReveal()

  return (
    <section id="insights" className="py-28 px-6 bg-[var(--ink)] text-[var(--cream)]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[var(--forest)]" />
              <span className="text-xs font-medium tracking-widest uppercase text-[var(--forest)]">
                Digital insights
              </span>
            </div>
            <h2
              className={`font-display text-4xl md:text-5xl font-medium leading-tight transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Thinking out loud
              <br />
              <em>about SME growth</em>
            </h2>
          </div>
          <a
            href="#"
            className="group flex items-center gap-2 text-sm font-light opacity-50 hover:opacity-100 transition-opacity self-start md:self-auto"
          >
            All articles
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5">
          {articles.map((article) => (
            <div
              key={article.title}
              className="group bg-[var(--ink)] p-8 md:p-10 hover:bg-white/5 transition-colors duration-500 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-8">
                <span
                  className="text-[10px] font-medium px-3 py-1 rounded-full tracking-wide"
                  style={{ background: article.bg + '20', color: article.color }}
                >
                  {article.tag}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] opacity-30 font-light">{article.readTime}</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-40 transition-opacity"
                  />
                </div>
              </div>

              <span className="font-display text-xs opacity-20 mb-3 block">
                {article.number}
              </span>
              <h3 className="font-display text-xl font-medium leading-snug mb-4 group-hover:text-white transition-colors">
                {article.title}
              </h3>
              <p className="text-sm font-light leading-relaxed opacity-50 mb-8">
                {article.excerpt}
              </p>

              {/* Author row */}
              <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="relative w-7 h-7 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/wanje_ziro.jpeg"
                    alt="Wanje Ziro"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <span className="text-xs font-light opacity-40">Wanje Ziro</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
