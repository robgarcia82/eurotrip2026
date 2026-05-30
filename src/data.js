// Dados do roteiro · Madrid + Budapeste · 30 mai – 7 jun 2026
// Cada array contém os dados estruturados que alimentam a UI.

export const DAYS = [
{
  id:1, dn:"Sáb", dd:"30", mon:"mai", date:"2026-05-30", city:"voo", cityLabel:"GRU → voo",
  intensity:"light", title:"Embarque para a Europa",
  sub:"São Paulo → Madrid · noite no ar para vencer o jet lag.",
  blocks:[
    {time:"até 18:00",t:"Chegue ao GRU — Terminal 3",bt:true,desc:"Voo internacional: esteja no aeroporto ~3h antes. Faça a Revisão de Segurança no T3; se o portão começar com 2, siga para o T2 para embarcar.",tags:["Mala de mão + despachada","Passaporte + reserva ENBQIW"],map:"GRU Aeroporto Guarulhos Terminal 3"},
    {time:"20:00",t:"Portão de embarque · Grupo 5",desc:"Embarque finaliza às 20:40. Assento 37C (corredor).",map:"GRU Aeroporto Guarulhos Terminal 3"},
    {time:"21:10",t:"Decolagem LATAM LA8076",desc:"≈11h de voo. Dica de ouro: jante leve, durma o máximo possível e ajuste o relógio para Madri (+5h) assim que sentar.",tags:["Madri está 5h à frente"],map:"GRU Aeroporto Guarulhos Terminal 3"}
  ],
  food:{title:"Antes de embarcar",city:"voo",rows:[
    {lbl:"No GRU",it:"Última refeição decente no T3 antes do longo voo. Hidrate-se bem.",map:"GRU Aeroporto Guarulhos Terminal 3 food court"}
  ]},
  rain:"Voo noturno — sem plano externo necessário. Leve casaco leve: o avião esfria."
},
{
  id:2, dn:"Dom", dd:"31", mon:"mai", date:"2026-05-31", city:"madrid", cityLabel:"Madrid",
  intensity:"light", title:"Primeiro gole de Madri",
  sub:"Chegada, compras descendo a Gran Vía, Mercado de San Antón e o pôr do sol no Templo de Debod (que você não fez ano passado).",
  blocks:[
    {time:"12:15",t:"Pouso em Madri · Barajas (MAD)",bt:true,desc:"Imigração + bagagem ≈1h. Você desembarca cedo no dia — aproveite a tarde, mas sem exageros (jet lag).",tags:["Saída por volta de 13:30"],map:"Madrid Barajas Airport"},
    {time:"≈14:00",t:"Aeroporto → Gran Vía",bt:true,desc:"Táxi com tarifa fixa do aeroporto ao centro ≈ €33 (30 min) — opção mais simples com mala. Metrô: L8 + L10 (~45 min) é mais barato.",tags:["Hotel: Eurostars Madrid Gran Vía"],map:"Eurostars Madrid Gran Via"},
    {time:"15:00",t:"Check-in no Eurostars Gran Vía",desc:"Check-in a partir das 15h. O hotel fica na Calle de Leganitos 13, ao lado da Plaza de España. Largue as malas e saia leve.",tags:["Domingo: lojas abertas"],map:"Eurostars Madrid Gran Via Leganitos 13"},
    {time:"15:15",t:"Zara · Plaza de España 19",desc:"A Zara mais perto: ~280 m, 4 min do hotel. (Se quiser a loja-bandeira gigante, é a da Gran Vía 34, ~7 min.) Abre dom 10h–22h.",bestTime:"Logo na saída do hotel",tags:["A 4 min do hotel","Dom 10h–22h"],map:"Zara Plaza de España 19 Madrid"},
    {time:"16:00",t:"The North Face · C. del Carmen 14",desc:"Descendo até perto da Puerta del Sol (~7 min). Mais perto do hotel que a de Fuencarral. Mochilas, jaquetas e a coleção nova.",tags:["Perto de Sol","Dom 12h–20h"],map:"The North Face Carmen 14 Madrid"},
    {time:"16:35",t:"Foot Locker · Preciados 6",desc:"A 2 min da North Face. A maior de Madri para tênis: 3 andares, seção Jordan no 3º. Já te deixa em Sol.",bestTime:"Abre 12h aos domingos",tags:["Templo do sneaker","Dom 12h–21h"],map:"Foot Locker Preciados 6 Madrid"},
    {time:"17:15",t:"Mercado de San Antón (Chueca)",desc:"Da Puerta del Sol, sobe pela Calle Fuencarral até o <b>Mercado de San Antón</b>, mercado gastronômico em Chueca — versão local e descontraída do San Miguel (que você já fez). Lanchinho, vermut, e descanso.",bestTime:"Fim de tarde antes do jantar",tags:["NOVO pra você","Aberto até tarde"],img:"/img/mercado-san-anton.jpg",map:"Mercado de San Anton Madrid",solo:"high"},
    {time:"18:30",t:"Caminhada Conde Duque + Plaza de España",desc:"Volta tranquila pelo bairro de <b>Conde Duque</b> (vizinho de Malasaña, mais calmo e local) até a recém-restaurada <b>Plaza de España</b>, com a estátua de Don Quixote e Sancho Pança. NOVO pra você — fica ao lado do hotel.",tags:["Bairro novo pra você","A 2 min do hotel"],img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Plaza_de_Espa%C3%B1a_de_Madrid_-_02.jpg/1280px-Plaza_de_Espa%C3%B1a_de_Madrid_-_02.jpg",map:"Plaza de España Madrid",solo:"high"},
    {time:"≈20:30",t:"Pôr do sol no Templo de Debod ★",desc:"Templo egípcio de verdade, de graça, no melhor mirante de pôr do sol de Madri — você confirmou que não foi ano passado. Chegue ~1h antes para garantir lugar.",bestTime:"Pôr do sol ≈ 21:40 no início de junho",tags:["NOVIDADE pra você","Grátis","Lotado no fim de tarde — vá cedo"],img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Templo_de_Debod_in_Madrid.jpg/1280px-Templo_de_Debod_in_Madrid.jpg",map:"Templo de Debod Madrid",solo:"high"}
  ],
  food:{title:"Onde comer hoje (domingo curado)",city:"madrid",rows:[
    {lbl:"Lanche tarde",it:"<b>Mercado de San Antón</b> (Chueca, 12min hotel) — <span>vermut + petiscos no balcão; já está no roteiro do dia.</span>",map:"Mercado de San Anton Madrid",solo:"high"},
    {lbl:"Jantar",it:"<b>Casa Macareno</b> (San Vicente Ferrer 44, Malasaña, 8min) — <span>aberto dom até 01:30; tortilhas inventivas, vibe local. Reserve 1-2 dias antes.</span>",map:"Casa Macareno San Vicente Ferrer 44 Madrid",solo:"high"},
    {lbl:"⚠️ Hoje fecham",it:"<span>Bar Selva, La Sanabresa, Casa Dani, Borkonyha — todos fechados aos domingos. Não tente.</span>"}
  ]},
  rain:"Chuva é rara em Madri em junho. Plano B: <b>Mercado de San Miguel</b>, <b>Museu Thyssen</b> ou compras na Gran Vía / El Corte Inglés.",
  tips:["Rota pelas filiais mais próximas: Zara (Plaza de España) → North Face (Carmen) → Foot Locker (Preciados), terminando em Sol — ~1,1 km no total.","North Face e Foot Locker ficam a 2 min uma da outra, junto à Puerta del Sol.","Em junho o desafio é o calor, não a chuva: leve garrafa de água, óculos de sol e protetor."]
},
{
  id:3, dn:"Seg", dd:"01", mon:"jun", date:"2026-06-01", city:"voo", cityLabel:"MAD → Budapeste",
  intensity:"mod", title:"Pulo para Budapeste",
  sub:"Voo de manhã, tarde de chegada e uma primeira noite tranquila no coração de Pest.",
  blocks:[
    {time:"~06:45",t:"Saída do hotel para o aeroporto",bt:true,desc:"Check-out até 12h, mas o voo é cedo. Ryanair sai do Terminal 1 (MAD). Esteja no T1 às ~08:00.",tags:["Fast Track incluído","Mala 20kg despachada"],map:"Madrid Barajas Terminal 1"},
    {time:"10:05",t:"Decolagem Ryanair FR5713",desc:"Madrid → Budapeste, ~3h10. Assento 07C.",tags:["Localizador no e-mail Ryanair"],map:"Madrid Barajas Terminal 1"},
    {time:"13:10",t:"Pouso em Budapeste (BUD)",bt:true,desc:"Aeroporto → Palace District: ônibus 100E até Kálvin tér (~40 min, bilhete próprio ~2.200 HUF) ou Főtaxi oficial ~€26 (30 min).",tags:["Hotel: The Amberlyn Suite"],map:"Budapest Ferenc Liszt Airport"},
    {time:"15:00",t:"Check-in no The Amberlyn Suite",desc:"Apartamento espaçoso no Distrito VIII (Palace District), pertinho do metrô Rákóczi tér. Largue as malas e respire.",map:"The Amberlyn Suite Hotel Budapest"},
    {time:"17:00",t:"Primeiro contato com Pest",desc:"Caminhe até a Basílica de Santo Estêvão (~15 min do hotel). À noite a praça fica iluminada e tranquila.",bestTime:"Fim de tarde, com a fachada iluminada",tags:["Dia leve de propósito"],img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Budapest_Szent_Istvan_Bazilika_R01.jpg/1280px-Budapest_Szent_Istvan_Bazilika_R01.jpg",map:"St Stephens Basilica Budapest",solo:"high"},
    {time:"20:30",t:"Jantar especial: Borkonyha Winekitchen ⭐",desc:"Michelin 1 estrela colado na Basílica (Sas u. 3, 5 min a pé). Bistrô descontraído, €40 a la carte ou tasting €86, 200+ vinhos húngaros. Signature: foie gras com Tokaj Aszú.",bestTime:"Mesa confirmada para 20:30",tags:["⭐ Michelin","€€€","Foie gras com Tokaj Aszú é signature"],
      confirmed:{id:"61314782",at:"Seg 1/jun · 20:30"},map:"Borkonyha Winekitchen Budapest",solo:"med"}
  ],
  food:{title:"Onde comer hoje (chegada Pest)",city:"budapeste",rows:[
    {lbl:"Jantar ⭐",it:"<b>Borkonyha Winekitchen</b> (Sas u. 3, 5 min da Basílica) — <span>1⭐ Michelin com vibe bistrô; €40 a la carte. <b>Seg é a única noite</b> — fecha dom. Reserve.</span>",map:"Borkonyha Winekitchen Sas u 3 Budapest",solo:"med"},
    {lbl:"Alternativa",it:"<b>Hungarikum Bisztró</b> (Steindl Imre 13, perto Parlamento) — <span>clássicos húngaros bem feitos, mais turístico mas confiável.</span>",map:"Hungarikum Bisztro Steindl Imre 13 Budapest",solo:"med"},
    {lbl:"Rápido",it:"<b>Belvárosi Disznótoros</b> — <span>balcão de carnes self-service, €7-12.</span>",map:"Belvarosi Disznotoros Kiraly utca Budapest",solo:"high"}
  ]},
  rain:"Chegou e choveu? Plano B: jantar na <b>New York Café</b> (10 min a pé) ou drinks no <b>Szimpla Kert</b>, o ruin bar mais famoso da cidade.",
  tips:["Café da manhã incluído no The Amberlyn Suite nos próximos 3 dias — não precisa procurar nada fora."]
},
{
  id:4, dn:"Ter", dd:"02", mon:"jun", date:"2026-06-02", city:"budapeste", cityLabel:"Budapeste",
  intensity:"int", title:"Pest clássica + cruzeiro ao anoitecer",
  sub:"Praça dos Heróis, a basílica por cima, o Mercado Central com lángos e um cruzeiro no Danúbio ao pôr do sol.",
  blocks:[
    {time:"08:00",t:"Café da manhã no hotel",bud:true,desc:"Incluído no The Amberlyn Suite — energia em casa antes do dia mais intenso da viagem.",map:"The Amberlyn Suite Hotel Budapest"},
    {time:"09:30",t:"Praça dos Heróis + Parque da Cidade",bud:true,desc:"Metrô M1 (a linha histórica) até Hősök tere. Monumento imponente + Castelo Vajdahunyad atrás. Tudo aberto e grátis.",bestTime:"Manhã, antes do calor e dos grupos",tags:["Grátis","M1 amarela"],img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/HUN-2015-Budapest-Heroes%E2%80%99_Square.jpg/1280px-HUN-2015-Budapest-Heroes%E2%80%99_Square.jpg",map:"Heroes Square Budapest",solo:"high"},
    {time:"13:00",t:"New York Café",bud:true,desc:"\"O café mais bonito do mundo\". Almoço/café reservado direto pela Tableversum (#0385) — fura a fila que de dia é longa. Smart casual.",bestTime:"Mesa garantida — chegue uns 10 min antes",tags:["Smart casual — evite chinelo/regata","Café/bolo ~€10–12"],
      confirmed:{id:"0385",at:"Ter 2/jun · 13:00"},img:"https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Anantara_New_York_Palace_Budapest_Hotel.png/1280px-Anantara_New_York_Palace_Budapest_Hotel.png",map:"New York Cafe Budapest",solo:"med"},
    {time:"14:30",t:"Basílica de Santo Estêvão + terraço panorâmico",bud:true,desc:"Suba ao terraço (elevador ou 364 degraus) para vista 360º. Entrada simples ~2.600 HUF; combinado com terraço + tesouro ~5.000 HUF.",bestTime:"Tarde — luz boa sobre os telhados de Pest",tags:["Ingresso na bilheteria ou online"],
      ticket:{label:"Site da Basílica",url:"https://www.bazilika.biz/",official:true},img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Budapest_Szent_Istvan_Bazilika_R01.jpg/1280px-Budapest_Szent_Istvan_Bazilika_R01.jpg",map:"St Stephens Basilica Budapest",solo:"high"},
    {time:"16:30",t:"Mercado Central + Lángos",bud:true,desc:"Nagyvásárcsarnok (Ter 6h–18h). Suba ao 1º andar e prove o <b>lángos</b> (massa frita com alho, creme e queijo) — pedido do roteiro cumprido. Depois, esticada pela Váci utca.",bestTime:"Antes das 18h (o mercado fecha)",tags:["Lángos!","Leve dinheiro/cartão"],img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/VasarcsarnokFotoThalerTamas.JPG/1280px-VasarcsarnokFotoThalerTamas.JPG",map:"Great Market Hall Budapest",solo:"high"},
    {time:"~20:00",t:"Cruzeiro ao anoitecer no Danúbio",bud:true,desc:"O passeio é icônico — vê o Parlamento iluminado da água. <b>Mas evite o produto \"Aperol &amp; Prosecco\"</b> da sua lista: é vendido explicitamente para casais (mesas para dois, brinde temático, fotos com casaizinhos no marketing). Para você indo solo, escolha um <b>sightseeing cruise comum com audioguia</b> — Legenda \"Duna Bella\" ou similar, ~75 min, €17-22, público misto de turistas. Embarque ~20h para pegar o pôr do sol (≈20:45).",bestTime:"Embarque ~20:00 — pôr do sol + cidade acendendo",solo:"high",tags:["Sightseeing com audioguia","~€20","Pública mista, sem tema de casal"],
      ticket:{label:"Buscar cruzeiros (GetYourGuide)",url:"https://www.getyourguide.com/budapest-l36/danube-cruises-tc274/",official:false},alert:false,map:"Vigado ter Budapest cruise dock",mapUncertain:true}
  ],
  food:{title:"Comidas do dia (encaixadas no fluxo)",city:"budapeste",rows:[
    {lbl:"Café manhã",it:"<b>No hotel</b> — <span>café incluído no The Amberlyn Suite; sai pronto pro dia.</span>",map:"The Amberlyn Suite Hotel Budapest"},
    {lbl:"Almoço",it:"<b>Lángos no Mercado Central</b> — <span>1º andar, pedido do roteiro.</span>",map:"Great Market Hall Budapest",solo:"high"},
    {lbl:"Pré-cruzeiro",it:"<b>Belvárosi Disznótoros</b> (filial Vámház perto do Mercado) — <span>algo leve de balcão antes do embarque.</span>",map:"Belvarosi Disznotoros Vamhaz Budapest",solo:"high"}
  ]},
  rain:"Tudo plano e em Pest. Se chover: troque o cruzeiro de data e mergulhe nos <b>Banhos Széchenyi</b> (ao lado da Praça dos Heróis) — termas quentes mesmo sob chuva.",
  tips:["Dia mais intenso da viagem — calce tênis confortável.","O cruzeiro é o ponto alto da noite; deixe o jantar pesado para outro dia."]
},
{
  id:5, dn:"Qua", dd:"03", mon:"jun", date:"2026-06-03", city:"budapeste", cityLabel:"Budapeste",
  intensity:"int", title:"Parlamento, Ponte das Correntes e Bastião dourado",
  sub:"Manhã no Parlamento em Pest, travessia da Lánchíd ao meio-dia, tarde no Castelo de Buda e à noite o pôr do sol no Fisherman's Bastion.",
  blocks:[
    {time:"09:30",t:"Metrô M2 → Kossuth Lajos tér",bt:true,bud:true,desc:"Linha vermelha (M2) do Astoria/Deák até <b>Kossuth Lajos tér</b> — ~10 min, sai direto na praça do Parlamento.",tags:["M2 vermelha","~10 min"],map:"Kossuth Lajos ter Budapest"},
    {time:"10:00",t:"Parlamento por fora + Memorial dos Sapatos",bud:true,desc:"<b>Tour interno esgotou pra sua janela</b> — mas a fachada neogótica é o ponto alto de qualquer jeito. Volta inteira na Praça Kossuth (estátuas + simetria) e desça 5 min ao sul até o <b>Memorial dos Sapatos do Danúbio</b> (Shoes on the Danube), um dos memoriais mais fortes da cidade. Continue pela margem até a Ponte das Correntes — ~15 min andando.",bestTime:"Luz da manhã sobre a água",tags:["Sem ingresso necessário","Memorial dos Sapatos (5 min sul)","Caminhada margem do Danúbio"],img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Hungarian_Parliament_Building_from_across_the_Danube%2C_2025-01-11.jpg/1280px-Hungarian_Parliament_Building_from_across_the_Danube%2C_2025-01-11.jpg",map:"Hungarian Parliament Building Budapest",solo:"high"},
    {time:"11:30",t:"Travessia da Ponte das Correntes ★",bt:true,bud:true,desc:"A Széchenyi Lánchíd recém-restaurada (reabriu 2024). ~10 min de Pest a Buda, vista 360º do Danúbio. No outro lado: Clark Ádám tér, base do funicular Sikló.",bestTime:"Sol alto — Danúbio brilhando",tags:["~10 min a pé","Reaberta em 2024"],img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Sz%C3%A9chenyi_Chain_Bridge_in_Budapest_at_night.jpg/1280px-Sz%C3%A9chenyi_Chain_Bridge_in_Budapest_at_night.jpg",map:"Szechenyi Chain Bridge Budapest",solo:"high"},
    {time:"12:00",t:"Funicular Sikló → topo do Castelo",bt:true,bud:true,desc:"O Sikló sobe em ~2 min até o bairro do castelo. ~2.000 HUF só ida; ou suba a pé pelas escadas (10 min) se quiser economizar.",tags:["~2 min","Ida ~2.000 HUF","Ou escadas grátis"],map:"Siklo funicular Budapest",solo:"high"},
    {time:"12:30",t:"Almoço no bairro do Castelo",bud:true,desc:"Pare para comer no bairro do castelo ou desça brevemente para Batthyány tér com vista do Parlamento. Opções com vista turísticas, mas a paisagem compensa.",map:"Buda Castle District Budapest"},
    {time:"14:00",t:"Castelo de Buda + Igreja Matthias",bud:true,desc:"Explore os pátios do castelo (Budavári Palota — grátis) e a <b>Igreja Matthias</b> ao lado do Bastião (telhado de azulejos coloridos). Por dentro da Matthias é pago; por fora já vale a foto. Reserve a subida ao Bastião pra noite (volta às 19:30 com luz dourada).",bestTime:"Pátios são grátis; Matthias interior pago",tags:["Pátios grátis","Matthias por fora basta","Volta ao Bastião à noite"],img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Budav%C3%A1ri_Palota%2C_ABCDEF_%C3%A9p%C3%BClet.jpg/1280px-Budav%C3%A1ri_Palota%2C_ABCDEF_%C3%A9p%C3%BClet.jpg",map:"Buda Castle Budapest",solo:"high"},
    {time:"16:30",t:"Volta ao hotel — pausa real",bt:true,desc:"Metrô ou táxi de volta ao The Amberlyn Suite. Descanse antes do bloco final do dia (Bastião + jantar).",tags:["Recuperar pra noite"],map:"The Amberlyn Suite Hotel Budapest"},
    {time:"~19:30",t:"Pôr do sol no Fisherman's Bastion",bud:true,desc:"O pedido principal do roteiro. Volte ao Bastião dos Pescadores para o pôr do sol dourado sobre o Parlamento e o Danúbio. O terraço inferior é sempre grátis; as torres de cima custam ~1.700 HUF (grátis antes das 9h).",bestTime:"Chegue ~19:45 — pôr do sol ≈ 20:45",tags:["TEM que ver ☀","Terraço inferior grátis","Torres ~€4 (opcional)"],
      ticket:{label:"Info & ingressos (oficial)",url:"https://fishermansbastion.com/",official:true},img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Hal%C3%A1szb%C3%A1stya_2017.jpg/1280px-Hal%C3%A1szb%C3%A1stya_2017.jpg",map:"Fishermans Bastion Budapest",solo:"high"},
    {time:"21:30",t:"Jantar especial: N28 Wine and Kitchen ⭐",bud:true,desc:"Bib Gourmand Michelin 2025 (Nagymező 28, perto da Ópera). Após o Fisherman's, desça pela Ponte das Correntes, metrô M1 até Opera. <b>Qua é dia bom</b> — fecha dom+seg. Cozinha húngara contemporânea, ~€40-50 com 2 pratos + vinho. Reserve 2-3 dias antes.",bestTime:"Reserve para 21h-21:30 (após pôr do sol)",tags:["⭐ Bib Gourmand","€€","RESERVA","Alternativa próxima: Gettó Gulyás (15min hotel)"],
      ticket:{label:"Reservar (oficial)",url:"https://n28.hu/",official:true},map:"N28 Wine and Kitchen Budapest",solo:"high"}
  ],
  food:{title:"Comidas do dia (lado Buda + Pest)",city:"budapeste",rows:[
    {lbl:"Almoço",it:"<b>Bairro do Castelo</b> — <span>opções com vista (turísticas, mas a paisagem compensa). Tente <b>Halászbástya Étterem</b> ou opções mais simples no Tárnok utca.</span>",map:"Buda Castle District restaurants Budapest",solo:"high"},
    {lbl:"Jantar ⭐",it:"<b>N28 Wine and Kitchen</b> (Bib Gourmand) — <span>já no roteiro às 21:30. Reserve.</span>",map:"N28 Wine and Kitchen Nagymezo 28 Budapest",solo:"high"},
    {lbl:"Plano B + perto",it:"<b>Gettó Gulyás</b> (Wesselényi 18, 15min hotel) — <span>clássicos húngaros, 4.6★ / 15k reviews.</span>",map:"Getto Gulyas Wesselenyi 18 Budapest",solo:"med"}
  ]},
  rain:"Castelo com chuva: refugie-se na <b>Galeria Nacional Húngara</b> e no <b>Museu de História de Budapeste</b>, ambos dentro do castelo. Pôr do sol no Bastião pode virar visita aos <b>Banhos Rudas</b> (origem otomana, cúpula histórica e rooftop com jacuzzi virado para o Danúbio — Gellért está fechado até 2028).",
  tips:["Tour interno do Parlamento esgotou pra sua janela — fachada + Memorial dos Sapatos cobrem o que precisa, e você ainda vê o Parlamento iluminado do cruzeiro (ter) e do Bastião à noite.","Se o pôr do sol estiver nublado, o Bastião continua mágico à noite, todo iluminado.","Calçado firme: a subida ao castelo tem ladeiras e paralelepípedos."]
},
{
  id:6, dn:"Qui", dd:"04", mon:"jun", date:"2026-06-04", city:"voo", cityLabel:"Budapeste → MAD",
  intensity:"light", title:"Volta a Madri",
  sub:"Manhã curta em Budapeste, voo no início da tarde e uma noite leve de reencontro com Madri.",
  blocks:[
    {time:"08:30",t:"Café da manhã no hotel",desc:"Última manhã em Budapeste — café incluído no The Amberlyn Suite antes do check-out.",map:"The Amberlyn Suite Hotel Budapest"},
    {time:"~10:45",t:"Check-out → aeroporto (BUD)",bt:true,desc:"Saia com folga. Főtaxi ou 100E de volta. Voo Ryanair no terminal correspondente — confira no embarque.",tags:["Fast Track incluído","Mala 20kg"],map:"Budapest Ferenc Liszt Airport"},
    {time:"13:50",t:"Decolagem Ryanair FR5712",desc:"Budapeste → Madrid, ~3h20. Assento 19D.",map:"Budapest Ferenc Liszt Airport"},
    {time:"17:10",t:"Pouso em Madri (MAD)",bt:true,desc:"Transfer ao novo hotel na região da Gran Vía / Plaza de España. Táxi ~€33 ou metrô.",tags:["Hotel: Grupotel Mayorazgo"],map:"Madrid Barajas Airport"},
    {time:"18:30",t:"Check-in no Grupotel Mayorazgo",desc:"Bem central (Flor Baja, ao lado da Gran Vía / Plaza de España). Cancelamento grátis nesta reserva.",map:"Grupotel Mayorazgo Madrid"},
    {time:"20:30",t:"Reencontro suave com Madri",desc:"Você fez Cava Baja, San Miguel e San Ginés ano passado. Reencontro com a cidade pelo <b>Mercado de San Antón</b> (Chueca, 12 min do hotel) para vermut + petiscos. Mais cansado? <b>Casa Macareno</b> (Malasaña, 8 min) abre direto 12:30→01:30 e tem mesa fácil às quintas. Reserve.",bestTime:"Jantar à espanhola começa ~21h",tags:["NOVO pra você","Dia de transição — vá leve","Macareno: reserve 1-2 dias antes"],map:"Mercado de San Anton Madrid",solo:"high"}
  ],
  food:{title:"Onde comer (volta a Madri — tudo NOVO)",city:"madrid",rows:[
    {lbl:"Mercado",it:"<b>Mercado de San Antón</b> (Chueca) — <span>versão local do San Miguel.</span>",map:"Mercado de San Anton Madrid",solo:"high"},
    {lbl:"Tapas",it:"<b>Casa Macareno</b> (Malasaña) — <span>tortilhas inventivas (brie/trufa).</span>",map:"Casa Macareno San Vicente Ferrer 44 Madrid",solo:"high"},
    {lbl:"Doce",it:"<b>Bianchi Kiosko Caffé</b> (Malasaña) — <span>café italiano de bairro, NOVO.</span>",map:"Bianchi Kiosko Cafe Pez 4 Madrid",solo:"high"}
  ]},
  rain:"Noite chuvosa em Madri (raro): jante coberto no <b>Mercado de San Antón</b> ou <b>Mercado de Vallehermoso</b> (Chamberí, mais local ainda).",
  tips:["Como o cancelamento do Grupotel é grátis, dá tranquilidade caso algo mude."]
},
{
  id:7, dn:"Sex", dd:"05", mon:"jun", date:"2026-06-05", city:"madrid", cityLabel:"Madrid",
  intensity:"int", title:"Madri que faltou: Thyssen, Salamanca & Ponzano",
  sub:"Tudo NOVO pra você: o terceiro museu do triângulo, o bairro mais elegante e a rua de tapas onde os madrilenhos comem.",
  blocks:[
    {time:"09:00",t:"Café da manhã no hotel",desc:"Incluído no Grupotel Mayorazgo — depois sai direto pro Thyssen, sem desvio.",map:"Grupotel Mayorazgo Madrid"},
    {time:"10:00",t:"Museu Thyssen-Bornemisza ★",desc:"O terceiro do triângulo de arte de Madri — você fez Prado e Reina Sofía ano passado, este é o que faltou. Coleção que vai do Renascimento até Pop Art, muito mais ampla cronologicamente; bem menos cheio. €13.",bestTime:"Abertura (10h) para evitar a fila",tags:["NOVIDADE pra você","€13","~1h30 de visita"],
      ticket:{label:"Ingressos (oficial)",url:"https://www.museothyssen.org/en/visit",official:true},img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Site_of_the_Retiro_and_the_Prado_in_Madrid_49_%2829684554308%29.jpg/1280px-Site_of_the_Retiro_and_the_Prado_in_Madrid_49_%2829684554308%29.jpg",map:"Museo Thyssen-Bornemisza Madrid",solo:"high"},
    {time:"12:00",t:"CaixaForum + jardim vertical",desc:"Centro cultural a 5 min do Thyssen, com a icônica fachada de jardim vertical de Patrick Blanc. Exposições temporárias surpreendentes, entrada ~€6. Bom escape da hora do calor.",tags:["NOVO pra você","€6"],img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Caixaforum_Madrid_2024.jpg/1280px-Caixaforum_Madrid_2024.jpg",map:"CaixaForum Madrid",solo:"high"},
    {time:"13:30",t:"Almoço: Casa Dani no Mercado de la Paz",desc:"Metrô L2/L4 até Serrano, depois 7 min a pé. Casa Dani fica dentro do Mercado de la Paz — clássica tortilla espanhola madrilenha (uma das mais respeitadas da cidade) + menu del día caseiro €13-15. O mercado é frequentado por moradores do Salamanca, não por turistas. <b>Sex 7-20h</b>, sem reserva — chegue antes das 14h.",bestTime:"Antes das 14h para evitar fila",tags:["NOVO pra você","€","Sem reserva","Local autêntico"],map:"Casa Dani Mercado de la Paz Madrid",solo:"high"},
    {time:"15:00",t:"Bairro de Salamanca — Calle Serrano ★",desc:"O \"milhão de ouro\" de Madri, a vibe é mais Paris que Madri: Loewe, Hermès, mas também Massimo Dutti, Sandro, Carolina Herrera. Calle Serrano + Calle Velázquez + Calle Ortega y Gasset. Cafés e gelaterias nas calçadas.",bestTime:"Tarde: ruas com sombra, ar-condicionado das lojas",tags:["NOVIDADE pra você","Luxe shopping","Vibe parisiense"],img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Calle_Serrano_-_panoramio.jpg/1280px-Calle_Serrano_-_panoramio.jpg",map:"Calle Serrano Madrid",solo:"high"},
    {time:"17:30",t:"Plaza Cibeles + Puerta de Alcalá",desc:"Caminhada de Salamanca pela Calle Alcalá — passa pela <b>Puerta de Alcalá</b> (que você já viu ano passado) e desemboca na <b>Plaza Cibeles</b>. Você já fez de dia ano passado; a graça agora é a luz baixa do fim de tarde sobre a fonte e a fachada do Palacio de Cibeles. ~10 min de foto, depois volta pela mesma Calle Alcalá pra entrar no Retiro pela Puerta de Alcalá.",bestTime:"Fim de tarde — luz lateral sobre a fachada",tags:["Já fez ano passado","Luz diferente","Sem ingresso","~10 min no local"],img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Cibeles_desde_el_Ayuntamiento_%28Madrid%29_%2814203354114%29.jpg/1280px-Cibeles_desde_el_Ayuntamiento_%28Madrid%29_%2814203354114%29.jpg",map:"Plaza de Cibeles Madrid",solo:"high"},
    {time:"18:30",t:"Parque do Retiro com luz dourada",desc:"Desce de Salamanca pela Puerta de Alcalá e entra no Retiro com o sol já baixo (calor passou). Lago de barquinhos, Palácio de Cristal e o Palácio de Velázquez. Grátis.",bestTime:"Golden hour — luz baixa, calor passou",tags:["NOVIDADE pra você","Grátis","Barquinhos no lago"],img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/MADRID_051116_MXALX_041.jpg/1280px-MADRID_051116_MXALX_041.jpg",map:"Parque del Retiro Madrid",solo:"high"},
    {time:"20:30",t:"Metrô para Chamberí — Plaza de Olavide",desc:"Praça arborizada cercada de terrazas, é onde os madrilenhos jovens se sentam num fim de tarde. Tomar uma cerveja gelada antes do jantar.",tags:["NOVO pra você","Reduto local"],img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/El_entorno_de_la_Plaza_de_Olavide%2C_m%C3%A1s_seguro_gracias_al_Fondo_de_Reequilibrio_Territorial_02.jpg/1280px-El_entorno_de_la_Plaza_de_Olavide%2C_m%C3%A1s_seguro_gracias_al_Fondo_de_Reequilibrio_Territorial_02.jpg",map:"Plaza de Olavide Madrid",solo:"high"},
    {time:"21:30",t:"Calle Ponzano — Sala de Despiece ★",desc:"<b>Sala de Despiece</b> (Alonso Cano 28, esquina com Ponzano) é cult em Madri: conceito açougue, balcão com pratos finalizados na sua frente. O \"Rolex\" (ovo+foie+pão) é signature. Você fez Cava Baja ano passado; aqui é a versão fora do circuito turístico. Continue com tapas curtas em La Gildería ou Hermanos Vinagre na mesma rua.",tags:["NOVIDADE pra você","€€-€€€","RESERVA OBRIGATÓRIA 1-3 dias antes","Tapeo à madrilenha"],
      ticket:{label:"Reservar (oficial)",url:"https://saladedespiece.com/",official:true},map:"Sala de Despiece Madrid",solo:"high"}
  ],
  food:{title:"Comidas do dia (rota completa)",city:"madrid",rows:[
    {lbl:"Café manhã",it:"<b>No hotel</b> — <span>café incluído no Grupotel Mayorazgo.</span>",map:"Grupotel Mayorazgo Madrid"},
    {lbl:"Almoço",it:"<b>Casa Dani / Mercado de la Paz</b> (Salamanca) — <span>tortilla famosa + menu del día ~€13. Sex 7-20h.</span>",map:"Casa Dani Mercado de la Paz Madrid",solo:"high"},
    {lbl:"Jantar ⭐",it:"<b>Sala de Despiece</b> (Ponzano area) — <span>cult madrilenho, reserve 1-3 dias antes.</span>",map:"Sala de Despiece Alonso Cano 28 Madrid",solo:"high"}
  ]},
  rain:"Dia perfeito mesmo na chuva: Thyssen + CaixaForum são cobertos. Se piorar, troque o Retiro pelo <b>Museu Sorolla</b> (casa-museu do pintor da luz, em Almagro, lindo) ou Mercado de Vallehermoso em Chamberí.",
  tips:["Praticamente todo o dia é NOVO pra você — você fez Prado, Reina Sofía e Las Letras ano passado.","Reserve mesa na Sala de Despiece (Ponzano 11) com 1–2 dias de antecedência."]
},
{
  id:8, dn:"Sáb", dd:"06", mon:"jun", date:"2026-06-06", city:"madrid", cityLabel:"Madrid",
  intensity:"int", title:"Madri por dentro: bairros que faltaram",
  sub:"Troca da Guarda, os afrescos de Goya, a Madri castiça de Lavapiés e um último drink alto.",
  blocks:[
    {time:"09:00",t:"Café da manhã no hotel",desc:"Incluído no Grupotel Mayorazgo — ~15 min a pé do Palácio Real depois.",map:"Grupotel Mayorazgo Madrid"},
    {time:"10:30",t:"Troca da Guarda no Palácio Real ★",desc:"Aos sábados há a cerimônia (≈11h, no verão pode começar às 10h) — grátis, na Plaza de la Armería. Você visitou o interior ano passado; agora é só pegar a cerimônia de fora. Chegue ~10:15 para bom lugar.",bestTime:"Sábado de manhã — única janela da viagem",tags:["NOVIDADE pra você","Grátis","Só quarta e sábado"],img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Palacio_Real_de_Madrid_Julio_2016_%28cropped%29.jpg/1280px-Palacio_Real_de_Madrid_Julio_2016_%28cropped%29.jpg",map:"Palacio Real de Madrid",solo:"high"},
    {time:"12:00",t:"Jardins de Sabatini",desc:"Atrás do palácio, GRÁTIS, raramente apareceu no roteiro do ano passado. Lago, esculturas e vista pro Palácio Real. Volte aqui no fim do dia para o pôr do sol — é um dos melhores de Madri e não é o Debod.",tags:["NOVO pra você","Grátis"],img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Palacio_Real%2C_Madrid%2C_Espa%C3%B1a%2C_2014-12-27%2C_DD_09.JPG/1280px-Palacio_Real%2C_Madrid%2C_Espa%C3%B1a%2C_2014-12-27%2C_DD_09.JPG",map:"Jardines de Sabatini Madrid",solo:"high"},
    {time:"12:45",t:"Caminhada → Ermita de San Antonio de la Florida ★",desc:"~10 min descendo pelo Paseo de la Florida. <b>O teto da capela é todo afrescado por Goya</b>, e é onde ele está enterrado. Grátis, raramente cheia, fora do circuito turístico.",bestTime:"Antes do almoço — fecha 13h30 alguns dias",tags:["NOVIDADE pra você","Grátis","Goya original"],img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/San_Antonio_de_la_Florida.jpg/1280px-San_Antonio_de_la_Florida.jpg",map:"Ermita San Antonio de la Florida Madrid",solo:"high"},
    {time:"13:45",t:"Almoço na Casa Mingo ★",desc:"Sidrería asturiana ao lado da ermita, desde 1888. Frango assado + sidra natural servida do alto = clássico absoluto que turista raramente acha. <b>Não aceita reserva</b>, fila na hora — mas anda rápido pois é cantina espaçosa.",tags:["NOVO pra você","Clássico local","€","Sem reserva"],map:"Casa Mingo Madrid",solo:"high"},
    {time:"15:30",t:"Pausa siesta no hotel",desc:"Pico de calor (15h–17h em junho). Recarregue para a tarde."},
    {time:"17:00",t:"Lavapiés + La Tabacalera ★",desc:"Bairro multicultural, ruas íngremes, street art. <b>La Tabacalera</b> é um centro cultural num antigo galpão de tabaco — exposições gratuitas, vibe alternativa. Combine com uma volta pela Calle de la Cabeza e Plaza de Lavapiés.",tags:["NOVIDADE pra você","Grátis","Bairro alternativo"],img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Madrid_-_Tabacalera_Promoci%C3%B3n_del_Arte_%2836635189401%29.jpg/1280px-Madrid_-_Tabacalera_Promoci%C3%B3n_del_Arte_%2836635189401%29.jpg",map:"La Tabacalera Madrid",solo:"high"},
    {time:"19:30",t:"Mercado de San Fernando",desc:"Mercado de bairro em Lavapiés com bares dentro, frequentado por locais, muito diferente do San Miguel turístico que você já fez. Petisco e cerveja antes do jantar.",tags:["NOVO pra você"],map:"Mercado de San Fernando Madrid",solo:"high"},
    {time:"21:30",t:"Último jantar: Casa Macareno ★",desc:"Tortilhas inventivas (brie e trufa, morcilla) + steak tartare + cheesecake premiado. Ano passado você caminhou em Malasaña; aqui é a casa que vale a parada (4.6★ / 4.516 reviews). <b>Sábado é o dia mais cheio</b> — reserve 2-3 dias antes ou encare 30 min de fila.",tags:["NOVO pra você","€€","RESERVA RECOMENDADA","Tortilhas premiadas"],map:"Casa Macareno Madrid",solo:"high"},
    {time:"~23:00",t:"Drink final no Ginkgo Sky Bar",desc:"Rooftop do Hotel VP Plaza España Design, com piscina infinita virada para a praça. A 5 min do hotel. Pôr do sol já passou (~21:45), mas a noite com Madri acesa vale o último gole. (Alternativa: voltar a Sabatini Gardens para o sunset, gratuito.)",bestTime:"Sunset ≈ 21:45 nos Jardins de Sabatini",tags:["NOVO pra você","Último drink","Verifique horário"],map:"Ginkgo Sky Bar Madrid",solo:"med"}
  ],
  food:{title:"Comidas do dia (tudo no fluxo)",city:"madrid",rows:[
    {lbl:"Café manhã",it:"<b>No hotel</b> — <span>café incluído no Grupotel Mayorazgo.</span>",map:"Grupotel Mayorazgo Madrid"},
    {lbl:"Almoço ★",it:"<b>Casa Mingo</b> (Pso. Florida 34) — <span>sidrería 1888, ao lado da Ermita.</span>",map:"Casa Mingo Paseo de la Florida 34 Madrid",solo:"high"},
    {lbl:"Jantar ★",it:"<b>Casa Macareno</b> (San Vicente Ferrer 44) — <span>reserve 2-3 dias antes (sábado lota).</span>",map:"Casa Macareno San Vicente Ferrer 44 Madrid",solo:"high"}
  ]},
  rain:"Tudo cobre bem: Palácio (cerimônia em parte exposta, mas curta), Tabacalera, Mercado de San Fernando, jantares. Se chover muito de manhã, troque a Ermita pelo <b>Museu Cerralbo</b> (palacete intacto do séc. XIX, perto do hotel).",
  tips:["Hoje é o DIA NOVO de Madri — todo o roteiro evita o que você fez ano passado.","Faça as malas à noite: amanhã o voo é cedo (saída do hotel ~08:00).","O Ginkgo Sky Bar costuma pedir reserva à noite; vale ligar de manhã."]
},
{
  id:9, dn:"Dom", dd:"07", mon:"jun", date:"2026-06-07", city:"voo", cityLabel:"Madrid → GRU",
  intensity:"light", title:"Volta para casa",
  sub:"Café no hotel, check-out e voo de volta ao Brasil.",
  blocks:[
    {time:"08:00",t:"Café da manhã no hotel",desc:"Última manhã em Madri — café incluído no Grupotel antes do check-out.",map:"Grupotel Mayorazgo Madrid"},
    {time:"~09:00",t:"Check-out → Barajas (MAD)",bt:true,desc:"Saia com ~3h de antecedência para voo internacional. Táxi ~€33 ou metrô/Cercanías.",tags:["Voo Iberia · Terminal a confirmar"],map:"Madrid Barajas Terminal 4"},
    {time:"11:50",t:"Decolagem Iberia IB1525",desc:"Madrid → São Paulo (GRU), ~13h de voo. Localizador LA9574168MNRR.",tags:["Chega ao GRU 17:50 (horário de Brasília)"],map:"Madrid Barajas Terminal 4"},
    {time:"17:50",t:"Pouso em São Paulo (GRU)",bt:true,desc:"Bem-vindo de volta. ¡Hasta la próxima!",map:"GRU Aeroporto Guarulhos"}
  ],
  food:{title:"Última de Madri",city:"madrid",rows:[
    {lbl:"Café",it:"<b>No hotel</b> — <span>café incluído no Grupotel Mayorazgo antes do check-out.</span>",map:"Grupotel Mayorazgo Madrid"}
  ]},
  rain:"Dia de viagem — sem plano externo. Confirme o terminal da Iberia no app antes de sair."
}
];

export const RESERVAS = [
  {p:1, confirmed:{id:"61314782",at:"Seg 1/jun · 20:30"}, when:"✓ Confirmado", t:"Borkonyha Winekitchen (Budapeste · seg 1/jun)",
   d:"⭐ Michelin 1 estrela. Mesa confirmada para <b>20:30</b>, a primeira noite em Budapeste. Bistrô descontraído ao lado da Basílica, €40 mains a la carte ou tasting €86, 200+ vinhos húngaros. Signature: foie gras com Tokaj Aszú.",
   link:{label:"Reservar (oficial)",url:"https://borkonyha.hu/en/reservation/",official:true},
   map:"Borkonyha Winekitchen Sas u 3 Budapest",solo:"med"},
  {p:3, when:"🟢 Sem ingresso · visita por fora", t:"Parlamento Húngaro — só fachada (qua 3/jun)",
   d:"<b>Tour interno esgotou em todos os dias da sua janela</b> (1–4 jun). Plano alternativo: visita externa às 10h de qua 3/jun, voltando pela Praça Kossuth e descendo até o <b>Memorial dos Sapatos do Danúbio</b>. Você também vê o Parlamento iluminado do <b>cruzeiro de ter 2/jun</b> e do <b>Fisherman's Bastion qua 3/jun à noite</b> — três ângulos diferentes. Plano B improvável: aparecer 8h no centro de visitantes pra ingresso de última hora liberado por cancelamento.",
   link:{label:"Tentar última hora (oficial)",url:"https://www.parlament.hu/web/visitors/purchasing-tickets",official:true},
   map:"Hungarian Parliament Building Budapest",solo:"high"},
  {p:2, when:"🟠 2-3 dias antes", t:"N28 Wine and Kitchen (Budapeste · qua 3/jun)",
   d:"⭐ Bib Gourmand Michelin 2025. Jantar após o Fisherman's Bastion. Cozinha húngara contemporânea, ~€40-50 com 2 pratos + vinho. <b>Dom + seg fechado</b>, qua é janela boa. Reduto local fora do circuito turístico.",
   link:{label:"Reservar (oficial)",url:"https://n28.hu/",official:true},
   map:"N28 Wine and Kitchen Nagymezo 28 Budapest",solo:"high"},
  {p:2, when:"🟠 1-2 dias antes", t:"Cruzeiro sightseeing no Danúbio (ter 2/jun)",
   d:"<b>Atenção solo:</b> evite o produto temático \"Aperol & Prosecco\" — é vendido pra casais (mesas para dois, brinde temático). Para você indo sozinho, melhor: <b>Legenda \"Duna Bella\"</b> ou outro sightseeing comum com audioguia, ~75 min, €17-22. Doca exata depende do operador — verifique no e-mail (a maioria sai de Vigadó tér ou Jane Haining rakpart).",
   link:{label:"Buscar sightseeing cruises (GetYourGuide)",url:"https://www.getyourguide.com/budapest-l36/danube-cruises-tc274/",official:false},
   map:"Vigado ter Budapest cruise dock", mapUncertain:true, solo:"high"},
  {p:2, when:"🟠 1-3 dias antes", t:"Sala de Despiece (Madri · sex 5/jun)",
   d:"Cult madrilenho com conceito açougue — sente no balcão para ver os pratos finalizados na sua frente. Após a Calle Ponzano. Aberto sex 13-17 + 20-24, então 21:30 é horário cheio. Sem reserva, fila de 30+ min.",
   link:{label:"Reservar (oficial)",url:"https://saladedespiece.com/",official:true},
   map:"Sala de Despiece Alonso Cano 28 Madrid",solo:"high"},
  {p:2, when:"🟠 2-3 dias antes", t:"Casa Macareno (Madri · sáb 6/jun)",
   d:"Tortilhas inventivas + steak tartare premiados (4.6★ / 4.5k reviews). Último jantar da viagem, sábado lota — reserve. Aberto direto 12:30→01:30 ter-dom (seg fecha 17:30).",
   link:{label:"Reserva por telefone",url:"tel:+34672876454",official:true},
   map:"Casa Macareno San Vicente Ferrer 44 Madrid",solo:"high"},
  {p:2, when:"Antes da viagem", t:"Museu Thyssen-Bornemisza (Madri · sex 5/jun)",
   d:"€13 — o museu que faltou no triângulo da arte (você fez Prado e Reina Sofía ano passado). Reserve horário online para furar a fila. Coleção do Renascimento ao Pop Art.",
   link:{label:"Ingressos (oficial)",url:"https://www.museothyssen.org/en/visit",official:true},
   map:"Museo Thyssen-Bornemisza Madrid",solo:"high"},
  {p:3, confirmed:{id:"0385",at:"Ter 2/jun · 13:00"}, when:"✓ Confirmado", t:"New York Café (Budapeste · ter 2/jun)",
   d:"Mesa confirmada para <b>13:00</b> via Tableversum — fura a fila do almoço/café que costuma ser longa. <b>Smart casual</b> (sem chinelo/regata). Café + bolo gira em torno de €10–12; a comida principal é fraca pro preço, então fica no doce e na vibe do interior.",
   link:{label:"Site oficial",url:"https://newyorkcafe.hu/",official:true},
   map:"New York Cafe Budapest Erzsebet korut 9",solo:"med"},
  {p:3, when:"Não precisa reservar", t:"Fisherman's Bastion (Budapeste · qua 3/jun)",
   d:"O terraço inferior é grátis e aberto 24h. As torres superiores custam ~1.700 HUF (compra na hora) e são grátis antes das 9h. Para o pôr do sol (≈20:45 em junho), o terraço inferior já entrega a vista clássica do Parlamento.",
   link:{label:"Info (oficial)",url:"https://fishermansbastion.com/",official:true},
   map:"Fishermans Bastion Budapest",solo:"high"},
  {p:3, when:"Grátis · sem reserva", t:"Retiro / Templo de Debod / Tabacalera",
   d:"Parques e monumentos gratuitos. Templo de Debod tem capacidade limitada no pôr do sol — chegue cedo (~20h para sunset às 21:40). La Tabacalera (Lavapiés) e Sabatini Gardens também são grátis.",
   link:{label:"Info Templo de Debod",url:"https://www.madrid.es/sites/v/index.jsp?vgnextoid=fc4ec9ed268fe410VgnVCM1000000b205a0aRCRD",official:true},
   map:"Templo de Debod Madrid",solo:"high"}
];

export const FLIGHTS = [
  {fn:"LATAM LA8076", ico:"✈", dur:"30–31 mai · ~11h",
   from:{t:"21:10",city:"São Paulo",code:"GRU",sub:"Guarulhos Intl. · Terminal 3"},
   to:{t:"12:15",city:"Madrid",code:"MAD",sub:"Barajas Intl. · +1 dia"},
   mapFrom:"GRU Aeroporto Guarulhos Terminal 3", mapTo:"Madrid Barajas Airport",
   det:"Assento 37C · Economy · Portão de embarque 20:00 (fecha 20:40) · Grupo 5 · Localizador ENBQIW"},
  {fn:"Ryanair FR5713", ico:"✈", dur:"1 jun · ~3h10",
   from:{t:"10:05",city:"Madrid",code:"MAD",sub:"Terminal 1"},
   to:{t:"13:10",city:"Budapeste",code:"BUD",sub:"Ferenc Liszt Intl."},
   mapFrom:"Madrid Barajas Terminal 1", mapTo:"Budapest Ferenc Liszt Airport",
   det:"Assento 07C · Mala de porão 20kg · Fast Track · Plus"},
  {fn:"Ryanair FR5712", ico:"✈", dur:"4 jun · ~3h20",
   from:{t:"13:50",city:"Budapeste",code:"BUD",sub:"Ferenc Liszt Intl."},
   to:{t:"17:10",city:"Madrid",code:"MAD",sub:"Barajas Intl."},
   mapFrom:"Budapest Ferenc Liszt Airport", mapTo:"Madrid Barajas Airport",
   det:"Assento 19D · Mala de porão 20kg · Fast Track · Plus"},
  {fn:"Iberia IB1525", ico:"✈", dur:"7 jun · ~13h",
   from:{t:"11:50",city:"Madrid",code:"MAD",sub:"Barajas Intl. · Terminal a confirmar"},
   to:{t:"17:50",city:"São Paulo",code:"GRU",sub:"Guarulhos Intl. (hora local BR)"},
   mapFrom:"Madrid Barajas Airport Terminal 4", mapTo:"GRU Aeroporto Guarulhos",
   det:"Localizador LA9574168MNRR · Reserva 304519227"}
];

export const HOTELS = [
  {nm:"Eurostars Madrid Gran Vía", city:"Madrid", cls:"madrid", dates:"31 mai → 1 jun · 1 noite",
   ci:"Dom 31 mai · a partir das 15:00", co:"Seg 1 jun · até 12:00", note:"Confirmado · Gran Vía, super central.",
   map:"Eurostars Madrid Gran Via"},
  {nm:"The Amberlyn Suite Hotel", city:"Budapeste", cls:"budapeste", dates:"1 jun → 4 jun · 3 noites",
   ci:"Seg 1 jun · a partir das 15:00", co:"Qui 4 jun · até 11:00", note:"Confirmado · Rökk Szilárd u. 4, Distrito VIII (Palace District). <b>Café da manhã incluído</b>. Apartamento com cozinha; metrô Rákóczi tér ao lado.",
   map:"The Amberlyn Suite Hotel Budapest"},
  {nm:"Grupotel Mayorazgo", city:"Madrid", cls:"madrid", dates:"4 jun → 7 jun · 3 noites",
   ci:"Qui 4 jun", co:"Dom 7 jun", note:"Confirmado · Cancelamento grátis · <b>Café da manhã incluído</b> · C. de la Flor Baja, 3 · 28013 Madrid, junto à Gran Vía / Plaza de España.",
   map:"Grupotel Mayorazgo Madrid"}
];
