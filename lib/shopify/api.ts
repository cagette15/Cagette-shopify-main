// @ts-ignore
import { isShopifyError } from 'lib/type-guards';

const STOREFRONT_API_VERSION = '2023-01';

export function getStoreDomain() {
  return `https://cagette-bangkok.myshopify.com`;
}

export function getStorefrontApiUrl() {
  return `${getStoreDomain()}/api/${STOREFRONT_API_VERSION}/graphql.json`;
}

export function getPrivateTokenHeaders() {
  return { 'X-Shopify-Storefront-Access-Token': '7e7a672b261eddbab58a5ef3143e3e99' };
}

type ShopifyFetchParameters<Variables extends any> = {
  query: string;
  headers?: object;
  variables?: Variables;
  cache?: RequestCache;
  revalidate?: NextFetchRequestConfig['revalidate'];
};

type ShopifyFetchReturn<Data extends any> = {
  status: Response['status'];
  body: { data: Data };
};

export async function shopifyFetch<Data extends any, Variables extends any = undefined>({
  query,
  variables,
  headers = {},
  cache = 'force-cache',
  revalidate
}: ShopifyFetchParameters<Variables>): Promise<ShopifyFetchReturn<Data>> {
  try {
    const result = await fetch(getStorefrontApiUrl(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...getPrivateTokenHeaders(),
        ...headers
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables })
      }),
      cache,
      next: { revalidate }
    });

    const body = await result.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: result.status,
      body
    };
  } catch (e) {
    console.error(e);

    if (isShopifyError(e)) {
      throw {
        status: e.status || 500,
        message: e.message,
        query
      };
    }

    throw {
      error: e,
      query
    };
  }
}
