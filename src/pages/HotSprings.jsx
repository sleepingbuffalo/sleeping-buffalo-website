import HeroSection from '../components/HeroSection'
import SectionEyebrow from '../components/SectionEyebrow'
import ScrollReveal from '../components/ScrollReveal'
import BookingBanner from '../components/BookingBanner'
import './HotSprings.css'

const hoursItems = [
  'Sunday – Thursday: 9:00 AM – 8:00 PM',
  'Friday – Saturday: 9:00 AM – 9:00 PM',
  'Day use swimming welcome — no reservation needed',
  'Guest towels available for $2',
  'All pools monitored for temperature and cleanliness',
  'Chemical-free, flow-through natural mineral water',
]

export default function HotSprings() {
  return (
    <>
      {/* HERO */}
      <HeroSection image="/images/indoor-pool-night-teal.png" alt="Indoor mineral pool glowing teal at night">
        <SectionEyebrow text="The Water" />
        <h1>Natural Hot Springs</h1>
      </HeroSection>

      {/* INDOOR FACILITY */}
      <section className="hs-indoor section-dark">
        <div className="container">
          <ScrollReveal>
            <div className="two-col">
              <div className="two-col-image">
                <img src="/images/indoor-pool-green-wide.png" alt="Wide view of the indoor mineral pool with green-tinted water" />
              </div>
              <div className="two-col-text">
                <SectionEyebrow text="Indoor Facility" />
                <h2>Year-Round Mineral Soaking</h2>
                <p>
                  The heart of Sleeping Buffalo is its 60&rsquo;&times;80&rsquo; indoor main pool, fed by
                  a constant flow of 108&deg; mineral water from deep beneath the Montana prairie.
                  Alongside the main pool, guests enjoy a hot tub, cold plunge, and dry sauna &mdash;
                  all under one roof.
                </p>
                <p>
                  Renovated in 2014, the indoor facility uses a non-chlorinated, flow-through system.
                  No chemicals are added &mdash; the water arrives pure and leaves the same way.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* OUTDOOR POOL */}
      <section className="hs-outdoor section-warm">
        <div className="container">
          <ScrollReveal>
            <SectionEyebrow text="New for 2025" />
            <h2>The Outdoor Pool</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="hs-dual-images">
              <img src="/images/outdoor-pool-main.png" alt="Large outdoor mineral pool with underwater lighting at dusk" />
              <img src="/images/hero-outdoor-pool.png" alt="Outdoor pool from above showing the SB logo on the pool floor" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="hs-outdoor-text">
              <p>
                Added in 2025, the new 128&rsquo;&times;60&rsquo; outdoor pool is the crown jewel of
                the resort. The SB logo adorns the pool floor, visible through the crystal-clear
                mineral water. Underwater lighting transforms the pool after dark.
              </p>
              <p>
                An outdoor hot tub sits alongside the main pool, and a turf lounge area offers
                space to relax between soaks under Montana&rsquo;s big sky.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* THE WATER STORY */}
      <section className="hs-water section-dark">
        <div className="container">
          <ScrollReveal>
            <div className="hs-water-wrap">
              <img src="/images/hot-tub-bubbles.png" alt="Close-up of mineral water bubbling in the hot tub" />
              <div className="hs-water-overlay">
                <SectionEyebrow text="The Source" />
                <h2>The Water Story</h2>
                <p>
                  A 3,200-foot artesian well drilled in 2021 produces mineral-rich water
                  containing silica, sulfates, calcium, and magnesium. The main pools receive entirely
                  new water every 5 hours. The hot tubs cycle completely every 30 minutes.
                </p>
                <p className="hs-water-highlight">100% natural, non-chlorinated, flow-through mineral water.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* POOL TEMPERATURE GUIDE */}
      <section className="hs-temps section-warm">
        <div className="container">
          <ScrollReveal>
            <SectionEyebrow text="Pool Temperatures" />
            <h2>Find Your Perfect Soak</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="hs-temps-grid">
              <div className="hs-temp-card">
                <span className="hs-temp-icon">🌊</span>
                <span className="hs-temp-deg">92°F</span>
                <h3>Indoor Main Pool</h3>
                <p>Perfectly warm for a long, leisurely soak</p>
              </div>
              <div className="hs-temp-card">
                <span className="hs-temp-icon">♨️</span>
                <span className="hs-temp-deg">105°F</span>
                <h3>Indoor Hot Tub</h3>
                <p>Deep heat for sore muscles and cold Montana nights</p>
              </div>
              <div className="hs-temp-card">
                <span className="hs-temp-icon">🏊</span>
                <span className="hs-temp-deg">95–100°F</span>
                <h3>Outdoor Main Pool</h3>
                <p>Our stunning new 128&rsquo;&times;60&rsquo; outdoor pool under the open sky</p>
              </div>
              <div className="hs-temp-card">
                <span className="hs-temp-icon">🛁</span>
                <span className="hs-temp-deg">103°F</span>
                <h3>Outdoor Hot Tubs</h3>
                <p>Soak under Montana&rsquo;s endless stars</p>
              </div>
              <div className="hs-temp-card hs-temp-cold">
                <span className="hs-temp-icon">❄️</span>
                <span className="hs-temp-deg">48°F</span>
                <h3>Cold Plunge Pool</h3>
                <p>For the brave — the ultimate contrast therapy experience</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SAUNA */}
      <section className="hs-sauna section-warm">
        <div className="container">
          <ScrollReveal>
            <div className="two-col two-col-reverse">
              <div className="two-col-text">
                <SectionEyebrow text="Heat" />
                <h2>Dry Sauna</h2>
                <p>
                  Step out of the mineral water and into the dry sauna. Cedar benches line the
                  interior, and a classic wooden bucket sits ready for those who like it hot.
                  The perfect complement to a cold plunge.
                </p>
              </div>
              <div className="two-col-image">
                <img src="/images/sauna.png" alt="Cedar-lined dry sauna with wooden benches and traditional bucket" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="hs-facilities section-dark">
        <div className="container">
          <ScrollReveal>
            <SectionEyebrow text="Facilities" />
            <h2>Locker Rooms &amp; Showers</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="hs-facilities-text">
              <p>
                Full locker rooms with showers and lockers are available for all guests. The
                original quarry rock from the Fort Peck Dam era lines the walls &mdash; a
                reminder that this building has stood since the late 1920s.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="hs-dual-images">
              <img src="/images/womans_lockerroom_shower.png" alt="Women's locker room showers" />
              <img src="/images/womans_lockerroom.png" alt="Women's locker room" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* HOURS & ADMISSION */}
      <section className="hs-hours section-warm">
        <div className="container">
          <ScrollReveal>
            <SectionEyebrow text="Plan Your Visit" />
            <h2>Hours &amp; Admission</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="hs-hours-card-main">
              <ul className="hs-hours-list">
                {hoursItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="hs-admission">
                <h3>Admission Rates</h3>
                <div className="hs-rates-grid">
                  <div className="hs-rate-item">
                    <span className="hs-rate-label">Adults 12+</span>
                    <span className="hs-rate-price">$17</span>
                  </div>
                  <div className="hs-rate-item">
                    <span className="hs-rate-label">Children 5–11 &amp; Seniors 60+</span>
                    <span className="hs-rate-price">$15</span>
                  </div>
                  <div className="hs-rate-item">
                    <span className="hs-rate-label">Infants 4 &amp; under</span>
                    <span className="hs-rate-price">$11</span>
                  </div>
                </div>
                <p className="hs-cabin-note">
                  Cabin &amp; suite guests receive complimentary swimmers daily (see <a href="/accommodations">Accommodations</a>)
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BOOKING BANNER */}
      <BookingBanner />
    </>
  )
}
