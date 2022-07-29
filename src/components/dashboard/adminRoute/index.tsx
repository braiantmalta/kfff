import { Login } from '@components/web/auth/login';
import { DashboardLayout } from '@components/dashboard/layout';
import { AuthContext } from '@context/authentication';
import { ReactNode, useContext } from 'react';
import { Dashboard } from '../';

type AdminRouteProps = {
  component: ReactNode;
};

export const AdminRoute = ({ component }: AdminRouteProps) => {
  const { verifyLoggedUser, loggedUser: user } = useContext(AuthContext);
  const isVerified = verifyLoggedUser();

  const isAdmin = isVerified && user?.roles[0].name === 'ADMIN';

  if (isAdmin) {
    return <DashboardLayout>{component}</DashboardLayout>;
  } else if (isVerified) {
    return (
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    );
  } else {
    return <Login />;
  }
};
