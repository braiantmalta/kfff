import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@mui/material';

import { DashboardLayoutContent, LogoBox, HeaderMobileGroup } from './styles';
import { Logo } from '@components/common/logo';
import { ItemsNavbar } from '@utils/constants/itemsNavbar';
import { useTheme } from '@mui/material/styles';
import { Header } from './header';
import { NavbarMobile } from './navbar/navbarMobile';
import { Container } from '@components/common/container';
import { Footer } from './footer';

type DashboardLayoutProps = {
  children?: ReactNode;
  headers?: {
    id: number;
    route: string;
    title: string;
  }[];
  isSuccessPage?: boolean;
};

export const DashboardLayout = ({
  children,
  headers,
  isSuccessPage = false,
}: DashboardLayoutProps) => {
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
        <Header items={headers ? headers : ItemsNavbar} />
      )}
      <DashboardLayoutContent>
        <Container>{children}</Container>
        {isSuccessPage ? <Footer /> : undefined}
      </DashboardLayoutContent>
    </>
  );
};
