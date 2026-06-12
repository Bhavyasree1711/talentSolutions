import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
export const metadata: Metadata = {
  title: 'Contact DMX Talent Solutions | Hire Talent or Start Training',
  description: 'Get in touch with DMX Talent Solutions for premium HR consulting, IT staffing, or enterprise software training programs.',
  keywords: 'Contact DMX Talent Solutions, Hire IT Talent, Corporate Training Contact',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Header />
      

      <ContactSection isTopSection={true} />
      
      <Footer />
    </div>
  );
}
