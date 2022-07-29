import { gql } from '@apollo/client';

export const QUERY_USER_CHANGE_EMAIL = gql`
  query ChangeEmail($fields: ChangeEmailInputInterface!) {
    changeEmail(fields: $fields)
  }
`;
