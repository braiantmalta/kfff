import { Wrapper } from '@components/common/htmlTags';
import { CSSProperties } from 'react';

type ImageBackgroundCoverProps = {
  style?: CSSProperties;
  flaskCoverPicture?: string;
};

export const ImageBackgroundCover = ({
  style,
  flaskCoverPicture,
}: ImageBackgroundCoverProps) => {
  return (
    <Wrapper style={style}>
      <img
        src={`${flaskCoverPicture || undefined}`}
        style={{
          width: '201.2px',
          height: '268px',
          objectFit: 'cover',
          borderRadius: '0px 0px 50% 50%/20px',
        }}
      />
    </Wrapper>
  );
};
