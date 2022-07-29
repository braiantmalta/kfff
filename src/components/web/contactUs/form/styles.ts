import { styled } from '@mui/system';
import { CSSProperties } from 'react';

export const ContactUsWrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    padding: '50px 0rem',
  },
}));

export const ContactStyledForm: CSSProperties = {
  width: '100%',
};
