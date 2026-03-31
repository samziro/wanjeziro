export type Sector = {
  slug: string;
  icon: string;
  name: string;
  headline: string;
  subheadline: string;
  heroTagline: string;
  pain: {
    title: string;
    points: string[];
  };
  solution: {
    title: string;
    body: string;
  };
  services: { title: string; description: string }[];
  result: { metric: string; label: string; context: string };
  testimonial?: { quote: string; name: string; business: string };
  faq: { q: string; a: string }[];
  ctaText: string;
  ctaWhatsApp: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

export const sectors: Sector[] = [
  {
    slug: "hotels-lodges-watamu",
    icon: "🏨",
    name: "Hotels & Lodges",
    headline: "More direct bookings. Less commission.",
    subheadline:
      "I help hotels, lodges and villas in Watamu build digital systems that bring guests directly — without relying on Booking.com, Airbnb or travel agents.",
    heroTagline: "For hotels & lodges in Watamu",
    pain: {
      title: "Sound familiar?",
      points: [
        "You're paying 15–20% commission on every single booking to OTA platforms",
        "Your website exists but generates almost no direct enquiries",
        "You rely heavily on word of mouth and repeat guests",
        "Competitors appear before you on Google even for searches that mention Watamu",
        "You post on Instagram and Facebook but it doesn't translate to reservations",
        "Tourists find you via Booking.com — not directly through your own brand",
      ],
    },
    solution: {
      title: "A digital system built to fill your rooms — directly.",
      body: "I build conversion-focused hotel websites with integrated booking systems, local SEO foundations that put you on page 1 for 'hotels in Watamu', and content strategies that give travellers a reason to book with you directly. The goal: reduce your OTA dependency and grow your direct revenue.",
    },
    services: [
      {
        title: "High-Performance Hotel Website",
        description:
          "A mobile-first, fast-loading website built to convert visitors into enquiries. Includes room showcases, booking integration, gallery, and trust signals.",
      },
      {
        title: "Local SEO for Watamu Hotels",
        description:
          "Rank on Google for 'hotels in Watamu', 'beach lodges Watamu', 'best accommodation Watamu' and related searches tourists use before they travel.",
      },
      {
        title: "Google Business Profile Optimisation",
        description:
          "A fully optimised Google profile with photos, reviews strategy, and Q&A — so you appear prominently in Google Maps results.",
      },
      {
        title: "Social Media → Bookings Funnel",
        description:
          "Content strategy and posting that moves Instagram and Facebook followers from admiring your property to actually enquiring and booking.",
      },
    ],
    result: {
      metric: "70%",
      label: "increase in direct bookings",
      context:
        "After a new website and local SEO system, Chef Joshua's Coastal Kitchen saw direct bookings increase by 70% within 90 days of launch.",
    },
    testimonial: {
      quote:
        "Before working with Wanje, we were posting every day and getting likes — but zero bookings from it. Within 90 days of launching our new website and funnel, our direct bookings increased by 70%.",
      name: "Chef Joshua",
      business: "Coastal Kitchen, Watamu",
    },
    faq: [
      {
        q: "How long before I start seeing more direct bookings?",
        a: "Most clients see measurable improvements in enquiry volume within 60–90 days of launch. SEO builds over 3–6 months, but a strong website and Google profile start working immediately.",
      },
      {
        q: "Can you integrate with my existing booking system?",
        a: "Yes. Whether you use Beds24, Little Hotelier, a custom WhatsApp system or a simple email enquiry setup — I build around what already works for your operation.",
      },
      {
        q: "What does it cost?",
        a: "Hotel packages start from KES 30,000 for a website and SEO foundation. Full digital systems with ongoing management are available from KES 45,000/month. Every engagement starts with a free audit call.",
      },
      {
        q: "Do you only work with hotels in Watamu?",
        a: "I focus on the Kenyan coast — Watamu, Malindi, Kilifi and Mombasa. My in-depth knowledge of this market is what makes my strategies effective for coastal hospitality businesses.",
      },
    ],
    ctaText: "Get a free hotel digital audit",
    ctaWhatsApp:
      "Hi Wanje, I run a hotel/lodge in Watamu and I'd like a free digital audit to reduce our OTA dependency.",
    seo: {
      title: "Hotel Website Design & Digital Marketing Watamu | Wanje Ziro",
      description:
        "I help hotels, lodges and villas in Watamu get more direct bookings through conversion-focused websites, local SEO and digital marketing systems. Less commission, more revenue.",
      keywords: [
        "hotel website design Watamu",
        "hotel digital marketing Watamu Kenya",
        "direct bookings Watamu hotels",
        "lodge website Watamu",
        "hotel SEO Kenya coast",
        "Watamu accommodation marketing",
      ],
    },
  },

  {
    slug: "restaurants-watamu",
    icon: "🍽️",
    name: "Restaurants & Beach Clubs",
    headline: "Turn followers into full tables.",
    subheadline:
      "You've built a following. I help restaurants and beach clubs in Watamu convert that social engagement into actual reservations — consistently.",
    heroTagline: "For restaurants & beach clubs in Watamu",
    pain: {
      title: "The frustration is real.",
      points: [
        "Hundreds of likes on your posts — but tables still empty on slow nights",
        "No reliable way to take reservations beyond WhatsApp messages you manually manage",
        "Your Google listing is incomplete or barely shows up in local search",
        "Tourists walk past and don't know you exist because they searched on Google first",
        "You rely on repeat locals but haven't cracked how to reach new visitors consistently",
        "Competitors with worse food rank higher on TripAdvisor just because they manage it better",
      ],
    },
    solution: {
      title: "A content-to-table system that runs while you cook.",
      body: "I design a full digital funnel — from social media content that attracts visitors, to a WhatsApp booking system that captures and confirms reservations automatically, to a website that ranks on Google for 'restaurants in Watamu'. You focus on the food. The system fills the seats.",
    },
    services: [
      {
        title: "Restaurant Website with Reservation System",
        description:
          "A beautiful, fast website that showcases your menu, ambiance, and location — with an integrated WhatsApp or booking flow that captures reservations 24/7.",
      },
      {
        title: "Social Media Management",
        description:
          "Content creation, scheduling and community management for Instagram and Facebook — designed to drive DMs and website visits, not just likes.",
      },
      {
        title: "TripAdvisor & Google Maps Optimisation",
        description:
          "Full optimisation of your review profiles so tourists searching for places to eat in Watamu find you — and choose you.",
      },
      {
        title: "WhatsApp Booking Automation",
        description:
          "A simple, automated WhatsApp flow that acknowledges enquiries, collects party size and time, and reduces the manual back-and-forth for your team.",
      },
    ],
    result: {
      metric: "3×",
      label: "more online enquiries",
      context:
        "Tapps Broilers went from zero online presence to 3× more enquiries in their first 90 days — now ranking on page 1 for local search terms.",
    },
    testimonial: {
      quote:
        "Wanje does not just build websites — he thinks about your business. He asked questions no one had ever asked us, and what he built is not just beautiful but actually brings us leads every week.",
      name: "Fit Hunter",
      business: "CEO, Fithunter Kenya, Watamu",
    },
    faq: [
      {
        q: "Can I start with just social media management?",
        a: "Absolutely. Many clients start with social media management (from KES 15,000/month) and upgrade to a full website and system once they see results.",
      },
      {
        q: "How much content do you post per month?",
        a: "For restaurants, I recommend 12–16 posts per month across Instagram and Facebook. This includes food photography direction, caption writing, scheduling and basic engagement monitoring.",
      },
      {
        q: "Do you do photography or video?",
        a: "I can coordinate professional content shoots and direct the visual strategy. For ongoing content I provide creative direction and work with local content creators in the Watamu area.",
      },
      {
        q: "What results can I realistically expect?",
        a: "Most restaurant clients see a measurable increase in DM enquiries and reservation requests within 30–45 days. Sustainable growth compounds over 3–6 months as your online presence builds authority.",
      },
    ],
    ctaText: "Book a free restaurant strategy call",
    ctaWhatsApp:
      "Hi Wanje, I run a restaurant/beach club in Watamu and I'd like to discuss growing our reservations through digital marketing.",
    seo: {
      title: "Restaurant Digital Marketing Watamu | Wanje Ziro",
      description:
        "I help restaurants and beach clubs in Watamu fill more tables through social media, WhatsApp funnels and local SEO. Turn your followers into actual reservations.",
      keywords: [
        "restaurant marketing Watamu",
        "restaurant website Watamu Kenya",
        "social media management restaurants Kenya coast",
        "WhatsApp booking system restaurant",
        "beach club digital marketing Watamu",
        "restaurant SEO Watamu",
      ],
    },
  },

  {
    slug: "tour-operators-watamu",
    icon: "🤿",
    name: "Tour Operators & Water Sports",
    headline: "Get found before tourists land in Kenya.",
    subheadline:
      "Most visitors research and book activities before they travel. I help tour operators and water sports businesses in Watamu capture that demand — with SEO and digital systems that work while you're out on the water.",
    heroTagline: "For tour operators & water sports in Watamu",
    pain: {
      title: "The problem with relying on walk-ins.",
      points: [
        "You rely on walk-ins, hotel referrals and TripAdvisor — but have no control over any of them",
        "Tourists plan activities before arriving but your website doesn't show up in their research",
        "Peak season is great, but low season is painfully unpredictable",
        "Competitors with identical tours rank higher on Google simply because they've invested in SEO",
        "Your TripAdvisor profile has mixed reviews and no strategy to grow the good ones",
        "There's no system to capture enquiries from people who visit your website and leave without booking",
      ],
    },
    solution: {
      title: "A booking pipeline that starts before they even arrive.",
      body: "I build an end-to-end digital system for tour operators — a fast, SEO-optimised website with tour details and an enquiry system, Google presence that puts you in front of travellers researching Watamu activities, and content that builds trust before they even meet you. Your goal: bookings arriving in your inbox before the tourist lands in Kenya.",
    },
    services: [
      {
        title: "Tour Operator Website with Booking Enquiry System",
        description:
          "A professional website that showcases your tours, pricing, safety credentials and reviews — with an integrated enquiry flow that captures leads automatically.",
      },
      {
        title: "SEO for Watamu Activities & Tours",
        description:
          "Rank for searches like 'snorkelling Watamu', 'deep sea fishing Watamu', 'dolphin tours Kenya coast' — terms tourists actually search before they travel.",
      },
      {
        title: "Google Ads for Tour Bookings",
        description:
          "Targeted paid campaigns that appear when high-intent travellers search for Watamu activities — capped at your budget, measurable to the booking.",
      },
      {
        title: "TripAdvisor & Review Management",
        description:
          "A strategy to systematically grow genuine 5-star reviews and respond to feedback — the single biggest trust factor for a tourism purchase decision.",
      },
    ],
    result: {
      metric: "40%",
      label: "reduction in wasted ad spend",
      context:
        "Fit Hunter reduced their ad spend waste by 40% after switching from scatter-shot campaigns to a structured digital strategy with proper audience targeting.",
    },
    testimonial: {
      quote:
        "I was sceptical about hiring someone for digital strategy — I thought I could figure it out myself. Wanje structured our entire online presence in a way I could not have done alone. Our cost per lead dropped by half.",
      name: "Dabaso Rock Conservation",
      business: "Founder, Dabaso Conservation Group, Watamu",
    },
    faq: [
      {
        q: "Do you understand the tourism market in Watamu specifically?",
        a: "Yes — I'm based in Watamu. I understand the seasonality, the visitor profile, the competitor landscape and the specific search behaviour of travellers researching the Kenya coast. This local knowledge directly improves your results.",
      },
      {
        q: "Can you help us get more reviews on TripAdvisor?",
        a: "Absolutely. I build a review generation system that makes it easy for happy customers to leave reviews right after their experience — using WhatsApp or email follow-ups.",
      },
      {
        q: "What's the minimum budget for Google Ads?",
        a: "For tour operators, I recommend starting with KES 10,000–20,000/month in ad spend. This is separate from my management fee. I'll show you the projected reach and cost-per-enquiry before committing.",
      },
      {
        q: "We're a small operation. Is this right for us?",
        a: "Yes. I work with solo operators and small teams. You don't need to be a large resort — you need a system that makes you look professional and gets you found. That's what I build.",
      },
    ],
    ctaText: "Grow your tour bookings",
    ctaWhatsApp:
      "Hi Wanje, I run a tour/water sports business in Watamu and I'd like to discuss getting more bookings online.",
    seo: {
      title: "Tour Operator Digital Marketing Watamu | Wanje Ziro",
      description:
        "I help tour operators and water sports businesses in Watamu get found online and turn traveller searches into bookings — with SEO, Google Ads and a professional digital presence.",
      keywords: [
        "tour operator website Watamu",
        "water sports marketing Watamu Kenya",
        "tour booking SEO Kenya coast",
        "snorkelling tours Watamu marketing",
        "digital marketing tourism Watamu",
        "Google Ads tour operators Kenya",
      ],
    },
  },

  {
    slug: "ngos-conservation-watamu",
    icon: "🐢",
    name: "NGOs & Conservation Groups",
    headline: "Amplify your impact. Attract more funding.",
    subheadline:
      "Your work matters. I help NGOs and conservation organisations in Watamu and Kilifi County build digital presences that tell their story powerfully — to donors, grant funders, volunteers and the public.",
    heroTagline: "For NGOs & conservation groups in Watamu",
    pain: {
      title: "Important work. Invisible online.",
      points: [
        "Your website is outdated or doesn't communicate the depth and value of your work",
        "Potential donors search for conservation work in Watamu and don't find you",
        "Grant applications are weakened by an underwhelming digital footprint",
        "Volunteer enquiries are sporadic because your online presence doesn't inspire action",
        "Your social media tells individual stories but there's no consistent strategy",
        "You're doing world-class conservation work that the world simply hasn't discovered yet",
      ],
    },
    solution: {
      title: "A digital presence that makes funders want to give.",
      body: "I build impact-led websites and digital strategies for NGOs and conservation groups — designed to communicate your mission with clarity and emotion, rank in searches related to your cause, and create consistent pipelines of donor interest, volunteer applications and media attention. Your work deserves to be seen.",
    },
    services: [
      {
        title: "NGO Impact Website",
        description:
          "A professionally designed website that communicates your mission, showcases your impact with data and stories, and makes it easy for donors and volunteers to take action.",
      },
      {
        title: "Impact Storytelling & Content",
        description:
          "Monthly content creation — case studies, field updates, conservation reports — that keeps your audience engaged and gives funders the evidence they need.",
      },
      {
        title: "Donor Funnel & Email Strategy",
        description:
          "A lead capture system and email sequence that nurtures interested visitors into repeat donors — with impact reporting that encourages continued giving.",
      },
      {
        title: "Social Media for NGOs",
        description:
          "A strategic content calendar for Facebook and LinkedIn that builds awareness of your cause, grows your community and drives traffic to your donation page.",
      },
    ],
    result: {
      metric: "3×",
      label: "more donor enquiries",
      context:
        "Dabaso Rock Conservation saw donor enquiries triple after launching a new impact-focused website with a clear donation journey and storytelling content strategy.",
    },
    testimonial: {
      quote:
        "We had tried two other agencies before. Wanje was the first person who showed us the full picture — visibility, conversion, the whole system. Enquiries from our website tripled in one term.",
      name: "Tapps Broilers Enterprise",
      business: "Owner, Watamu",
    },
    faq: [
      {
        q: "Do you offer NGO-friendly pricing?",
        a: "Yes. I offer discounted rates for registered NGOs and conservation organisations operating in Watamu and Kilifi County. Let's discuss your budget on a call — there's always a way to make it work.",
      },
      {
        q: "Can you help us write grant applications?",
        a: "While I don't write grant applications directly, I build the digital infrastructure — a credible website, impact documentation and social proof — that strengthens your grant applications significantly.",
      },
      {
        q: "We have limited staff. How much time will this take from our team?",
        a: "I design systems that require minimal input from you. Typically, a monthly 30-minute review call and access to your project updates is all I need to produce and publish content on your behalf.",
      },
      {
        q: "Can you help us reach international donors?",
        a: "Absolutely. SEO and content strategy for international donor audiences is something I specifically build for NGO clients — with keyword research targeting terms that global funders search for.",
      },
    ],
    ctaText: "Amplify your conservation mission",
    ctaWhatsApp:
      "Hi Wanje, I work with an NGO/conservation group in Watamu and I'd like to discuss building a stronger digital presence.",
    seo: {
      title: "NGO & Conservation Digital Marketing Watamu | Wanje Ziro",
      description:
        "I help NGOs and conservation organisations in Watamu and Kilifi County attract more donors, volunteers and funding through powerful digital presences and impact storytelling.",
      keywords: [
        "NGO website design Watamu",
        "conservation organisation digital marketing Kenya",
        "NGO donor marketing Kilifi",
        "conservation website Kenya coast",
        "impact storytelling NGO Kenya",
        "digital marketing NGOs Watamu",
      ],
    },
  },
];

export function getSectorBySlug(slug: string): Sector | undefined {
  return sectors.find((s) => s.slug === slug);
}

export function getAllSectorSlugs(): string[] {
  return sectors.map((s) => s.slug);
}