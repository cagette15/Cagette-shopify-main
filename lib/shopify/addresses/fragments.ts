export const mailingAddressFragment = /* GraphQL */ `
  fragment mailingAddress on MailingAddress {
    address1
    address2
    city
    company
    country
    firstName
    id
    lastName
    phone
    province
    zip
  }
`;

export type MailingAddressFragment = {
  address1: string;
  address2: string;
  city: string;
  company: string;
  country: string;
  firstName: string;
  id: string;
  lastName: string;
  phone: string;
  province: string;
  zip: string;
};
