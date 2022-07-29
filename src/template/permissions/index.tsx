import { Permissions } from '@components/dashboard/permissions';
import { AdminRoute } from '@components/dashboard/adminRoute';

export const PermissionsTemplate = () => {
  return <AdminRoute component={<Permissions />} />;
};
