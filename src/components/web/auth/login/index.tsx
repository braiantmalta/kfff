import * as Yup from 'yup';
import { Form, Formik } from 'formik';
// import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import { Anchor } from '@components/common/anchor';
import { Checkbox } from '@components/common/checkbox';
import { Text } from '@components/common/text';
import { AuthContext } from '@context/authentication';
import { StyledInput } from '@components/common/inputs/styledInput';
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
  email: '',
  password: '',
  rememberMe: false,
};

const schema = Yup.object().shape({
  email: Yup.string().required('email é necessário').email(),
  password: Yup.string().required('senha é necessária'),
});

export const Login = () => {
  // const theme = useTheme();
  const { signIn, authLoading } = useContext(AuthContext);
  const handleSubmit = async (values: typeof initialValues) => {
    signIn({
      email: values.email,
      password: values.password,
    });
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
              <Text type="h4">Entrar na conta</Text>
              <Text type="subtitle1" secondary>
                Faça o login para continuar
              </Text>
            </FormsTitle>

            <Formik
              initialValues={initialValues}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
              validationSchema={schema}
            >
              {({ errors, handleChange }) => (
                <Form>
                  <Forms>
                    <StyledInput
                      name="email"
                      label="Email"
                      margin="normal"
                      type="email"
                      onChange={handleChange}
                      helperText={errors.email}
                      required
                    />

                    <StyledInput
                      name="password"
                      label="Senha"
                      margin="normal"
                      type="password"
                      onChange={handleChange}
                      helperText={errors.password}
                      required
                    />

                    <SubField>
                      <Checkbox
                        name="rememberMe"
                        label="Manter-se conectado"
                        onChange={handleChange}
                      />
                      <Anchor
                        label="Esqueceu a senha?"
                        href={AppRouters.forgotPassword}
                      />
                    </SubField>

                    <ButtonLoading
                      loading={authLoading}
                      variant="contained"
                      size="large"
                      type="submit"
                    >
                      ENTRAR
                    </ButtonLoading>
                  </Forms>
                </Form>
              )}
            </Formik>

            <NewAccountOrAlreadyHaveAnAccount>
              <Text type="subtitle2" textAlign="center">
                Não possui conta ?{' '}
                <Anchor label="Criar conta" href={AppRouters.register} />
              </Text>
            </NewAccountOrAlreadyHaveAnAccount>
          </LoginContent>
        </RightSide>
      </Content>
    </Wrapper>
  );
};
