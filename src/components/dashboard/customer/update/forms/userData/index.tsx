import Swal from 'sweetalert2';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { StyledInput } from '@components/common/inputs/styledInput';
import { useApollo } from '@graphql/client';
import { MUTATION_USER_UPDATE } from '@graphql/mutations/user/userUpdate';
import { User } from '@graphql/types/user';
import { regexPatterns } from '@utils/regexPatterns';
import { FormWrapper, TwoInputs, Buttons } from '../styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é necessário'),
  email: Yup.string().email(),
  cpf: Yup.string().trim().matches(regexPatterns.onlyNumbers, {
    message: 'Números inválidos',
  }),
});

type UpdateUserDataProps = {
  userData: User;
  customerId: number;
  refetch: () => void;
};

export const UpdateUserData = ({
  userData,
  customerId,
  refetch,
}: UpdateUserDataProps) => {
  const apolloClient = useApollo();
  const theme = useTheme();
  const initialValues = {
    name: userData.name || '',
    email: userData.email || '',
    cpf: userData.cpf || '',
    birth_date: userData.birth_date?.toString().split('T')[0] || '',
  };

  const handleSubmit = async (values: typeof initialValues) => {
    const fields = {
      name: values.name,
      cpf: values.cpf || null,
      birth_date: values.birth_date || null,
    };
    try {
      await apolloClient.mutate({
        mutation: MUTATION_USER_UPDATE,
        variables: {
          id: customerId,
          fields,
        },
      });

      refetch();
      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Dados básicos atualizado com sucesso.',
        confirmButtonColor: theme.palette.info.main,
      });
    } catch (error) {
      error instanceof Error &&
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
          confirmButtonColor: theme.palette.info.main,
        });
    }
  };
  return (
    <Box>
      <Typography>
        <b>Dados básicos</b>
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
        validateOnChange={false}
      >
        {({ errors, handleChange }) => (
          <Form>
            <FormWrapper>
              <StyledInput
                name="name"
                label="Nome *"
                margin="normal"
                type="text"
                fullWidth
                helperText={errors.name}
                onChange={handleChange}
                defaultValue={initialValues.name}
              />
              <StyledInput
                name="email"
                label="E-mail"
                margin="normal"
                type="email"
                fullWidth
                helperText={errors.email}
                onChange={handleChange}
                defaultValue={initialValues.email}
                disabled
              />
              <TwoInputs>
                <StyledInput
                  name="cpf"
                  label="CPF"
                  margin="normal"
                  type="text"
                  helperText={errors.cpf}
                  onChange={handleChange}
                  defaultValue={initialValues.cpf}
                  fullWidth
                />

                <StyledInput
                  name="birth_date"
                  label="Data de nascimento"
                  margin="normal"
                  type="date"
                  shrink={true}
                  helperText={errors.cpf}
                  onChange={handleChange}
                  defaultValue={initialValues.birth_date || ''}
                  fullWidth
                />
              </TwoInputs>
              <Buttons>
                <Button variant="contained" color="info" type="submit">
                  SALVAR
                </Button>
              </Buttons>
            </FormWrapper>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
