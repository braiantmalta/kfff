import { gql } from '@apollo/client';

export const UserFragment = gql`
  fragment UserFragment on UserSchema {
    id
    name
    email
    birth_date
    avatar_url
    cpf
    roles {
      id
      name
    }
    contacts {
      id
      name
      number
    }
    address {
      additional_info
      city
      country
      created_at
      id
      neighborhood
      number
      street
      uf
      zip_code
      updated_at
    }
  }
`;
