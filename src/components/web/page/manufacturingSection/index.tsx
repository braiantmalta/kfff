import {
  ButtonBox,
  CardBox,
  ManufacturingContent,
  ManufacturingWrapper,
  SubtitleBox,
  TitleAndSubtitleBox,
} from './styles';
import { SubtitleText, TitleText } from '@components/web/styledTexts';
import { RedButton } from '@components/common/buttons/redButton';
import { Container } from '@components/common/container';
import { ManufacturingProcessMock } from '@utils/constants/manufacturingProcess';
import { ManufacturingCard } from './manufacturingCard';
import { AppRouters } from '@utils/constants';
import { useRouter } from 'next/router';

export const ManufacturingSection = () => {
  const router = useRouter();

  return (
    <ManufacturingWrapper>
      <Container>
        <ManufacturingContent>
          <TitleAndSubtitleBox>
            <TitleText textAlign="center">
              O nosso processo de fabricação
            </TitleText>
            <SubtitleBox>
              <SubtitleText textAlign="center">
                Confira como é facil tirar sua idéia do papel!
              </SubtitleText>
            </SubtitleBox>
          </TitleAndSubtitleBox>

          <CardBox>
            {ManufacturingProcessMock.map((card, index) => (
              <ManufacturingCard
                key={index}
                id={card.id}
                title={card.title}
                text={card.text}
              />
            ))}
          </CardBox>

          <ButtonBox>
            <RedButton onClick={() => router.push(AppRouters.contact)}>
              QUERO MEU PRODUTO
            </RedButton>
          </ButtonBox>
        </ManufacturingContent>
      </Container>
    </ManufacturingWrapper>
  );
};
