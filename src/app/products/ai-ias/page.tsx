import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductNav from '@/components/ProductNav';
import { 
  ArrowRight, ShieldCheck, Users, 
  Settings, Layout, Mic, BrainCircuit, Activity, BarChart, Target
} from 'lucide-react';

export default function AIIASPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <ProductNav />
      
      <main className="flex-grow pt-4 pb-16">
        {/* HERO SECTION */}
        <section className="relative bg-[#0B1F3A] text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1920&q=80" 
              alt="Interview Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/90 to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                AI Interview <span className="text-red-500">Platform</span>
              </h1>
              <p className="text-xl font-semibold text-gray-200 mb-4">Enterprise Interview Preparation Suite</p>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                Master interviewing and prepare for technical recruitment with multi-domain support, dynamic questioning, and performance analytics for efficient career development.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contact" 
                  className="px-8 py-3.5 bg-red-700 hover:bg-red-600 text-white font-bold rounded-lg shadow-lg hover:shadow-red-700/20 transition-all flex items-center justify-center gap-2"
                >
                  Request Demo <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO SECTION */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">
              Smarter Practice. Better Performance. Career Success.
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
              Our AI Interview Assistant provides comprehensive preparation for MBA admissions, banking interviews, campus recruitment, and more—through real-time, personalized interview simulations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'AI Video Interview System', icon: Layout },
                { name: 'Live Interview', icon: Mic },
                { name: 'AI Interview Assistant', icon: BrainCircuit }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-[#0B1F3A]/5 text-[#0B1F3A] flex items-center justify-center mb-4">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-gray-900">{item.name}</h3>
                </div>
              ))}
            </div>
            <p className="mt-8 text-gray-500 italic">Analyzing tone, posture, confidence, and context in real-time.</p>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">Features</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover how our intelligent platform elevates your interview preparation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Smart Questioning',
                  desc: 'Generates interview questions tailored to your resume, skills, and domain.',
                  icon: Target
                },
                {
                  title: 'Real Interview Simulation',
                  desc: 'Practice with voice-based AI that adapts like a real interviewer.',
                  icon: Mic
                },
                {
                  title: 'Instant Feedback',
                  desc: 'Get analysis on your responses, tone, and confidence.',
                  icon: Activity
                },
                {
                  title: 'Flexible Prep',
                  desc: 'Choose your interview type: MBA, Bank, or Campus Recruitment.',
                  icon: Settings
                },
                {
                  title: 'Interactive Interface',
                  desc: 'Select focus areas and track progress seamlessly.',
                  icon: Layout
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
                      AI IAS is an enterprise-grade AI-powered recruiting and video interview preparation suite. The platform automates pre-screening, conducts realistic verbal/behavioral interview simulations, and delivers analytical reports on candidate sentiment, speech metrics, vocabulary, and domain relevance.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-600"></div> Key Capabilities
                    </h3>
                    <p className="text-gray-600">
                      Autonomous video interviews, dynamic question generation, real-time emotion/tone analysis, candidate scoring, and customizable interview rubrics.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-600"></div> Business Benefits
                    </h3>
                    <p className="text-gray-600">
                      Cuts hiring cycle times by up to 60%, eliminates manual resume filtration bias, and enhances campus placement success rates for academic institutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Deployment & Integration</h3>
                    <p className="text-gray-600 text-sm">
                      Secure cloud-hosted deployment with RESTful API connectors to existing ATS platforms, HR portals, and university ERP systems like CampusNXT.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Security & Compliance</h3>
                    <p className="text-gray-600 text-sm">
                      ISO 27001-aligned security, GDPR-compliant candidate data protection, encrypted video storage, and auditable grading trails.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Implementation & Support</h3>
                    <p className="text-gray-600 text-sm">
                      Fast configuration of interview templates, training for HR administrators, automated onboarding, and 24/7 technical support.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Target Customers</h3>
                    <p className="text-gray-600 text-sm">
                      Corporate recruiting teams, human resource departments, placement cells, career prep schools, and higher education universities.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our AI Interview System?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Harness the power of intelligent feedback and modern training methodologies to excel in your next interview.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Boost Real-Interview Confidence',
                  desc: 'Reduce anxiety and build natural eloquence by practicing in a realistic, pressure-free simulation.'
                },
                {
                  title: 'On-Demand Personalized Practice',
                  desc: 'Access customized interview sessions tailored to your specific field and schedule—anytime, anywhere.'
                },
                {
                  title: 'Data-Driven Performance Insights',
                  desc: 'Get precise, instant metrics on your vocabulary, pacing, answer relevance, and body language.'
                },
                {
                  title: 'Structured, Bias-Free Evaluation',
                  desc: 'Ensure a fair and consistent assessment based entirely on merit and structured grading standards.'
                }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-600 flex-shrink-0 flex items-center justify-center mt-1">
                      <Target className="w-5 h-5 text-white" />
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
                  q: 'How does the AI Interview System reduce our time-to-hire?',
                  a: 'By automating the initial screening phase, our system allows you to interview thousands of candidates simultaneously. HR teams only need to review the top AI-shortlisted profiles, cutting initial screening time by up to 80%.'
                },
                { q: 'Can we customize the interview questions for specific technical or behavioral roles?', a: 'Yes, the AI dynamically adjusts questions based on the job description, required skills, and domain.' },
                { q: 'How does the AI evaluate candidate responses and soft skills?', a: 'It analyzes speech metrics, vocabulary usage, sentiment, confidence levels, and body language through real-time video and audio processing.' },
                { q: 'Does the system integrate with our existing Applicant Tracking System (ATS)?', a: 'Yes, we provide RESTful API connectors for seamless integration with major ATS platforms.' },
                { q: 'How do you ensure the AI screening is fair and unbiased?', a: 'Our models are trained on diverse datasets and evaluate solely based on predefined rubrics and merit, ignoring demographic factors.' },
                { q: 'Is the platform secure and compliant with data privacy laws?', a: 'Yes, it is ISO 27001-aligned and fully GDPR-compliant with encrypted video storage.' },
                { q: 'Can multiple hiring managers review the recorded AI interviews?', a: 'Absolutely, recorded sessions and analytical reports can be shared securely with multiple stakeholders.' }
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
