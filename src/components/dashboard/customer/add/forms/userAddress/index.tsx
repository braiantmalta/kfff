import { useContext } from 'react';
import { Box, Button, Typography } from '@mui/material';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { StyledInput } from '@components/common/inputs/styledInput';
import { CustomerStepperContext } from '@context/customerStepper';
import { regexPatterns } from '@utils/regexPatterns';
import { FormWrapper, TwoInputs, Buttons } from '../styles';

const schema = Yup.object().shape({
  street: Yup.string().required('Rua é necessária').trim(),
  city: Yup.string().required('Cidade é necessária').trim(),
  number: Yup.string()
    .required('Número é necessário')
    .trim()
    .matches(regexPatterns.onlyNumbers, { message: 'Números inválidos' }),
  uf: Yup.string()
    .required('Estado é necessário')
    .min(2, 'mínimo dois caracteres')
    .max(2, 'máximo dois caracteres')
    .trim(),
  additional_info: Yup.string().trim(),
  country: Yup.string().required('País é necessário').trim(),
  neighborhood: Yup.string().required('Bairro é necessário'),
  zip_code: Yup.string()
    .required('CEP é necessário')
    .matches(regexPatterns.onlyNumbers, { message: 'Números inválidos' })
    .trim(),
});

export const FormUserAddress = () => {
  const { handleBack, handleSubmit, userAddress } = useContext(
    CustomerStepperContext
  );

  const initialValues = {
    street: userAddress?.street || '',
    city: userAddress?.city || '',
    number: userAddress?.number || '',
    uf: userAddress?.uf || '',
    additional_info: userAddress?.additional_info || '',
    country: userAddress?.country || '',
    neighborhood: userAddress?.neighborhood || '',
    zip_code: userAddress?.zip_code || '',
  };

  return (
    <Box>
      <Typography>
        <b>Endereço</b>
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
        validateOnChange={false}
      >
        {({ handleChange, errors }) => (
          <Form>
            <FormWrapper>
              <TwoInputs>
                <StyledInput
                  name="country"
                  label="País *"
                  type="text"
                  margin="normal"
                  fullWidth
                  onChange={handleChange}
                  helperText={errors.country}
                  defaultValue={initialValues.country}
                />

                <StyledInput
                  name="uf"
                  label="Estado *"
                  type="text"
                  margin="normal"
                  fullWidth
                  onChange={handleChange}
                  helperText={errors.uf}
                  defaultValue={initialValues.uf}
                  tooltipMessage="UF"
                />
              </TwoInputs>

              <TwoInputs>
                <StyledInput
                  name="city"
                  label="Cidade *"
                  type="text"
                  margin="normal"
                  fullWidth
                  onChange={handleChange}
                  helperText={errors.city}
                  defaultValue={initialValues.city}
                />

                <StyledInput
                  name="zip_code"
                  label="CEP *"
                  type="text"
                  margin="normal"
                  fullWidth
                  onChange={handleChange}
                  helperText={errors.zip_code}
                  defaultValue={initialValues.zip_code}
                />
              </TwoInputs>

              <TwoInputs>
                <StyledInput
                  name="street"
                  label="Rua *"
                  type="text"
                  margin="normal"
                  fullWidth
                  onChange={handleChange}
                  helperText={errors.street}
                  defaultValue={initialValues.street}
                />

                <StyledInput
                  name="neighborhood"
                  label="Bairro *"
                  type="text"
                  margin="normal"
                  fullWidth
                  onChange={handleChange}
                  helperText={errors.neighborhood}
                  defaultValue={initialValues.neighborhood}
                />
              </TwoInputs>

              <TwoInputs>
                <StyledInput
                  name="number"
                  label="Número *"
                  type="text"
                  margin="normal"
                  fullWidth
                  onChange={handleChange}
                  helperText={errors.number}
                  defaultValue={initialValues.number}
                />

                <StyledInput
                  name="additional_info"
                  label="Complemento"
                  type="text"
                  margin="normal"
                  fullWidth
                  onChange={handleChange}
                  helperText={errors.additional_info}
                  defaultValue={initialValues.country}
                />
              </TwoInputs>
              <Buttons>
                <Button variant="outlined" color="error" onClick={handleBack}>
                  VOLTAR
                </Button>
                <Button variant="contained" color="primary" type="submit">
                  FINALIZAR
                </Button>
              </Buttons>
            </FormWrapper>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
