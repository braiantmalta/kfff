import { SxProps } from '@mui/system';

export const FinalModalBoxStyle: SxProps = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '700px',
  maxHeight: '90vh',
  overflowY: 'auto',
  '&:focus': {
    outline: 'none',
  },
};
