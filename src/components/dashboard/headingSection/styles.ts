import { Link as MUILink } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

export const CustomerContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  marginBottom: theme.spacing(3),
}));

export const Link = styled(MUILink)({
  textDecoration: 'none',
});

export const Title: SxProps = () => {
  const theme = useTheme();

  return {
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
  };
};

export const AddIcon = styled('div')(({ theme }) => ({
  fontSize: 0,
  color:
    theme.palette.mode === 'light' ? 'white' : theme.palette.background.default,
  marginRight: theme.spacing(1),
}));
