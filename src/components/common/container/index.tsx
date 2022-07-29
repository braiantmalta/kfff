import { Container as MuiContainer } from '@mui/material';
import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => (
  <MuiContainer>{children}</MuiContainer>
);
