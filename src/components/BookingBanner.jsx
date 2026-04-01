import './BookingBanner.css'
import ScrollReveal from './ScrollReveal'

const RESNEXUS_URL = 'https://reserve5.resnexus.com/resnexus/reservations/lodging/218F8A20-09E7-49C0-AA76-94DB64F3DFD0'

export default function BookingBanner() {
  return (
    <section className="booking-banner section-green">
      <div className="container">
        <ScrollReveal>
          <div className="booking-banner-inner">
            <div className="booking-banner-text">
              <h2>Ready to Book Your Stay?</h2>
              <p>Cabins, suites, RV sites — all bookable online 24/7 through our Resnexus system. Or call <a href="tel:4065273320">(406) 527-3320</a>.</p>
            </div>
            <div className="booking-banner-cta">
              <a href={RESNEXUS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-green">
                Reserve Online Now
              </a>
              <span className="booking-subtext">Powered by Resnexus · Instant Confirmation</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
