import { styled } from '@mui/system';

export const CertificationWrapper = styled('div')({
  backgroundColor: '#F8F8F8',
});

export const CertificationContent = styled('div')(({ theme }) => ({
  padding: '200px 0rem',
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export const BlueBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#004181',
  padding: '60px',
  width: '1200px',
  height: 'fit-content',
  borderRadius: '30px',
  gap: '50px',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 'fit-content',
  },
}));

export const TextBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '650px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const MainTextBox = styled('div')(({ theme }) => ({
  padding: '19px 0rem',
  [theme.breakpoints.down('md')]: {
    padding: '24px 0rem',
  },
}));

export const ButtonBox = styled('div')({
  alignSelf: 'center',
});

export const ImageBox = styled('div')({
  margin: '-32px',
});
