import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductNav from '@/components/ProductNav';
import ProductFAQSection from '@/components/ProductFAQSection';
import ProductTestimonialsSection from '@/components/ProductTestimonialsSection';
import { 
  UploadCloud, SlidersHorizontal, Download, LayoutTemplate, 
  Settings, Zap, ShieldCheck, Building2, GraduationCap
} from 'lucide-react';

export default function AIQGenPage() {
  const testimonials = [
    {
      quote: "AI Q-Gen has completely transformed how we create assessments. We generate hundreds of unique variations in minutes, drastically reducing faculty workload.",
      name: "Dr. Sarah Jenkins",
      role: "Dean of Academics",
      company: "Global Tech University"
    },
    {
      quote: "The ability to upload our existing syllabi and immediately extract relevant, high-quality questions is nothing short of magic. A must-have for any training center.",
      name: "Marcus Thorne",
      role: "Head of L&D",
      company: "Nexus Corporate Training"
    },
    {
      quote: "We needed a secure, reliable way to scale our EdTech platform's question banks without hiring an army of content writers. AI Q-Gen delivered beyond expectations.",
      name: "Priya Sharma",
      role: "Product Manager",
      company: "LearnSphere EdTech"
    }
  ];

  const faqs = [
    {
      question: "How does the AI Question Generator help our educational institution scale assessments?",
      answer: "The tool automates the creation of diverse, curriculum-aligned question banks from your existing materials. This eliminates hundreds of hours of manual work for your faculty, allowing them to focus on teaching rather than administrative tasks."
    },
    {
      question: "Can we upload our own proprietary textbooks and syllabi as the source materials?",
      answer: "Yes, AI Q-Gen supports secure PDF and Word document uploads. Our AI extracts context exclusively from your provided materials to generate highly relevant and accurate questions tailored to your exact curriculum."
    },
    {
      question: "Does the tool generate multiple formats like MCQs, True/False, and essay questions?",
      answer: "Absolutely. You can select the desired format for your assessments. The AI is capable of generating multiple-choice questions, fill-in-the-blanks, true/false, short answer, and complex essay prompts."
    },
    {
      question: "How do you ensure the AI doesn't generate factually incorrect questions (hallucinations)?",
      answer: "Our engine uses highly constrained RAG (Retrieval-Augmented Generation) pipelines. The AI is strictly instructed to derive questions and answers solely from the uploaded source documents, heavily mitigating the risk of hallucinations."
    },
    {
      question: "Can we integrate this tool with our existing Learning Management System (LMS)?",
      answer: "Yes. AI Q-Gen offers instant export options in standard formats like CSV, JSON, and QTI, which are widely supported for seamless ingestion into popular LMS platforms like Moodle, Canvas, and Blackboard."
    },
    {
      question: "Can the AI generate questions with varying levels of cognitive difficulty (Bloom's Taxonomy)?",
      answer: "Yes, you can configure the AI to generate questions that target specific cognitive levels, from basic recall and understanding to higher-order thinking skills like analysis and evaluation."
    },
    {
      question: "Is the data we upload used to train other public AI models?",
      answer: "No. Strict intellectual property protection is enforced. Uploaded content is processed in isolated sandboxes and is never used to train public models."
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              AI Question Generation Tool
            </h1>
            <h2 className="text-base text-gray-100 mb-6 font-normal">
              Leverage the power of AI to generate diverse question sets effortlessly.
            </h2>
            <button className="px-6 py-2.5 bg-white text-blue-600 font-medium rounded-full hover:bg-gray-50 transition-colors shadow-sm text-sm">
              Request Demo
            </button>
          </div>
        </section>

        {/* FEATURES - 3 COLUMN ROW WITH LEFT ICONS AND LIGHT BG */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Features</h2>
              <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                Discover how our tool simplifies the creation and scaling of customized assessment materials.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: '1. PDF Upload & Extraction',
                  desc: 'Automatically extract questions from PDF documents using advanced AI-powered OCR technology.',
                  icon: UploadCloud,
                  color: 'text-red-500',
                  bgIcon: 'bg-blue-50',
                  borderColor: 'border-t-red-500'
                },
                {
                  title: '2. Smart Variations',
                  desc: 'Generate multiple unique variations while maintaining the original question\'s intent and difficulty level.',
                  icon: SlidersHorizontal,
                  color: 'text-red-500',
                  bgIcon: 'bg-red-50',
                  borderColor: 'border-t-blue-500'
                },
                {
                  title: '3. Instant Export',
                  desc: 'Download generated questions in various formats ready for immediate use in quizzes, exams, or study guides.',
                  icon: Download,
                  color: 'text-red-500',
                  bgIcon: 'bg-blue-50',
                  borderColor: 'border-t-red-500'
                }
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden hover:shadow-lg transition-shadow flex flex-col gap-6">
                  {/* Colored Top Bar */}
                  <div className={`absolute top-0 left-0 w-full h-1.5 ${feature.borderColor}`}></div>
                  
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${feature.bgIcon}`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
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
                AI Q-Gen is a cognitive test authoring tool that leverages deep learning to generate high-quality, syllabus-aligned question banks, test variants, and homework sheets directly from textbooks or uploaded documents.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Key Capabilities',
                  desc: 'Multi-format document parsing (PDF, Word, OCR), AI-intelligent question duplication strategies (merit-level, sub, context swaps), and difficulty-level tagging.',
                  icon: LayoutTemplate,
                  color: 'text-red-500',
                  borderColor: 'border-red-500'
                },
                {
                  title: 'Business Benefits',
                  desc: 'Reduces educator prep by 80% of manual prep time, eliminates plagiarism pipelines taking hours by generating infinite unique test variants, and scales custom creators.',
                  icon: Zap,
                  color: 'text-red-500',
                  borderColor: 'border-blue-500'
                },
                {
                  title: 'Deployment & Integration',
                  desc: 'Rapid cloud deployment with direct export options (QTI, CSV, JSON) for seamless integration to Canvas, Moodle, and school LMS platforms.',
                  icon: Settings,
                  color: 'text-red-500',
                  borderColor: 'border-red-500'
                },
                {
                  title: 'Security & Compliance',
                  desc: 'Strict intellectual property protection. Uploaded content is processed in isolated sandboxes and never used to train public models. Role-based access.',
                  icon: ShieldCheck,
                  color: 'text-red-500',
                  borderColor: 'border-blue-500'
                },
                {
                  title: 'Implementation & Support',
                  desc: 'Easy-install web application, pre-loaded template configurations for academic standards, and comprehensive user guides.',
                  icon: Building2,
                  color: 'text-red-500',
                  borderColor: 'border-red-500'
                },
                {
                  title: 'Target Customers',
                  desc: 'Schools, universities, test prep coaching centers, corporate training teams, and EdTech content developers.',
                  icon: GraduationCap,
                  color: 'text-red-500',
                  borderColor: 'border-blue-500'
                }
              ].map((card, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex flex-col items-start gap-5 hover:shadow-md transition-shadow border border-gray-100 relative overflow-hidden">
                  {/* Subtle Colored Top Bar */}
                  <div className={`absolute top-0 left-0 w-full h-1 ${card.borderColor.replace('border-', 'bg-')}`}></div>
                  
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

        {/* IDEAL FOR */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1e3a5f]">Ideal For</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Teachers & Professors',
                  desc: 'Create diverse practice tests for assessments.',
                  img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=400&q=80',
                  colorClass: 'text-red-500'
                },
                {
                  title: 'Coaching Centers',
                  desc: 'Generate practice questions effortlessly.',
                  img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&q=80',
                  colorClass: 'text-red-500'
                },
                {
                  title: 'Corporate Trainers',
                  desc: 'Develop training materials quickly.',
                  img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80',
                  colorClass: 'text-red-500'
                },
                {
                  title: 'EdTech Platforms',
                  desc: 'Scale content creation with AI.',
                  img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=400&q=80',
                  colorClass: 'text-red-500'
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
          </div>
        </section>

        {/* WHY CHOOSE AI Q-GEN */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Why Choose AI Q-Gen?</h2>
              <p className="text-gray-500 max-w-3xl mx-auto text-sm leading-relaxed">
                AI Q-Gen is not just a question bank—it is a cognitive assessment engine that transforms a single question into an infinite, plagiarism-proof test ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Smart Variation Strategies',
                  desc: 'Go beyond basic word swaps. AI Q-Gen applies deep cognitive variation techniques - scenario adaptation, context shifting, sentence restructuring, and semantic role swapping - to produce truly unique questions every time.',
                  img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80',
                  colorClass: 'text-red-500'
                },
                {
                  title: 'AI-Powered OCR Extraction',
                  desc: 'Upload any textbook, past paper, or study material in PDF format and let our advanced OCR + NLP pipeline automatically identify, extract, and categorize every question - ready for instant application without typing manual input again.',
                  img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80',
                  colorClass: 'text-red-500'
                },
                {
                  title: 'Plagiarism-Proof Test Variants',
                  desc: 'Instantly generate ten different exam sheets covering the exact same topics with entirely unique questions derived from any single question source. Eradicate cheating among identical exams, while AI cleverly preserves the exact difficulty level and required knowledge.',
                  img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80',
                  colorClass: 'text-red-500'
                },
                {
                  title: 'One-Click Multi-Format Export',
                  desc: 'Export your generated question banks directly to PDF, Word, QTI, CSV, or JSON formats. Seamlessly upload directly into your LMS (Moodle, Canvas, Blackboard) or print ready-to-use traditional exams with a single click.',
                  img: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=400&q=80',
                  colorClass: 'text-red-500'
                }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow">
                  <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
                  <div className="p-6 text-center flex flex-col items-center">
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
