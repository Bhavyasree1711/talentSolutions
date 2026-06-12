'use client';

import { GraduationCap, Briefcase, Network } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const reasons = [
  {
    title: 'Experienced Faculty',
    description: 'Learn from industry experts with 15+ years of experience',
    icon: GraduationCap,
    bgColor: 'bg-[#0B1F3A]/10',
    color: 'text-[#0B1F3A]',
    borderColor: 'border-[#0B1F3A]/20'
  },
  {
    title: 'Real-World Training',
    description: 'Hands-on learning with live projects and case studies',
    icon: Briefcase,
    bgColor: 'bg-red-50',
    color: 'text-red-700',
    borderColor: 'border-red-200'
  },
  {
    title: 'Industry Connections',
    description: 'Network and get direct placement opportunities',
    icon: Network,
    bgColor: 'bg-[#0B1F3A]/10',
    color: 'text-[#0B1F3A]',
    borderColor: 'border-[#0B1F3A]/20'
  }
];

export default function TrainingWhyChooseSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1F3A] mb-4">
            Why Choose Our Training Program?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine expert mentorship, hands-on learning, and strong industry connections to help you succeed.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <ScrollReveal key={index} direction="up" delay={index * 150} className="h-full">
                <div className={`bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full flex flex-col items-center text-center`}>
                  <div className={`w-20 h-20 rounded-full ${reason.bgColor} ${reason.borderColor} border-4 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-10 h-10 ${reason.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
