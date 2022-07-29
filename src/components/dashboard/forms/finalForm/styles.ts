import { CSSProperties } from 'react';
import { styled } from '@mui/system';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const StyledForm: CSSProperties = {
  width: '100%',
  maxWidth: '700px',
  height: 'fit-content',
  borderRadius: 5,
};

export const ContentBox = styled('div')({
  padding: '2.44rem 2rem 0rem',
});

export const ButtonBox = styled('div')({
  padding: '1.5rem 0rem 2rem',
});
