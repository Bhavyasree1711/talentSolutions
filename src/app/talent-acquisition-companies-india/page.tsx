import { Metadata } from 'next';
import { generateSEOMetadata, generateLocalBusinessSchema, generateProfessionalServiceSchema } from '@/lib/seo';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import Header from '@/components/Header';
import { QuickEnquiryPopup } from '@/components/seo/QuickEnquiryPopup';

export const metadata: Metadata = generateSEOMetadata(
  'Talent Acquisition Companies India | Best Recruitment Agencies Bangalore',
  'Leading talent acquisition companies in India. Comprehensive recruitment solutions with HirXpert Talent Solutions. Expert hiring services across all industries and levels.',
  [
    'talent acquisition companies India',
    'recruitment agencies Bangalore',
    'hiring solutions India',
    'talent recruitment services',
    'best recruitment firms India'
  ],
  '/talent-acquisition-companies-india',
  '/images/talent-acquisition-hero.jpg'
);

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'HirXpert Talent Solutions - Talent Acquisition',
    description: 'Premier talent acquisition company in India offering comprehensive recruitment and staffing solutions across all industries.',
    url: 'https://hirxpert.com/talent-acquisition-companies-india',
    telephone: '+91-9876543210',
    email: 'talent@hirxpert.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '789 Recruitment Plaza',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560001',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '12.9716',
      longitude: '77.5946'
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: '$$'
  },
  generateProfessionalServiceSchema('Talent Acquisition & Recruitment Services', 'Full-service talent acquisition and recruitment solutions for businesses across India.')
];

export default function TalentAcquisitionCompaniesIndiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />
      <QuickEnquiryPopup />

      {/* Hero Section with Talent Acquisition Focus */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Leading Talent Acquisition Companies in India
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Your Strategic Recruitment Partner. HirXpert Talent Solutions is among India's top talent acquisition companies, providing comprehensive recruitment solutions across all industries and experience levels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Hiring Today
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Our Services
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm text-blue-100">Placements Monthly</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">Pan-India</div>
                <div className="text-sm text-blue-100">Presence</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">Industry</div>
                <div className="text-sm text-blue-100">Expertise</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">Quality</div>
                <div className="text-sm text-blue-100">Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Talent Acquisition Expertise */}
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>

      {/* Talent Acquisition Services Section */}
      <ScrollReveal>
        <ServicesSection />
      </ScrollReveal>

      {/* Why Choose Us - Talent Acquisition Focus */}
      <ScrollReveal>
        <WhyChooseUsSection />
      </ScrollReveal>

      {/* Stats Section - Talent Acquisition Focused */}
      <ScrollReveal>
        <StatsSection />
      </ScrollReveal>

      {/* Testimonials */}
      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <CTASection />
      </ScrollReveal>

      {/* Contact Section */}
      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>

      <Footer />
    </>
  );
}