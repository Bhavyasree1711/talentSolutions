'use client';

import { Target, Eye } from 'lucide-react';

export default function MissionVisionSection() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Mission */}
          <div className="bg-gray-50 rounded-2xl p-10 border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <Target className="w-40 h-40 text-[#0B1F3A]" />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-red-700" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our mission is to bridge the gap between exceptional talent and growing organizations through innovative, reliable, and people-focused HR solutions.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-[#0B1F3A] rounded-2xl p-10 shadow-lg relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <Eye className="w-40 h-40 text-white" />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <Eye className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our vision is to become a trusted global talent partner known for delivering impactful workforce solutions and transforming hiring experiences.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
