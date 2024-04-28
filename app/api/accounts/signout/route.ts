import { ApiResponse, endpoint } from 'lib/next/endpoint';
import { shopifyTokenHeader } from 'lib/next/session';

export type SignoutApiEndpoint = ApiResponse<typeof POST>;

export const POST = endpoint(() => {
  return {
    success: true,
    data: '',
    headers: shopifyTokenHeader({
      accessToken: '',
      expiresAt: 'Thu, 01 Jan 1970 00:00:00 GMT'
    })
  };
});
