import { useContext } from 'react';

import { Wrapper } from '@components/common/htmlTags';
import { FlaskMakerContext } from '@context/flaskMaker';
import { StyledModal } from '../styledModal';
import { SpecificationsForm } from '@components/dashboard/forms/specificationsForm';

export const SpecificationsModal = () => {
  const {
    handleCloseSpecificationsModal,
    openSpecificationsModal,
  } = useContext(FlaskMakerContext);
  return (
    <Wrapper>
      <StyledModal
        openSpecificationsModal={openSpecificationsModal}
        onClose={handleCloseSpecificationsModal}
        name={'specifications-form'}
      >
        <SpecificationsForm />
      </StyledModal>
    </Wrapper>
  );
};
