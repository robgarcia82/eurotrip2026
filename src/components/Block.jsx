import { mapUrl } from '../lib/mapUrl.js'

const SOLO_LABEL = { high: 'Solo: alto', med: 'Solo: médio', low: 'Solo: baixo' }

export default function Block({ block: b, dayCls, isDone, onToggle }) {
  const isBud = !!b.bud
  return (
    <div className={`block ${isBud ? 'bud' : ''}`}>
      <span className="node"></span>
      <div className="time">{b.time}</div>
      <div className={`card ${isDone ? 'done' : ''}`}>
        {b.img && (
          <img
            className="card-img"
            src={b.img}
            alt={b.imgAlt || b.t.replace(/<[^>]+>/g, '')}
            loading="lazy"
            decoding="async"
          />
        )}
        <h3 onClick={onToggle} style={{ cursor: 'pointer' }}>
          <span className="chk">✓</span>
          <span className="nm" dangerouslySetInnerHTML={{ __html: b.t }} />
        </h3>
        <p dangerouslySetInnerHTML={{ __html: b.desc }} />

        {(b.solo || b.bestTime || (b.tags && b.tags.length)) && (
          <div className="tags">
            {b.solo && (
              <span className={`tag solo-${b.solo}`}>{SOLO_LABEL[b.solo]}</span>
            )}
            {b.bestTime && <span className="tag best">{b.bestTime}</span>}
            {(b.tags || []).map((t, i) => (
              <span key={i} className="tag">
                {t}
              </span>
            ))}
          </div>
        )}

        {b.alert && (
          <div className="note alert">
            <b>Atenção:</b> {b.alert}
          </div>
        )}

        {(b.ticket || b.map) && (
          <div className="btns">
            {b.ticket && (
              <a
                className={`btn ${b.ticket.official ? 'official' : ''}`}
                target="_blank"
                rel="noopener noreferrer"
                href={b.ticket.url}
              >
                {b.ticket.label} ↗
              </a>
            )}
            {b.map && (
              <a
                className={`btn map ${b.mapUncertain ? 'uncertain' : ''}`}
                target="_blank"
                rel="noopener noreferrer"
                href={mapUrl(b.map)}
              >
                {b.mapUncertain ? 'Buscar no mapa · a confirmar' : 'Ver no mapa'}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
