'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/service-talent-sourcing.png" alt="DMX Talent Solutions team collaboration" width={600} height={500} className="w-full h-auto object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 lg:-right-8 bg-white rounded-2xl shadow-xl p-6 animate-float-slow">
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 opacity-20">
                <div className="grid grid-cols-4 gap-1.5">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1e3a5f' }} />
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-red-700" />
                <span className="text-sm font-semibold text-red-700 uppercase tracking-wide">ABOUT US</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-outfit)', color: '#1e3a5f' }}>
                Building Exceptional Teams
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                DMX Talent Solutions is a leading HR and recruitment consulting firm dedicated to helping organizations build exceptional teams. We provide customized staffing, talent acquisition, and workforce solutions tailored to modern business needs. With a commitment to quality, innovation, and client success, we connect the right talent with the right opportunities across diverse industries.
              </p>
              <div className="space-y-5 mb-8">
                {[
                  { label: 'Executive Search', value: 95 },
                  { label: 'IT Staffing', value: 90 },
                  { label: 'HR Consulting', value: 88 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700">{item.label}</span>
                      <span className="text-sm font-bold text-red-700">{item.value}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${item.value}%`, background: 'linear-gradient(to right, #1e3a5f, #2d5a8e)' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
