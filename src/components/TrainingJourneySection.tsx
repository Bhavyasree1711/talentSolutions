'use client';

import { FileText, Users, Code, Award, Briefcase } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const journeySteps = [
  {
    title: 'Live Projects',
    description: 'Work on real-time, industry-relevant applications with hands-on labs.',
    duration: 'Weeks 1-8',
    icon: Code,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    title: 'Certification Preparation',
    description: 'Targeted mock exams and study guides for global certifications (AWS, Azure).',
    duration: 'Week 9',
    icon: Award,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    title: 'Resume Building',
    description: 'Craft an ATS-friendly, technically sound resume highlighting your new skills.',
    duration: 'Week 10',
    icon: FileText,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  {
    title: 'Mock Interviews',
    description: 'Technical and HR mock interviews with industry experts to build confidence.',
    duration: 'Week 11',
    icon: Users,
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200'
  },
  {
    title: 'Placement Assistance',
    description: 'Direct interviews with our 50+ hiring partners and exclusive job boards.',
    duration: 'Week 12+',
    icon: Briefcase,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
  }
];

export default function TrainingJourneySection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <ScrollReveal direction="up" className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3A] mb-4">
            Your Training Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From technical foundations to your first day on the job, we guide you through every step of your career transformation.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-1 bg-gray-100 -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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

                    {/* Duration Badge */}
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full mb-3 tracking-wide">
                      {step.duration}
                    </span>

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
