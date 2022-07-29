import { styled, useTheme } from '@mui/material/styles';
import { Box as MUIBox } from '@mui/material';
import { SxProps } from '@mui/system';

export const Wrapper = styled('div')({
  display: 'flex',
});

export const ListWrapper = styled('div')(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
}));

export const Box = styled(MUIBox)(({ theme }) => ({
  width: 360,
  padding: `${theme.spacing(3)} ${theme.spacing(2)} 0`,

  [theme.breakpoints.down('sm')]: {
    // width: '100vw',
  },

  ['& + div']: {
    paddingTop: '0',
    paddingBottom: theme.spacing(3),
  },
}));

export const ButtonStyles: SxProps = () => {
  const theme = useTheme();

  return {
    ['span']: {
      fontSize: theme.typography.h6.fontSize,
      fontWeight: theme.typography.h6.fontWeight,
      lineHeight: theme.typography.h6.lineHeight,
      letterSpacing: theme.typography.h6.letterSpacing,
      color: theme.palette.text.primary,
    },
  };
};
