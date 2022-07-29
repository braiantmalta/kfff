import { gql } from '@apollo/client';

export const LeadFragment = gql`
  fragment LeadFragment on LeadSchema {
    id
    image_preview
    email
    name
    phone
    contact_via_whatsapp
  }
`;
