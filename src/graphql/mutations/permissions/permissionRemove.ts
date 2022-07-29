import { gql } from '@apollo/client';

export const MUTATION_PERMISSION_REMOVE = gql`
  mutation PermissionsRemove($id: Int!) {
    permissionsRemove(id: $id) {
      removed
    }
  }
`;
