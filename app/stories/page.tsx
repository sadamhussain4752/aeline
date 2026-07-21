'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CTASection, PageHero, PageShell } from '@/components/AelineSite'
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
      <section className="section stories-archive-section" id="stories">
        <div className="container">
          <div className="stories-archive-head">
            <div>
              <p className="eyebrow font-bold-1">Published insights</p>
              <h2 className="section-title font-bold-1">Ideas built for sharper brand growth</h2>
            </div>
            <p className="body-copy">
              Practical thinking on campaigns, creative systems, AI workflows, and performance-led brand building.
            </p>
          </div>

          <div className="stories-feature-grid">
            {allPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={post.slug}
                className={`story-feature-card tilt-card ${index === 0 ? 'featured' : ''}`}
              >
                <img src={post.image} alt={post.title} />
                <div className="story-feature-overlay">
                  <div className="story-meta-row">
                    <span>{index === 0 ? 'Featured Story' : 'Story'}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-bold-1">{post.title}</h3>
                  <p>{post.text}</p>
                  <strong>Read story ↗</strong>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </PageShell>
  )
}
