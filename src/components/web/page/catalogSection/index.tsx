import {
  CatalogContent,
  CatalogWrapper,
  LeftSide,
  CatalogTextBox,
  RightSide,
  TextContentBox,
  ButtonBox,
} from './styles';
import { RedButton } from '@components/common/buttons/redButton';
import { SubtitleText, TitleText } from '@components/web/styledTexts';
import { Container } from '@components/common/container';
import { StyledImage } from '@components/web/styledImage';
import { useRouter } from 'next/router';
import { AppRouters } from '@utils/constants';

export const CatalogSection = () => {
  const router = useRouter();
  return (
    <CatalogWrapper>
      <Container>
        <CatalogContent>
          <LeftSide>
            <CatalogTextBox>
              <TitleText>Confira todas nossas fórmulas</TitleText>
              <TextContentBox>
                <SubtitleText>
                  Acesse nosso catálogo online para que tenha mais praticidade
                  na hora de escolher a sua fórmula.
                </SubtitleText>
              </TextContentBox>
            </CatalogTextBox>
            <ButtonBox>
              <RedButton onClick={() => router.push(AppRouters.contact)}>
                ACESSAR CATÁLOGO
              </RedButton>
            </ButtonBox>
          </LeftSide>

          <RightSide>
            <StyledImage
              src="/img/png/page/catalog.png"
              ariaLabel="catalog"
              style={{
                // width: '512px',
                // height: '461px',
                margin: '-20px 0px',
              }}
            />
          </RightSide>
        </CatalogContent>
      </Container>
    </CatalogWrapper>
  );
};
