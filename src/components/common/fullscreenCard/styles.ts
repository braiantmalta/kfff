import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${theme.spacing(5)} 0`,

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const Image = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  height: 'auto',
  borderRadius: theme.spacing(2),

  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    height: '335px',
    objectFit: 'cover',
  },
}));

export const FullscreenCardContainer = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '560px',
  paddingLeft: theme.spacing(6),

  ['button']: {
    marginTop: theme.spacing(3),
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    marginTop: theme.spacing(4),
    padding: `0 ${theme.spacing(1)}`,
  },
}));

export const Texts = styled('div')(({ theme }) => ({
  maxWidth: '496px',

  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',

    ['h4']: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
}));

export const Description = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),

  [theme.breakpoints.down('md')]: {
    ['p']: {
      fontSize: theme.typography.body2.fontSize,
    },
  },
  ['p + p']: {
    marginTop: theme.spacing(3),
  },
}));
