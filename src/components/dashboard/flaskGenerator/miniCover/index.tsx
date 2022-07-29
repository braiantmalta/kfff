import { CSSProperties } from 'react';

import { Wrapper } from '@components/common/htmlTags';

type MiniCoverProps = {
  primaryColor: string;
  style?: CSSProperties;
};

export const MiniCover = ({ primaryColor, style }: MiniCoverProps) => {
  return (
    <Wrapper sx={{ opacity: 0.5 }} style={style}>
      <svg
        width={146}
        height={58}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M144 2.071c-6.8-2.8-96.167-2.166-140-1.5-3.6.8-3.5 6.334-3 9-.4 0-.833.667-1 1 .167 13.167.5 39.7.5 40.5 0 .8.333 1 .5 1v3.5c6.4 2.8 91.333 2.5 133 2 4.4 0 9.167-1.333 11-2v-3c.4 0 .833-.666 1-1v-41.5c0-.4-.667-.5-1-.5 0-5.2-.667-7.166-1-7.5Z"
          fill={primaryColor}
        />
      </svg>
    </Wrapper>
  );
};
