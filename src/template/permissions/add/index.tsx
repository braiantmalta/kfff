import { NewPermissions } from '@components/dashboard/permissions/add';
import { AdminRoute } from '@components/dashboard/adminRoute';

export const NewPermissionTemplate = () => {
  return <AdminRoute component={<NewPermissions />} />;
};
