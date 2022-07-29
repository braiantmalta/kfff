import { styled } from '@mui/system';

export const TitleAndColorBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 0.5,
  margin: 'auto',
  width: '100%',
  maxWidth: '456px',
  [theme.breakpoints.down('lg')]: {
    margin: '3rem 0rem',
    padding: '0px',
  },
}));

export const TitleBox = styled('div')({
  marginBottom: '2rem',
});

export const ColorsControlBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '11.5rem',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '0rem',
    marginBottom: '0.5rem',
    width: '100%',
  },
}));

export const PrimaryBox = styled('div')({});

export const SecondaryBox = styled('div')({});

export const ColorsBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  margin: '1rem 0rem 1.5rem 0rem',
  [theme.breakpoints.down('sm')]: {
    // margin: '0rem 0ren 1rem',
  },
}));

export const ButtonsBox = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '2rem',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

export const InputContent = styled('div')({
  marginBottom: '1rem',
});

export const NameTitleBox = styled('div')({
  marginBottom: '1rem',
});

export const ColorNameTitleBox = styled('div')({
  margin: '1rem 0rem',
});
