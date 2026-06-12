import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import MissionVisionSection from '@/components/MissionVisionSection';
import HomeSolutionsSection from '@/components/HomeSolutionsSection';

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
      
      <AboutSection isTopSection={true} />

      {/* 3. Mission & Vision */}
      <MissionVisionSection />

      {/* 4. Services (Overview linking to /solutions) */}
      <HomeSolutionsSection />


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
