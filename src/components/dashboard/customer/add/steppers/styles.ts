import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StepperComponent = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
}));

export const Content = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  maxWidth: '800px',
  margin: 'auto',
}));
