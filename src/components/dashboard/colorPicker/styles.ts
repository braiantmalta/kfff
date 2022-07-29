import { styled } from '@mui/system';

export const ColorWrapper = styled('div')({
  overflow: 'hidden',
  width: '38.4px',
  height: '38.4px',
  border: 'solid 2px #ddd',
  borderRadius: '40px',
});

export const ColorInput = styled('input')({
  cursor: 'pointer',
  width: '45px',
  height: '45px',
  position: 'relative',
  right: '3px',
  top: '-5px',
  padding: 0,
  border: 'none',
  display: 'block',
  opacity: 0.8,
});
