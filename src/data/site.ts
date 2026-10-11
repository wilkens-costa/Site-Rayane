/** Fonte única dos dados da Dra. e do consultório. Nenhum telefone ou endereço fora daqui. */
const enderecoBusca = 'Marv Clinic, R. Martinho Rodrigues, 129 - Fátima, Fortaleza - CE';

export const site = {
  url: 'https://draluziarayane.vercel.app',
  nome: 'Dra. Luzia Rayane',
  profissao: 'Cirurgiã-Dentista',
  cro: 'CRO-CE 16735',
  ga4: 'G-KXMD47P15S',

  whatsapp: '5585996309485',
  telefoneExibicao: '(85) 99630-9485',
  /** Link de ligação (tel:) */
  telefoneLink: 'tel:+5585996309485',
  /** Telefone no formato do schema.org */
  telefoneSchema: '+55 85 99630-9485',

  clinica: 'Marv Clinic',
  endereco: {
    rua: 'R. Martinho Rodrigues, 129',
    bairro: 'Fátima',
    cidade: 'Fortaleza',
    uf: 'CE',
    cep: '60411-280',
  },
  /** Nota pública no Google (sem número de avaliações) */
  notaGoogle: '5,0',
  /** Mesma busca em "5,0 no Google" e "Ver avaliações no Google" */
  avaliacoesGoogle: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Dra. Luzia Rayane cirurgiã-dentista Fortaleza')}`,
  mapaBusca: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(enderecoBusca)}`,
  waze: `https://waze.com/ul?q=${encodeURIComponent('Marv Clinic, R. Martinho Rodrigues, 129 Fortaleza')}&navigate=yes`,
  mapaEmbed:
    'https://maps.google.com/maps?q=Marv%20Clinic,%20R.%20Martinho%20Rodrigues,%20129%20-%20F%C3%A1tima,%20Fortaleza&t=&z=16&ie=UTF8&iwloc=&output=embed',
  /** Instagram oficial: preencher quando houver (o link do rodapé só aparece com ele) */
  instagram: 'luziarayane.g',

  ogImage: '/og/dra-luzia-rayane-og.jpg',
  ogImageAlt: 'Dra. Luzia Rayane sorrindo, ao lado do monograma LR e da linha Cirurgiã-dentista, CRO-CE 16735',

  dev: {
    nome: 'Wilkens Costa',
    whatsapp: '5585986177778',
  },
} as const;
