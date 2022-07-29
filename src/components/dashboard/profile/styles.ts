import { Button as MUIButton, Paper as MUIPaper } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import { CSSProperties } from 'react';

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(5),
}));

export const Input = styled('input')(() => ({
  display: 'none',
}));

export const FieldsInRow = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(3),

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: 0,
  },
}));

export const Button = styled(MUIButton)(({ theme }) => ({
  textTransform: 'uppercase',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const Buttons = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
  marginTop: theme.spacing(3),

  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const CancelAndSaveButtons = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: theme.spacing(3),
  marginTop: theme.spacing(3),

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

export const StyledIconButton: SxProps = () => {
  const theme = useTheme();

  return {
    minWidth: '18px',
    minHeight: '18px',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.info.main,

    ':hover': {
      backgroundColor:
        theme.palette.mode === 'light'
          ? theme.palette.primary.main
          : theme.palette.primary.dark,
    },
  };
};

export const StyledAddAPhoto: SxProps = () => {
  const theme = useTheme();

  return {
    width: 20,
    height: 20,
    color: theme.palette.common.white,
  };
};

export const Paper = styled(MUIPaper)(({ theme }) => ({
  width: '100%',
  maxWidth: 680,
  backgroundColor:
    theme.palette.mode === 'light' ? 'white' : theme.palette.background.default,
  borderRadius: theme.spacing(0.5),
  padding: theme.spacing(3),
}));

export const StyledForm: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};
