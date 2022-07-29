import { useContext } from 'react';
import { ArrowForwardIos } from '@mui/icons-material';
import {
  Box,
  Breadcrumbs,
  Link,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import { FormUserAddress } from '../forms/userAddress';
import { FormUserData } from '../forms/userData';
import { AppRouters } from '@utils/constants';
import { CustomerStepperContext } from '@context/customerStepper';
import { Content, StepperComponent } from './styles';

export const NewCustomer = () => {
  const { activeStep } = useContext(CustomerStepperContext);

  const steps = ['Dados básicos', 'Endereço'];

  const stepsComponent = {
    0: <FormUserData />,
    1: <FormUserAddress />,
  };

  return (
    <Box>
      <Typography variant="h6">Cliente</Typography>
      <Breadcrumbs separator={<ArrowForwardIos fontSize="inherit" />}>
        <Link
          underline="hover"
          key="1"
          color="inherit"
          href={AppRouters.customers}
        >
          clientes
        </Link>
        <Typography key="2" color="text.primary">
          novo
        </Typography>
      </Breadcrumbs>

      <Content>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <StepperComponent>
          {
            /* @ts-expect-error */
            stepsComponent[activeStep]
          }
        </StepperComponent>
      </Content>
    </Box>
  );
};
