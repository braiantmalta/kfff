import { Dispatch, SetStateAction, useContext } from 'react';

import { DefaultColor } from '@utils/constants/capsuleColors';
import { ColorInput, ColorWrapper } from './styles';
import { FlaskMakerContext } from '@context/flaskMaker';

type ColorCircleProps = {
  setPrimaryColor?: Dispatch<SetStateAction<string>>;
  setSecondaryColor?: Dispatch<SetStateAction<string>>;
  isPrimary?: boolean;
  isTextColor?: boolean;
};

export const ColorPicker = ({
  setPrimaryColor,
  setSecondaryColor,
  isPrimary,
  isTextColor,
}: ColorCircleProps) => {
  const { setFlaskTitleColor } = useContext(FlaskMakerContext);

  const handleColor = (value: any) => {
    if (isTextColor) {
      setFlaskTitleColor(value);
      return;
    }
    if (isPrimary) {
      setPrimaryColor && setPrimaryColor(value);
      return;
    } else {
      setSecondaryColor && setSecondaryColor(value);
      return;
    }
  };
  return (
    <ColorWrapper>
      <ColorInput
        id="color-picker"
        type="color"
        onChange={(e: any) => {
          handleColor(e.target.value);
        }}
        defaultValue={DefaultColor}
      />
    </ColorWrapper>
  );
};
