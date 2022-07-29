import { ReactNode, useContext } from 'react';
import { Login } from '@components/web/auth/login';
import { DashboardLayout } from '@components/dashboard/layout';
import { AuthContext } from '@context/authentication';

type PrivateRouteProps = {
  component: ReactNode;
  noLayout?: boolean;
};

export const PrivateRoute = ({
  component,
  noLayout = false,
}: PrivateRouteProps) => {
  const { verifyLoggedUser } = useContext(AuthContext);
  const isVerified = verifyLoggedUser();

  if (noLayout) {
    return isVerified ? <>{component}</> : <Login />;
  } else {
    return isVerified ? (
      <DashboardLayout>{component}</DashboardLayout>
    ) : (
      <Login />
    );
  }
};
