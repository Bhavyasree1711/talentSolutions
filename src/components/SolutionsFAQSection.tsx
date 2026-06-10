'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How is your Executive Search different from standard recruiting?",
    answer: "Our Executive Search is a highly targeted, discreet process aimed at C-level and VP-level roles. We leverage proprietary networks and deep industry intelligence to approach passive candidates who are not actively on the market, ensuring you get transformative leadership."
  },
  {
    question: "Do you handle contract-to-hire arrangements?",
    answer: "Yes, we offer flexible contract-to-hire solutions. This allows you to evaluate a candidate's technical capabilities and cultural fit within your organization before making a permanent hiring commitment."
  },
  {
    question: "What does your Talent Assessment process entail?",
    answer: "We go beyond resume parsing. Our assessments include rigorous technical evaluations, behavioral interviews, and cognitive testing frameworks tailored specifically to the complexity of the roles you are hiring for."
  },
  {
    question: "How fast can you deploy an IT Staffing team?",
    answer: "Depending on the technology stack and scale, we can typically deploy skilled IT professionals within 1 to 2 weeks. Our active pipeline of vetted candidates allows for rapid mobilization."
  },
  {
    question: "What HR Consulting services do you provide for startups?",
    answer: "For startups, we offer end-to-end organizational structuring, compensation benchmarking, compliance auditing, and scalable recruitment process outsourcing (RPO) to help you build your foundational team quickly."
  }
];

export default function SolutionsFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">
            Solutions FAQs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Detailed answers regarding our HR consulting, executive search, and staffing methodologies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white border rounded-lg transition-all duration-300 ${
                openIndex === index ? 'border-red-300 shadow-md' : 'border-gray-200 hover:border-red-200'
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
                  openIndex === index ? 'text-red-700 rotate-180' : 'text-gray-400'
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
