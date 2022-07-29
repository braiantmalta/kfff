import { useContext } from 'react';

// import { Anchor } from '@components/common/anchor';
import { PanelImageInput } from '@components/common/inputs/imageInput';
import { Text } from '@components/common/text';
import { FlaskMakerContext } from '@context/flaskMaker';
import {
  ImagePanelContent,
  // ImageTextBox,
  ImageWrapper,
  TitlePanelBox,
} from './styles';

export const ImagePanel = () => {
  const {
    setFlaskCoverPicture,
    setFlaskLogoPicture,
    // handleOpenSpecificationsModal,
  } = useContext(FlaskMakerContext);
  return (
    <>
      <ImagePanelContent>
        <TitlePanelBox>
          <Text type="subtitle2">LOGO</Text>
          <ImageWrapper>
            <PanelImageInput
              name="logo-image"
              setFlaskLogoPicture={setFlaskLogoPicture}
            />
          </ImageWrapper>
        </TitlePanelBox>
        <TitlePanelBox>
          <Text type="subtitle2">TEXTURA</Text>
          <ImageWrapper>
            <PanelImageInput
              name="background-image"
              setFlaskCoverPicture={setFlaskCoverPicture}
            />
          </ImageWrapper>
        </TitlePanelBox>
      </ImagePanelContent>
      {/* <ImageTextBox>
        <Text type="subtitle1">
          Não tem uma logo ainda?{' '}
          <Anchor
            label={'Fale com o Design'}
            onClick={() => {
              handleOpenSpecificationsModal();
            }}
          />
        </Text>
      </ImageTextBox> */}
    </>
  );
};
