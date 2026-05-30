import { useEffect, useState } from 'react'

const STORAGE_KEY = 'roteiro-madbud-done-v1'

// Hook compartilhado: lê e grava no localStorage o mapa de itens "feitos".
// Mantém o estado sincronizado entre componentes via storage event.
export function useDone() {
  const [done, setDone] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : {}
    } catch {
      return {}
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(done))
    } catch {
      // localStorage indisponível (modo privado, quota etc.) — ignora silenciosamente
    }
  }, [done])

  // Sincroniza entre abas/janelas se o usuário abrir o app em mais de uma
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try { setDone(JSON.parse(e.newValue)) } catch {}
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const toggle = (key) => setDone((d) => ({ ...d, [key]: !d[key] }))
  const reset = () => setDone({})

  return { done, toggle, reset }
}
