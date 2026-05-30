import { RESERVAS } from '../data.js'
import { mapUrl } from '../lib/mapUrl.js'

const SOLO_TEXT = { high: 'alto', med: 'médio', low: 'baixo' }

const priorityLabel = (p) =>
  p === 1
    ? '🔴 Prioridade máxima'
    : p === 2
    ? '🟠 Reserve com antecedência'
    : '🟢 Tranquilo'

export default function Reservas() {
  return (
    <>
      <p className="secttitle" style={{ marginTop: 18 }}>
        O que reservar antes — em ordem de urgência
      </p>
      {RESERVAS.map((r, i) => (
        <div key={i} className={`res p${r.p} ${r.confirmed ? 'confirmed' : ''} fade`}>
          <div className="pr">
            {r.confirmed
              ? `✓ Confirmado · ${r.confirmed.at || ''}`
              : `${priorityLabel(r.p)} · ${r.when}`}
          </div>
          <h3>
            {r.solo && (
              <span
                className={`solo-pill ${r.solo}`}
                style={{ marginRight: 8 }}
              >
                {SOLO_TEXT[r.solo]}
              </span>
            )}
            {r.t}
          </h3>
          <p dangerouslySetInnerHTML={{ __html: r.d }} />
          <div className="btns">
            {r.confirmed ? (
              r.confirmed.proof ? (
                <a
                  className="btn confirmed proof"
                  href={r.confirmed.proof}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Ver confirmação"
                >
                  ✓ Reservado
                  {r.confirmed.id && ` · #${r.confirmed.id}`}
                  <span className="proof-icon">🔍</span>
                </a>
              ) : (
                <span className="btn confirmed" title="Reserva confirmada">
                  ✓ Reservado
                  {r.confirmed.id && ` · #${r.confirmed.id}`}
                </span>
              )
            ) : (
              <a
                className={`btn ${r.link.official ? 'official' : ''}`}
                target="_blank"
                rel="noopener noreferrer"
                href={r.link.url}
              >
                {r.link.label} ↗
              </a>
            )}
            {r.map && (
              <a
                className={`btn map ${r.mapUncertain ? 'uncertain' : ''}`}
                target="_blank"
                rel="noopener noreferrer"
                href={mapUrl(r.map)}
              >
                {r.mapUncertain ? 'Buscar no mapa · a confirmar' : 'Ver no mapa'}
              </a>
            )}
          </div>
        </div>
      ))}
      <p className="small" style={{ marginTop: 18 }}>
        Bolinha verde nos botões = link/site <b>oficial</b>. Evite revendedores
        em domínios que não terminem em <b>.hu</b> (Budapeste) ou que imitem o
        site oficial — costumam cobrar o dobro.
      </p>
    </>
  )
}
