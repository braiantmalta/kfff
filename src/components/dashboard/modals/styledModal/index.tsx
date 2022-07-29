import { ReactNode } from 'react';
import { Box, Modal } from '@mui/material';

import { Wrapper } from '@components/common/htmlTags';
import { FinalModalBoxStyle } from './styles';

type StyledModalProps = {
  open?: boolean;
  openSpecificationsModal?: boolean;
  onClose: () => void;
  name: string;
  children: ReactNode;
};

export const StyledModal = ({
  open,
  openSpecificationsModal,
  onClose,
  name,
  children,
}: StyledModalProps) => {
  return (
    <Wrapper>
      <Modal
        BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.4)' } }}
        open={Boolean(open) || Boolean(openSpecificationsModal)}
        onClose={onClose}
        aria-labelledby={`modal-${name}`}
        aria-describedby={`modal-${name}`}
        style={{ zIndex: 2 }}
      >
        <Box sx={FinalModalBoxStyle}>{children}</Box>
      </Modal>
    </Wrapper>
  );
};
