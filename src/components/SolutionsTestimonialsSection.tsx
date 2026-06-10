'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    name: 'Sarah Jenkins', role: 'CHRO', company: 'FinTech Dynamics',
    quote: 'The HR Consulting services provided by DMX completely restructured our talent pipeline. Their insights into compensation benchmarking saved us millions in turnover costs.',
    rating: 5, initials: 'SJ', color: 'bg-red-700',
  },
  {
    name: 'David Chen', role: 'CTO', company: 'CloudScale Inc',
    quote: 'When we needed to scale our cloud engineering team rapidly, DMX delivered. Their IT staffing approach is rigorous, ensuring we only interviewed top-tier technical fits.',
    rating: 5, initials: 'DC', color: 'bg-[#0B1F3A]',
  },
  {
    name: 'Elena Rodriguez', role: 'VP of Operations', company: 'HealthTech Solutions',
    quote: 'Our executive search for a new COO was handled with utmost discretion and professionalism. The candidates presented were absolute game-changers for our business.',
    rating: 5, initials: 'ER', color: 'bg-red-600',
  },
];

export default function SolutionsTestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-1" style={{ backgroundColor: '#E63946' }} />
            <span className="text-sm font-bold text-red-700 uppercase tracking-widest">SUCCESS STORIES</span>
            <div className="w-12 h-1" style={{ backgroundColor: '#E63946' }} />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: 'var(--font-outfit)', color: '#0B1F3A' }}>
            Impactful Talent Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear directly from the organizations that have transformed their workforce through our staffing and consulting services.
          </p>
        </ScrollReveal>

        {/* Testimonials Carousel */}
        <ScrollReveal direction="up">
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
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
            
            {/* Controls */}
            <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-50 hover:text-red-700 transition-all duration-300 hover:shadow-xl" aria-label="Previous">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-50 hover:text-red-700 transition-all duration-300 hover:shadow-xl" aria-label="Next">
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-10">
              {testimonials.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrent(i)} 
                  className={`h-2.5 rounded-full transition-all ${current === i ? 'w-8' : 'bg-gray-300 w-2.5'}`} 
                  style={current === i ? { backgroundColor: '#E63946' } : {}} 
                  aria-label={`Go to testimonial ${i + 1}`} 
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
