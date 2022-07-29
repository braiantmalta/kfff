import { Wrapper } from '@components/common/htmlTags';
import { CSSProperties } from 'react';

type SecondaryFlaskTopProps = {
  secondaryColor?: string;
  style?: CSSProperties;
};

export const SecondaryFlaskTopLabel = ({
  secondaryColor,
  style,
}: SecondaryFlaskTopProps) => {
  return (
    <Wrapper style={style}>
      <svg
        width={201}
        height={18}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 9.862V0c17.457 12.457 194.516 9.343 201 0v9.343C188.032 19.723 24.938 21.8 0 9.862Z"
          fill={secondaryColor}
        />
      </svg>
    </Wrapper>
  );
};
