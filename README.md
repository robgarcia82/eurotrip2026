# Roteiro · Madrid + Budapeste

Aplicação React + Vite com o roteiro interativo da viagem **30 mai → 7 jun 2026** (Madrid + Budapeste). Roda 100% no front, sem backend, e persiste o que você marca como feito no `localStorage` do navegador.

## Como rodar localmente

```bash
npm install
npm run dev
```

A aplicação abre em `http://localhost:5173`.

## Build de produção

```bash
npm run build
```

Os arquivos prontos para deploy ficam em `dist/`. Para testar o build localmente:

```bash
npm run preview
```

## Como publicar

### Vercel (recomendado, mais simples)

1. Suba o projeto pro GitHub.
2. Em [vercel.com](https://vercel.com), clique em **Add New → Project** e selecione o repositório.
3. A Vercel detecta o Vite automaticamente. Build command `npm run build`, output directory `dist`. Deploy.

Alternativa via CLI:

```bash
npm i -g vercel
vercel
```

O arquivo `vercel.json` já está configurado.

### Netlify

1. Suba o projeto pro GitHub.
2. Em [app.netlify.com](https://app.netlify.com), **Add new site → Import an existing project** e selecione o repositório.
3. O `netlify.toml` já cuida do build (`npm run build` → publica `dist/`).

Alternativa via CLI:

```bash
npm i -g netlify-cli
netlify deploy --prod
```

## Estrutura

```
roteiro-app/
├── index.html
├── package.json
├── vite.config.js
├── vercel.json            # config opcional Vercel
├── netlify.toml           # config Netlify
├── src/
│   ├── main.jsx           # entry React
│   ├── App.jsx            # tabs + estado
│   ├── styles.css         # estilos (Fraunces + Hanken Grotesque)
│   ├── data.js            # DADOS: DAYS, RESERVAS, FLIGHTS, HOTELS
│   ├── lib/
│   │   ├── mapUrl.js      # builder de link Google Maps
│   │   └── useDone.js     # hook localStorage para "feito"
│   └── components/
│       ├── Header.jsx
│       ├── Tabs.jsx
│       ├── DayStrip.jsx
│       ├── DayView.jsx
│       ├── Block.jsx
│       ├── FoodPanel.jsx
│       ├── RainPanel.jsx
│       ├── Reservas.jsx
│       ├── Logistica.jsx
│       └── Footer.jsx
└── README.md
```

## Como editar o roteiro

Toda a curadoria mora em `src/data.js`. Para mexer:

- **Adicionar/remover dia**: edite o array `DAYS`.
- **Mudar um bloco do dia**: encontre o item dentro de `DAYS[N].blocks`. Campos relevantes:
  - `time`, `t` (título), `desc`, `tags`, `bestTime`
  - `solo`: `"high" | "med" | "low"` — classificação solo-friendly
  - `map`: string que vai pra busca do Google Maps
  - `mapUncertain: true` — marca o botão como tracejado vermelho ("a confirmar")
  - `ticket: { label, url, official: true }` — ingressos / reservas
  - `alert` — caixa de aviso vermelha
  - `bud: true` — colore o nó da timeline em dourado (Budapeste)
- **Adicionar reserva**: edite `RESERVAS`. Campo `p` define a prioridade (1 = vermelho/máxima, 2 = laranja, 3 = verde).

## Convenções visuais

- 🍂 paleta papel/terra/dourado — Fraunces (display) + Hanken Grotesque (texto)
- nó da timeline em **terra** = Madri; **dourado** = Budapeste
- **botão sólido** com 📍 = endereço confirmado · **tracejado vermelho** = a confirmar
- **bolinha verde** no botão de ingresso = site oficial
- **pill solo** verde / âmbar / vermelha = alto / médio / baixo solo-friendly

## Tecnologia

- React 18 · Vite 5 — sem dependências extras
- localStorage chave `roteiro-madbud-done-v1`
- Todos os links externos usam `target="_blank" rel="noopener noreferrer"`
- Layout responsivo (max-width 760px, scroll horizontal nas pills)
