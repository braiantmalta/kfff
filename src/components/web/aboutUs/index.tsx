import { Container } from '@components/common/container';
import { Text } from '@components/common/text';
import { AboutUsWrapper } from '../page/aboutUsSection/styles';
import { AboutUsContent } from './styles';

export const AboutUs = () => {
  return (
    <AboutUsWrapper>
      <Container>
        <AboutUsContent>
          <Text type="h5">
            A KEFF Indústria Farmacêutica integra o Grupo Lunezy, que atua no
            setor farmacêutico de manipulação de fórmulas há 30 anos, com sede
            em São Jose do Rio Preto, interior de SP.
            <br />
            <br />
            Com uma planta industrial de 15.000m2, e capacidade de produção de 1
            milhão de cápsulas por dia, oferecemos uma solução inovadora para
            quem quer empreender no mercado de encapsulados e cosméticos com sua
            própria marca.
            <br />
            <br />
            Com profissionais especializados, e uma equipe altamente
            qualificada, damos todo o suporte no desenvolvimento de seu produto,
            desde a consultoria farmacêutica para fórmulas exclusivas, até a
            personalização da embalagem com a sua marca.
            <br />
            <br />
            Além disso, nos responsabilizamos por todo trâmite e processo de
            validação de matéria-prima, produção, registro e/ou notificação da
            ANVISA, atendendo a toda regulamentação e legislação vigente do
            setor.
            <br />
            <br />
            Nosso propósito é produzir e entregar o produto encapsulado do nosso
            cliente, customizado com a sua marca e fórmula, com a qualidade e
            segurança que o mercado exige. Conheça nosso catálogo e venha
            desenvolver sua fórmula e seus produtos conosco!
          </Text>
        </AboutUsContent>
      </Container>
    </AboutUsWrapper>
  );
};
