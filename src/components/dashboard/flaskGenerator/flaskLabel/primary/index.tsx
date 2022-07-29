import { Wrapper } from '@components/common/htmlTags';
import { CSSProperties } from 'react';

type PrimaryFlaskProps = {
  primaryColor?: string;
  style?: CSSProperties;
};

export const PrimaryFlaskLabel = ({
  primaryColor,
  style,
}: PrimaryFlaskProps) => {
  return (
    <Wrapper style={style}>
      <svg
        width={201}
        // height={290}
        height={269}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M.499 251.386 0 0c17.157 12.37 159.104 9.976 201 0l-.998 251.386c-36.309 26.336-170.076 20.451-199.503 0Z"
          fill={primaryColor}
        />
      </svg>
    </Wrapper>
  );
};
