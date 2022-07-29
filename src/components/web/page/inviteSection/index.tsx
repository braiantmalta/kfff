import { RedButton } from '@components/common/buttons/redButton';
import { Container } from '@components/common/container';
import { SubtitleText, TitleText } from '@components/web/styledTexts';
import { AppRouters } from '@utils/constants';
import { useRouter } from 'next/router';
import {
  ButtonBox,
  InviteContent,
  InviteTextBox,
  InviteWrapper,
  TextBox,
} from './styles';
import { WhiteSpace } from './whiteSpace';

export const InviteSection = () => {
  const router = useRouter();
  return (
    <>
      <WhiteSpace />
      <InviteWrapper>
        <Container>
          <InviteContent>
            <TextBox>
              <TitleText style={{ color: '#FFFFFF' }}>
                Seja um parceiro Keff
              </TitleText>
              <InviteTextBox>
                <SubtitleText style={{ color: '#FFFFFF' }}>
                  Somos a solução dos seus problemas. Cuidamos de toda parte de
                  fabricação e logística da sua empresa. Você não precisará se
                  preocupar com nada.
                </SubtitleText>
              </InviteTextBox>
            </TextBox>
            <ButtonBox>
              <RedButton onClick={() => router.push(AppRouters.contact)}>
                QUERO SER PARCEIRO
              </RedButton>
            </ButtonBox>
          </InviteContent>
        </Container>
      </InviteWrapper>
    </>
  );
};
