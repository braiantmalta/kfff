import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { useTheme } from '@mui/material/styles';
import { Anchor } from '@components/common/anchor';
import { ButtonLoading } from '@components/common/buttons';
import { Container } from '@components/common/container';
import { StyledInput } from '@components/common/inputs/styledInput';
import { Text } from '@components/common/text';
import { initializeApollo } from '@graphql/client';
import { QUERY_USER_RECOVERY_PASSWORD } from '@graphql/queries/recoveryPassword';
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
  email: '',
};

const schema = Yup.object().shape({
  email: Yup.string()
    .required('Email é necessário')
    .email('Email é necessário'),
});

export const ForgotPassword = () => {
  const theme = useTheme();
  const apolloClient = initializeApollo();
  const [loadingButton, setLoadingButton] = useState(false);
  const router = useRouter();

  const handleSubmit = async ({ email }: typeof initialValues) => {
    try {
      setLoadingButton(true);

      await apolloClient.query({
        query: QUERY_USER_RECOVERY_PASSWORD,
        variables: {
          fields: { email },
        },
      });

      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Por favor, verifique seu e-mail.',
        confirmButtonColor: theme.palette.info.main,
      });

      router.push(AppRouters.login);
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

  return (
    <Background>
      <Container>
        <FormContent>
          <FormTitle>
            <Text type="h4">Esqueceu a senha?</Text>

            <Text type="body1" secondary sx={StyledText}>
              Informe seu endereço de email cadastrado no sistema
            </Text>
          </FormTitle>

          <Formik
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
            validationSchema={schema}
          >
            {({ errors, handleChange }) => (
              <Form>
                <Forms>
                  <FormInputs>
                    <StyledInput
                      name="email"
                      label="Email cadastrado"
                      margin="normal"
                      type="email"
                      onChange={handleChange}
                      helperText={errors.email}
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
