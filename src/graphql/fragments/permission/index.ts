import { gql } from '@apollo/client';

export const PermissionFragment = gql`
  fragment PermissionFragment on PermissionSchema {
    id
    resource {
      id
      name
      description
    }
    role {
      id
      name
    }
    can_create
    can_read
    can_update
    can_delete
  }
`;
