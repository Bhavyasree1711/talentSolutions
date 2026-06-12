import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductNav from '@/components/ProductNav';
import { 
  ArrowRight, ShieldCheck, Code, Bug, CheckSquare, 
  TerminalSquare, Users, Cpu, Server, Lock
} from 'lucide-react';

export default function CodeOnePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <ProductNav />
      
      <main className="flex-grow pt-4 pb-16">
        {/* HERO SECTION */}
        <section className="relative bg-[#0B1F3A] text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80" 
              alt="Code Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/90 to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                CodeOne <span className="text-red-500">Platform</span>
              </h1>
              <p className="text-xl font-semibold text-gray-200 mb-4">Enterprise Development Suite</p>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                CodeOne helps you master coding and prepare for technical recruitment with multi-language support, dynamic testing, and performance analytics for efficient project development.
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">Powerful Features for Modern Development</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Everything you need to code, debug, test, and deploy with confidence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  title: 'Error Detection and Debugging Tools', 
                  desc: 'Advanced debugging support for various languages, with detailed error messages and solutions across different coding environments.', 
                  icon: Bug 
                },
                { 
                  title: 'Comprehensive Practice Test Series', 
                  desc: 'Boost your learning with our meticulously designed Practice Test Series, crafted to help you assess your knowledge, strengthen your skills, and achieve mastery.', 
                  icon: CheckSquare 
                },
                { 
                  title: 'Practice Multiple Programming Languages', 
                  desc: 'Seamlessly write and execute code in all major programming languages (Python, Java, C, C++, JavaScript etc.)', 
                  icon: Code 
                },
                { 
                  title: 'Integrated Development Environment (IDE)', 
                  desc: 'Our platform offers a state-of-the-art IDE designed to streamline your coding experience, enabling you to write, test, and debug code all in one place.', 
                  icon: TerminalSquare 
                },
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all group flex gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-700 flex-shrink-0 flex items-center justify-center group-hover:bg-red-700 group-hover:text-white transition-colors">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OVERVIEW & SPECS */}
        <section className="py-20 bg-white border-y border-gray-100">
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
                      CodeOne is a browser-based, collaborative IDE and developer training environment. The platform offers multi-language code execution, interactive sandbox playgrounds, automated test cases, and real-time debugger helpers.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-600"></div> Key Capabilities
                    </h3>
                    <p className="text-gray-600">
                      Multi-language runtime support (Python, Java, C++, JS etc.,) collaborative live pair coding, automated syntax check, test-suite validation, and visual debugging.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-600"></div> Business Benefits
                    </h3>
                    <p className="text-gray-600">
                      Accelerates developer onboarding, simplifies coding assessment pipelines for recruitment, and reduces infrastructure overhead for student dev environments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Deployment & Integration</h3>
                    <p className="text-gray-600 text-sm">
                      Scalable sandboxed micro-container execution backend, RESTful API integrations for test assignment push, and embeddable code widgets.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Security & Compliance</h3>
                    <p className="text-gray-600 text-sm">
                      Isolated Docker sandbox runtime environments to prevent code injection, network restriction policies, and encrypted workspace storage.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Implementation & Support</h3>
                    <p className="text-gray-600 text-sm">
                      Pre-configured coding assessment templates, custom compiler/runtime configurations, and 24/7 cloud runtime orchestration support.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Target Customers</h3>
                    <p className="text-gray-600 text-sm">
                      Coding bootcamps, academic computer science departments, corporate technical recruitment teams, and engineering departments.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CodeOne?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                CodeOne is a high-performance sandbox execution environment built for developers, educational institutions, and recruiters to compile and run code safely and instantly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Ultra-Secure Docker Sandboxing',
                  desc: 'Execute user code within secure Docker micro-containers that isolate compile and runtime processes. Prevent directory penetration or network attacks while compiling dynamically.'
                },
                {
                  title: 'Multi-Language Compiler Engine',
                  desc: 'Compile and run Python, Java, C++, JavaScript, C, and Go instantly. Supported with pre-loaded libraries, linting warnings, auto-formatting, and execution time monitoring.'
                },
                {
                  title: 'Real-Time Test Cases',
                  desc: 'Submit code against pre-loaded public and hidden unit tests. Get detailed feedback on execution times, compiler messages, memory limits, and failed assertions.'
                },
                {
                  title: 'Collaborative Pair Programming',
                  desc: 'Enable shared real-time workspaces for coding interviews, classroom training sessions, and remote programming assessments without leaving the browser.'
                }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-600 flex-shrink-0 flex items-center justify-center mt-1">
                      <Code className="w-5 h-5 text-white" />
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

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">Ready to Elevate Your Coding Experience?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of developers and institutions already using CodeOne.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold rounded-xl shadow-lg hover:shadow-red-700/30 transition-all text-lg"
            >
              Get Started Now <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
