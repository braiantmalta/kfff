import { useContext } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { Text } from '@components/common/text';
import { FlaskMakerContext } from '@context/flaskMaker';
import { FlaskLabelWrapper } from '../capsule/styles';
import { PrimaryFlask } from '../flask/primary';
import { MiniCapsule } from '../miniCapsule';
import { MiniCover } from '../miniCover';
import { LogoCover, ImageBackgroundCover } from './imageCover';
import { LabelTitle } from './labelTitle';
import { PrimaryFlaskLabel } from './primary';
import { SecondaryFlaskBottomLabel } from './secondaryBottom';
import { SecondaryFlaskTopLabel } from './secondaryTop';

export const FlaskLabel = () => {
  const {
    primaryColor,
    secondaryColor,
    flaskColor,
    coverColor,
    capsuleColors,
    flaskCoverPicture,
    flaskLogoPicture,
    flaskTitle,
    flaskTitleColor,
  } = useContext(FlaskMakerContext);

  const theme = useTheme();
  const isMobileVersion = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <FlaskLabelWrapper id="flask-label-view">
      <PrimaryFlask primaryColor={String(flaskColor?.primary)} />
      <MiniCover
        primaryColor={String(coverColor?.primary)}
        style={{
          position: 'relative',
          bottom: '183px',
          right: '364px',
          width: 'fit-content',
        }}
      />

      <PrimaryFlaskLabel
        primaryColor={primaryColor}
        style={{
          position: 'relative',
          top: '60px',
          right: '538px',
          width: 'fit-content',
        }}
      />
      <SecondaryFlaskTopLabel
        secondaryColor={secondaryColor}
        style={{
          position: 'relative',
          top: '-75px',
          right: '739px',
          width: 'fit-content',
          zIndex: 1,
        }}
      />
      <SecondaryFlaskBottomLabel
        secondaryColor={secondaryColor}
        style={{
          position: 'relative',
          top: '190px',
          right: '939px',
          width: 'fit-content',
        }}
      />
      <MiniCapsule
        primaryColor={String(capsuleColors?.primary)}
        secondaryColor={String(capsuleColors?.secondary)}
        isMobileVersion={isMobileVersion}
      />

      <div
        style={{
          position: 'relative',
          top: '165px',
          right: '1408px',
          maxWidth: '550px',
          width: '250px',
          zIndex: 2,
        }}
      >
        <Text
          type="subtitle1"
          style={{ color: `${flaskTitleColor}`, width: '150px' }}
        >
          <strong>60</strong> cápsulas
        </Text>
      </div>

      {flaskCoverPicture ? (
        <ImageBackgroundCover
          flaskCoverPicture={flaskCoverPicture}
          style={{
            position: 'relative',
            top: '58px',
            right: '1658px',
            opacity: '0.8',
          }}
        />
      ) : null}

      {flaskLogoPicture && flaskCoverPicture ? (
        <>
          <LogoCover
            flaskLogoPicture={flaskLogoPicture}
            style={{
              position: 'relative',
              top: '5px',
              right: '1799px',
              width: 'fit-content',
            }}
          />
        </>
      ) : flaskLogoPicture ? (
        <>
          <LogoCover
            flaskLogoPicture={flaskLogoPicture}
            style={{
              position: 'relative',
              top: '5px',
              right: '1598px',
              width: 'fit-content',
            }}
          />
        </>
      ) : undefined}

      {flaskTitle && flaskCoverPicture && flaskLogoPicture ? (
        <div
          style={{
            position: 'relative',
            top: '90px',
            right: '1901px',
          }}
        >
          <LabelTitle
            flaskTitleColor={flaskTitleColor}
            flaskTitle={flaskTitle}
          />
        </div>
      ) : flaskTitle && flaskCoverPicture ? (
        <div
          style={{
            position: 'relative',
            top: '5px',
            right: '1820px',
          }}
        >
          <LabelTitle
            flaskTitleColor={flaskTitleColor}
            flaskTitle={flaskTitle}
          />
        </div>
      ) : flaskTitle && flaskLogoPicture ? (
        <div
          style={{
            position: 'relative',
            top: '90px',
            right: '1700px',
          }}
        >
          <LabelTitle
            flaskTitleColor={flaskTitleColor}
            flaskTitle={flaskTitle}
          />
        </div>
      ) : flaskTitle ? (
        <div
          style={{
            position: 'relative',
            top: '5px',
            right: '1619px',
          }}
        >
          <LabelTitle
            flaskTitleColor={flaskTitleColor}
            flaskTitle={flaskTitle}
          />
        </div>
      ) : undefined}
    </FlaskLabelWrapper>
  );
};
