import { site } from '../data/site';

/** Mensagens pré-preenchidas do WhatsApp, por contexto. */
export const mensagens = {
  agendar: 'Olá, gostaria de agendar uma consulta com a Dra. Luzia Rayane em Fortaleza.',
  agendarCurta: 'Olá, gostaria de agendar uma consulta com a Dra. Luzia Rayane.',
  agendarMinha: 'Olá, gostaria de agendar minha consulta com a Dra. Luzia Rayane.',
  agendarClinica: 'Olá, gostaria de agendar uma consulta com a Dra. Luzia Rayane na Marv Clinic.',
  vimPeloSite: 'Olá, Dra. Luzia! Vim pelo site e gostaria de agendar uma avaliação.',
  duvidaTratamentos: 'Olá, gostaria de tirar dúvidas sobre os tratamentos da Dra. Luzia Rayane.',
  duvida: 'Olá, tenho uma dúvida sobre os tratamentos da Dra. Luzia Rayane.',
} as const;

export type Mensagem = keyof typeof mensagens;

/** Link do WhatsApp da Dra. com a mensagem do contexto. */
export function waLink(mensagem: Mensagem = 'vimPeloSite'): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagens[mensagem])}`;
}
