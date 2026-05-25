'use client'
import { useRef, useState } from 'react'

const expertise = [
  {
    id: 'automation',
    title: 'Automation & Optimization',
    desc: 'Streamline your operations through intelligent workflow automation that saves time, reduces errors, and boosts productivity across every team.',
    color: '#6D45F0',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L20 7V15L11 20L2 15V7L11 2Z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="11" cy="11" r="3" fill="currentColor"/>
      </svg>
    ),
    stats: [
      { label: 'Monthly Expense', value: '$4,900', max: '$10,000', pct: 49 },
      { label: 'Tasks Automated', value: '50+', icon: '⚡' },
    ],
  },
  {
    id: 'analytics',
    title: 'Data Analytics & Insights',
    desc: 'Transform raw data into strategic insight using advanced analytics, dashboards, and predictive modeling that keeps you ahead.',
    color: '#3B82F6',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 17L8 11L12 14L17 7L21 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="3" cy="17" r="1.5" fill="currentColor"/>
        <circle cx="21" cy="10" r="1.5" fill="currentColor"/>
      </svg>
    ),
    chartBars: [30, 55, 40, 70, 50, 85, 65, 90, 75, 100, 80, 95, 70, 88],
  },
  {
    id: 'digital',
    title: 'Digital Transformation',
    desc: 'We guide organizations through full-scale digital evolution — modernizing systems, processes, and decision-making frameworks for the AI era.',
    color: '#22D3A0',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 11h8M11 7v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    performance: 49,
  },
  {
    id: 'experience',
    title: 'Experience Intelligence',
    desc: 'Combine data and design to deliver smarter, more personalized digital experiences that connect deeply with users and convert.',
    color: '#F59E0B',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="9" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    profiles: [
      { name: 'Ann Stanton', growth: '+2.5%' },
      { name: 'Livia Curtis', growth: '+6%' },
      { name: 'Lindsey Press', growth: '+5%' },
    ],
  },
]

export default function Expertise() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="expertise" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(34,211,160,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="section-label">Expertise</span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Where human insight meets intelligent technology
          </h2>
          <p className="text-lg text-white/50">
            We help businesses harness technology — not to replace human creativity, but to amplify it.
            Enabling smarter decisions and faster results.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {expertise.map((item) => (
            <div
              key={item.id}
              className="glass-card p-8 cursor-default transition-all duration-300 hover:scale-[1.01]"
              style={hovered === item.id ? { borderColor: `${item.color}30`, boxShadow: `0 0 40px ${item.color}12` } : {}}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Icon + title */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}25` }}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">{item.desc}</p>

              {/* Visual element per card type */}
              {item.id === 'automation' && item.stats && (
                <div className="glass-card p-4 bg-white/[0.02]">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-white/40">{item.stats[0].label}</span>
                    <span className="text-sm font-bold" style={{ color: item.color }}>{item.stats[0].value}</span>
                  </div>
                  <div className="h-1.5 bg-white/[0.08] rounded-full overflow-hidden mb-4">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ width: `${item.stats[0].pct}%`, background: `linear-gradient(90deg, ${item.color}, #22D3A0)` }}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="px-3 py-1.5 rounded-lg text-xs font-bold"
                      style={{ background: `${item.color}15`, color: item.color }}
                    >
                      {item.stats[1].icon} {item.stats[1].value} {item.stats[1].label}
                    </div>
                  </div>
                </div>
              )}

              {item.id === 'analytics' && item.chartBars && (
                <div className="glass-card p-4 bg-white/[0.02]">
                  <div className="text-xs text-white/40 mb-3">Performance — Past 12 months</div>
                  <div className="flex items-end gap-1 h-16">
                    {item.chartBars.map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm transition-all duration-500"
                        style={{
                          height: `${h}%`,
                          background: i === item.chartBars!.length - 1
                            ? `linear-gradient(to top, ${item.color}, ${item.color}99)`
                            : `rgba(59,130,246,${0.15 + (h / 100) * 0.3})`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-[10px] text-white/30 mt-2">
                    {['2019', '2020', '2021', '2022', '2023', '2024', '2025'].map((y) => (
                      <span key={y}>{y}</span>
                    ))}
                  </div>
                </div>
              )}

              {item.id === 'digital' && (
                <div className="glass-card p-4 bg-white/[0.02]">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-white/40">Business growth</span>
                    <span className="text-xs text-accent-green flex items-center gap-1">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 7L5 3L8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      +2.5%
                    </span>
                  </div>
                  <div
                    className="text-4xl font-black mb-2"
                    style={{ background: `linear-gradient(135deg, ${item.color}, #fff)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                  >
                    {item.performance}%
                  </div>
                  <div className="h-1.5 bg-white/[0.08] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${item.performance}%`, background: `linear-gradient(90deg, ${item.color}, #3B82F6)` }}
                    />
                  </div>
                  <div className="mt-3 text-xs text-white/30">Performance in the past 7 days</div>
                </div>
              )}

              {item.id === 'experience' && item.profiles && (
                <div className="glass-card p-4 bg-white/[0.02]">
                  <div className="text-xs text-white/40 mb-4">Client success metrics</div>
                  <div className="space-y-3">
                    {item.profiles.map((profile, pi) => (
                      <div key={pi} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                            style={{ background: `linear-gradient(135deg, ${item.color}60, ${item.color}30)`, border: `1px solid ${item.color}40` }}
                          >
                            {profile.name[0]}
                          </div>
                          <span className="text-sm text-white/70">{profile.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-accent-green">{profile.growth}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex -space-x-1.5">
                      {[item.color, '#3B82F6', '#22D3A0'].map((c, ci) => (
                        <div key={ci} className="w-6 h-6 rounded-full border border-bg-card" style={{ background: c }} />
                      ))}
                    </div>
                    <span className="text-xs text-white/40">+5,000 customers</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
