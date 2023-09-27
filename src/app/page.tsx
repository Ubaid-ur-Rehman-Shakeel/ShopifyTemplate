import { Button } from '@/components/ui/button';
import Hero from 'components/Hero/hero';
import { Carousel } from 'components/carousel';
import CategorySection from 'components/categorySection';
import CustomerReview from 'components/customerReview';
import { ThreeItemGrid } from 'components/grid/three-items';
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
      <Hero />
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
        <h1 className="bg-main text-text">Hello World</h1>
        <Button variant="outline">Shadcn</Button>
        <CategorySection />
        <CustomerReview />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
