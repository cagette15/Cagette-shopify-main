import { Customer } from '@shopify/hydrogen-react/storefront-api-types';

export const customerFragment = /* GraphQL */ `
  fragment customer on Customer {
    acceptsMarketing
    createdAt
    displayName
    email
    firstName
    id
    lastName
    numberOfOrders
    phone
    updatedAt
  }
`;

export type CustomerFragment = Pick<
  Customer,
  | 'acceptsMarketing'
  | 'createdAt'
  | 'displayName'
  | 'email'
  | 'firstName'
  | 'id'
  | 'lastName'
  | 'numberOfOrders'
  | 'phone'
  | 'updatedAt'
>;
