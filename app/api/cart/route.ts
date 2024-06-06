import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { addToCart, removeFromCart, updateCart, updateCartBuyerIdentity } from 'lib/shopify';
import { isShopifyError } from 'lib/type-guards';

function formatErrorMessage(err: Error): string {
  return JSON.stringify(err, Object.getOwnPropertyNames(err));
}

export async function POST(req: NextRequest): Promise<Response> {
  const cartId = cookies().get('cartId')?.value;
  const { merchandiseId, quantity } = await req.json();
  const customerAccessToken = cookies().get('customerAccessToken')?.value || '';
  const buyerIdentity = { customerAccessToken };
  if (!cartId?.length || !merchandiseId?.length) {
    return NextResponse.json({ error: 'Missing cartId or variantId' }, { status: 400 });
  }
  try {
    await addToCart(cartId, [{ merchandiseId, quantity: quantity ?? 1 }]);
    if(customerAccessToken){
      await updateCartBuyerIdentity(cartId, buyerIdentity);
    }
    return NextResponse.json({ status: 204 });
  } catch (e) {
    if (isShopifyError(e)) {
      console.log("errotr",e)
      return NextResponse.json({ message: formatErrorMessage(e.message) }, { status: e.status });
    }

    return NextResponse.json({ status: 500 });
  }
}

export async function PUT(req: NextRequest): Promise<Response> {
  const cartId = cookies().get('cartId')?.value;
  console.log("updateCart")
  try {
    const { variantId, quantity, lineId } = await req.json();

    if (!cartId || !variantId || !quantity || !lineId) {
      return NextResponse.json(
        { error: 'Missing cartId, variantId, lineId, or quantity' },
        { status: 400 }
      );
    }

    await updateCart(cartId, [
      {
        id: lineId,
        merchandiseId: variantId,
        quantity
      }
    ]);
    return NextResponse.json({ status: 204 });
  } catch (e) {
    console.log("errotr",e)
    if (isShopifyError(e)) {
      return NextResponse.json({ message: formatErrorMessage(e.message) }, { status: e.status });
    }

    return NextResponse.json({ message: 'Internal Server Error' },{ status: 500 });
  }
}

export async function DELETE(req: NextRequest): Promise<Response> {
  const cartId = cookies().get('cartId')?.value;
  console.log("removeFromCart")
  try {
    // const reqBody  = await req.json();
    // const { lineId  } = reqBody

    // const url = new URL(req.url);
    // const searchParams = url.searchParams;
    // const lineId = searchParams.get('lineId')

    const lineId = req.headers.get('X-line');
    console.log("req",lineId);
    if (!cartId || !lineId) {
      return NextResponse.json({ error: 'Missing cartId or lineId' }, { status: 400 });
    }

    await removeFromCart(cartId, [lineId]);
    return NextResponse.json({ status: 204 });
  } catch (e) {
    console.log("Delete Cart error :", e);
    if (isShopifyError(e)) {
      return NextResponse.json({ message: formatErrorMessage(e.message) }, { status: e.status });
    }

    return NextResponse.json({ message: 'Internal Server Error' },{ status: 500 });
  }
}
