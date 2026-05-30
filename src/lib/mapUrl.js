// Constrói um link de busca do Google Maps a partir de qualquer texto.
// Funciona com nomes de lugares, endereços completos ou referências aproximadas.
export const mapUrl = (query) =>
  'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(query)
