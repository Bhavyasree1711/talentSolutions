import Image from 'next/image';
import Link from 'next/link';
import PageFAQSection from '@/components/PageFAQSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { ArrowLeft, CheckCircle2, Search, Users, UserPlus, GraduationCap } from 'lucide-react';

export default function TalentAcquisitionPage() {
  return (
    <div className="bg-white min-h-screen pt-16 md:pt-20">
      <Header />
      {/* Secondary Nav */}
      <div className="bg-white border-b border-gray-200 py-4 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
            <Link
              href="/solutions"
              className="flex items-center gap-2 text-gray-600 hover:text-[#E63946] border border-gray-200 hover:border-[#E63946] rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap shrink-0 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Solutions
            </Link>
            <div className="flex items-center gap-4">
              <div className="bg-[#0B1F3A] text-white px-5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap flex items-center shrink-0 shadow-sm cursor-default">
                Talent Acquisition
              </div>
              <Link href="/solutions/contract-staffing" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">Contract Staffing</Link>
              <Link href="/solutions/permanent-staffing" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">Permanent Staffing</Link>
              <Link href="/solutions/train-deploy" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">Train & Deploy</Link>
              <Link href="/solutions/skill-assessment" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">Skill Assessment</Link>
            </div>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative w-full h-[320px] md:h-[400px] flex items-center overflow-hidden">
        <Image
          src="/images/hero-team.png"
          alt="Talent Acquisition"
          fill
          priority
          className="object-cover object-[80%_top] lg:object-right-top"
        />
        {/* Darker Gradient Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/80 to-[#0B1F3A]/40" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white w-full mt-4 lg:mt-6">
          <div className="max-w-xl">
            <h1 
              className="text-4xl lg:text-5xl font-bold mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Talent Acquisition
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              End-to-end hiring solutions leveraging proprietary screening processes and extensive industry networks to identify, attract, and secure top-tier talent.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-red-700 uppercase tracking-widest">Our Expertise</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-4 text-[#0B1F3A]">
              Tailored Hiring Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              We understand that every business has unique hiring needs. Our specialized acquisition models are designed to connect you with the precise talent required to drive your enterprise forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300 flex flex-col h-full">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6">
                <Search className="w-6 h-6 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">Executive Search</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                Targeted headhunting for C-suite and senior leadership roles, ensuring visionary candidates match your corporate culture and strategic objectives perfectly.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300 flex flex-col h-full">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">IT & Non-IT Staffing</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                Sourcing highly skilled professionals across diverse technical and non-technical domains. We verify both technical prowess and essential soft skills.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300 flex flex-col h-full">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6">
                <UserPlus className="w-6 h-6 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">Bulk Hiring</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                Scalable and efficient mass recruitment drives to quickly ramp up your workforce without compromising on candidate quality or compliance.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300 flex flex-col h-full">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">Campus Recruitment</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                Connecting your brand with top-tier academic institutions to hire fresh, dynamic, and motivated graduate talent ready to be molded into future leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-10 text-center">
            How It Helps You
          </h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              'Significantly faster hiring processes and reduced time-to-fill',
              'Access to an extensive network of passive, high-quality candidates',
              'Data-driven screening methodologies ensuring the perfect fit',
              'Improved long-term retention rates through cultural alignment',
              'Cost-effective scalable solutions that adapt to your business cycles',
              'Dedicated account management providing end-to-end recruitment support'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <PageFAQSection 
        title="Talent Acquisition FAQs"
        description="Find answers to common questions about our end-to-end hiring processes."
        faqs={[
          {
            question: "How does your Executive Search differ from standard recruitment?",
            answer: "Executive search is a discreet and highly targeted process aimed at C-level and senior leadership roles. We utilize extensive networks to headhunt passive candidates who can bring transformative leadership to your organization."
          },
          {
            question: "Do you handle both IT and Non-IT staffing?",
            answer: "Yes, our specialized recruitment teams are divided by industry domains, allowing us to source expert professionals across both complex technical landscapes and diverse non-technical sectors."
          },
          {
            question: "What is your approach to bulk hiring or mass recruitment?",
            answer: "We deploy scalable processes leveraging automation, targeted campus drives, and large-scale assessment tools to efficiently hire high volumes of candidates without compromising on quality or compliance."
          },
          {
            question: "How do you source passive candidates?",
            answer: "We engage passive candidates through proactive networking, proprietary talent pools, industry events, and targeted outreach strategies that highlight the unique value proposition of your employer brand."
          },
          {
            question: "What is the benefit of partnering with you for campus recruitment?",
            answer: "We have established relationships with top-tier academic institutions. We handle the logistics, initial screening, and coordination, connecting your brand with the best emerging graduate talent."
          }
        ]}
      />

      {/* CTA SECTION */}
      <CTASection 
        title="Ready to Build Your Dream Team?"
        subtitle="Partner with us to streamline your hiring process and secure the exact talent your business requires to succeed."
        buttonText="Get in Touch"
      />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}