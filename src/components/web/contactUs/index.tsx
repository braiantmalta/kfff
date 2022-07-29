import { Container } from '@components/common/container';
import { Text } from '@components/common/text';
import { ContactUsForm } from './form';
import {
  ContactFormContent,
  ContactFormWrapper,
  LeftSide,
  RightSide,
} from './styles';

export const ContactUs = () => {
  return (
    <ContactFormWrapper>
      <Container>
        <ContactFormContent>
          <LeftSide>
            <Text style={{ fontSize: '40px', color: '#444444' }}>
              Oferecemos a
              <br />
              <strong>FÓRMULA PERPFEITA</strong>
              <br />
              Oportunidade de empreender com a KEFF! Melhor qualidade do mercado
              com
            </Text>
            <Text
              style={{ fontSize: '40px', fontWeight: 900, color: '#FF480E' }}
            >
              O MELHOR CUSTO-BENEFÍCIO
            </Text>
          </LeftSide>

          <RightSide>
            <ContactUsForm />
          </RightSide>
        </ContactFormContent>
      </Container>
    </ContactFormWrapper>
  );
};
