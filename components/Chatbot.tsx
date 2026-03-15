'use client'
import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Loader2, Bot } from 'lucide-react'
import Image from 'next/image'

// ── Site knowledge injected as system context ──────────────────────────────
const SYSTEM_PROMPT = `You are Wanje, a friendly AI assistant on the personal website of Wanje Ziro — a Digital Growth Strategist based in Watamu, Kenya.

Your job is to answer questions from potential clients about Wanje's services, process, pricing approach, and background. Always be warm, concise, and professional. Never make up specific pricing numbers — instead, encourage them to book a free strategy call.

Here is everything you know about Wanje Ziro:

ABOUT:
- Full name: Wanje Ziro
- Title: Digital Growth Strategist for SMEs
- Location: Watamu, Kilifi County, Kenya
- Focus: Helping SMEs build structured digital systems that turn online presence into consistent customers
- Background: 3+ years building websites and digital marketing systems. 10+ projects delivered.

CORE PHILOSOPHY:
- Activity is not the same as strategy. Most SMEs post content, run ads, and have websites — but sales remain unpredictable because they lack a structured system.
- Wanje bridges the gap between visibility and conversion.

THE DIGITAL GROWTH FRAMEWORK (4 stages):
1. Clarity — Identify the right customer and define a clear value proposition
2. Visibility — Build strategic online presence through content, SEO, and digital platforms
3. Conversion — Turn traffic into leads using funnels, messaging, and user experience
4. Optimisation — Track data, improve results, and scale what works

SERVICES:
1. Digital Growth Systems — Full marketing funnel design, lead capture, email automation, conversion tracking
2. High-Performance Websites — Conversion-focused, SEO-optimised, mobile-first website design and development
3. Digital Marketing Strategy — Audience research, channel strategy, content planning, KPI framework
4. Brand & Content Development — Brand identity, messaging framework, content templates, visual guidelines

WHO WANJE WORKS WITH:
- SMEs struggling with digital growth
- Businesses launching new websites
- Brands needing marketing structure
- Businesses that are active online but not getting consistent customers

WHO WANJE DOES NOT WORK WITH:
- People looking for cheap, quick websites with no strategy
- Businesses not serious about growth

CASE STUDIES (examples):
- Watamu Fitness Center: Built a modern website with optimised UX → 3× increase in online enquiries, first page Google ranking
- Coastal SME Collective: Designed a structured marketing strategy → 40% reduction in wasted ad spend
- Local Hospitality Brand: Built a lead capture funnel from social to WhatsApp booking → 60% improvement in enquiry-to-booking rate

CONTACT:
- Email: samuelziro76@gmail.com
- Phone: +254 769 751 566
- Book a strategy call via the contact form on the website

PRICING:
- Wanje does not publish fixed prices because every project is scoped individually
- Encourage the visitor to book a free 20-minute strategy call to discuss their specific needs

If someone asks something outside of Wanje's business (e.g. unrelated topics), politely redirect them back to how you can help with their digital growth.

Always end responses with a gentle next step — either booking a call, sending a message, or asking a follow-up question.`

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const SUGGESTED_QUESTIONS = [
  'What services do you offer?',
  'How does the framework work?',
  'Who do you work with?',
  'How do I get started?',
]

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi there! I'm Wanje's AI assistant. I can answer questions about services, the Digital Growth Framework, past work, or how to get started. What would you like to know?",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return

    const userMsg: Message = { role: 'user', content: text.trim() }
    const updated = [...messages, userMsg]
    setMessages(updated)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updated }),
      })

      const data = await res.json()

      if (data.error) throw new Error(data.error)

      setMessages([...updated, { role: 'assistant', content: data.reply }])
    } catch {
      setMessages([
        ...updated,
        {
          role: 'assistant',
          content:
            "Sorry, I'm having a moment! You can reach Wanje directly at wanje@wanjeziro.com or via the contact form below.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Chat window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[350px] max-w-[calc(100vw-2rem)] flex flex-col bg-[var(--cream)] border border-[var(--sand)] shadow-2xl transition-all duration-300 origin-bottom-right ${
          open ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-90 opacity-0 pointer-events-none'
        }`}
        style={{ height: '520px', borderRadius: '2px' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-[var(--ink)] text-[var(--cream)]">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
              <Image src="/wanje.jpg" alt="Wanje" fill className="object-cover object-top" />
            </div>
            <div>
              <p className="text-sm font-medium leading-tight">Wanje's Assistant</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--forest)] inline-block" />
                <span className="text-[10px] opacity-50 font-light">Online now</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="opacity-50 hover:opacity-100 transition-opacity"
          >
            <X size={16} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'assistant' && (
                <div className="w-6 h-6 rounded-full bg-[var(--forest-light)] flex items-center justify-center text-[var(--forest)] mr-2 mt-0.5 flex-shrink-0">
                  <Bot size={12} />
                </div>
              )}
              <div
                className={`max-w-[80%] px-4 py-3 text-sm font-light leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-[var(--ink)] text-[var(--cream)]'
                    : 'bg-white border border-[var(--sand)] text-[var(--ink)]'
                }`}
                style={{ borderRadius: '2px' }}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="w-6 h-6 rounded-full bg-[var(--forest-light)] flex items-center justify-center text-[var(--forest)] mr-2 flex-shrink-0">
                <Bot size={12} />
              </div>
              <div
                className="px-4 py-3 bg-white border border-[var(--sand)] flex items-center gap-1.5"
                style={{ borderRadius: '2px' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--ink)] opacity-40 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--ink)] opacity-40 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--ink)] opacity-40 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Suggested questions — shown only at start */}
        {messages.length === 1 && (
          <div className="px-4 pb-3 flex flex-wrap gap-2">
            {SUGGESTED_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="text-[11px] font-light px-3 py-1.5 border border-[var(--sand)] text-[var(--ink)] hover:border-[var(--ink)] hover:bg-[var(--sand)] transition-colors"
                style={{ borderRadius: '2px' }}
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="px-4 pb-4 pt-2 border-t border-[var(--sand)]">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
              placeholder="Ask anything…"
              className="flex-1 px-4 py-2.5 border border-[var(--sand)] bg-transparent text-sm font-light focus:outline-none focus:border-[var(--ink)] transition-colors placeholder:text-[var(--ink)] placeholder:opacity-30"
              style={{ borderRadius: '2px' }}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || loading}
              className="w-10 h-10 flex items-center justify-center bg-[var(--ink)] text-[var(--cream)] hover:bg-[var(--forest)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
              style={{ borderRadius: '2px' }}
            >
              {loading ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
            </button>
          </div>
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[var(--ink)] text-[var(--cream)] flex items-center justify-center hover:bg-[var(--forest)] transition-colors duration-300 shadow-xl"
        style={{ borderRadius: '2px' }}
        aria-label="Open chat"
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}

        {/* Pulse ring */}
        {!open && (
          <span className="absolute w-14 h-14 rounded-sm border border-[var(--ink)] animate-ping opacity-30" />
        )}
      </button>
    </>
  )
}
