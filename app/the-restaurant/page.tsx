import { RestauSection } from 'components/therestaurant/restaurantsection';
import { RestauTabs } from 'components/therestaurant/restautabs';
import Head from 'next/head';
export const runtime = 'edge';

export const metadata = {
  title: ' Cagette: The Best French Restaurant in Bangkok',
  description:
    ' Cagette is widely considered to be the best French restaurant in Bangkok. The restaurant offers a wide variety of classic French dishes, all made with fresh, seasonal ingredients. The service is impeccable, and the atmosphere is elegant and sophisticated.',
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

export default async function HomePageResto() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <RestauTabs />
      <RestauSection />
    </>
  );
}
