'use client'

import { FormEvent, useEffect, useState } from 'react'
import { CTASection, PageHero, PageShell } from '@/components/AelineSite'
import { assets } from '@/components/aeline-content'
import { addLead, getStoredLeads } from '@/components/local-data'

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
        eyebrow="Contact us"
        title="Start building smarter systems with Bravera"
        text="Tell us what you are trying to improve, automate, or understand. We will shape a clear next step."
        image={assets.about}
      />
      <section className="section">
        <div className="container">
          <p className="eyebrow">Get Started</p>
          <h2 className="section-title">Let’s talk about your next stage of growth</h2>
          <div className="contact-grid">
            <aside className="contact-card">
              <h3>Contact details</h3>
              <p className="body-copy" style={{ marginTop: 14 }}>hello@bravera.ai</p>
              <p className="body-copy">130 Strategy Street, New York, NY</p>
              <p className="body-copy">Monday to Friday, 9:00 AM - 6:00 PM</p>
              <p className="body-copy" style={{ marginTop: 16, color: 'rgba(0,0,0,0.8)' }}><strong>{leadCount}</strong> leads captured</p>
            </aside>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                aria-label="Name"
                placeholder="Name"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
              />
              <input
                aria-label="Email"
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
              />
              <input
                aria-label="Company"
                placeholder="Company"
                value={form.company}
                onChange={(event) => setForm({ ...form, company: event.target.value })}
              />
              <textarea
                aria-label="Project details"
                placeholder="Tell us about your project"
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
              />
              <button className="button dark" type="submit">Submit <span className="button-arrow">↗</span></button>
              {status ? <p className="body-copy" style={{ marginTop: 16, color: 'var(--lime)' }}>{status}</p> : null}
            </form>
          </div>
        </div>
      </section>
      <CTASection />
    </PageShell>
  )
}
