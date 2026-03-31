import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getSectorBySlug, getAllSectorSlugs } from "./sectors-data";

/* ─────────────────────────────────────────────
   STATIC PARAMS
───────────────────────────────────────────── */
export function generateStaticParams() {
  return getAllSectorSlugs().map((slug) => ({ slug }));
}

/* ─────────────────────────────────────────────
   DYNAMIC METADATA
───────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) return {};
  return {
    title: sector.seo.title,
    description: sector.seo.description,
    keywords: sector.seo.keywords,
    openGraph: {
      title: sector.seo.title,
      description: sector.seo.description,
      url: `https://wanjeziro.co.ke/watamu/${slug}`,
      siteName: "Wanje Ziro",
      locale: "en_KE",
      type: "website",
    },
  };
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default async function SectorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) notFound();

  const waLink = `https://wa.me/254769751566?text=${encodeURIComponent(
    sector.ctaWhatsApp
  )}`;

  return (
    <main className="overflow-x-hidden">

      {/* ── HERO ─────────────────────────────── */}
      <section
        className="relative min-h-[85vh] flex flex-col justify-end pb-20 pt-40 px-6"
        style={{ background: "var(--navy-900)" }}
      >
        {/* Background texture */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, var(--navy-700) 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, var(--navy-400) 0%, transparent 70%)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, var(--navy-400) 0px, var(--navy-400) 1px, transparent 1px, transparent 80px)",
            }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 flex-wrap">
            <Link
              href="/digital-marketing-watamu"
              className="text-xs font-semibold tracking-[0.14em] uppercase transition-opacity hover:opacity-70"
              style={{ color: "var(--navy-400)" }}
            >
              Watamu
            </Link>
            <span style={{ color: "var(--navy-700)" }} className="text-xs">›</span>
            <span
              className="text-xs font-semibold tracking-[0.14em] uppercase"
              style={{ color: "var(--navy-100)", opacity: 0.5 }}
            >
              {sector.name}
            </span>
          </div>

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">{sector.icon}</span>
            <span
              className="text-xs font-semibold tracking-[0.18em] uppercase"
              style={{ color: "var(--navy-400)" }}
            >
              {sector.heroTagline}
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6 max-w-3xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--cream)" }}
          >
            {sector.headline}
          </h1>

          <p
            className="text-base sm:text-lg leading-relaxed max-w-xl mb-12"
            style={{ color: "var(--navy-100)", fontFamily: "var(--font-body)" }}
          >
            {sector.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={waLink}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "var(--navy-400)",
                color: "var(--navy-900)",
                fontFamily: "var(--font-body)",
              }}
            >
              {sector.ctaText}
              <span aria-hidden>→</span>
            </a>
            <a
              href="/digital-health-check"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-wide border transition-all duration-200 hover:bg-white/5"
              style={{
                borderColor: "rgba(123,164,208,0.35)",
                color: "var(--navy-100)",
                fontFamily: "var(--font-body)",
              }}
            >
              Free Digital Health Check
            </a>
          </div>
        </div>

        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, var(--cream))" }}
        />
      </section>

      {/* ── RESULT STAT ───────────────────────── */}
      <section
        className="py-16 px-6"
        style={{ background: "var(--cream)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl p-10 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center gap-8"
            style={{
              background: "var(--navy-50)",
              border: "1px solid var(--navy-100)",
            }}
          >
            <div
              className="text-6xl sm:text-7xl font-bold leading-none flex-shrink-0"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--navy-700)",
              }}
            >
              {sector.result.metric}
            </div>
            <div>
              <p
                className="text-xl font-bold mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--navy-900)",
                }}
              >
                {sector.result.label}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "var(--ink)",
                  opacity: 0.65,
                  fontFamily: "var(--font-body)",
                }}
              >
                {sector.result.context}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ───────────────────────── */}
      <section className="py-24 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Pain */}
            <div>
              <span
                className="text-xs font-semibold tracking-[0.14em] uppercase"
                style={{ color: "var(--navy-700)" }}
              >
                The challenge
              </span>
              <h2
                className="mt-3 text-3xl font-bold leading-tight mb-8"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--navy-900)",
                }}
              >
                {sector.pain.title}
              </h2>
              <ul className="space-y-4">
                {sector.pain.points.map((point, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5"
                      style={{
                        background: "var(--navy-100)",
                        color: "var(--navy-700)",
                        fontWeight: 700,
                      }}
                    >
                      ✕
                    </span>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        color: "var(--ink)",
                        opacity: 0.7,
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Solution */}
            <div
              className="rounded-2xl p-8 sm:p-10"
              style={{ background: "var(--navy-900)" }}
            >
              <span
                className="text-xs font-semibold tracking-[0.14em] uppercase block mb-4"
                style={{ color: "var(--navy-400)" }}
              >
                The solution
              </span>
              <h3
                className="text-xl font-bold leading-snug mb-5"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--cream)",
                }}
              >
                {sector.solution.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-8"
                style={{
                  color: "var(--navy-100)",
                  opacity: 0.75,
                  fontFamily: "var(--font-body)",
                }}
              >
                {sector.solution.body}
              </p>
              <a
                href={waLink}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: "var(--navy-400)",
                  color: "var(--navy-900)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {sector.ctaText}
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "var(--navy-50)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span
              className="text-xs font-semibold tracking-[0.14em] uppercase"
              style={{ color: "var(--navy-700)" }}
            >
              What I deliver
            </span>
            <h2
              className="mt-3 text-3xl sm:text-4xl font-bold"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--navy-900)",
              }}
            >
              Built for {sector.name.toLowerCase()}.
              <br /> Not a generic package.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {sector.services.map((svc, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ borderColor: "var(--navy-100)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-base font-bold mb-5"
                  style={{
                    background: "var(--navy-50)",
                    color: "var(--navy-700)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  className="text-base font-bold mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--navy-900)",
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "var(--ink)",
                    opacity: 0.65,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {svc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ───────────────────────── */}
      {sector.testimonial && (
        <section className="py-24 px-6" style={{ background: "var(--cream)" }}>
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="text-5xl mb-8 opacity-20"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--navy-900)",
              }}
            >
              "
            </div>
            <blockquote
              className="text-xl sm:text-2xl font-bold leading-snug mb-8"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--navy-900)",
              }}
            >
              {sector.testimonial.quote}
            </blockquote>
            <cite
              className="not-italic text-sm font-semibold"
              style={{ color: "var(--navy-700)", fontFamily: "var(--font-body)" }}
            >
              — {sector.testimonial.name},{" "}
              <span style={{ opacity: 0.6, fontWeight: 400 }}>
                {sector.testimonial.business}
              </span>
            </cite>
          </div>
        </section>
      )}

      {/* ── FAQ ───────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "var(--navy-50)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="mb-14 text-center">
            <h2
              className="text-3xl font-bold"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--navy-900)",
              }}
            >
              Common questions
            </h2>
          </div>
          <div className="space-y-5">
            {sector.faq.map((item, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border overflow-hidden"
                style={{ borderColor: "var(--navy-100)" }}
              >
                <summary
                  className="flex items-center justify-between p-6 cursor-pointer select-none list-none font-semibold text-sm"
                  style={{
                    color: "var(--navy-900)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {item.q}
                  <span
                    className="ml-4 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-200 group-open:rotate-45"
                    style={{
                      background: "var(--navy-50)",
                      color: "var(--navy-700)",
                    }}
                  >
                    +
                  </span>
                </summary>
                <div
                  className="px-6 pb-6 text-sm leading-relaxed"
                  style={{
                    color: "var(--ink)",
                    opacity: 0.7,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────── */}
      <section
        className="py-28 px-6 text-center relative overflow-hidden"
        style={{ background: "var(--navy-900)" }}
      >
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, var(--navy-700) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-2xl mx-auto">
          <div className="text-4xl mb-6">{sector.icon}</div>
          <h2
            className="text-3xl sm:text-4xl font-bold leading-tight mb-5"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--cream)",
            }}
          >
            Ready to grow your{" "}
            <span style={{ color: "var(--navy-400)" }}>
              {sector.name.toLowerCase()}
            </span>{" "}
            business in Watamu?
          </h2>
          <p
            className="text-sm sm:text-base leading-relaxed mb-10"
            style={{
              color: "var(--navy-100)",
              opacity: 0.7,
              fontFamily: "var(--font-body)",
            }}
          >
            Start with a free 20-minute digital audit. I&apos;ll show you exactly
            what&apos;s holding your business back online and what to fix first.
            No obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waLink}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "var(--navy-400)",
                color: "var(--navy-900)",
                fontFamily: "var(--font-body)",
              }}
            >
              WhatsApp Wanje — Free Audit
            </a>
            <a
              href="/digital-health-check"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-semibold text-sm tracking-wide border transition-all duration-200 hover:bg-white/5"
              style={{
                borderColor: "rgba(123,164,208,0.35)",
                color: "var(--navy-100)",
                fontFamily: "var(--font-body)",
              }}
            >
              Take the Free Health Check
            </a>
          </div>
          <p
            className="mt-8 text-xs"
            style={{ color: "var(--navy-400)", opacity: 0.5 }}
          >
            Based in Watamu · Serving the Kenya Coast
          </p>
        </div>
      </section>
    </main>
  );
}