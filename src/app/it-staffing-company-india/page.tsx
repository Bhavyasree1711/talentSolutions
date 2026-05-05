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
  'IT Staffing Company India | Top IT Recruitment Services Bangalore',
  'Leading IT staffing company in India. Hire skilled IT professionals with HirXpert Talent Solutions. Expert IT recruitment services in Bangalore, Delhi, Mumbai. 500+ successful placements.',
  [
    'IT staffing company India',
    'IT recruitment services Bangalore',
    'hire IT professionals',
    'IT staffing solutions',
    'technology recruitment India',
    'software developer hiring'
  ],
  '/it-staffing-company-india',
  '/images/it-staffing-hero.jpg'
);

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'HirXpert Talent Solutions - IT Staffing',
    description: 'Premier IT staffing company in India specializing in technology recruitment and software development talent acquisition.',
    url: 'https://hirxpert.com/it-staffing-company-india',
    telephone: '+91-9876543210',
    email: 'contact@hirxpert.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Park Road',
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
  generateProfessionalServiceSchema('IT Staffing Services', 'Comprehensive IT staffing and recruitment services for technology companies across India.')
];

export default function ITStaffingCompanyIndiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />
      <QuickEnquiryPopup />

      {/* Hero Section with IT Staffing Focus */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Leading IT Staffing Company in India
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Connect with Top Tech Talent. HirXpert Talent Solutions is India's premier IT staffing company, specializing in connecting businesses with skilled technology professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Hire IT Professionals
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Our Services
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-blue-100">IT Placements</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">Pan-India</div>
                <div className="text-sm text-blue-100">Coverage</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">Tech-Skilled</div>
                <div className="text-sm text-blue-100">Recruiters</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">Quality</div>
                <div className="text-sm text-blue-100">Assured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - IT Staffing Expertise */}
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>

      {/* IT Services Section */}
      <ScrollReveal>
        <ServicesSection />
      </ScrollReveal>

      {/* Why Choose Us - IT Focus */}
      <ScrollReveal>
        <WhyChooseUsSection />
      </ScrollReveal>

      {/* Stats Section - IT Focused */}
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