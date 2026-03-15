'use client'
import { useState } from 'react'
import { ArrowRight, CheckCircle, Mail, Phone, MapPin, Loader2 } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'
import Image from 'next/image'

// Replace with your Web3Forms access key from https://web3forms.com
const WEB3FORMS_KEY = process.env.WEB3FORMS_ACCESS_KEY

export default function Contact() {
  const { ref, visible } = useReveal()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', business: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New enquiry from ${form.name} — ${form.business}`,
          from_name: form.name,
          ...form,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again or send a WhatsApp message.')
      }
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-28 px-6 bg-[var(--cream)]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[var(--forest)]" />
            <span className="text-xs font-medium tracking-widest uppercase text-[var(--forest)]">
              Let's talk
            </span>
          </div>
          <h2
            className={`font-display text-4xl md:text-5xl font-medium leading-tight max-w-xl transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Let's talk about
            <br />
            <em>your business</em>
          </h2>
          <p className="mt-4 text-base font-light opacity-60 max-w-lg">
            If your business is active online but growth feels unpredictable, a
            few strategic changes could transform your results. Book a
            consultation and let's explore how your digital presence can work
            better.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-16">
                <div className="w-12 h-12 rounded-full bg-[var(--forest-light)] flex items-center justify-center text-[var(--forest)]">
                  <CheckCircle size={22} />
                </div>
                <h3 className="font-display text-2xl font-medium">Message received.</h3>
                <p className="text-sm font-light opacity-60">
                  I'll review your details and get back to you within 24 hours to
                  schedule a time that works.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: 'name', label: 'Your name', type: 'text', placeholder: 'John Mwangi' },
                  { id: 'business', label: 'Business name', type: 'text', placeholder: 'Mwangi & Co.' },
                  { id: 'email', label: 'Email address', type: 'email', placeholder: 'john@business.co.ke' },
                ].map((field) => (
                  <div key={field.id}>
                    <label className="block text-xs font-medium opacity-50 mb-2 tracking-wide uppercase">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      value={(form as any)[field.id]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      className="w-full px-4 py-3.5 border border-[var(--sand)] bg-transparent text-sm font-light focus:outline-none focus:border-[var(--ink)] transition-colors placeholder-opacity-30 placeholder:text-[var(--ink)] placeholder:opacity-30"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs font-medium opacity-50 mb-2 tracking-wide uppercase">
                    What are you trying to solve?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your biggest digital marketing challenge..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3.5 border border-[var(--sand)] bg-transparent text-sm font-light focus:outline-none focus:border-[var(--ink)] transition-colors resize-none placeholder:text-[var(--ink)] placeholder:opacity-30"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full flex items-center justify-center gap-3 py-4 bg-[var(--ink)] text-[var(--cream)] text-sm font-medium hover:bg-[var(--forest)] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowRight
                        size={15}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </button>

                {error && (
                  <p className="text-xs text-red-500 text-center font-light">{error}</p>
                )}

                <p className="text-xs opacity-30 text-center font-light">
                  I respond to every message within one business day.
                </p>
              </form>
            )}
          </div>

          {/* Contact details + positioning */}
          <div className="space-y-10">

            {/* Portrait image */}
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src="/wanje_ziro.jpeg"
                alt="Wanje Ziro — Digital Growth Strategist"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--cream)]/60 to-transparent" />
            </div>

            <div>
              <p className="text-sm font-light leading-relaxed opacity-70 mb-8 border-l-2 border-[var(--forest)] pl-5">
                I work with SMEs that want their digital presence to actually generate
                results — not just look good. If that sounds like you, let's talk.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'samuelziro76@gmail.com' },
                  { icon: Phone, label: '+254 769 751 566' },
                  { icon: MapPin, label: 'Watamu, Kilifi County, Kenya' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--forest-light)] flex items-center justify-center text-[var(--forest)]">
                      <Icon size={14} />
                    </div>
                    <span className="text-sm font-light opacity-70">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who it's for */}
            <div className="border border-[var(--sand)] p-6">
              <p className="text-xs font-medium tracking-widest uppercase opacity-40 mb-4">
                This is for you if...
              </p>
              <ul className="space-y-3">
                {[
                  'You are active online but growth feels random',
                  'Your website exists but generates no leads',
                  'You want a system, not just another service',
                  'You are building something worth growing',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-light opacity-70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--forest)] mt-1.5 flex-shrink-0" />
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
