import { Text } from '@components/common/text';
import { CSSProperties, ReactNode } from 'react';

type SubtitleTextProps = {
  children: ReactNode;
  textAlign?: 'center' | 'right' | 'left' | 'inherit' | 'justify';
  style?: CSSProperties;
};

export const SubtitleText = ({
  children,
  textAlign,
  style,
}: SubtitleTextProps) => {
  return (
    <Text style={{ fontSize: '22px' }} textAlign={textAlign} sx={style}>
      {children}
    </Text>
  );
};
