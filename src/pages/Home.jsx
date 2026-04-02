import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import SectionEyebrow from '../components/SectionEyebrow'
import ScrollReveal from '../components/ScrollReveal'
import FactsStrip from '../components/FactsStrip'
import AmenityCard from '../components/AmenityCard'
import BookingBanner from '../components/BookingBanner'
import './Home.css'

const RESNEXUS_URL = 'https://reserve5.resnexus.com/resnexus/reservations/lodging/218F8A20-09E7-49C0-AA76-94DB64F3DFD0'

const amenities = [
  { image: '/images/outdoor-pool-main.png', tag: 'The Water', title: 'Natural Hot Springs', description: '108° chemical-free mineral water. Indoor & outdoor pools, hot tub, sauna. Open year-round.' },
  { image: '/images/indoor-pool-night-teal.png', tag: 'Indoor Pools', title: 'Year-Round Soaking', description: "60'×80' indoor main pool, hot tub, cold plunge, and sauna — all fed by the artesian well." },
  { image: '/images/cabin-exterior-night.png', tag: 'Stay', title: 'Cabins & Suites', description: "Luxury log & stone cabins under Montana's endless stars. Full kitchens, covered decks, resort access." },
  { image: '/images/aerial-rv-park.png', tag: 'Camp', title: 'RV Park', description: '31 full hook-up sites, pull-throughs, bathhouse. Big rig friendly.' },
  { image: '/images/saloon-interior-bison.png', tag: 'Dine & Drink', title: 'Buffalo Saloon & 54 Prime', description: 'Gourmet steakhouse, full bar, pool table, darts. From ranch to table — literally.' },
  { image: '/images/aerial-full-property.png', tag: 'Nelson Reservoir', title: 'Fishing, Boating & Ice', description: '4,100 acres of world-class walleye, pike, and perch — right across the road.' },
]

const galleryImages = [
  { src: '/images/hero-outdoor-pool.png', alt: 'Outdoor mineral pool with SB logo', large: true },
  { src: '/images/indoor-pool-night-teal.png', alt: 'Indoor pool with turquoise underwater lights' },
  { src: '/images/saloon-exterior-night.png', alt: 'Buffalo Saloon at night' },
  { src: '/images/cabin-exterior-night.png', alt: 'Cabin under Montana stars' },
  { src: '/images/aerial-steam-mist.png', alt: 'Aerial through steam and mist' },
]

const testimonials = [
  { quote: 'Just spent a few days camping and swimming here. Excellent service, very clean, great camping, and the pool was amazing. We will be going back and telling all our friends.', attribution: 'Google Review' },
  { quote: 'There is truly nothing like it in northern Montana. The mineral water feels completely different from a regular pool. The cabin was cozy and the staff genuinely wonderful.', attribution: 'Repeat Guest' },
  { quote: "We drove from Williston just for the day and it was 100% worth it. The kids loved it. A hidden gem on the Hi-Line.", attribution: 'Williston, ND Family' },
  { quote: 'Stopped overnight on our way home from Glacier. Quiet, with plenty of RV sites that can accommodate pretty big rigs. The hot springs pool house is amazing!', attribution: 'RV Traveler' },
  { quote: 'The hot springs were incredible — clean, relaxing, and just what we needed to recharge. The staff was fantastic across the board: friendly, helpful, and genuinely seemed to care.', attribution: 'Verified Guest' },
  { quote: 'If you are leaving or coming to Glacier NP and driving on US-2, this should be your overnight stop. Incredible value and an unforgettable experience.', attribution: 'Highway 2 Traveler' },
  { quote: "The pools are amazing, the cabins are cozy, and the Buffalo Saloon is a blast. We had no idea something like this existed out here. Absolutely coming back.", attribution: 'Weekend Getaway' },
  { quote: "Clean. Friendly. Fun. Relaxing. Three pools and a sauna. Try the cold plunge! We can't believe this place isn't more well known.", attribution: 'TripAdvisor Guest' },
]

function TestimonialCarousel({ items }) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % items.length)
  }, [items.length])

  const prev = useCallback(() => {
    setCurrent(c => (c - 1 + items.length) % items.length)
  }, [items.length])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [paused, next])

  const t = items[current]

  return (
    <div
      className="tc-wrap"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button className="tc-arrow tc-arrow-left" onClick={prev} aria-label="Previous review">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
      </button>

      <div className="tc-slide-area">
        <div className="tc-slide" key={current}>
          <div className="tc-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <div className="tc-quote-mark">&ldquo;</div>
          <p className="tc-text">{t.quote}</p>
          <span className="tc-attr">&mdash; {t.attribution}</span>
        </div>
      </div>

      <button className="tc-arrow tc-arrow-right" onClick={next} aria-label="Next review">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
      </button>

      <div className="tc-dots">
        {items.map((_, i) => (
          <button
            key={i}
            className={`tc-dot ${i === current ? 'tc-dot-active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="home-hero" role="img" aria-label="Sleeping Buffalo outdoor mineral pool with steam rising under Montana sky">
        <div className="home-hero-bg" />
        <div className="home-hero-overlay" />
        <div className="home-hero-content container">
          <SectionEyebrow text="Natural Hot Springs · Saco, Montana" />
          <h1>Oasis on the <em>Montana Hi-Line</em></h1>
          <p className="home-hero-sub">
            Montana's only natural hot springs on the Hi-Line — 108° mineral water rising 3,200 feet from the earth. Swim, soak, stay, and breathe.
          </p>
          <div className="home-hero-ctas">
            <a href={RESNEXUS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Reserve Your Stay</a>
            <a href="#amenities" className="btn btn-outline">Explore the Resort</a>
          </div>
        </div>
        <div className="home-hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* FACTS STRIP */}
      <FactsStrip />

      {/* AMENITIES */}
      <section id="amenities" className="home-amenities section-dark">
        <div className="container">
          <ScrollReveal>
            <div className="home-amenities-header">
              <SectionEyebrow text="The Resort" />
              <h2>An Oasis Built for Every Season</h2>
            </div>
          </ScrollReveal>
          <div className="amenities-grid">
            {amenities.map((a, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <AmenityCard {...a} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING BANNER */}
      <BookingBanner />

      {/* GALLERY */}
      <section className="home-gallery section-dark">
        <div className="container">
          <ScrollReveal>
            <SectionEyebrow text="Gallery" />
            <h2>See the Springs</h2>
          </ScrollReveal>
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <div key={i} className={`gallery-item ${img.large ? 'gallery-large' : ''}`}>
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
            <a href="https://www.facebook.com/sleepingbuffalohotsprings" target="_blank" rel="noopener noreferrer" className="gallery-item gallery-more">
              <span>+30 More Photos</span>
            </a>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="home-events section-warm">
        <div className="container">
          <div className="two-col">
            <ScrollReveal className="two-col-image">
              <img src="/images/entrance-daytime.png" alt="Sleeping Buffalo resort entrance" />
            </ScrollReveal>
            <ScrollReveal className="two-col-text" delay={150}>
              <SectionEyebrow text="Gatherings" />
              <h2>Celebrate at the Springs</h2>
              <p>
                From birthday parties in the poolside breezeway to family reunions and group retreats — Sleeping Buffalo is a one-of-a-kind Montana event venue.
              </p>
              <ul className="feature-list">
                <li>Private party pool reservations</li>
                <li>Poolside breezeway for groups & celebrations</li>
                <li>On-site accommodations for out-of-town guests</li>
                <li>Meeting & group retreat packages</li>
                <li>Customizable for birthdays, reunions & corporate events</li>
              </ul>
              <a href="tel:4065273320" className="btn btn-outline">Call to Reserve · (406) 527-3320</a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="home-testimonials section-dark">
        <div className="container">
          <ScrollReveal>
            <SectionEyebrow text="Guest Voices" />
            <h2>What They're Saying</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <TestimonialCarousel items={testimonials} />
          </ScrollReveal>
        </div>
      </section>

      {/* HISTORY TEASER */}
      <section className="home-history section-warm">
        <div className="container">
          <div className="two-col two-col-reverse">
            <ScrollReveal className="two-col-text">
              <SectionEyebrow text="Heritage" />
              <h2>Nearly a Century of Montana Tradition</h2>
              <p>
                What began in the late 1920s as the American Legion Health Resort — built with rock from the same quarries as Fort Peck Dam — has grown into one of Montana's most beloved natural destinations.
              </p>
              <Link to="/history" className="btn btn-outline">Read Our Full Story</Link>
            </ScrollReveal>
            <ScrollReveal className="two-col-image history-image-wrap" delay={150}>
              <img src="/images/aerial-steam-mist.png" alt="Aerial view through steam and mist over the hot springs" />
              <div className="history-badge">1929</div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
