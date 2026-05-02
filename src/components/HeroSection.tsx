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
                className="text-5xl sm:text-6xl lg:text-6xl font-bold leading-tight mb-8 animate-fade-in-up"
                style={{ fontFamily: 'var(--font-outfit), system-ui, sans-serif', color: '#1a2332', animationDelay: '0.2s' }}
              >
                Partner in Modern<br />HR Solutions.
              </h1>

              {/* Description */}
              <p className="text-base lg:text-lg mb-10 leading-relaxed font-light animate-fade-in-up" style={{ color: '#4a5568', animationDelay: '0.3s' }}>
                We believe in thinking ahead and creating solutions that meet today&apos;s challenges and pave the way for future success.
              </p>

              {/* CTA Button */}
              <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <a
                  href="#talents"
                  className="inline-flex items-center gap-3 px-8 py-3 text-white font-bold text-sm rounded-md transition-all duration-300 hover:shadow-xl tracking-wide uppercase group"
                  style={{ backgroundColor: '#0B1F3A' }}
                >
                  LEARN MORE
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              {/* Phone Number */}
              <div className="text-sm font-semibold tracking-wide animate-fade-in-up" style={{ color: '#2d3748', animationDelay: '0.5s' }}>
                {/* +(91) 6364-512-292 */}
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

     