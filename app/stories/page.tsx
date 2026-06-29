'use client'

import { useEffect, useState } from 'react'
import { BlogSection, CTASection, PageHero, PageShell } from '@/components/AelineSite'
import { assets, posts as defaultPosts } from '@/components/aeline-content'
import { getStoredPosts } from '@/components/local-data'

export default function StoriesPage() {
  const [allPosts, setAllPosts] = useState(defaultPosts)

  useEffect(() => {
    setAllPosts(getStoredPosts())
  }, [])

  return (
    <PageShell>
      <PageHero
        eyebrow="Stories"
        title="Latest stories and trends"
        text="Ideas, examples, and campaign lessons for brands building stronger digital and offline visibility."
        image={assets.card8}
      />
      <BlogSection />
      <section className="section tight">
        <div className="container">
          <p className="eyebrow font-bold-1">Published</p>
          <h2 className="section-title font-bold-1">Recent stories</h2>
          <div className="faq-list">
            {allPosts.map((post) => (
              <a key={post.slug} href={post.slug} className="faq-item">
                <p className="eyebrow font-bold-1">{post.date}</p>
                <h3 className="font-bold-1">{post.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </PageShell>
  )
}
