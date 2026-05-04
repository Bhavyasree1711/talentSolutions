import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Search, Users, UserPlus, GraduationCap } from 'lucide-react';

export default function TalentAcquisitionPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-center pt-20">
        <Image
          src="/images/hero-team.png"
          alt="Talent Acquisition"
          fill
          priority
          className="object-cover object-[80%_center] lg:object-right"
        />
        {/* Refined Gradient: Solid dark on left for text readability, fully transparent on right for clear faces */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 from-10% via-[#0B1F3A]/70 via-45% to-transparent to-75%" />

        {/* Back Button Overlay */}
        <div className="absolute top-24 lg:top-28 left-0 right-0 z-20">
          <div className="max-w-6xl mx-auto px-6">
            <Link
              href="/#talents"
              className="inline-flex items-center justify-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-md text-sm font-semibold hover:bg-white hover:text-red-700 transition-all shadow-sm group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Solutions
            </Link>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white w-full mt-10 lg:mt-14">
          <div className="max-w-xl">
            <h1 
              className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
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

      {/* CTA */}
      <section className="py-16 text-center relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-red-50 rounded-full -translate-x-1/2 translate-y-1/2 opacity-50 blur-3xl" />
        
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Partner with us to streamline your hiring process and secure the exact talent your business requires to succeed.
          </p>

          <Link
            href="/#contact"
            className="px-8 py-3 bg-red-700 text-white rounded-lg font-bold text-sm hover:bg-red-800 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 uppercase tracking-wide group"
          >
            Get in Touch
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}