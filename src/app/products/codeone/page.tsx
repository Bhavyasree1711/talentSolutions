import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductNav from '@/components/ProductNav';
import ProductFAQSection from '@/components/ProductFAQSection';
import ProductTestimonialsSection from '@/components/ProductTestimonialsSection';
import { 
  Search, BookOpen, Code2, TerminalSquare, Shield,
  Activity, Server, Lock, Settings, Users
} from 'lucide-react';

export default function CodeOnePage() {
  const testimonials = [
    {
      quote: "CodeOne's live collaborative coding environment has streamlined our technical recruitment. We can conduct realistic pair-programming interviews that actually assess real-world skills.",
      name: "Jessica Chen",
      role: "Engineering Manager",
      company: "FinTech Innovations"
    },
    {
      quote: "The comprehensive practice test series and advanced debugging tools helped me master Python and land my dream job at a FAANG company. The platform feels just like a professional IDE.",
      name: "Rahul M.",
      role: "Software Developer",
      company: "Alumni"
    },
    {
      quote: "For our university's computer science program, having a unified platform where students can write, test, and debug code in 20+ languages without local setup has been a game-changer.",
      name: "Dr. James Wilson",
      role: "Head of Computer Science",
      company: "State University"
    }
  ];

  const faqs = [
    {
      question: "Which programming languages are supported on the CodeOne platform?",
      answer: "CodeOne supports over 20 major programming languages, including Python, Java, C++, JavaScript, TypeScript, Go, Ruby, and Rust. Our compiler infrastructure ensures fast execution and accurate error reporting across all supported languages."
    },
    {
      question: "Can multiple users collaborate on the same code in real-time?",
      answer: "Yes, CodeOne features a seamless live collaboration mode, perfect for technical interviews, pair programming, or team troubleshooting. Multiple users can edit, execute, and view output simultaneously without latency."
    },
    {
      question: "Does the platform offer automated grading for coding assignments?",
      answer: "Absolutely. You can set up custom test cases (public and hidden) for any coding problem. The system will automatically evaluate submitted code against these test cases for correctness, execution time, and memory usage."
    },
    {
      question: "Can we integrate CodeOne into our company's hiring portal?",
      answer: "Yes, we provide robust APIs and LTI integration options, allowing you to embed our coding environments and assessments directly into your existing HR workflows, ATS, or Learning Management Systems."
    },
    {
      question: "Are the practice tests suitable for absolute beginners?",
      answer: "Yes! Our platform offers curated learning paths and practice series ranging from fundamental programming concepts for beginners to complex algorithmic challenges for advanced developers."
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
              CodeOne Platform
            </h1>
            <h2 className="text-base md:text-lg font-medium mb-2">
              Next-Gen IDE & Testing
            </h2>
            <p className="text-sm md:text-base text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Everything you need to code, debug, test, and deploy with confidence.
            </p>
            <button className="px-8 py-2.5 bg-white text-[#1e3a5f] font-semibold rounded-full hover:bg-gray-100 transition-colors">
              Request Demo
            </button>
          </div>
        </section>

        {/* FEATURES ZIG-ZAG */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Powerful Features for Modern Development</h2>
              <p className="text-gray-500">
                Everything you need to code, debug, test, and deploy with confidence
              </p>
            </div>

            <div className="space-y-24">
              {/* Feature 1: Image Left, Text Right */}
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="w-full max-w-md relative">
                    <div className="absolute inset-0 bg-red-500/10 rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
                      alt="Error Detection" 
                      className="w-full aspect-[4/3] rounded-3xl object-cover shadow-xl"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Error Detection and Debugging Tools</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Advanced debugging support for various languages, with detailed error messages and solutions across different coding environments.
                  </p>
                </div>
              </div>

              {/* Feature 2: Text Left, Image Right */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="w-full max-w-md relative">
                    <div className="absolute inset-0 bg-red-500/10 rounded-3xl -translate-x-4 translate-y-4 -z-10"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" 
                      alt="Practice Tests" 
                      className="w-full aspect-[4/3] rounded-3xl object-cover shadow-xl"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Comprehensive Practice Test Series</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Boost your learning with our meticulously designed Practice Test Series, crafted to help you assess your knowledge, strengthen your skills, and achieve mastery in various subjects or programming languages.
                  </p>
                </div>
              </div>

              {/* Feature 3: Image Left, Text Right */}
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="w-full max-w-md relative">
                    <div className="absolute inset-0 bg-red-500/10 rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80" 
                      alt="Programming Languages" 
                      className="w-full aspect-[4/3] rounded-3xl object-cover shadow-xl"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Practice Multiple Programming Languages</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Seamlessly write and execute code in all major programming languages (Python, Java, C, C++, JavaScript etc.)
                  </p>
                </div>
              </div>

              {/* Feature 4: Text Left, Image Right */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="w-full max-w-md relative">
                    <div className="absolute inset-0 bg-red-500/10 rounded-3xl -translate-x-4 translate-y-4 -z-10"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
                      alt="IDE" 
                      className="w-full aspect-[4/3] rounded-3xl object-cover shadow-xl"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                    <TerminalSquare className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Integrated Development Environment (IDE)</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Our platform offers a state-of-the-art IDE designed to streamline your coding experience, enabling you to write, test, and debug code all in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT OVERVIEW & CARDS */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Product Overview</h2>
              <p className="text-gray-500 max-w-3xl mx-auto text-sm leading-relaxed">
                CodeOne is a browser-based, collaborative IDE and developer training environment. The platform offers multi-language code execution, interactive sandbox playgrounds, automated test cases, and real-time debugger helpers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Key Capabilities',
                  desc: 'Multi-language runtime support (Python, Java, C++, JS etc.,) collaborative live pair coding, automated syntax check, test-suite validation, and visual debugging.',
                  icon: Shield,
                  color: 'text-red-500',
                  borderColor: 'border-red-500'
                },
                {
                  title: 'Business Benefits',
                  desc: 'Accelerates developer onboarding, simplifies coding assessment pipelines for recruitment, and reduces infrastructure overhead for student dev environments.',
                  icon: Activity,
                  color: 'text-red-500',
                  borderColor: 'border-blue-500'
                },
                {
                  title: 'Deployment & Integration',
                  desc: 'Scalable sandboxed micro-container execution backend, RESTful API integrations for test assignment push, and embeddable code widgets.',
                  icon: Server,
                  color: 'text-red-500',
                  borderColor: 'border-red-500'
                },
                {
                  title: 'Security & Compliance',
                  desc: 'Isolated Docker sandbox runtime environments to prevent code injection, network restriction policies, and encrypted workspace storage.',
                  icon: Lock,
                  color: 'text-red-500',
                  borderColor: 'border-blue-500'
                },
                {
                  title: 'Implementation & Support',
                  desc: 'Pre-configured coding assessment templates, custom compiler/runtime configurations, and 24/7 cloud runtime orchestration support.',
                  icon: Settings,
                  color: 'text-red-500',
                  borderColor: 'border-red-500'
                },
                {
                  title: 'Target Customers',
                  desc: 'Coding bootcamps, academic computer science departments, corporate technical recruitment teams, and engineering departments.',
                  icon: Users,
                  color: 'text-red-500',
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

        {/* WHY CHOOSE SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Why Choose CodeOne?</h2>
              <p className="text-gray-500 max-w-3xl mx-auto text-sm leading-relaxed">
                CodeOne is a high-performance sandbox execution environment built for developers, educational institutions, and recruiters to compile and run code safely and instantly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Ultra-Secure Sandboxing',
                  desc: 'Execute user code within secure Docker micro-containers that isolate compile and runtime processes. Prevent directory penetration or network attacks while compiling dynamically.',
                  img: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=400&q=80'
                },
                {
                  title: 'Multi-Language Support',
                  desc: 'Compile and run Python, Java, C++, JavaScript, C, and Go instantly. Supported with pre-loaded libraries, linting warnings, auto-formatting, and execution time monitoring.',
                  img: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=400&q=80'
                },
                {
                  title: 'Automated Test Execution',
                  desc: 'Submit code against pre-loaded public and hidden unit tests. Get detailed feedback on execution times, compiler messages, memory limits, and failed assertions.',
                  img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=400&q=80'
                },
                {
                  title: 'Live Pair Collaboration',
                  desc: 'Enable shared real-time workspaces for coding interviews, classroom training sessions, and remote programming assessments without leaving the browser.',
                  img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80'
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
