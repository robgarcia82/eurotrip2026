import { mapUrl } from '../lib/mapUrl.js'

const SOLO_TEXT = { high: 'alto', med: 'médio', low: 'baixo' }

export default function FoodPanel({ food, city }) {
  if (!food) return null
  const isBud = city === 'budapeste'
  return (
    <div className={`panel ${isBud ? 'budfood' : ''} fade`}>
      <h4>
        <span className="ic">🍽️</span>
        {food.title}
      </h4>
      {food.rows.map((r, i) => (
        <div key={i} className="food-row">
          <div className="lbl">{r.lbl}</div>
          <div className="it">
            {r.solo && (
              <span className={`solo-pill ${r.solo}`}>{SOLO_TEXT[r.solo]}</span>
            )}
            <span dangerouslySetInnerHTML={{ __html: r.it }} />
          </div>
          {r.map && (
            <a
              className={`mini-map ${r.mapUncertain ? 'uncertain' : ''}`}
              target="_blank"
              rel="noopener noreferrer"
              href={mapUrl(r.map)}
            >
              mapa
            </a>
          )}
        </div>
      ))}
    </div>
  )
}
