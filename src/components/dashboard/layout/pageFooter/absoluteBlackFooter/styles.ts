import { styled } from '@mui/system';

export const BlackFooterWrapper = styled('div')(({ theme }) => ({
  backgroundColor: '#1D1D1D',
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height: '90px',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('lg')]: {
    bottom: -50,
  },
  [theme.breakpoints.down('md')]: {
    position: 'inherit',
  },
}));

export const BlackFooterContent = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
});
