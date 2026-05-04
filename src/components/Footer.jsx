import { PEDIDOS_YA_URL } from '../data/menu'
import { MAPS_URL } from '../data/locations'

const currentYear = new Date().getFullYear()

const navLinks = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#menu', label: 'Menú' },
  { href: '#reviews', label: 'Reseñas' },
  { href: '#ubicacion', label: 'Ubicación' },
]

const orderLinks = [
  { href: PEDIDOS_YA_URL, label: 'PedidosYa', external: true },
  { href: 'https://www.rappi.com.ec/restaurantes/13758-san-viernes', label: 'Rappi', external: true },
]

const locationLinks = [
  { href: MAPS_URL, label: 'Av. 25 de Junio (Matriz)', external: true },
  { href: 'https://www.google.com/maps/place/San+Viernes/@-3.2556301,-79.9632539,17z', label: 'Av. Las Palmeras (Sucursal)', external: true },
]

function FooterCol({ title, links }) {
  return (
    <div>
      <div className="footer-col-title">{title}</div>
      <ul className="footer-links">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="container">
        <div className="footer-top">
          <div>
            <img src="/logo3.png" alt="San Viernes" className="footer-logo-image" />
            <div className="footer-slogan">
              Para compartir · Machala, Ecuador · Desde 1995
            </div>
          </div>

          <div className="footer-cols">
            <FooterCol title="Navegación" links={navLinks} />
            <FooterCol title="Pedir" links={orderLinks} />
            <FooterCol title="Locales" links={locationLinks} />
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {currentYear} San Viernes · Machala, Ecuador</span>
          <a
            href="https://www.carlosgallardo.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-credit"
          >
            Hecho por Carlos Gallardo
          </a>
        </div>
      </div>
    </footer>
  )
}
