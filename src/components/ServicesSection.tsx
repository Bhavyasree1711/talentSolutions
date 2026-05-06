'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';


const services = [
  {
    title: 'Talent Acquisition',
    slug: 'talent-acquisition',
    description:
      'Leveraging proprietary screening processes and an extensive industry network to identify and secure the precise technical expertise your business demands for complex cloud and hybrid environments.',
    image: '/images/hero-team.png',
    borderColor: 'border-red-700',
  },
  {
    title: 'Contract Staffing, RPO & WPO',
    slug: 'contract-staffing',
    description:
      'Providing flexible workforce solutions for project-based requirements, delivering specialized skills in insurance software and technology implementations without the overhead of permanent headcount.',
    image: '/images/service-executive-search.png',
    borderColor: 'border-red-600',
  },
  {
    title: 'Permanent Staffing & BoT',
    slug: 'permanent-staffing',
    description:
      'Executing strategic hiring to foster long-term organizational growth, ensuring candidates possess both technical prowess and cultural alignment with your enterprise\'s values and objectives.',
    image: '/images/service-leadership.png',
    borderColor: 'border-red-700',
  },
  {
    title: 'Skill Assessment',
    slug: 'skill-assessment',
    description:
      'Thoroughly evaluating both technical proficiencies and essential soft skills using industry standard frameworks and our custom assessment tools designed specifically for multi-cloud and hybrid architecture roles.',
    image: '/images/skillassess.png',
    borderColor: 'border-red-700',
  },
  {
    title: 'Train & Deploy',
    slug: 'train-deploy',
    description:
      'Developing custom training programs to upskill talent, followed by strategic deployment into your organization to address specific project needs and technical skill gaps in emerging technologies.',
    image: '/images/training-classroom.png',
    borderColor: 'border-red-600',
  },
];

export default function ServicesSection() {
  return (
    <section id="talents" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-outfit)', color: '#E63946' }}
          >
            Recruitment & Staffing Solutions
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transforming workplaces through innovative HR solutions tailored to your organization's needs.
          </p>
        </ScrollReveal>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
            
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.title}
              direction="up"
              delay={index * 100}
              className={`${index === 4 ? 'md:col-start-2' : ''}`}
            >
              <Link href={`/solutions/${service.slug}`} className="block h-full group">
  <div
    className={`border-4 ${service.borderColor} rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-white h-full flex flex-col`}
  >
    {/* Image */}
    <div className="relative h-48 overflow-hidden bg-gray-100">
      <Image
        src={service.image}
        alt={service.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>

    {/* Content */}
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-xl font-bold mb-3 text-[#0B1F3A]">
        {service.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-grow">
        {service.description}
      </p>
      <div className="mt-6">
        <span className="inline-flex items-center justify-center px-4 py-2 bg-red-50 text-red-700 border border-red-100 text-sm font-bold rounded transition-colors uppercase tracking-wide group-hover:bg-red-700 group-hover:text-white">
          Learn More
          <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </div>
    </div>
  </div>
</Link>
            </ScrollReveal>
          ))}
        </div>          
      </div>
    </section>
  );
}
