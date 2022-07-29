import { styled } from '@mui/system';

export const QualificationWrapper = styled('div')({
  backgroundColor: '#242424',
});

export const QualificationContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '90px 0rem',
});

export const TitleAndSubtitleBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const SubtitleBox = styled('div')({
  margin: '37px 0rem',
});

export const CardBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export const ButtonBox = styled('div')({
  marginTop: '76px',
  alignSelf: 'center',
});
