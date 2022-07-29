import { IdBox, Paper, TextBox, TitleBox } from './styles';
import { Text } from '@components/common/text';

type ManufacturingCardProps = {
  id: number;
  title: string;
  text: string;
  key: number;
};

export const ManufacturingCard = ({
  id,
  title,
  text,
  key,
}: ManufacturingCardProps) => {
  return (
    <Paper key={key}>
      <IdBox>
        <Text>{id}</Text>
      </IdBox>
      <TitleBox>
        <Text type="h5" style={{ color: '#FFF' }}>
          <strong>{title}</strong>
        </Text>
      </TitleBox>
      <TextBox>
        <Text type="body1" style={{ color: '#FFF' }}>
          {text}
        </Text>
      </TextBox>
    </Paper>
  );
};
