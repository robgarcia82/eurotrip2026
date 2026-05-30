import { useState } from 'react'
import Header from './components/Header.jsx'
import Tabs from './components/Tabs.jsx'
import DayStrip from './components/DayStrip.jsx'
import DayView from './components/DayView.jsx'
import Reservas from './components/Reservas.jsx'
import Logistica from './components/Logistica.jsx'
import Footer from './components/Footer.jsx'
import { DAYS } from './data.js'

export default function App() {
  const [section, setSection] = useState('roteiro')

  // Se o dia de hoje cair dentro da viagem, abre direto nele
  const today = new Date().toISOString().slice(0, 10)
  const todayDay = DAYS.find((d) => d.date === today)
  const [dayId, setDayId] = useState(todayDay ? todayDay.id : DAYS[0].id)

  const handleSectionChange = (next) => {
    setSection(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDayChange = (id) => {
    setDayId(id)
    const el = document.getElementById('roteiro')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="wrap">
      <Header />
      <Tabs section={section} onChange={handleSectionChange} />

      <section id="roteiro" style={{ display: section === 'roteiro' ? 'block' : 'none' }}>
        <DayStrip currentId={dayId} onSelect={handleDayChange} />
        <DayView dayId={dayId} />
      </section>

      <section id="reservas" style={{ display: section === 'reservas' ? 'block' : 'none' }}>
        <Reservas />
      </section>

      <section id="logistica" style={{ display: section === 'logistica' ? 'block' : 'none' }}>
        <Logistica />
      </section>

      <Footer />
    </div>
  )
}
