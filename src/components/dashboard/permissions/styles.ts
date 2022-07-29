import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SearchContainer = styled(Paper)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: theme.spacing(2),
  marginBottom: theme.spacing(0.5),
  borderRadius: theme.spacing(0.5),
}));

export const FormWrapper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '800px',
  margin: `${theme.spacing(3)} auto 0`,
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(3),
  },
}));

export const TwoInputs = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(3),
  },
}));

export const SwitchWrapper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(2),
  maxWidth: '800px',
  margin: `${theme.spacing(3)} auto 0`,
  padding: theme.spacing(3),
  gap: theme.spacing(3),
}));

export const SwitchItem = styled(Box)(() => ({
  width: '100%',
  maxWidth: '126px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const ButtonWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: theme.spacing(2),
  maxWidth: '800px',
  margin: `${theme.spacing(3)} auto 0`,
}));

export const ErrorText = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  paddingTop: theme.spacing(1),
  paddingLeft: theme.spacing(1),
}));
