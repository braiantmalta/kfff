import { ArrowDownward } from '@mui/icons-material';

import {
  LeftSide,
  MainTextBox,
  PageContent,
  TextContentBox,
  RightSide,
  ButtonBox,
  StyledIconButton,
  RedButtonBox,
} from './styles';
import { SubtitleText, TitleText } from '@components/web/styledTexts';
import { Text } from '@components/common/text';
import { Container } from '@components/common/container';
import { RedButton } from '@components/common/buttons/redButton';
import { StyledImage } from '@components/web/styledImage';
import { AppRouters } from '@utils/constants';
import { useRouter } from 'next/router';

export const MainSection = () => {
  const router = useRouter();

  return (
    <Container>
      <PageContent>
        <LeftSide>
          <MainTextBox>
            <TitleText>Somos a FÓRMULA PERFEITA para seu negócio</TitleText>
            <TextContentBox>
              <SubtitleText>
                Crie e desenvolva sua marca de encapsulados com nossas fórmulas
                exclusivas. A KEFFBR tem a solução completa para quem deseja ter
                sua própria marca e empreender na internet.
              </SubtitleText>
            </TextContentBox>
          </MainTextBox>
          <RedButtonBox>
            <RedButton onClick={() => router.push(AppRouters.contact)}>
              <strong>QUERO MINHA FÓRMULA</strong>
            </RedButton>
          </RedButtonBox>
        </LeftSide>

        <RightSide>
          <StyledImage
            src="/img/png/page/main-flask.png"
            ariaLabel="main flask"
          />
        </RightSide>
      </PageContent>
      <ButtonBox>
        <StyledIconButton>
          <ArrowDownward />
        </StyledIconButton>
        <Text type="h6">Ver mais!</Text>
      </ButtonBox>
    </Container>
  );
};
