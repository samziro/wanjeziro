"use client";

import { useState } from "react";
import Link from "next/link";

/* ─────────────────────────────────────────────
   TYPES & DATA
───────────────────────────────────────────── */
type BillingMode = "monthly" | "project";

type Feature = {
  text: string;
  included: boolean;
  highlight?: boolean;
};

type Plan = {
  id: string;
  name: string;
  tagline: string;
  forWho: string;
  monthly: number;
  project: number;
  projectLabel: string;
  setupFee: string;
  featured: boolean;
  features: Feature[];
  ctaText: string;
  waMsg: string;
  guarantee: string;
};

const plans: Plan[] = [
  {
    id: "foundation",
    name: "Foundation",
    tagline: "Get found. Get credible. Get enquiries.",
    forWho: "Startups, restaurants & local SMEs",
    monthly: 18000,
    project: 35000,
    projectLabel: "website + local SEO setup",
    setupFee: "KES 10,000 setup (waived on 3-month commit)",
    featured: false,
    ctaText: "Start with Foundation",
    waMsg: "Hi Wanje, I'm interested in the Foundation package. Can we schedule a free discovery call?",
    guarantee: "Measurable results in 60 days or we keep working at no extra charge.",
    features: [
      { text: "5-page conversion-focused website", included: true },
      { text: "On-page SEO (all pages)", included: true },
      { text: "Google Business Profile setup & optimisation", included: true },
      { text: "Brand style guide (colours, fonts, logo rules)", included: true },
      { text: "WhatsApp enquiry integration", included: true },
      { text: "Monthly performance report", included: true },
      { text: "Social media management", included: false },
      { text: "Lead magnet & email capture", included: false },
      { text: "Paid ads management", included: false },
      { text: "Sales funnel & automation", included: false },
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Build the system that runs your marketing for you.",
    forWho: "Active businesses ready to scale",
    monthly: 35000,
    project: 65000,
    projectLabel: "full digital system build",
    setupFee: "Setup fee waived — includes everything in Foundation",
    featured: true,
    ctaText: "Start with Growth",
    waMsg: "Hi Wanje, I'm interested in the Growth package. Can we schedule a free discovery call?",
    guarantee: "Consistent inbound enquiries within 90 days — or I extend the retainer free.",
    features: [
      { text: "Everything in Foundation — included", included: true, highlight: true },
      { text: "Social media management (12 posts/month)", included: true },
      { text: "Content calendar & copywriting", included: true },
      { text: "Lead magnet + email capture setup", included: true },
      { text: "WhatsApp follow-up automation", included: true },
      { text: "Competitor & keyword research", included: true },
      { text: "Bi-weekly strategy check-in call", included: true },
      { text: "Paid ads management", included: false },
      { text: "Full CRM & sales pipeline", included: false },
      { text: "Advanced funnel automation", included: false },
    ],
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "Done-for-you growth. Strategy meets full execution.",
    forWho: "Hotels, NGOs & growing brands",
    monthly: 65000,
    project: 120000,
    projectLabel: "enterprise digital system",
    setupFee: "Includes full onboarding + strategy sprint at no extra cost",
    featured: false,
    ctaText: "Start with Scale",
    waMsg: "Hi Wanje, I'm interested in the Scale package. Can we schedule a free discovery call?",
    guarantee: "Full money-back on setup if we don't agree on a clear 90-day plan.",
    features: [
      { text: "Everything in Growth — included", included: true, highlight: true },
      { text: "Meta & Google Ads management", included: true },
      { text: "Full CRM + sales pipeline setup", included: true },
      { text: "Advanced funnel & automation system", included: true },
      { text: "16–20 social posts per month", included: true },
      { text: "Graphic design for all content", included: true },
      { text: "Monthly growth strategy session", included: true },
      { text: "Priority WhatsApp support (2hr response)", included: true },
      { text: "Quarterly business review", included: true },
      { text: "Dedicated account management", included: true },
    ],
  },
];

const addons = [
  { name: "Extra blog post", price: "KES 2,500", per: "per post" },
  { name: "Logo & brand identity", price: "KES 8,000", per: "one-time" },
  { name: "Single landing page", price: "KES 12,000", per: "one-time" },
  { name: "Email newsletter setup", price: "KES 6,000", per: "one-time" },
  { name: "Google Ads management", price: "KES 8,000", per: "per month" },
  { name: "WhatsApp broadcast setup", price: "KES 4,000", per: "one-time" },
  { name: "Extra social platform", price: "KES 8,000", per: "per month" },
  { name: "Photography direction", price: "KES 5,000", per: "per session" },
];

const faqs = [
  {
    q: "Do I need to sign a long-term contract?",
    a: "No. Monthly retainers run month to month and can be cancelled with 30 days written notice. The only commitment I recommend is 3 months — because that's how long it takes to see compounding results. You can verify this from my existing client results.",
  },
  {
    q: "What if I only need a website — not an ongoing retainer?",
    a: "The one-time project option is built exactly for that. You get the full build without an ongoing commitment. Many clients start here and upgrade to a retainer within 2–3 months once they see enquiries coming in.",
  },
  {
    q: "Does the price include ad spend (Facebook/Google)?",
    a: "No. Ad spend is paid directly to the platform by you — it's not included in my management fee. My fee covers strategy, setup, audience targeting, copy, and ongoing optimisation. I'll always tell you the minimum budget required before we run anything.",
  },
  {
    q: "How quickly will I see results?",
    a: "Google Business Profile optimisation starts producing results within 2–4 weeks. Website SEO typically shows movement within 60–90 days. Social media enquiries vary — but most clients see a measurable increase in DMs and enquiries within the first 30–45 days.",
  },
  {
    q: "Can I upgrade my package later?",
    a: "Always. Clients regularly start on Foundation and move to Growth or Scale as their business grows. I prorate the difference so you never pay twice for the same thing.",
  },
  {
    q: "I'm based in Watamu. Can we meet in person?",
    a: "Yes — and I encourage it. I'm based here. A face-to-face discovery meeting is often the fastest way to understand your business and present the right solution. No Zoom required.",
  },
];

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
function fmt(n: number) {
  return "KES " + n.toLocaleString();
}

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */
function CheckIcon({ included, highlight }: { included: boolean; highlight?: boolean }) {
  if (!included) {
    return (
      <span
        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5"
        style={{ background: "var(--navy-50)", color: "var(--navy-400)" }}
        aria-hidden
      >
        —
      </span>
    );
  }
  return (
    <span
      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5"
      style={{
        background: highlight ? "var(--navy-700)" : "var(--navy-100)",
        color: highlight ? "var(--cream)" : "var(--navy-700)",
        fontWeight: 700,
      }}
      aria-hidden
    >
      ✓
    </span>
  );
}

function PlanCard({
  plan,
  billing,
}: {
  plan: Plan;
  billing: BillingMode;
}) {
  const price = billing === "monthly" ? plan.monthly : plan.project;
  const waLink = `https://wa.me/254769751566?text=${encodeURIComponent(plan.waMsg)}`;

  return (
    <div
      className="relative flex flex-col rounded-3xl transition-all duration-300 hover:-translate-y-1"
      style={{
        background: plan.featured ? "var(--navy-900)" : "var(--cream)",
        border: plan.featured
          ? "2px solid var(--navy-700)"
          : "1px solid var(--navy-100)",
        boxShadow: plan.featured
          ? "0 24px 60px rgba(13,36,64,0.18)"
          : "0 2px 16px rgba(13,36,64,0.06)",
      }}
    >
      {/* Popular badge */}
      {plan.featured && (
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
          style={{
            background: "var(--navy-400)",
            color: "var(--navy-900)",
            fontFamily: "var(--font-body)",
            letterSpacing: "0.12em",
          }}
        >
          Most Popular
        </div>
      )}

      <div className="p-8 flex flex-col flex-1">

        {/* Header */}
        <div className="mb-6">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{
              fontFamily: "var(--font-body)",
              color: plan.featured ? "var(--navy-400)" : "var(--navy-700)",
            }}
          >
            {plan.forWho}
          </p>
          <h3
            className="text-2xl font-bold mb-2"
            style={{
              fontFamily: "var(--font-display)",
              color: plan.featured ? "var(--cream)" : "var(--navy-900)",
            }}
          >
            {plan.name}
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              color: plan.featured ? "var(--navy-100)" : "var(--navy-700)",
              opacity: 0.85,
            }}
          >
            {plan.tagline}
          </p>
        </div>

        {/* Price */}
        <div
          className="rounded-2xl p-5 mb-6"
          style={{
            background: plan.featured
              ? "rgba(214,230,245,0.08)"
              : "var(--navy-50)",
          }}
        >
          <div className="flex items-baseline gap-2 mb-1">
            <span
              className="text-4xl font-bold"
              style={{
                fontFamily: "var(--font-display)",
                color: plan.featured ? "var(--navy-400)" : "var(--navy-900)",
              }}
            >
              {fmt(price)}
            </span>
            <span
              className="text-sm"
              style={{
                fontFamily: "var(--font-body)",
                color: plan.featured ? "var(--navy-400)" : "var(--navy-700)",
                opacity: 0.7,
              }}
            >
              {billing === "monthly" ? "/ month" : " one-time"}
            </span>
          </div>
          <p
            className="text-xs leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              color: plan.featured ? "var(--navy-400)" : "var(--navy-700)",
              opacity: 0.65,
            }}
          >
            {billing === "monthly" ? plan.setupFee : plan.projectLabel}
          </p>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8 flex-1">
          {plan.features.map((f, i) => (
            <li key={i} className="flex gap-3 items-start">
              <CheckIcon included={f.included} highlight={f.highlight} />
              <span
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "var(--font-body)",
                  color: f.included
                    ? plan.featured
                      ? f.highlight ? "var(--navy-400)" : "var(--navy-100)"
                      : f.highlight ? "var(--navy-700)" : "var(--ink)"
                    : plan.featured
                    ? "rgba(214,230,245,0.25)"
                    : "var(--navy-400)",
                  fontWeight: f.highlight ? 600 : 400,
                  opacity: f.included ? 1 : 0.5,
                }}
              >
                {f.text}
              </span>
            </li>
          ))}
        </ul>

        {/* Guarantee */}
        <div
          className="flex gap-2 items-start mb-6 p-4 rounded-xl"
          style={{
            background: plan.featured
              ? "rgba(123,164,208,0.1)"
              : "var(--navy-100)",
          }}
        >
          <span className="text-sm flex-shrink-0 mt-0.5">🤝</span>
          <p
            className="text-xs leading-relaxed italic"
            style={{
              fontFamily: "var(--font-body)",
              color: plan.featured ? "var(--navy-400)" : "var(--navy-700)",
            }}
          >
            {plan.guarantee}
          </p>
        </div>

        {/* CTA */}
        <a
          href={waLink}
          className="block w-full py-4 rounded-2xl text-center font-bold text-sm tracking-wide transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          style={{
            fontFamily: "var(--font-body)",
            background: plan.featured ? "var(--navy-400)" : "var(--navy-900)",
            color: plan.featured ? "var(--navy-900)" : "var(--cream)",
            letterSpacing: "0.04em",
          }}
        >
          {plan.ctaText} →
        </a>

        <p
          className="text-center text-xs mt-3"
          style={{
            fontFamily: "var(--font-body)",
            color: plan.featured ? "var(--navy-400)" : "var(--navy-700)",
            opacity: 0.5,
          }}
        >
          Free discovery call — no obligation
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function PricingPage() {
  const [billing, setBilling] = useState<BillingMode>("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="overflow-x-hidden" style={{ background: "var(--cream)" }}>

      {/* ── HERO ─────────────────────────────── */}
      <section
        className="relative pt-36 pb-24 px-6 overflow-hidden"
        style={{ background: "var(--navy-900)" }}
      >
        {/* Background texture */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, var(--navy-700) 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full opacity-8"
            style={{ background: "radial-gradient(circle, var(--navy-400) 0%, transparent 70%)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "repeating-linear-gradient(135deg, var(--navy-400) 0px, var(--navy-400) 1px, transparent 1px, transparent 80px)",
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="inline-block w-8 h-px" style={{ background: "var(--navy-400)" }} />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ fontFamily: "var(--font-body)", color: "var(--navy-400)" }}
            >
              Transparent pricing · No hidden fees
            </span>
            <span className="inline-block w-8 h-px" style={{ background: "var(--navy-400)" }} />
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--cream)" }}
          >
            Invest in systems
            <br />
            <em className="not-italic" style={{ color: "var(--navy-400)" }}>
              that compound.
            </em>
          </h1>

          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--navy-100)",
              opacity: 0.75,
            }}
          >
            Every package starts with a free 20-minute discovery call. You will know
            exactly what you are getting, what it will cost, and what results to expect
            — before committing a single shilling.
          </p>

          {/* Social proof strip */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { num: "4+", label: "Watamu businesses served" },
              { num: "70%", label: "avg. booking increase" },
              { num: "60–90", label: "days to first results" },
              { num: "0", label: "Nairobi agencies" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-2xl font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--navy-400)" }}
                >
                  {s.num}
                </div>
                <div
                  className="text-xs mt-1"
                  style={{ fontFamily: "var(--font-body)", color: "var(--navy-400)", opacity: 0.55 }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, var(--cream))" }}
        />
      </section>

      {/* ── BILLING TOGGLE ────────────────────── */}
      <section className="pt-16 pb-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-4">
          <button
            onClick={() => setBilling("monthly")}
            className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
            style={{
              fontFamily: "var(--font-body)",
              background: billing === "monthly" ? "var(--navy-900)" : "transparent",
              color: billing === "monthly" ? "var(--cream)" : "var(--navy-700)",
              border: billing === "monthly" ? "1px solid var(--navy-900)" : "1px solid var(--navy-100)",
            }}
          >
            Monthly retainer
          </button>
          <button
            onClick={() => setBilling("project")}
            className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
            style={{
              fontFamily: "var(--font-body)",
              background: billing === "project" ? "var(--navy-900)" : "transparent",
              color: billing === "project" ? "var(--cream)" : "var(--navy-700)",
              border: billing === "project" ? "1px solid var(--navy-900)" : "1px solid var(--navy-100)",
            }}
          >
            One-time project
          </button>
          {billing === "project" && (
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                fontFamily: "var(--font-body)",
                background: "var(--navy-100)",
                color: "var(--navy-700)",
              }}
            >
              No monthly commitment
            </span>
          )}
        </div>
      </section>

      {/* ── PLANS GRID ────────────────────────── */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} billing={billing} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────── */}
      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-10"
            style={{ background: "var(--navy-50)", border: "1px solid var(--navy-100)" }}
          >
            <div className="text-3xl flex-shrink-0">🛡️</div>
            <div className="flex-1 text-center sm:text-left">
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "var(--font-display)", color: "var(--navy-900)" }}
              >
                The Wanje Ziro Guarantee
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "var(--navy-700)", opacity: 0.8 }}
              >
                Every engagement starts with a written scope of work. 50% deposit to begin,
                50% on completion. If I don't deliver what I promised, I fix it at no extra charge.
                No hiding behind "market conditions." If the work doesn't perform, I keep working.
              </p>
            </div>
            <a
              href="https://wa.me/254769751566?text=Hi%20Wanje%2C%20I%27d%20like%20to%20book%20a%20free%20discovery%20call."
              className="flex-shrink-0 px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-[1.02] whitespace-nowrap"
              style={{
                fontFamily: "var(--font-body)",
                background: "var(--navy-900)",
                color: "var(--cream)",
              }}
            >
              Book Free Call →
            </a>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ──────────────────── */}
      <section className="py-20 px-6" style={{ background: "var(--navy-900)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="text-xs font-semibold tracking-widest uppercase block mb-4"
              style={{ fontFamily: "var(--font-body)", color: "var(--navy-400)" }}
            >
              Compare packages
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--cream)" }}
            >
              What is right for your business?
            </h2>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th
                    className="text-left py-4 pr-6 text-sm font-semibold"
                    style={{ fontFamily: "var(--font-body)", color: "var(--navy-400)", width: "40%" }}
                  >
                    Feature
                  </th>
                  {plans.map((p) => (
                    <th
                      key={p.id}
                      className="text-center py-4 px-4 text-sm font-bold"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: p.featured ? "var(--navy-400)" : "var(--navy-100)",
                        background: p.featured ? "rgba(214,230,245,0.05)" : "transparent",
                        borderRadius: p.featured ? "12px 12px 0 0" : "0",
                      }}
                    >
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  "Professional website",
                  "On-page SEO",
                  "Google Business Profile",
                  "Monthly reporting",
                  "Social media management",
                  "Content calendar & copy",
                  "Lead magnet & email capture",
                  "WhatsApp automation",
                  "Paid ads management",
                  "Full funnel & CRM",
                  "Dedicated strategy sessions",
                  "Priority support",
                ].map((feature, i) => {
                  const rowData: Record<string, boolean> = {
                    "Professional website":          true,
                    "On-page SEO":                   true,
                    "Google Business Profile":       true,
                    "Monthly reporting":             true,
                    "Social media management":       false,
                    "Content calendar & copy":       false,
                    "Lead magnet & email capture":   false,
                    "WhatsApp automation":           false,
                    "Paid ads management":           false,
                    "Full funnel & CRM":             false,
                    "Dedicated strategy sessions":   false,
                    "Priority support":              false,
                  };
                  const growthData: Record<string, boolean> = {
                    "Professional website":          true,
                    "On-page SEO":                   true,
                    "Google Business Profile":       true,
                    "Monthly reporting":             true,
                    "Social media management":       true,
                    "Content calendar & copy":       true,
                    "Lead magnet & email capture":   true,
                    "WhatsApp automation":           true,
                    "Paid ads management":           false,
                    "Full funnel & CRM":             false,
                    "Dedicated strategy sessions":   false,
                    "Priority support":              false,
                  };
                  const scaleData: Record<string, boolean> = {
                    "Professional website":          true,
                    "On-page SEO":                   true,
                    "Google Business Profile":       true,
                    "Monthly reporting":             true,
                    "Social media management":       true,
                    "Content calendar & copy":       true,
                    "Lead magnet & email capture":   true,
                    "WhatsApp automation":           true,
                    "Paid ads management":           true,
                    "Full funnel & CRM":             true,
                    "Dedicated strategy sessions":   true,
                    "Priority support":              true,
                  };
                  const checks = [rowData[feature], growthData[feature], scaleData[feature]];

                  return (
                    <tr
                      key={feature}
                      style={{ borderBottom: "1px solid rgba(214,230,245,0.08)" }}
                    >
                      <td
                        className="py-3.5 pr-6 text-sm"
                        style={{ fontFamily: "var(--font-body)", color: "var(--navy-100)", opacity: 0.7 }}
                      >
                        {feature}
                      </td>
                      {checks.map((included, j) => (
                        <td
                          key={j}
                          className="py-3.5 px-4 text-center text-sm"
                          style={{
                            background: j === 1 ? "rgba(214,230,245,0.04)" : "transparent",
                            color: included ? "var(--navy-400)" : "rgba(214,230,245,0.15)",
                          }}
                        >
                          {included ? "✓" : "—"}
                        </td>
                      ))}
                    </tr>
                  );
                })}
                {/* Price row */}
                <tr style={{ borderTop: "1px solid rgba(214,230,245,0.15)" }}>
                  <td
                    className="pt-6 pr-6 text-sm font-bold"
                    style={{ fontFamily: "var(--font-body)", color: "var(--navy-400)" }}
                  >
                    {billing === "monthly" ? "Monthly retainer" : "One-time project"}
                  </td>
                  {plans.map((p) => (
                    <td
                      key={p.id}
                      className="pt-6 px-4 text-center font-bold"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "18px",
                        color: p.featured ? "var(--navy-400)" : "var(--cream)",
                        background: p.featured ? "rgba(214,230,245,0.05)" : "transparent",
                        borderRadius: p.featured ? "0 0 12px 12px" : "0",
                      }}
                    >
                      {fmt(billing === "monthly" ? p.monthly : p.project)}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── ADD-ONS ───────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ fontFamily: "var(--font-body)", color: "var(--navy-700)" }}
            >
              Add-on services
            </span>
            <h2
              className="mt-3 text-3xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--navy-900)" }}
            >
              Need something specific?
            </h2>
            <p
              className="mt-2 text-sm leading-relaxed max-w-lg"
              style={{ fontFamily: "var(--font-body)", color: "var(--navy-700)", opacity: 0.7 }}
            >
              Add any of these to your package. All add-ons are agreed upfront —
              no surprise invoices.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {addons.map((a) => (
              <div
                key={a.name}
                className="rounded-2xl p-5 transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "var(--cream)",
                  border: "1px solid var(--navy-100)",
                }}
              >
                <p
                  className="text-sm font-semibold mb-2"
                  style={{ fontFamily: "var(--font-body)", color: "var(--navy-900)" }}
                >
                  {a.name}
                </p>
                <p
                  className="text-base font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--navy-700)" }}
                >
                  {a.price}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ fontFamily: "var(--font-body)", color: "var(--navy-700)", opacity: 0.5 }}
                >
                  {a.per}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ───────────────────────── */}
      <section
        className="py-20 px-6"
        style={{ background: "var(--navy-50)", borderTop: "1px solid var(--navy-100)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="text-6xl font-bold mb-6 opacity-15 leading-none"
            style={{ fontFamily: "var(--font-display)", color: "var(--navy-900)" }}
          >
            "
          </div>
          <blockquote
            className="text-xl sm:text-2xl font-bold leading-snug mb-8"
            style={{ fontFamily: "var(--font-display)", color: "var(--navy-900)" }}
          >
            Before working with Wanje, we were posting every day and getting likes —
            but zero bookings from it. Within 90 days of launching our new website
            and funnel, our direct bookings increased by 70%.
          </blockquote>
          <cite
            className="not-italic text-sm font-semibold"
            style={{ fontFamily: "var(--font-body)", color: "var(--navy-700)" }}
          >
            — Chef Joshua,{" "}
            <span style={{ fontWeight: 400, opacity: 0.65 }}>Coastal Kitchen · Watamu</span>
          </cite>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--navy-900)" }}
            >
              Common questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden transition-all duration-200"
                style={{
                  background: openFaq === i ? "var(--navy-900)" : "var(--cream)",
                  border: openFaq === i ? "1px solid var(--navy-700)" : "1px solid var(--navy-100)",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4"
                >
                  <span
                    className="text-sm font-semibold leading-snug"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: openFaq === i ? "var(--cream)" : "var(--navy-900)",
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-transform duration-200"
                    style={{
                      background: openFaq === i ? "var(--navy-700)" : "var(--navy-100)",
                      color: openFaq === i ? "var(--cream)" : "var(--navy-700)",
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div
                    className="px-6 pb-6 text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--navy-100)",
                      opacity: 0.8,
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────── */}
      <section
        className="py-32 px-6 relative overflow-hidden"
        style={{ background: "var(--navy-900)" }}
      >
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, var(--navy-700) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-2xl mx-auto text-center">
          <span
            className="text-xs font-semibold tracking-widest uppercase block mb-6"
            style={{ fontFamily: "var(--font-body)", color: "var(--navy-400)" }}
          >
            Based in Watamu · Available today
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--cream)" }}
          >
            Not sure which package
            <br />is right for you?
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed mb-4"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--navy-100)",
              opacity: 0.7,
            }}
          >
            Start with the free Digital Health Check. It takes 5 minutes,
            scores your website, SEO, social media, and funnel —
            and tells you exactly where to start.
          </p>
          <p
            className="text-sm mb-12"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--navy-400)",
              opacity: 0.6,
            }}
          >
            Or skip straight to a 20-minute call. No pitch. Just an honest
            look at your business and what the right investment looks like.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/digital-health-check"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                fontFamily: "var(--font-body)",
                background: "var(--navy-400)",
                color: "var(--navy-900)",
              }}
            >
              Take the Free Health Check
            </Link>
            <a
              href="https://wa.me/254769751566?text=Hi%20Wanje%2C%20I%27d%20like%20to%20book%20a%20free%20discovery%20call%20to%20discuss%20pricing."
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-bold text-sm tracking-wide border transition-all duration-200 hover:bg-white/5"
              style={{
                fontFamily: "var(--font-body)",
                borderColor: "rgba(123,164,208,0.3)",
                color: "var(--navy-100)",
              }}
            >
              Book a Free Discovery Call
            </a>
          </div>

          <p
            className="mt-8 text-xs"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--navy-400)",
              opacity: 0.4,
            }}
          >
            Watamu · Kilifi County · Kenya Coast
          </p>
        </div>
      </section>
    </main>
  );
}