import {
  LeftSide,
  MainTextBox,
  ServiceContent,
  TextContentBox,
  RightSide,
  ServiceWrapper,
  RedButtonBox,
} from './styles';
import { SubtitleText, TitleText } from '@components/web/styledTexts';
import { Container } from '@components/common/container';
import { RedButton } from '@components/common/buttons/redButton';
import { StyledImage } from '@components/web/styledImage';
import { AppRouters } from '@utils/constants';
import { useRouter } from 'next/router';

export const ServiceSection = () => {
  const router = useRouter();

  return (
    <ServiceWrapper>
      <Container>
        <ServiceContent>
          <LeftSide>
            <MainTextBox>
              <TitleText style={{ color: '#FFF' }}>Nossos serviços</TitleText>
              <TextContentBox>
                <SubtitleText style={{ color: '#FFF' }}>
                  Se você já tem uma parceria de fabricação e está passando por
                  dificuldades com qualidade, entrega e capacidade de escala,
                  vem pra Keff que podemos entregar excelência na sua operação.
                </SubtitleText>
              </TextContentBox>
            </MainTextBox>
            <RedButtonBox>
              <RedButton onClick={() => router.push(AppRouters.contact)}>
                <strong>QUERO SER PARCEIRO</strong>
              </RedButton>
            </RedButtonBox>
          </LeftSide>

          <RightSide>
            <StyledImage
              src="/img/png/page/lunezy-laboratory.png"
              ariaLabel="lunezy laboratory"
            />
          </RightSide>
        </ServiceContent>
      </Container>
    </ServiceWrapper>
  );
};
