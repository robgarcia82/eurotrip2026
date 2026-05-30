import { useDone } from '../lib/useDone.js'

export default function Footer() {
  const { reset } = useDone()
  const handleReset = () => {
    if (window.confirm('Limpar todos os itens marcados como feitos?')) {
      reset()
    }
  }
  return (
    <footer>
      Feito sob medida com base nos seus voos, hospedagens e listas de
      imperdíveis. Curadoria para <b>viagem solo</b>: 👤 alto = ótimo sozinho
      (balcão, casual, animado); médio = ok mas pode parecer programa de casal;
      baixo = melhor evitar.
      <br />
      Toque no título de cada atração para marcar como ✓ feito · Horários de
      pôr do sol e funcionamento podem variar — confira no dia.
      <br />
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginTop: 10 }}>
        <button
          onClick={handleReset}
          style={{
            fontFamily: 'inherit',
            fontSize: 11,
            fontWeight: 600,
            color: 'var(--ink-faint)',
            background: 'none',
            border: '1px solid var(--line)',
            borderRadius: 8,
            padding: '4px 10px',
            cursor: 'pointer'
          }}
        >
          Limpar marcações
        </button>
        <a
          href="https://github.com/robgarcia82/eurotrip2026/edit/main/src/data.js"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'inherit',
            fontSize: 11,
            fontWeight: 600,
            color: 'var(--ink-faint)',
            background: 'none',
            border: '1px solid var(--line)',
            borderRadius: 8,
            padding: '4px 10px',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4
          }}
        >
          ✏️ Editar no GitHub
        </a>
      </div>
    </footer>
  )
}
