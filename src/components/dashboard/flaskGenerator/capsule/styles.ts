import { styled } from '@mui/system';

export const ImageWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '652px',
  backgroundColor: '#EBEBEB',
  maxWidth: '552px',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
}));

export const FlaskLabelWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '652px',
  backgroundColor: '#EBEBEB',
  maxWidth: '552px',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    // left: '50px',
    // transform: 'translateX(-5%)',
    // justifyContent: 'center',
  },
}));
