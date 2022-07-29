import { Wrapper } from '@components/common/htmlTags';
import { CSSProperties } from 'react';

type LogoCoverProps = {
  style?: CSSProperties;
  flaskLogoPicture?: string;
};

export const LogoCover = ({ style, flaskLogoPicture }: LogoCoverProps) => {
  return (
    <Wrapper style={style}>
      <img
        src={`${flaskLogoPicture || undefined}`}
        style={{
          width: '80px',
          height: '80px',
          objectFit: 'contain',
        }}
      />
    </Wrapper>
  );
};
