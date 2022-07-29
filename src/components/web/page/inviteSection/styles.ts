import { styled } from '@mui/system';

export const InviteWrapper = styled('div')({
  backgroundColor: '#363636',
  padding: '45px 0rem',
});

export const InviteContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const TextBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const InviteTextBox = styled('div')(({ theme }) => ({
  marginTop: '18px',
  width: '795px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const ButtonBox = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    marginTop: '30px',
  },
}));
