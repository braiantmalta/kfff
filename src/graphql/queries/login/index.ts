import { gql } from '@apollo/client';
import { UserFragment } from '../../fragments/user';

export const QUERY_USER_LOGIN = gql`
  query userLogin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        ...UserFragment
      }
    }
  }
  ${UserFragment}
`;
