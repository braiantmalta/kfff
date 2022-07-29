import { styled } from '@mui/system';
import { IconButton as MuiIconButton } from '@mui/material';
import { DeleteOutlined, Image } from '@mui/icons-material';

export const ImageContent = styled('div')({
  margin: '1.5rem 0rem',
  width: '456px',
  height: '127px',
  borderRadius: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ImagePreview = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const Input = styled('input')(() => ({
  display: 'none',
}));

export const IconButtonStyled = styled(MuiIconButton)({
  height: 'fit-content',
  position: 'relative',
  top: 0,
  left: 0,
});

export const DeleteOutlinedStyled = styled(DeleteOutlined)({
  // color: '#0000004D',
  width: '36px',
  height: '36px',
});

export const ImageStyled = styled(Image)({
  color: '#0000004D',
  width: '36px',
  height: '36px',
});
