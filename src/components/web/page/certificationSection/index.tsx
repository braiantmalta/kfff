import {
  BlueBox,
  ButtonBox,
  CertificationContent,
  CertificationWrapper,
  ImageBox,
  MainTextBox,
  TextBox,
} from './styles';
import { SubtitleText, TitleText } from '@components/web/styledTexts';
import { RedButton } from '@components/common/buttons/redButton';
import { Container } from '@components/common/container';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AppRouters } from '@utils/constants';
import { useRouter } from 'next/router';

export const CertificationSection = () => {
  const theme = useTheme();
  const router = useRouter();
  const isMobileVersion = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <CertificationWrapper>
      <Container>
        <CertificationContent>
          <BlueBox>
            <TextBox>
              <TitleText style={{ color: '#FFFFFF' }}>
                Produtos aprovados pela ANVISA
              </TitleText>
              <MainTextBox>
                <SubtitleText style={{ color: '#FFFFFF' }}>
                  Nossa equipe cuida de toda regularização dos seus produtos
                  para que eles sejam fabricados de acordo com as normas da
                  ANVISA.
                </SubtitleText>
              </MainTextBox>
              <ButtonBox>
                <RedButton onClick={() => router.push(AppRouters.contact)}>
                  QUERO SER PARCEIRO
                </RedButton>
              </ButtonBox>
            </TextBox>

            <ImageBox>
              <img
                src="/img/png/page/anvisa.png"
                aria-label="anvisa image"
                style={{ width: isMobileVersion ? '300px' : undefined }}
              />
            </ImageBox>
          </BlueBox>
        </CertificationContent>
      </Container>
    </CertificationWrapper>
  );
};
