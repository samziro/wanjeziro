import type { Metadata } from "next";
import Link from "next/link";

/* ─────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Digital Marketing Blog for Watamu & Kenya Coast Businesses | Wanje Ziro",
  description:
    "Practical digital marketing advice for SMEs, hotels, restaurants and NGOs on the Kenya Coast. SEO tips, website guides, social media strategies — written from Watamu.",
  openGraph: {
    title: "Digital Marketing Blog | Wanje Ziro — Watamu, Kenya",
    description:
      "Practical digital growth advice for coastal Kenya businesses — SEO, websites, social media, and more.",
    url: "https://wanjeziro.co.ke/blog",
    siteName: "Wanje Ziro",
    locale: "en_KE",
    type: "website",
  },
};

/* ─────────────────────────────────────────────
   BLOG POST DATA
   Replace with your CMS / MDX source later
───────────────────────────────────────────── */
type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  featured?: boolean;
};

const posts: Post[] = [
  {
    slug: "why-watamu-hotels-lose-direct-bookings",
    title: "Why Watamu Hotels Keep Losing Direct Bookings (And How to Fix It)",
    excerpt:
      "Most hotels in Watamu are generating revenue for Booking.com, not for themselves. Here are the 5 specific changes that shift the balance back in your favour.",
    category: "Hospitality",
    categoryColor: "var(--navy-700)",
    date: "April 3, 2025",
    readTime: "6 min read",
    featured: true,
  },
  {
    slug: "local-seo-for-watamu-businesses",
    title: "Local SEO for Watamu Businesses: The Complete 2025 Guide",
    excerpt:
      "If your business doesn't appear on Google Maps and page 1 for searches in Watamu, you're invisible to the customers who matter most. Here's how to fix that in 30 days.",
    category: "SEO",
    categoryColor: "var(--navy-700)",
    date: "March 28, 2025",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "digital-marketing-mistakes-kilifi-businesses",
    title: "5 Digital Marketing Mistakes Killing Kilifi County Businesses",
    excerpt:
      "After auditing dozens of local businesses, these are the most common — and most costly — digital mistakes I see. Are you making any of them?",
    category: "Strategy",
    categoryColor: "var(--navy-700)",
    date: "March 20, 2025",
    readTime: "5 min read",
  },
  {
    slug: "restaurant-social-media-watamu",
    title: "How Watamu Restaurants Can Turn Social Media Followers Into Reservations",
    excerpt:
      "Thousands of likes and still empty tables on a Tuesday? This is the exact funnel I built for Chef Joshua — and how you can replicate it.",
    category: "Social Media",
    categoryColor: "var(--navy-700)",
    date: "March 12, 2025",
    readTime: "7 min read",
  },
  {
    slug: "website-vs-instagram-watamu",
    title: "Website or Instagram: What Should Your Watamu Business Invest In First?",
    excerpt:
      "Both matter. But the order matters more. Here's the framework I use to decide what every coastal business should build first — and why.",
    category: "Strategy",
    categoryColor: "var(--navy-700)",
    date: "March 5, 2025",
    readTime: "4 min read",
  },
  {
    slug: "google-business-profile-watamu",
    title: "How to Set Up and Optimise Your Google Business Profile in Watamu",
    excerpt:
      "A fully optimised Google Business Profile is the single fastest way to get found by local customers. Step-by-step guide with screenshots.",
    category: "SEO",
    categoryColor: "var(--navy-700)",
    date: "February 25, 2025",
    readTime: "6 min read",
  },
  {
    slug: "ngo-digital-presence-kilifi",
    title: "Why Your NGO in Kilifi County Is Invisible Online (And What It's Costing You)",
    excerpt:
      "Conservation and development organisations doing excellent work but attracting almost no online attention — here's the digital infrastructure you're missing.",
    category: "NGOs",
    categoryColor: "var(--navy-700)",
    date: "February 18, 2025",
    readTime: "5 min read",
  },
  {
    slug: "whatsapp-marketing-small-business-kenya",
    title: "WhatsApp Marketing for Small Businesses in Kenya: A Practical Guide",
    excerpt:
      "WhatsApp is Kenya's most-used messaging platform. Here's how to turn your business WhatsApp into a structured lead nurturing and conversion tool.",
    category: "Marketing",
    categoryColor: "var(--navy-700)",
    date: "February 10, 2025",
    readTime: "6 min read",
  },
];

const categories = ["All", "SEO", "Strategy", "Social Media", "Hospitality", "NGOs", "Marketing"];

const featuredPosts = posts.filter((p) => p.featured);
const regularPosts = posts.filter((p) => !p.featured);

/* ─────────────────────────────────────────────
   COMPONENTS
───────────────────────────────────────────── */
function CategoryBadge({ label }: { label: string }) {
  return (
    <span
      className="inline-block text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full"
      style={{
        background: "var(--navy-50)",
        color: "var(--navy-700)",
        fontFamily: "var(--font-body)",
      }}
    >
      {label}
    </span>
  );
}

function FeaturedCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      style={{ background: "var(--navy-900)" }}
    >
      {/* Top accent */}
      <div
        className="h-1 w-full"
        style={{
          background: "linear-gradient(90deg, var(--navy-700), var(--navy-400))",
        }}
      />
      <div className="p-8 sm:p-10">
        <div className="flex items-center gap-3 mb-5">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full tracking-wide uppercase"
            style={{
              background: "rgba(123,164,208,0.15)",
              color: "var(--navy-400)",
              border: "1px solid rgba(123,164,208,0.25)",
            }}
          >
            {post.category}
          </span>
          <span
            className="text-xs"
            style={{ color: "var(--navy-400)", opacity: 0.5 }}
          >
            Featured
          </span>
        </div>
        <h2
          className="text-xl sm:text-2xl font-bold leading-snug mb-4 transition-colors duration-200"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--cream)",
          }}
        >
          {post.title}
        </h2>
        <p
          className="text-sm leading-relaxed mb-8"
          style={{
            color: "var(--navy-100)",
            opacity: 0.65,
            fontFamily: "var(--font-body)",
          }}
        >
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="text-xs"
              style={{ color: "var(--navy-400)", opacity: 0.6 }}
            >
              {post.date}
            </span>
            <span
              className="w-1 h-1 rounded-full"
              style={{ background: "var(--navy-700)" }}
            />
            <span
              className="text-xs"
              style={{ color: "var(--navy-400)", opacity: 0.6 }}
            >
              {post.readTime}
            </span>
          </div>
          <span
            className="text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 group-hover:gap-3"
            style={{ color: "var(--navy-400)", fontFamily: "var(--font-body)" }}
          >
            Read article
            <span
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden
            >
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
      style={{ borderColor: "var(--navy-100)" }}
    >
      {/* Color accent bar */}
      <div
        className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: "var(--navy-700)" }}
      />
      <div className="p-7 flex flex-col flex-1">
        <CategoryBadge label={post.category} />
        <h3
          className="mt-4 text-base font-bold leading-snug mb-3 flex-1"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--navy-900)",
          }}
        >
          {post.title}
        </h3>
        <p
          className="text-sm leading-relaxed mb-5"
          style={{
            color: "var(--ink)",
            opacity: 0.6,
            fontFamily: "var(--font-body)",
          }}
        >
          {post.excerpt}
        </p>
        <div
          className="flex items-center justify-between pt-5"
          style={{ borderTop: "1px solid var(--navy-100)" }}
        >
          <div className="flex items-center gap-2">
            <span
              className="text-xs"
              style={{ color: "var(--navy-700)", opacity: 0.5 }}
            >
              {post.date}
            </span>
            <span
              className="w-1 h-1 rounded-full"
              style={{ background: "var(--navy-100)" }}
            />
            <span
              className="text-xs"
              style={{ color: "var(--navy-700)", opacity: 0.5 }}
            >
              {post.readTime}
            </span>
          </div>
          <span
            className="text-xs font-semibold transition-all duration-200 group-hover:translate-x-1"
            style={{ color: "var(--navy-700)" }}
            aria-hidden
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function BlogPage() {
  return (
    <main className="overflow-x-hidden">

      {/* ── HERO ─────────────────────────────── */}
      <section
        className="relative pt-36 pb-24 px-6"
        style={{ background: "var(--navy-900)" }}
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <div
            className="absolute -top-20 right-0 w-[500px] h-[400px] rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, var(--navy-700) 0%, transparent 70%)",
            }}
          />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="inline-block w-6 h-px"
              style={{ background: "var(--navy-400)" }}
            />
            <span
              className="text-xs font-semibold tracking-[0.18em] uppercase"
              style={{ color: "var(--navy-400)" }}
            >
              Insights from Watamu
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5 max-w-2xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--cream)" }}
          >
            Digital growth,
            <br />
            <em
              className="not-italic"
              style={{ color: "var(--navy-400)" }}
            >
              coastal context.
            </em>
          </h1>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-xl"
            style={{
              color: "var(--navy-100)",
              opacity: 0.7,
              fontFamily: "var(--font-body)",
            }}
          >
            Practical digital marketing for SMEs, hotels, restaurants and NGOs
            on the Kenya Coast — written by someone who lives and works here.
          </p>
        </div>
        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, var(--cream))" }}
        />
      </section>

      {/* ── CATEGORY FILTER ───────────────────── */}
      <section
        className="py-6 px-6 sticky top-0 z-30 backdrop-blur-md"
        style={{
          background: "rgba(247,250,253,0.92)",
          borderBottom: "1px solid var(--navy-100)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                className="flex-shrink-0 text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 hover:border-[var(--navy-700)] hover:text-[var(--navy-700)]"
                style={{
                  borderColor: cat === "All" ? "var(--navy-900)" : "var(--navy-100)",
                  color: cat === "All" ? "var(--navy-900)" : "var(--navy-700)",
                  background: cat === "All" ? "var(--navy-50)" : "transparent",
                  fontFamily: "var(--font-body)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED POSTS ────────────────────── */}
      <section className="pt-14 pb-6 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-5xl mx-auto">
          <p
            className="text-xs font-semibold tracking-[0.14em] uppercase mb-6"
            style={{ color: "var(--navy-700)" }}
          >
            Featured
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {featuredPosts.map((post) => (
              <FeaturedCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL POSTS ─────────────────────────── */}
      <section className="pt-6 pb-24 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-5xl mx-auto">
          <p
            className="text-xs font-semibold tracking-[0.14em] uppercase mb-6"
            style={{ color: "var(--navy-700)" }}
          >
            All articles
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {regularPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER / LEAD MAGNET ──────────── */}
      <section className="py-20 px-6" style={{ background: "var(--navy-50)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <span
            className="text-xs font-semibold tracking-[0.14em] uppercase block mb-4"
            style={{ color: "var(--navy-700)" }}
          >
            Free resource
          </span>
          <h2
            className="text-3xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--navy-900)",
            }}
          >
            Not sure where your business stands online?
          </h2>
          <p
            className="text-sm leading-relaxed mb-8"
            style={{
              color: "var(--ink)",
              opacity: 0.65,
              fontFamily: "var(--font-body)",
            }}
          >
            Take the Free Digital Health Check for Watamu Businesses — a
            5-minute assessment that scores your website, SEO, social media and
            marketing funnel, then tells you exactly what to fix first.
          </p>
          <Link
            href="/digital-health-check"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:scale-[1.02]"
            style={{
              background: "var(--navy-900)",
              color: "var(--cream)",
              fontFamily: "var(--font-body)",
            }}
          >
            Take the Free Health Check
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}