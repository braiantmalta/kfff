import {
  LeftSide,
  LogisticContent,
  LogisticTextBox,
  LogisticWrapper,
  RedButtonBox,
  RightSide,
  TextContentBox,
} from './styles';
import { SubtitleText, TitleText } from '@components/web/styledTexts';
import { Container } from '@components/common/container';
import { RedButton } from '@components/common/buttons/redButton';
import { StyledImage } from '@components/web/styledImage';
import { AppRouters } from '@utils/constants';
import { useRouter } from 'next/router';

export const LogisticSection = () => {
  const router = useRouter();
  return (
    <LogisticWrapper>
      <Container>
        <LogisticContent>
          <LeftSide>
            <StyledImage
              src="/img/png/page/logistic.png"
              ariaLabel="logistic image"
            />
          </LeftSide>

          <RightSide>
            <LogisticTextBox>
              <TitleText>Lidamos com a sua logística</TitleText>
              <TextContentBox>
                <SubtitleText>
                  Nosso time está preparado para lidar com a logística de
                  qualquer produto. Nossa central de distribuição conta com
                  1.200m² para armazenamento seguro dos seus produtos e entrega
                  precisa ao cliente final. Isso tudo sem você se preocupar com
                  nenhum processo.
                </SubtitleText>
              </TextContentBox>
            </LogisticTextBox>
            <RedButtonBox>
              <RedButton onClick={() => router.push(AppRouters.contact)}>
                <strong>QUERO SER PARCEIRO</strong>
              </RedButton>
            </RedButtonBox>
          </RightSide>
        </LogisticContent>
      </Container>
    </LogisticWrapper>
  );
};
