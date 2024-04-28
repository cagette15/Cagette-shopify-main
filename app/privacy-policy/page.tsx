import { HeaderPrivacy } from 'components/privacy-policy/header';
import { SectionPrivacy } from 'components/privacy-policy/privacy';
import Head from 'next/head';
export const runtime = 'edge';

export const metadata = {
  title: ' Cagette Canteen & Deli Privacy Policy',
  description:
    'Cagette Canteen & Deli respects your privacy and is committed to protecting your personal information. This privacy policy explains how we collect, use, and share your personal information.',
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

export default async function PrivacyPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <HeaderPrivacy />
      <SectionPrivacy />
    </>
  );
}
