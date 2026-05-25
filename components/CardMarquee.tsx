'use client'

const cards = [
  { title: 'AI Strategy', color: '#6D45F0', icon: '⚡' },
  { title: 'Data Analytics', color: '#22D3A0', icon: '📊' },
  { title: 'Business Consulting', color: '#3B82F6', icon: '🎯' },
  { title: 'Digital Transformation', color: '#F59E0B', icon: '🚀' },
  { title: 'Automation', color: '#EC4899', icon: '⚙️' },
  { title: 'Cloud Strategy', color: '#22D3A0', icon: '☁️' },
  { title: 'Machine Learning', color: '#6D45F0', icon: '🤖' },
  { title: 'Growth Strategy', color: '#3B82F6', icon: '📈' },
]

export default function CardMarquee() {
  const doubled = [...cards, ...cards]

  return (
    <div className="relative py-8 overflow-hidden border-y border-white/[0.05]" style={{ background: 'rgba(13,15,20,0.8)' }}>
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-secondary to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-secondary to-transparent z-10 pointer-events-none" />

      <div className="flex gap-4 marquee-container">
        <div className="flex gap-4 marquee-track animate-marquee whitespace-nowrap shrink-0">
          {doubled.map((card, i) => (
            <div
              key={i}
              className="glass-card flex items-center gap-3 px-5 py-3 shrink-0 cursor-default select-none"
              style={{ borderColor: `${card.color}22` }}
            >
              <span className="text-lg">{card.icon}</span>
              <span className="text-sm font-semibold text-white/80">{card.title}</span>
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: card.color, boxShadow: `0 0 6px ${card.color}` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
