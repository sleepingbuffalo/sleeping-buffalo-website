import HeroSection from '../components/HeroSection'
import SectionEyebrow from '../components/SectionEyebrow'
import ScrollReveal from '../components/ScrollReveal'
import BookingBanner from '../components/BookingBanner'
import './Accommodations.css'

const cabins = [
  {
    title: 'Cabins #1 & #3',
    subtitle: 'Deluxe Two-Bedroom Cabin',
    images: [
      { src: '/images/cabin-1-fireplace.png', alt: 'Cabin 1 interior with stone fireplace and hardwood floors' },
      { src: '/images/cabin-exterior-day.png', alt: 'Log and stone cabin exterior in daylight' },
    ],
    features: [
      'Two separate bedrooms, each with a queen bed',
      'Living room with TV and pull-out couch',
      'Gas fireplace (stone surround)',
      'Full kitchen: oven, stove, microwave, dishwasher, sink, all utensils',
      'Full bathroom',
      'Log & stone construction',
    ],
    swimmers: '4 free swimmers per day included',
    tagline: 'Our most spacious cabins — perfect for families or two couples sharing.',
  },
  {
    title: 'Cabin #2',
    subtitle: 'Deluxe Stone Cabin',
    images: [
      { src: '/images/cabin-stone-detail.png', alt: 'Cabin stone wall and timber detail' },
      { src: '/images/cabin-exterior-day.png', alt: 'Log and stone cabin exterior' },
    ],
    features: [
      'Unique thick stone wall construction throughout',
      'Cozy queen bedroom with pull-out couch',
      'Full kitchen: oven, stove, microwave, dishwasher, sink, all utensils',
      'Full bathroom',
    ],
    swimmers: '2 free swimmers per day included',
    tagline: 'One of a kind — the original stone walls have stood since the 1920s.',
  },
  {
    title: 'Cabins #4 & #5',
    subtitle: 'Log Cabins',
    images: [
      { src: '/images/cabin-5-exterior.png', alt: 'Round-log cabin exterior with covered porch' },
      { src: '/images/cabin-5-interior.png', alt: 'Cabin interior with vaulted log beam ceiling and rustic log bed' },
    ],
    features: [
      'Brand new round-log construction, vaulted log beam ceiling',
      'Queen bed with pull-out couch',
      'Full kitchen: fridge, microwave, dishwasher, sink, all utensils (no oven)',
      'Full bathroom',
      'Covered porch, TV',
    ],
    swimmers: '2 free swimmers per day included',
    tagline: 'Fresh log construction with all the modern comforts — cozy, bright, and steps from the springs.',
  },
]

const suites = [
  {
    title: 'Suite #1 — King Suite',
    images: [
      { src: '/images/suite-1-king.png', alt: 'Suite 1 king bed with upscale rustic decor' },
      { src: '/images/suite-1-bathroom.png', alt: 'Suite 1 double vanity bathroom with marble countertop' },
      { src: '/images/suite-1-shower.png', alt: 'Suite 1 walk-in tiled shower with mosaic accent' },
    ],
    features: [
      'King bed + pull-out couch',
      'Living room area',
      'Full bathroom with double vanity, marble countertop, walk-in tiled shower with glass mosaic accents',
      'Half bathroom',
    ],
    swimmers: '2 free swimmers per day included',
    tagline: 'Our most luxurious room — perfect for couples.',
  },
  {
    title: 'Suite #2 — Double Queen Suite',
    images: [
      { src: '/images/suite-2-beds.png', alt: 'Suite 2 with two queen beds and rustic wood frames' },
    ],
    features: [
      'Two queen beds',
      'Full bathroom',
    ],
    swimmers: '2 free swimmers per day included',
    tagline: 'Perfect for families or groups of friends.',
  },
  {
    title: 'Suite #3 — Queen Suite',
    images: [],
    features: [
      'One queen bed',
      'Full bathroom',
    ],
    swimmers: '2 free swimmers per day included',
    tagline: 'Comfortable and cozy for couples or solo travelers.',
  },
]

const includes = [
  'Free swimming access (see rates above)',
  'Full resort grounds access',
  'Steps from the natural hot springs pools',
  'Booking via Resnexus — instant confirmation',
]

export default function Accommodations() {
  return (
    <>
      {/* HERO */}
      <HeroSection image="/images/cabin-exterior-night.png" alt="Sleeping Buffalo cabins under a starry Montana sky">
        <SectionEyebrow text="Accommodations" />
        <h1>Sleep Steps from the Springs</h1>
      </HeroSection>

      {/* INTRO */}
      <section className="acc-intro section-dark">
        <div className="container">
          <ScrollReveal>
            <p className="acc-intro-text">
              Fall asleep to silence and wake up steps from 108-degree mineral water. Our cabins and suites sit right on the resort grounds — no driving, no hassle, just Montana sky overhead and warm springs waiting outside your door.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CABIN CARDS */}
      <section className="acc-cabins section-dark">
        <div className="container">
          <ScrollReveal>
            <SectionEyebrow text="Cabins" />
            <h2>Rustic Log &amp; Stone Cabins</h2>
          </ScrollReveal>

          <div className="acc-cards-grid">
            {cabins.map((cabin, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="acc-card">
                  <div className="acc-card-image-wrap">
                    <div className="acc-card-image-duo">
                      {cabin.images.map((img, j) => (
                        <img key={j} src={img.src} alt={img.alt} className="acc-card-image" />
                      ))}
                    </div>
                  </div>
                  <div className="acc-card-body">
                    <h3 className="acc-card-title">{cabin.title}</h3>
                    <span className="acc-card-subtitle">{cabin.subtitle}</span>
                    <ul className="acc-card-features">
                      {cabin.features.map((f, k) => (
                        <li key={k}>{f}</li>
                      ))}
                    </ul>
                    <span className="acc-card-swimmers">{cabin.swimmers}</span>
                    <p className="acc-card-tagline">{cabin.tagline}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOTEL SUITES */}
      <section className="acc-suites section-warm">
        <div className="container">
          <ScrollReveal>
            <SectionEyebrow text="Hotel Suites" />
            <h2>Hotel-Style Suites Steps from the Pools</h2>
          </ScrollReveal>

          <div className="acc-suites-grid">
            {suites.map((suite, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="acc-suite-card">
                  {suite.images.length > 0 && (
                    <div className="acc-suite-images">
                      {suite.images.map((img, j) => (
                        <div key={j} className="acc-suite-image-wrap">
                          <img src={img.src} alt={img.alt} className="acc-suite-image" />
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="acc-suite-body">
                    <h3 className="acc-suite-title">{suite.title}</h3>
                    <ul className="acc-card-features">
                      {suite.features.map((f, k) => (
                        <li key={k}>{f}</li>
                      ))}
                    </ul>
                    <span className="acc-card-swimmers">{suite.swimmers}</span>
                    <p className="acc-card-tagline">{suite.tagline}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Shared Kitchen */}
            <ScrollReveal delay={suites.length * 120}>
              <div className="acc-suite-card">
                <div className="acc-suite-images">
                  <div className="acc-suite-image-wrap">
                    <img src="/images/suite-kitchen.png" alt="Shared suite kitchen with stainless appliances and dining table" className="acc-suite-image" />
                  </div>
                </div>
                <div className="acc-suite-body">
                  <h3 className="acc-suite-title">Shared Suite Kitchen</h3>
                  <p className="acc-suite-desc">Full stainless kitchen: range, oven, microwave, dishwasher, sink, dining table. Shared between all three suites.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SWIMMING INCLUDED — PRICING */}
      <section className="acc-swimming section-dark">
        <div className="container">
          <ScrollReveal>
            <div className="acc-swimming-card">
              <SectionEyebrow text="Swimming Included" />
              <h2>Complimentary Pool Access</h2>
              <p className="acc-swimming-intro">All cabin and suite guests receive complimentary daily swimming access.</p>

              <div className="acc-swimming-tiers">
                <div className="acc-swimming-tier">
                  <span className="acc-swimming-tier-label">Cabins #1 &amp; #3</span>
                  <span className="acc-swimming-tier-value">4 free swimmers per day</span>
                </div>
                <div className="acc-swimming-tier">
                  <span className="acc-swimming-tier-label">All other cabins &amp; suites</span>
                  <span className="acc-swimming-tier-value">2 free swimmers per day</span>
                </div>
              </div>

              <p className="acc-swimming-access">Cabin &amp; suite guests enjoy 24/7 pool access — swim any time, day or night.</p>
              <p className="acc-swimming-note">Additional swimmers receive a guest discount.</p>

              <div className="acc-swimming-rates">
                <h3>Day Use Swimming Rates (Non-Guests)</h3>
                <div className="acc-rates-grid">
                  <div className="acc-rate-item">
                    <span className="acc-rate-label">Adults 12+</span>
                    <span className="acc-rate-price">$17</span>
                  </div>
                  <div className="acc-rate-item">
                    <span className="acc-rate-label">Children 5–11 &amp; Seniors 60+</span>
                    <span className="acc-rate-price">$15</span>
                  </div>
                  <div className="acc-rate-item">
                    <span className="acc-rate-label">Infants 4 &amp; under</span>
                    <span className="acc-rate-price">$11</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ALL ACCOMMODATIONS INCLUDE */}
      <section className="acc-includes section-warm">
        <div className="container">
          <ScrollReveal>
            <SectionEyebrow text="Every Stay" />
            <h2>All Accommodations Include</h2>
            <ul className="acc-includes-list">
              {includes.map((item, i) => (
                <li key={i} className="acc-includes-item">{item}</li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* BOOKING BANNER */}
      <BookingBanner />
    </>
  )
}
