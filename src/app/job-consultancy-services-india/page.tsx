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
  'Job Consultancy Services India | Best Career & Job Placement Agency',
  'Leading job consultancy services in India. Comprehensive career guidance, job placement, and recruitment solutions for job seekers and employers nationwide.',
  [
    'job consultancy services India',
    'career placement agency India',
    'job placement services India',
    'recruitment consultancy India',
    'career guidance India'
  ],
  '/job-consultancy-services-india',
  '/images/job-consultancy-hero.jpg'
);

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'HirXpert Talent Solutions - Job Consultancy',
    description: 'Leading job consultancy services in India providing comprehensive career guidance and job placement solutions nationwide.',
    url: 'https://hirxpert.com/job-consultancy-services-india',
    telephone: '+91-9876543210',
    email: 'jobs@hirxpert.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '111 Career Solutions',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411001',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '18.5204',
      longitude: '73.8567'
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: '$$'
  },
  generateProfessionalServiceSchema('Job Consultancy & Career Placement Services', 'Comprehensive job consultancy and career placement solutions for job seekers and employers across India.')
];

export default function JobConsultancyServicesIndiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />
      <QuickEnquiryPopup />

      {/* Hero Section with Job Consultancy Focus */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Job Consultancy Services India
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              India's Premier Job Consultancy. Comprehensive career guidance, job placement, and recruitment solutions for job seekers and employers nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Find Your Career
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
                <div className="text-2xl font-bold">15,000+</div>
                <div className="text-sm text-blue-100">Careers Launched</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">Nationwide</div>
                <div className="text-sm text-blue-100">Coverage</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm text-blue-100">Partner Companies</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">Expert</div>
                <div className="text-sm text-blue-100">Career Guidance</div>
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