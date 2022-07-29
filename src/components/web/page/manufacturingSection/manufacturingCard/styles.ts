import { styled } from '@mui/system';
import { Paper as MuiPaper } from '@mui/material';

export const Paper = styled(MuiPaper)({
  backgroundColor: '#242424',
  width: '353px',
  height: 'fit-content',
  padding: '28px',
  borderRadius: '20px',
});

export const IdBox = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '28px',
  height: '28px',
  backgroundColor: '#FFF',
  borderRadius: 50,
});

export const TitleBox = styled('div')({
  margin: '20px 0rem 6px',
});

export const TextBox = styled('div')({});
