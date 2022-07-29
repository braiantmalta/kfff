import { CSSProperties } from 'react';

import { Wrapper } from '@components/common/htmlTags';

type MiniCapsuleBackgroundProps = {
  style?: CSSProperties;
};

export const MiniCapsuleBackground = ({
  style,
}: MiniCapsuleBackgroundProps) => {
  return (
    <Wrapper style={style}>
      <img src="/img/png/mini-capsule/mini-capsule-background.png" />
    </Wrapper>
  );
};
