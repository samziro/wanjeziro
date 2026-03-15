export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-[var(--sand)] bg-[var(--cream)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-xl font-medium text-[var(--ink)]">Wanje Ziro</p>
          <p className="text-xs font-light opacity-40 mt-1">Digital Growth Strategist for SMEs</p>
        </div>

        <div className="flex items-center gap-8">
          {['LinkedIn', 'Facebook', 'Twitter'].map((platform) => (
            <a
              key={platform}
              href="#"
              className="text-xs font-light opacity-40 hover:opacity-80 transition-opacity link-underline"
            >
              {platform}
            </a>
          ))}
        </div>

        <p className="text-xs font-light opacity-30">
          © {new Date().getFullYear()} Wanje Ziro. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
