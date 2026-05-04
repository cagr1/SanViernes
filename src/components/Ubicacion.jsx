import { Icon } from '@iconify/react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { locations, hours, PEDIDOS_YA_URL, MAPS_URL } from '../data/locations'

function LocationCard({ loc, delay }) {
  const ref = useScrollReveal()

  return (
    <div ref={ref} className={`location-card reveal reveal-d${delay}`}>
      <div className="location-map">
        <iframe
          src={loc.mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Mapa ${loc.name}`}
        />
      </div>
      <div className="location-body">
        <span className={`location-tag ${loc.tagClass}`}>{loc.tag}</span>
        <div className="location-name">{loc.name}</div>
        <div className="location-addr">
          {loc.address.split('\n').map((line, index) => (
            <span key={index}>{line}{index === 0 && <br />}</span>
          ))}
        </div>
        <div className="location-btns">
          <a href={PEDIDOS_YA_URL} target="_blank" rel="noopener noreferrer" className="location-btn">
            <Icon icon="solar:cart-large-2-linear" width="16" height="16" />
            PedidosYa
          </a>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="location-btn">
            <Icon icon="solar:point-on-map-linear" width="16" height="16" />
            Cómo llegar
          </a>
        </div>
      </div>
    </div>
  )
}

function HoursCard({ h }) {
  return (
    <div className={`hours-card${h.highlight ? ' highlight' : ''}`}>
      <div className="hours-day">{h.day}</div>
      <div className="hours-dot" />
      <div className="hours-time">{h.open}<br />{h.close}</div>
    </div>
  )
}

export default function Ubicacion() {
  const r1 = useScrollReveal()
  const r2 = useScrollReveal()

  return (
    <section id="ubicacion" className="ubicacion-root">
      <div className="container">
        <div className="reveal" ref={r1}>
          <span className="label">Encuéntranos</span>
          <h2 className="ubicacion-title">
            Dos locales en<br /><em>Machala</em>.
          </h2>
        </div>

        <div className="location-grid">
          {locations.map((loc, index) => (
            <LocationCard key={loc.id} loc={loc} delay={index + 1} />
          ))}
        </div>

        <div className="hours-section">
          <div className="reveal" ref={r2}>
            <span className="label">Horarios de atención</span>
          </div>
          <div className="hours-grid" style={{ marginTop: '28px' }}>
            {hours.map((hour) => <HoursCard key={hour.day} h={hour} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
