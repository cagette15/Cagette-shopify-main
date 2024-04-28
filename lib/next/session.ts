import { cookies } from 'next/headers';

export const CUSTOMER_ACCESS_TOKEN_COOKIE = 'customerAccessToken';

export function cookieString(key: string, value: string, expiresAt: string) {
  return `${key}=${value}; Path=/; SameSite=None; Secure; ExpiresAt=${expiresAt}`;
}

export function shopifyTokenHeader({
  accessToken,
  expiresAt
}: {
  accessToken: string;
  expiresAt: string;
}) {
  return {
    'Set-Cookie': cookieString(CUSTOMER_ACCESS_TOKEN_COOKIE, accessToken, expiresAt)
  };
}

export function getShopifyToken() {
  return cookies().get(CUSTOMER_ACCESS_TOKEN_COOKIE)?.value;
}
