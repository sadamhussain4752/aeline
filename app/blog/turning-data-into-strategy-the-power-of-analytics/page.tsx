import { BlogSection, CTASection, PageHero, PageShell } from '@/components/AelineSite'
import { assets } from '@/components/aeline-content'

export default function BlogDetailPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="September 16, 2025"
        title="Turning Data into Strategy: The Power of Analytics"
        text="Analytics becomes valuable when teams can turn evidence into decisions, priorities, and measurable action."
        image={assets.card8}
      />
      <section className="section">
        <article className="article">
          <p>
            Data is no longer just a reporting layer. For modern teams, it is the raw material for strategy, helping leaders understand what is happening, why it is happening, and where the next opportunity is likely to appear.
          </p>
          <p>
            The strongest analytics programs start with business questions instead of dashboards. They define which decisions matter, identify the signals behind those decisions, and create repeatable systems for reviewing outcomes.
          </p>
          <img src={assets.card4} alt="Analytics dashboard and planning workspace" />
          <h2>From information to action</h2>
          <p>
            Effective analytics connects multiple layers: clean data, relevant metrics, fast interpretation, and clear ownership. When those pieces work together, teams can move beyond hindsight and start using patterns to guide investments, operations, and customer experiences.
          </p>
          <p>
            AI extends this advantage by finding anomalies, forecasting demand, and surfacing recommendations. The goal is not to replace judgment, but to give people sharper context for decisions that already require expertise.
          </p>
          <h2>Build a strategy rhythm</h2>
          <p>
            The best organizations create a rhythm around analytics. They review the right measures often, challenge assumptions, and translate findings into practical next steps. This turns data from a passive archive into a living strategy system.
          </p>
        </article>
      </section>
      <BlogSection />
      <CTASection />
    </PageShell>
  )
}
