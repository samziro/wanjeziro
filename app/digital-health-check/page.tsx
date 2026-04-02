"use client";

import { useState } from "react";

/* ─────────────────────────────────────────────
   TYPES & DATA
───────────────────────────────────────────── */
type Question = {
  id: string;
  category: string;
  text: string;
  options: { label: string; score: number; detail: string }[];
};

type Result = {
  range: [number, number];
  label: string;
  headline: string;
  body: string;
  urgency: "critical" | "moderate" | "good";
};

const questions: Question[] = [
  // WEBSITE
  {
    id: "website_exists",
    category: "Website",
    text: "Does your business have a website?",
    options: [
      { label: "Yes — professional, mobile-friendly", score: 10, detail: "" },
      { label: "Yes — but outdated or basic", score: 4, detail: "" },
      { label: "Just a Facebook page", score: 2, detail: "" },
      { label: "No website at all", score: 0, detail: "" },
    ],
  },
  {
    id: "website_leads",
    category: "Website",
    text: "How many enquiries does your website generate per month?",
    options: [
      { label: "10 or more", score: 10, detail: "" },
      { label: "3–9 enquiries", score: 6, detail: "" },
      { label: "1–2 enquiries", score: 3, detail: "" },
      { label: "None / I don't track it", score: 0, detail: "" },
    ],
  },
  {
    id: "website_speed",
    category: "Website",
    text: "How fast does your website load on mobile?",
    options: [
      { label: "Under 3 seconds", score: 10, detail: "" },
      { label: "3–5 seconds", score: 6, detail: "" },
      { label: "Slow — I've had complaints", score: 2, detail: "" },
      { label: "I have no idea", score: 1, detail: "" },
    ],
  },
  // SEO
  {
    id: "google_visibility",
    category: "SEO",
    text: "Where does your business appear on Google for your main service in Watamu?",
    options: [
      { label: "Page 1 — top 3 results", score: 10, detail: "" },
      { label: "Page 1 — lower results", score: 7, detail: "" },
      { label: "Page 2 or 3", score: 3, detail: "" },
      { label: "Can't find it / never checked", score: 0, detail: "" },
    ],
  },
  {
    id: "google_business",
    category: "SEO",
    text: "Do you have a Google Business Profile set up and optimised?",
    options: [
      { label: "Yes — fully filled out with photos & reviews", score: 10, detail: "" },
      { label: "Yes — basic / incomplete", score: 5, detail: "" },
      { label: "It exists but I've never managed it", score: 2, detail: "" },
      { label: "No Google Business Profile", score: 0, detail: "" },
    ],
  },
  {
    id: "seo_content",
    category: "SEO",
    text: "Do you publish regular content (blog, articles, updates) on your website?",
    options: [
      { label: "Yes — at least twice a month", score: 10, detail: "" },
      { label: "Occasionally — a few times a year", score: 4, detail: "" },
      { label: "Rarely or never", score: 1, detail: "" },
      { label: "My website has no blog or content section", score: 0, detail: "" },
    ],
  },
  // SOCIAL MEDIA
  {
    id: "social_consistency",
    category: "Social Media",
    text: "How consistently do you post on social media?",
    options: [
      { label: "3+ times per week, every week", score: 10, detail: "" },
      { label: "1–2 times per week", score: 7, detail: "" },
      { label: "When I remember to — very inconsistent", score: 3, detail: "" },
      { label: "We have accounts but rarely post", score: 0, detail: "" },
    ],
  },
  {
    id: "social_leads",
    category: "Social Media",
    text: "How often do your social media posts lead to actual enquiries or sales?",
    options: [
      { label: "Regularly — it's a main source of leads", score: 10, detail: "" },
      { label: "Sometimes — a few leads per month", score: 6, detail: "" },
      { label: "Rarely — mostly likes but no conversions", score: 2, detail: "" },
      { label: "Never — we just post to stay active", score: 0, detail: "" },
    ],
  },
  // LEADS & FUNNEL
  {
    id: "lead_capture",
    category: "Marketing Funnel",
    text: "Do you have a system to capture leads from people who visit your website but don't immediately buy?",
    options: [
      { label: "Yes — email list, lead magnet, or WhatsApp opt-in", score: 10, detail: "" },
      { label: "Just a contact form", score: 4, detail: "" },
      { label: "No — visitors just leave", score: 0, detail: "" },
      { label: "I'm not sure what this means", score: 0, detail: "" },
    ],
  },
  {
    id: "followup",
    category: "Marketing Funnel",
    text: "When someone enquires, how do you follow up?",
    options: [
      { label: "Automated — they get a sequence immediately", score: 10, detail: "" },
      { label: "I respond manually within the same day", score: 6, detail: "" },
      { label: "Within a few days when I remember", score: 2, detail: "" },
      { label: "No structured follow-up process", score: 0, detail: "" },
    ],
  },
];

const results: Result[] = [
  {
    range: [0, 35],
    label: "Critical — Foundation Missing",
    headline: "Your digital presence is costing you clients every day.",
    body: "You're likely invisible on Google, missing enquiries from your website, and losing potential clients to competitors who have a basic digital setup. The good news: the gap between where you are and meaningful results is smaller than you think.",
    urgency: "critical",
  },
  {
    range: [36, 60],
    label: "Moderate — Solid Base, Gaps Hurting Growth",
    headline: "You're online, but you're leaving real money on the table.",
    body: "You have some digital presence but key systems are missing or underperforming. Your website may exist but not convert, your SEO is likely weak, and leads are slipping through the cracks. Fixing the top 2–3 gaps could double your online enquiries.",
    urgency: "moderate",
  },
  {
    range: [61, 80],
    label: "Good — Optimise to Scale",
    headline: "Strong foundation. Now it's time to systematise and scale.",
    body: "You're doing better than most Watamu businesses digitally. The next phase is about closing the remaining gaps, building consistent content systems, and creating the compound growth that comes from a fully joined-up digital strategy.",
    urgency: "good",
  },
  {
    range: [81, 100],
    label: "Advanced — Fine-Tune and Expand",
    headline: "You're ahead of the curve. Let's push further.",
    body: "Your digital presence is genuinely strong. The opportunity now is to optimise conversion rates, expand into new channels, or use your strong foundation to grow into new markets along the Coast.",
    urgency: "good",
  },
];

const categoryIcons: Record<string, string> = {
  "Website": "ri-global-line",
  "SEO": "ri-search-line",
  "Social Media": "ri-smartphone-line",
  "Marketing Funnel": "ri-arrow-right-up-line",
};

const urgencyStyles = {
  critical: {
    bg: "var(--navy-900)",
    text: "var(--cream)",
    badge: "#e84545",
    badgeText: "#fff",
  },
  moderate: {
    bg: "#1a2a1a",
    text: "var(--cream)",
    badge: "var(--navy-400)",
    badgeText: "var(--navy-900)",
  },
  good: {
    bg: "var(--navy-900)",
    text: "var(--cream)",
    badge: "#4caf72",
    badgeText: "#fff",
  },
};

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function DigitalHealthCheckPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [stage, setStage] = useState<"intro" | "quiz" | "details" | "result">("intro");
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [phone, setPhone] = useState("");

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQ];
  const progress = ((currentQ) / totalQuestions) * 100;

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const maxPossible = questions.length * 10;
  const percentage = Math.round((totalScore / maxPossible) * 100);

  const currentResult = results.find(
    (r) => percentage >= r.range[0] && percentage <= r.range[1]
  ) ?? results[0];

  // Category scores
  const categoryScores: Record<string, { score: number; max: number }> = {};
  questions.forEach((q) => {
    if (!categoryScores[q.category]) {
      categoryScores[q.category] = { score: 0, max: 0 };
    }
    categoryScores[q.category].max += 10;
    if (answers[q.id] !== undefined) {
      categoryScores[q.category].score += answers[q.id];
    }
  });

  function handleAnswer(score: number) {
    setSelectedOption(score);
  }

  function handleNext() {
    if (selectedOption === null) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: selectedOption }));
    setSelectedOption(null);
    if (currentQ + 1 < totalQuestions) {
      setCurrentQ((q) => q + 1);
    } else {
      setStage("details");
    }
  }

  function handleSubmit() {
    setStage("result");
  }

  const waMessage = encodeURIComponent(
    `Hi Wanje! I just completed the Digital Health Check. My score was ${percentage}% (${currentResult.label}). My name is ${name}, business: ${business}. I'd like to discuss how to improve my digital presence.`
  );

  /* ── INTRO ────────────────────────────────── */
  if (stage === "intro") {
    return (
      <main className="min-h-screen px-6 py-20" style={{ background: "var(--cream)" }}>
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.12em] uppercase mb-8"
              style={{
                background: "var(--navy-50)",
                color: "var(--navy-700)",
                border: "1px solid var(--navy-100)",
              }}
            >
              🩺 Free Assessment · 5 Minutes
            </div>
            <h1
              className="text-4xl sm:text-5xl font-bold leading-tight mb-5"
              style={{ fontFamily: "var(--font-display)", color: "var(--navy-900)" }}
            >
              Free Digital Health Check
              <br />
              <span style={{ color: "var(--navy-700)" }}>for Watamu Businesses</span>
            </h1>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{
                color: "var(--ink)",
                opacity: 0.65,
                fontFamily: "var(--font-body)",
              }}
            >
              10 questions. A personalised score. A clear picture of where you
              stand online — and exactly what to fix first.
            </p>
          </div>

          {/* What you'll learn */}
          <div
            className=" p-8 sm:p-10 mb-8"
            style={{
              background: "var(--navy-900)",
            }}
          >
            <p
              className="text-xs font-semibold tracking-[0.14em] uppercase mb-6"
              style={{ color: "var(--navy-400)" }}
            >
              What you'll discover
            </p>
            <div className="space-y-5">
              {[
                {
                  icon: "ri-global-line ",
                  title: "Website Score",
                  body: "Is your website actually converting visitors into clients?",
                },
                {
                  icon: "ri-search-line ",
                  title: "SEO Score",
                  body: "Can the right people find you on Google?",
                },
                {
                  icon: "ri-smartphone-line ",
                  title: "Social Media Score",
                  body: "Is your content driving business or just collecting likes?",
                },
                {
                  icon: "ri-arrow-right-up-line",
                  title: "Marketing Funnel Score",
                  body: "Are you capturing and following up on every potential lead?",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <span className="text-xl flex-shrink-0 mt-0.5"><i className={item.icon}></i></span>
                  <div>
                    <p
                      className="text-sm font-semibold mb-1"
                      style={{ color: "var(--cream)", fontFamily: "var(--font-body)" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="text-sm"
                      style={{
                        color: "var(--navy-100)",
                        opacity: 0.6,
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setStage("quiz")}
            className="w-1/2 mx-auto py-5 font-semibold text-base tracking-wide transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
            style={{
              background: "var(--navy-900)",
              color: "var(--cream)",
              fontFamily: "var(--font-body)",
            }}
          >
            Start the Health Check →
          </button>
          <p
            className="text-center text-xs mt-4"
            style={{ color: "var(--navy-700)", opacity: 0.5 }}
          >
            Free · No email required until the end · 5 minutes
          </p>
        </div>
      </main>
    );
  }

  /* ── QUIZ ─────────────────────────────────── */
  if (stage === "quiz") {
    return (
      <main className="min-h-screen px-6 py-16" style={{ background: "var(--cream)" }}>
        <div className="max-w-xl mx-auto">
          {/* Progress */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              <span
                className="text-xs font-semibold tracking-wide"
                style={{ color: "var(--navy-700)", fontFamily: "var(--font-body)" }}
              >
                {categoryIcons[currentQuestion.category]} {currentQuestion.category}
              </span>
              <span
                className="text-xs"
                style={{ color: "var(--navy-700)", opacity: 0.5 }}
              >
                {currentQ + 1} / {totalQuestions}
              </span>
            </div>
            <div
              className="h-1.5 rounded-full overflow-hidden"
              style={{ background: "var(--navy-100)" }}
            >
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${progress}%`,
                  background: "var(--navy-700)",
                }}
              />
            </div>
          </div>

          {/* Question */}
          <h2
            className="text-xl sm:text-2xl font-bold leading-snug mb-8"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--navy-900)",
            }}
          >
            {currentQuestion.text}
          </h2>

          {/* Options */}
          <div className="space-y-3 mb-10">
            {currentQuestion.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(opt.score)}
                className="w-full text-left p-5 rounded-2xl border transition-all duration-150 hover:border-[var(--navy-700)]"
                style={{
                  background:
                    selectedOption === opt.score
                      ? "var(--navy-900)"
                      : "white",
                  borderColor:
                    selectedOption === opt.score
                      ? "var(--navy-900)"
                      : "var(--navy-100)",
                  color:
                    selectedOption === opt.score
                      ? "var(--cream)"
                      : "var(--navy-900)",
                  fontFamily: "var(--font-body)",
                }}
              >
                <span
                  className="text-sm font-medium"
                  style={{ lineHeight: 1.5 }}
                >
                  {opt.label}
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className="w-full py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-[1.01]"
            style={{
              background: "var(--navy-900)",
              color: "var(--cream)",
              fontFamily: "var(--font-body)",
            }}
          >
            {currentQ + 1 === totalQuestions ? "See My Results →" : "Next Question →"}
          </button>
        </div>
      </main>
    );
  }

  /* ── DETAILS FORM ─────────────────────────── */
  if (stage === "details") {
    return (
      <main className="min-h-screen px-6 py-20" style={{ background: "var(--cream)" }}>
        <div className="max-w-md mx-auto">
          <div className="text-center mb-10">
            <div className="text-4xl mb-4"><i className="ri-check-double-fill"></i></div>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-3"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--navy-900)",
              }}
            >
              Almost there!
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{
                color: "var(--ink)",
                opacity: 0.6,
                fontFamily: "var(--font-body)",
              }}
            >
              Your personalised report is ready. Tell me a little about your
              business so I can make the recommendations specific to you.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div>
              <label
                className="block text-xs font-semibold mb-2 tracking-wide"
                style={{ color: "var(--navy-900)", fontFamily: "var(--font-body)" }}
              >
                Your name
              </label>
              <input
                type="text"
                placeholder="e.g. John Mwenda"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-5 py-3.5 rounded-xl border outline-none text-sm transition-colors focus:border-[var(--navy-700)]"
                style={{
                  borderColor: "var(--navy-100)",
                  background: "white",
                  color: "var(--navy-900)",
                  fontFamily: "var(--font-body)",
                }}
              />
            </div>
            <div>
              <label
                className="block text-xs font-semibold mb-2 tracking-wide"
                style={{ color: "var(--navy-900)", fontFamily: "var(--font-body)" }}
              >
                Business name
              </label>
              <input
                type="text"
                placeholder="e.g. Blue Ocean Lodge, Watamu"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                className="w-full px-5 py-3.5 rounded-xl border outline-none text-sm transition-colors focus:border-[var(--navy-700)]"
                style={{
                  borderColor: "var(--navy-100)",
                  background: "white",
                  color: "var(--navy-900)",
                  fontFamily: "var(--font-body)",
                }}
              />
            </div>
            <div>
              <label
                className="block text-xs font-semibold mb-2 tracking-wide"
                style={{ color: "var(--navy-900)", fontFamily: "var(--font-body)" }}
              >
                WhatsApp number{" "}
                <span style={{ opacity: 0.4, fontWeight: 400 }}>(optional)</span>
              </label>
              <input
                type="tel"
                placeholder="e.g. 0712 345 678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-5 py-3.5 rounded-xl border outline-none text-sm transition-colors focus:border-[var(--navy-700)]"
                style={{
                  borderColor: "var(--navy-100)",
                  background: "white",
                  color: "var(--navy-900)",
                  fontFamily: "var(--font-body)",
                }}
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:scale-[1.01]"
            style={{
              background: "var(--navy-900)",
              color: "var(--cream)",
              fontFamily: "var(--font-body)",
            }}
          >
            See My Digital Health Score →
          </button>
          <button
            onClick={() => { setName(""); setBusiness(""); handleSubmit(); }}
            className="w-full py-3 text-xs mt-2 transition-opacity hover:opacity-70"
            style={{
              color: "var(--navy-700)",
              opacity: 0.5,
              fontFamily: "var(--font-body)",
            }}
          >
            Skip — just show me my score
          </button>
        </div>
      </main>
    );
  }

  /* ── RESULT ───────────────────────────────── */
  const style = urgencyStyles[currentResult.urgency];

  return (
    <main className="min-h-screen px-6 py-16" style={{ background: "var(--cream)" }}>
      <div className="max-w-2xl mx-auto">

        {/* Score Hero */}
        <div
          className="rounded-3xl p-8 sm:p-12 text-center mb-8"
          style={{ background: style.bg }}
        >
          <div
            className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full mb-6"
            style={{
              background: style.badge,
              color: style.badgeText,
              fontFamily: "var(--font-body)",
            }}
          >
            {currentResult.label}
          </div>

          {/* Score Circle */}
          <div className="relative inline-flex items-center justify-center mb-6">
            <svg width="140" height="140" viewBox="0 0 140 140">
              <circle cx="70" cy="70" r="58" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
              <circle
                cx="70" cy="70" r="58"
                fill="none"
                stroke={style.badge}
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 58}`}
                strokeDashoffset={`${2 * Math.PI * 58 * (1 - percentage / 100)}`}
                transform="rotate(-90 70 70)"
                style={{ transition: "stroke-dashoffset 1s ease" }}
              />
            </svg>
            <div className="absolute text-center">
              <div
                className="text-4xl font-bold leading-none"
                style={{
                  fontFamily: "var(--font-display)",
                  color: style.badge,
                }}
              >
                {percentage}%
              </div>
              <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                overall score
              </div>
            </div>
          </div>

          {name && (
            <p className="text-sm mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
              {name}{business ? ` · ${business}` : ""}
            </p>
          )}
          <h2
            className="text-xl sm:text-2xl font-bold leading-snug mb-4"
            style={{
              fontFamily: "var(--font-display)",
              color: style.text,
            }}
          >
            {currentResult.headline}
          </h2>
          <p
            className="text-sm leading-relaxed max-w-md mx-auto"
            style={{
              color: style.text,
              opacity: 0.7,
              fontFamily: "var(--font-body)",
            }}
          >
            {currentResult.body}
          </p>
        </div>

        {/* Category Breakdown */}
        <div
          className="rounded-2xl p-8 mb-8 border"
          style={{
            background: "white",
            borderColor: "var(--navy-100)",
          }}
        >
          <p
            className="text-xs font-semibold tracking-[0.14em] uppercase mb-6"
            style={{ color: "var(--navy-700)" }}
          >
            Category breakdown
          </p>
          <div className="space-y-5">
            {Object.entries(categoryScores).map(([cat, scores]) => {
              const pct = Math.round((scores.score / scores.max) * 100);
              const color =
                pct >= 70 ? "#4caf72" : pct >= 40 ? "var(--navy-700)" : "#e84545";
              return (
                <div key={cat}>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-sm font-semibold"
                      style={{
                        color: "var(--navy-900)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {categoryIcons[cat]} {cat}
                    </span>
                    <span
                      className="text-sm font-bold"
                      style={{ color, fontFamily: "var(--font-body)" }}
                    >
                      {pct}%
                    </span>
                  </div>
                  <div
                    className="h-2 rounded-full overflow-hidden"
                    style={{ background: "var(--navy-50)" }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${pct}%`, background: color }}
                    />
                  </div>
                  <p
                    className="text-xs mt-1.5"
                    style={{ color: "var(--ink)", opacity: 0.45 }}
                  >
                    {pct < 40
                      ? "Needs urgent attention"
                      : pct < 70
                      ? "Room for significant improvement"
                      : "Performing well"}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 sm:p-10 mb-6"
          style={{
            background: "var(--navy-50)",
            border: "1px solid var(--navy-100)",
          }}
        >
          <h3
            className="text-xl font-bold mb-3"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--navy-900)",
            }}
          >
            Want a personalised action plan?
          </h3>
          <p
            className="text-sm leading-relaxed mb-6"
            style={{
              color: "var(--ink)",
              opacity: 0.65,
              fontFamily: "var(--font-body)",
            }}
          >
            I&apos;ll review your score and send you a specific, prioritised
            list of what to fix first — based on your business type and the
            Watamu market. Free. No obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/254769751566?text=${waMessage}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:scale-[1.02] flex-1"
              style={{
                background: "var(--navy-900)",
                color: "var(--cream)",
                fontFamily: "var(--font-body)",
              }}
            >
              Get My Free Action Plan on WhatsApp
            </a>
          </div>
        </div>

        {/* Retry */}
        <div className="text-center">
          <button
            onClick={() => {
              setCurrentQ(0);
              setAnswers({});
              setSelectedOption(null);
              setName("");
              setBusiness("");
              setPhone("");
              setStage("intro");
            }}
            className="text-xs transition-opacity hover:opacity-70"
            style={{
              color: "var(--navy-700)",
              opacity: 0.4,
              fontFamily: "var(--font-body)",
            }}
          >
            ↩ Retake the assessment
          </button>
        </div>
      </div>
    </main>
  );
}