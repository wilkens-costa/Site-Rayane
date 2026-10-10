/** Fonte única dos dados da Dra. e do consultório. Nenhum telefone ou endereço fora daqui. */
export const site = {
  url: 'https://draluziarayane.vercel.app',
  nome: 'Dra. Luzia Rayane',
  profissao: 'Cirurgiã-Dentista',
  cro: 'CRO-CE 16735',
  ga4: 'G-KXMD47P15S',

  whatsapp: '5585996309485',
  telefoneExibicao: '(85) 99630-9485',

  clinica: 'Marv Clinic',
  endereco: {
    rua: 'R. Martinho Rodrigues, 129',
    bairro: 'Fátima',
    cidade: 'Fortaleza',
    uf: 'CE',
    cep: '60411-280',
  },
  mapaEmbed:
    'https://maps.google.com/maps?q=Marv%20Clinic,%20R.%20Martinho%20Rodrigues,%20129%20-%20F%C3%A1tima,%20Fortaleza&t=&z=16&ie=UTF8&iwloc=&output=embed',

  ogImage: '/og/og-dra-luzia-rayane.jpg',

  dev: {
    nome: 'Wilkens Costa',
    whatsapp: '5585986177778',
  },
} as const;
