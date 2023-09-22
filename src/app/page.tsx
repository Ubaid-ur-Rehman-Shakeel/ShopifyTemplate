import { Button } from '@/components/ui/button';
import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Foter from 'components/layout/Fotter';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
        <h1 className="text-red-500">Hello World</h1>
        <Button variant="outline">Shadcn</Button>
        <Suspense>
          <Foter/>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
