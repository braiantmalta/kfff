import { gql } from '@apollo/client';

export const QUERY_USER_RECOVERY_PASSWORD = gql`
  query RecoveryPassword($fields: ChangePasswordInputInterface!) {
    recoveryPassword(fields: $fields)
  }
`;
