'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Do you provide placement assistance?",
    answer: "Yes, we provide 100% placement assistance. This includes resume building, LinkedIn optimization, mock interviews, and direct referrals to our 50+ hiring partners until you secure a job."
  },
  {
    question: "Are the classes online or offline?",
    answer: "We offer flexible learning modes. You can choose from pure Online Training, immersive Offline Classroom sessions at our Bangalore facility, or a Hybrid approach blending both."
  },
  {
    question: "Can beginners join these IT courses?",
    answer: "Absolutely. Our curriculum is structured to take you from a complete beginner to an advanced level. We start with fundamentals before moving to complex, real-world applications."
  },
  {
    question: "Will I get a certification after completion?",
    answer: "Yes, you will receive an industry-recognized DMX Training Certificate. Furthermore, our courses are mapped to global certifications (like AWS Solutions Architect), and we prepare you to clear those official exams."
  },
  {
    question: "What kind of projects will I build?",
    answer: "You will work on enterprise-grade live projects. Examples include deploying a scalable E-commerce application on AWS, building AI chatbots, creating CI/CD automation pipelines, and configuring SOC monitoring dashboards."
  }
];

export default function TrainingFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our IT training, curriculum, and placement support.
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
