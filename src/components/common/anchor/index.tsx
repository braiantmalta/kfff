import { Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

type AnchorProps = {
  href?: string;
  label: any;
  underline?: 'always' | 'none' | 'hover';
  target?: '_blank' | '_parent' | '_self' | '_top';
  rel?: string;
  color?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
  onClick?: () => void;
};

export const Anchor = ({
  href,
  rel,
  target,
  underline = 'always',
  label,
  color,
  fontSize,
  fontWeight,
  onClick,
}: AnchorProps) => {
  const theme = useTheme();

  return (
    <Link
      href={href}
      underline={underline}
      target={target}
      rel={rel}
      color={color ? color : theme.palette.info.main}
      variant="body2"
      fontSize={fontSize}
      fontWeight={fontWeight}
      onClick={onClick}
      sx={!href ? { cursor: 'pointer' } : {}}
    >
      {label}
    </Link>
  );
};
