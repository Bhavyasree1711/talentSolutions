'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

// Since we have a mix of icons and text, we can use simple stylized boxes if we don't have all exact logos
const tools = [
  { name: 'AWS', image: '/images/aws.png' },
  { name: 'Azure', image: '/images/azure2.png' },
  { name: 'Docker', isText: true, color: 'text-blue-500' },
  { name: 'Kubernetes', isText: true, color: 'text-blue-600' },
  { name: 'Python', isText: true, color: 'text-yellow-600' },
  { name: 'TensorFlow', isText: true, color: 'text-orange-500' },
  { name: 'PowerBI', image: '/images/powerbi.png' },
  { name: 'Linux', isText: true, color: 'text-black' },
  { name: 'GitHub', isText: true, color: 'text-gray-800' },
  { name: 'Jenkins', isText: true, color: 'text-red-500' },
  { name: 'SQL', isText: true, color: 'text-blue-700' },
  { name: 'Terraform', isText: true, color: 'text-purple-600' }
];

export default function ToolsTechnologiesSection() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <ScrollReveal direction="up" className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">
            Master the Latest Technologies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our curriculum is constantly updated to include the exact tools and technologies that enterprise companies are demanding right now.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
          {tools.map((tool, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 50}>
              <div className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center justify-center h-32 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                {tool.isText ? (
                   <span className={`text-xl font-bold ${tool.color}`}>{tool.name}</span>
                ) : (
                   <div className="relative w-16 h-16 mb-2">
                     <Image 
                       src={tool.image!} 
                       alt={tool.name} 
                       fill
                       className="object-contain"
                     />
                   </div>
                )}
                {!tool.isText && <span className="text-sm font-semibold text-gray-700">{tool.name}</span>}
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
