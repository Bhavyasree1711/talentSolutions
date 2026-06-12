'use client';

import { FileText, Users, Award, Briefcase, MessageSquare, Cloud } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const journeySteps = [
  {
    title: 'Profile Building',
    description: 'Build a compelling professional profile',
    icon: FileText,
    color: 'text-red-700',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
  },
  {
    title: 'Interview Preparation',
    description: 'Master interview techniques and strategies',
    icon: Users,
    color: 'text-[#0B1F3A]',
    bgColor: 'bg-[#0B1F3A]/10',
    borderColor: 'border-[#0B1F3A]/20'
  },
  {
    title: 'Storytelling Skills',
    description: 'Learn to communicate your achievements effectively',
    icon: MessageSquare,
    color: 'text-red-700',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
  },
  {
    title: 'Cloud & Digital Tech',
    description: 'Gain expertise in cloud and digital technologies',
    icon: Cloud,
    color: 'text-[#0B1F3A]',
    bgColor: 'bg-[#0B1F3A]/10',
    borderColor: 'border-[#0B1F3A]/20'
  },
  {
    title: 'Certifications',
    description: 'Earn AWS, Azure, and industry certifications',
    icon: Award,
    color: 'text-red-700',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
  },
  {
    title: 'Job Ready Placement',
    description: 'Direct placement into ready opportunities',
    icon: Briefcase,
    color: 'text-[#0B1F3A]',
    bgColor: 'bg-[#0B1F3A]/10',
    borderColor: 'border-[#0B1F3A]/20'
  }
];

export default function TrainingJourneySection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <ScrollReveal direction="up" className="text-center mb-20">
          <span className="text-sm font-semibold text-red-700 uppercase tracking-wide mb-2 block">
            TRAINING PROGRAMS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3A] mb-4">
            Comprehensive Support System
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our structured training journey takes you from beginner to job-ready professional
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-1 bg-gray-100 -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={index} direction="up" delay={index * 100} className="relative group">
                  <div className="flex flex-col items-center text-center">
                    
                    {/* Icon Container with Hover Effects */}
                    <div className={`w-24 h-24 rounded-full ${step.bgColor} ${step.borderColor} border-4 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 relative bg-white`}>
                       <Icon className={`w-10 h-10 ${step.color}`} />
                       
                       {/* Step Number Badge */}
                       <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0B1F3A] text-white font-bold flex items-center justify-center border-2 border-white shadow-md">
                         {index + 1}
                       </div>
                    </div>


                    {/* Content */}
                    <h3 className="text-lg font-bold text-[#0B1F3A] mb-2 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
