const ICONS = {
  roteiro: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <circle cx="8" cy="14" r="1" fill="currentColor" />
      <circle cx="12" cy="14" r="1" fill="currentColor" />
      <circle cx="16" cy="14" r="1" fill="currentColor" />
    </svg>
  ),
  reservas: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 21l-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      <path d="M9 10l2 2 4-4" />
    </svg>
  ),
  logistica: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  ),
}

const TABS = [
  { id: 'roteiro', label: 'Roteiro' },
  { id: 'reservas', label: 'Reservas' },
  { id: 'logistica', label: 'Logística' },
]

export default function Tabs({ section, onChange }) {
  return (
    <nav className="tabs" aria-label="Navegação principal">
      {TABS.map((t) => (
        <button
          key={t.id}
          className={section === t.id ? 'on' : ''}
          onClick={() => onChange(t.id)}
          aria-current={section === t.id ? 'page' : undefined}
        >
          <span className="tab-ico">{ICONS[t.id]}</span>
          <span className="tab-lbl">{t.label}</span>
        </button>
      ))}
    </nav>
  )
}
