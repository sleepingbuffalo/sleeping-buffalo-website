import HeroSection from '../components/HeroSection'
import SectionEyebrow from '../components/SectionEyebrow'
import ScrollReveal from '../components/ScrollReveal'
import BookingBanner from '../components/BookingBanner'
import './RVPark.css'

const RESNEXUS_URL = 'https://reserve5.resnexus.com/resnexus/reservations/lodging/218F8A20-09E7-49C0-AA76-94DB64F3DFD0'

const features = [
  '31 full-service sites with electric, water, sewer hookups',
  'Easy pull-through sites — big rig friendly',
  'Dedicated bathhouse with restrooms and 6 showers',
  'Designated tent camping area',
  'Full resort access including hot springs',
]

export default function RVPark() {
  return (
    <>
      {/* HERO */}
      <HeroSection image="/images/aerial-rv-park.png" alt="Aerial view of Sleeping Buffalo RV Park">
        <SectionEyebrow text="Camp" />
        <h1>Park Up. Soak In. Stay a While.</h1>
      </HeroSection>

      {/* INTRO */}
      <section className="rv-intro">
        <div className="container rv-intro-grid">
          <ScrollReveal className="rv-intro-image-wrap">
            <img
              src="/images/aerial-full-property.png"
              alt="Full aerial view of Sleeping Buffalo Hot Springs property"
              className="rv-intro-image"
            />
          </ScrollReveal>
          <ScrollReveal className="rv-intro-text" delay={150}>
            <SectionEyebrow text="The RV Park" />
            <h2>Your Basecamp on the Hi-Line</h2>
            <p>
              Pull in, hook up, and let Montana do the rest. Sleeping Buffalo's RV park
              sits right on the resort grounds — meaning hot springs, dining, and
              wide-open skies are all steps from your door. Whether you're passing
              through on Highway 2 or settling in for the season, this is the kind of
              place that turns a stopover into a stay.
            </p>
            <p>
              Full hookups, pull-through sites built for big rigs, a clean bathhouse,
              and the kind of quiet you only find out here. Add in Nelson Reservoir
              across the road and you've got everything a traveler could ask for.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* RV PARK DETAILS */}
      <section className="rv-details">
        <div className="container">
          <ScrollReveal>
            <SectionEyebrow text="What's Included" />
            <h2>Full-Service RV Sites</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <ul className="rv-features">
              {features.map((item, i) => (
                <li key={i} className="rv-feature-item">
                  <span className="rv-diamond" aria-hidden="true">&#9670;</span>
                  <span>{item}</span>
                </li>
              ))}
              <li className="rv-feature-item">
                <span className="rv-diamond" aria-hidden="true">&#9670;</span>
                <span>
                  <a
                    href={RESNEXUS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rv-book-link"
                  >
                    RV rates and booking &rarr;
                  </a>
                </span>
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* NELSON RESERVOIR */}
      <section className="rv-reservoir">
        <div className="rv-reservoir-image-wrap">
          <img
            src="/images/nelson-reservoir-sunset.png"
            alt="Sunset over Nelson Reservoir with calm water reflecting the sky"
            className="rv-reservoir-image"
          />
          <div className="rv-reservoir-overlay" />
        </div>
        <div className="container rv-reservoir-content">
          <ScrollReveal>
            <SectionEyebrow text="Just Across the Road" />
            <h2>Nelson Reservoir</h2>
            <p>
              Right across the road: 4,100 acres of world-class fishing, boating, and
              recreation. Nelson Reservoir is renowned for walleye, northern pike, and
              perch year-round — and ice fishing in the winter.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* BOOKING BANNER */}
      <BookingBanner />
    </>
  )
}
