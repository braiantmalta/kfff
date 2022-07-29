import { styled } from '@mui/system';

export const AboutUsWrapper = styled('div')({
  backgroundColor: '#F8F8F8',
});

export const AboutUsContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  padding: '107px 0rem',
  gap: '128px',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0px',
  },
}));

export const LeftSide = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: 0.5,

  width: '100%',
  [theme.breakpoints.down('lg')]: {
    justifyContent: 'center',
  },
}));

export const MainTextBox = styled('div')({
  width: '100%',
});

export const TextContentBox = styled('div')({
  marginTop: '30px',
});

export const RedButtonBox = styled('div')({
  marginTop: '95px',
  alignSelf: 'center',
});

export const RightSide = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: 0.5,
  justifyContent: 'center',
  flexDirection: 'column',
  maxWidth: '650px',
  [theme.breakpoints.down('lg')]: {
    marginTop: '50px',
    alignItems: 'center',
  },
}));
