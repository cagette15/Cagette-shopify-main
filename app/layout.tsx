import { Analytics } from '@vercel/analytics/react';
import VoiceflowScript from 'components/VoiceflowScript';
import Navbar from 'components/layout/navbar';
import { Rubik } from 'next/font/google';
import Script from 'next/script';
import { ReactNode, Suspense } from 'react';
import Head from 'next/head';
import './globals.css';
const GTM_ID = ' G-R8TGB8XP4D';
const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik'
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={rubik.variable}>
     <Head>
       <meta name="google-site-verification" content="Zh42mpI4SItxLPU-smBCP_qMcT73IG27g9NA2kgIeMU" />
       <meta name="google-site-verification" content="jU4az3_HFc7JcxHtJ18OR_Jt1HrIMtRVFQgCoxPespc" />
      </Head>
    <VoiceflowScript />
    <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
        async
      ></Script>
      <Script strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GTM_ID}');
        `}
      </Script>
      <body className="bg-white text-black selection:bg-cagette ">
        {/* @ts-expect-error Server Component */}
        <Navbar />
        <Suspense>
          <main>{children}</main>
        </Suspense>
        <Analytics />
      </body> 
    </html>
  );
}
