import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import { ListItem, ListItemText, SwipeableDrawer } from '@mui/material';
import { Close } from '@mui/icons-material';

import { ListWrapper, Box, ButtonStyles, Wrapper } from './styles';
import { ItemsNavbar } from '@utils/constants/itemsNavbar';
import { MobileMenu } from '../mobileMenu';
import { BlackButton } from '@components/common/buttons';

type Anchor = 'right';

export const NavbarMobile = () => {
  const [openDrawer, setOpenDrawer] = useState({
    right: false,
  });
  const router = useRouter();
  // const theme = useTheme();

  const toggleDrawer = (anchor: Anchor, open: boolean) => {
    setOpenDrawer({ ...openDrawer, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <ListWrapper>
      <Box role="presentation" onKeyDown={() => toggleDrawer(anchor, false)}>
        <ListItem onClick={() => toggleDrawer(anchor, false)}>
          <ListItemText
            primary={
              <Close
                sx={{
                  color: (theme) => theme.palette.text.primary,
                }}
              />
            }
          />
        </ListItem>

        {ItemsNavbar.map((itemNavbar, index) => (
          <ListItem
            key={index}
            onClick={() => toggleDrawer(anchor, false)}
            sx={ButtonStyles}
          >
            <ListItemText
              onClick={() => router.push(itemNavbar.route)}
              primary={itemNavbar.title}
            />
          </ListItem>
        ))}
        <ListItem>
          <BlackButton fullWidth>REGISTRAR-SE</BlackButton>
        </ListItem>
      </Box>
    </ListWrapper>
  );

  return (
    <Wrapper>
      {(['right'] as const).map((anchor: Anchor) => (
        <Fragment key={anchor}>
          <MobileMenu onClick={() => toggleDrawer(anchor, true)} />

          <SwipeableDrawer
            anchor={anchor}
            open={openDrawer[anchor]}
            onClose={() => toggleDrawer(anchor, false)}
            onOpen={() => toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </Fragment>
      ))}
    </Wrapper>
  );
};
