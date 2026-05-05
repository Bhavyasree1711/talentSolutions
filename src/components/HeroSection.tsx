'use client';

import SocialSidebar from './SocialSidebar';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,0.92) 0%,
              rgba(255,255,255,0.75) 28%,
              rgba(255,255,255,0.45) 50%,
              rgba(255,255,255,0.15) 72%,
              rgba(255,255,255,0) 100%
            ),
            url('/images/hero-professional.png')
          `,
          backgroundSize: 'cover',
          backgroundPosition: '100% center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Floating Social Media Sidebar */}
      <SocialSidebar />

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
            {/* Left Content */}
            <div className="flex flex-col justify-center py-12 lg:py-0 max-w-xl">
              {/* Tagline */}
              <div className="mb-8 flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                
                
              </div>

              {/* Main Headline */}
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8 animate-fade-in-up text-center lg:text-left"
                style={{ fontFamily: 'var(--font-outfit), system-ui, sans-serif', color: '#0B1F3A', animationDelay: '0.2s', textShadow: '1px 1px 2px rgba(255,255,255,0.6)' }}
              >
                Partner in Modern<br />
                <span className="text-blue-600 font-bold" style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.6)' }}>HR Solutions.</span>
              </h1>

              {/* Description */}
              <p className="text-base lg:text-lg mb-10 leading-relaxed font-light animate-fade-in-up" style={{ color: '#4a5568', animationDelay: '0.3s' }}>
                We believe in thinking ahead and creating solutions that meet today's challenges and pave the way for future success.
              </p>

              {/* CTA Buttons */}
              <div className="mb-16 animate-fade-in-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.4s' }}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 text-white font-bold text-sm rounded-md transition-all duration-300 hover:shadow-xl tracking-wide uppercase group"
                  style={{ backgroundColor: '#0B1F3A' }}
                >
                  Get Free HR Consultation
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="tel:+919247030111"
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold text-sm rounded-md transition-all duration-300 hover:bg-blue-600 hover:text-white tracking-wide uppercase"
                >
                  Call +91 92470 30111
                </a>
              </div>

              {/* Contact Information */}
              <div className="text-sm font-semibold tracking-wide animate-fade-in-up flex flex-col gap-2" style={{ color: '#2d3748', animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91 92470 30111 | +91 78291 21232</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>s.siddeswara@dmxorg.com</span>
                </div>
              </div>
            </div>

            {/* Right Content - Empty for image background */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}

     