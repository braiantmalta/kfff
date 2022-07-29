import { styled, useTheme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

export const Background = styled('div')({
  backgroundImage: 'url(/img/png/background.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',

  height: '100vh',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const FormContent = styled('div')(({ theme }) => ({
  maxWidth: '486px',
  margin: 'auto',
  padding: theme.spacing(3),
  backgroundColor:
    theme.palette.mode === 'light' ? 'white' : theme.palette.background.default,
  borderRadius: theme.spacing(0.5),
}));

export const FormTitle = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

export const Forms = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const FormInputs = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const StyledAnchor = styled('div')(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(3),
}));

export const StyledText: SxProps = () => {
  const theme = useTheme();

  return {
    marginTop: theme.spacing(2.5),
  };
};
