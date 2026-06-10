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
      
      {/* Inner Page Hero */}
      <div className="bg-[#0f1d33] py-16 text-center border-b border-gray-800">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
            Our Talent Solutions
          </h1>
          <p className="text-lg text-gray-400">
            End-to-end recruitment and HR consulting services tailored for modern enterprises.
          </p>
        </div>
      </div>

      <ServicesSection />
      <RecruitmentMethodologiesSection />
      <SolutionsTestimonialsSection />
      <SolutionsFAQSection />
      <CTASection />
      
      <Footer />
    </div>
  );
}
