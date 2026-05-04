'use client';

import ScrollReveal from './ScrollReveal';

export default function CTASection() {
  return (
    <section id="cta" className="py-20 lg:py-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #0f1d33 60%, #1a1a2e 100%)' }}>
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-600/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-spin-slow" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal direction="up">
          <span className="inline-block text-sm font-semibold text-red-300 uppercase tracking-wide mb-4">GET STARTED TODAY</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
            Ready to Build Your<br />Dream Team?
          </h2>
          <p className="text-lg text-blue-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Partner with DMX Talent Solutions and discover how we can transform your
            hiring process and connect you with exceptional talent.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/#contact" className="px-8 py-4 bg-red-700 text-white font-bold text-sm rounded-lg hover:bg-red-600 transition-all duration-300 hover:shadow-xl tracking-wide uppercase inline-flex items-center gap-2 group">
              GET STARTED
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
            <a href="tel:+916364512292" className="px-8 py-4 bg-white/10 backdrop-blur text-white font-bold text-sm rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 tracking-wide uppercase">
              SCHEDULE A CALL
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
