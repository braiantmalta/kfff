import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@mui/material';

import { LayoutContent, LogoBox, HeaderMobileGroup } from './styles';
import { Logo } from '@components/common/logo';
import { ItemsNavbar } from '@utils/constants/itemsNavbar';
import { useTheme } from '@mui/material/styles';
import { Header } from '../header';
import { NavbarMobile } from './navbarMobile';

type LayoutProps = {
  children?: ReactNode;
  headers?: {
    id: number;
    route: string;
    title: string;
  }[];
};

export const Layout = ({ children, headers }: LayoutProps) => {
  const theme = useTheme();
  const isMobileVersion = useMediaQuery(theme.breakpoints.down('sm'));
  const Router = useRouter();
  return (
    <>
      {isMobileVersion ? (
        <HeaderMobileGroup>
          <LogoBox>
            <Logo url="/img/png/logo.png" onClick={() => Router.push('/')} />
          </LogoBox>
          <NavbarMobile />
        </HeaderMobileGroup>
      ) : (
        <Header items={headers ? headers : ItemsNavbar} />
      )}
      <LayoutContent>{children}</LayoutContent>
    </>
  );
};
