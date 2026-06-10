'use client';

import { CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import Image from 'next/image';

const placementFeatures = [
  "Resume & Portfolio Building",
  "Technical Mock Interviews",
  "HR Round Preparation",
  "LinkedIn Profile Optimization",
  "Aptitude & Soft Skills Training",
  "Direct Referrals to Hiring Partners"
];

export default function PlacementAssistanceSection() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/service-executive-search.png" 
                  alt="360 Degree Placement Support" 
                  width={600} 
                  height={500} 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
              {/* Badge overlay */}
              <div className="absolute -bottom-6 -right-6 lg:-right-8 bg-[#0B1F3A] text-white rounded-2xl shadow-xl p-6 border-4 border-white animate-float-slow">
                <div className="text-4xl font-extrabold text-red-500 mb-1">95%</div>
                <div className="text-sm font-bold uppercase tracking-wider">Placement Record</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-red-700" />
                <span className="text-sm font-bold text-red-700 uppercase tracking-widest">CAREER SUPPORT</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3A] mb-6 leading-tight">
                360° Placement Assistance
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Our commitment doesn't end when your training finishes. We provide comprehensive career support to ensure you land your dream job in the IT sector.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
                {placementFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-800 font-semibold">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#0B1F3A] text-white p-6 rounded-xl flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-lg mb-1">Ready to start your career?</h4>
                  <p className="text-gray-300 text-sm">Join our next batch and get placed.</p>
                </div>
                <a href="/contact" className="px-6 py-3 bg-red-600 hover:bg-red-500 rounded font-bold transition-colors">
                  Apply Now
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
