'use client'

const logos = [
  { name: 'Vercel', icon: '▲' },
  { name: 'OpenAI', icon: '⬡' },
  { name: 'Stripe', icon: 'S' },
  { name: 'AWS', icon: '⛅' },
  { name: 'Google', icon: 'G' },
  { name: 'Microsoft', icon: '⊞' },
  { name: 'Salesforce', icon: '☁' },
  { name: 'Databricks', icon: '◈' },
]

export default function LogoMarquee() {
  const doubled = [...logos, ...logos, ...logos]

  return (
    <div className="relative py-12 overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm text-white/30 uppercase tracking-widest font-medium">
          Collaborating with leading AI and cloud technology providers
        </p>
      </div>

      {/* Left / right fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {doubled.map((logo, i) => (
          <div
            key={i}
            className="shrink-0 flex items-center gap-3 px-6 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300 cursor-default group"
          >
            <span className="text-xl text-white/30 group-hover:text-white/60 transition-colors font-bold">
              {logo.icon}
            </span>
            <span className="text-sm font-semibold text-white/40 group-hover:text-white/70 transition-colors">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
