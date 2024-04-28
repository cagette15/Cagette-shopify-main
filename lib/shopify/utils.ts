export type PageInfo = {
  hasPreviousPage: boolean;
  startCursor: string;
  hasNextPage: boolean;
  endCursor: string;
};

export function buyerIpHeader(buyerIp: string | null) {
  if (!buyerIp) return {};

  return {
    'Shopify-Storefront-Buyer-IP': buyerIp
  };
}

export function shopifyId(model: string, id: string, accessToken?: string) {
  const queryString = accessToken ? `?customer_access_token=${accessToken}` : '';
  return `gid://shopify/${model}/${id}${queryString}`;
}

// get consistant id out of a gid://shopify://
export function shortId(weirdId: string) {
  const [, id] = weirdId.match(/^gid:\/\/shopify\/\w+\/(\w+)/) ?? [];

  if (!id) {
    throw new Error(`failed to extract short id from: "${weirdId}"`);
  }

  return id;
}

export function replaceIds<T extends { id: string }>(objs: T[]): T[] {
  objs.forEach(replaceId);
  return objs;
}

export function replaceId<T extends { id: string }>(obj: T): T {
  obj.id = shortId(obj.id);
  return obj;
}
