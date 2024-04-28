import { HeaderTheDeli } from 'components/the-deli/header';
import Head from 'next/head';
export const runtime = 'edge';

export const metadata = {
  title: 'Cagette Canteen & Deli Authentic French Cuisine in Bangkok',
  description:
    'Cagette is a French restaurant in Bangkok that offers authentic French cuisine made with fresh, seasonal ingredients. The restaurant is named after the wooden crates used to transport fruits, vegetables, and other fresh produce, and it pays tribute to the messenger of taste.',
  openGraph: {
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(process.env.SITE_NAME || '')}`,
        width: 1200,
        height: 630
      }
    ],
    type: 'website'
  }
};

export default async function DeliPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <HeaderTheDeli />
    </>
  );
}
