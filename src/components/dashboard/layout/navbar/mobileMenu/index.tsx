import { Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material';

type MobileMenuProps = {
  menuColor?: string;
  onClick?: () => any;
};

export const MobileMenu = ({
  menuColor = 'black',
  onClick,
}: MobileMenuProps) => {
  return (
    <IconButton style={{ marginRight: '20px' }}>
      <Menu sx={{ color: `${menuColor}` }} onClick={onClick} />
    </IconButton>
  );
};
