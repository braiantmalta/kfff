import { styled } from '@mui/system';
import { Button as MuiButton } from '@mui/material';

export const BlackButton = styled(MuiButton)({
  backgroundColor: '#1A1A1A',
  color: 'white',
  '&:hover': {
    backgroundColor: '#a1a1a1',
  },
});
