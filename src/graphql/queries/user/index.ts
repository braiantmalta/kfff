import { gql } from '@apollo/client';
import { UserFragment } from '@graphql/fragments/user';

export const QUERY_USERS = gql`
  query UserProfile {
    users {
      ...UserFragment
    }
  }
  ${UserFragment}
`;

export const QUERY_USER_PROFILE = gql`
  query UserProfile($token: String!) {
    userProfile(token: $token) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;

export const QUERY_USER = gql`
  query users($id: Int) {
    users(id: $id) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;
