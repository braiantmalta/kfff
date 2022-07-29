import { IconBox, Paper, TextBox, TitleBox } from './styles';
import { Text } from '@components/common/text';

type QualificationCardProps = {
  icon: string;
  title: string;
  text: string;
  key: number;
};

export const QualificationCard = ({
  icon,
  title,
  text,
  key,
}: QualificationCardProps) => {
  return (
    <Paper key={key}>
      <IconBox src={icon} />
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
