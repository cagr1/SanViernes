import { Icon } from '@iconify/react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useMagneticButton } from '../hooks/useMagneticButton'
import MenuCard from './MenuCard'
import { menuSections, PEDIDOS_YA_URL } from '../data/menu'

export default function MenuSection() {
  const r1 = useScrollReveal()
  const mag = useMagneticButton()

  return (
    <section id="menu" className="menu-root">
      <div className="container">
        <div className="menu-header">
          <div className="reveal" ref={r1}>
            <span className="label">Menú real</span>
            <h2 className="menu-title" style={{ marginTop: '16px' }}>
              Nuestro<br /><em>Menú</em>
            </h2>
            <p className="menu-intro">
              Ya dejamos atrás el contenido demo. Esta sección refleja el menú que aparece en tus artes:
              hamburguesas, hot dogs, papas y drinks.
            </p>
          </div>

          <div className="menu-header-right">
            <a
              ref={mag.ref}
              onMouseMove={mag.onMouseMove}
              onMouseLeave={mag.onMouseLeave}
              href={PEDIDOS_YA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-orange"
            >
              <Icon icon="solar:cart-large-2-linear" width="18" height="18" />
              Ver menú completo
            </a>

            <div className="menu-scroll-hint" aria-hidden="true">
              <Icon icon="solar:menu-dots-bold" width="16" height="16" />
              <span>Hechas al instante con productos 100% naturales</span>
            </div>
          </div>
        </div>

        <div className="menu-grid">
          {menuSections.map((section) => (
            <MenuCard key={section.id} section={section} />
          ))}
        </div>

        <div className="menu-note">
          <span className="menu-note-pill">Nota</span>
          <p>Todas nuestras hamburguesas son hechas al instante y con productos 100% naturales.</p>
        </div>
      </div>
    </section>
  )
}
