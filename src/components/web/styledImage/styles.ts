import { styled } from '@mui/system';

export const BannerImage = styled('img')(({ theme }) => ({
  width: '550px',
  height: '550px',
  [theme.breakpoints.down('lg')]: {
    width: '450px',
    height: '450px',
  },
  [theme.breakpoints.down('md')]: {
    width: '350px',
    height: '350px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '300px',
    height: '300px',
  },
}));
