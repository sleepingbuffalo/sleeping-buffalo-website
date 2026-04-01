import './TestimonialCard.css'

export default function TestimonialCard({ quote, attribution }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-stars">★★★★★</div>
      <div className="testimonial-quote-mark">"</div>
      <p className="testimonial-text">{quote}</p>
      <span className="testimonial-attr">— {attribution}</span>
    </div>
  )
}
