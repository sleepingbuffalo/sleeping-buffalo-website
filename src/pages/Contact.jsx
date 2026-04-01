import { useState } from 'react'
import HeroSection from '../components/HeroSection'
import SectionEyebrow from '../components/SectionEyebrow'
import ScrollReveal from '../components/ScrollReveal'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Website Inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:sbhotspringsoffice@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <>
      <HeroSection image="/images/entrance-daytime.png" alt="Sleeping Buffalo resort entrance" half>
        <SectionEyebrow text="Get in Touch" />
        <h1>Contact Us</h1>
      </HeroSection>

      {/* CONTACT GRID */}
      <section className="contact-grid-section section-dark">
        <div className="container">
          <div className="contact-grid">
            {/* Left — Info + Map */}
            <ScrollReveal>
              <div className="contact-info-card">
                <SectionEyebrow text="Visit Us" />
                <h3>Sleeping Buffalo Hot Springs & Resort</h3>
                <div className="contact-info-items">
                  <div className="contact-info-item">
                    <span className="contact-info-label">Address</span>
                    <span>669 Buffalo Trail<br />Saco, Montana 59261</span>
                  </div>
                  <div className="contact-info-item">
                    <span className="contact-info-label">Phone</span>
                    <a href="tel:4065273320">(406) 527-3320</a>
                  </div>
                  <div className="contact-info-item">
                    <span className="contact-info-label">Email</span>
                    <a href="mailto:info@sbhotsprings.com">info@sbhotsprings.com</a>
                  </div>
                  <div className="contact-info-item">
                    <span className="contact-info-label">Office Hours</span>
                    <span>9 AM – 8 PM · 7 Days</span>
                  </div>
                </div>
                <div className="contact-map">
                  <iframe
                    title="Sleeping Buffalo Hot Springs location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2670.5!2d-107.363!3d48.437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDI2JzEzLjIiTiAxMDfCsDIxJzQ2LjgiVw!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="280"
                    style={{ border: 0, borderRadius: '4px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Right — Contact Form */}
            <ScrollReveal delay={150}>
              <div className="contact-form-card">
                <SectionEyebrow text="Send a Message" />
                <h3>We'd Love to Hear from You</h3>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form-group">
                    <label htmlFor="contact-name">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="contact-phone">Phone</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      rows="5"
                      required
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* GETTING HERE */}
      <section className="contact-getting-here section-warm">
        <div className="container">
          <ScrollReveal>
            <div className="contact-getting-here-content">
              <SectionEyebrow text="Directions" />
              <h2>Getting Here</h2>
              <p>Just off Highway 2 — 17 miles east of Malta, 10 miles west of Saco.</p>
              <p className="contact-address-line">669 Buffalo Trail, Saco, Montana 59261</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
