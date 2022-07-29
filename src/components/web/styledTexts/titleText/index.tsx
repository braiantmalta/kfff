import { Text } from '@components/common/text';
import { CSSProperties, ReactNode } from 'react';

type TitleTextProps = {
  children: ReactNode;
  textAlign?: 'center' | 'right' | 'left' | 'inherit' | 'justify';
  style?: CSSProperties;
};

export const TitleText = ({ children, textAlign, style }: TitleTextProps) => {
  return (
    <Text type="h3" textAlign={textAlign} style={style}>
      <strong>{children}</strong>
    </Text>
  );
};
