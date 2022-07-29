import { styled } from '@mui/system';

export const CatalogWrapper = styled('div')({
  backgroundColor: '#FFFFFF',
});

export const CatalogContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
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
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    marginTop: '50px',
  },
}));

export const CatalogTextBox = styled('div')(({ theme }) => ({
  width: '550px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const TextContentBox = styled('div')({
  marginTop: '10px',
});

export const RedButtonBox = styled('div')({
  marginTop: '95px',
  alignSelf: 'center',
});

export const RightSide = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: 0.5,
  [theme.breakpoints.down('lg')]: {
    marginTop: '50px',
  },
}));

export const ButtonBox = styled('div')({
  marginTop: '78px',
  alignSelf: 'center',
});
