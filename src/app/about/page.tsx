import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import MissionVisionSection from '@/components/MissionVisionSection';
import HomeSolutionsSection from '@/components/HomeSolutionsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import IndustriesServedSection from '@/components/IndustriesServedSection';
import StatsSection from '@/components/StatsSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About DMX Talent Solutions | Premier HR Solutions & IT Recruitment Company in Bangalore',
  description: 'DMX Talent Solutions is a leading HR consulting firm in India offering staffing solutions, talent acquisition, workforce management, and IT recruitment services.',
  keywords: 'HR solutions company, Recruitment agency, Staffing solutions, Talent acquisition, HR consulting services, IT recruitment company, Workforce management, Hiring solutions, Recruitment consultancy',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Header />
      
      {/* 1. Hero Banner */}
      <div className="bg-[#0f1d33] py-20 text-center border-b border-gray-800 relative overflow-hidden">
        {/* Subtle decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600 opacity-10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
            About <span className="text-white">DMX</span> Talent Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Your trusted partner in building stronger teams and smarter workforce strategies. We connect exceptional talent with outstanding organizations globally.
          </p>
        </div>
      </div>

      {/* 2. Company Intro */}
      <AboutSection />

      {/* 3. Mission & Vision */}
      <MissionVisionSection />

      {/* 4. Services (Overview linking to /solutions) */}
      <HomeSolutionsSection />

      {/* 5. Why Choose Us */}
      <WhyChooseUsSection />

      {/* 6. Industries Served */}
      <IndustriesServedSection />

      {/* 7. Stats Counter */}
      <StatsSection />

      {/* 8. CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  );
}
