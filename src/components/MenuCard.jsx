import { Icon } from '@iconify/react'

export default function MenuCard({ section }) {
  return (
    <article className={`menu-card menu-card-${section.accent}`}>
      <div className="menu-card-head">
        <div className={`menu-card-icon menu-card-icon-${section.accent}`}>
          <Icon icon={section.icon} width="28" height="28" />
        </div>
        <div>
          <div className="menu-card-label">Nuestro menú</div>
          <h3 className="menu-card-title">{section.title}</h3>
        </div>
      </div>

      <div className="menu-items">
        {section.items.map((item) => (
          <div className="menu-item-row" key={`${section.id}-${item.name}`}>
            <div className="menu-item-copy">
              <div className="menu-item-name">{item.name}</div>
              <div className="menu-item-desc">{item.desc}</div>
            </div>
            <div className="menu-item-line" aria-hidden="true" />
            <div className="menu-item-price">{item.price}</div>
          </div>
        ))}
      </div>
    </article>
  )
}
