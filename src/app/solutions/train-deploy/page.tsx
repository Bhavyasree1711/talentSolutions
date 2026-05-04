import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, GraduationCap, BriefcaseBusiness, Rocket } from 'lucide-react';

export default function TrainDeployPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Background Image */}
        <Image
          src="/images/training-classroom.png"
          alt="Train and Deploy Solutions"
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
              Train & Deploy
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Bridging the skill gap by developing custom training programs to upskill talent, followed by strategic deployment into your organization.
            </p>
          </div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-red-700 uppercase tracking-widest">The Process</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-4 text-[#0B1F3A]">
              Customized Skill Building
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              We source high-potential candidates and train them precisely on the technologies and methodologies your organization uses, delivering project-ready professionals on day one.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">Corporate Training</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Intensive, boot-camp style training customized to bridge the gap between academic knowledge and your enterprise’s tech stack requirements.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">Skill Development</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Holistic upskilling that includes live project simulations, Agile methodologies, cloud certifications, and soft skill improvements.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6">
                <BriefcaseBusiness className="w-6 h-6 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">Project Deployment</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Strategic onboarding of fully-equipped talent directly into your active projects, ensuring immediate productivity without a steep learning curve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-10 text-center">
            How Train & Deploy Helps You
          </h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              'Access to highly motivated, project-ready talent',
              'Significant reduction in internal training costs and time',
              'Customized curriculum tailored to your specific tools',
              'Faster productivity from day one of deployment',
              'Higher retention rates through structured career paths',
              'Scalable solution for bulk hiring needs'
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
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">
            Ready to Build Your Workforce?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Partner with us to create a reliable pipeline of customized, deployment-ready talent.
          </p>

          <Link
            href="/#contact"
            className="px-8 py-3 bg-red-700 text-white rounded-lg font-bold text-sm hover:bg-red-800 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 uppercase tracking-wide group"
          >
            Get Started Today
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}