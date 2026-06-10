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
  'Placement Consultancy Bangalore | Best Job Placement Services Karnataka',
  'Leading placement consultancy in Bangalore. Expert job placement services, career counseling, and recruitment solutions for job seekers and employers in Karnataka.',
  [
    'placement consultancy Bangalore',
    'job placement services Karnataka',
    'career counseling Bangalore',
    'recruitment solutions Bangalore',
    'placement agency Karnataka'
  ],
  '/placement-consultancy-bangalore',
  '/images/placement-consultancy-hero.jpg'
);

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'HirXpert Talent Solutions - Placement Consultancy',
    description: 'Leading placement consultancy in Bangalore providing expert job placement services and career counseling for job seekers and employers.',
    url: 'https://hirxpert.com/placement-consultancy-bangalore',
    telephone: '+91-9876543210',
    email: 'placement@hirxpert.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '333 Career Center',
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
  generateProfessionalServiceSchema('Placement Consultancy & Career Services', 'Comprehensive job placement and career counseling services for job seekers and employers in Bangalore.')
];

export default function PlacementConsultancyBangalorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />
      <QuickEnquiryPopup />

      {/* Hero Section with Placement Consultancy Focus */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Placement Consultancy Bangalore
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Karnataka's Leading Placement Consultancy. Expert job placement services, career counseling, and recruitment solutions for job seekers and employers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Find Your Dream Job
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Our Services
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-sm text-blue-100">Jobs Filled</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">Bangalore</div>
                <div className="text-sm text-blue-100">Focus</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-blue-100">Partner Companies</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">Free</div>
                <div className="text-sm text-blue-100">Career Counseling</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>

      {/* Services Section */}
      <ScrollReveal>
        <ServicesSection />
      </ScrollReveal>

      {/* Why Choose Us */}
      <ScrollReveal>
        <WhyChooseUsSection />
      </ScrollReveal>

      {/* Stats Section */}
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