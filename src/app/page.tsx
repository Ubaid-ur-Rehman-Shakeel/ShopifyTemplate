import BannerSection from '@/components/Banner';
import BestSellingProducts from '@/components/bestSellingProducts';
import WhyChooseUs from '@/components/whychooseus';
import Hero from '../../@/components/Hero/hero';
import CategorySection from '../../@/components/categorySection';
import CustomerReview from '../../@/components/customerReview';
import AboutUs from './aboutus/page';

export default async function HomePage() {
  return (
    <>
      {/* <Hero />        
        <BestSellingProducts/>
        <CategorySection />
        <BannerSection/>        
        <CustomerReview />
        <WhyChooseUs/> */}
        <AboutUs/>
    </>
  );
}
