import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Star, Users, TrendingUp, Award, Clock, Phone, Mail, MapPin } from 'lucide-react';
import { generateSEOMetadata, generateProfessionalServiceSchema, generateFAQSchema } from '@/lib/seo';
import { NewsletterSignup } from '@/components/seo/NewsletterSignup';

export const metadata: Metadata = {
  ...generateSEOMetadata(
    'HR Consulting Services in Bangalore | Expert HR Solutions Company',
    'Leading HR consulting company in Bangalore offering executive search, talent acquisition, HR outsourcing, and organizational development services. Trusted by 500+ companies across India.',
    [
      'HR consulting company Bangalore',
      'HR solutions Bangalore',
      'executive search Bangalore',
      'talent acquisition services India',
      'HR outsourcing Bangalore',
      'organizational development consulting',
      'HR strategy consulting India',
      'workforce planning Bangalore',
      'employee engagement consulting',
      'HR transformation services'
    ],
    '/hr-consulting-bangalore',
    '/images/hero-professional.png',
    [
      generateProfessionalServiceSchema(
        'HR Consulting Services',
        'Comprehensive HR consulting services in Bangalore including executive search, talent acquisition, HR outsourcing, organizational development, and workforce planning solutions.'
      ),
      generateFAQSchema([
        {
          question: 'What HR consulting services do you offer in Bangalore?',
          answer: 'We offer comprehensive HR consulting services including executive search, talent acquisition, HR outsourcing, organizational development, workforce planning, employee engagement, and HR transformation services.'
        },
        {
          question: 'How long does the executive search process take?',
          answer: 'Our executive search process typically takes 45-90 days depending on the role complexity and industry requirements. We ensure thorough candidate evaluation and cultural fit assessment.'
        },
        {
          question: 'Do you provide HR consulting for startups?',
          answer: 'Yes, we specialize in HR consulting for startups, helping them build scalable HR processes, implement effective recruitment strategies, and establish strong organizational foundations.'
        }
      ])
    ]
  )
};

const services = [
  {
    title: 'Executive Search',
    description: 'Strategic executive recruitment for C-level and senior leadership positions.',
    icon: '👔',
    features: ['Confidential search', 'Industry expertise', 'Cultural fit assessment', 'Reference checks']
  },
  {
    title: 'Talent Acquisition',
    description: 'End-to-end recruitment solutions for mid to senior-level positions.',
    icon: '🎯',
    features: ['Multi-channel sourcing', 'Technical screening', 'Interview coordination', 'Offer management']
  },
  {
    title: 'HR Outsourcing',
    description: 'Comprehensive HR operations management and administrative support.',
    icon: '📋',
    features: ['Payroll management', 'Compliance support', 'Employee relations', 'HR documentation']
  },
  {
    title: 'Organizational Development',
    description: 'Strategic HR planning and organizational effectiveness consulting.',
    icon: '📈',
    features: ['Change management', 'Leadership development', 'Performance systems', 'Culture transformation']
  }
];

const stats = [
  { number: '500+', label: 'Companies Served', icon: Users },
  { number: '95%', label: 'Client Satisfaction', icon: Star },
  { number: '45 Days', label: 'Average Placement Time', icon: Clock },
  { number: '50+', label: 'HR Consultants', icon: Award }
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    position: 'CEO, TechCorp India',
    company: 'TechCorp India',
    content: 'DMX Talent Solutions transformed our HR operations completely. Their strategic consulting helped us build a world-class talent acquisition process.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    position: 'HR Director, InnoTech Solutions',
    company: 'InnoTech Solutions',
    content: 'Outstanding executive search services. They found us the perfect CTO who has been instrumental in our growth journey.',
    rating: 5
  },
  {
    name: 'Amit Patel',
    position: 'Managing Director, Global Systems Ltd',
    company: 'Global Systems Ltd',
    content: 'Their HR outsourcing solutions saved us significant time and resources. Highly professional and reliable service.',
    rating: 5
  }
];

const faqs = [
  {
    question: 'What makes DMX Talent Solutions different from other HR consulting firms in Bangalore?',
    answer: 'We combine deep industry expertise with innovative technology-driven solutions. Our consultants have an average of 15+ years of experience, and we use AI-powered tools for better candidate matching and predictive analytics for workforce planning.'
  },
  {
    question: 'How do you ensure quality in executive search?',
    answer: 'Our executive search process includes: 1) Detailed job analysis and competency mapping, 2) Multi-channel sourcing from our extensive database, 3) Rigorous assessment using psychometric tools, 4) Reference checks and background verification, 5) Cultural fit evaluation.'
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We specialize in Technology, BFSI, Healthcare, Manufacturing, Retail, E-commerce, and Professional Services. Our consultants have deep domain knowledge in each sector and understand industry-specific talent requirements.'
  },
  {
    question: 'How do you handle confidential executive searches?',
    answer: 'We maintain strict confidentiality protocols. All executive search projects are handled by dedicated consultants, and we use secure communication channels. We never disclose client information to candidates or other parties.'
  },
  {
    question: 'What is your success rate for placements?',
    answer: 'Our placement success rate is over 85% for executive positions and 92% for mid-level roles. We track placement success for 12 months post-placement to ensure long-term success.'
  },
  {
    question: 'Do you provide international recruitment services?',
    answer: 'Yes, we have a global network and can assist with international recruitment. We handle work permits, relocation support, and cross-cultural integration for international hires.'
  }
];

export default function HRConsultingBangalorePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              HR Consulting Services in Bangalore
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transform your business with expert HR consulting from Bangalore's leading HR solutions company.
              Strategic talent acquisition, executive search, and organizational development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free HR Consultation
              </Link>
              <Link
                href="tel:+919247030111"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call Now: +91 92470 30111
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-[#0B1F3A] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-[#0B1F3A] mb-6">
                Why Choose DMX Talent Solutions for HR Consulting in Bangalore?
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                <p className="text-lg leading-relaxed mb-6">
                  As Bangalore's premier HR consulting company, DMX Talent Solutions has been transforming businesses
                  across India since 2010. We understand that your people are your greatest asset, and our comprehensive
                  HR consulting services are designed to help you attract, develop, and retain top talent.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Our team of certified HR consultants brings over 15 years of average experience in strategic HR management,
                  executive search, organizational development, and talent acquisition. We serve clients across diverse
                  industries including technology, BFSI, healthcare, manufacturing, and professional services.
                </p>

                <h3 className="text-2xl font-bold text-[#0B1F3A] mt-8 mb-4">
                  Our Comprehensive HR Consulting Services
                </h3>

                <p className="text-lg leading-relaxed mb-6">
                  We offer end-to-end HR consulting solutions that cover every aspect of human resource management.
                  From strategic workforce planning to day-to-day HR operations, we provide scalable solutions that
                  grow with your business.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h4 className="text-xl font-semibold text-[#0B1F3A] mb-3">{service.title}</h4>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-2xl font-bold text-[#0B1F3A] mt-8 mb-4">
                  Strategic HR Consulting Approach
                </h3>

                <p className="text-lg leading-relaxed mb-6">
                  Our strategic HR consulting approach is built on three pillars: People, Process, and Technology.
                  We believe that effective HR management requires a holistic approach that considers your organizational
                  culture, business objectives, and market dynamics.
                </p>

                <h4 className="text-xl font-semibold text-[#0B1F3A] mt-6 mb-3">
                  People-Centric Solutions
                </h4>
                <p className="mb-4">
                  We focus on understanding your workforce dynamics and creating HR strategies that enhance employee
                  engagement, productivity, and retention. Our people-centric approach ensures that your HR initiatives
                  align with your organizational culture and values.
                </p>

                <h4 className="text-xl font-semibold text-[#0B1F3A] mt-6 mb-3">
                  Process Optimization
                </h4>
                <p className="mb-4">
                  We help you streamline HR processes and implement best practices that improve efficiency and compliance.
                  Our process optimization services include workflow automation, policy development, and performance management systems.
                </p>

                <h4 className="text-xl font-semibold text-[#0B1F3A] mt-6 mb-3">
                  Technology Integration
                </h4>
                <p className="mb-4">
                  We leverage cutting-edge HR technology to enhance your HR operations. From applicant tracking systems
                  to employee engagement platforms, we help you implement technology solutions that drive better business outcomes.
                </p>

                <h3 className="text-2xl font-bold text-[#0B1F3A] mt-8 mb-4">
                  Industries We Serve
                </h3>

                <p className="text-lg leading-relaxed mb-6">
                  Our HR consulting expertise spans across multiple industries, ensuring that we understand the unique
                  talent requirements and regulatory landscapes of each sector.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {['Technology', 'BFSI', 'Healthcare', 'Manufacturing', 'Retail & E-commerce', 'Professional Services'].map((industry, index) => (
                    <div key={index} className="bg-blue-50 p-4 rounded-lg text-center">
                      <span className="font-semibold text-blue-700">{industry}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-[#0B1F3A] mt-8 mb-4">
                  Why Businesses Choose DMX Talent Solutions
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-lg text-[#0B1F3A] mb-2">Proven Track Record</h4>
                      <p>Over 500 successful HR consulting projects across India with 95% client satisfaction rate.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-lg text-[#0B1F3A] mb-2">Expert Team</h4>
                      <p>Certified HR consultants with 15+ years of experience and deep industry knowledge.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-lg text-[#0B1F3A] mb-2">Technology-Driven Solutions</h4>
                      <p>AI-powered talent matching, predictive analytics, and automated HR processes.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <div>
                      <h4 className="font-semibold text-lg text-[#0B1F3A] mb-2">End-to-End Support</h4>
                      <p>Complete HR lifecycle management from recruitment to retirement planning.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h4 className="text-xl font-bold text-[#0B1F3A] mb-4">Get HR Consultation</h4>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span>+91 92470 30111</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span>s.siddeswara@dmxorg.com</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span>BTM Layout, Bangalore, Karnataka 560076</span>
                  </div>
                </div>
                <Link
                  href="#contact"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors block text-center"
                >
                  Schedule Consultation
                </Link>
              </div>

              {/* Newsletter */}
              <NewsletterSignup variant="inline" />

              {/* Services Quick Links */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h4 className="text-xl font-bold text-[#0B1F3A] mb-4">Our HR Services</h4>
                <ul className="space-y-2">
                  {['Executive Search', 'Talent Acquisition', 'HR Outsourcing', 'Organizational Development', 'Workforce Planning', 'Employee Engagement'].map((service, index) => (
                    <li key={index}>
                      <Link href="#contact" className="text-blue-600 hover:text-blue-700 text-sm">
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by leading companies across India for our HR consulting excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-[#0B1F3A]">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Get answers to common questions about our HR consulting services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-[#0B1F3A] mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your HR Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free HR consultation and discover how we can help you build a world-class workforce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="tel:+919247030111"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call +91 92470 30111
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}