import { styled } from '@mui/system';

export const ServiceWrapper = styled('div')({
  backgroundColor: '#242424',
});

export const ServiceContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  padding: '84px 0rem',
  gap: '50px',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0px',
  },
}));

export const LeftSide = styled('div')({
  display: 'flex',
  flex: 0.5,
  justifyContent: 'center',
  flexDirection: 'column',
  maxWidth: '650px',
  width: '100%',
});

export const MainTextBox = styled('div')({
  width: '100%',
});

export const TextContentBox = styled('div')({
  marginTop: '30px',
});

export const RightSide = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: 0.5,
  height: 'fit-content',
  [theme.breakpoints.down('lg')]: {
    marginTop: '50px',
  },
}));

export const RedButtonBox = styled('div')({
  marginTop: '35px',
  alignSelf: 'center',
});
