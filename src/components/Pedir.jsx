import { Icon } from '@iconify/react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useMagneticButton } from '../hooks/useMagneticButton'
import { PEDIDOS_YA_URL } from '../data/menu'

const socials = [
  { icon: 'mdi:facebook', label: 'Facebook', href: 'https://www.facebook.com/sanviernes.sv' },
  { icon: 'mdi:instagram', label: 'Instagram', href: 'https://www.instagram.com/sanviernes.sv?igsh=bG4yNm9rbjFjbTBh' },
  { icon: 'mdi:whatsapp', label: 'WhatsApp', href: 'https://wa.me/593' },
  { icon: 'ic:baseline-tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@sanviernes.sv?_r=1&_t=ZS-965HNwZQUkC' },
]

export default function Pedir() {
  const r1 = useScrollReveal()
  const r2 = useScrollReveal()
  const r3 = useScrollReveal()
  const r4 = useScrollReveal()
  const mag1 = useMagneticButton()
  const mag2 = useMagneticButton()

  return (
    <section id="pedir" className="pedir-root">
      <div className="pedir-bg" />
      <div className="container">
        <div className="pedir-content">
          <div className="reveal" ref={r1}>
            <span className="label" style={{ justifyContent: 'center' }}>¿Listo?</span>
          </div>

          <h2 className="pedir-title reveal" ref={r2}>
            <span className="o">PIDE</span><br />
            <span className="b">AHORA</span>
          </h2>

          <p className="pedir-sub reveal" ref={r3}>
            Recibe la tradición machaleña en la puerta de tu casa.
            Delivery por PedidosYa, rápido y fácil.
          </p>

          <div className="pedir-actions reveal" ref={r4}>
            <a
              ref={mag1.ref}
              onMouseMove={mag1.onMouseMove}
              onMouseLeave={mag1.onMouseLeave}
              href={PEDIDOS_YA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-orange btn-lg"
            >
              <Icon icon="solar:cart-large-2-linear" width="20" height="20" />
              Pedir por PedidosYa
            </a>
            <a
              ref={mag2.ref}
              onMouseMove={mag2.onMouseMove}
              onMouseLeave={mag2.onMouseLeave}
              href="https://www.facebook.com/sanviernes.sv"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-blue btn-lg"
            >
              <Icon icon="mdi:facebook" width="20" height="20" />
              Seguirnos
            </a>
          </div>

          <div className="social-strip">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={social.label}
              >
                <Icon icon={social.icon} width="20" height="20" />
              </a>
            ))}
            <span className="social-handle">@sanviernes.sv</span>
          </div>
        </div>
      </div>
    </section>
  )
}
