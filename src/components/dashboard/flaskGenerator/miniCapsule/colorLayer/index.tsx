import { CSSProperties } from 'react';

import { Wrapper } from '@components/common/htmlTags';

type MiniCapsuleColorLayerProps = {
  primaryColor?: string;
  secondaryColor?: string;
  style?: CSSProperties;
};

export const MiniCapsuleColorLayer = ({
  primaryColor,
  secondaryColor,
  style,
}: MiniCapsuleColorLayerProps) => {
  return (
    <Wrapper style={style}>
      <svg
        width={184}
        height={130}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M41.555 90.517c-31.108-3.886-31.704-46.332 0-50.517h47.778c-1.07 24.87-.446 44.14 0 50.667l-47.778-.15Z"
          fill={primaryColor}
          fillOpacity={0.6}
        />
        <path
          d="M136.204 89.855c30.546-3.784 31.131-45.114 0-49.188H89.29c-.594 1.181-1.039 45.345 0 49.333.89-.295 46.914-.145 46.914-.145Z"
          fill={secondaryColor}
          fillOpacity={0.6}
        />
      </svg>
    </Wrapper>
  );
};
