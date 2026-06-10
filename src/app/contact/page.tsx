import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Contact DMX Talent Solutions | Hire Talent or Start Training',
  description: 'Get in touch with DMX Talent Solutions for premium HR consulting, IT staffing, or enterprise software training programs.',
  keywords: 'Contact DMX Talent Solutions, Hire IT Talent, Corporate Training Contact',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Header />
      
      {/* Inner Page Hero */}
      <div className="bg-[#0f1d33] py-16 text-center border-b border-gray-800">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
            Get In Touch
          </h1>
          <p className="text-lg text-gray-400">
            Whether you need to hire elite talent or upskill your team, we are here to help.
          </p>
        </div>
      </div>

      <ContactSection />
      {/* Adding FAQs here since users often have questions before contacting */}
      <FAQSection />
      
      <Footer />
    </div>
  );
}
