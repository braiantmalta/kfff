import { styled } from '@mui/system';

export const DashboardContent = styled('div')(({ theme }) => ({
  maxHeight: '956px',
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export const TextBox = styled('div')(({ theme }) => ({
  padding: '3rem 0rem 0rem',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));

export const StepperBox = styled('div')({
  maxWidth: '100%',
  width: '552px',
  margin: '2rem 0rem 3rem',
});
