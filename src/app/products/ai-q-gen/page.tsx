import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductNav from '@/components/ProductNav';
import { 
  ArrowRight, ShieldCheck, FileText, Settings, Upload, Copy, Download, 
  Users, Building2, Briefcase, GraduationCap, Sparkles
} from 'lucide-react';

export default function AIQGenPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <ProductNav />
      
      <main className="flex-grow pt-4 pb-16">
        {/* HERO SECTION */}
        <section className="relative bg-[#0B1F3A] text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80" 
              alt="Education Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/90 to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                AI Question <span className="text-red-500">Generation Tool</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                Leverage the power of AI to generate diverse question sets effortlessly. Discover how our tool simplifies the creation and scaling of customized assessment materials.
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

        {/* INTRO/FEATURES GRID */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">Features</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover how our tool simplifies the creation and scaling of customized assessment materials.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: '1. PDF Upload & Extraction',
                  desc: 'Automatically extract questions from PDF documents using advanced AI-powered OCR technology.',
                  icon: Upload
                },
                {
                  title: '2. Smart Variations',
                  desc: 'Generate multiple unique variations while maintaining the original question\'s intent and difficulty level.',
                  icon: Sparkles
                },
                {
                  title: '3. Instant Export',
                  desc: 'Download generated questions in various formats ready for immediate use in quizzes, exams, or study guides.',
                  icon: Download
                }
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

        {/* IDEAL FOR */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#0B1F3A] mb-12">Ideal For</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: 'Teachers & Professors', icon: Users, desc: 'Create diverse question sets for assessments' },
                { name: 'Coaching Centers', icon: Building2, desc: 'Generate practice questions efficiently' },
                { name: 'Corporate Trainers', icon: Briefcase, desc: 'Develop training materials quickly' },
                { name: 'EdTech Platforms', icon: GraduationCap, desc: 'Scale content creation with AI' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-16 h-16 rounded-full bg-[#0B1F3A]/5 text-[#0B1F3A] flex items-center justify-center mb-4">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
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
                      AI Q-Gen is a cognitive test authoring tool that leverages deep learning to generate high-quality, syllabus-aligned question banks, test variants, and homework sheets directly from textbooks or uploaded documents.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-600"></div> Key Capabilities
                    </h3>
                    <p className="text-gray-600">
                      Multi-format document parsing (PDF, Word, OCR), 8+ intelligent question replication strategies (numerical, unit, context swaps), and difficulty-level tagging.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-600"></div> Business Benefits
                    </h3>
                    <p className="text-gray-600">
                      Saves educators up to 90% of exam preparation time, eliminates plagiarism/question sharing risks by generating infinite unique test variants, and scales content creation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Deployment & Integration</h3>
                    <p className="text-gray-600 text-sm">
                      SaaS cloud deployment with direct export options (QTI, CSV, JSON) for seamless upload to Canvas, Moodle, and school LMS platforms.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Security & Compliance</h3>
                    <p className="text-gray-600 text-sm">
                      Strict intellectual property protection: uploaded content is processed in isolated sandboxes and never used to train public models. Role-based access.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Implementation & Support</h3>
                    <p className="text-gray-600 text-sm">
                      Zero-install web application, pre-loaded template configurations for academic standards, and comprehensive user guides.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Target Customers</h3>
                    <p className="text-gray-600 text-sm">
                      Schools, universities, test prep coaching centers, corporate training teams, and EdTech content developers.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose AI Q-Gen?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                AI Q-Gen is not just a question bank—it is a cognitive assessment engine that transforms a single question into an infinite, plagiarism-proof test ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: '7+ Smart Variation Strategies',
                  desc: 'Go beyond simple word swaps. AI Q-Gen applies seven distinct replication techniques—name substitution, object replacement, numerical alteration, context shifting, sentence rephrasing, unit conversion, and real-world scenario swapping—to produce truly unique questions every time.'
                },
                {
                  title: 'AI-Powered PDF Extraction',
                  desc: 'Upload any textbook, past paper, or study material in PDF format and let our advanced OCR + NLP pipeline automatically identify, extract, and categorize every question—ready for instant replication without any manual copy-paste work.'
                },
                {
                  title: 'Plagiarism-Proof Test Variants',
                  desc: 'Eliminate question paper leaks and cheating. Generate infinite unique test variants from any single question set so that no two students receive identical papers, while every variant preserves the same difficulty level and syllabus alignment.'
                },
                {
                  title: 'One-Click Multi-Format Export',
                  desc: 'Export your generated question banks instantly in PDF, Word, QTI, CSV, or JSON formats. Seamlessly upload to any LMS—Canvas, Moodle, Google Classroom—or print-ready for traditional exams, all with a single click.'
                }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-600 flex-shrink-0 flex items-center justify-center mt-1">
                      <Sparkles className="w-5 h-5 text-white" />
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
                  q: 'How does the AI Question Generator help our educational institution scale assessments?',
                  a: 'It automates the creation of diverse question banks, allowing educators to instantly generate thousands of unique, syllabus-aligned questions without manual effort.'
                },
                { q: 'Can we upload our own proprietary textbooks and syllabi as the source material?', a: 'Yes, you can upload PDFs, Word documents, and text files. Our OCR and NLP engines will extract and process the content securely.' },
                { q: 'Does the tool generate multiple formats like MCQs, True/False, and essay questions?', a: 'Absolutely. AI Q-Gen supports the generation of various question formats including MCQs, short answers, and structured essay prompts.' },
                { q: 'How do you ensure the AI doesn\'t generate factually incorrect questions (hallucinations)?', a: 'Our models are strictly bounded by the context of your uploaded materials and utilize validation checks to ensure factual accuracy and alignment.' },
                { q: 'Can we integrate this tool with our existing Learning Management System (LMS)?', a: 'Yes, generated question banks can be exported in QTI, CSV, or JSON formats for easy import into Canvas, Moodle, Blackboard, and others.' },
                { q: 'Can the AI generate questions with varying levels of cognitive difficulty (Bloom\'s Taxonomy)?', a: 'Yes, the engine can adapt the difficulty and cognitive level (e.g., remembering vs. analyzing) based on your specifications.' },
                { q: 'Is the data we upload used to train other public AI models?', a: 'No. Your proprietary educational content is kept strictly confidential in a secure, isolated environment. We never use your uploaded materials to train public or shared models.' }
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
