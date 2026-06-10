'use client';

import { Laptop, Monitor, Building2, Users } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const modes = [
  {
    title: 'Online Training',
    description: 'Interactive live sessions with real-time doubt clearing. Access recordings and materials 24/7.',
    icon: Laptop,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    title: 'Offline Classroom',
    description: 'Immersive face-to-face learning at our state-of-the-art training facilities in Bangalore.',
    icon: Building2,
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    title: 'Hybrid Training',
    description: 'The best of both worlds. Attend core conceptual classes online and practical labs offline.',
    icon: Monitor,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    title: 'Corporate Training',
    description: 'Customized upskilling programs tailored specifically for enterprise IT teams and project needs.',
    icon: Users,
    color: 'text-teal-600',
    bgColor: 'bg-teal-50'
  }
];

export default function TrainingModesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3A] mb-4">
            Flexible Training Modes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose a learning environment that best fits your schedule and learning style.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modes.map((mode, index) => {
            const Icon = mode.icon;
            return (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="p-8 rounded-2xl border border-gray-100 hover:border-gray-300 hover:shadow-xl transition-all duration-300 text-center group h-full">
                  <div className={`w-16 h-16 mx-auto ${mode.bgColor} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${mode.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">{mode.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {mode.description}
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
