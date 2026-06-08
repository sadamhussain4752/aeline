'use client'

import { useEffect, useState } from 'react'
import { BlogSection, CTASection, PageHero, PageShell } from '@/components/AelineSite'
import { assets, posts as defaultPosts } from '@/components/aeline-content'
import { getStoredPosts } from '@/components/local-data'

export default function BlogPage() {
  const [allPosts, setAllPosts] = useState(defaultPosts)

  useEffect(() => {
    setAllPosts(getStoredPosts())
  }, [])

  return (
    <PageShell>
      <PageHero
        eyebrow="Blog and Articles"
        title="Latest insights and trends"
        text="Whether you’re optimizing today or building for tomorrow, we help you move faster with confidence."
        image={assets.card8}
      />
      <BlogSection />
      <section className="section tight">
        <div className="container">
          <p className="eyebrow">Published</p>
          <h2 className="section-title">Recent published</h2>
          <div className="faq-list">
            {allPosts.map((post) => (
              <a key={post.slug} href={post.slug} className="faq-item">
                <p className="eyebrow">{post.date}</p>
                <h3>{post.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </PageShell>
  )
}
