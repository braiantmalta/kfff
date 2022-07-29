import { styled } from '@mui/system';

export const InfoBoxWrapper = styled('div')({
  maxWidth: '1200px',
  width: '100%',
});

export const InfoBoxContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  height: 'fit-content',
  gap: '28px',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  },
}));

export const InfoContentBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const LinkWrapper = styled('div')({
  marginTop: '20px',
});

export const LinkBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});
