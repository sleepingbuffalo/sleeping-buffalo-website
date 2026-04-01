import './AmenityCard.css'

export default function AmenityCard({ image, tag, title, description }) {
  return (
    <div className="amenity-card">
      <div className="amenity-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="amenity-card-overlay">
        <span className="amenity-tag">{tag}</span>
        <h3 className="amenity-title">{title}</h3>
        <p className="amenity-desc">{description}</p>
      </div>
    </div>
  )
}
