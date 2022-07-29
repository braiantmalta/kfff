import { styled } from '@mui/system';
import { IconButton as MuiIconButton } from '@mui/material';

export const PageContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  padding: '56px 0rem',
  gap: '50px',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0px',
  },
}));

export const LeftSide = styled('div')({
  display: 'flex',
  flex: 0.7,
  justifyContent: 'center',
  flexDirection: 'column',
  maxWidth: '650px',
  width: '100%',
  height: '500px',
});

export const MainTextBox = styled('div')(({ theme }) => ({
  width: '595px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const TextContentBox = styled('div')({
  marginTop: '30px',
});

export const RightSide = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: 0.3,
  height: 'fit-content',
  [theme.breakpoints.down('lg')]: {
    marginTop: '50px',
  },
}));

export const RedButtonBox = styled('div')({
  marginTop: '35px',
  alignSelf: 'center',
});

export const ButtonBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  top: '50px',
});

export const StyledIconButton = styled(MuiIconButton)({
  width: '55px',
  height: '55px',
  backgroundColor: '#F8F8F8',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  cursor: 'unset',
});
