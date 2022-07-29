import { styled } from '@mui/system';

export const ContactFormWrapper = styled('div')({
  backgroundColor: '#FDFDFD',
});

export const ContactFormContent = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '82vh',
  [theme.breakpoints.down('md')]: {
    height: '100%',
    flexDirection: 'column',
  },
}));

export const LeftSide = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: 0.9,
  width: '100%',
});

export const RightSide = styled('div')(({ theme }) => ({
  width: '400px',
  flex: 0.5,
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));
