import { styled } from '@mui/material/styles';

export const MaxContent = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: theme.breakpoints.values.lg,
  margin: '0 auto',
  padding: `0 ${theme.spacing(2)}`,
}));
