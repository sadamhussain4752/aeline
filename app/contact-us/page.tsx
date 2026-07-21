'use client'

import { useEffect, useState } from 'react'
import { CTASection, PageHero, PageShell } from '@/components/AelineSite'
import { assets } from '@/components/aeline-content'
import { addLead, getStoredLeads } from '@/components/local-data'

const contactOptions = [
  {
    label: 'Strategy Call',
    value: 'Book a focused growth discussion',
  },
  {
    label: 'Campaign Planning',
    value: 'Branding, digital, offline, reels, and launch support',
  },
  {
    label: 'Automation',
    value: 'CRM, WhatsApp, AI chatbot, and reporting workflows',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState('')
  const [leadCount, setLeadCount] = useState(0)

  useEffect(() => {
    setLeadCount(getStoredLeads().length)
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('Please fill in name, email, and message.')
      return
    }

    addLead({
      name: form.name,
      email: form.email,
      company: form.company,
      message: form.message,
    })

    setForm({ name: '', email: '', company: '', message: '' })
    setStatus('Thanks! Your request has been saved.')
    setLeadCount((count) => count + 1)

    window.setTimeout(() => setStatus(''), 3600)
  }

  return (
    <PageShell>
      <PageHero
        eyebrow="Contact Bravera"
        title="Book a free strategy call"
        text="Tell us what you want to grow. We will help you shape the right mix of branding, digital marketing, offline campaigns, reels, websites, SEO, and automation."
        image={assets.card1}
      />

      <section className="section contact-page-section">
        <div className="container">
          <div className="contact-page-head">
            <div>
              <p className="eyebrow font-bold-1">Start a project</p>
              <h2 className="section-title font-bold-1">Let’s turn your next campaign into a clear growth system.</h2>
            </div>
            <p className="body-copy">
              Share a few details and our team will get back with a practical next step. No generic pitch, just a focused conversation around your brand, audience, and goals.
            </p>
          </div>

          <div className="contact-grid">
            <aside className="contact-card contact-intro-card">
              <span className="contact-card-tag">Free consultation</span>
              <h3 className="font-bold-1">What happens next?</h3>
              <div className="contact-option-list">
                {contactOptions.map((item) => (
                  <div key={item.label}>
                    <strong>{item.label}</strong>
                    <p>{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="contact-detail-box">
                <span>Email</span>
                <a href="mailto:hello@bravera.in">hello@bravera.in</a>
              </div>
              <div className="contact-detail-box">
                <span>Availability</span>
                <p>Monday to Saturday, 10:00 AM - 7:00 PM</p>
              </div>
              <div className="contact-lead-count">
                <strong>{String(leadCount).padStart(2, '0')}</strong>
                <span>saved enquiries in this workspace</span>
              </div>
            </aside>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <input
                  aria-label="Name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                />
                <input
                  aria-label="Email"
                  placeholder="Email address"
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                />
              </div>
              <input
                aria-label="Company"
                placeholder="Company / brand name"
                value={form.company}
                onChange={(event) => setForm({ ...form, company: event.target.value })}
              />
              <textarea
                aria-label="Project details"
                placeholder="Tell us about your project, service need, timeline, or growth goal"
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
              />
              <button className="button dark contact-submit" type="submit">
                Send Enquiry <span className="button-arrow">↗</span>
              </button>
              {status ? <p className="contact-status">{status}</p> : null}
            </form>
          </div>
        </div>
      </section>
      <CTASection />
    </PageShell>
  )
}
