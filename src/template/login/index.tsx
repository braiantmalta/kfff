import { Dashboard } from '@components/dashboard';
import { DashboardLayout } from '@components/dashboard/layout';
import { Login } from '@components/web/auth/login';
import { AuthContext } from '@context/authentication';
import { useContext } from 'react';

export const LoginTemplate = () => {
  const { verifyLoggedUser } = useContext(AuthContext);
  const isVerified = verifyLoggedUser();

  return isVerified ? (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  ) : (
    <Login />
  );
};
