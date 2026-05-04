import { Icon } from '@iconify/react'

const items = [
  'Hamburguesas Artesanales',
  'Hot Dogs',
  'Salchipapas',
  'Nuggets de Pollo',
  'Granizados',
  'Cheladas & Micheladas',
  'Para Compartir',
  'Delivery Machala',
]

export default function Ticker() {
  const doubled = [...items, ...items]

  return (
    <div className="ticker-wrap" aria-hidden="true">
      <div className="ticker-track">
        {doubled.map((item, index) => (
          <div className="ticker-item" key={index}>
            {item}
            <span className="ticker-sep">
              <Icon icon="solar:star-bold" width="12" height="12" />
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
