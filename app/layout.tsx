// import { Analytics } from '@vercel/analytics/react';
// import VoiceflowScript from 'components/VoiceflowScript';
// import Navbar from 'components/layout/navbar';
// import { Rubik } from 'next/font/google';
// import Script from 'next/script';
// import { ReactNode, Suspense } from 'react';
// import Head from 'next/head';
// import './globals.css';
// const GTM_ID = ' G-R8TGB8XP4D';
// const rubik = Rubik({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-rubik'
// });

// export default async function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en" className={rubik.variable}>
//      <Head>
//        <meta name="google-site-verification" content="Zh42mpI4SItxLPU-smBCP_qMcT73IG27g9NA2kgIeMU" />
//        <meta name="google-site-verification" content="jU4az3_HFc7JcxHtJ18OR_Jt1HrIMtRVFQgCoxPespc" />
//       </Head>
//     <VoiceflowScript />
//     <Script
//         strategy='afterInteractive'
//         src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
//         async
//       ></Script>
//       <Script strategy="afterInteractive">
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', '${GTM_ID}');
//         `}
//       </Script>
//       <body className="bg-white text-black selection:bg-cagette ">
//         {/* @ts-expect-error Server Component */}
//         <Navbar />
//         <Suspense>
//           <main>{children}</main>
//         </Suspense>
//         <Analytics />
//       </body> 
//     </html>
//   );
// }

import { Analytics } from '@vercel/analytics/react';
import VoiceflowScript from 'components/VoiceflowScript';
import Navbar from 'components/layout/navbar';
import { Rubik } from 'next/font/google';
import Script from 'next/script';
import { ReactNode, Suspense } from 'react';
import Head from 'next/head';
import './globals.css';

const GTM_ID = 'G-R8TGB8XP4D'; // Google Tag Manager ID
const FB_PIXEL_ID = '307382433489872'; // Facebook Pixel ID
const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={rubik.variable}>
      <Head>
        <meta name="google-site-verification" content="Zh42mpI4SItxLPU-smBCP_qMcT73IG27g9NA2kgIeMU" />
        <meta name="google-site-verification" content="jU4az3_HFc7JcxHtJ18OR_Jt1HrIMtRVFQgCoxPespc" />
      </Head>
      <VoiceflowScript />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
        async
      />
      <Script strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GTM_ID}');
        `}
      </Script>
      {/* Meta Pixel Code */}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt="Facebook Pixel"
        />
      </noscript>
      <body className="bg-white text-black selection:bg-cagette">
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

