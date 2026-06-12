"use client";
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductNav from '@/components/ProductNav';
import ProductFAQSection from '@/components/ProductFAQSection';
import { 
  Users, BookOpen, GraduationCap, Calendar, Clock, 
  LayoutTemplate, Activity, Globe, ShieldCheck, Target,
  CreditCard, LayoutGrid, Layers, Rocket, FileText, CheckCircle2,
  BarChart, Fingerprint, Smartphone, Settings, ChevronLeft, ChevronRight,
  Code, Briefcase
} from 'lucide-react';

export default function CampusNXTPage() {
  const [activeTab, setActiveTab] = useState('Academic');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % timelineFeatures.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const faqs = [
    {
      question: "How does CampusNXT integrate with our existing university infrastructure?",
      answer: "CampusNXT is designed with an API-first architecture, allowing seamless integration with your existing Active Directory, payment gateways, biometric attendance systems, and legacy HR/finance software without disrupting current operations."
    },
    {
      question: "What level of data security and compliance does the ERP provide?",
      answer: "We provide enterprise-grade security including role-based access control, full audit logging, encryption at rest and in transit, and secure backups to ensure GDPR and local data protection compliance."
    },
    {
      question: "Can the platform handle the load of a large university with multiple campuses?",
      answer: "Yes, CampusNXT is a cloud-native, scalable platform designed specifically for multi-campus deployments, capable of handling tens of thousands of concurrent users."
    },
    {
      question: "How does the system improve fee collection and financial reporting?",
      answer: "With native payment gateway integrations, automated invoicing, and instant reconciliation, CampusNXT eliminates transaction friction and provides real-time financial reporting."
    },
    {
      question: "Is the student and faculty portal accessible via mobile devices?",
      answer: "Absolutely. We offer responsive web portals and native mobile applications with self-service capabilities and push notifications for all stakeholders."
    },
    {
      question: "How long does it take to implement CampusNXT across our institution?",
      answer: "Implementation timelines vary by institution size, but our modular architecture and pre-built templates often allow for deployment in as little as 8-12 weeks."
    },
    {
      question: "What kind of post-deployment support do you offer?",
      answer: "We provide SLA-backed 24/7 technical support, dedicated account managers, and continuous system updates to ensure your operations run smoothly."
    }
  ];

  const timelineFeatures = [
    {
      title: "Student Information System",
      desc: "A unified, auditable student record repository providing secure profiles, attendance, transcript management, and identity services with role-based access.",
      color: "blue",
      carouselColor: "bg-blue-600",
      icon: Users
    },
    {
      title: "Admissions & Enrollment",
      desc: "End-to-end admissions management: inquiry capture, application processing, document verification, merit-based allocation, payment processing, and automated onboarding.",
      color: "red",
      carouselColor: "bg-green-600",
      icon: FileText
    },
    {
      title: "Academic & Curriculum",
      desc: "Configurable program and course management, grading policies, elective workflows, and academic calendar orchestration to support institutional governance.",
      color: "blue",
      carouselColor: "bg-indigo-500",
      icon: BookOpen
    },
    {
      title: "Finance & Accounting",
      desc: "Integrated billing, invoicing, scholarship management, general ledger, reconciliations, and payment gateway integrations for accurate financial control.",
      color: "red",
      carouselColor: "bg-amber-500",
      icon: CreditCard
    },
    {
      title: "Human Resources & Payroll",
      desc: "Employee lifecycle management, time & attendance, leave, payroll processing, and statutory compliance with configurable role-based controls.",
      color: "blue",
      carouselColor: "bg-purple-600",
      icon: Users
    },
    {
      title: "Timetable & Scheduling",
      desc: "Automated timetable generation, resource allocation, conflict resolution, and calendar publishing to optimize space and faculty utilization.",
      color: "red",
      carouselColor: "bg-pink-500",
      icon: Calendar
    },
    {
      title: "Examinations & Assessments",
      desc: "Secure assessment delivery, question bank management, automated evaluation, plagiarism detection, and result workflows for transparent grading.",
      color: "blue",
      carouselColor: "bg-teal-500",
      icon: CheckCircle2
    },
    {
      title: "Reporting & Analytics",
      desc: "Operational dashboards, KPI tracking, ad-hoc reporting, and analytics to support academic performance monitoring and regulatory reporting.",
      color: "red",
      carouselColor: "bg-orange-500",
      icon: BarChart
    },
    {
      title: "Biometrics & Gateway Integrations",
      desc: "Native integrations for biometric devices (fingerprint, RFID, facial), access-control and attendance gateways, and payment/library gateways.",
      color: "blue",
      carouselColor: "bg-cyan-600",
      icon: Fingerprint
    },
    {
      title: "Mobile Portal",
      desc: "Responsive web and native mobile applications delivering self-service capabilities, push notifications, and transactional workflows for all stakeholders.",
      color: "red",
      carouselColor: "bg-rose-500",
      icon: Smartphone
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <ProductNav />
      
      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="w-full bg-[#1e3a5f] text-white py-8 md:py-12 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              CampusNXT Platform
            </h1>
            <h2 className="text-lg md:text-xl font-medium mb-4 text-white">
              Enterprise Academic ERP
            </h2>
            <p className="text-base text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              CampusNXT centralizes student lifecycle, academic operations, and finance into a single, secure ERP platform — built for compliance and operational efficiency.
            </p>
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-50 transition-colors shadow-lg">
              Request Demo
            </button>
          </div>
        </section>

        {/* EXPERIENCE OUR SOLUTIONS */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-2">Experience Our Solutions</h2>
            <p className="text-gray-500 mb-12">Discover how our features work together seamlessly</p>

            <div className="bg-[#f0f7ff] border border-blue-100 rounded-2xl p-8 md:p-12 text-left relative overflow-hidden shadow-sm transition-all duration-500 ease-in-out">
              
              {/* Pagination Dots */}
              <div className="absolute top-6 right-6 flex gap-1.5 z-10">
                {timelineFeatures.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${currentSlide === idx ? 'bg-[#1e3a5f]' : 'bg-gray-300 hover:bg-gray-400'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Left/Right Navigation Arrows (Visible on larger screens) */}
              <button 
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? timelineFeatures.length - 1 : prev - 1))}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-[#1e3a5f] hidden sm:block z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button 
                onClick={() => setCurrentSlide((prev) => (prev + 1) % timelineFeatures.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-[#1e3a5f] hidden sm:block z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div className="flex flex-col md:flex-row gap-6 items-start sm:px-8">
                {React.createElement(
                  timelineFeatures[currentSlide].icon, 
                  { className: "w-8 h-8 text-white" }
                ) && (
                  <div className={`w-16 h-16 rounded-2xl ${timelineFeatures[currentSlide].carouselColor} flex items-center justify-center flex-shrink-0 shadow-lg transition-colors duration-500`}>
                    {React.createElement(timelineFeatures[currentSlide].icon, { className: "w-8 h-8 text-white" })}
                  </div>
                )}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3 transition-opacity duration-300">
                    {timelineFeatures[currentSlide].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm transition-opacity duration-300 min-h-[60px]">
                    {timelineFeatures[currentSlide].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BUILT FOR MODERN CAMPUSES TABS */}
        <section className="py-20 bg-gray-50 border-y border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Built for Modern Campuses, Designed to Deliver Results</h2>
              <p className="text-gray-500">Smarter tools. Seamless operations. One unified platform transforming how your campus works</p>
            </div>

            {/* Tabs Header */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-8 border-b border-gray-200 mb-8">
              {['Academic', 'Administration', 'Technology', 'Insights'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 px-2 text-sm font-semibold transition-colors relative ${activeTab === tab ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <div className="flex items-center gap-2">
                    {tab === 'Academic' && <BookOpen className="w-4 h-4" />}
                    {tab === 'Administration' && <Settings className="w-4 h-4" />}
                    {tab === 'Technology' && <Code className="w-4 h-4" />}
                    {tab === 'Insights' && <BarChart className="w-4 h-4" />}
                    {tab}
                  </div>
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <div className="flex flex-col gap-8 transition-all duration-300">
                {activeTab === 'Academic' && [
                  {
                    title: "Student Information System",
                    desc: "A unified, auditable student record repository providing secure profiles, attendance, transcript management, and identity services with role-based access.",
                    icon: Users, color: "bg-indigo-500"
                  },
                  {
                    title: "Academic & Curriculum",
                    desc: "Configurable program and course management, grading policies, elective workflows, and academic calendar orchestration to support institutional governance.",
                    icon: BookOpen, color: "bg-orange-500"
                  },
                  {
                    title: "Examinations & Assessments",
                    desc: "Secure assessment delivery, question bank management, automated evaluation, plagiarism detection, and result workflows for transparent grading.",
                    icon: CheckCircle2, color: "bg-yellow-500"
                  },
                  {
                    title: "Timetable & Scheduling",
                    desc: "Automated timetable generation, resource allocation, conflict resolution, and calendar publishing to optimize space and faculty utilization.",
                    icon: Calendar, color: "bg-pink-500"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'both' }}>
                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                      {React.createElement(item.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1e3a5f] mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}

                {activeTab === 'Administration' && [
                  {
                    title: "Admissions & Enrollment",
                    desc: "End-to-end admissions management: inquiry capture, application processing, document verification, merit-based allocation, payment processing, and automated onboarding.",
                    icon: FileText, color: "bg-green-500"
                  },
                  {
                    title: "Finance & Accounting",
                    desc: "Integrated billing, invoicing, scholarship management, general ledger, reconciliations, and payment gateway integrations for accurate financial control.",
                    icon: CreditCard, color: "bg-blue-500"
                  },
                  {
                    title: "Human Resources & Payroll",
                    desc: "Employee lifecycle management, time & attendance, leave, payroll processing, and statutory compliance with configurable role-based controls.",
                    icon: Briefcase, color: "bg-purple-500"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'both' }}>
                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                      {React.createElement(item.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1e3a5f] mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}

                {activeTab === 'Technology' && [
                  {
                    title: "Biometrics & Gateway Integrations",
                    desc: "Native integrations for biometric devices (fingerprint, RFID, facial), access-control and attendance gateways, and payment/library gateways. Device management, secure data ingestion, and real-time synchronization with student and staff records.",
                    icon: Code, color: "bg-teal-500"
                  },
                  {
                    title: "Mobile Portal",
                    desc: "Responsive web and native mobile applications delivering self-service capabilities, push notifications, and transactional workflows for all stakeholders.",
                    icon: Smartphone, color: "bg-cyan-500"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'both' }}>
                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                      {React.createElement(item.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1e3a5f] mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}

                {activeTab === 'Insights' && [
                  {
                    title: "Reporting & Analytics",
                    desc: "Operational dashboards, KPI tracking, ad-hoc reporting, and analytics to support academic performance monitoring and regulatory reporting.",
                    icon: BarChart, color: "bg-indigo-500"
                  },
                  {
                    title: "Security & Compliance",
                    desc: "Enterprise security with role-based access, audit trails, encryption, backup & recovery, and data privacy controls to ensure regulatory compliance.",
                    icon: ShieldCheck, color: "bg-teal-500"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'both' }}>
                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                      {React.createElement(item.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1e3a5f] mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COMPLETE FEATURE JOURNEY TIMELINE */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Complete Feature Journey</h2>
              <p className="text-gray-500">Follow the comprehensive path of our integrated solutions</p>
            </div>

            <div className="relative">
              {/* Central Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:-translate-x-1/2"></div>

              {timelineFeatures.map((feature, idx) => {
                const isLeft = idx % 2 === 0;
                const isBlue = feature.color === 'blue';
                const Icon = feature.icon;
                
                return (
                  <div key={idx} className={`relative flex items-center mb-16 md:mb-24 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                    
                    {/* Center Node */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-2 bg-white transform -translate-x-1/2 z-10" 
                         style={{ borderColor: isBlue ? '#3b82f6' : '#ef4444' }}>
                    </div>

                    {/* Content Card */}
                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isLeft ? 'md:pr-16 text-left' : 'md:pl-16 text-left'}`}>
                      <div className={`p-8 rounded-2xl border ${isBlue ? 'border-blue-100 bg-gradient-to-b from-blue-50/50 to-white' : 'border-red-100 bg-gradient-to-b from-red-50/50 to-white'} shadow-sm hover:shadow-md transition-shadow`}>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${isBlue ? 'bg-blue-100' : 'bg-red-100'}`}>
                          <Icon className={`w-6 h-6 ${isBlue ? 'text-blue-600' : 'text-red-600'}`} />
                        </div>
                        <h3 className="text-lg font-bold text-[#1e3a5f] mb-3">{feature.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PRODUCT OVERVIEW */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Product Overview</h2>
              <p className="text-gray-500 max-w-3xl mx-auto text-sm leading-relaxed">
                CampusNXT is a purpose-built Enterprise ERP for higher education that consolidates administrative and academic systems into a single, auditable platform. The solution accelerates operations, reduces manual overhead, and delivers data-driven insights to campus leadership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Key Capabilities',
                  desc: 'Provides a unified student lifecycle system with secure role-based access, end-to-end admissions, curriculum management, finance/billing, HR/payroll automation, exam delivery, dashboards, open APIs, and enterprise-grade security.',
                  icon: LayoutTemplate,
                  color: 'text-red-500',
                  borderColor: 'bg-red-500'
                },
                {
                  title: 'Business Benefits',
                  desc: 'Reduces operational costs through workflow automation while eliminating manual spreadsheets. Accelerates admissions conversion with digital onboarding, improves student outcomes via consolidated insights, and ensures compliance.',
                  icon: Activity,
                  color: 'text-blue-500',
                  borderColor: 'bg-blue-500'
                },
                {
                  title: 'Deployment & Integration',
                  desc: 'CampusNXT supports cloud-hosted and on-premise deployments, containerized delivery, and hybrid models. Exposes RESTful APIs, SSO (SAML/OAuth), and connectors for LMS, library systems, payment gateways, and identity providers.',
                  icon: Globe,
                  color: 'text-red-500',
                  borderColor: 'bg-red-500'
                },
                {
                  title: 'Security & Compliance',
                  desc: 'Built for institutional security: role-based access control, full audit logging, encryption at rest and in transit, secure backups, and configurable retention policies to meet GDPR and local data protection requirements.',
                  icon: ShieldCheck,
                  color: 'text-blue-500',
                  borderColor: 'bg-blue-500'
                },
                {
                  title: 'Implementation & Support',
                  desc: 'We provide structured implementation services including requirement workshops, data migration, integration consulting, training for administrators and faculty, and SLA-backed support options for production operations.',
                  icon: Users,
                  color: 'text-red-500',
                  borderColor: 'bg-red-500'
                },
                {
                  title: 'Target Customers',
                  desc: 'Universities, colleges, vocational institutes, and multi-campus groups seeking a unified, auditable, and extensible ERP to manage academic and administrative operations.',
                  icon: Target,
                  color: 'text-blue-500',
                  borderColor: 'bg-blue-500'
                }
              ].map((card, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex flex-col items-start gap-5 hover:shadow-md transition-shadow border border-gray-100 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 ${card.borderColor}`}></div>
                  
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 ${card.color.replace('text-', 'border-').replace('500', '200')} bg-white`}>
                    <card.icon className={`w-6 h-6 ${card.color}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1e3a5f] mb-2">{card.title}</h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE CAMPUSNXT */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Why Choose CampusNXT?</h2>
              <p className="text-gray-500 max-w-3xl mx-auto text-sm leading-relaxed">
                CampusNXT is more than just an ERP—it is a modern, modular, and hyper-extensible enterprise ecosystem engineered to power the future of higher education.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: 'Seamless Payment Gateway Integrations',
                  desc: 'Eliminate transaction friction instantly. CampusNXT comes out-of-the-box with native, secure integrations for leading global and regional payment gateways. Facilitate instant fee settlements, automatic invoice reconciliation, and instant digital receipts for students and parents with maximum reliability.',
                  icon: CreditCard,
                  color: 'text-blue-600',
                  bg: 'bg-blue-50'
                },
                {
                  title: 'Comprehensive Pre-Built Modules',
                  desc: 'Deploy a complete educational environment on day one. Our rich library of pre-built modules covers every operational need, including Academics, digital Admissions & Enrollment, conflict-free Timetable Generation, Hostel administration, Transport routing, and unified Campus Communication.',
                  icon: LayoutGrid,
                  color: 'text-red-500',
                  bg: 'bg-red-50'
                },
                {
                  title: '100% Modular & Open Ecosystem',
                  desc: 'Break free from rigid legacy software. CampusNXT is designed with an open platform paradigm. Its fully modular structure ensures you can plug in next-generation products, including our advanced AI Interviewer, modern LMS platforms, library databases, and custom third-party services, effortlessly.',
                  icon: Layers,
                  color: 'text-blue-600',
                  bg: 'bg-blue-50'
                },
                {
                  title: 'Ready-to-Deploy Maturity',
                  desc: 'Why build from scratch when you can launch tomorrow? CampusNXT is a battle-tested, mature product with the overwhelming majority of modern, enterprise-level ERP features already built-in, optimized, and ready for deployment. Accelerate your timeline and reduce custom development overhead to zero.',
                  icon: Rocket,
                  color: 'text-red-500',
                  bg: 'bg-red-50'
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow bg-white">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${item.bg}`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1e3a5f] mb-3">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <a href="/contact" className="inline-block px-8 py-3 bg-[#1e3a5f] text-white font-semibold rounded-full hover:bg-[#152c4a] transition-colors shadow-lg">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* DYNAMIC FAQ SECTION */}
        <ProductFAQSection 
          faqs={faqs} 
          subtitle="Find answers to common questions about our ERP platform. Ready to transform your institution? We're here to help."
        />

      </main>
      <Footer />
    </div>
  );
}
