import { gql } from '@apollo/client';

export const MUTATION_PROFILE_PICTURE = gql`
  mutation AddProfilePicture($picture: Upload!, $userId: Int!) {
    addProfilePicture(picture: $picture, user_id: $userId) {
      avatar_url
    }
  }
`;
