import { site } from '../data/site';

const ola = 'Olá, Dra. Luzia! Vim pelo site';

/**
 * Mensagens pré-preenchidas do WhatsApp. Cada caminho até o WhatsApp tem a sua,
 * para a Dra. saber de onde a pessoa veio e o que ela quer (ver SISTEMA.md, seção 7).
 */
export const mensagens = {
  /** Cabeçalho, menu, hero, CTA final, barra do celular, rodapé, FAQ "Como faço para agendar?", 404 */
  vimPeloSite: `${ola} e gostaria de agendar uma avaliação.`,
  /** Convite para quem tem medo (hero da home e CTA do Sobre) */
  medo: `${ola}. Tenho um pouco de medo de dentista e queria conversar antes de agendar.`,
  /** Atalho de urgência (hero, menu, tratamento 06) */
  urgencia: `${ola}. Estou com uma urgência e gostaria de ver o primeiro horário possível.`,
  /** Botão depois dos 4 passos da primeira consulta */
  primeiraConsulta: `${ola}, li sobre a primeira consulta e gostaria de agendar uma avaliação.`,
  /** "Não sabe por onde começar?" na lista de tratamentos */
  duvidaTratamento: `${ola}. Ainda não sei qual tratamento preciso e queria contar o que estou sentindo.`,
  /** FAQ "Aceita plano odontológico?" */
  planoOdontologico: `${ola} e queria saber se você atende o meu plano odontológico.`,
  /** Botão com o número à vista em "Onde atendo" */
  ondeAtendo: `${ola} e gostaria de agendar uma avaliação na ${site.clinica}.`,
  /** Abertura, CTA final e barra da página Sobre */
  sobre: `${ola}, li sobre você e gostaria de agendar uma avaliação.`,

  // Uma por tratamento (src/data/tratamentos.ts)
  tratAdultoInfantil: `${ola} e gostaria de agendar uma consulta (adulto ou criança).`,
  tratClareamento: `${ola} e gostaria de saber mais sobre clareamento.`,
  tratRestauracoes: `${ola} e gostaria de saber mais sobre restaurações em resina.`,
  tratFacetas: `${ola} e gostaria de saber mais sobre facetas de resina.`,
  tratCirurgia: `${ola} e gostaria de saber mais sobre extrações e pequenas cirurgias.`,
  tratPrevencao: `${ola} e gostaria de agendar uma limpeza e revisão.`,
} as const;

export type Mensagem = keyof typeof mensagens;

/** Link do WhatsApp da Dra. com a mensagem do contexto. */
export function waLink(mensagem: Mensagem = 'vimPeloSite'): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagens[mensagem])}`;
}
