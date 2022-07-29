import { Text } from '@components/common/text';
import { ReactNode } from 'react';
import { LabelTitleBox } from './styles';

type LabelTitleProps = {
  flaskTitleColor: string;
  flaskTitle: string;
  children?: ReactNode;
};

export const LabelTitle = ({
  flaskTitleColor,
  flaskTitle,
  children,
}: LabelTitleProps) => {
  return (
    <LabelTitleBox>
      <Text type="h5" style={{ color: `${flaskTitleColor}` }}>
        <strong>{flaskTitle || children}</strong>
      </Text>
    </LabelTitleBox>
  );
};
