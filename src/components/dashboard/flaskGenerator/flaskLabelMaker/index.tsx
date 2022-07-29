import { ImageAndColorsBox, ImageBox } from '../capsuleMaker/styles';
import { ColorPanel } from '../../colorPanel';
import { FlaskLabel } from '../flaskLabel';

export const FlaskLabelMaker = () => {
  return (
    <>
      <ImageAndColorsBox>
        <ImageBox>
          <FlaskLabel />
        </ImageBox>

        <ColorPanel title="Rótulo" saveType="flask-label" />
      </ImageAndColorsBox>
    </>
  );
};
