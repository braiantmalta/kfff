import { useContext } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { FlaskMakerContext } from '@context/flaskMaker';
import { ImageWrapper } from '../capsule/styles';
import { PrimaryCover } from './primary';

export const Cover = () => {
  const { primaryColor } = useContext(FlaskMakerContext);
  const theme = useTheme();
  const isMobileVersion = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ImageWrapper>
      <PrimaryCover
        primaryColor={primaryColor}
        style={{
          transform: isMobileVersion ? 'rotate(90deg)' : undefined,
        }}
      />
    </ImageWrapper>
  );
};
