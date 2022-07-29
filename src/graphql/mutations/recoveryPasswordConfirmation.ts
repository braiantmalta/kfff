import { gql } from '@apollo/client';

export const MUTATION_RECOVERY_PASSWORD_CONFIRMATION = gql`
  mutation RecoveryPasswordConfirmation(
    $fields: ChangePasswordConfirmationInputInterface!
  ) {
    recoveryPasswordConfirmation(fields: $fields)
  }
`;
