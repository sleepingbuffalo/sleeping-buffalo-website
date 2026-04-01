import { useEffect, useRef, useState } from 'react'
import './FactsStrip.css'

const facts = [
  { value: 108, suffix: '°', label: 'Natural Water Temp' },
  { value: 900, suffix: '+', label: 'Gallons Per Minute' },
  { value: 3200, prefix: '', suffix: ' ft', label: 'Below Ground', format: true },
  { value: 1929, suffix: '', label: 'Welcoming Guests', isYear: true }
]

function AnimatedNumber({ value, suffix = '', prefix = '', format = false, isYear = false }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          const duration = 1800
          const startTime = performance.now()

          function tick(now) {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplay(Math.floor(eased * value))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  const formatted = isYear
    ? (display === 0 ? '1929' : `${display}`)
    : format
      ? display.toLocaleString()
      : `${display}`

  return (
    <span ref={ref} className="fact-value">
      {prefix}{isYear ? 'Est. ' : ''}{formatted}{suffix}
    </span>
  )
}

export default function FactsStrip() {
  return (
    <section className="facts-strip section-surface">
      <div className="container">
        <div className="facts-grid">
          {facts.map((fact, i) => (
            <div className="fact-item" key={i}>
              <AnimatedNumber {...fact} />
              <span className="fact-label">{fact.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
