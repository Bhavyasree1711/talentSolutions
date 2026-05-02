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
                We Provide the Best<br />HR Solutions for Your Business
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                DMX Talent Solutions Pvt Ltd is a leading human resources consulting firm
                dedicated to connecting exceptional talent with outstanding organizations.
                With over a decade of experience, we understand the intricacies of talent
                acquisition and workforce management.
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
              <a href="#services" className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-bold text-sm rounded-lg hover:opacity-90 transition-all duration-300 hover:shadow-xl tracking-wide uppercase group" style={{ backgroundColor: '#1e3a5f' }}>
                DISCOVER MORE
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <section id="leadership" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-sm font-semibold text-red-700 uppercase tracking-wide mb-2">The People Behind DMX</h3>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold mb-4" style={{ color: '#1e3a5f' }}>
              Our Leadership Team
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              Visionaries and innovators who drive DMX Talent Solutions forward every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Siddeswara */}
            <div className="text-center bg-white shadow-lg rounded-lg p-6">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image
                  src="/images/image.png"
                  alt="Siddeswara S"
                  fill
                sizes="(max-width: 768px) 100vw, 160px"
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">SIDDESWARA S</h3>
              <p className="text-sm text-red-700 font-semibold">FOUNDER & DIRECTOR</p>
            
                
                
                
            </div>

            {/* Mahalakshmi */}
            <div className="text-center bg-white shadow-lg rounded-lg p-6">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image
                  src="/images/foun.png"
                  alt="B S Mahalakshmi"
                  fill
                sizes="(max-width: 768px) 100vw, 160px"
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">B S MAHALAKSHMI</h3>
              <p className="text-sm text-red-700 font-semibold">FOUNDER & DIRECTOR</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
