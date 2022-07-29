import { Permission } from '@graphql/types/permission';
import { PermissionUpdate } from '@components/dashboard/permissions/update';
import { AdminRoute } from '@components/dashboard/adminRoute';

type PermissionUpdateTemplateProps = {
  permission_id: Permission['id'];
};

export const PermissionUpdateTemplate = ({
  permission_id,
}: PermissionUpdateTemplateProps) => {
  return (
    <AdminRoute
      component={<PermissionUpdate permission_id={permission_id} />}
    />
  );
};
