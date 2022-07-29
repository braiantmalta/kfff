import { Box as MUIBox, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TabComponent = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
}));

export const Content = styled(MUIBox)(({ theme }) => ({
  marginTop: theme.spacing(3),
  maxWidth: '800px',
  margin: 'auto',
}));

export const StyledBox = styled(MUIBox)(({ theme }) => ({
  maxWidth: '800px',
  margin: 'auto',
  padding: `0 ${theme.spacing(3)}`,
}));
