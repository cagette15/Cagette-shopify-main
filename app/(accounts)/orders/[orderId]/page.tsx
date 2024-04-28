// DOC: https://shopify.dev/docs/api/storefront/2023-01/objects/Order
// DOC: https://shopify.dev/docs/api/storefront/2023-01/objects/OrderLineItem

import { getShopifyToken } from 'lib/next/session';
import { getOrder } from 'lib/shopify';
import { notFound } from 'next/navigation';

type OrderPageProps = {
  params: {
    orderId: string;
  };
};

export default async function OrderPage({ params }: OrderPageProps) {
  const accessToken = getShopifyToken();

  if (!accessToken) {
    notFound();
  }

  const order = await getOrder(accessToken, params.orderId);

  return (
    <main>
      <h1>Order #{params.orderId}</h1>
      <pre>
        <code>{JSON.stringify(order, null, 2)}</code>
      </pre>
    </main>
  );
}
