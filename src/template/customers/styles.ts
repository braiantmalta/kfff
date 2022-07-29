import { styled, useTheme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import { Paper } from '@mui/material';

export const SearchContainer = styled(Paper)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  padding: theme.spacing(2),
  marginBottom: theme.spacing(0.5),
  borderRadius: theme.spacing(0.5),

  [theme.breakpoints.down('sm')]: {
    display: 'block',
    padding: theme.spacing(2),
  },
}));

export const Title: SxProps = () => {
  const theme = useTheme();

  return {
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
  };
};
