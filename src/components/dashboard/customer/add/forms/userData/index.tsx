import { Form, Formik } from 'formik';
import { useContext } from 'react';
import * as Yup from 'yup';
import { Box, Button, Typography } from '@mui/material';
import { StyledInput } from '@components/common/inputs/styledInput';
import { CustomerStepperContext } from '@context/customerStepper';
import { FormWrapper, TwoInputs, Buttons } from '../styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é necessário'),
  email: Yup.string().email().required('Email é necessário'),
  password: Yup.string()
    .required('Senha é necessária')
    .min(3, 'Deve conter pelo menos 3 caracteres'),
});

export const FormUserData = () => {
  const { handleSubmit, userData } = useContext(CustomerStepperContext);

  const initialValues = {
    name: userData?.name || '',
    email: userData?.email || '',
    password: userData?.password || '',
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
                label="nome *"
                margin="normal"
                type="text"
                helperText={errors.name}
                onChange={handleChange}
                defaultValue={initialValues.name}
              />

              <TwoInputs>
                <StyledInput
                  name="email"
                  label="email *"
                  margin="normal"
                  type="email"
                  helperText={errors.email}
                  onChange={handleChange}
                  defaultValue={initialValues.email}
                  fullWidth
                />

                <StyledInput
                  name="password"
                  label="senha *"
                  margin="normal"
                  type="password"
                  helperText={errors.password}
                  onChange={handleChange}
                  defaultValue={initialValues.password}
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
