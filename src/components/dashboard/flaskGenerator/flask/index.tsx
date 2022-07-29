import { useContext } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { FlaskMakerContext } from '@context/flaskMaker';
import { ImageWrapper } from '../capsule/styles';
import { MiniCover } from '../miniCover';
import { PrimaryFlask } from './primary';

export const Flask = () => {
  const { primaryColor, coverColor } = useContext(FlaskMakerContext);

  const theme = useTheme();
  const isMobileVersion = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <ImageWrapper>
      <PrimaryFlask
        primaryColor={primaryColor}
        style={{
          position: 'relative',
          top: '0px',
          right: isMobileVersion ? '-90px' : '0px',
        }}
      />
      <MiniCover
        primaryColor={String(coverColor?.primary)}
        style={{
          position: 'relative',
          bottom: '183px',
          right: isMobileVersion ? '274px' : '364px',
        }}
      />
    </ImageWrapper>
  );
};
