'use client'

import { useEffect, useState } from 'react'
import { PageHero, PageShell } from '@/components/AelineSite'
import { assets } from '@/components/aeline-content'
import { BlogPost, Lead, getStoredLeads, getStoredPosts, savePosts } from '@/components/local-data'

export default function AdminPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [leads, setLeads] = useState<Lead[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [status, setStatus] = useState('')

  useEffect(() => {
    setPosts(getStoredPosts())
    setLeads(getStoredLeads())
  }, [])

  const selectedPost = posts[selectedIndex] || null

  const updatePostField = (field: keyof BlogPost, value: string) => {
    if (!selectedPost) return
    const next = [...posts]
    next[selectedIndex] = { ...selectedPost, [field]: value }
    setPosts(next)
  }

  const handleSave = () => {
    savePosts(posts)
    setStatus('Blog posts saved to local storage.')
    window.setTimeout(() => setStatus(''), 2800)
  }

  const handleAddPost = () => {
    const nextPost: BlogPost = {
      title: 'New AI article',
      date: 'June 2026',
      slug: `/blog/new-ai-post-${Date.now()}`,
      image: assets.card8,
      text: 'Add your post summary here.',
    }
    setPosts([nextPost, ...posts])
    setSelectedIndex(0)
  }

  const handleDeletePost = (index: number) => {
    const next = posts.filter((_, i) => i !== index)
    setPosts(next)
    setSelectedIndex(Math.max(0, Math.min(next.length - 1, selectedIndex)))
  }

  return (
    <PageShell>
      <PageHero
        eyebrow="Admin panel"
        title="Manage blog content and captured leads"
        text="Edit your blog list, add new AI posts, and review lead submissions all from one dashboard."
        image={assets.card1}
      />

      <section className="section">
        <div className="container">
          <div className="split" style={{ alignItems: 'start' }}>
            <div>
              <p className="eyebrow">Blog editor</p>
              <h2 className="section-title">Update posts and manage article metadata</h2>
            </div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <button className="button dark" type="button" onClick={handleAddPost}>
                Add new post
              </button>
              <button className="button" type="button" onClick={handleSave}>
                Save updates
              </button>
            </div>
          </div>

          <div className="blog-grid" style={{ marginTop: 24 }}>
            <div style={{ display: 'grid', gap: 14 }}>
              {posts.map((post, index) => (
                <button
                  key={post.slug}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={`button ${selectedIndex === index ? 'dark' : ''}`}
                  style={{ justifyContent: 'flex-start', padding: '16px 18px', width: '100%', textAlign: 'left' }}
                >
                  <strong style={{ display: 'block', marginBottom: 4 }}>{post.title}</strong>
                  <span style={{ color: 'rgba(255,255,255,0.72)', fontSize: 14 }}>{post.date}</span>
                </button>
              ))}
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: 28, borderRadius: 24, border: '1px solid rgba(255,255,255,0.08)' }}>
              {selectedPost ? (
                <>
                  <label style={{ display: 'block', marginBottom: 14 }}>
                    <span className="eyebrow">Title</span>
                    <input
                      value={selectedPost.title}
                      onChange={(event) => updatePostField('title', event.target.value)}
                      style={{ width: '100%', marginTop: 10, padding: 12, borderRadius: 16, border: '1px solid rgba(255,255,255,0.16)', background: 'rgba(255,255,255,0.08)', color: '#fff' }}
                    />
                  </label>
                  <label style={{ display: 'block', marginBottom: 14 }}>
                    <span className="eyebrow">Date</span>
                    <input
                      value={selectedPost.date}
                      onChange={(event) => updatePostField('date', event.target.value)}
                      style={{ width: '100%', marginTop: 10, padding: 12, borderRadius: 16, border: '1px solid rgba(255,255,255,0.16)', background: 'rgba(255,255,255,0.08)', color: '#fff' }}
                    />
                  </label>
                  <label style={{ display: 'block', marginBottom: 14 }}>
                    <span className="eyebrow">Slug</span>
                    <input
                      value={selectedPost.slug}
                      onChange={(event) => updatePostField('slug', event.target.value)}
                      style={{ width: '100%', marginTop: 10, padding: 12, borderRadius: 16, border: '1px solid rgba(255,255,255,0.16)', background: 'rgba(255,255,255,0.08)', color: '#fff' }}
                    />
                  </label>
                  <label style={{ display: 'block', marginBottom: 14 }}>
                    <span className="eyebrow">Image URL</span>
                    <input
                      value={selectedPost.image}
                      onChange={(event) => updatePostField('image', event.target.value)}
                      style={{ width: '100%', marginTop: 10, padding: 12, borderRadius: 16, border: '1px solid rgba(255,255,255,0.16)', background: 'rgba(255,255,255,0.08)', color: '#fff' }}
                    />
                  </label>
                  <label style={{ display: 'block', marginBottom: 14 }}>
                    <span className="eyebrow">Summary</span>
                    <textarea
                      value={selectedPost.text}
                      onChange={(event) => updatePostField('text', event.target.value)}
                      style={{ width: '100%', marginTop: 10, minHeight: 140, padding: 12, borderRadius: 16, border: '1px solid rgba(255,255,255,0.16)', background: 'rgba(255,255,255,0.08)', color: '#fff' }}
                    />
                  </label>
                  <button
                    type="button"
                    className="button dark"
                    onClick={() => handleDeletePost(selectedIndex)}
                    style={{ marginTop: 12 }}
                  >
                    Delete post
                  </button>
                  {status ? <p style={{ marginTop: 16, color: 'var(--lime)' }}>{status}</p> : null}
                </>
              ) : (
                <p className="body-copy">Select a post to edit it.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className="split" style={{ alignItems: 'start' }}>
            <div>
              <p className="eyebrow">Leads</p>
              <h2 className="section-title">Captured contact submissions</h2>
              <p className="body-copy">These leads are saved locally in the browser so you can test your contact workflow. Refresh to view the latest entries.</p>
            </div>
          </div>

          <div className="faq-list" style={{ marginTop: 28 }}>
            {leads.length ? leads.map((lead) => (
              <article key={lead.id} className="faq-item">
                <h3>{lead.name} — {lead.company}</h3>
                <p className="body-copy">{lead.email}</p>
                <p className="body-copy" style={{ marginTop: 10 }}>{lead.message}</p>
                <p className="body-copy" style={{ marginTop: 8, color: 'rgba(255,255,255,0.62)' }}>{new Date(lead.createdAt).toLocaleString()}</p>
              </article>
            )) : (
              <p className="body-copy">No leads captured yet. Use the contact form to create entries.</p>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
