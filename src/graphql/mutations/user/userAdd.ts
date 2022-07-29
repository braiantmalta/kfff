import { gql } from '@apollo/client';
import { UserFragment } from '@graphql/fragments/user';

export const MUTATION_USER_ADD = gql`
  mutation UserAdd($fields: UserInput!) {
    userAdd(fields: $fields) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;
