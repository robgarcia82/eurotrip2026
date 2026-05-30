import { DAYS } from '../data.js'

const INT_DOTS = { light: 'light', mod: 'mod', int: 'int' }

export default function DayStrip({ currentId, onSelect }) {
  const today = new Date().toISOString().slice(0, 10)
  return (
    <div className="daystrip">
      {DAYS.map((d) => {
        const cityLabel = d.city === 'voo' ? 'voo' : d.city === 'madrid' ? 'Madri' : 'Budapeste'
        const classes = [
          'pill',
          d.id === currentId ? 'on' : '',
          d.date === today ? 'today' : ''
        ]
          .filter(Boolean)
          .join(' ')
        return (
          <div key={d.id} className={classes} onClick={() => onSelect(d.id)}>
            <span className={`dot ${INT_DOTS[d.intensity]}`}></span>
            <div className="dn">{d.dn}</div>
            <div className="dd">{d.dd}</div>
            <div className="city">{cityLabel}</div>
          </div>
        )
      })}
    </div>
  )
}
