import { useContext } from 'react';
import { Step, StepLabel, Stepper } from '@mui/material';

import { DashboardContent, StepperBox, TextBox } from './styles';
import { Text } from '@components/common/text';
import { dashboardSteps } from '@utils/constants/dashboardSteps';
import { FlaskMakerContext } from '@context/flaskMaker';
import {
  CapsuleMaker,
  CoverMaker,
  FlaskMaker,
  FlaskLabelMaker,
} from './flaskGenerator';
import { FinalModal } from './modals';
import { SpecificationsModal } from './modals/specificationsModal';

export const Dashboard = () => {
  const { activeStep } = useContext(FlaskMakerContext);

  return (
    <DashboardContent>
      <TextBox>
        <Text type="h4">Customize seu frasco</Text>
      </TextBox>
      <StepperBox>
        <Stepper activeStep={activeStep} alternativeLabel>
          {dashboardSteps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </StepperBox>

      {activeStep === 0 && <CapsuleMaker />}
      {activeStep === 1 && <CoverMaker />}
      {activeStep === 2 && <FlaskMaker />}
      {activeStep === 3 && <FlaskLabelMaker />}

      <FinalModal />
      <SpecificationsModal />
    </DashboardContent>
  );
};
