'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const clientCompanies = [
  {
    name: 'Software One',
    industry: 'Enterprise Software',
    logo: '/images/softwareone.png',
    projects: 'Cloud Solutions & DevOps'
  },
  {
    name: 'Esparsh',
    industry: 'Education & Training',
    logo: '/images/esparsh.png',
    projects: 'Talent Development'
  },
  {
    name: 'LearnSquare',
    industry: 'E-Learning Platform',
    logo: '/images/learnsquare.png',
    projects: 'Training & Certification'
  },
   {
    name: 'ALabs',
    industry: 'E-Learning Platform',
    logo: '/images/Alabs.png',
    projects: 'Training & Certification'
  },
  {
    name: 'Time4education',
    industry: 'Media & Publishing',
    logo: '/images/time.png',
    projects: 'Content & Tech Teams'
  },
   {
    name: 'ProDiSyn Innovations',
    industry: 'E-Learning Platform',
    logo: '/images/prodi.png',
    projects: 'Training & Certification'
  },
  {
    name: 'Designers',
    industry: 'E-Learning Platform',
    logo: '/images/design.png',
    projects: 'Training & Certification'
  },
  {
    name: 'Freshroots Technologies',
    industry: 'E-Learning Platform',
    logo: '/images/fresh.png',
    projects: 'Training & Certification'
  },
  {
    name: 'Motherson',
    industry: 'E-Learning Platform',
    logo: '/images/mother.png',
    projects: 'Training & Certification'
  },
  {
    name: 'Persistant',
    industry: 'E-Learning Platform',
    logo: '/images/persist.png',
    projects: 'Training & Certification'
  },
  
];

const testimonials = [
  {
    name: 'Priya Sharma', role: 'HR Director', company: 'TechVista Solutions',
    quote: 'DMX Talent Solutions transformed our hiring process. Their team found us exceptional candidates within days.',
    rating: 5, initials: 'PS', color: 'bg-red-700',
  },
  {
    name: 'Rajesh Kumar', role: 'CEO', company: 'InnovateTech India',
    quote: 'We partnered with DMX for our executive search and were blown away by the caliber of candidates presented.',
    rating: 5, initials: 'RK', color: 'bg-blue-800',
  },
  {
    name: 'Anita Desai', role: 'VP Operations', company: 'GlobalServe Corp',
    quote: 'The leadership coaching program from DMX has been transformative for our management team. Truly exceptional.',
    rating: 5, initials: 'AD', color: 'bg-red-600',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section id="clients" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-1" style={{ backgroundColor: '#E63946' }} />
            <span className="text-sm font-bold text-red-700 uppercase tracking-widest">OUR CLIENTS</span>
            <div className="w-12 h-1" style={{ backgroundColor: '#E63946' }} />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: 'var(--font-outfit)', color: '#0B1F3A' }}>
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We partner with leading organizations across India providing top-tier talent and training solutions
          </p>
        </ScrollReveal>

        {/* Client Companies Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientCompanies.map((company, index) => (
              <ScrollReveal key={company.name} direction="up" delay={index * 150}>
                <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 border-2 border-gray-200 hover:border-red-300 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full flex flex-col items-center text-center">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-700 to-blue-900 rounded-t-lg" />

                  {/* Company Icon */}
                  <div className="relative mb-6 h-24 w-24 overflow-hidden rounded-lg bg-white border border-gray-200 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      fill
                      sizes="(min-width: 768px) 96px, 96px"
                      className="object-contain p-2"
                    />
                  </div>

                  {/* Company Name */}
                  <h3 className="text-xl font-bold mb-2 leading-snug" style={{ color: '#E63946' }}>
                    {company.name}
                  </h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider">What They Say</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Testimonials Carousel */}
        <ScrollReveal direction="up">
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
                {testimonials.map((t) => (
                  <div key={t.name} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 lg:p-10 shadow-xl border-2 border-gray-100 text-center hover:border-red-200 transition-all">
                      <div className="flex items-center justify-center gap-1 mb-6">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-lg text-gray-600 leading-relaxed mb-8 italic">&ldquo;{t.quote}&rdquo;</p>
                      <div className="flex items-center justify-center gap-4">
                        <div className={`w-12 h-12 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>{t.initials}</div>
                        <div className="text-left">
                          <p className="font-bold text-lg" style={{ color: '#0B1F3A' }}>{t.name}</p>
                          <p className="text-sm text-gray-500">{t.role}</p>
                          <p className="text-sm font-semibold text-red-700">{t.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-50 hover:text-red-700 transition-all duration-300 hover:shadow-xl" aria-label="Previous">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-50 hover:text-red-700 transition-all duration-300 hover:shadow-xl" aria-label="Next">
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="flex items-center justify-center gap-2 mt-10">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`h-2.5 rounded-full transition-all ${current === i ? 'w-8' : 'bg-gray-300 w-2.5'}`} style={current === i ? { backgroundColor: '#E63946' } : {}} aria-label={`Go to testimonial ${i + 1}`} />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { number: '100+', label: 'Successful Projects' },
            { number: '50+', label: 'Corporate Partners' },
            { number: '98%', label: 'Client Satisfaction' },
          ].map((stat, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 100}>
              <div className="p-6">
                <p className="text-4xl lg:text-5xl font-extrabold mb-2" style={{ color: '#E63946' }}>
                  {stat.number}
                </p>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
