import { ImageAndColorsBox, ImageBox } from './styles';
import { Capsule } from '../capsule';
import { ColorPanel } from '../../colorPanel';

export const CapsuleMaker = () => {
  return (
    <>
      <ImageAndColorsBox>
        <ImageBox>
          <Capsule />
        </ImageBox>

        <ColorPanel title="Cápsula" saveType="capsule" />
      </ImageAndColorsBox>
    </>
  );
};
