import {
  AboutUsContent,
  AboutUsWrapper,
  LeftSide,
  MainTextBox,
  RedButtonBox,
  RightSide,
  TextContentBox,
} from './styles';
import { SubtitleText, TitleText } from '@components/web/styledTexts';
import { Container } from '@components/common/container';
import { RedButton } from '@components/common/buttons/redButton';
import { StyledImage } from '@components/web/styledImage';
import { useRouter } from 'next/router';
import { AppRouters } from '@utils/constants';

export const AboutUsSection = () => {
  const router = useRouter();
  return (
    <AboutUsWrapper>
      <Container>
        <AboutUsContent>
          <LeftSide>
            <StyledImage src="/img/png/page/keff.png" ariaLabel="keff image" />
          </LeftSide>
          <RightSide>
            <MainTextBox>
              <TitleText textAlign="inherit">Sobre nós</TitleText>
              <TextContentBox>
                <SubtitleText>
                  Nascemos com o objetivo de ajudar outras pessoas a
                  conquistarem sua independência financeira através da internet.
                </SubtitleText>
              </TextContentBox>
            </MainTextBox>
            <RedButtonBox>
              <RedButton onClick={() => router.push(AppRouters.contact)}>
                <strong>QUERO SABER MAIS</strong>
              </RedButton>
            </RedButtonBox>
          </RightSide>
        </AboutUsContent>
      </Container>
    </AboutUsWrapper>
  );
};
