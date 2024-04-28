// DOC: https://shopify.dev/docs/api/storefront/2023-01/objects/Order
// DOC: https://shopify.dev/docs/api/storefront/2023-01/objects/OrderLineItem

import { getShopifyToken } from 'lib/next/session';
import { PageInfo, getOrdersNext, getOrdersPrev } from 'lib/shopify';
import { SimpleOrder } from 'lib/shopify/orders/utils';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type OrdersPageProps = {
  searchParams?: {
    after?: string;
    before?: string;
  };
};

export default async function OrderPage({ searchParams }: OrdersPageProps) {
  const accessToken = getShopifyToken();

  if (!accessToken) {
    notFound();
  }

  let orders: SimpleOrder[];
  let pageInfo: PageInfo;

  if (searchParams?.before) {
    // navigate backward
    const res = await getOrdersPrev(accessToken, searchParams.before);
    orders = res.orders;
    pageInfo = res.pageInfo;
  } else {
    // navigate forward (or default)
    const res = await getOrdersNext(accessToken, searchParams?.after);
    orders = res.orders;
    pageInfo = res.pageInfo;
  }

  return (
    <main>
      <div className="container mx-auto py-8">
        <h1 className="mb-4 text-2xl font-bold">Orders</h1>
        {orders.length === 0 && <p>You never made any orders, start now!</p>}
        {orders.map((order) => (
          <div key={order.id} className="mb-4 rounded bg-gray-100 p-4 shadow">
            <h2 className="mb-2 text-xl font-bold">Order #{order?.name}</h2>
            <p className="mb-2">Status: {order?.financialStatus}</p>
            <p className="mb-2">Email: {order?.email}</p>
            <p className="mb-2">
              Total Price: {order?.totalPrice?.amount} {order?.totalPrice?.currencyCode}
            </p>
            <h3 className="mb-2 text-lg font-bold">Line Items:</h3>
            <ul className="ml-4 list-inside list-disc">
              {(order?.lineItems ?? []).map((lineItem, index) => (
                <li key={index} className="mb-2">
                  <span className="font-bold">{lineItem?.title}</span> - Quantity:{' '}
                  <span className="font-bold">{lineItem?.quantity}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        {pageInfo?.hasPreviousPage && (
          <Link href={`/orders?before=${pageInfo?.startCursor}`}>Previous page</Link>
        )}
        {pageInfo?.hasNextPage && (
          <Link href={`/orders?after=${pageInfo?.endCursor}`}>Next page</Link>
        )}
      </div>
    </main>
  );
}
