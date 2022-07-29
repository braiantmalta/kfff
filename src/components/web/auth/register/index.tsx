import { useContext, useState } from 'react';
import { Form, Formik } from 'formik';
import Swal from 'sweetalert2';
import Router from 'next/router';
import * as Yup from 'yup';
import { useTheme } from '@mui/material/styles';
import { Checkbox } from '@components/common/checkbox';
import { StyledInput } from '@components/common/inputs/styledInput';
import { Text } from '@components/common/text';
import { AuthContext } from '@context/authentication';
import { Anchor } from '@components/common/anchor';
import { ButtonLoading } from '@components/common/buttons';
import { AppRouters } from '@utils/constants';
import {
  Wrapper,
  Content,
  LeftSide,
  Image,
  RightSide,
  LoginContent,
  FormsTitle,
  Forms,
  SubField,
  NewAccountOrAlreadyHaveAnAccount,
} from '../styles/styles';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  emailNotifications: false,
};

const schema = Yup.object().shape({
  name: Yup.string().required('nome é necessário'),
  email: Yup.string().required('email é necessário').email(),
  password: Yup.string()
    .required('senha é necessária')
    .min(6, 'Mínimo de 6 caracteres')
    .max(15, 'Máximo 15 caracteres'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'As senhas não são compatíveis')
    .required('confirmar senha é necessário'),
});

export const Register = () => {
  const theme = useTheme();
  const { signUp } = useContext(AuthContext);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      setLoading(true);

      await signUp(values);

      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Conta criada com sucesso!',
        confirmButtonColor: theme.palette.info.main,
      });

      await Router.push(AppRouters.login);
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
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <Content>
        <LeftSide>
          <Image src="/img/png/login-background.png" />
        </LeftSide>
        <RightSide>
          <LoginContent>
            <FormsTitle>
              <Text type="h4">Criar conta</Text>
              <Text type="subtitle1" secondary>
                Registre-se para continuar
              </Text>
            </FormsTitle>
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
              validationSchema={schema}
              validateOnChange={false}
            >
              {({ errors, handleChange }) => (
                <Form>
                  <Forms>
                    <StyledInput
                      name="name"
                      label="Nome completo"
                      margin="normal"
                      type="text"
                      onChange={handleChange}
                      helperText={errors.name}
                    />

                    <StyledInput
                      name="email"
                      label="Email"
                      margin="normal"
                      type="email"
                      onChange={handleChange}
                      helperText={errors.email}
                    />

                    <StyledInput
                      name="password"
                      label="Senha"
                      margin="normal"
                      type="password"
                      onChange={handleChange}
                      helperText={errors.password}
                    />

                    <StyledInput
                      name="confirmPassword"
                      label="Confirmar senha"
                      margin="normal"
                      type="password"
                      onChange={handleChange}
                      helperText={errors.confirmPassword}
                    />

                    <SubField>
                      <Checkbox
                        name="emailNotifications"
                        label="Deseja receber notificações no email?"
                        onChange={handleChange}
                      />
                    </SubField>

                    <ButtonLoading
                      loading={loading}
                      variant="contained"
                      size="large"
                      type="submit"
                    >
                      CONTINUAR
                    </ButtonLoading>
                  </Forms>

                  <NewAccountOrAlreadyHaveAnAccount>
                    <Text type="subtitle2" textAlign="center">
                      Já possui uma conta ?{' '}
                      <Anchor label="Entrar" href={AppRouters.login} />
                    </Text>
                  </NewAccountOrAlreadyHaveAnAccount>
                </Form>
              )}
            </Formik>
          </LoginContent>
        </RightSide>
      </Content>
    </Wrapper>
  );
};
