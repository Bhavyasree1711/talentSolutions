import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import RecruitmentMethodologiesSection from '@/components/RecruitmentMethodologiesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';

import TrainingServicesSection from '@/components/TrainingServicesSection';
import CoursesSection from '@/components/CoursesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <RecruitmentMethodologiesSection />
       <TrainingServicesSection />
      <CoursesSection />
      

      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
