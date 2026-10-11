/** Dados estruturados (JSON-LD) das páginas, montados a partir dos dados únicos. */
import { site } from '../data/site';
import { faq, respostaTexto } from '../data/faq';

const endereco = {
  '@type': 'PostalAddress',
  streetAddress: site.endereco.rua,
  addressLocality: site.endereco.cidade,
  addressRegion: site.endereco.uf,
  postalCode: site.endereco.cep,
  addressCountry: 'BR',
};

export function schemaHome() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Dentist',
        name: `${site.nome} · Cirurgiã-dentista`,
        url: site.url,
        telephone: site.telefoneSchema,
        address: endereco,
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.pergunta,
          acceptedAnswer: { '@type': 'Answer', text: respostaTexto(item) },
        })),
      },
    ],
  };
}

export function schemaSobre() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: `${site.url}/` },
          { '@type': 'ListItem', position: 2, name: 'Sobre', item: `${site.url}/sobre` },
        ],
      },
      {
        '@type': 'Person',
        name: 'Luzia Rayane',
        honorificPrefix: 'Dra.',
        jobTitle: site.profissao,
        identifier: site.cro,
        workLocation: {
          '@type': 'Dentist',
          name: site.clinica,
          telephone: site.telefoneSchema,
          address: endereco,
        },
      },
    ],
  };
}
