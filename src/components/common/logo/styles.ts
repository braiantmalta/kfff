import { styled } from '@mui/system';

export const LogoWrapper = styled('img')({
  // width: '10rem',
  // height: '100%',
  cursor: 'pointer',
  transition: '0.2s all',
  '&:hover': {
    transform: 'scale(${scaleOnHover ? 1.1 : null})',
  },
});
