'use client';

import { ShieldCheck, Target, Lightbulb, Users } from 'lucide-react';

const values = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description: 'We uphold the highest standards of transparency and honesty in all our corporate dealings and training programs.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We are committed to delivering elite talent and top-tier educational experiences that exceed industry standards.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We continuously adapt our methodologies and IT curriculums to stay ahead of rapid technological advancements.',
  },
  {
    icon: Users,
    title: 'Client Success',
    description: 'Your success is our priority. We measure our achievements strictly by the tangible growth of our partners and students.',
  },
];

export default function CoreValuesSection() {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: '#0B1F3A' }}>
            Our Core Values
          </h2>
          <p className="text-gray-600 text-lg">
            The foundational principles that drive our operations, guarantee our quality, and build lasting trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-red-50 text-red-700 flex items-center justify-center mb-6 group-hover:bg-red-700 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0B1F3A]">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
