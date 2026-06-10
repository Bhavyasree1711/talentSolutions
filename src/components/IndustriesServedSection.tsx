'use client';

import Image from 'next/image';

const industries = [
  { name: 'Information Technology', image: '/images/industry_it.png' },
  { name: 'Healthcare', image: '/images/industry_healthcare.png' },
  { name: 'Finance', image: '/images/industry_finance.png' },
  { name: 'E-commerce', image: '/images/industry_ecommerce.png' },
  { name: 'Manufacturing', image: '/images/industry_manufacturing.png' },
  { name: 'Retail', image: '/images/industry_retail.png' },
  { name: 'Education', image: '/images/industry_education.png' },
  { name: 'Startups', image: '/images/industry_startups.png' },
];

export default function IndustriesServedSection() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-[#0B1F3A]">
            Industries We Serve
          </h2>
          <p className="text-gray-600 text-lg">
            We deliver highly specialized talent and customized workforce strategies across a diverse range of critical global sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            return (
              <div 
                key={index}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/70 to-transparent opacity-80" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      {industry.name}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
