import { styled } from '@mui/system';

export const ImageAndColorsBox = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export const ImageBox = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  flex: 0.5,
  [theme.breakpoints.down('md')]: {
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
}));
