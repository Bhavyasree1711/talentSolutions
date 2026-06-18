'use client';

import React, { useState } from 'react';
import { MessageCircleQuestion, ArrowRight, Clock, Phone } from 'lucide-react';
import Link from 'next/link';

export interface FAQItem {
  question: string;
  answer: string;
}

interface ProductFAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
}

export default function ProductFAQSection({ 
  title = "Frequently Asked Questions", 
  subtitle = "Find answers to common questions. Ready to transform your workflow? We're here to help.",
  faqs 
}: ProductFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1F3A] mb-4">
            {title}
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="space-y-4 mb-16">
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
              >
                <span className={`text-[15px] font-semibold pr-8 transition-colors duration-300 ${
                  openIndex === index ? 'text-red-600' : 'text-gray-900 group-hover:text-red-600'
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

        {/* CTA Banner inside FAQ */}
        <div className="bg-gradient-to-br from-[#0B1F3A] via-[#0D2547] to-[#11305C] border border-blue-900/40 shadow-2xl rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between text-white relative overflow-hidden">
          {/* Background Image Overlay with color reflection */}
          <div className="absolute inset-0 z-0 opacity-25 mix-blend-overlay">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80" 
              alt="Abstract Network Background" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Glowing decorative blobs for dark blue theme reflections */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/15 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center md:text-left max-w-xl mb-6 md:mb-0">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Still have questions?</h3>
            <p className="text-sm text-blue-200 mb-4">
              Can't find the answer you're looking for? Please chat with our friendly support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start text-xs text-blue-300">
              <span className="flex items-center justify-center md:justify-start gap-2">
                <Clock className="w-3.5 h-3.5 text-red-400" /> Mon - Fri: 9:00 AM - 6:00 PM
              </span>
              <span className="hidden sm:inline text-blue-800">|</span>
              <span className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-3.5 h-3.5 text-red-400" /> +91 9247030111
              </span>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center md:items-end gap-2 shrink-0 w-full md:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-[#8C1D1D] hover:bg-[#701616] text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <span className="text-xs text-blue-300 text-center md:text-right">
              Or email us at <a href="mailto:s.siddeswara@dmxorg.com" className="text-white hover:underline font-semibold">s.siddeswara@dmxorg.com</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
