import { gql } from '@apollo/client';
import { PermissionFragment } from '@graphql/fragments/permission';

export const MUTATION_PERMISSION_ADD = gql`
  mutation PermissionsAdd($fields: PermissionInputInterface!) {
    permissionsAdd(fields: $fields) {
      ...PermissionFragment
    }
  }
  ${PermissionFragment}
`;
