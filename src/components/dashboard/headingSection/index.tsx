import { ReactNode } from 'react';
import { Button } from '@mui/material';
import { Text } from '@components/common/text';
import { CustomerContainer, Title, Link, AddIcon } from './styles';

type HeadingSectionProps = {
  title: string;
  icon?: ReactNode;
  path: string;
  buttonText: string;
};

export const HeadingSection = ({
  title,
  icon,
  path,
  buttonText,
}: HeadingSectionProps) => {
  return (
    <CustomerContainer>
      <Text type="h6" sx={Title}>
        {title}
      </Text>
      <Link href={path}>
        <Button variant="contained" size="large">
          <AddIcon sx={{ color: 'inherit' }}>{icon}</AddIcon>
          {buttonText}
        </Button>
      </Link>
    </CustomerContainer>
  );
};
