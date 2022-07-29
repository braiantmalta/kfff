import { gql } from '@apollo/client';
import { LeadFragment } from '@graphql/fragments/lead';

export const MUTATION_CREATE_LEAD = gql`
  mutation CreateLead($fields: LeadInput!) {
    createLead(fields: $fields) {
      ...LeadFragment
    }
  }
  ${LeadFragment}
`;
