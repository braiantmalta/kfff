type linksType = {
  textLink: string;
  path: string;
};

export type FooterInfoMockType = {
  id: number;
  title: string;
  links: linksType[];
};

export const FooterInfosMock = [
  {
    id: 1,
    title: 'Acesso',
    links: [
      {
        textLink: 'Início',
        path: '/',
      },
      {
        textLink: 'Fabricação',
        path: '/',
      },
      {
        textLink: 'Logística',
        path: '/',
      },
    ],
  },
  {
    id: 2,
    title: 'Empresa',
    links: [
      {
        textLink: 'Sobre',
        path: '/',
      },
      {
        textLink: 'Carreira',
        path: '/',
      },
    ],
  },
  {
    id: 3,
    title: 'Suporte',
    links: [
      {
        textLink: 'Fale conosco',
        path: '/',
      },
      {
        textLink: 'Termos de uso',
        path: '/termos-e-condicoes',
      },
      {
        textLink: 'Política de privacidade',
        path: '/',
      },
    ],
  },
  {
    id: 4,
    title: 'Onde estamos?',
    links: [
      {
        textLink:
          'R. José De Pádua Fleury - Estancia das Paineiras - Nova, Cedral - SP, 15895-000',
        path: '/',
      },
    ],
  },
  {
    id: 5,
    title: 'SAC',
    links: [
      {
        textLink: 'Tel: (17) 3266-8383',
        path: '/',
      },
      {
        textLink: 'E-mail: sac@keffbr.com.br',
        path: '/',
      },
    ],
  },
  {
    id: 6,
    title: 'Dados da empresa',
    links: [
      {
        textLink: 'Keff Industria Farmaceutica LTDA',
        path: '/',
      },
      {
        textLink: 'CNPJ: 35.630.406/0001-32',
        path: '/',
      },
    ],
  },
];
