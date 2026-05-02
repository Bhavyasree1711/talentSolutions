'use client';

import ScrollReveal from './ScrollReveal';

const trainingSteps = [
  { number: 1, title: 'Profile Building', description: 'Build a compelling professional profile' },
  { number: 2, title: 'Interview Preparation', description: 'Master interview techniques and strategies' },
  { number: 3, title: 'Storytelling Skills', description: 'Learn to communicate your achievements effectively' },
  { number: 4, title: 'Cloud & Digital Tech', description: 'Gain expertise in cloud and digital technologies' },
  { number: 5, title: 'Certifications', description: 'Earn AWS, Azure, and industry certifications' },
  { number: 6, title: 'Job Ready Placement', description: 'Direct placement into ready opportunities' },
];

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
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
                <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 group-hover:border-red-300 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full flex flex-col">
                  {/* Step number badge */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center font-extrabold text-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: '#E63946' }}
                  >
                    {String(step.number).padStart(2, '0')}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 leading-snug" style={{ color: '#0B1F3A' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-1">{step.description}</p>

                  {/* Arrow indicator */}
                  {index < trainingSteps.length - 1 && (
                    <div className="mt-6 text-red-700 font-bold text-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                      ↓
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Feature highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: '👨‍🏫', title: 'Experienced Faculty', desc: 'Learn from industry experts with 15+ years of experience' },
            { icon: '💼', title: 'Real-World Training', desc: 'Hands-on learning with live projects and case studies' },
            { icon: '🤝', title: 'Industry Connections', desc: 'Network and get direct placement opportunities' },
          ].map((feature, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 100}>
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h4 className="text-xl font-bold mb-2" style={{ color: '#0B1F3A' }}>
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
