'use client';

import { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface PageFAQSectionProps {
  title?: string;
  description?: string;
  faqs: FAQItem[];
}

export default function PageFAQSection({ 
  title = "Frequently Asked Questions", 
  description = "Find answers to common questions about our services and methodologies.",
  faqs 
}: PageFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`group border rounded-2xl transition-all duration-300 overflow-hidden ${
                openIndex === index 
                  ? 'border-red-600 bg-white shadow-md' 
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none select-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className={`text-[15px] font-semibold pr-8 text-left transition-colors duration-300 ${
                  openIndex === index ? 'text-red-700' : 'text-[#0B1F3A] group-hover:text-red-700'
                }`}>
                  {faq.question}
                </span>
                
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                  openIndex === index 
                    ? 'bg-red-50 text-red-600' 
                    : 'bg-gray-50 group-hover:bg-red-50 text-gray-400 group-hover:text-red-600'
                }`}>
                  <svg className="w-4 h-4 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15" className={`origin-center transition-transform duration-300 ${openIndex === index ? 'rotate-90 scale-y-0' : ''}`} />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                  </svg>
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-[14px] text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
