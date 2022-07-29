import { useContext } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { FlaskMakerContext } from '@context/flaskMaker';
import { PrimaryCapsule } from './primary';
import { ImageWrapper } from './styles';

export const Capsule = () => {
  const { primaryColor, secondaryColor } = useContext(FlaskMakerContext);

  const theme = useTheme();
  const isMobileVersion = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <ImageWrapper>
      <PrimaryCapsule
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        style={{
          transform: isMobileVersion ? 'rotate(90deg)' : undefined,
        }}
      />
    </ImageWrapper>
  );
};
