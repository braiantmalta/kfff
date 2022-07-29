import { gql } from '@apollo/client';

export const MUTATION_USER_REMOVE = gql`
  mutation UserRemove($id: Int!) {
    userRemove(id: $id) {
      removed
    }
  }
`;
