import { styled } from '@mui/system';
import { Paper as MuiPaper } from '@mui/material';

export const Paper = styled(MuiPaper)({
  backgroundColor: '#004181',
  width: '353px',
  height: '261px',
  // height: 'fit-content',
  padding: '28px',
  borderRadius: '20px',
});

export const IconBox = styled('img')({
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  width: '60px',
  height: '60px',
  // backgroundColor: '#FFF',
  // borderRadius: 50,
});

export const TitleBox = styled('div')({
  margin: '20px 0rem 6px',
});

export const TextBox = styled('div')({});
