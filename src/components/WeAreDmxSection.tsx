'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function WeAreDmxSection() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-1 bg-red-700 rounded-full" />
              <span className="text-sm font-bold text-red-700 uppercase tracking-widest">About Our Company</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-[1.15]" style={{ color: '#0B1F3A' }}>
              We Are DMX Talent Solutions & Software IT Trainings
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              DMX Talent Solutions is a premier HR consulting and IT training firm. We bridge the gap between world-class enterprises and elite technical talent, while empowering the next generation of engineers through rigorous, industry-aligned software training programs.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Global Executive Search & IT Staffing",
                "Advanced Cloud, AI, and DevOps Training",
                "Strategic HR Consulting & Corporate Development",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-red-700" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0B1F3A] hover:bg-[#15315b] text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Discover Our Story
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Side: Oval Image Card */}
          <div className="flex-1 relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[3/4]">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
              
              {/* The Oval Image Container */}
              <div 
                className="relative w-full h-full bg-gray-100 shadow-2xl overflow-hidden border-8 border-white group"
                style={{ 
                  borderRadius: '140px 140px 10px 10px', // Nice arch/oval shape
                }}
              >
                <Image
                  src="/images/service-talent-sourcing.png"
                  alt="DMX Professional Team"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
