import { useScrollReveal } from '../hooks/useScrollReveal'

function Stat({ value, color, label }) {
  const ref = useScrollReveal()

  return (
    <div className="stat-cell reveal" ref={ref}>
      <div className={`stat-big ${color}`}>{value}</div>
      <div className="stat-desc">{label}</div>
    </div>
  )
}

export default function Nosotros() {
  const r1 = useScrollReveal()
  const r2 = useScrollReveal()
  const r3 = useScrollReveal()

  return (
    <section id="nosotros" className="nosotros-root">
      <div className="container">
        <div className="nosotros-layout">
          <div className="nosotros-content">
            <div className="reveal" ref={r1}>
              <span className="label">Nuestra historia</span>
              <p className="nosotros-statement">
                Nacimos en <span className="o">1995</span> con<br />
                una misión: el mejor<br />
                sabor de <span className="b">Machala</span>.
              </p>
            </div>

            <div className="nosotros-cols">
              <p className="nosotros-body reveal" ref={r2}>
                San Viernes nació en Machala con una propuesta simple pero poderosa:
                hamburguesas hechas al momento, con ingredientes frescos y salsas
                propias que se convirtieron en tradición. Hoy somos parte del ADN
                culinario de la ciudad.
              </p>
              <p className="nosotros-body reveal" ref={r3}>
                Tres décadas en la calle nos enseñaron que el sabor no se improvisa.
                Cada pan, cada carne, cada combo es el resultado de años de
                perfeccionamiento. Por eso vuelves, y por eso traes a tu gente.
              </p>
            </div>
          </div>
        </div>

        <div className="stats-bar" style={{ marginTop: '80px' }}>
          <Stat value="30+" color="o" label="Años sirviendo Machala" />
          <Stat value="200+" color="b" label="Reseñas en Google Maps" />
          <Stat value="4.8" color="" label="Calificación promedio" />
        </div>
      </div>
    </section>
  )
}
