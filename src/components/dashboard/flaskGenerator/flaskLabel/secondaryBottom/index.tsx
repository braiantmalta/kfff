import { Wrapper } from '@components/common/htmlTags';
import { CSSProperties } from 'react';

type SecondaryFlaskBottomProps = {
  secondaryColor?: string;
  style?: CSSProperties;
};

export const SecondaryFlaskBottomLabel = ({
  secondaryColor,
  style,
}: SecondaryFlaskBottomProps) => {
  return (
    <Wrapper style={style}>
      <svg
        width={200}
        // height={32}
        height={29}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 8.106V0c25.2 22.232 181.5 20.843 200 0v8.106c-17.5 26.053-179 24.316-200 0Z"
          fill={secondaryColor}
        />
      </svg>
    </Wrapper>
  );
};
