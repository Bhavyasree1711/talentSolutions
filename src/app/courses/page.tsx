import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import TrainingJourneySection from '@/components/TrainingJourneySection';
import TrainingWhyChooseSection from '@/components/TrainingWhyChooseSection';
import CoursesSection from '@/components/CoursesSection';
import PlacementAssistanceSection from '@/components/PlacementAssistanceSection';
import ToolsTechnologiesSection from '@/components/ToolsTechnologiesSection';
import TrainingFAQSection from '@/components/TrainingFAQSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Software IT Training | Cloud, AI & Cyber Security Courses',
  description: 'Advance your career with DMX Talent Solutions. Get hands-on, enterprise-grade training in Cloud Computing, DevOps, AI, Data Science, and Cyber Security.',
  keywords: 'Software IT Training, Cloud Computing Courses, AI Data Science Training, Cyber Security Courses, AWS Certification, Azure DevOps',
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Header />
      

      <CoursesSection isTopSection={true} />
      <TrainingJourneySection />
      <TrainingWhyChooseSection />
      <PlacementAssistanceSection />
      <ToolsTechnologiesSection />
      <TrainingFAQSection />
      <CTASection />
      
      <Footer />
    </div>
  );
}
