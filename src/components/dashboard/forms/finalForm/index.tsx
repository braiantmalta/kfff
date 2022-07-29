import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';
import { Paper } from '@mui/material';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import InputMask from 'react-input-mask';

import { ButtonBox, Container, ContentBox, StyledForm } from './styles';
import { Wrapper } from '@components/common/htmlTags';
import { StyledInput } from '@components/common/inputs';
import { Text } from '@components/common/text';
import { ButtonLoading } from '@components/common/buttons';
import { useApollo } from '@graphql/client';
import { MUTATION_CREATE_LEAD } from '@graphql/mutations/lead';
import { FlaskMakerContext } from '@context/flaskMaker';
import { AppRouters } from '@utils/constants';
import { FormHeader } from '../formHeader';
import { Checkbox } from '@components/common/checkbox';

type FinalFormInput = {
  name: string;
  email: string;
  phone: string;
  contact_via_whatsapp: boolean;
};

const schema = Yup.object().shape({
  name: Yup.string().required('insira seu nome'),
  email: Yup.string()
    .email('digite um formato válido de email')
    .required('insira seu email'),
  phone: Yup.string().required('insira o número do seu telefone'),
});

export const FinalForm = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const { imagePreview, handleResetData, handleCloseModal } = useContext(
    FlaskMakerContext
  );

  const apolloClient = useApollo();
  const router = useRouter();

  const handleSubmit = async (values: FinalFormInput) => {
    setLoading(true);
    try {
      await apolloClient.mutate({
        mutation: MUTATION_CREATE_LEAD,
        variables: {
          fields: {
            name: values.name,
            email: values.email,
            phone: values.phone,
            contact_via_whatsapp: values.contact_via_whatsapp
              ? values.contact_via_whatsapp
              : false,
            image_preview: imagePreview,
          },
        },
      });
      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Suas informações foram enviadas com sucesso!',
      });

      handleResetData();
      return router.push(AppRouters.successPage);
    } catch (error) {
      error instanceof Error &&
        Swal.fire({
          icon: 'error',
          text: error.message,
        });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Formik
          initialValues={{} as FinalFormInput}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          validationSchema={schema}
        >
          {({ errors, handleChange, setFieldValue }) => (
            <Form style={StyledForm}>
              <Paper>
                <FormHeader
                  headerText="Finalizar customização"
                  onCloseClick={() => {
                    handleCloseModal();
                  }}
                />
                <ContentBox>
                  <Text type="subtitle1">
                    Ótimo! Agora só precisamos de suas informações para salvar
                    sua customização.
                  </Text>
                  <StyledInput
                    name="name"
                    label="Nome"
                    type="text"
                    margin="normal"
                    onChange={handleChange}
                    helperText={errors.name}
                    fullWidth={true}
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
                    required
                  />
                  <InputMask
                    name="phone"
                    mask="(99) 9 9999-9999"
                    onChange={handleChange}
                  >
                    <StyledInput
                      label="Telefone / WhatsApp"
                      margin="normal"
                      type="tel"
                      helperText={errors.phone}
                      fullWidth={true}
                      required
                    />
                  </InputMask>

                  <Checkbox
                    name="contact_via_whatsapp"
                    label="Após finalizar desejo ser contactado via WhatsApp"
                    onChange={(e: any) => {
                      setFieldValue('contact_via_whatsapp', e.target.checked);
                    }}
                  />

                  <ButtonBox>
                    <ButtonLoading
                      fullWidth
                      size="large"
                      type="submit"
                      loading={loading}
                    >
                      FINALIZAR
                    </ButtonLoading>
                  </ButtonBox>
                </ContentBox>
              </Paper>
            </Form>
          )}
        </Formik>
      </Container>
    </Wrapper>
  );
};
