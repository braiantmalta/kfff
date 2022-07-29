import { CustomerContext } from '@context/customer';
import { AddressInput } from '@graphql/types/address';
import { UserInputWithoutRelations } from '@graphql/types/user';
import { useTheme } from '@mui/material/styles';
import { AppRouters } from '@utils/constants';
import Router from 'next/router';
import { createContext, useContext, useState } from 'react';
import Swal from 'sweetalert2';
import {
  CustomerStepperContextProps,
  CustomerStepperProviderProps,
} from './types';

export const CustomerStepperContext = createContext<CustomerStepperContextProps>(
  {} as CustomerStepperContextProps
);

export const CustomerStepperProvider = ({
  children,
}: CustomerStepperProviderProps) => {
  const { customerAdd } = useContext(CustomerContext);
  const theme = useTheme();

  const [activeStep, setActiveStep] = useState<number>(0);
  const [userData, setUserData] = useState<UserInputWithoutRelations>();
  const [userAddress, setUserAddress] = useState<AddressInput>();

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const clearState = () => {
    setUserData(undefined);
    setUserAddress(undefined);
  };

  const handleSubmit = async (
    values: UserInputWithoutRelations | AddressInput
  ) => {
    if ('email' in values) {
      setUserData(values);
      handleNext();
    } else if ('street' in values) {
      setUserAddress(values);
      Swal.fire({
        title: 'Você tem certeza?',
        text: 'Ainda é possivel voltar e revisar os dados',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: theme.palette.info.main,
        confirmButtonText: 'Finalizar!',
        cancelButtonText: 'Voltar e revisar',
        reverseButtons: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            if (userData) {
              await customerAdd({ ...userData, address: [values] });
              clearState();
              Swal.fire({
                icon: 'success',
                title: 'Sucesso!',
                text: 'Cliente cadastrado com sucesso!',
                confirmButtonColor: theme.palette.info.main,
              });
              return Router.push(AppRouters.customers);
            }
            Swal.fire({
              icon: 'error',
              title: 'Ops...',
              text: 'Dados do customer precisa ser preenchido',
              confirmButtonColor: theme.palette.info.main,
            });
          } catch (error) {
            error instanceof Error &&
              Swal.fire({
                icon: 'error',
                title: 'Ops...',
                text: error.message,
                confirmButtonColor: theme.palette.info.main,
              });
          }
        }
      });
    }
  };

  return (
    <CustomerStepperContext.Provider
      value={{
        activeStep,
        userData,
        userAddress,
        handleBack,
        handleNext,
        handleSubmit,
      }}
    >
      {children}
    </CustomerStepperContext.Provider>
  );
};
