import { DAYS } from '../data.js'
import { useDone } from '../lib/useDone.js'
import Block from './Block.jsx'
import FoodPanel from './FoodPanel.jsx'
import RainPanel from './RainPanel.jsx'

const INT_LABEL = { light: 'leve', mod: 'moderado', int: 'intenso' }

export default function DayView({ dayId }) {
  const d = DAYS.find((x) => x.id === dayId)
  const { done, toggle } = useDone()
  if (!d) return null

  return (
    <>
      <div className="dayhead fade" key={d.id}>
        <div className="meta">
          <span className={`cityflag ${d.city}`}>{d.cityLabel}</span>
          <span className={`intensity ${d.intensity}`}>
            Dia {INT_LABEL[d.intensity]}
            <span className="bars">
              <i></i>
              <i></i>
              <i></i>
            </span>
          </span>
        </div>
        <h2 className="dtitle">{d.title}</h2>
        <div className="dsub">{d.sub}</div>
      </div>

      <div className="tl fade">
        {d.blocks.map((b, i) => {
          const key = `${d.id}-${i}`
          return (
            <Block
              key={key}
              block={b}
              dayCls={d.city}
              isDone={!!done[key]}
              onToggle={() => toggle(key)}
            />
          )
        })}
      </div>

      <FoodPanel food={d.food} city={d.city} />
      <RainPanel rain={d.rain} tips={d.tips} />
    </>
  )
}
