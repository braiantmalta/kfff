import { PermissionUpdateTemplate } from '@template/permissions/update';
import { useRouter } from 'next/router';

export default function PermissionUpdatePage() {
  const { isReady, query } = useRouter();

  return isReady ? (
    <PermissionUpdateTemplate permission_id={Number(query.id)} />
  ) : null;
}
