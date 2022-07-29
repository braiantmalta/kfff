import { styled } from '@mui/system';

export const ImageWrapper = styled('div')({
  margin: '1rem 0rem',
  width: '202px',
  // width: '456px',
  height: '127px',
  backgroundColor: '#E8E8E8',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ImageTextBox = styled('div')({
  marginBottom: '1rem',
});

export const ImagePanelContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '2rem',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '1rem',
  },
}));

export const TitlePanelBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});
