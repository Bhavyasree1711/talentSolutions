import Image from 'next/image';
import Link from 'next/link';
import PageFAQSection from '@/components/PageFAQSection';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function PermanentStaffingPage() {
  return (
    <div className="bg-white min-h-screen">
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
              <Link href="/solutions/talent-acquisition" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">Talent Acquisition</Link>
              <Link href="/solutions/contract-staffing" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">Contract Staffing</Link>
              <div className="bg-[#0B1F3A] text-white px-5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap flex items-center shrink-0 shadow-sm cursor-default">
                Permanent Staffing
              </div>
              <Link href="/solutions/train-deploy" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">Train & Deploy</Link>
              <Link href="/solutions/skill-assessment" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">Skill Assessment</Link>
            </div>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-[40vh] max-h-[400px] flex items-center py-20">
        {/* Background Image */}
        <Image
          src="/images/service-leadership.png"
          alt="Permanent Staffing & BoT"
          fill
          priority
          className="object-cover object-[80%_center] lg:object-right"
        />
        {/* Darker Gradient Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/80 to-[#0B1F3A]/40" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white w-full mt-4 lg:mt-6">
          <div className="max-w-xl">
            <h1
              className="text-4xl lg:text-5xl font-bold mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Permanent Staffing & Build-Operate-Transfer (BoT)
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Executing strategic hiring to foster long-term organizational growth, ensuring candidates possess both technical prowess and cultural alignment with your enterprise's values and objectives.
            </p>
          </div>
        </div>
      </section>

      {/* OVERVIEW & OFFERINGS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-red-700 uppercase tracking-widest">Our Approach</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-6 text-[#0B1F3A]">
              Building Your Core Team
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Finding the right permanent employees is critical to your company's long-term success. Our dedicated recruitment experts utilize advanced sourcing strategies and rigorous screening processes to deliver top-tier talent that drives innovation and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Permanent Staffing */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-lg hover:border-red-200 transition-all duration-300">
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                Permanent Staffing
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We handle the entire recruitment lifecycle, from initial requirement gathering to final offer negotiation, ensuring a seamless hiring experience for both you and the candidates.
              </p>
              <ul className="space-y-3">
                {['Comprehensive role profiling', 'Extensive talent mapping', 'Rigorous behavioral & technical screening', 'Post-placement integration support'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* BoT Model */}
            <div className="bg-[#0B1F3A] rounded-2xl p-8 shadow-lg text-white">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Build-Operate-Transfer (BoT)
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                A hybrid model where we build your dedicated offshore or nearshore team, operate it to establish processes and culture, and eventually transfer ownership directly to your organization.
              </p>
              <ul className="space-y-3">
                {['Risk-free rapid team scaling', 'Complete operational transparency', 'Seamless knowledge transfer', 'Cost-effective global expansion'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-12 text-center">
            The DMX Advantage for Permanent Hiring
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'High Retention Rates',
                desc: 'Our stringent matching process focuses on cultural fit as much as technical skills, leading to an industry-leading 94% retention rate beyond the first year.'
              },
              {
                title: 'Reduced Time-to-Hire',
                desc: 'Access to an active database of pre-screened passive candidates allows us to deliver high-quality shortlists in significantly less time.'
              },
              {
                title: 'Guaranteed Placements',
                desc: 'We stand by the quality of our candidates, offering replacement guarantees to give you complete peace of mind with your hiring decisions.'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 group">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-700 transition-colors duration-300">
                  <span className="text-red-700 font-bold text-xl group-hover:text-white">0{index + 1}</span>
                </div>
                <h3 className="font-bold text-xl text-[#0B1F3A] mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <PageFAQSection 
        title="Permanent Staffing FAQs"
        description="Find answers to common questions about our permanent hiring and BoT solutions."
        faqs={[
          {
            question: "What is your permanent staffing process?",
            answer: "We start by deeply understanding your company culture and the specific role requirements. Then we source, screen, and interview candidates, presenting only a curated shortlist of top talent for your consideration."
          },
          {
            question: "What happens if a permanent hire leaves shortly after joining?",
            answer: "We offer replacement guarantees on all permanent placements. If a candidate leaves within the stipulated guarantee period, we will find a replacement at no extra cost."
          },
          {
            question: "How long does it typically take to close a permanent role?",
            answer: "While it varies depending on the role's complexity and seniority, our extensive talent network typically allows us to present qualified candidates within 1 to 2 weeks."
          },
          {
            question: "What is the Build-Operate-Transfer (BoT) model?",
            answer: "BoT is a hybrid model where we build a dedicated team for you, manage its operations to establish culture and processes, and eventually transfer complete ownership of the team and operations to your organization."
          },
          {
            question: "How do you evaluate candidates for cultural fit?",
            answer: "We go beyond technical skills by conducting in-depth behavioral interviews and utilizing personality assessments tailored to match your organizational values and team dynamics."
          }
        ]}
      />

      {/* CTA SECTION */}
      <section className="py-20 relative overflow-hidden bg-white text-center">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-red-50 rounded-full -translate-x-1/2 translate-y-1/2 opacity-50 blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-6">
            Ready to Build Your Core Team?
          </h2>
          <p className="text-gray-600 mb-10 text-lg max-w-2xl mx-auto">
            Let us help you find the permanent talent that will drive your organization forward. Partner with us for a seamless hiring experience.
          </p>

          <Link
            href="/#contact"
            className="px-8 py-4 bg-red-700 text-white rounded-lg font-bold text-sm hover:bg-red-800 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 uppercase tracking-wide group"
          >
            Start Hiring Today
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}