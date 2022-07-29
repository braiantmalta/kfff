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
import { MUTATION_RECOVERY_PASSWORD_CONFIRMATION } from '@graphql/mutations/recoveryPasswordConfirmation';
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

type UserUpdatePassword = {
  new_password: string;
  token: string;
};

const initialValues = {
  new_password: '',
  confirmNewPassword: '',
};

const schema = Yup.object().shape({
  new_password: Yup.string().required('Senha é necessária'),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('new_password'), null], 'A senha não é compatível.')
    .required('Confirmação da senha é necessária'),
});

export const ResetPassword = () => {
  const theme = useTheme();
  const { logOut } = useContext(AuthContext);
  const [token, setToken] = useState('');
  const [loadingButton, setLoadingButton] = useState(false);
  const router = useRouter();

  const handleSubmit = async (values: typeof initialValues) => {
    if (!token) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'O token para redefinir a senha não foi encontrado.',
        confirmButtonColor: theme.palette.info.main,
      });

      return;
    }

    updatePassword({
      new_password: values.new_password,
      token: token,
    });
  };

  const updatePassword = async ({
    new_password,
    token,
  }: UserUpdatePassword) => {
    try {
      const apolloClient = initializeApollo();
      setLoadingButton(true);

      await apolloClient.mutate({
        mutation: MUTATION_RECOVERY_PASSWORD_CONFIRMATION,
        variables: {
          fields: {
            new_password,
            token,
          },
        },
      });

      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Sua senha foi alterada.',
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

    router.replace(AppRouters.resetPassword, '', { shallow: true });
  }, []);

  return (
    <Background>
      <Container>
        <FormContent>
          <FormTitle>
            <Text type="h4">Nova senha</Text>

            <Text type="body1" secondary sx={StyledText}>
              Informe sua nova senha para continuar
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
                      name="new_password"
                      label="Nova senha"
                      margin="normal"
                      type="password"
                      onChange={handleChange}
                      helperText={errors.new_password}
                      fullWidth
                    />

                    <StyledInput
                      name="confirmNewPassword"
                      label="Repetir senha"
                      margin="normal"
                      type="password"
                      onChange={handleChange}
                      helperText={errors.confirmNewPassword}
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
            <Anchor label="Ir para login" href={AppRouters.login} />
          </StyledAnchor>
        </FormContent>
      </Container>
    </Background>
  );
};
