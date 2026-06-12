import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import RecruitmentMethodologiesSection from '@/components/RecruitmentMethodologiesSection';
import SolutionsTestimonialsSection from '@/components/SolutionsTestimonialsSection';
import SolutionsFAQSection from '@/components/SolutionsFAQSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'HR Consulting & Talent Solutions | DMX Talent Solutions',
  description: 'Comprehensive HR solutions including Executive Search, IT Staffing, Contract Hiring, HR Consulting, Leadership Coaching, and Talent Assessment.',
  keywords: 'HR Solutions, Executive Search, IT Staffing India, Contract Hiring, HR Consulting Bangalore, Talent Assessment',
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Header />
      
      <ServicesSection isTopSection={true} />
      <RecruitmentMethodologiesSection />
      <SolutionsTestimonialsSection />
      <SolutionsFAQSection />
      <CTASection />
      
      <Footer />
    </div>
  );
}
