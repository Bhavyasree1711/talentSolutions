'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const partners = [
  { name: 'Software One', logo: '/images/softwareone.png' },
  { name: 'Esparsh', logo: '/images/esparsh.png' },
  { name: 'LearnSquare', logo: '/images/learnsquare.png' },
  { name: 'ALabs', logo: '/images/ALabs.png' },
  { name: 'Time4education', logo: '/images/time.png' },
  { name: 'ProDiSyn Innovations', logo: '/images/prodi.png' },
  { name: 'Designers', logo: '/images/design.png' },
  { name: 'Freshroots', logo: '/images/fresh.png' },
  { name: 'Motherson', logo: '/images/mother.png' },
  { name: 'Persistant', logo: '/images/persist.png' }
];

export default function HiringPartnersSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee-partner {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-partner {
            animation: marquee-partner 40s linear infinite;
          }
          .grayscale-hover {
            filter: grayscale(100%) opacity(0.7);
            transition: all 0.3s ease;
          }
          .grayscale-hover:hover {
            filter: grayscale(0%) opacity(1);
          }
        `
      }} />
      <section className="py-20 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" className="mb-12">
            <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">
              Companies Hiring Our Students
            </h2>
            <p className="text-gray-500">
              Our alumni are making an impact at top organizations across the globe.
            </p>
          </ScrollReveal>

          {/* Marquee Slider */}
          <div className="relative mb-16">
            <div className="flex animate-marquee-partner space-x-12 items-center">
              {[...partners, ...partners].map((partner, index) => (
                <div key={`${partner.name}-${index}`} className="flex-shrink-0 w-48 h-20 relative grayscale-hover">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    sizes="192px"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            {/* Fade Edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent"></div>
          </div>

          {/* Quick Stats Strip */}
          <ScrollReveal direction="up" delay={200}>
            <div className="inline-flex flex-wrap justify-center items-center gap-x-12 gap-y-6 bg-gray-50 px-10 py-6 rounded-2xl border border-gray-100">
               <div>
                  <div className="text-2xl font-extrabold text-[#0B1F3A]">12+</div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">MNC Partners</div>
               </div>
               <div className="hidden sm:block w-px h-10 bg-gray-300"></div>
               <div>
                  <div className="text-2xl font-extrabold text-[#0B1F3A]">3.5L - 25L</div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Salary Packages</div>
               </div>
               <div className="hidden sm:block w-px h-10 bg-gray-300"></div>
               <div>
                  <div className="text-2xl font-extrabold text-[#0B1F3A]">Active</div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Campus Drives</div>
               </div>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </>
  );
}
