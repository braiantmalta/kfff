import { Text } from '@components/common/text';
import { Link } from '@mui/material';
import { ReactNode } from 'react';

type BlackLinkProps = {
  title?: string;
  link: string;
  key?: number;
  children?: ReactNode;
};

export const BlackLink = ({ title, link, key, children }: BlackLinkProps) => {
  return (
    <Link underline="none" href={`${link}`} key={key}>
      <Text
        type="body1"
        style={{
          color: '#1A1A1A',
        }}
      >
        {title || children}
      </Text>
    </Link>
  );
};
