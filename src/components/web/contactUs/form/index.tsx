import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';

import { StyledInput } from '@components/common/inputs';
import { ContactUsWrapper, ContactStyledForm } from './styles';
import { MenuItem } from '@mui/material';
import { Text } from '@components/common/text';
import { RedButton } from '@components/common/buttons/redButton';

type ContactUsInput = {
  name: string;
  email: string;
  phone: string;
  project_investment: string;
  already_working: string;
};

const schema = Yup.object().shape({
  name: Yup.string().required('insira seu nome'),
  email: Yup.string()
    .email('formato inválido de email')
    .required('insira seu email'),
  phone: Yup.string().required('insira seu telefone'),
  project_investment: Yup.string().required(
    'escolha o valor do seu investimento'
  ),
  already_working: Yup.string().required('escolha uma opção'),
});

const dataMock = [
  {
    id: 1,
    label: 'R$550,00 a R$1.000,00',
  },
  {
    id: 2,
    label: 'R$1.000,00 a R$2.000,00',
  },
  {
    id: 3,
    label: 'R$2.000,00 a R$4.000,00',
  },
  {
    id: 4,
    label: 'mais de $5.000,00',
  },
];
const alreadyWorkingMock = [
  {
    id: 1,
    label: 'Sim',
  },
  {
    id: 2,
    label: 'Não',
  },
];

export const ContactUsForm = () => {
  const handleSubmit = (values: ContactUsInput) => {
    console.log('values', values);
  };

  return (
    <ContactUsWrapper>
      <Formik
        initialValues={{} as ContactUsInput}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={schema}
      >
        {({ errors, handleChange }) => (
          <Form style={ContactStyledForm}>
            <StyledInput
              name="name"
              label="Nome"
              type="text"
              margin="normal"
              onChange={handleChange}
              helperText={errors.name}
              fullWidth={true}
              sx={{ backgroundColor: '#EFEFEF' }}
              required
            />
            <StyledInput
              name="email"
              label="E-mail"
              type="email"
              margin="normal"
              onChange={handleChange}
              helperText={errors.email}
              fullWidth={true}
              sx={{ backgroundColor: '#EFEFEF' }}
              required
            />
            <InputMask
              name="phone"
              mask="(99) 9 9999-9999"
              onChange={handleChange}
            >
              <StyledInput
                label="Telefone"
                margin="normal"
                type="tel"
                helperText={errors.phone}
                fullWidth={true}
                sx={{ backgroundColor: '#EFEFEF' }}
                required
              />
            </InputMask>
            <StyledInput
              name="project_investment"
              label="Qual é o investimento do projeto?"
              type="text"
              margin="normal"
              onChange={handleChange}
              helperText={errors.project_investment}
              fullWidth={true}
              sx={{ backgroundColor: '#EFEFEF' }}
              select
              required
            >
              {dataMock ? (
                dataMock.map((data) => (
                  <MenuItem key={data.id} value={data.label}>
                    {data.label}
                  </MenuItem>
                ))
              ) : (
                <div></div>
              )}
            </StyledInput>
            <StyledInput
              name="already_working"
              label="*Você já trabalha no mercado de encapsulados?"
              type="text"
              margin="normal"
              onChange={handleChange}
              helperText={errors.already_working}
              fullWidth={true}
              sx={{ backgroundColor: '#EFEFEF' }}
              select
              required
            >
              {alreadyWorkingMock ? (
                alreadyWorkingMock.map((data) => (
                  <MenuItem key={data.id} value={data.label}>
                    {data.label}
                  </MenuItem>
                ))
              ) : (
                <div></div>
              )}
            </StyledInput>
            <div style={{ margin: '12px 0px 20px 0px' }}>
              <Text style={{ fontSize: '18px', color: '#444444' }}>
                Preencha agora o formulário. Você receberá um atendimento
                especializado com um dos nossos atendentes do mundo de
                manipulados.
              </Text>
            </div>
            <RedButton fullWidth>SOLICITE SEU CONTATO</RedButton>
          </Form>
        )}
      </Formik>
    </ContactUsWrapper>
  );
};
