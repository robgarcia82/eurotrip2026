import { FLIGHTS, HOTELS } from '../data.js'
import { mapUrl } from '../lib/mapUrl.js'

export default function Logistica() {
  return (
    <>
      <p className="secttitle" style={{ marginTop: 18 }}>
        Voos
      </p>
      {FLIGHTS.map((f, i) => (
        <div key={i} className="seg fade">
          <div className="ends">
            <div className="endrow">
              <div>
                <div className="t">{f.from.t}</div>
              </div>
              <div className="pl">
                <b>
                  {f.from.city}{' '}
                  <span style={{ color: 'var(--ink-faint)' }}>{f.from.code}</span>
                </b>
                {f.from.sub}
              </div>
            </div>
            <div className="endrow">
              <div>
                <div className="t">{f.to.t}</div>
              </div>
              <div className="pl">
                <b>
                  {f.to.city}{' '}
                  <span style={{ color: 'var(--ink-faint)' }}>{f.to.code}</span>
                </b>
                {f.to.sub}
              </div>
            </div>
            <div className="det">{f.det}</div>
            {(f.mapFrom || f.mapTo) && (
              <div
                style={{
                  display: 'flex',
                  gap: 6,
                  marginTop: 8,
                  flexWrap: 'wrap'
                }}
              >
                {f.mapFrom && (
                  <a
                    className="mini-map"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={mapUrl(f.mapFrom)}
                  >
                    {f.from.code}
                  </a>
                )}
                {f.mapTo && (
                  <a
                    className="mini-map"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={mapUrl(f.mapTo)}
                  >
                    {f.to.code}
                  </a>
                )}
              </div>
            )}
          </div>
          <div className="mid">
            <div className="ico">{f.ico}</div>
            <div className="fn">{f.fn}</div>
            <div>{f.dur}</div>
          </div>
        </div>
      ))}

      <p className="secttitle">Hospedagens</p>
      {HOTELS.map((h, i) => (
        <div key={i} className="htl fade">
          <div className="nm">
            <span>{h.nm}</span>
            <span
              className={`city2 cityflag ${h.cls}`}
              style={{ padding: '2px 8px' }}
            >
              {h.city}
            </span>
          </div>
          <div className="meta2">{h.dates}</div>
          <div className="ci">
            <div>
              <b>Check-in</b>
              {h.ci}
            </div>
            <div>
              <b>Check-out</b>
              {h.co}
            </div>
          </div>
          <p className="small" style={{ margin: '10px 0 0' }}>
            {h.note}
          </p>
          {h.map && (
            <div className="btns">
              <a
                className="btn map"
                target="_blank"
                rel="noopener noreferrer"
                href={mapUrl(h.map)}
              >
                Ver no mapa
              </a>
            </div>
          )}
        </div>
      ))}

      <p className="small" style={{ marginTop: 14 }}>
        Transfers sugeridos — <b>MAD ⇄ centro:</b> táxi tarifa fixa ≈ €33 (30
        min) ou metrô L8. <b>BUD ⇄ Palace District:</b> ônibus 100E até Kálvin
        tér (~40 min) ou Főtaxi oficial ≈ €26.
      </p>
    </>
  )
}
