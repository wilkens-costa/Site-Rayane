/** Perguntas frequentes da home. Também podem alimentar o JSON-LD FAQPage (Fase 3). */
export interface ItemFaq {
  pergunta: string;
  resposta: string;
}

export const faq: ItemFaq[] = [
  {
    pergunta: 'Como funciona a consulta de avaliação?',
    resposta:
      'Na avaliação inicial, a Dra. Rayane fará um diagnóstico minucioso para entender sua saúde bucal e apresentar as melhores opções de tratamento personalizadas para o seu caso.',
  },
  {
    pergunta: 'O atendimento é doloroso? Tenho muito medo de dentista.',
    resposta:
      'Não se preocupe! O atendimento da Dra. Rayane tem como foco o acolhimento. Cada procedimento é explicado passo a passo, com total atenção ao seu conforto para uma experiência tranquila. Anestesia local é usada sempre que necessário.',
  },
  {
    pergunta: 'Vocês atendem crianças?',
    resposta:
      'Sim! Atendemos toda a família — de bebês a idosos. O ambiente é acolhedor e preparado para receber crianças com todo o carinho e paciência que elas merecem.',
  },
  {
    pergunta: 'Quanto tempo leva um tratamento de clareamento?',
    resposta:
      'O clareamento de consultório é realizado de 1 a 4 sessões. O clareamento caseiro supervisionado leva de 3 a 4 semanas. Há também a modalidade de clareamento misto, com uma sessão no consultório unida ao tratamento caseiro supervisionado pela Dra.',
  },
  {
    pergunta: 'Aceitam planos odontológicos?',
    resposta:
      'Fale com a gente pelo WhatsApp para saber se o seu plano odontológico é atendido. Respondemos todas as dúvidas antes da sua consulta.',
  },
  {
    pergunta: 'Como agendar uma consulta?',
    resposta:
      'É muito simples! Basta clicar no botão do WhatsApp aqui no site ou ligar para (85) 99630-9485. Respondemos pelo WhatsApp e combinamos com você o melhor horário disponível.',
  },
];
