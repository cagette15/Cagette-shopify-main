import { Connection } from 'lib/graphql/types';

export const removeEdgesAndNodes = <T extends any>(array: Connection<T>) => {
  return array.edges.map((edge) => edge?.node);
};
