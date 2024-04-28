/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

const interRegular = fetch(new URL('./Inter-Regular.ttf', import.meta.url)).then((res) =>
  res.arrayBuffer()
);

const interBold = fetch(new URL('./Inter-Bold.ttf', import.meta.url)).then((res) =>
  res.arrayBuffer()
);

export async function GET(req: NextRequest): Promise<Response | ImageResponse> {
  try {
    const [regularFont, boldFont] = await Promise.all([interRegular, interBold]);

    const { searchParams } = new URL(req.url);

    const title = searchParams.has('title')
      ? searchParams.get('title')?.slice(0, 100)
      : process.env.SITE_NAME;

    return new ImageResponse(
      (
        <div tw="flex h-full w-full flex-col items-center justify-center bg-black">
          <img
            src="https://cdn.shopify.com/s/files/1/0762/8763/9861/files/logo_3d_new.jpg?v=1687777495"
            alt="website image"
          />

          <div tw="mt-12 text-6xl text-white font-bold">{title}</div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: regularFont,
            style: 'normal',
            weight: 400
          },
          {
            name: 'Inter',
            data: boldFont,
            style: 'normal',
            weight: 700
          }
        ]
      }
    );
  } catch (e) {
    if (!(e instanceof Error)) throw e;

    console.log(e.message);
    return new Response(`Failed to generate the image`, {
      status: 500
    });
  }
}
