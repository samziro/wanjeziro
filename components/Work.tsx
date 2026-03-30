'use client'
import { ArrowUpRight } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'

const projects = [
  { client: 'Tapps Broilers Enterprise', category: 'Website + Brand', year: '2024', problem: 'The business had no online presence and was losing potential clients to competitors who appeared first in search.', solution: 'Developed a modern, mobile-first website with clear service pages, booking integration, and local SEO foundations.', results: ['3× increase in online enquiries','First page Google ranking for local terms','Reduced reliance on word-of-mouth alone'] },
  { client: 'Fit Hunter', category: 'Marketing Strategy', year: '2024', problem: 'Businesses were spending on ads with no clear targeting strategy, wasting budget without measurable return.', solution: 'Designed a structured digital marketing strategy with audience profiling, channel selection, and a 90-day execution roadmap.', results: ['40% reduction in wasted ad spend','Clear content calendar and messaging','Measurable KPIs for the first time'] },
  { client: 'Chef Joshua', category: 'Growth System', year: '2023', problem: 'High social media engagement but almost no conversion to actual bookings or enquiries from their content.', solution: 'Built a complete lead capture funnel from social content to WhatsApp booking system.', results: ['Enquiry-to-booking rate improved by 60%','Automated follow-up reduced manual work','Consistent monthly booking pipeline'] },
]

export default function Work() {
  const { ref, visible } = useReveal()
  return (
    <section id="work" className="py-28 px-6 bg-[var(--cream)]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[var(--navy-700)]" />
            <span className="text-xs font-medium tracking-widest uppercase text-[var(--navy-700)]">Case studies</span>
          </div>
          <h2 className={`font-display text-4xl md:text-5xl font-medium leading-tight text-[var(--navy-900)] transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Results, not just<br /><em>deliverables</em>
          </h2>
        </div>

        <div className="space-y-2">
          {projects.map(project => (
            <div key={project.client} className="group border border-[var(--sand)] p-8 md:p-10 hover:border-[var(--navy-700)] transition-all duration-500 cursor-default">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-medium px-3 py-1 bg-[var(--navy-50)] text-[var(--navy-700)]">{project.category}</span>
                  <span className="text-xs opacity-40 font-light">{project.year}</span>
                </div>
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-40 text-[var(--navy-700)] transition-opacity hidden md:block" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-medium mb-8 text-[var(--navy-900)]">{project.client}</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <p className="text-[10px] font-medium tracking-widest uppercase opacity-40 mb-2 text-[var(--navy-900)]">Problem</p>
                  <p className="text-sm font-light leading-relaxed opacity-70 text-[var(--navy-900)]">{project.problem}</p>
                </div>
                <div>
                  <p className="text-[10px] font-medium tracking-widest uppercase opacity-40 mb-2 text-[var(--navy-900)]">Solution</p>
                  <p className="text-sm font-light leading-relaxed opacity-70 text-[var(--navy-900)]">{project.solution}</p>
                </div>
                <div>
                  <p className="text-[10px] font-medium tracking-widest uppercase opacity-40 mb-2 text-[var(--navy-900)]">Results</p>
                  <ul className="space-y-2">
                    {project.results.map(r => (
                      <li key={r} className="flex items-start gap-2 text-sm font-light opacity-70 text-[var(--navy-900)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--navy-700)] mt-1.5 flex-shrink-0" />
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
