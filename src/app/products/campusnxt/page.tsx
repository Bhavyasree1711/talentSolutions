import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductNav from '@/components/ProductNav';
import { 
  CheckCircle, ArrowRight, ShieldCheck, Users, BookOpen, 
  CreditCard, Calendar, BarChart3, Smartphone, Database, 
  Settings, Clock, Layout, Fingerprint
} from 'lucide-react';

export default function CampusNXTPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <ProductNav />
      
      <main className="flex-grow pt-4 pb-16">
        {/* HERO SECTION */}
        <section className="relative bg-[#0B1F3A] text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80" 
              alt="Campus Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/90 to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                CampusNXT <span className="text-red-500">Platform</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                CampusNXT centralizes student lifecycle, academic operations, and finance into a single, secure ERP platform — built for compliance and operational efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contact" 
                  className="px-8 py-3.5 bg-red-700 hover:bg-red-600 text-white font-bold rounded-lg shadow-lg hover:shadow-red-700/20 transition-all flex items-center justify-center gap-2"
                >
                  Request Demo <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#features" 
                  className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-lg backdrop-blur-sm transition-all flex items-center justify-center"
                >
                  Experience Our Solutions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* STATS / INTRO SECTION */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">
              Built for Modern Campuses, Designed to Deliver Results
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              Smarter tools. Seamless operations. One unified platform transforming how your campus works.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: 'Academic', icon: BookOpen },
                { name: 'Administration', icon: Settings },
                { name: 'Technology', icon: Database },
                { name: 'Insights', icon: BarChart3 }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-16 h-16 rounded-full bg-[#0B1F3A]/5 text-[#0B1F3A] flex items-center justify-center mb-4">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-gray-900">{item.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURE JOURNEY */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">Complete Feature Journey</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Follow the comprehensive path of our integrated solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Student Information System',
                  desc: 'A unified, auditable student record repository providing secure profiles, attendance, transcript management, and identity services with role-based access.',
                  icon: Users
                },
                {
                  title: 'Admissions & Enrollment',
                  desc: 'End-to-end admissions management: inquiry capture, application processing, document verification, merit-based allocation, payment processing, and automated onboarding.',
                  icon: CheckCircle
                },
                {
                  title: 'Academic & Curriculum',
                  desc: 'Configurable program and course management, grading policies, elective workflows, and academic calendar orchestration to support institutional governance.',
                  icon: BookOpen
                },
                {
                  title: 'Finance & Accounting',
                  desc: 'Integrated billing, invoicing, scholarship management, general ledger, reconciliations, and payment gateway integrations for accurate financial control.',
                  icon: CreditCard
                },
                {
                  title: 'Human Resources & Payroll',
                  desc: 'Employee lifecycle management, time & attendance, leave, payroll processing, and statutory compliance with configurable role-based controls.',
                  icon: Users
                },
                {
                  title: 'Timetable & Scheduling',
                  desc: 'Automated timetable generation, resource allocation, conflict resolution, and calendar publishing to optimize space and faculty utilization.',
                  icon: Calendar
                },
                {
                  title: 'Examinations & Assessments',
                  desc: 'Secure assessment delivery, question bank management, automated evaluation, plagiarism detection, and result workflows for transparent grading.',
                  icon: Layout
                },
                {
                  title: 'Reporting & Analytics',
                  desc: 'Operational dashboards, KPI tracking, ad-hoc reporting, and analytics to support academic performance monitoring and regulatory reporting.',
                  icon: BarChart3
                },
                {
                  title: 'Biometrics & Gateway Integrations',
                  desc: 'Native integrations for biometric devices, access-control, and payment/library gateways. Secure data ingestion and real-time synchronization.',
                  icon: Fingerprint
                },
                {
                  title: 'Mobile Portal',
                  desc: 'Responsive web and native mobile applications delivering self-service capabilities, push notifications, and transactional workflows for all stakeholders.',
                  icon: Smartphone
                },
                {
                  title: 'Security & Compliance',
                  desc: 'Enterprise security with role-based access, audit trails, encryption, backup & recovery, and data privacy controls to ensure regulatory compliance.',
                  icon: ShieldCheck
                }
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all group">
                  <div className="w-12 h-12 rounded-lg bg-red-50 text-red-700 flex items-center justify-center mb-6 group-hover:bg-red-700 group-hover:text-white transition-colors">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OVERVIEW & SPECS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">Platform Overview & Specifications</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-600"></div> Product Overview
                    </h3>
                    <p className="text-gray-600">
                      CampusNXT is a purpose-built Enterprise ERP for higher education that consolidates administrative and academic systems into a single, auditable platform. The solution accelerates operations, reduces manual overhead, and delivers data-driven insights to campus leadership.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-600"></div> Key Capabilities
                    </h3>
                    <p className="text-gray-600">
                      Provides a unified student lifecycle system with secure role-based access, end-to-end admissions, curriculum management, finance/billing, HR/payroll automation, exam delivery, dashboards, open APIs, and enterprise-grade security.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-600"></div> Business Benefits
                    </h3>
                    <p className="text-gray-600">
                      Reduces operational costs through workflow automation while eliminating manual spreadsheets. Accelerates admissions conversion with digital onboarding, improves student outcomes via consolidated insights, and ensures compliance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Deployment & Integration</h3>
                    <p className="text-gray-600 text-sm">
                      Supports cloud-hosted and on-premise deployments, containerized delivery, and hybrid models. The platform exposes RESTful APIs, SSO (SAML/OAuth), and connectors for LMS, library systems, payment gateways, and identity providers.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Security & Compliance</h3>
                    <p className="text-gray-600 text-sm">
                      Built for institutional security: role-based access control, full audit logging, encryption at rest and in transit, secure backups, and configurable retention policies to meet GDPR and local data protection requirements.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Implementation & Support</h3>
                    <p className="text-gray-600 text-sm">
                      We provide structured implementation services including requirement workshops, data migration, integration consulting, training for administrators and faculty, and SLA-backed support options for production operations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Target Customers</h3>
                    <p className="text-gray-600 text-sm">
                      Universities, colleges, vocational institutes, and multi-campus groups seeking a unified, auditable, and extensible ERP to manage academic and administrative operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="py-20 bg-[#0B1F3A] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CampusNXT?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                CampusNXT is more than just an ERP—it is a modern, modular, and hyper-extensible enterprise ecosystem engineered to power the future of higher education.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Seamless Payment Gateway Integrations',
                  desc: 'Eliminate transaction friction instantly. CampusNXT comes out-of-the-box with native, secure integrations for leading global and regional payment gateways. Facilitate instant fee settlements, automatic invoice reconciliation, and instant digital receipts for students and parents with maximum reliability.'
                },
                {
                  title: 'Comprehensive Pre-Built Modules',
                  desc: 'Deploy a complete educational environment on day one. Our rich library of pre-built modules covers every operational need, including Academics, digital Admissions & Enrollment, conflict-free Timetable Generation, Hostel administration, Transport routing, and unified Campus Communication.'
                },
                {
                  title: '100% Modular & Open Ecosystem',
                  desc: 'Break free from rigid legacy software. CampusNXT is designed with an open platform paradigm. Its fully modular structure ensures you can plug in next-generation products, including our advanced AI Interviewer, modern LMS platforms, library databases, and custom third-party services, effortlessly.'
                },
                {
                  title: 'Ready-to-Deploy Maturity',
                  desc: 'Why build from scratch when you can launch tomorrow? CampusNXT is a battle-tested, mature product with the overwhelming majority of modern, enterprise-level ERP features already built-in, optimized, and ready for deployment. Accelerate your timeline and reduce custom development overhead to zero.'
                }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-600 flex-shrink-0 flex items-center justify-center mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Find answers to common questions about our training programs and IT services. Ready to advance your career or transform your business? We're here to help.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'How does CampusNXT integrate with our existing university infrastructure?',
                  a: 'CampusNXT is designed with an API-first architecture, allowing seamless integration with your existing Active Directory, payment gateways, biometric attendance systems, and legacy HR/finance software without disrupting current operations.'
                },
                { q: 'What level of data security and compliance does the ERP provide?', a: 'We employ enterprise-grade encryption, role-based access controls, and regular security audits to ensure your data remains protected and compliant with global standards.' },
                { q: 'Can the platform handle the load of a large university with multiple campuses?', a: 'Yes, our cloud-native architecture is built to scale elastically, effortlessly supporting institutions ranging from single colleges to large multi-campus universities.' },
                { q: 'How does the system improve fee collection and financial reporting?', a: 'It automates billing, provides integrated payment gateways, and offers real-time reconciliation and dashboards for instant visibility into financial health.' },
                { q: 'Is the student and faculty portal accessible via mobile devices?', a: 'Absolutely. CampusNXT includes fully responsive web portals and native mobile apps for on-the-go access to schedules, grades, and notifications.' },
                { q: 'How long does it take to implement CampusNXT across our institution?', a: 'Implementation timelines vary by institution size, but our modular approach and pre-built features often allow for a phased rollout starting within a few weeks.' },
                { q: 'What kind of post-deployment support do you offer?', a: 'We provide dedicated SLA-backed support, continuous training for staff, regular platform updates, and a comprehensive knowledge base.' }
              ].map((faq, i) => (
                <details key={i} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-gray-900 hover:text-red-700 transition-colors">
                    <span className="pr-6 font-semibold">{faq.q}</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <div className="text-gray-600 mt-3 group-open:animate-fadeIn p-6 pt-0 border-t border-gray-100">
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-12 text-center bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Still have questions?</h3>
              <p className="text-gray-600 mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
              <a href="/contact" className="inline-block px-8 py-3 bg-red-700 hover:bg-red-800 text-white font-bold rounded-lg transition-colors">
                Get in touch
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
