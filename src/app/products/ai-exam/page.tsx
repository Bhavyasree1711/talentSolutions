import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductNav from '@/components/ProductNav';
import { 
  ArrowRight, ShieldCheck, FileText, BarChart3, Globe, Scan, 
  CheckCircle, Database, Server, School, Building2, Users
} from 'lucide-react';

export default function AISmartExamPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <ProductNav />
      
      <main className="flex-grow pt-4 pb-16">
        {/* HERO SECTION */}
        <section className="relative bg-[#0B1F3A] text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1920&q=80" 
              alt="Exam Evaluation Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/90 to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                AI-Based Smart <span className="text-red-500">Exam Evaluation</span> Tool
              </h1>
              <p className="text-xl font-semibold text-gray-200 mb-4">Smart Exam Evaluation Made Simple. AI-Powered. Scalable. Accurate.</p>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                A next-gen system that automates the entire exam evaluation cycle – from scanned sheet uploads to instant results & performance insights.
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

        {/* FEATURES GRID */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">Key Features</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Transforming the traditional grading process into a fast, digital, and unbiased pipeline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Effortless Uploads', desc: 'Scan & upload OMR sheets or option based answers. Question paper + answer key supported.', icon: Scan },
                { title: 'Automated Evaluation', desc: 'AI engine matches answers with pre-uploaded keys. Instant scoring: per-question + total marks.', icon: CheckCircle },
                { title: 'Smart Results Management', desc: 'Auto-update scores into a secure database. Track student progress in real time.', icon: Database },
                { title: 'Multi-Region Leaderboards', desc: 'Compare performance across regions, states, and nationwide. Enable healthy competition & benchmarking.', icon: Globe },
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all group text-center">
                  <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-700 flex items-center justify-center mb-6 mx-auto group-hover:bg-red-700 group-hover:text-white transition-colors">
                    <feature.icon className="w-8 h-8" />
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

        {/* TRANSFORM YOUR PROCESS */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">Transform Your Evaluation Process</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Seamless Integration', icon: Server, desc: 'Works with existing OMR systems and question formats' },
                { name: 'Lightning Fast', icon: BarChart3, desc: 'Process hundreds of answer sheets in minutes, not hours' },
                { name: 'Advanced Analytics', icon: BarChart3, desc: 'Real-time performance tracking and detailed insights' },
                { name: 'Multi-Region Support', icon: Globe, desc: 'Compare and benchmark performance across different regions' },
                { name: 'Secure Database', icon: ShieldCheck, desc: 'Auto-updated scores with enterprise-grade security' },
                { name: 'Competitive Insights', icon: Users, desc: 'Enable healthy competition with comprehensive leaderboards' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#0B1F3A]/5 text-[#0B1F3A] flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OVERVIEW & SPECS */}
        <section className="py-20 bg-gray-50">
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
                      AI-SmartExam is a high-integrity online proctoring and automated exam evaluation system. It manages scanned physical answer sheet ingestion, matches digitized answers with dynamic rubrics, and handles large-scale grading.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-600"></div> Key Capabilities
                    </h3>
                    <p className="text-gray-600">
                      AI proctoring (gaze/face/noise detection), OCR digitizer for scanned handwriting, automated grading engine for subjective questions, and leaderboard generation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-600"></div> Business Benefits
                    </h3>
                    <p className="text-gray-600">
                      Reduces grading turnaround times by 75%, eliminates human evaluators' bias, protects exam integrity from academic misconduct, and provides granular school metrics.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Deployment & Integration</h3>
                    <p className="text-gray-600 text-sm">
                      Containerized deploy model (Docker/K8s) for massive concurrent scaling, integrating with Canvas, Blackboard, or internal student records.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Security & Compliance</h3>
                    <p className="text-gray-600 text-sm">
                      GDPR and FERPA compliance, secure lock-down browser integrations, high-security candidate identity verification, and immutable log trails.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Implementation & Support</h3>
                    <p className="text-gray-600 text-sm">
                      On-boarding workshops for institutional admins, proctor training, custom rubric model tuning, and standby support during high-stakes exams.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Target Customers</h3>
                    <p className="text-gray-600 text-sm">
                      State education boards, universities, licensing testing bodies, corporate assessment partners, and professional certification providers.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Smart Exam Tool?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                AI-SmartExam is not just a grading tool—it is a complete exam intelligence platform that eliminates manual evaluation, fraud, and bias at scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Save Hours of Manual Correction',
                  desc: 'Eliminate the burden of hand-checking thousands of answer sheets. AI-SmartExam processes entire batches in minutes with 99%+ accuracy—freeing educators to focus on teaching, not correcting.'
                },
                {
                  title: 'AI-Powered Precision Grading',
                  desc: 'Our deep-learning OCR and NLP grading engine evaluates both objective and subjective answers against dynamic rubrics—delivering unbiased, consistent, and ultra-accurate scores every single time.'
                },
                {
                  title: 'Scale Across Institutions',
                  desc: 'From a single classroom to a state-level examination board running 100,000+ concurrent assessments, AI-SmartExam\'s containerized cloud infrastructure scales instantly without performance degradation.'
                },
                {
                  title: 'Deep Analytics & Leaderboards',
                  desc: 'Gain granular insights into student performance at school, district, state, and national levels. Multi-region leaderboards spark healthy competition while pinpointing skill gaps that need targeted intervention.'
                }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-600 flex-shrink-0 flex items-center justify-center mt-1">
                      <ShieldCheck className="w-5 h-5 text-white" />
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
                  q: 'How does AI-SmartExam prevent cheating during remote online assessments?',
                  a: 'The platform integrates advanced AI proctoring that utilizes gaze tracking, facial recognition, and background noise detection, paired with a secure lock-down browser.'
                },
                { q: 'Can this platform handle high-stakes university or certification exams?', a: 'Yes. It was built specifically to secure and process high-stakes exams, using high-security candidate identity verification and immutable audit trails.' },
                { q: 'Is the platform scalable enough for massive simultaneous testing?', a: 'Absolutely. We use a containerized deployment model (Docker/K8s) that automatically scales to handle hundreds of thousands of concurrent users.' },
                { q: 'How does the automated grading system handle subjective or essay answers?', a: 'Our NLP engine evaluates written text against instructor-defined rubrics, looking for key concepts, semantic relevance, and structure rather than just exact word matches.' },
                { q: 'Can corporate HR use this for technical or compliance testing?', a: 'Yes, it is highly adaptable for corporate assessment partners to conduct secure compliance, technical, or pre-employment testing.' },
                { q: 'What kind of analytics and reporting are provided post-exam?', a: 'Administrators get granular insights into student performance at cohort, demographic, and regional levels, complete with multi-region leaderboards.' },
                { q: 'Does the platform integrate with standard Learning Management Systems?', a: 'Yes, AI-SmartExam integrates seamlessly via LTI (Learning Tools Interoperability) with standard LMS platforms like Canvas, Moodle, and Blackboard for automated roster syncing and grade pushback.' }
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
