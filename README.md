# Wanje Ziro — Personal Brand Website

A production-ready Next.js 14 website for Wanje Ziro, Digital Growth Strategist for SMEs.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icons)
- **Google Fonts** — Playfair Display + DM Sans

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
wanje-website/
├── app/
│   ├── globals.css        # Global styles, fonts, CSS variables
│   ├── layout.tsx         # Root layout + metadata
│   └── page.tsx           # Main page — assembles all sections
├── components/
│   ├── Navbar.tsx         # Sticky nav with mobile menu
│   ├── Hero.tsx           # Hero section with stats
│   ├── Problem.tsx        # Problem statement (dark bg)
│   ├── Framework.tsx      # 4-step Digital Growth Framework
│   ├── Services.tsx       # 4 service cards
│   ├── Work.tsx           # Case studies (3 projects)
│   ├── Insights.tsx       # Blog/articles section (dark bg)
│   ├── Contact.tsx        # Contact form + details
│   └── Footer.tsx         # Footer with social links
├── hooks/
│   └── useReveal.ts       # Scroll-triggered reveal hook
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
└── package.json
```

---

## Sections Overview

| Section | Description |
|---|---|
| **Hero** | Headline, subtext, CTA buttons, stat counters |
| **Problem** | Dark section — articulates the SME pain point |
| **Framework** | 4-stage system: Clarity → Visibility → Conversion → Optimisation |
| **Services** | 4 service cards with hover-to-dark interaction |
| **Work** | 3 case studies with problem/solution/results layout |
| **Insights** | 4 article previews — dark background |
| **Contact** | Contact form + "who it's for" sidebar |
| **Footer** | Logo, social links, copyright |

---

## Customisation Guide

### Update personal details
- **Name / tagline**: `app/layout.tsx` (metadata) + `components/Navbar.tsx`
- **Location**: `components/Hero.tsx` eyebrow text
- **Contact info**: `components/Contact.tsx` — email, phone, location

### Update content
- **Stats** (50+ projects, 3× leads, 5 years): `components/Hero.tsx` stats array
- **Case studies**: `components/Work.tsx` projects array
- **Services**: `components/Services.tsx` services array
- **Articles**: `components/Insights.tsx` articles array

### Add a real headshot
Add your photo to the `/public` folder as `wanje.jpg`, then use it in the Hero:
```tsx
import Image from 'next/image'
<Image src="/wanje.jpg" alt="Wanje Ziro" width={500} height={600} />
```

### Change brand colors
All colors are CSS variables in `app/globals.css`:
```css
:root {
  --forest: #2d7d2d;   /* primary green accent */
  --ink: #1a1410;       /* dark/almost-black */
  --cream: #fdfaf5;     /* off-white background */
  --sand: #e8dfd0;      /* border/divider color */
}
```

### Connect a real form
Replace the `handleSubmit` function in `components/Contact.tsx` with your preferred service:
- **Formspree**: `fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: formData })`
- **EmailJS**: install `emailjs-com` and call `emailjs.send(...)`
- **WhatsApp redirect**: link to `https://wa.me/254700000000?text=...`

---

## Deployment

### Deploy to Vercel (recommended — free)

```bash
npm install -g vercel
vercel
```

Or connect the repo to [vercel.com](https://vercel.com) and it deploys automatically on every push.

### Deploy to Netlify

```bash
npm run build
# Upload the .next folder to Netlify, or use their CLI
```

---

## Design Notes

- **Aesthetic**: Editorial / refined organic — Playfair Display serif headings with DM Sans body
- **Color story**: Cream + forest green + deep ink — warm, trustworthy, premium
- **Interactions**: Scroll-reveal on every section, hover-to-dark on service/insight cards
- **Mobile**: Fully responsive — hamburger menu, stacked grids, readable type scale
- **Performance**: No heavy libraries, CSS transitions only, Google Fonts via next/font recommended for production

---

## Next Steps (Recommended)

1. **Add real photos** — headshot in Hero, project screenshots in Work section
2. **Connect form** to Formspree or WhatsApp for real lead capture
3. **Write real articles** — create `/app/insights/[slug]/page.tsx` for blog posts
4. **Add Google Analytics** — paste GA4 script in `app/layout.tsx`
5. **Set up custom domain** — point `wanjeziro.com` to Vercel

---

Built with intention. Designed to convert.
