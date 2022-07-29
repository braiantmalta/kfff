import { gql } from '@apollo/client';

export const QUERY_USER_CHANGE_PASSWORD = gql`
  query ChangePassword($fields: ChangePasswordInputInterface!) {
    changePassword(fields: $fields)
  }
`;
