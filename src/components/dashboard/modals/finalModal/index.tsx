import { useContext } from 'react';

import { Wrapper } from '@components/common/htmlTags';
import { FinalForm } from '@components/dashboard/forms/finalForm';
import { FlaskMakerContext } from '@context/flaskMaker';
import { StyledModal } from '../styledModal';

export const FinalModal = () => {
  const { handleCloseModal, openModal } = useContext(FlaskMakerContext);
  return (
    <Wrapper>
      <StyledModal
        open={openModal}
        onClose={handleCloseModal}
        name={'final-form'}
      >
        <FinalForm />
      </StyledModal>
    </Wrapper>
  );
};
