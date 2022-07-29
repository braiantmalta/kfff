import { styled } from '@mui/system';

export const ButtonsBox = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '1.5rem',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

export const SuccessContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '1.5rem',
  margin: '4.5rem 0rem',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export const LeftSideBox = styled('div')({
  width: '100%',
  maxWidth: '552px',
  height: '474px',
  display: ' flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: 0.5,
});

export const TextBox = styled('div')({
  margin: '1.5rem 0rem 2rem',
});

export const RightSideBox = styled('div')({
  maxWidth: '552px',
  height: '474px',
  flex: 0.5,
});

export const RightImage = styled('img')({
  width: '100%',
  maxWidth: '552px',
});
