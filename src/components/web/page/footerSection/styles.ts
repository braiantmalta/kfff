import { styled } from '@mui/system';

export const FooterWrapper = styled('div')({
  backgroundColor: '#242424',
});

export const FooterContent = styled('div')({
  padding: '50px 0rem',
});

export const BottomBox = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '22px',
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

export const ImageBox = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '60px',
  margin: 'auto 0px',
  [theme.breakpoints.down('md')]: {
    marginTop: '2.5rem',
    gap: '20px',
  },
}));
