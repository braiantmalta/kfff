import { ImageAndColorsBox, ImageBox } from '../capsuleMaker/styles';
import { ColorPanel } from '../../colorPanel';
import { Flask } from '../flask';

export const FlaskMaker = () => {
  return (
    <>
      <ImageAndColorsBox>
        <ImageBox>
          <Flask />
        </ImageBox>

        <ColorPanel title="Frasco" onlyPrimary={true} saveType="flask" />
      </ImageAndColorsBox>
    </>
  );
};
