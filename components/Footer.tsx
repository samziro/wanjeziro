export default function Footer() {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/wanjeziro' },
    { name: 'Facebook', url: 'https://facebook.com/wanjezir0' },
    { name: 'Tiktok', url: 'https://tiktok.com/@wanje_ziro' },
  ]

  return (
    <footer className="py-12 px-6 border-t border-[var(--sand)] bg-[var(--cream)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div>
          <p className="font-display text-xl font-medium text-[var(--navy-900)]">
            Wanje Ziro
          </p>
          <p className="text-xs font-light opacity-40 mt-1 text-[var(--navy-900)">
            Digital Growth Strategist for SMEs
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-8">
          {socialLinks.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-light opacity-40 hover:opacity-80 transition-opacity link-underline"
            >
              {platform.name}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs font-light opacity-30 text-center md:text-right">
          © {new Date().getFullYear()} Wanje Ziro. All rights reserved.
        </p>

      </div>
    </footer>
  )
}