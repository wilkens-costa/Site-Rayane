# Sistema visual da home final ("Bordô Atelier")

Este documento serve de guia para a página Sobre e para o porte da home para Astro. A referência viva é `final/index.html`, que segue a ordem de blocos deste documento.

**Base:** proposta A ("Atelier Clássico"), com a hero aprovada pela Dra.
**Da C:** a microprova colada ao botão, o convite para quem tem medo (só tipografia), a faixa de foto em duotone e o glifo do WhatsApp com "Perguntar" em cada tratamento.
**Da B:** a seção "Medo de dentista? Tudo começa com uma conversa." com os passos e o FAQ completo.

**v2 (depois da segunda banca):** hero mais limpa e com o H1 como pico tipográfico, convite do medo como linha tipográfica, atalho de urgência, plaquinha só com o LR e a Dra. de beca saindo dela, mapa sem geografia inventada, dieta de caixa alta, glifo do WhatsApp em bordô na lista e correções de acessibilidade (zona morta no hover, reflow em 320, cabeçalho sem JS, botão flutuante sobre a lista).

---

## 1. Princípios

1. **A Dra. é a protagonista**, e o material físico dela é a referência visual: o cartão vinho com o LR cursivo e a plaquinha dourada do jaleco. Detalhes de marca que se repetem: monograma, nome cursivo, fios champagne, numerais e filete interno (escuta, mapa e placa).
2. **Ritmo escuro/claro alternado**, sem duas seções do mesmo tom em sequência:
   hero vinho → Prazer rosé → A escuta vinho-900 (foto) → Tratamentos creme → Primeira consulta vinho → Depoimentos creme → Onde atendo vinho → CTA rosé com a plaquinha dourada → rodapé vinho.
3. **Cada seção tem uma voz própria.** Nenhuma fórmula de cabeçalho se repete:
   - Prazer: título enorme (fica parado no desktop enquanto a carta rola);
   - A escuta: frase assinada;
   - Tratamentos: título grande que abre a seção;
   - Primeira consulta: pergunta + título;
   - Depoimentos: a citação é o título;
   - Onde atendo: o rótulo "Onde atendo" + um título em 1ª pessoa;
   - CTA: o título fica gravado na placa.

   O eyebrow (fio + caixa alta) aparece só em 3 seções.
4. **A hero é o pico tipográfico.** Nenhum título da página passa o H1 em nenhuma largura (medido: 92 px contra 80 px dos Tratamentos em 1440).
5. **Cada informação aparece uma vez por tela.** Nada de "5,0 / Marv Clinic" duas vezes na mesma dobra, nada de autoapresentação dupla, nada de LR + nome + CRO duas vezes seguidas (a placa leva só o LR; o cartão completo fica no rodapé).
6. **Tudo leva ao WhatsApp, e cada caminho tem a sua mensagem.** Só existe um CTA persistente no celular. O verde do WhatsApp fica nos botões de agendamento; no resto, o glifo vai na cor da marca.
7. **Nada com cara de IA.** Ficam de fora: glassmorphism, blobs, ícones em quadradinho, grades de cards iguais, contadores, emojis, checklists na hero, caixas-widget e mapas ilustrados de mentira.

---

## 2. Tokens (bloco 1 do CSS, `:root`)

### Cor
| Token | Hex | Uso | Contraste medido |
|---|---|---|---|
| `--vinho` | #44101E | faixas escuras, rodapé, faixa de confiança | — |
| `--vinho-cartao` | #491023 | fundo da hero (vinho exato do cartão) | — |
| `--vinho-900` | #2A0912 | faixa "A escuta" e sombra do duotone | — |
| `--bordo` | #7A1B29 | botão primário, links, rótulos e glifo do WhatsApp sobre claro | 9,8:1 sobre creme · 8,4:1 sobre rosé |
| `--bordo-claro` | #9B283A | hover, palavra em itálico nos títulos claros | 6,2:1 sobre rosé |
| `--creme` | #FBF7F2 | fundo base, botão claro | — |
| `--rose` | #F2E4E1 | superfície alternada (Prazer, CTA) | — |
| `--champ` | #B89860 | fios, numerais, estrelas, rótulos itálicos. Como texto, só sobre vinho | 5,8:1 sobre vinho |
| `--champ-claro` | #E8D8A0 | texto pequeno e itálico sobre vinho, monograma do cabeçalho | 11:1 sobre vinho |
| `--ouro` | #8A6A2F | dourado legível sobre creme (numerais dos tratamentos). **Nunca sobre rosé** | 4,7:1 sobre creme |
| `--tinta` | #2A1F21 | texto principal | — |
| `--tinta-2` | #5E5254 | texto corrido secundário, "via Google" | 7:1 sobre creme · 6:1 sobre rosé |
| `--wa` | #25D366 | **somente** o glifo do WhatsApp dentro dos botões de agendamento (`.btn__wa`) | — |
| `--fio` | bordô a 16% | fios sobre claro | — |
| `--fio-champ` | champagne a 45% | fios sobre escuro | — |

**Plaquinha dourada:** gradiente `#EFE3B6 → #DCC48F → #C6A86E`, com textura escovada (`repeating-linear-gradient`) e brilho a 118°. O metal fica numa camada própria (`.placa__metal`), para a foto poder vazar a borda sem cortar o brilho. O texto sobre ela fica em vinho ou `#3A1B21` (6,8:1 no ponto mais escuro).

**Anel de foco:** a variável `--foco` é redefinida por seção. Fica bordô nas seções claras, champagne-claro nas escuras e vinho na plaquinha.

### Tipografia
- `--serif`: **Playfair Display**, pesos 400 e 500, com itálico 400. Títulos, ledes, citações, numerais, perguntas do FAQ e rótulos itálicos.
- `--sans`: **Inter** 400/500/600. Corpo, botões e links.
- Numerais sempre *lining*: `font-variant-numeric: lining-nums` em todos os elementos e pseudo-elementos. Sem isso, a Playfair escreve "5,0" como "5,o".
- **Itálico em no máximo uma palavra por título**, sempre a palavra emocional: *leve*, *Luzia*, *explico*, *clareamento*, *conversa*, *Fátima*, *avaliação*.
- **Caixa alta espaçada é linguagem do cartão.** Só aparece nas linhas de CRO (cabeçalho e rodapé) e nos 3 eyebrows. Os outros rótulos ("Como chegar", "Horários", "Perguntas que sempre chegam", títulos do rodapé) usam Playfair itálico 17–19 px em champagne. "via Google" e "Perguntar" ficam em caixa normal.

### Espaço
Escala `--s-1…--s-10`: 4, 8, 12, 16, 24, 32, 48, 64, 96 e 128 px.
- Margens laterais (`--gutter`): 20 px no celular, 40 px a partir de 768 e 64 px a partir de 1200. O `.wrap` também respeita `env(safe-area-inset-left/right)` (iPhone deitado, com `viewport-fit=cover`).
- Largura máxima (`--max`): 1240 px.
- Altura do cabeçalho (`--header-h`): 64 px, ou 88 px a partir de 1200.

### Raios
- `--r-placa` = 14 px: plaquinha e mapa (sempre com filete interno de raio 7–8 px). Na faixa da escuta, o filete é reto no desktop (passe-partout) e arredondado só no celular.
- `--r-pilula` = 999 px: botões.

### Movimento
- Curva `--ease`: `cubic-bezier(.22,1,.36,1)`.
- Revelação ao rolar: opacidade + 22 px, 0,9 s, com atrasos de 0,08 s.
- Na hero, a foto e o H1 animam só `transform` (sem opacidade), para não atrasar o LCP.
- Tudo dentro de `prefers-reduced-motion: no-preference`, inclusive as microinterações de hover (deslize do nome do tratamento, giro do glifo, seta). Sem JS, nada fica invisível.

---

## 3. Escala tipográfica

| Papel | Celular | Tablet | Desktop | Notas |
|---|---|---|---|---|
| H1 da hero | `clamp(40px, 11.8vw, 60px)` | 68 | `clamp(56px, 6.4vw, 96px)` | 500, lh .98–1.02, ls −.022em; `clamp(52px, 4.8vw, 68px)` em notebook baixo (altura ≤ 820) |
| Título dos Tratamentos | `clamp(42px, 4vw + 22px, 84px)` | ← | ← | lh .98, ls −.032em; sempre abaixo do H1 |
| Título-carta (Prazer) | `clamp(40px, 10.8vw, 60px)` | ← | `clamp(64px, 5.6vw, 84px)` | lh 1 |
| Citação-título (Depoimentos) | `clamp(40px, 7vw + 14px, 84px)` | ← | `clamp(60px, 5.4vw, 84px)` | itálico 400, máx. 11em |
| Frase assinada (A escuta) | `clamp(38px, 10.6vw, 56px)` | ← | `clamp(56px, 5.4vw, 84px)` | 400, lh 1.06 |
| H2 de seção escura | `clamp(36px, 9.4vw, 60px)` | ← | ← | Primeira consulta e Onde atendo (58 px máx.) |
| H2 da plaquinha | `clamp(34px, 9.4vw, 60px)` | ← | `clamp(52px, 4.4vw, 66px)` | vinho sobre dourado |
| Lede (serif) | 23 | 27 | 30 | bordô, lh 1.38 |
| Lead da hero | 16 | 17 | 18 | máx. 31em; Inter |
| Convite do medo | pergunta 20 itálico + frase 16/500 | 21 | 21 | sublinhado champagne + seta |
| H3 de tratamento | 22 | 25 | 28 | |
| H3 de passo | 22 | 22 | 23 | branco sobre vinho |
| Pergunta do FAQ | 20 (serif 400) | ← | ← | linha ≥ 60 px |
| Numeral de passo | 52 | 96 | 124 | champagne |
| Numeral de tratamento | 18 itálico | 22 | 22 | ouro |
| Corpo | 16 | 16 | 17 | Inter, lh 1.6, `tinta-2` |
| Rótulo itálico (`.faq__t`, `dt`, títulos do rodapé) | 17–19 | ← | ← | Playfair itálico, champagne |
| Meta (microprova, legal, "via Google", "Perguntar") | 13–15 | ← | ← | nunca para texto corrido |
| Caixa alta (eyebrow, CRO) | 12–12,5 | ← | ← | 500/600, `letter-spacing` .12–.2em; nunca abaixo de 12 px |

Regras: corpo ≥ 16 px no celular; `text-wrap: balance` nos títulos e nos botões, `pretty` nos parágrafos.

---

## 4. Ritmo vertical (padding de cada seção, topo/base em px)

| Seção | Celular | ≥ 768 | ≥ 1024 |
|---|---|---|---|
| Prazer | 72 / 80 | 96 / 104 | 128 / 136 |
| A escuta | foto 4:5 + texto sobreposto (−120) / 64 | foto 5:4 | `min-height: min(84vh, 760px)`, 128 / 128 |
| Tratamentos | 88 / 72 | 120 / 96 | 160 / 120 |
| Primeira consulta | 80 / 72 | 104 / 88 | 128 / 112 (≥ 1100) |
| Depoimentos | 96 / 80 | 128 / 112 | 152 / 144 |
| Onde atendo | 80 / 88 | 112 / 120 | 144 / 152 |
| CTA (plaquinha) | 72 / 80 | 104 / 104 | 176 / 128 (o topo maior abriga o capelo que vaza) |
| Rodapé | 64 / 40 + safe-area (110 com JS, para a barra) | ← | 88 / 40 |

As seções têm paddings diferentes de propósito: o ritmo não pode ser uniforme.

**Pontos de quebra:**
- 375: abaixo disso, "Menu" vira só rótulo de leitor de tela (o ícone fica), para o cabeçalho caber em 320.
- 380: microprova em 2 linhas.
- 480: lockup completo; "Perguntar" em linha com o glifo.
- 600: a barra ganha respiro lateral e o botão fica centralizado (máx. 420 px); faixa da escuta em 5:4.
- 768: tablet.
- 900: Onde atendo em 2 colunas.
- 980: hero lado a lado (a microprova some: a faixa de confiança já está na dobra); cabeçalho fixo (só com JS); faixa de confiança em 4 colunas.
- 1024: grades de 12 colunas; a Dra. de beca entra na plaquinha.
- 1100: passos em 4 colunas; FAQ à esquerda e botão fixo à direita.
- 1200: navegação visível (o menu aberto fecha sozinho ao passar daqui).

---

## 5. Componentes

### Marca (símbolos SVG)
O `<svg>` oculto no topo do `<body>` define estes símbolos:
- `#lr`: monograma cursivo, viewBox 735×684;
- `#nome`: "Dra. Luzia Rayane" cursivo, viewBox 1773×324;
- ícones `#i-wa`, `#i-seta`, `#i-estrela`, `#i-rota`, `#i-carro`, `#i-tel` e `#i-mapa`.

Para usar: `<svg class="mono"><use href="#lr"/></svg>` ou `<svg class="assinatura"><use href="#nome"/></svg>`. São pintados com `currentColor`.

Os vetores são uma aproximação traçada do PNG do cartão. Troque-os pelo vetor da gráfica quando ele chegar.

**Onde a marca aparece:** LR + nome no cabeçalho; nome cursivo como assinatura da escuta; LR pequeno gravado na placa; o cartão completo (LR + nome + CRO) só no rodapé.

### Botões
- `.btn` é uma pílula de 56 px de altura mínima. Por padrão leva o glifo do WhatsApp num círculo branco de 38 px (`.btn__wa`). O rótulo **pode quebrar linha** (`text-wrap: balance`, `padding-block: 8px`): nada de `nowrap`, para não haver rolagem lateral em 320 (WCAG 1.4.10).
  - `.btn--claro`: creme com texto bordô, sobre fundos escuros.
  - `.btn--bordo`: bordô com texto branco, sobre claro e sobre a plaquinha.
  - `.btn--fio`: contorno champagne, para ações que não são agendamento ("Ver mapa").
  - No hover, o glifo gira −8° (só com movimento permitido).
- Todo botão de agendamento leva `<span class="sr-only"> pelo WhatsApp (abre em nova janela)</span>`.
- `.link-seta` é o link secundário: sublinhado de 1 px e seta que anda 4 px no hover. Variante `--luz` para fundos escuros.
- **Alvos de toque ≥ 44 px em tudo**, inclusive nos links do rodapé, que são `inline-flex` com `min-height` de 44.

### Lockup (cabeçalho)
- Composição: LR 44/48 px + fio vertical + nome Playfair 17/19 + "Cirurgiã-dentista · CRO-CE 16735", em caixa alta de 12 px.
- Abaixo de 480 px aparece só o CRO.
- Sobre a hero, o cabeçalho é transparente. Ao rolar (≥ 980 px, só com JS), fica creme, sólido e fixo. **Sem JS ele rola junto com a hero** (`.js .header{position:fixed}`), para nunca ficar branco sobre creme.
- Menu do celular: `<details>`, que funciona sem JS. Com JS, o resto da página fica `inert`, o Esc fecha o menu e devolve o foco, e o menu fecha sozinho se a janela passar de 1200 px. No rodapé do menu: botão de agendar + atalho "Com dor ou dente quebrado? Fale agora".

### Hero
Camadas, de cima para baixo: H1 → lead (sem autoapresentação: o nome já está no lockup e no jaleco) → botão + microprova → atalhos. Sem checklist.
- Lead: "Cirurgiã-dentista no Fátima, em Fortaleza. Explico cada etapa antes de começar e uso anestesia sempre que necessária." (celular: "No Fátima, em Fortaleza. Explico cada etapa e uso anestesia sempre que necessária.").

### Microprova (`.prova`)
- Conteúdo: "★★★★★ **5,0** no Google · Marv Clinic, Fátima". As estrelas são `aria-hidden` (o texto já diz a nota).
- Só no celular e no tablet, colada ao botão. A partir de 980 px some, porque a faixa de confiança já está na dobra.
- Em 390×664 termina em 549 px (dobra em 664).

### Atalhos da hero (`.atalhos`)
- **Convite do medo** (`.convite-medo`, `data-cta="hero-medo"`): link próprio, só com tipografia, sem caixa nem ícone. Pergunta em Playfair itálico champagne-claro + "Pode me contar já na primeira mensagem." sublinhado + seta. Em 390×664 aparece inteiro na primeira tela (termina em 623 px).
- **Urgência** (`.urgencia`, `data-cta="hero-urgencia"`): "Com dor ou dente quebrado? Fale agora", mais discreto (15 px), com a mensagem de urgência.
- No desktop, um fio champagne separa os atalhos do botão.

### Faixa de confiança (`.confianca`)
- 4 células com fios champagne (2×2 no celular).
- A célula 5,0 leva às avaliações no Google (`data-link="avaliacoes-google"`, mesmo link de "Ver avaliações no Google"); a da Marv Clinic leva a `#onde-atendo`.

### Item de tratamento (`.trat__item`)
- Composição: numeral itálico ouro + nome (o `<h3>` contém o link, que se estica sobre o item inteiro com `::after`) + descrição + `.trat__ask` (glifo do WhatsApp **em bordô** + "Perguntar"; no item 06, "Falar agora").
- **Nenhum ancestral do `<a>` pode ter `transform`**: ele viraria o bloco de contenção do `::after` e a área clicável encolheria para o tamanho do título. O deslize do hover fica no `<span class="trat__nome">`, dentro do link.
- No toque, `.trat__ask` está sempre visível (abaixo de 480 px o glifo fica sobre o rótulo). Com mouse (`hover: hover`), aparece no hover e no foco.
- No hover, um fio bordô corre por baixo, o nome desliza 4 px e o glifo gira.
- Em todas as larguras a linha é empilhada (nome sobre a descrição). Em colunas, os nomes longos quebravam e as alturas ficavam irregulares.

### Passo (`.passo`)
- Celular: linha do tempo, com coluna de 44 px, numeral de 52 px centrado e fio em `left: 22px`.
- Tablet: 2 colunas, com fio no topo e ponto champagne.
- Desktop (≥ 1100): 4 colunas com `subgrid`, para títulos e textos alinharem mesmo quando quebram.
- Logo depois dos passos vem o botão ("Agendar minha avaliação", `#cta-consulta`) e só então o FAQ. No desktop o FAQ fica à esquerda e o botão, fixo, à direita. A ordem do DOM é botão → FAQ (ordem de foco = ordem visual no celular).

### FAQ (`.faq`)
- `<details>`/`<summary>` nativos: acessível e funciona sem JS.
- 7 perguntas: Vai doer? · Como é a consulta de avaliação? · Quanto custa? · Atende crianças? · Quanto tempo leva o clareamento? · Aceita plano odontológico? · Como faço para agendar? O medo não abre a pergunta ("Vai doer?" e pronto): o gancho "medo de dentista" já está na hero e no título da seção.
- "Quanto custa?" responde sem valores, descontos nem parcelamento (CFO).
- O "+" champagne gira 45° e vira "×". A resposta entra com fade de 6 px.
- O mesmo conteúdo alimenta o JSON-LD `FAQPage`.

### Citações
- `.citacao--grande`: itálico grande, nome com inicial + "via Google" (14 px, `tinta-2`, caixa normal). Sem fio ornamental acima: o eyebrow já abre a seção.
- `.citacao--menor` e `.voz`: Playfair de 19–21 px, separadas por fio.
- Os trechos são literais. Cortes internos são marcados com […], e nunca se abre uma citação com reticências.
- Escolha dos trechos: os que falam de paciência e acolhimento (Gizelle: "cuidado e paciência"; Gustavo: "atenciosa e paciente comigo"; David: "fez eu me sentir único"; Jonas, no Prazer: "à vontade em tirar minhas dúvidas").

### Onde atendo
- Coluna de informação: eyebrow, título, endereço em serif, `dl` com "Como chegar" (Google Maps e Waze) e "Horários" (combina pelo WhatsApp; **não inventar horários**), e a ação principal da seção: botão claro com o número à vista (`#cta-onde`, `data-cta="onde-atendo"`) + "Ligar".
- **Mapa em fachada (`.mapa`):** a foto é o consultório de verdade, desfocado (mármore, faixa de luz quente, escultura de dente), sem a Dra. e sem instrumental, com grão fino, sombra vinho só na base, filete interno e a legenda "O consultório, na Marv Clinic". Não é um mapa ilustrado: nenhuma rua é inventada.
- "Ver mapa" (`.btn--fio`) é um `<a>` para o Google Maps, que funciona sem JS. Com JS, ganha `role="button"`, responde a Enter e Espaço, injeta o `<iframe>` do Google Maps (`q=Marv Clinic, R. Martinho Rodrigues, 129 - Fátima, Fortaleza`) e move o foco para ele.
- Proporção: 16:9 no celular (compacta, não compete com o CTA), 16:10 no tablet e 4:3,6 no desktop.

### Plaquinha (CTA final, `.placa`)
- Visual: dourado escovado, filete escuro interno de 1,5 px (inset de 10/13 px) e brilho que atravessa a placa uma vez ao aparecer (só com movimento permitido).
- Gravação: **só o LR pequeno** (40/44 px) no canto superior esquerdo. O cartão completo fica no rodapé.
- Conteúdo: H2 "Vamos marcar sua *avaliação*?", texto, botão bordô (`#cta-final`) e "ou ligue (85) 99630-9485". Sem endereço (ele está na seção logo acima).
- **A partir de 1024 px, a Dra. de beca, com o cachorrinho, sai da placa.** É outra foto e outra pose: a da hero não se repete. A foto tem coluna própria no grid (`clamp(440px, 42vw, 560px)`), então o texto nunca passa por baixo dela. Fica apoiada na base, e a margem negativa de 96 px deixa o capelo passar da borda de cima (de 1280 px para cima; em 1024 ela cabe inteira dentro da placa). No celular e no tablet a placa fica só com o texto.

### Barra CTA do celular (`.barra`)
- Só existe com JS.
- Abaixo de 600 px é uma barra creme com o botão bordô em largura total. De 600 a 979 px é a mesma barra, com o botão centralizado (máx. 420 px). Antes era um botão flutuante, mas ele cobria a coluna de texto da direita no tablet e o anel de foco bordô ficava com 1,5:1 sobre o vinho; sobre o creme da barra, 9,8:1.
- A folga de 110 px no fim do rodapé só existe com JS (`.js .rodape`), porque sem JS não há barra.
- Some quando um CTA principal está ≥ 95% na tela (`#cta-hero`, `#cta-consulta`, `#cta-onde`, `#cta-final`) **e enquanto a lista de tratamentos ocupa os 18% de baixo da tela** (ali cada linha já é um link de WhatsApp, e o botão flutuante cobria a coluna "Perguntar").

---

## 6. Fotografia

| Uso | Arquivo | Tratamento |
|---|---|---|
| Hero | `img/dra-hero-{960,1200,1600}.webp` (recorte com alfa) | sobre `consultorio-blur-{800,1600}.webp` + gradientes vinho; no celular, máscara que some antes do H1 |
| A escuta | `img/escuta-duo-{800,1200}.webp` (desktop, largura total da foto, sem ampliar), `escuta-duo-mob-780.webp` (celular) | duotone gerado com sharp a partir de `galeria-consulta.webp`: tons de cinza → normalize 1–99% → nitidez leve → gama 1,18 → curva em S com peso 0,6 → mapa linear `#2A0912 → #F7E9DF`; grão fino por cima; máscara lateral (desktop, foto em 56% da largura) ou inferior (celular) que funde no vinho-900 |
| Onde atendo | `img/onde-consultorio-{560,960}.webp` | recorte de cima de `consultorio-blur.webp` (luz quente, mármore, escultura de dente), brilho +4%, saturação −8%; grão e sombra vinho na base |
| Plaquinha | `img/formatura-placa-{560,900}.webp` | recorte com alfa de `dra-formatura.webp`, do capelo até abaixo das mãos (corte reto apoiado na base da placa) |
| Compartilhamento | `img/og-1200x630.jpg` | vinho do cartão, LR + nome + CRO pintados a partir dos PNGs do cartão, a Dra. à direita |

O script `scripts/imagens.mjs` refaz todas essas imagens com os parâmetros desta tabela. Rode na raiz do projeto: `node scripts/imagens.mjs` (as origens da marca e da formatura ficam em `assets-fonte/`).

Regras:
- **Nenhuma foto se repete na página.** Por isso `galeria-consultorio.webp` não entra: a hero é recortada dessa mesma foto (e o `consultorio-blur` é o fundo dela, sem a Dra.). Usá-la em "Onde atendo" repetiria a pose da hero.
- Nenhuma foto de procedimento, de instrumental ou de paciente identificável. A paciente da faixa aparece de costas.

---

## 7. WhatsApp, medição e mensagens

Todo link de WhatsApp tem `data-cta` (21 links, nenhum sem rótulo). Um listener envia `{event:'whatsapp_click', cta}` ao `dataLayer` (mapear como `generate_lead` no GA4). O link de crédito do site manda `link_externo`.

| `data-cta` | Mensagem pré-preenchida (resumo) |
|---|---|
| `header`, `menu`, `hero`, `final`, `barra`, `rodape`, `faq-agendar` | "Vim pelo site e gostaria de agendar uma avaliação." |
| `hero-medo` | "Tenho um pouco de medo de dentista e queria conversar antes de agendar." |
| `hero-urgencia`, `menu-urgencia`, `trat-06-urgencia` | "Estou com uma urgência e gostaria de ver o primeiro horário possível." |
| `primeira-consulta` | "li sobre a primeira consulta e gostaria de agendar uma avaliação." |
| `trat-01` a `trat-07` | uma por tratamento |
| `trat-duvida` | "Ainda não sei qual tratamento preciso…" |
| `faq-plano` | "queria saber se você atende o meu plano odontológico." |
| `onde-atendo` | "…agendar uma avaliação na Marv Clinic." |

No Astro, estender `src/lib/whatsapp.ts` com essas mensagens: cada origem vira uma chave do helper `waLink()`. O link das avaliações do Google também vira uma constante única em `src/data/site.ts` (`avaliacoesGoogle`).

---

## 8. Regras de conteúdo (CFO) e acessibilidade

**Conteúdo (CFO)**
- Nome + CRO-CE 16735 aparecem no cabeçalho, na faixa de confiança e no rodapé. A linha legal do rodapé diz "Cirurgiã-dentista · Clínica geral · CRO-CE 16735": o CEO (art. 43 §3º I) pede que procedimentos anunciados venham precedidos da especialidade registrada ou da qualificação de clínico geral (confirmar com a Dra.).
- Termos proibidos: "especialista", "sem dor"/"indolor", "sorriso perfeito", "resultado garantido", superlativos, preços, "avaliação gratuita", comparação com outros profissionais.
- Depoimentos sem "extremamente" (cortado com […]) e sem o trecho comparativo do David ("Em outras experiências…"). Só nome + inicial.
- Pode-se falar de conforto, explicação de cada etapa, anestesia quando necessária e avaliação sem pressa.
- Promessas novas de conduta só depois de validadas pela Dra. (ver pendências no relatório).

**Acessibilidade**
- Um único h1. `alt` em toda imagem com conteúdo (a fachada do mapa é decorativa: `alt=""`).
- Títulos do rodapé são `h2` (antes eram `h3` sob o h2 da placa).
- Rótulo de leitor de tela nos links de tratamento ("…: perguntar no WhatsApp"; urgência: "…: falar agora no WhatsApp", igual ao rótulo visível).
- `role="img"` + `aria-label` só nas estrelas sem texto equivalente.
- Link "Pular para o conteúdo". `inert` no menu aberto.
- Sem rolagem horizontal de 320 a 1920 (medido).
- Contraste AA conferido (tabela da seção 2).

**Sem JS:** todo o conteúdo fica visível, o menu funciona, o cabeçalho rola com a página, a barra não existe e "Ver mapa" abre o Google Maps.

---

## 9. Porte para Astro (um bloco de CSS = um componente)

| Bloco CSS | Destino |
|---|---|
| 1 TOKENS | `src/styles/tokens.css` (importado no `BaseLayout`) |
| 2 BASE, 3 TIPOGRAFIA, 4 BOTÕES | `src/styles/base.css` (globais) |
| Sprite SVG (marca + ícones) | `src/components/SpriteMarca.astro`, incluído uma vez no `BaseLayout` |
| 5 CABEÇALHO | `src/components/Header.astro` |
| 6 CTA MOBILE | `src/components/BarraCta.astro` (substitui `BottomNav`/`WhatsAppFlutuante`) |
| 7 RODAPÉ | `src/components/Footer.astro` |
| 8 HERO + 9 FAIXA DE CONFIANÇA | `src/components/home/Hero.astro` |
| 10 PRAZER | `src/components/home/Prazer.astro` |
| 11 A ESCUTA | `src/components/FaixaEscuta.astro` (reutilizável no Sobre, com props `frase` e `foto`) |
| 12 TRATAMENTOS | `src/components/home/Tratamentos.astro` + `src/data/tratamentos.ts` (nome, descrição, chave da mensagem, rótulo "Perguntar"/"Falar agora") |
| 13 PRIMEIRA CONSULTA | `src/components/home/PrimeiraConsulta.astro` + `src/data/faq.ts` (atualizar para os 7 textos em 1ª pessoa desta página) |
| 14 DEPOIMENTOS | `src/components/home/Depoimentos.astro` + `src/data/depoimentos.ts` |
| 15 ONDE ATENDO | `src/components/OndeAtendo.astro` (dados de `src/data/site.ts`; o `mapaEmbed` já existe) |
| 16 CTA FINAL | `src/components/CtaPlaquinha.astro` (reutilizável no fim do Sobre, com prop `foto`) |

- **Imagens:** usar `<Picture>` do `astro:assets` com AVIF/WebP. O `gerar-imagens.cjs` vira `scripts/imagens.mjs` (sharp), com os parâmetros da seção 6.
- **`<head>`:** `og:title`, `og:description`, `og:image` (URL absoluta com `Astro.site`) e `twitter:card=summary_large_image` no `BaseLayout`. Links internos relativos (`/sobre`), nunca o domínio da Vercel.
- **JS:** revelação ao rolar, cabeçalho sólido, barra (2 observadores), menu, mapa e medição, num único `<script>` no `BaseLayout`, com cerca de 3 KB.

---

## 10. Como aplicar na página Sobre

Ordem sugerida, reaproveitando os componentes:
1. **Abertura vinho** (mesma família da hero), em formato curto: título-carta "Prazer, sou a *Luzia*." à esquerda e uma foto à direita que não seja a da hero nem a da formatura que já está na placa (pedir foto nova; enquanto isso, o retrato do crachá só como detalhe).
2. **Filosofia** (rosé): lede serif bordô + corpo em 1ª pessoa (textos de `Filosofia.astro`).
3. **Faixa A escuta** com outra frase dela e, quando houver, outra foto.
4. **Credenciais e formação** como lista editorial numerada (mesmo componente visual dos tratamentos, sem link). Só fatos confirmados.
5. **Galeria** em grade assimétrica de 2–3 fotos, nunca uma grade de cards iguais.
6. **Depoimentos** (citação-título).
7. **Plaquinha** (CTA) + rodapé. No Sobre, a placa pode levar a foto da formatura (é a história dela); na home, também — então, se as duas páginas usarem a placa, trocar a foto de uma delas.

Manter: alternância escuro/claro, eyebrow em no máximo 3 seções, caixa alta só no CRO, itálico em uma palavra, um CTA persistente no celular.

**Implementado em `final/sobre.html` (v2, depois da banca do Sobre):** abertura vinho com a consulta conversada em cor (não repete a hero), H1 "Dra. Luzia Rayane" em romano, linha do cartão com "|", frase da escuta e microprova "5,0 no Google" · filosofia rosé com 4 frases curtas em romano e a voz da Nara logo abaixo da foto que vaza da abertura · trajetória vinho com a formatura saindo da moldura e uma ficha (Formação, Registro, Estudo, Hoje), sem linha do tempo e sem cursos nomeados · galeria creme aberta pelo crachá que sangra até a borda, com o detalhe do consultório (voz do Rafael) e o bastidor em tritom vinho → champagne → rosé · lista dos 7 tratamentos (vinho-900) · CTA rosé com a nota do Google numa linha, título grande e a plaquinha em escala de objeto (só LR, botão e telefone), com o convite do medo embaixo. Imagens: `final/gerar-imagens-sobre.cjs`. Itálico em só 2 títulos (*antes*, no meio; *conversar*, no fim); eyebrow só na filosofia.
