'use client';

import React, { useState } from 'react';
import { Plus, Minus, MessageCircleQuestion, ArrowRight } from 'lucide-react';
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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4">
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
              className={`border rounded-lg transition-all duration-200 ${openIndex === index ? 'border-blue-500 bg-white shadow-sm' : 'border-gray-200 bg-white hover:border-gray-300'}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`text-[15px] font-semibold pr-8 ${openIndex === index ? 'text-[#1e3a5f]' : 'text-[#1e3a5f]'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <Minus className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0 bg-gray-50">
                    <Plus className="w-4 h-4 text-gray-400" strokeWidth={3} />
                  </div>
                )}
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
        <div className="bg-[#1e3a5f] rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between text-white shadow-xl">
          <div className="mb-4 sm:mb-0 text-center sm:text-left">
            <h3 className="text-lg font-bold mb-1">Still have questions?</h3>
            <p className="text-sm text-gray-300">Can't find the answer you're looking for? Please chat to our friendly team.</p>
          </div>
          <Link href="/contact">
            <button className="px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-colors flex items-center gap-2">
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
