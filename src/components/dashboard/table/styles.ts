import { useTheme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

export const activeStatus: SxProps = () => {
  const theme = useTheme();

  return {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
    borderRadius: theme.spacing(2),
    width: '50%',
    minWidth: '76px',
    margin: 'auto',
  };
};

export const inactiveStatus: SxProps = () => {
  const theme = useTheme();

  return {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
    borderRadius: theme.spacing(2),
    width: '50%',
    minWidth: '74px',
    margin: 'auto',
  };
};
