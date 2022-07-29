import { useRouter } from 'next/router';

import {
  ContactBox,
  FacebookStyled,
  FooterBox,
  FooterContent,
  ImageLogoBox,
  InstagramStyled,
  LinkedInStyled,
  LogosBox,
  SiteMapBox,
  SubFooterBox,
  SubFooterContent,
  TitleBox,
} from './styles';
import { Container } from '@components/common/container';
import { Logo } from '@components/common/logo';
import { Text } from '@components/common/text';
import { BlackLink } from '../blackLink';
import { Divider } from '@mui/material';

export const Footer = () => {
  const router = useRouter();
  return (
    <FooterBox>
      <Container>
        <FooterContent>
          <ImageLogoBox>
            <Logo url="/img/png/logo.png" onClick={() => router.push('/')} />
          </ImageLogoBox>
          <SiteMapBox>
            <TitleBox>
              <Text type="h6">Site map</Text>
            </TitleBox>
            <BlackLink link="/">Home</BlackLink>
            <BlackLink link="/">Sobre nós</BlackLink>
            <BlackLink link="/">Projeto</BlackLink>
            <BlackLink link="/">Contato</BlackLink>
          </SiteMapBox>
          <ContactBox>
            <TitleBox>
              <Text type="h6">Contato</Text>
            </TitleBox>
            <Text type="body1">11 0000-0000</Text>
            <Text type="body1">email@email.com</Text>
            <Text type="body1">Rua da alegria, 340</Text>
            <Text type="body1">São Paulo - SP</Text>
          </ContactBox>
        </FooterContent>
      </Container>

      <Divider />
      <SubFooterBox>
        <Container>
          <SubFooterContent>
            <Text type="subtitle1">
              2022 © Keff. Todos direitos reservados.
            </Text>

            <LogosBox>
              <InstagramStyled />
              <FacebookStyled />
              <LinkedInStyled />
            </LogosBox>
          </SubFooterContent>
        </Container>
      </SubFooterBox>
    </FooterBox>
  );
};
