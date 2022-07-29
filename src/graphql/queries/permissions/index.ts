import { gql } from '@apollo/client';
import { PermissionFragment } from '@graphql/fragments/permission';

export const QUERY_PERMISSIONS = gql`
  query Permissions {
    permissions {
      ...PermissionFragment
    }
  }
  ${PermissionFragment}
`;

export const QUERY_PERMISSION = gql`
  query Permissions($id: Int) {
    permissions(id: $id) {
      ...PermissionFragment
    }
  }
  ${PermissionFragment}
`;
