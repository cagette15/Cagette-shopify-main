import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <div className="w-full bg-white">
        <div className="sm:mx-auto">
          <Suspense>{children}</Suspense>
        </div>
      </div>
      {/* @ts-expect-error Server Component */}
      <Footer />
    </Suspense>
  );
}
