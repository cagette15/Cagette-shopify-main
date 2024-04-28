import type { MenuItem } from '@shopify/hydrogen-react/storefront-api-types';

import { getStoreDomain, shopifyFetch } from 'lib/shopify/api';

import { SimpleMenuItem } from './utils';

const QUERY = /* GraphQL */ `
  query getMenu($handle: String!) {
    menu(handle: $handle) {
      items {
        title
        url
      }
    }
  }
`;

type Variables = { handle: string };

type Returns = {
  menu: {
    items: Pick<MenuItem, 'title' | 'url'>[];
  };
};

export async function getMenu(handle: string) {
  const res = await shopifyFetch<Returns, Variables>({
    query: QUERY,
    variables: {
      handle
    }
  });

  const storeDomain = getStoreDomain();

  const menuItems: SimpleMenuItem[] = res.body.data.menu.items.map(({ title, url }) => ({
    title,
    path: url!.replace(storeDomain, '').replace('/collections', '/search').replace('/pages', '')
  }));

  return menuItems;
}
