import { Button } from '@/components/ui/button';
import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Hero from 'components/Hero/hero';
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
    <Hero/>
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
        <h1 className="bg-main text-text">Hello World</h1>
        <h1 className='bg-sub'>hellooo</h1>
        <Button variant="outline">Shadcn</Button>
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
      
    </>
  );
}
