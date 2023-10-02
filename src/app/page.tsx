import BannerSection from '@/components/Banner';
import BestSellingProducts from '@/components/bestSellingProducts';
import WhyChooseUs from '@/components/whychooseus/index';
import Hero from '../../@/components/Hero/hero';
import CategorySection from '../../@/components/categorySection';
import CustomerReview from '../../@/components/customerReview';

export default async function HomePage() {
  return (
    <>
      <Hero />        
        <BestSellingProducts/>
        <CategorySection />
        <BannerSection/>        
        <CustomerReview />
        <WhyChooseUs/>
    </>
  );
}
