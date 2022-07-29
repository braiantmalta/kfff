import { gql } from '@apollo/client';

export const MUTATION_CHANGE_EMAIL_CONFIRMATION = gql`
  mutation ChangeEmailConfirmation(
    $fields: ChangeEmailConfirmationInputInterface!
  ) {
    changeEmailConfirmation(fields: $fields)
  }
`;
