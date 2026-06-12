import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductNav from '@/components/ProductNav';
import ProductFAQSection from '@/components/ProductFAQSection';
import ProductTestimonialsSection from '@/components/ProductTestimonialsSection';
import { 
  ShieldCheck, BarChart3, Server, Lock, Settings, Users,
  UploadCloud, Zap, TrendingUp, Globe, Database, Shield
} from 'lucide-react';

export default function AISmartExamPage() {
  const testimonials = [
    {
      quote: "AI-SmartExam has fundamentally changed how we evaluate students across our 12 campuses. The automated scoring for subjective answers is surprisingly nuanced and accurate, saving us thousands of faculty hours.",
      name: "Dr. Robert Singh",
      role: "Vice Chancellor",
      company: "National Technical University"
    },
    {
      quote: "The built-in proctoring and plagiarism detection give us total confidence in administering remote exams. We've completely eliminated the logistical nightmare of offline testing centers.",
      name: "Anita Desai",
      role: "Director of Examinations",
      company: "Excel Board of Education"
    },
    {
      quote: "Deep analytics on student performance allows us to identify learning gaps at the cohort level instantly. It's not just an evaluation tool; it's a critical academic feedback loop.",
      name: "Mark O'Connor",
      role: "Chief Academic Officer",
      company: "Pathfinder EdTech"
    }
  ];

  const faqs = [
    {
      question: "Can AI-SmartExam grade subjective and essay-type answers?",
      answer: "Yes, our proprietary Natural Language Processing (NLP) models are trained to evaluate subjective responses, essays, and long-form text based on predefined rubrics and key conceptual parameters provided by the examiner."
    },
    {
      question: "How does the remote proctoring feature work?",
      answer: "We utilize multi-modal AI proctoring that tracks eye movement, facial recognition, ambient noise, and multiple-person detection. It works silently in the background and flags suspicious events for manual review."
    },
    {
      question: "Does the system support handwritten answer sheets?",
      answer: "Absolutely. Our advanced intelligent character recognition (ICR) pipeline can scan, digitize, and grade handwritten answers with extremely high accuracy across multiple languages."
    },
    {
      question: "Is AI-SmartExam compliant with data privacy regulations like GDPR and FERPA?",
      answer: "Yes, data security is paramount. The platform is fully compliant with global data protection standards (GDPR, FERPA), utilizing end-to-end encryption and anonymized grading protocols."
    },
    {
      question: "How quickly can results be published?",
      answer: "For objective exams, results and detailed analytical reports are generated instantaneously upon submission. For subjective assessments, automated grading can process thousands of scripts in mere minutes."
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
              AI-Based Smart Exam Evaluation Tool
            </h1>
            <h2 className="text-base md:text-lg font-medium mb-2">
              Transform Your Evaluation Process
            </h2>
            <p className="text-sm md:text-base text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Automated scoring, deep analytics, and proctoring in one complete platform.
            </p>
            <button className="px-8 py-2.5 bg-white text-[#1e3a5f] font-semibold rounded-full hover:bg-gray-100 transition-colors">
              Request Demo
            </button>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1e3a5f]">Key Features</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Effortless Uploads',
                  desc: 'Scan & upload OMR sheets or option based answers. Question paper + answer key supported.',
                  img: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=400&q=80',
                  colorClass: 'text-red-500'
                },
                {
                  title: 'Automated Evaluation',
                  desc: 'AI engine matches answers with pre-uploaded keys. Instant scoring: per-question + total marks.',
                  img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80',
                  colorClass: 'text-blue-600'
                },
                {
                  title: 'Smart Results Management',
                  desc: 'Auto-update scores into a secure database. Track student progress in real time.',
                  img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
                  colorClass: 'text-red-500'
                },
                {
                  title: 'Multi-Region Leaderboards',
                  desc: 'Compare performance across regions, states, and nationwide. Enable healthy competition & benchmarking.',
                  img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=400&q=80',
                  colorClass: 'text-blue-600'
                }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow">
                  <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
                  <div className="p-6 flex flex-col items-start text-left">
                    <h3 className={`text-sm font-bold mb-3 ${item.colorClass}`}>{item.title}</h3>
                    <p className="text-gray-500 text-[11px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCT OVERVIEW */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Product Overview</h2>
              <p className="text-gray-500 max-w-3xl mx-auto text-sm leading-relaxed">
                AI-SmartExam is a high-integrity online proctoring and automated exam evaluation system. It manages scanned physical answer sheet ingestion, matches digitized answers with dynamic rubrics, and handles large-scale grading.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Key Capabilities',
                  desc: 'AI proctoring (gaze/face/noise detection), OCR digitizer for scanned handwriting, automated grading engine for subjective questions, and leaderboard generation.',
                  icon: ShieldCheck,
                  color: 'text-red-500',
                  borderColor: 'border-red-500'
                },
                {
                  title: 'Business Benefits',
                  desc: 'Reduces grading turnaround times by 75%, eliminates human evaluators\' bias, protects exam integrity from academic misconduct, and provides granular school metrics.',
                  icon: BarChart3,
                  color: 'text-blue-500',
                  borderColor: 'border-blue-500'
                },
                {
                  title: 'Deployment & Integration',
                  desc: 'Containerized deploy model (Docker/K8s) for massive concurrent scaling, integrating with Canvas, Blackboard, or internal student records.',
                  icon: Server,
                  color: 'text-red-500',
                  borderColor: 'border-red-500'
                },
                {
                  title: 'Security & Compliance',
                  desc: 'GDPR and FERPA compliance, secure lock-down browser integrations, high-security candidate identity verification, and immutable log trails.',
                  icon: Lock,
                  color: 'text-blue-500',
                  borderColor: 'border-blue-500'
                },
                {
                  title: 'Implementation & Support',
                  desc: 'On-boarding workshops for institutional admins, proctor training, custom rubric model tuning, and standby support during high-stakes exams.',
                  icon: Settings,
                  color: 'text-red-500',
                  borderColor: 'border-red-500'
                },
                {
                  title: 'Target Customers',
                  desc: 'State education boards, universities, licensing testing bodies, corporate assessment partners, and professional certification providers.',
                  icon: Users,
                  color: 'text-blue-500',
                  borderColor: 'border-blue-500'
                }
              ].map((card, i) => (
                <div key={i} className={`bg-white p-8 rounded-2xl shadow-sm flex flex-col items-start gap-4 hover:shadow-md transition-shadow border-t-2 border-x border-b border-x-gray-100 border-b-gray-100 ${card.borderColor}`}>
                  <div className={`w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center`}>
                    <card.icon className={`w-5 h-5 ${card.color}`} />
                  </div>
                  <h3 className="text-sm font-bold text-[#1e3a5f]">{card.title}</h3>
                  <p className="text-gray-500 text-[11px] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRANSFORM YOUR EVALUATION PROCESS */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1e3a5f]">Transform Your Evaluation Process</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Seamless Integration', icon: UploadCloud, color: 'text-red-500', desc: 'Works with existing OMR systems and question formats' },
                { name: 'Lightning Fast', icon: Zap, color: 'text-blue-500', desc: 'Process hundreds of answer sheets in minutes, not hours' },
                { name: 'Advanced Analytics', icon: TrendingUp, color: 'text-red-500', desc: 'Real-time performance tracking and detailed insights' },
                { name: 'Multi-Region Support', icon: Globe, color: 'text-blue-500', desc: 'Compare and benchmark performance across different regions' },
                { name: 'Secure Database', icon: Database, color: 'text-red-500', desc: 'Auto-updated scores with enterprise-grade security' },
                { name: 'Competitive Insights', icon: Shield, color: 'text-blue-500', desc: 'Enable healthy competition with comprehensive leaderboards' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-start gap-4 hover:shadow-md transition-shadow">
                  <div className={`w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <h3 className="text-sm font-bold text-[#1e3a5f]">{item.name}</h3>
                  <p className="text-gray-500 text-[11px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE SECTION */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Why Choose Our Smart Exam Tool?</h2>
              <p className="text-gray-500 max-w-3xl mx-auto text-sm leading-relaxed">
                AI-SmartExam is not just a grading tool—it is a complete exam intelligence platform that eliminates manual evaluation, fraud, and bias at scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Save Hours of Manual Work',
                  desc: 'Eliminate the burden of hand-checking thousands of answer sheets. AI-SmartExam processes entire batches in minutes with 99%+ accuracy.',
                  img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80'
                },
                {
                  title: 'AI-Powered Precision Grading',
                  desc: 'Evaluates both objective and subjective answers against dynamic rubrics—delivering unbiased, consistent scores every time.',
                  img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=400&q=80'
                },
                {
                  title: 'Scale Across Institutions',
                  desc: 'From a single classroom to a state-level board running 100,000+ assessments, containerized cloud infrastructure scales instantly.',
                  img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=400&q=80'
                },
                {
                  title: 'Deep Analytics & Leaderboards',
                  desc: 'Gain granular insights at school, district, state, and national levels. Multi-region leaderboards spark healthy competition.',
                  img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80'
                }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow">
                  <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
                  <div className="p-6 text-center flex flex-col items-center">
                    <h3 className="text-sm font-bold text-[#1e3a5f] mb-3">{item.title}</h3>
                    <p className="text-gray-500 text-[11px] leading-relaxed">
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

        {/* DYNAMIC TESTIMONIALS SECTION */}
        <ProductTestimonialsSection testimonials={testimonials} />

        {/* DYNAMIC FAQ SECTION */}
        <ProductFAQSection faqs={faqs} />

      </main>
      <Footer />
    </div>
  );
}
