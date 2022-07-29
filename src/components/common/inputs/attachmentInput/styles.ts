import { styled } from '@mui/system';
import { Image } from '@mui/icons-material';

export const ButtonsGap = styled('div')({
  display: 'flex',
  gap: '5px',
});

export const FileNameBox = styled('div')({
  backgroundColor: '#00000014',
  margin: '1.5rem 0rem 0.5rem',
  width: '124px',
  height: '32px',
  padding: '7px',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '2px',
});

export const BlackImageStyled = styled(Image)({
  color: '#000000',
  marginRight: '11px',
});
