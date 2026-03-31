import type { Metadata } from "next";
import Link from "next/link";

/* ─────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Digital Marketing Watamu, Kenya | Wanje Ziro — Digital Growth Strategist",
  description:
    "Watamu's only dedicated digital growth strategist. I help hotels, restaurants, NGOs and local businesses in Watamu and Kilifi County get more clients online — through websites, SEO, and digital marketing systems that actually convert.",
  keywords: [
    "digital marketing Watamu",
    "website design Watamu Kenya",
    "SEO Watamu",
    "digital strategist Kilifi County",
    "hotel website design Watamu",
    "tourism digital marketing Kenya coast",
    "Wanje Ziro Watamu",
  ],
  openGraph: {
    title: "Digital Marketing in Watamu, Kenya | Wanje Ziro",
    description:
      "Watamu's only dedicated digital growth strategist — helping coastal businesses get predictable clients online.",
    url: "https://wanjeziro.co.ke/digital-marketing-watamu",
    siteName: "Wanje Ziro",
    locale: "en_KE",
    type: "website",
  },
};

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const sectors = [
  {
    icon: "🏨",
    title: "Hotels & Lodges",
    pain: "Paying 15–20% commission on every Booking.com reservation",
    solution:
      "A conversion-focused website + SEO system that brings direct bookings — before tourists even land in Kenya.",
    cta: "Cut your commission costs",
  },
  {
    icon: "🍽️",
    title: "Restaurants & Beach Clubs",
    pain: "Thousands of Instagram followers but empty tables on slow nights",
    solution:
      "A content-to-reservation funnel that turns social engagement into actual bookings via WhatsApp and your website.",
    cta: "Fill your tables",
  },
  {
    icon: "🤿",
    title: "Tour Operators & Water Sports",
    pain: "Relying on walk-ins, TripAdvisor and word of mouth alone",
    solution:
      "SEO + Google Ads strategy that puts your tours in front of visitors searching before they arrive in Watamu.",
    cta: "Get found first",
  },
  {
    icon: "🐢",
    title: "NGOs & Conservation Groups",
    pain: "Impactful work that struggles to attract donors and grant funders",
    solution:
      "A digital presence built to tell your story compellingly — amplifying your mission and making funding easier to find.",
    cta: "Amplify your impact",
  },
  {
    icon: "🏪",
    title: "Local SMEs & Services",
    pain: "Losing clients to competitors who simply show up higher on Google",
    solution:
      "A local SEO foundation that puts your business on the map — literally — so customers in Watamu and Kilifi find you first.",
    cta: "Outrank your competitors",
  },
  {
    icon: "🏫",
    title: "Schools & Training Centres",
    pain: "Scrambling to fill enrolment every term with no consistent pipeline",
    solution:
      "Targeted Facebook campaigns and landing pages timed to your academic calendar, turning interest into enrolments.",
    cta: "Fill every intake",
  },
];

const caseStudies = [
  {
    client: "Chef Joshua",
    category: "Coastal Kitchen · Watamu",
    result: "+70%",
    metric: "direct bookings",
    detail:
      "High engagement, zero conversions. We built a WhatsApp funnel from social content to bookings — and automated the follow-up.",
  },
  {
    client: "Tapps Broilers Enterprise",
    category: "Local Business · Watamu",
    result: "Page 1",
    metric: "Google ranking",
    detail:
      "No online presence, losing clients to visible competitors. Built a mobile-first website with local SEO — now ranking for key local searches.",
  },
  {
    client: "Dabaso Conservation",
    category: "NGO · Watamu",
    result: "3×",
    metric: "donor enquiries",
    detail:
      "Conservation work that deserved more visibility. A new website with impact storytelling that tripled inbound donor interest.",
  },
];

const whyItems = [
  {
    number: "01",
    title: "I live here",
    body: "Every agency you've spoken to is in Nairobi. I'm based in Watamu. I understand the tourism cycle, the local economy, and the businesses that make this community thrive.",
  },
  {
    number: "02",
    title: "I've already proven it locally",
    body: "Chef Joshua, Tapps Broilers, Fit Hunter, Dabaso Conservation — real Watamu clients, real measurable results. Not case studies from Nairobi. From here.",
  },
  {
    number: "03",
    title: "Systems, not just services",
    body: "I don't just post content or build a website and disappear. I build complete digital systems — visibility, conversion, retention — that compound over time.",
  },
  {
    number: "04",
    title: "You can actually meet me",
    body: "No Zoom calls required. If you want to sit down, walk through your business, and plan your digital growth face-to-face — that's exactly what I offer.",
  },
];

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
export default function WatamuPage() {
  return (
    <main className="overflow-x-hidden">

      {/* ── HERO ─────────────────────────────── */}
      <section
        className="relative min-h-[90vh] flex flex-col justify-end pb-20 pt-40 px-6"
        style={{ background: "var(--navy-900)" }}
      >
        {/* Layered coastal gradient orbs */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div
            className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, var(--navy-700) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, var(--navy-400) 0%, transparent 70%)",
            }}
          />
          {/* Diagonal rule */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, var(--navy-400) 0px, var(--navy-400) 1px, transparent 1px, transparent 60px)",
            }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto w-full">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span
              className="inline-block w-8 h-px"
              style={{ background: "var(--navy-400)" }}
            />
            <span
              className="text-xs font-semibold tracking-[0.18em] uppercase"
              style={{ color: "var(--navy-400)" }}
            >
              Watamu · Kilifi County · Kenya Coast
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8 max-w-3xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--cream)",
            }}
          >
            Watamu&apos;s{" "}
            <em
              className="not-italic"
              style={{ color: "var(--navy-400)" }}
            >
              only
            </em>{" "}
            dedicated digital growth strategist.
          </h1>

          <p
            className="text-lg sm:text-xl leading-relaxed max-w-xl mb-12"
            style={{ color: "var(--navy-100)", fontFamily: "var(--font-body)" }}
          >
            I help hotels, restaurants, NGOs and local businesses in Watamu and
            Kilifi County get more clients online — through websites, SEO, and
            marketing systems that actually convert.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/254769751566?text=Hi%20Wanje%2C%20I%27d%20like%20a%20free%20digital%20audit%20for%20my%20Watamu%20business"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "var(--navy-400)",
                color: "var(--navy-900)",
                fontFamily: "var(--font-body)",
              }}
            >
              Book a Free Local Audit
              <span aria-hidden>→</span>
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-wide border transition-all duration-200 hover:bg-white/5"
              style={{
                borderColor: "rgba(123,164,208,0.35)",
                color: "var(--navy-100)",
                fontFamily: "var(--font-body)",
              }}
            >
              See Watamu Results
            </a>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--cream))",
          }}
        />
      </section>

      {/* ── CONTEXT STRIP ─────────────────────── */}
      <section style={{ background: "var(--cream)" }} className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p
            className="text-sm font-semibold tracking-[0.14em] uppercase mb-6"
            style={{ color: "var(--navy-700)", fontFamily: "var(--font-body)" }}
          >
            The reality for Watamu businesses
          </p>
          <blockquote
            className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug max-w-3xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--navy-900)",
            }}
          >
            &ldquo;Every digital agency you&apos;ve tried was based in Nairobi.
            They didn&apos;t understand your market. I&apos;m{" "}
            <span style={{ color: "var(--navy-700)" }}>here</span>.&rdquo;
          </blockquote>
          <p
            className="mt-6 text-base leading-relaxed max-w-2xl"
            style={{
              color: "var(--ink)",
              opacity: 0.7,
              fontFamily: "var(--font-body)",
            }}
          >
            Watamu has over 50 hotels, dozens of restaurants, NGOs, tour
            operators and growing local businesses — almost none with a digital
            presence that works for them. That gap is the opportunity. And I
            help you close it.
          </p>
        </div>
      </section>

      {/* ── WHY WANJE ─────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "var(--navy-50)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span
              className="text-xs font-semibold tracking-[0.14em] uppercase"
              style={{ color: "var(--navy-700)" }}
            >
              Why work with me
            </span>
            <h2
              className="mt-3 text-3xl sm:text-4xl font-bold leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--navy-900)",
              }}
            >
              Not a Nairobi agency with a Watamu client.
              <br />A Watamu strategist.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {whyItems.map((item) => (
              <div
                key={item.number}
                className="group relative bg-white rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg"
                style={{ borderColor: "var(--navy-100)" }}
              >
                <span
                  className="block text-5xl font-bold leading-none mb-4 select-none"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--navy-100)",
                  }}
                >
                  {item.number}
                </span>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--navy-900)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "var(--ink)",
                    opacity: 0.65,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {item.body}
                </p>
                {/* Hover accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: "var(--navy-700)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTORS ───────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span
              className="text-xs font-semibold tracking-[0.14em] uppercase"
              style={{ color: "var(--navy-700)" }}
            >
              Who I help in Watamu
            </span>
            <h2
              className="mt-3 text-3xl sm:text-4xl font-bold leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--navy-900)",
              }}
            >
              Your sector. Your problem.
              <br />A system that solves it.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sectors.map((s) => (
              <div
                key={s.title}
                className="group flex flex-col bg-white rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "var(--navy-100)" }}
              >
                <div className="text-3xl mb-5">{s.icon}</div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--navy-900)",
                  }}
                >
                  {s.title}
                </h3>
                {/* Pain */}
                <div
                  className="flex gap-2 mb-4 p-3 rounded-lg"
                  style={{ background: "var(--navy-50)" }}
                >
                  <span className="text-xs mt-0.5 flex-shrink-0">⚠️</span>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--ink)", opacity: 0.6 }}
                  >
                    {s.pain}
                  </p>
                </div>
                {/* Solution */}
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{
                    color: "var(--ink)",
                    opacity: 0.75,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {s.solution}
                </p>
                {/* CTA */}
                <div className="mt-6 pt-5" style={{ borderTop: "1px solid var(--navy-100)" }}>
                  <a
                    href="https://wa.me/254769751566"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
                    style={{
                      color: "var(--navy-700)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {s.cta}
                    <span
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden
                    >
                      →
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ──────────────────────── */}
      <section
        id="case-studies"
        className="py-24 px-6"
        style={{ background: "var(--navy-900)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span
              className="text-xs font-semibold tracking-[0.14em] uppercase"
              style={{ color: "var(--navy-400)" }}
            >
              Results from Watamu
            </span>
            <h2
              className="mt-3 text-3xl sm:text-4xl font-bold leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--cream)",
              }}
            >
              Not promises. Proof.
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {caseStudies.map((c) => (
              <div
                key={c.client}
                className="relative rounded-2xl p-8 overflow-hidden border"
                style={{
                  background: "rgba(214,230,245,0.05)",
                  borderColor: "rgba(123,164,208,0.2)",
                }}
              >
                {/* Big metric */}
                <div
                  className="text-5xl font-bold leading-none mb-1"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--navy-400)",
                  }}
                >
                  {c.result}
                </div>
                <div
                  className="text-xs font-semibold tracking-wide uppercase mb-6"
                  style={{ color: "var(--navy-400)", opacity: 0.7 }}
                >
                  {c.metric}
                </div>
                <h3
                  className="text-base font-bold mb-1"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--cream)",
                  }}
                >
                  {c.client}
                </h3>
                <p
                  className="text-xs mb-4"
                  style={{ color: "var(--navy-400)", opacity: 0.7 }}
                >
                  {c.category}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "var(--navy-100)",
                    opacity: 0.7,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {c.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
              style={{
                color: "var(--navy-400)",
                fontFamily: "var(--font-body)",
              }}
            >
              View all case studies
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────── */}
      <section className="py-24 px-6" style={{ background: "var(--navy-50)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span
              className="text-xs font-semibold tracking-[0.14em] uppercase"
              style={{ color: "var(--navy-700)" }}
            >
              The process
            </span>
            <h2
              className="mt-3 text-3xl sm:text-4xl font-bold"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--navy-900)",
              }}
            >
              Simple. Structured. Effective.
            </h2>
          </div>

          <div className="relative">
            {/* Connecting line — desktop */}
            <div
              aria-hidden
              className="hidden sm:block absolute top-8 left-[calc(12.5%+12px)] right-[calc(12.5%+12px)] h-px"
              style={{ background: "var(--navy-100)" }}
            />
            <div className="grid sm:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Free Audit",
                  body: "A 20-minute call or in-person meeting. I assess your current digital presence honestly — no fluff.",
                },
                {
                  step: "2",
                  title: "Clear Strategy",
                  body: "I map out exactly what needs to be built, fixed, or launched — and in what order for fastest results.",
                },
                {
                  step: "3",
                  title: "Build & Launch",
                  body: "Website, SEO foundations, content system, funnels — executed with precision and on your timeline.",
                },
                {
                  step: "4",
                  title: "Optimise & Scale",
                  body: "Monthly reviews, data tracking and continuous improvement so your results compound over time.",
                },
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold mb-5 relative z-10"
                    style={{
                      background: "white",
                      border: "2px solid var(--navy-700)",
                      color: "var(--navy-700)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {item.step}
                  </div>
                  <h3
                    className="text-base font-bold mb-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--navy-900)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "var(--ink)",
                      opacity: 0.6,
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCAL SEO CALLOUT ─────────────────── */}
      <section className="py-16 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-3xl p-10 sm:p-14 flex flex-col sm:flex-row gap-10 items-start sm:items-center"
            style={{ background: "var(--navy-900)" }}
          >
            <div className="flex-1">
              <span
                className="text-xs font-semibold tracking-[0.14em] uppercase mb-3 block"
                style={{ color: "var(--navy-400)" }}
              >
                Local SEO fact
              </span>
              <h3
                className="text-2xl sm:text-3xl font-bold leading-snug mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--cream)",
                }}
              >
                Search &ldquo;digital marketing Watamu&rdquo; right now.
              </h3>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{
                  color: "var(--navy-100)",
                  opacity: 0.7,
                  fontFamily: "var(--font-body)",
                }}
              >
                You&apos;ll find nothing — no specialist, no agency, no one
                serving this market properly. That blank page is the opportunity
                your competitors haven&apos;t spotted yet. I help you own it
                before they do.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="https://wa.me/254769751566?text=Hi%20Wanje%2C%20I%20want%20to%20dominate%20local%20search%20in%20Watamu"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: "var(--navy-400)",
                  color: "var(--navy-900)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Claim your spot
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────── */}
      <section
        className="py-32 px-6 text-center"
        style={{ background: "var(--navy-900)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{ position: "absolute" }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(ellipse, var(--navy-700) 0%, transparent 70%)",
            }}
          />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <span
            className="text-xs font-semibold tracking-[0.14em] uppercase block mb-6"
            style={{ color: "var(--navy-400)" }}
          >
            Based in Watamu — available today
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--cream)",
            }}
          >
            Ready to be the most visible business in Watamu?
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed mb-10"
            style={{
              color: "var(--navy-100)",
              opacity: 0.7,
              fontFamily: "var(--font-body)",
            }}
          >
            Start with a free 20-minute audit — in person or on a call. I&apos;ll
            show you exactly where your digital presence is losing you clients
            and what to do about it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254769751566?text=Hi%20Wanje%2C%20I%27d%20like%20a%20free%20digital%20audit%20for%20my%20Watamu%20business"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "var(--navy-400)",
                color: "var(--navy-900)",
                fontFamily: "var(--font-body)",
              }}
            >
              WhatsApp Wanje Now
            </a>
            <a
              href="mailto:hello@wanjeziro.co.ke"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-semibold text-sm tracking-wide border transition-all duration-200 hover:bg-white/5"
              style={{
                borderColor: "rgba(123,164,208,0.35)",
                color: "var(--navy-100)",
                fontFamily: "var(--font-body)",
              }}
            >
              hello@wanjeziro.co.ke
            </a>
          </div>
          <p
            className="mt-8 text-xs"
            style={{ color: "var(--navy-400)", opacity: 0.6 }}
          >
            Watamu · Kilifi County · Kenya Coast — and growing.
          </p>
        </div>
      </section>

    </main>
  );
}