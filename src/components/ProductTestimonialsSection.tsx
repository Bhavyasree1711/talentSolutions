import React from 'react';
import { Star, Quote } from 'lucide-react';

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
  image?: string;
}

interface ProductTestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials: TestimonialItem[];
}

export default function ProductTestimonialsSection({
  title = "Trusted by Industry Leaders",
  subtitle = "See how our product is transforming businesses and educational institutions globally.",
  testimonials
}: ProductTestimonialsSectionProps) {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">
            {title}
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow relative">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-50 opacity-50" />
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 relative z-10 italic">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {t.image ? (
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-blue-600 font-bold text-lg">{t.name.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1e3a5f]">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
