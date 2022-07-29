import { useContext, useState } from 'react';
import { Divider, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Swal from 'sweetalert2';
import domtoimage from 'dom-to-image';

import {
  ButtonsBox,
  ColorNameTitleBox,
  ColorsBox,
  ColorsControlBox,
  InputContent,
  NameTitleBox,
  PrimaryBox,
  SecondaryBox,
  TitleAndColorBox,
  TitleBox,
} from './styles';
import { BlackButton, ButtonLoading } from '@components/common/buttons';
import { Text } from '@components/common/text';
import { StyledInput } from '@components/common/inputs';
import { Wrapper } from '@components/common/htmlTags';
import { FlaskMakerContext } from '@context/flaskMaker';
import { DefaultColor } from '@utils/constants/capsuleColors';
import { ColorPicker } from '../colorPicker';
import { ImagePanel } from './imagePanel';

type ColorPanelProps = {
  title: string;
  onlyPrimary?: boolean;
  saveType: 'capsule' | 'cover' | 'flask' | 'flask-label';
};

export const ColorPanel = ({
  title,
  onlyPrimary,
  saveType,
}: ColorPanelProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    setPrimaryColor,
    setSecondaryColor,
    setCapsuleColors,
    setCoverColor,
    setFlaskColor,
    setFlaskLabelColor,
    setImagePreview,
    primaryColor,
    secondaryColor,
    handleNext,
    handleBack,
    setFlaskTitle,
    flaskTitle,
    activeStep,
    isPrimary,
  } = useContext(FlaskMakerContext);

  const theme = useTheme();
  const isMobileVersion = useMediaQuery(theme.breakpoints.down('sm'));

  const getBase64 = (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setImagePreview(reader.result);
    };
    reader.onerror = function (error) {
      console.error('Error: ', error);
    };
  };

  const handleNextStep = async () => {
    setLoading(true);
    try {
      handleNext();
      if (primaryColor && secondaryColor === undefined) {
        handleSaveColors(primaryColor, undefined, saveType);
      }
      if (primaryColor !== undefined && secondaryColor !== undefined) {
        handleSaveColors(primaryColor, secondaryColor, saveType);
      }
      if (activeStep === 3) {
        await handleSavePreview();
      }
    } catch (error) {
      error instanceof Error &&
        Swal.fire({
          icon: 'error',
          text: error.message,
        });
    } finally {
      setLoading(false);
    }
  };

  const handleSavePreview = async () => {
    await domtoimage
      .toBlob(document.getElementById('flask-label-view') as HTMLElement)
      .then(async (dataUrl) => {
        getBase64(dataUrl);
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Ops...',
          text: error.message,
        });
      });
  };

  const handleSaveColors = (
    primaryColor: string,
    secondaryColor?: string,
    saveType?: string
  ) => {
    try {
      if (saveType === 'capsule') {
        setCapsuleColors({
          primary: primaryColor,
        });
        setPrimaryColor(DefaultColor);

        if (secondaryColor) {
          setCapsuleColors({
            primary: primaryColor,
            secondary: secondaryColor,
          });
          setPrimaryColor(DefaultColor);
          setSecondaryColor(DefaultColor);
        }
        return;
      }

      if (saveType === 'cover') {
        setCoverColor({
          primary: primaryColor,
        });
        setPrimaryColor(DefaultColor);
        return;
      }

      if (saveType === 'flask') {
        setFlaskColor({
          primary: primaryColor,
        });
        setPrimaryColor(DefaultColor);
        return;
      }

      if (saveType === 'flask-label') {
        setFlaskLabelColor({
          primary: primaryColor,
        });

        if (secondaryColor) {
          setFlaskLabelColor({
            primary: primaryColor,
            secondary: secondaryColor,
          });
        }
        return;
      }
    } catch (error) {
      error instanceof Error &&
        Swal.fire({
          icon: 'error',
          text: error.message,
        });
    }
  };
  return (
    <TitleAndColorBox>
      <TitleBox>
        <Text type="h5">{title}</Text>
      </TitleBox>
      <ColorsControlBox>
        {onlyPrimary ? (
          <PrimaryBox>
            <Text type="subtitle2">PRIMÁRIA</Text>
            <ColorsBox>
              <ColorPicker
                setPrimaryColor={setPrimaryColor}
                isPrimary={Boolean(isPrimary)}
              />
            </ColorsBox>
          </PrimaryBox>
        ) : (
          <Wrapper>
            {activeStep === 3 ? (
              <InputContent>
                <NameTitleBox>
                  <Text type="subtitle2">NOME</Text>
                </NameTitleBox>
                <StyledInput
                  id="name"
                  name="name"
                  label="Nome do produto"
                  onChange={({ target }) => setFlaskTitle(target.value)}
                  type="text"
                  inputProps={{ maxLength: 20 }}
                  sx={{ width: isMobileVersion ? '100%' : '450px' }}
                />
                <Text type="caption" sx={{ color: 'red' }}>
                  {String(flaskTitle).length >= 20
                    ? 'Limite máximo 20 characteres'
                    : undefined}
                </Text>
                <ColorNameTitleBox>
                  <Text type="subtitle2">COR DO NOME</Text>
                </ColorNameTitleBox>
                <ColorsBox>
                  <ColorPicker isTextColor={true} />
                </ColorsBox>
                <Divider />
              </InputContent>
            ) : null}

            <ColorsControlBox>
              <PrimaryBox>
                <Text type="subtitle2">{`${
                  activeStep === 3 ? 'FUNDO' : 'PRIMÁRIA'
                }`}</Text>
                <ColorsBox>
                  <ColorPicker
                    setPrimaryColor={setPrimaryColor}
                    isPrimary={Boolean(isPrimary)}
                  />
                </ColorsBox>
              </PrimaryBox>
              <SecondaryBox>
                <Text type="subtitle2">{`${
                  activeStep === 3 ? 'BORDA' : 'SECUNDÁRIA'
                }`}</Text>
                <ColorsBox>
                  <ColorPicker
                    setSecondaryColor={setSecondaryColor}
                    isPrimary={!isPrimary}
                  />
                </ColorsBox>
              </SecondaryBox>
            </ColorsControlBox>
          </Wrapper>
        )}
      </ColorsControlBox>

      {activeStep === 3 ? <ImagePanel /> : null}

      {activeStep && activeStep > 0 ? (
        <ButtonsBox>
          <BlackButton
            style={{ width: isMobileVersion ? '100%' : '202px' }}
            onClick={() => {
              handleBack();
            }}
          >
            VOLTAR
          </BlackButton>
          <ButtonLoading
            loading={loading}
            style={{ width: isMobileVersion ? '100%' : '202px' }}
            onClick={() => {
              handleNextStep();
            }}
          >
            CONTINUAR
          </ButtonLoading>
        </ButtonsBox>
      ) : (
        <ButtonLoading
          loading={loading}
          onClick={() => {
            handleNextStep();
          }}
          fullWidth
        >
          CONTINUAR
        </ButtonLoading>
      )}
    </TitleAndColorBox>
  );
};
