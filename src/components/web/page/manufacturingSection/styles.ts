import { styled } from '@mui/system';

export const ManufacturingWrapper = styled('div')({
  backgroundColor: '#F8F8F8',
});

export const ManufacturingContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '168px 0rem',
});

export const TitleAndSubtitleBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const SubtitleBox = styled('div')({
  margin: '10px 0rem 39px',
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
  marginTop: '96px',
  alignSelf: 'center',
});
