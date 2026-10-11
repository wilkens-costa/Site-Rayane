import type { Mensagem } from '../lib/whatsapp';

/** Os 7 tratamentos (home: lista editorial 01–07; Sobre: lista compacta). */
export interface Tratamento {
  /** Numeral exibido na home e sufixo do data-cta */
  num: string;
  nome: string;
  /** Nome na lista compacta do Sobre, quando for diferente */
  nomeLista?: string;
  descricao: string;
  /** Chave da mensagem do WhatsApp (src/lib/whatsapp.ts) */
  mensagem: Mensagem;
  /** Urgência: rótulo "Falar agora" no lugar de "Perguntar" */
  urgente?: boolean;
}

export const tratamentos: Tratamento[] = [
  {
    num: '01',
    nome: 'Atendimento adulto e infantil',
    descricao: 'Consultas e check-ups para toda a família, com paciência extra para as crianças se sentirem seguras.',
    mensagem: 'tratAdultoInfantil',
  },
  {
    num: '02',
    nome: 'Clareamento',
    descricao: 'No consultório ou caseiro, com acompanhamento. O número de sessões depende do seu caso, e eu explico tudo na avaliação.',
    mensagem: 'tratClareamento',
  },
  {
    num: '03',
    nome: 'Restaurações em resina',
    descricao: 'Na cor do dente, para tratar cáries e pequenas fraturas de forma discreta.',
    mensagem: 'tratRestauracoes',
  },
  {
    num: '04',
    nome: 'Facetas de resina',
    descricao: 'Ajustes de forma, cor e proporção dos dentes, planejados com você antes de começar.',
    mensagem: 'tratFacetas',
  },
  {
    num: '05',
    nome: 'Cirurgia',
    nomeLista: 'Extrações e pequenas cirurgias',
    descricao: 'Extrações e pequenas cirurgias, com anestesia e orientação clara para o pós-operatório.',
    mensagem: 'tratCirurgia',
  },
  {
    num: '06',
    nome: 'Urgência odontológica',
    descricao: 'Dor, dente quebrado ou inchaço? Me chame no WhatsApp para vermos o primeiro horário possível.',
    mensagem: 'urgencia',
    urgente: true,
  },
  {
    num: '07',
    nome: 'Prevenção e limpeza',
    descricao: 'Limpeza, orientação de higiene e revisões periódicas para cuidar antes que vire problema.',
    mensagem: 'tratPrevencao',
  },
];

/** data-cta de cada tratamento, com o prefixo da página ("trat-01", "sobre-trat-06-urgencia"…) */
export function ctaTratamento(t: Tratamento, prefixo = 'trat'): string {
  return `${prefixo}-${t.num}${t.urgente ? '-urgencia' : ''}`;
}
