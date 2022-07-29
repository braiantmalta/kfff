import { UserInputWithoutRelations } from '@graphql/types/user';
import { AddressInput } from '@graphql/types/address';
import { ReactNode } from 'react';

export type CustomerStepperProviderProps = {
  children: ReactNode;
};

export type CustomerStepperContextProps = {
  activeStep: number;
  userData?: UserInputWithoutRelations;
  userAddress?: AddressInput;
  handleBack: () => void;
  handleNext: () => void;
  handleSubmit: (data: any) => void;
};
