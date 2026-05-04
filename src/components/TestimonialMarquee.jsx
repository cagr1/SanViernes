function TestimonialCard({ item }) {
  return (
    <div className="testimonial-marquee-card-shell">
      <div className="testimonial-marquee-card">
        <h3 className="testimonial-marquee-quote">{item.quote}</h3>
        <div className="testimonial-marquee-author">
          <div className="testimonial-marquee-author-copy">
            <p className="testimonial-marquee-name">{item.author}</p>
            <p className="testimonial-marquee-role">{item.role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function TestimonialTrack({ items, speedClass }) {
  return (
    <div className={`testimonial-marquee-track ${speedClass}`}>
      <div className="testimonial-marquee-track-inner">
        {items.map((item) => (
          <TestimonialCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

function TestimonialRow({ items, speedClass, withTopGap = false }) {
  return (
    <div className={`testimonial-marquee-row${withTopGap ? ' testimonial-marquee-row-gap' : ''}`}>
      <TestimonialTrack items={items} speedClass={speedClass} />
      <TestimonialTrack items={items} speedClass={speedClass} />
    </div>
  )
}

export default function TestimonialMarquee({ rows }) {
  return (
    <div className="testimonial-marquee" id="component">
      <div className="testimonial-marquee-header">
        <h1 className="testimonial-marquee-title">Lo que dice Machala</h1>
        <p className="testimonial-marquee-subtitle">
          Testimonios reales de clientes que vuelven por el sabor, la tradición y lo que se comparte en cada visita.
        </p>
      </div>

      <div className="testimonial-marquee-stage">
        <div className="testimonial-marquee-mask">
          <TestimonialRow items={rows[0]} speedClass="testimonial-marquee-speed-a" />
          <TestimonialRow items={rows[1]} speedClass="testimonial-marquee-speed-b" withTopGap />
        </div>
      </div>

      <div className="testimonial-marquee-fade" />
    </div>
  )
}
