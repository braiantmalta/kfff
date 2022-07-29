import { gql } from '@apollo/client';
import { PermissionFragment } from '@graphql/fragments/permission';

export const MUTATION_PERMISSION_UPDATE = gql`
  mutation PermissionsUpdate(
    $fields: PermissionUpdateInputInterface!
    $id: Int!
  ) {
    permissionsUpdate(fields: $fields, id: $id) {
      ...PermissionFragment
    }
  }

  ${PermissionFragment}
`;
