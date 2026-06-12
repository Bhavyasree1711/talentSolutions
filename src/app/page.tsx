import { Metadata } from 'next';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WeAreDmxSection from '@/components/WeAreDmxSection';
import CoreValuesSection from '@/components/CoreValuesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import HomeSolutionsSection from '@/components/HomeSolutionsSection';
import LeadershipSection from '@/components/LeadershipSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'DMX Talent Solutions | Premier HR & IT Training Company',
  description: 'DMX Talent Solutions provides top-tier HR consulting, executive search, IT staffing, and comprehensive software training programs globally.',
  keywords: 'DMX Talent Solutions, HR Solutions, Executive Search, IT Staffing, Software Training, Cloud Training',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white pt-16 md:pt-20">
      <Header />
      
      {/* 1. Hero Section */}
      <HeroSection />
      
      {/* 2. We Are DMX (Oval Card + Image) */}
      <WeAreDmxSection />
      
      {/* 3. Core Values */}
      <CoreValuesSection />
      
      {/* 4. Why Trust Us */}
      <WhyChooseUsSection />

      {/* 5. What We Provide / You Will Achieve (Brief Cards -> /solutions) */}
      <HomeSolutionsSection />

      {/* 6. Leadership */}
      <LeadershipSection />

      {/* 7 & 8. Clients & Testimonials (TestimonialsSection contains both) */}
      <TestimonialsSection /> 
      
      {/* 9. FAQs */}
      <FAQSection />
      
      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
