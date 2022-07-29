import { gql } from '@apollo/client';
import { UserFragment } from '@graphql/fragments/user';

export const MUTATION_USER_UPDATE = gql`
  mutation userUpdate($id: Int!, $fields: UserUpdateInput!) {
    userUpdate(fields: $fields, id: $id) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;
