import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@mui/material';

import { DashboardLayoutContent, LogoBox, HeaderMobileGroup } from '../styles';
import { Logo } from '@components/common/logo';
import { ItemsNavbarPage } from '@utils/constants/itemsNavbar';
import { useTheme } from '@mui/material/styles';
import { Header } from '../header';
import { NavbarMobile } from '../navbar/navbarMobile';
import { AbsoluteBlackFooter, BlackFooter, WhiteFooter } from '../pageFooter';

type PageLayoutProps = {
  children?: ReactNode;
  headers?: {
    id: number;
    route: string;
    title: string;
  }[];
  absoluteBlackFooter?: boolean;
  blackFooter?: boolean;
  whiteFooter?: boolean;
};

export const PageLayout = ({
  children,
  headers,
  absoluteBlackFooter,
  blackFooter,
  whiteFooter,
}: PageLayoutProps) => {
  const theme = useTheme();
  const isTabletVersion = useMediaQuery(theme.breakpoints.down('md'));
  const Router = useRouter();

  return (
    <>
      {isTabletVersion ? (
        <HeaderMobileGroup>
          <LogoBox>
            <Logo
              url="/img/png/logo.png"
              style={{ height: '68px' }}
              onClick={() => Router.push('/')}
            />
          </LogoBox>
          <NavbarMobile />
        </HeaderMobileGroup>
      ) : (
        <Header items={headers ? headers : ItemsNavbarPage} />
      )}
      <DashboardLayoutContent>
        {children}
        {absoluteBlackFooter ? <AbsoluteBlackFooter /> : undefined}
        {blackFooter ? <BlackFooter /> : undefined}
        {whiteFooter ? <WhiteFooter /> : undefined}
      </DashboardLayoutContent>
    </>
  );
};
