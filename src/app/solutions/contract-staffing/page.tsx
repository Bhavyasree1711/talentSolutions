import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ContractStaffingPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <Image
          src="/images/service-executive-search.png"
          alt="Contract Staffing, RPO & WPO"
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
              Contract Staffing, RPO & WPO
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Flexible workforce solutions for project-based requirements, delivering specialized skills without the overhead of permanent headcount.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-10">
            Our Offerings
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition border-t-4 border-t-red-600">
              <h3 className="font-semibold text-xl text-[#0B1F3A] mb-3">
                Contract Staffing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Quickly scale your team with specialized talent for short-term projects or seasonal spikes without long-term commitments.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition border-t-4 border-t-red-600">
              <h3 className="font-semibold text-xl text-[#0B1F3A] mb-3">
                Recruitment Process Outsourcing (RPO)
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Outsource all or part of your recruitment process. We act as an extension of your HR team to improve hiring speed and quality.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition border-t-4 border-t-red-600">
              <h3 className="font-semibold text-xl text-[#0B1F3A] mb-3">
                Workforce Process Outsourcing (WPO)
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive management of your contingent workforce, including compliance, payroll, and performance tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">
            Why Choose Our Contract Solutions?
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Reduce overhead costs of permanent headcount',
              'Access specialized skills for complex technology implementations',
              'Scale your workforce up or down based on project demands',
              'Mitigate co-employment risks and ensure compliance',
              'Seamless payroll and benefits administration',
              'Faster onboarding and project deployment'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">
          Looking for Flexible Talent?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss how our contract staffing and outsourcing solutions can support your business goals.
        </p>

        <a
          href="/#contact"
          className="px-8 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition shadow-lg hover:shadow-xl inline-block"
        >
          Contact Us Today
        </a>
      </section>
    </div>
  );
}