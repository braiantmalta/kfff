import { Dashboard } from '@components/dashboard';
import { DashboardLayout } from '@components/dashboard/layout';
// import { PrivateRoute } from '@components/dashboard/privateRoute';

export const DashboardTemplate = () => {
  // return <PrivateRoute component={<Dashboard />} />;
  return (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  );
};
