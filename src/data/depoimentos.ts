/**
 * Trechos literais de avaliações reais no Google. Cortes internos são marcados com […];
 * nunca se abre uma citação com reticências. Só nome + inicial do sobrenome (CFO).
 */
export interface Depoimento {
  nome: string;
  trecho: string;
}

export const depoimentos = {
  /** Home: citação-título dos depoimentos */
  gizelle: { nome: 'Gizelle C.', trecho: 'Fui atendida com muito cuidado e paciência.' },
  gustavo: {
    nome: 'Gustavo N.',
    trecho:
      'A doutora foi […] atenciosa e paciente comigo. Ela analisou todo o meu histórico, zelou pelo meu atendimento e foi muito cuidadosa com a minha segurança durante todo o tempo.',
  },
  david: {
    nome: 'David W.',
    trecho:
      'O grande diferencial foi o atendimento humanizado e personalizado. […] A doutora analisou meu caso com exclusividade e fez eu me sentir único do começo ao fim.',
  },
  /** Home: primeira voz, no "Prazer, sou a Luzia" */
  jonasDuvidas: { nome: 'Jonas F.', trecho: 'Com a Dra. Luzia Rayane, eu me sinto muito à vontade em tirar minhas dúvidas.' },
  /** Sobre: trajetória */
  jonasCuidado: { nome: 'Jonas F.', trecho: 'Profissional que tem um cuidado especial pelos pacientes.' },
  /** Sobre: filosofia */
  nara: { nome: 'Nara J.', trecho: 'É dedicada, atenciosa! Cuidou do meu sorriso com muito carinho e profissionalismo!' },
  /** Sobre: legenda do detalhe do consultório */
  rafael: { nome: 'Rafael S.', trecho: 'Ambiente e utensílios higienizados' },
} satisfies Record<string, Depoimento>;
