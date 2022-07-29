import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { useTheme } from '@mui/material/styles';
import { Anchor } from '@components/common/anchor';
import { ButtonLoading } from '@components/common/buttons';
import { Container } from '@components/common/container';
import { StyledInput } from '@components/common/inputs/styledInput';
import { Text } from '@components/common/text';
import { AuthContext } from '@context/authentication';
import { initializeApollo } from '@graphql/client';
import { MUTATION_CHANGE_EMAIL_CONFIRMATION } from '@graphql/mutations/changeEmailConfirmation';
import { AppRouters } from '@utils/constants';
import {
  Background,
  FormContent,
  FormTitle,
  StyledText,
  Forms,
  FormInputs,
  StyledAnchor,
} from '../styles';

const initialValues = {
  new_email: '',
};

const schema = Yup.object().shape({
  new_email: Yup.string()
    .required('E-mail é necessário')
    .email('E-mail é necessário'),
});

export const ResetEmail = () => {
  const theme = useTheme();
  const apolloClient = initializeApollo();
  const [token, setToken] = useState('');
  const [loadingButton, setLoadingButton] = useState(false);
  const { logOut } = useContext(AuthContext);
  const router = useRouter();

  const handleSubmit = async ({ new_email }: typeof initialValues) => {
    try {
      setLoadingButton(true);

      if (!token) {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'O token para redefinir seu e-mail não foi encontrado.',
          confirmButtonColor: theme.palette.info.main,
        });

        return;
      }

      await apolloClient.mutate({
        mutation: MUTATION_CHANGE_EMAIL_CONFIRMATION,
        variables: {
          fields: { new_email, token },
        },
      });

      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Seu e-mail foi alterado.',
        confirmButtonColor: theme.palette.info.main,
      });

      logOut();
    } catch (error) {
      if (error instanceof Error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
          confirmButtonColor: theme.palette.info.main,
        });
      }
    } finally {
      setLoadingButton(false);
    }
  };

  useEffect(() => {
    const url = window.location.href;
    const updatePasswordToken = url.includes('?token=');

    if (updatePasswordToken) {
      const [urlWithoutPasswordToken, passwordToken] = url.split('?token=');
      window.history.pushState({}, '', urlWithoutPasswordToken);
      setToken(passwordToken);
    }

    router.replace(AppRouters.resetEmail, '', { shallow: true });
  }, []);

  return (
    <Background>
      <Container>
        <FormContent>
          <FormTitle>
            <Text type="h4">Novo e-mail</Text>

            <Text type="body1" secondary sx={StyledText}>
              Informe seu novo de endereço e-mail para continuar
            </Text>
          </FormTitle>

          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={schema}
            validateOnChange={false}
          >
            {({ errors, handleChange }) => (
              <Form>
                <Forms>
                  <FormInputs>
                    <StyledInput
                      name="new_email"
                      label="E-mail"
                      margin="normal"
                      type="email"
                      onChange={handleChange}
                      helperText={errors.new_email}
                      fullWidth
                    />
                  </FormInputs>

                  <ButtonLoading
                    loading={loadingButton}
                    variant="contained"
                    size="large"
                    type="submit"
                  >
                    CONFIRMAR
                  </ButtonLoading>
                </Forms>
              </Form>
            )}
          </Formik>

          <StyledAnchor>
            <Anchor label="Voltar" href={AppRouters.login} />
          </StyledAnchor>
        </FormContent>
      </Container>
    </Background>
  );
};
