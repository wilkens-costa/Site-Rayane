import { site } from './site';
import type { Mensagem } from '../lib/whatsapp';

/**
 * Perguntas frequentes da home ("Perguntas que sempre chegam"), em 1ª pessoa.
 * A resposta é uma lista de trechos: texto corrido ou link (WhatsApp ou telefone).
 * O mesmo conteúdo, em texto puro, alimenta o JSON-LD FAQPage.
 * "Quanto custa?" responde sem valores, descontos nem parcelamento (CFO).
 */
export type TrechoFaq =
  | string
  | { texto: string; whatsapp: Mensagem; cta: string }
  | { texto: string; telefone: true };

export interface ItemFaq {
  pergunta: string;
  resposta: TrechoFaq[];
}

export const faq: ItemFaq[] = [
  {
    pergunta: 'Vai doer?',
    resposta: [
      'Eu entendo o receio. Explico cada etapa antes de começar, presto atenção ao seu conforto o tempo todo e uso anestesia local sempre que necessária. Se tiver medo, me conte já na primeira mensagem: a gente vai no seu ritmo.',
    ],
  },
  {
    pergunta: 'Como é a consulta de avaliação?',
    resposta: [
      'Primeiro a gente conversa. Depois faço o exame e explico as opções de tratamento para o seu caso. Você sai com um plano claro e decide com calma.',
    ],
  },
  {
    pergunta: 'Quanto custa?',
    resposta: [
      'Cada caso é diferente. Na avaliação eu explico cada etapa, e você conhece o plano de tratamento e os valores antes de decidir qualquer coisa.',
    ],
  },
  {
    pergunta: 'Atende crianças?',
    resposta: ['Sim, atendo adultos e crianças. Com os pequenos, vou no tempo deles, com paciência para que se sintam seguros.'],
  },
  {
    pergunta: 'Quanto tempo leva o clareamento?',
    resposta: [
      'No consultório, de 1 a 4 sessões. O caseiro supervisionado leva de 3 a 4 semanas. Também existe o misto, que une uma sessão no consultório ao caseiro. Na avaliação, eu indico o mais adequado para você.',
    ],
  },
  {
    pergunta: 'Aceita plano odontológico?',
    resposta: [
      { texto: 'Me chame no WhatsApp', whatsapp: 'planoOdontologico', cta: 'faq-plano' },
      ' para confirmar se o seu plano é atendido. Todas as dúvidas são respondidas antes da consulta.',
    ],
  },
  {
    pergunta: 'Como faço para agendar?',
    resposta: [
      'Pelo ',
      { texto: 'WhatsApp', whatsapp: 'vimPeloSite', cta: 'faq-agendar' },
      ' ou pelo telefone ',
      { texto: site.telefoneExibicao, telefone: true },
      '. Combinamos juntos o melhor dia e horário.',
    ],
  },
];

/** Resposta em texto puro (JSON-LD) */
export function respostaTexto(item: ItemFaq): string {
  return item.resposta.map((t) => (typeof t === 'string' ? t : t.texto)).join('');
}
