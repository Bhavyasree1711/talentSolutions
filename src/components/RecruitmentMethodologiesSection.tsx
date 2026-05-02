'use client';

import ScrollReveal from './ScrollReveal';

const methodologies = [
  {
    title: 'AI-Powered Matching',
    description: 'Predictive analytics technology to match candidates with roles instantly',
    benefits: ['Faster hiring', 'Predictive analytics', 'Higher retention'],
    icon: '🤖'
  },
  {
    title: 'Remote Talent Pools',
    description: 'Access to global talent network with cloud collaboration capabilities',
    benefits: ['Global hiring', 'Cloud collaboration', 'Flexible teams'],
    icon: '🌍'
  },
  {
    title: 'Skill Assessment Driven',
    description: 'Focus on real skills and competencies, not just qualifications',
    benefits: ['Real skill focus', 'Practical assessment', 'Better fit'],
    icon: '✓'
  }
];

export default function RecruitmentMethodologiesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-16">
          <span className="text-sm font-bold text-red-700 uppercase tracking-widest">Our Approach</span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-outfit)', color: '#0B1F3A' }}>
            Modern Recruitment<br />Methodologies
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our recruitment strategies evolve to attract top-tier talent with cutting-edge technology
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methodologies.map((method, index) => (
            <ScrollReveal key={method.title} direction="up" delay={index * 150}>
              <div className="h-full rounded-2xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-red-300 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8">
                <div className="text-5xl mb-4">{method.icon}</div>
                <h3 className="text-2xl font-bold mb-3 leading-snug" style={{ color: '#0B1F3A' }}>
                  {method.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {method.description}
                </p>
                <div className="space-y-2">
                  {method.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-red-700 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      <span className="text-sm font-medium text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
