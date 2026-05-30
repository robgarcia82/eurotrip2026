export default function RainPanel({ rain, tips }) {
  if (!rain) return null
  return (
    <div className="panel rain fade">
      <h4>
        <span className="ic">☔</span>Plano B (chuva ou calor)
      </h4>
      <p
        style={{ margin: 0, fontSize: 14, color: 'var(--ink-soft)' }}
        dangerouslySetInnerHTML={{ __html: rain }}
      />
      {(tips || []).map((t, i) => (
        <p
          key={i}
          style={{ margin: '6px 0 0', fontSize: 13.5, color: 'var(--ink-soft)' }}
        >
          • {t}
        </p>
      ))}
    </div>
  )
}
