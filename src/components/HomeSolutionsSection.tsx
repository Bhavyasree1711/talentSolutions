'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const homeSolutions = [
  {
    title: 'Executive Search & Staffing',
    description: 'Securing top-tier leadership and technical talent for your most critical organizational roles.',
    image: '/images/service-executive-search.png',
  },
  {
    title: 'Corporate Training & Skilling',
    description: 'Customized upskilling programs in Cloud, AI, and Cyber Security to modernize your workforce.',
    image: '/images/training-classroom.png',
  },
  {
    title: 'HR Consulting & Strategy',
    description: 'Comprehensive HR advisory, talent assessment, and organizational development services.',
    image: '/images/service-leadership.png',
  }
];

export default function HomeSolutionsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h3 className="text-sm font-bold text-red-700 uppercase tracking-widest mb-2">What We Provide</h3>
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: '#0B1F3A' }}>
              Comprehensive Talent Solutions
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              End-to-end recruitment, training, and strategic HR consulting to scale your business.
            </p>
          </div>
          
          <Link 
            href="/solutions" 
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-red-50 text-red-700 font-bold rounded-lg hover:bg-red-700 hover:text-white transition-colors duration-300 group"
          >
            Explore All Solutions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {homeSolutions.map((solution, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 to-transparent" />
                <h3 className="absolute bottom-6 left-6 right-6 text-xl font-bold text-white leading-tight">
                  {solution.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {solution.description}
                </p>
                <Link 
                  href="/solutions" 
                  className="inline-flex items-center text-red-700 font-bold group-hover:text-red-800"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View Button */}
        <div className="md:hidden flex justify-center">
          <Link 
            href="/solutions" 
            className="inline-flex items-center gap-2 px-6 py-3 w-full justify-center bg-red-50 text-red-700 font-bold rounded-lg hover:bg-red-700 hover:text-white transition-colors duration-300 group"
          >
            Explore All Solutions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
