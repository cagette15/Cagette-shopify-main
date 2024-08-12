import HomeSliderPage from 'components/Home/homesliderpage';
import Head from 'next/head';
export const runtime = 'edge';

export const metadata = {
  title: 'Cagette: Authentic French Cuisine in Bangkok',
  description:
    'Cagette Canteen & Deli is the online shop for French gourmet products in Bangkok. The e-shop offers a wide variety of cheeses, charcuterie, pastries, and wines, all of which are imported from France. The staff is knowledgeable and helpful, and they can help you find the perfect products for your needs.',

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

export default async function HomePage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="google-site-verification" content="jU4az3_HFc7JcxHtJ18OR_Jt1HrIMtRVFQgCoxPespc" />

      </Head>
      <HomeSliderPage />
    </>
  );
}
