'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What types of roles do you specialize in recruiting?",
    answer: "We specialize in a wide range of roles including IT, Software Engineering, Executive Search, Cloud Infrastructure, Data Science, and specialized technical roles across various industries. Our deep industry knowledge allows us to source top-tier talent for both niche and broad technical requirements."
  },
  {
    question: "How does your recruitment methodology work?",
    answer: "Our process begins with a comprehensive needs analysis to understand your company culture and technical requirements. We then utilize targeted sourcing, rigorous screening, behavioral interviews, and technical evaluations to ensure we present only the most qualified candidates."
  },
  {
    question: "Do you provide customized IT training programs for corporate teams?",
    answer: "Yes, absolutely. We offer tailored Software and IT training programs designed to upskill your existing workforce. Whether it's the latest cloud technologies, cybersecurity, or software development frameworks, our training is customized to meet your specific organizational goals."
  },
  {
    question: "What is the typical timeline for filling an open technical position?",
    answer: "While timelines can vary based on the complexity and seniority of the role, our extensive talent network typically allows us to present a shortlist of highly qualified candidates within 1 to 2 weeks for standard technical roles."
  },
  {
    question: "How do you ensure the quality and cultural fit of the candidates?",
    answer: "We utilize a multi-stage vetting process that goes beyond just matching resumes to job descriptions. We conduct in-depth behavioral interviews, technical assessments, and thorough background checks to ensure candidates possess both the technical skills and the right cultural fit for your team."
  },
  {
    question: "Can you assist with flexible staffing solutions like contract or temporary hires?",
    answer: "Yes, we offer flexible staffing solutions tailored to your dynamic business needs. This includes short-term contract, contract-to-hire, and permanent placements, allowing you to scale your team efficiently and effectively."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our recruitment, HR solutions, and IT training services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white border rounded-lg transition-all duration-300 ${
                openIndex === index ? 'border-blue-300 shadow-md' : 'border-gray-200 hover:border-blue-200'
              }`}
            >
              <button
                className="w-full px-6 py-5 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-left font-semibold text-lg text-[#0B1F3A]">
                  {faq.question}
                </span>
                <span className={`ml-4 flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'text-blue-600 rotate-180' : 'text-gray-400'
                }`}>
                  <ChevronDown className="w-6 h-6" />
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
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
