import { Icon } from '@iconify/react'
import { useState, useEffect } from 'react'
import { PEDIDOS_YA_URL } from '../data/menu'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#menu', label: 'Menú' },
    { href: '#reviews', label: 'Reseñas' },
    { href: '#ubicacion', label: 'Ubicación' },
  ]

  const close = () => setMenuOpen(false)

  return (
    <nav className="nav-root" style={scrolled ? { top: '10px' } : {}}>
      <div className="nav-pill">
        <a href="#" className="nav-logo" aria-label="San Viernes">
          <img src="/logo2.png" alt="San Viernes" className="nav-logo-image" />
        </a>

        <ul
          className="nav-links"
          style={menuOpen ? {
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            inset: 0,
            top: '72px',
            background: 'rgba(8,8,8,0.97)',
            backdropFilter: 'blur(20px)',
            padding: '32px 24px',
            gap: '8px',
            zIndex: 498,
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          } : {}}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={close}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <a href={PEDIDOS_YA_URL} target="_blank" rel="noopener noreferrer" className="nav-cta">
            <Icon icon="solar:cart-large-2-linear" width="16" height="16" />
            Pedir ahora
          </a>
          <button
            className="nav-toggle"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px,5px)' } : {}} />
            <span style={menuOpen ? { opacity: 0 } : {}} />
            <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px,-5px)' } : {}} />
          </button>
        </div>
      </div>
    </nav>
  )
}
