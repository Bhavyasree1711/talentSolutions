'use client';

import Image from 'next/image';

export default function LeadershipSection() {
  return (
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
  );
}
