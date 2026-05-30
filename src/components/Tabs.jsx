const TABS = [
  { id: 'roteiro', label: 'Roteiro' },
  { id: 'reservas', label: 'Reservas & Links' },
  { id: 'logistica', label: 'Voos & Hotéis' }
]

export default function Tabs({ section, onChange }) {
  return (
    <nav className="tabs">
      {TABS.map((t) => (
        <button
          key={t.id}
          className={section === t.id ? 'on' : ''}
          onClick={() => onChange(t.id)}
        >
          {t.label}
        </button>
      ))}
    </nav>
  )
}
