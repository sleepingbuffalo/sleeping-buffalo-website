import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <h3 className="footer-logo">Sleeping Buffalo</h3>
            <span className="footer-tagline">Oasis on the Montana Hi-Line</span>
            <p className="footer-desc">
              Montana's only natural hot springs on the northeastern tier — 108° mineral water,
              luxury cabins, RV park, and gourmet dining since 1929.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Explore</h4>
            <Link to="/hot-springs">Hot Springs & Pools</Link>
            <Link to="/accommodations">Cabins & Suites</Link>
            <Link to="/rv-park">RV Park</Link>
            <Link to="/dining">Dining & Saloon</Link>
            <Link to="/events">Private Events</Link>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Plan Your Visit</h4>
            <a href="https://reserve5.resnexus.com/resnexus/reservations/lodging/218F8A20-09E7-49C0-AA76-94DB64F3DFD0" target="_blank" rel="noopener noreferrer">Book Online</a>
            <Link to="/accommodations">Rates & Packages</Link>
            <Link to="/contact">Getting Here</Link>
            <Link to="/history">Our Story</Link>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>
            <address className="footer-address">
              <p>669 Buffalo Trail<br />Saco, Montana 59261</p>
              <a href="tel:4065273320">(406) 527-3320</a>
              <a href="mailto:sbhotspringsoffice@gmail.com">sbhotspringsoffice@gmail.com</a>
              <p className="footer-hours">Sun–Thu: 9 AM – 8 PM · Fri–Sat: 9 AM – 9 PM</p>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Sleeping Buffalo Hot Springs & Resort Inc.</p>
          <a
            href="https://www.facebook.com/sleepingbuffalohotsprings"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            aria-label="Facebook"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
