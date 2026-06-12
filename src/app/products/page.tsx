import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProductsPage() {
  const products = [
    {
      name: 'CampusNXT',
      description: 'Comprehensive campus management and learning solution for educational institutions.',
      href: '/products/campusnxt',
    },
    {
      name: 'AI IAS',
      description: 'AI-driven preparation platform for civil services and competitive exams.',
      href: '/products/ai-ias',
    },
    {
      name: 'AI Q-Gen',
      description: 'Automated AI question generator for assessments and quizzes.',
      href: '/products/ai-q-gen',
    },
    {
      name: 'AI-VideoTrans',
      description: 'Advanced AI video transcription and translation services.',
      href: '/products/ai-video',
    },
    {
      name: 'AI-SmartExam',
      description: 'Intelligent examination platform with automated proctoring and grading.',
      href: '/products/ai-exam',
    },
    {
      name: 'CodeOne',
      description: 'Unified coding platform and environment for developers and learners.',
      href: '/products/codeone',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0B1F3A]">
              Our Products
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our innovative suite of products designed to empower education, businesses, and developers with cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-700">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-6 flex items-center text-red-700 font-semibold text-sm hover:text-red-800 transition-colors">
                  {product.href ? (
                    <a href={product.href} className="flex items-center w-full">
                      Learn More 
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ) : (
                    <span className="flex items-center cursor-pointer">
                      Learn More 
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
