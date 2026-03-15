'use client'
import { ArrowUpRight } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'

const projects = [
  {
    client: 'Watamu Fitness Center',
    category: 'Website + Brand',
    year: '2024',
    problem: 'The business had no online presence and was losing potential clients to competitors who appeared first in search.',
    solution: 'Developed a modern, mobile-first website with clear service pages, booking integration, and local SEO foundations.',
    results: [
      '3× increase in online enquiries',
      'First page Google ranking for local terms',
      'Reduced reliance on word-of-mouth alone',
    ],
    accentColor: '#2d7d2d',
    bgLight: '#f0f7f0',
  },
  {
    client: 'Coastal SME Collective',
    category: 'Marketing Strategy',
    year: '2024',
    problem: 'Businesses were spending on ads with no clear targeting strategy, wasting budget without measurable return.',
    solution: 'Designed a structured digital marketing strategy with audience profiling, channel selection, and a 90-day execution roadmap.',
    results: [
      '40% reduction in wasted ad spend',
      'Clear content calendar and messaging',
      'Measurable KPIs for the first time',
    ],
    accentColor: '#8a6a1a',
    bgLight: '#faf5eb',
  },
  {
    client: 'Local Hospitality Brand',
    category: 'Growth System',
    year: '2023',
    problem: 'High social media engagement but almost no conversion to actual bookings or enquiries from their content.',
    solution: 'Built a complete lead capture funnel from social content to landing page to WhatsApp booking system.',
    results: [
      'Enquiry-to-booking rate improved by 60%',
      'Automated follow-up reduced manual work',
      'Consistent monthly booking pipeline',
    ],
    accentColor: '#3a52a3',
    bgLight: '#f0f4ff',
  },
]

export default function Work() {
  const { ref, visible } = useReveal()

  return (
    <section id="work" className="py-28 px-6 bg-[var(--cream)]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[var(--forest)]" />
            <span className="text-xs font-medium tracking-widest uppercase text-[var(--forest)]">
              Case studies
            </span>
          </div>
          <h2
            className={`font-display text-4xl md:text-5xl font-medium leading-tight transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Results, not just
            <br />
            <em>deliverables</em>
          </h2>
        </div>

        <div className="space-y-2">
          {projects.map((project, i) => (
            <div
              key={project.client}
              className="group border border-[var(--sand)] p-8 md:p-10 hover:border-[var(--ink)] transition-all duration-500 cursor-default"
            >
              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{ background: project.bgLight, color: project.accentColor }}
                  >
                    {project.category}
                  </span>
                  <span className="text-xs opacity-40 font-light">{project.year}</span>
                </div>
                <ArrowUpRight
                  size={16}
                  className="opacity-0 group-hover:opacity-40 transition-opacity hidden md:block"
                />
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-medium mb-8">
                {project.client}
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <p className="text-[10px] font-medium tracking-widest uppercase opacity-40 mb-2">
                    Problem
                  </p>
                  <p className="text-sm font-light leading-relaxed opacity-70">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-medium tracking-widest uppercase opacity-40 mb-2">
                    Solution
                  </p>
                  <p className="text-sm font-light leading-relaxed opacity-70">
                    {project.solution}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-medium tracking-widest uppercase opacity-40 mb-2">
                    Results
                  </p>
                  <ul className="space-y-2">
                    {project.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm font-light opacity-70">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ background: project.accentColor }}
                        />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
