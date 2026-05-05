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
  'Executive Search Firms Bangalore | C-Level Recruitment Services India',
  'Premier executive search firms in Bangalore. Hire C-level executives, directors, and senior leaders with HirXpert Talent Solutions. Expert leadership recruitment for growing companies.',
  [
    'executive search firms Bangalore',
    'C-level recruitment India',
    'leadership hiring',
    'executive headhunting',
    'senior management recruitment',
    'board level appointments'
  ],
  '/executive-search-firms-bangalore',
  '/images/executive-search-hero.jpg'
);

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'HirXpert Talent Solutions - Executive Search',
    description: 'Leading executive search firm in Bangalore specializing in C-level recruitment and senior leadership placement.',
    url: 'https://hirxpert.com/executive-search-firms-bangalore',
    telephone: '+91-9876543210',
    email: 'executives@hirxpert.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '456 Business District',
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
    priceRange: '$$$'
  },
  generateProfessionalServiceSchema('Executive Search & Leadership Recruitment', 'Specialized executive search services for C-level positions and senior leadership roles.')
];

export default function ExecutiveSearchFirmsBangalorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />
      <QuickEnquiryPopup />

      {/* Hero Section with Executive Search Focus */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premier Executive Search Firms in Bangalore
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Find Your Next C-Level Leader. HirXpert Talent Solutions is Bangalore's most trusted executive search firm, specializing in C-level recruitment and senior leadership placement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Find Executive Talent
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Our Executive Process
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">C-Level</div>
                <div className="text-sm text-blue-100">Expertise</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">Confidential</div>
                <div className="text-sm text-blue-100">Search</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">Global</div>
                <div className="text-sm text-blue-100">Network</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">Proven</div>
                <div className="text-sm text-blue-100">Track Record</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Executive Search Expertise */}
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>

      {/* Executive Services Section */}
      <ScrollReveal>
        <ServicesSection />
      </ScrollReveal>

      {/* Why Choose Us - Executive Focus */}
      <ScrollReveal>
        <WhyChooseUsSection />
      </ScrollReveal>

      {/* Stats Section - Executive Focused */}
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