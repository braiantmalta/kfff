import { styled } from '@mui/system';
import { Button as MuiButton } from '@mui/material';

export const RedButton = styled(MuiButton)({
  backgroundColor: '#FF480E',
  color: 'white',
  '&:hover': {
    backgroundColor: '#ff6d3c',
  },
  fontSize: '24px',
  borderRadius: '5px',
});
