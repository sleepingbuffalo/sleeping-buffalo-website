import './SectionEyebrow.css'

export default function SectionEyebrow({ text }) {
  return (
    <div className="eyebrow">
      <span className="eyebrow-line" />
      <span className="eyebrow-text">{text}</span>
    </div>
  )
}
