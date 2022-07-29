import { RedButton } from '@components/common/buttons/redButton';
import { Container } from '@components/common/container';
import { SubtitleText, TitleText } from '@components/web/styledTexts';
import { AppRouters } from '@utils/constants';
import { QualificationsMock } from '@utils/constants/qualifications';
import { useRouter } from 'next/router';
import { QualificationCard } from './qualificationCard';
import {
  ButtonBox,
  CardBox,
  QualificationContent,
  QualificationWrapper,
  SubtitleBox,
  TitleAndSubtitleBox,
} from './styles';

export const QualificationSection = () => {
  const router = useRouter();

  return (
    <QualificationWrapper>
      <Container>
        <QualificationContent>
          <TitleAndSubtitleBox>
            <TitleText style={{ color: '#FFFFFF' }}>
              Por que escolher a KEFF?
            </TitleText>
            <SubtitleBox>
              <SubtitleText style={{ color: '#FFFFFF' }}>
                A Keff te oferece diversos serviços exclusivos para seus
                parceiros, sempre com o intuito de fazer mais e melhor. Um super
                time, composto por grandes profissionais do mercado, que te
                auxiliarão no caminho rumo ao sucesso!
              </SubtitleText>
            </SubtitleBox>
          </TitleAndSubtitleBox>

          <CardBox>
            {QualificationsMock.map((qualification, index) => (
              <QualificationCard
                key={index}
                icon={qualification.icon}
                title={qualification.title}
                text={qualification.text}
              />
            ))}
          </CardBox>

          <ButtonBox>
            <RedButton onClick={() => router.push(AppRouters.contact)}>
              QUERO SER PARCEIRO
            </RedButton>
          </ButtonBox>
        </QualificationContent>
      </Container>
    </QualificationWrapper>
  );
};
