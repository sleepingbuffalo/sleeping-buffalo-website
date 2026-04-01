import './HeroSection.css'

export default function HeroSection({ image, alt, children, half = false }) {
  return (
    <section className={`hero ${half ? 'hero-half' : ''}`}>
      <div className="hero-image-wrap">
        <img src={image} alt={alt} className="hero-image" />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content container">
        {children}
      </div>
    </section>
  )
}
