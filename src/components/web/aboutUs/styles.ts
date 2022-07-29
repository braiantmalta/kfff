import { styled } from '@mui/system';

export const AboutUsWrapper = styled('div')({
  backgroundColor: '#FDFDFD',
  height: '100%',
});

export const AboutUsContent = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '82vh',
  [theme.breakpoints.down('md')]: {
    margin: '3.5rem 0rem',
    height: '755px',
    flexDirection: 'column',
  },
  [theme.breakpoints.down('sm')]: {
    height: '100%',
  },
}));
