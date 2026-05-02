'use client';

import ScrollReveal from './ScrollReveal';
import Image from 'next/image';

const reasons = [
  {
    title: 'Industry Expertise',
    description:
      'Deep knowledge across 50+ industries ensures we find candidates who truly understand your domain.',
    image: '/images/industry experts.jpeg',
  },
  {
    title: 'Speed to Hire',
    description:
      'Our streamlined processes deliver qualified shortlists within days, not weeks.',
    image: '/images/speedtohire.png',
  },
  {
    title: 'Quality Candidates',
    description:
      'Rigorous screening and assessment ensures only the best talent reaches your desk.',
    image: '/images/quality app.jpeg',
  },
  {
    title: 'Dedicated Support',
    description:
      'A dedicated account manager guides you through every step of the hiring journey.',
    image: '/images/dedicated support.jpeg',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <ScrollReveal direction="up" className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-red-700" />
            <span className="text-sm font-semibold text-red-700 uppercase tracking-wide">
              WHY CHOOSE US
            </span>
            <div className="w-8 h-px bg-red-700" />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: '#1e3a5f' }}
          >
            Why DMX Talent Solutions?
          </h2>

          <p className="text-gray-500 text-base lg:text-lg max-w-2xl mx-auto">
            We go beyond traditional recruitment to deliver exceptional talent that drives business growth
          </p>
        </ScrollReveal>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 120}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group h-full flex flex-col">

                {/* IMAGE */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* TEXT */}
                <div className="p-5 text-center flex-1 flex flex-col justify-between">
                  <h3
                    className="text-lg font-bold mb-2 group-hover:text-red-700 transition-colors"
                    style={{ color: '#1e3a5f' }}
                  >
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}