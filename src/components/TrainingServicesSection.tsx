'use client';

import { BriefcaseBusiness, GraduationCap, Handshake } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const trainingSteps = [
  { number: 1, title: 'Profile Building', description: 'Build a compelling professional profile', icon: 'user' },
  { number: 2, title: 'Interview Preparation', description: 'Master interview techniques and strategies', icon: 'chat' },
  { number: 3, title: 'Storytelling Skills', description: 'Learn to communicate your achievements effectively', icon: 'megaphone' },
  { number: 4, title: 'Cloud & Digital Tech', description: 'Gain expertise in cloud and digital technologies', icon: 'cloud' },
  { number: 5, title: 'Certifications', description: 'Earn AWS, Azure, and industry certifications', icon: 'badge' },
  { number: 6, title: 'Job Ready Placement', description: 'Direct placement into ready opportunities', icon: 'briefcase' },
];

function TrainingStepIcon({ icon }: { icon: string }) {
  const iconClass = 'h-7 w-7';

  switch (icon) {
    case 'user':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 21a8 8 0 0 0-16 0" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case 'chat':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
        </svg>
      );
    case 'megaphone':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 11v2a2 2 0 0 0 2 2h3l4 4V5L8 9H5a2 2 0 0 0-2 2z" />
          <path d="M16 9a4 4 0 0 1 0 6" />
          <path d="M19 7a7 7 0 0 1 0 10" />
        </svg>
      );
    case 'cloud':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
          <path d="M8 17h8" />
          <path d="M12 13v8" />
        </svg>
      );
    case 'badge':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3l2.5 1.5 3-.5 1.5 2.5 2.5 1.5-.5 3L22.5 14 21 16.5l.5 3-2.5 1.5-3-.5L12 22l-2.5-1.5-3 .5L4 19.5l.5-3L3 14l1.5-2.5-.5-3L7 7l1.5-2.5 3 .5z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case 'briefcase':
    default:
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <path d="M2 13h20" />
        </svg>
      );
  }
}

export default function TrainingServicesSection() {
  return (
    <section id="training" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-red-50 rounded-full -translate-y-1/2 translate-x-1/3 opacity-40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-1" style={{ backgroundColor: '#E63946' }} />
            <span className="text-sm font-bold text-red-700 uppercase tracking-widest">TRAINING PROGRAMS</span>
            <div className="w-12 h-1" style={{ backgroundColor: '#E63946' }} />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: 'var(--font-outfit)', color: '#0B1F3A' }}>
            Comprehensive Support System
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our structured training journey takes you from beginner to job-ready professional
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingSteps.map((step, index) => (
            <ScrollReveal key={step.number} direction="up" delay={index * 150}>
              <div className="relative group bg-white rounded-lg p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-red-50 to-blue-50 text-red-700 shadow-sm ring-1 ring-red-100 transition-transform duration-300 group-hover:scale-110">
                    <TrainingStepIcon icon={step.icon} />
                  </div>
                  <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-extrabold tracking-wider text-red-700">
                    STEP {String(step.number).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 leading-snug" style={{ color: '#0B1F3A' }}>
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        

        <section className="py-20">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* HEADING */}
    <div className="text-center mb-14">
      <h3 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-3">
        Why Choose Our Training Program?
      </h3>
      <p className="text-gray-600 max-w-2xl mx-auto">
        We combine expert mentorship, hands-on learning, and strong industry connections to help you succeed.
      </p>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          icon: GraduationCap,
          title: 'Experienced Faculty',
          desc: 'Learn from industry experts with 15+ years of experience',
        },
        {
          icon: BriefcaseBusiness,
          title: 'Real-World Training',
          desc: 'Hands-on learning with live projects and case studies',
        },
        {
          icon: Handshake,
          title: 'Industry Connections',
          desc: 'Network and get direct placement opportunities',
        },
      ].map((feature, i) => (
        <ScrollReveal key={i} direction="up" delay={i * 100}>

          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 text-center group h-full flex flex-col">

            {/* ICON */}
            <div className="mb-5 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-red-50 to-blue-50 text-red-700 shadow-sm ring-1 ring-red-100 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8" strokeWidth={2} />
              </div>
            </div>

            {/* TITLE */}
            <h4 className="text-xl font-bold mb-2 text-[#0B1F3A]">
              {feature.title}
            </h4>

            {/* DESC */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.desc}
            </p>

          </div>

        </ScrollReveal>
      ))}

    </div>

  </div>

</section>
      </div>
    </section>
  );
} 