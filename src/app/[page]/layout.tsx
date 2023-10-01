import Footer from '@/components/layout/footer';
import { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <div className="w-full bg-black ">
        <div className="mx-8  py-20  sm:mx-auto ">
          <Suspense >{children}</Suspense>
        </div>
      </div>
      <Footer />
    </Suspense>
  );
}
