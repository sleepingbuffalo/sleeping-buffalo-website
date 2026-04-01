import { useState } from 'react'
import HeroSection from '../components/HeroSection'
import SectionEyebrow from '../components/SectionEyebrow'
import ScrollReveal from '../components/ScrollReveal'
import './Events.css'

const features = [
  'Poolside breezeway seating for groups',
  'Private pool reservations available',
  'On-site catering through 54 Prime',
  'Full bar service via Buffalo Saloon',
  'On-site accommodations for overnight guests',
  'Conference room with state-of-the-art A/V',
]

export default function Events() {
  const [form, setForm] = useState({ name: '', email: '', date: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Event Inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPreferred Date: ${form.date}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:sbhotspringsoffice@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <>
      {/* HERO */}
      <HeroSection image="/images/entrance-daytime.png" alt="Sleeping Buffalo resort entrance during the day">
        <SectionEyebrow text="Events" />
        <h1>Celebrate at the Springs</h1>
      </HeroSection>

      {/* PARTY POOLS */}
      <section className="ev-party section-dark">
        <div className="container">
          <ScrollReveal>
            <SectionEyebrow text="Party Pools" />
            <h2>Reserve the Breezeway</h2>
            <div className="ev-body-text">
              <p>
                Host your next celebration poolside at Sleeping Buffalo. The covered breezeway
                offers shaded seating steps from the mineral water, making it the perfect setting
                for birthday parties, family reunions, and group gatherings of every size.
              </p>
              <p>
                Whether you&rsquo;re planning an intimate get-together or a full-scale party,
                our team will help you create an unforgettable experience surrounded by
                Montana&rsquo;s natural hot springs.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CORPORATE & GROUP RETREATS */}
      <section className="ev-corporate section-warm">
        <div className="container">
          <ScrollReveal>
            <SectionEyebrow text="Corporate &amp; Group Retreats" />
            <h2>Where Business Meets the Big Sky</h2>
            <div className="ev-body-text">
              <p>
                Take your next offsite somewhere truly memorable. Our on-site conference room
                features state-of-the-art A/V equipment and comfortable seating for presentations,
                workshops, and team meetings.
              </p>
              <p>
                For larger groups, full resort buy-out options are available &mdash; giving your
                team exclusive access to the pools, dining, saloon, and overnight accommodations.
                Let the mineral water do the team-building for you.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* EVENT FEATURES */}
      <section className="ev-features section-dark">
        <div className="container">
          <ScrollReveal>
            <SectionEyebrow text="What We Offer" />
            <h2>Event Features</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <ul className="ev-features-list">
              {features.map((item, i) => (
                <li key={i} className="ev-features-item">
                  <span className="ev-diamond">&#9670;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* INQUIRY CTA */}
      <section className="ev-inquiry section-warm">
        <div className="container">
          <ScrollReveal>
            <div className="ev-inquiry-inner">
              <SectionEyebrow text="Get in Touch" />
              <h2>Let&rsquo;s Plan Your Event</h2>
              <p className="ev-inquiry-phone">
                Call us at{' '}
                <a href="tel:+14065273320">(406) 527-3320</a>
              </p>

              <form className="ev-form" onSubmit={handleSubmit}>
                <div className="ev-form-row">
                  <div className="ev-form-group">
                    <label htmlFor="ev-name">Name</label>
                    <input
                      id="ev-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="ev-form-group">
                    <label htmlFor="ev-email">Email</label>
                    <input
                      id="ev-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="ev-form-group">
                  <label htmlFor="ev-date">Preferred Date</label>
                  <input
                    id="ev-date"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                  />
                </div>
                <div className="ev-form-group">
                  <label htmlFor="ev-message">Tell Us About Your Event</label>
                  <textarea
                    id="ev-message"
                    name="message"
                    rows="5"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Number of guests, type of event, special requests..."
                  />
                </div>
                <button type="submit" className="ev-form-submit">
                  Send Inquiry
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
