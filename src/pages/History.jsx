import SectionEyebrow from '../components/SectionEyebrow'
import ScrollReveal from '../components/ScrollReveal'
import './History.css'

const timeline = [
  { year: '2014', text: 'Major renovation begins. Indoor pool complex rebuilt.' },
  { year: '2021', text: 'New artesian well drilled.' },
  { year: '2023', text: '54 Prime Steakhouse & Buffalo Saloon open.' },
  { year: '2025', text: "New 128'×60' outdoor pool added." },
]

export default function History() {
  return (
    <>
      {/* HERO — Side by side Then & Now */}
      <section className="hist-hero">
        <div className="hist-hero-split">
          <div className="hist-hero-half">
            <img src="/images/history-bw-aerial.png" alt="Vintage 1920s aerial of the American Legion Health Pool" className="hist-hero-img hist-sepia" />
          </div>
          <div className="hist-hero-half">
            <img src="/images/aerial-steam-mist.png" alt="Modern aerial drone shot through steam over Sleeping Buffalo" className="hist-hero-img" />
          </div>
        </div>
        <div className="hist-hero-overlay" />
        <div className="hist-hero-content">
          <SectionEyebrow text="Est. 1929" />
          <h1>Then & Now</h1>
        </div>
      </section>

      {/* THE BEGINNING */}
      <section className="hist-beginning section-dark">
        <div className="hist-beginning-image-wrap">
          <img src="/images/history-bw-aerial.png" alt="Vintage aerial of the American Legion Health Pool" className="hist-beginning-img" />
          <div className="hist-beginning-overlay" />
        </div>
        <div className="container hist-beginning-content">
          <ScrollReveal>
            <SectionEyebrow text="The Beginning" />
            <h2>Built by the People, for the People</h2>
            <p>
              In the late 1920s, communities across Phillips County — Malta, Saco, and Hinsdale — joined forces
              with the American Legion to build a public health and recreation resort. The WPA and Resettlement
              Administration partnered in the effort, and many of the original stone structures were built with
              rock from the same quarries used in the Fort Peck Dam — one of the nation's greatest New Deal
              infrastructure projects.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* THE WATER SOURCE */}
      <section className="hist-section section-warm">
        <div className="container">
          <ScrollReveal>
            <SectionEyebrow text="The Source" />
            <h2>3,200 Feet Below</h2>
            <p className="hist-text">
              A 3,200-foot artesian well produces over 900 gallons per minute of 108° mineral water — rich in
              silica, sulfates, calcium, and magnesium. In 2021, the well was re-drilled to sustain another
              century of operation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* THE RENEWAL — TIMELINE */}
      <section className="hist-section section-dark">
        <div className="container">
          <ScrollReveal>
            <SectionEyebrow text="The Renewal" />
            <h2>2014 – 2025</h2>
          </ScrollReveal>
          <div className="hist-timeline">
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="hist-timeline-item">
                  <div className="hist-timeline-dot" />
                  <div className="hist-timeline-year">{item.year}</div>
                  <div className="hist-timeline-text">{item.text}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* STONE WALL STORY */}
      <section className="hist-section section-warm">
        <div className="container">
          <div className="hist-two-col">
            <ScrollReveal className="hist-two-col-image">
              <img src="/images/locker-room-stone.png" alt="Original quarry stone wall in the locker room" className="hist-stone-img" />
            </ScrollReveal>
            <ScrollReveal className="hist-two-col-text" delay={150}>
              <SectionEyebrow text="Still Standing" />
              <h2>The Stone Walls</h2>
              <p>
                The original stone walls inside our locker rooms were built from the same quarry rock as
                Fort Peck Dam. They've stood through Montana winters for nearly 100 years and still anchor
                the heart of the resort.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* HI-LINE LEGACY */}
      <section className="hist-legacy section-dark">
        <div className="container">
          <ScrollReveal>
            <div className="hist-legacy-content">
              <SectionEyebrow text="The Legacy" />
              <h2>Montana's Hi-Line Tradition</h2>
              <p>
                The only natural hot springs on Montana's northeastern tier — drawing bathers from
                North Dakota, Saskatchewan, and all of Montana since the 1920s.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
