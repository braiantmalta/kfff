import { ImageAndColorsBox, ImageBox } from '../capsuleMaker/styles';
import { ColorPanel } from '../../colorPanel';
import { Cover } from '../cover';

export const CoverMaker = () => {
  return (
    <>
      <ImageAndColorsBox>
        <ImageBox>
          <Cover />
        </ImageBox>

        <ColorPanel title="Tampa" onlyPrimary={true} saveType="cover" />
      </ImageAndColorsBox>
    </>
  );
};
