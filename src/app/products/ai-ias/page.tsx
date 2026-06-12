import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductNav from '@/components/ProductNav';
import ProductFAQSection from '@/components/ProductFAQSection';
import ProductTestimonialsSection from '@/components/ProductTestimonialsSection';
import { 
  Camera, BrainCircuit, Mic, BarChart, Settings, MessageSquare, 
  LayoutTemplate, Activity, Globe, ShieldCheck, Users, Target
} from 'lucide-react';

export default function AIIASPage() {
  const testimonials = [
    {
      quote: "The AI IAS platform provides incredibly accurate, real-time feedback on candidates' tone, confidence, and context. It has drastically reduced our hiring time while improving the quality of our shortlists.",
      name: "Sarah Jenkins",
      role: "Head of Talent Acquisition",
      company: "Global Tech Solutions"
    },
    {
      quote: "Practicing with the AI Interview Assistant gave me the exact simulation I needed for my banking interviews. The feedback on my posture and response structure was invaluable.",
      name: "Vikram S.",
      role: "Investment Banking Analyst",
      company: "Recent Hire"
    },
    {
      quote: "We've integrated AI IAS into our campus recruitment drives. Handling thousands of initial interviews concurrently without human bias has been a game-changer for our HR team.",
      name: "Priya Desai",
      role: "Campus Recruitment Lead",
      company: "Enterprise Corp"
    }
  ];

  const faqs = [
    {
      question: "How does the AI Interview System reduce our time-to-hire?",
      answer: "By automating the initial screening phase, our system allows you to interview thousands of candidates simultaneously. HR teams only need to review the top AI-shortlisted profiles, cutting initial screening time by up to 80%."
    },
    {
      question: "Can we customize the interview questions for specific technical or behavioral roles?",
      answer: "Yes, the AI dynamically adjusts questions based on the job description, required skills, and domain."
    },
    {
      question: "How does the AI evaluate candidate responses and soft skills?",
      answer: "It analyzes speech metrics, vocabulary usage, sentiment, confidence levels, and body language through real-time video and audio processing."
    },
    {
      question: "Does the system integrate with our existing Applicant Tracking System (ATS)?",
      answer: "Yes, we provide RESTful API connectors for seamless integration with major ATS platforms."
    },
    {
      question: "How do you ensure the AI screening is fair and unbiased?",
      answer: "Our models are trained on diverse datasets and evaluate solely based on predefined rubrics and merit, ignoring demographic factors."
    },
    {
      question: "Is the platform secure and compliant with data privacy laws?",
      answer: "Yes, it is ISO 27001-aligned and fully GDPR-compliant with encrypted video storage."
    },
    {
      question: "Can multiple hiring managers review the recorded AI interviews?",
      answer: "Absolutely, recorded sessions and analytical reports can be shared securely with multiple stakeholders."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <ProductNav />
      
      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="w-full bg-[#203a5f] text-white py-8 md:py-12 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
              AI Interview Platform
            </h1>
            <h2 className="text-base font-semibold mb-4 text-white tracking-wide">
              Enterprise Interview Preparation Suite
            </h2>
            <p className="text-[15px] text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              AI Interview Platform helps you master interviewing and prepare for technical recruitment with multi-domain support, dynamic questioning, and performance analytics for efficient career development.
            </p>
            <button className="px-7 py-2.5 bg-white text-blue-600 font-medium rounded-full hover:bg-gray-50 transition-colors shadow-sm text-[15px]">
              Request Demo
            </button>
          </div>
        </section>

        {/* SMARTER PRACTICE SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6 leading-tight">
                  Smarter Practice. Better<br/>Performance. Career Success.
                </h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  Our AI Interview Assistant provides comprehensive preparation for MBA admissions, banking interviews, campus recruitment, and more—through real-time, personalized interview simulations.
                </p>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img src="/images/products/ai_interview_live.png" alt="Live Interview" className="w-full h-80 object-cover" />
                  
                  {/* Overlays */}

                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#1e3a5f]/90 to-transparent p-6 pt-16">
                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                      <BrainCircuit className="w-5 h-5 text-blue-300" /> AI Interview Assistant
                    </h3>
                    <p className="text-gray-300 text-xs mt-1">Analyzing tone, posture, confidence, and context in real-time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1e3a5f]">Features</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: 'Smart Questioning',
                  desc: 'Generates interview questions tailored to your resume, skills, and domain.',
                  icon: BrainCircuit,
                  color: 'text-blue-500',
                  borderColor: 'border-l-blue-500'
                },
                {
                  title: 'Real Interview Simulation',
                  desc: 'Practice with voice-based AI that adapts like a real interviewer.',
                  icon: Mic,
                  color: 'text-red-500',
                  borderColor: 'border-l-red-500'
                },
                {
                  title: 'Instant Feedback',
                  desc: 'Get analysis on your responses, tone, and confidence.',
                  icon: BarChart,
                  color: 'text-blue-500',
                  borderColor: 'border-l-blue-500'
                },
                {
                  title: 'Flexible Prep',
                  desc: 'Choose your interview type: MBA, Bank, or Campus Recruitment.',
                  icon: Settings,
                  color: 'text-red-500',
                  borderColor: 'border-l-red-500'
                },
                {
                  title: 'Interactive Interface',
                  desc: 'Select focus areas and track progress.',
                  icon: MessageSquare,
                  color: 'text-blue-500',
                  borderColor: 'border-l-blue-500'
                }
              ].map((feature, i) => (
                <div key={i} className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 border-l-4 ${feature.borderColor} hover:shadow-md transition-shadow flex flex-col gap-4 w-full md:w-[calc(33.333%-1rem)] max-w-[320px]`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border border-gray-100`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1e3a5f] mb-2">{feature.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCT OVERVIEW */}
        <section className="py-20 bg-white border-t border-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Product Overview</h2>
              <p className="text-gray-500 max-w-3xl mx-auto text-sm leading-relaxed">
                AI IAS is an enterprise-grade AI-powered recruiting and video interview preparation suite. The platform automates pre-screening, conducts realistic verbal/behavioral interview simulations, and delivers analytical reports on candidate sentiment, speech metrics, vocabulary, and domain relevance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Key Capabilities',
                  desc: 'Autonomous video interviews, dynamic question generation, real-time emotion/tone analysis, candidate scoring, and customizable interview rubrics.',
                  icon: LayoutTemplate,
                  color: 'text-red-500',
                  borderColor: 'bg-red-500'
                },
                {
                  title: 'Business Benefits',
                  desc: 'Cuts hiring cycle times by up to 60%, eliminates manual resume filtration bias, and enhances campus placement success rates for academic institutions.',
                  icon: Activity,
                  color: 'text-blue-500',
                  borderColor: 'bg-blue-500'
                },
                {
                  title: 'Deployment & Integration',
                  desc: 'Secure cloud-hosted deployment with RESTful API connectors to existing ATS platforms, HR portals, and university ERP systems like CampusNXT.',
                  icon: Globe,
                  color: 'text-red-500',
                  borderColor: 'bg-red-500'
                },
                {
                  title: 'Security & Compliance',
                  desc: 'ISO 27001-aligned security, GDPR-compliant candidate data protection, encrypted video storage, and auditable grading trails.',
                  icon: ShieldCheck,
                  color: 'text-blue-500',
                  borderColor: 'bg-blue-500'
                },
                {
                  title: 'Implementation & Support',
                  desc: 'Fast configuration of interview templates, training for HR administrators, automated onboarding, and 24/7 technical support.',
                  icon: Users,
                  color: 'text-red-500',
                  borderColor: 'bg-red-500'
                },
                {
                  title: 'Target Customers',
                  desc: 'Corporate recruiting teams, human resource departments, placement cells, career prep schools, and higher education universities.',
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

        {/* WHY CHOOSE OUR AI INTERVIEW SYSTEM */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Why Choose Our AI Interview System?</h2>
              <p className="text-gray-500 max-w-3xl mx-auto text-sm leading-relaxed">
                Harness the power of intelligent feedback and modern training methodologies to excel in your next interview.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Boost Real-Interview Confidence',
                  desc: 'Reduce anxiety and build natural eloquence by practicing in a realistic, pressure-free simulation.',
                  img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&q=80',
                  colorClass: 'text-[#1e3a5f]'
                },
                {
                  title: 'On-Demand Personalized Practice',
                  desc: 'Access customized interview sessions tailored to your specific field and schedule—anytime, anywhere.',
                  img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80',
                  colorClass: 'text-[#1e3a5f]'
                },
                {
                  title: 'Data-Driven Performance Insights',
                  desc: 'Get precise, instant metrics on your vocabulary, pacing, answer relevance, and body language.',
                  img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
                  colorClass: 'text-blue-500'
                },
                {
                  title: 'Structured, Bias-Free Evaluation',
                  desc: 'Ensure a fair and consistent assessment based entirely on merit and structured grading standards.',
                  img: 'https://images.unsplash.com/photo-1554200876-56c2f25224fa?auto=format&fit=crop&w=400&q=80',
                  colorClass: 'text-[#1e3a5f]'
                }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow">
                  <div className="p-4 pb-0">
                    <img src={item.img} alt={item.title} className="w-full h-36 object-cover rounded-[1.5rem]" />
                  </div>
                  <div className="p-6 text-center flex flex-col items-center flex-grow justify-center">
                    <h3 className={`text-base font-bold mb-2 ${item.colorClass}`}>{item.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <a href="/contact" className="inline-block px-8 py-3 bg-[#203a5f] text-white font-semibold rounded-full hover:bg-[#152c4a] transition-colors shadow-lg">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* DYNAMIC TESTIMONIALS SECTION */}
        <ProductTestimonialsSection testimonials={testimonials} />

        {/* DYNAMIC FAQ SECTION */}
        <ProductFAQSection 
          faqs={faqs} 
          subtitle="Find answers to common questions about our training programs and IT services. Ready to advance your career or transform your business? We're here to help."
        />

      </main>
      <Footer />
    </div>
  );
}
