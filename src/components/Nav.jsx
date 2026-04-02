import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Nav.css'

const RESNEXUS_URL = 'https://reserve5.resnexus.com/resnexus/reservations/lodging/218F8A20-09E7-49C0-AA76-94DB64F3DFD0'

const navLinks = [
  { to: '/hot-springs', label: 'Hot Springs' },
  { to: '/accommodations', label: 'Stay' },
  { to: '/dining', label: 'Dining' },
  { to: '/rv-park', label: 'RV Park' },
  { to: '/events', label: 'Events' },
  { to: '/history', label: 'Our Story' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner container">
        <Link to="/" className="nav-logo">
          <span className="nav-logo-main">Sleeping Buffalo</span>
          <span className="nav-logo-sub">Hot Springs & Resort · Est. 1929</span>
        </Link>

        <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          {menuOpen && (
            <a
              href={RESNEXUS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary nav-book-overlay"
            >
              Book Now
            </a>
          )}
        </div>

        <div className="nav-right">
          <a
            href={RESNEXUS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary nav-book"
          >
            Book Now
          </a>

          <button
            className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  )
}
