import { Gallery } from '../components/Gallery'
import { SectionHeading } from '../components/SectionHeading'

const highlights = [
  { label: 'Hackathons', value: '04', detail: 'Rapid AI prototyping tracks' },
  { label: 'Community Workshops', value: '08', detail: 'Talks on GenAI and tooling' },
  { label: 'Student Projects', value: '10+', detail: 'Shipped with measurable impact' },
]

export function GalleryPage() {
  return (
    <div className="page">
      <Gallery />

      <section className="section">
        <SectionHeading
          eyebrow="Highlights"
          title="Beyond the screen"
          description="I document experiments, hackathon sprints, and community-building moments to stay inspired."
        />

        <div className="highlight-grid">
          {highlights.map((highlight) => (
            <article key={highlight.label}>
              <h3>{highlight.value}</h3>
              <p>{highlight.label}</p>
              <span>{highlight.detail}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}











