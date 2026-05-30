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
      <button
        onClick={handleReset}
        style={{
          marginTop: 10,
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
    </footer>
  )
}
