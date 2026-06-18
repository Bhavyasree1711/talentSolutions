import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import {
  Building2, Video, BrainCircuit,
  Languages, ShieldCheck, Code,
  ArrowRight
} from 'lucide-react';

export default function ProductsPage() {
  const products = [
    {
      name: 'CampusNXT',
      description: 'Enterprise Academic ERP that centralizes student lifecycle, academic operations, finance and administration — secure, auditable, and extensible.',
      href: '/products/campusnxt',
      icon: Building2,
      image: '/images/products/campusnxt_cover.png',
      theme: 'red'
    },
    {
      name: 'AI IAS',
      description: 'Automated video Interviewing platform with behavioral analytics and candidate insights to accelerate hiring decisions.',
      href: '/products/ai-ias',
      icon: Video,
      image: '/images/products/ai_ias_cover.png',
      theme: 'blue'
    },
    {
      name: 'AI Q-Gen',
      description: 'AI powered assessment generator producing curriculum aligned question banks and exam papers from source content.',
      href: '/products/ai-q-gen',
      icon: BrainCircuit,
      image: '/images/products/ai_qgen_cover.png',
      theme: 'red'
    },
    {
      name: 'AI-VideoTrans',
      description: 'AI driven video localization for translation and dubbing with neural voice synthesis and subtitle synchronization.',
      href: '/products/ai-video',
      icon: Languages,
      image: '/images/products/ai_videotrans_cover.png',
      theme: 'blue'
    },
    {
      name: 'AI-SmartExam',
      description: 'Secure online assessment platform featuring AI proctoring, automated grading, and integrity controls.',
      href: '/products/ai-exam',
      icon: ShieldCheck,
      image: '/images/products/ai_smartexam_cover.png',
      theme: 'red'
    },
    {
      name: 'CodeOne',
      description: 'Collaborative browser-based multi-language coding environment for learning and assessments.',
      href: '/products/codeone',
      icon: Code,
      image: '/images/products/codeone_cover.png',
      theme: 'blue'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-32 pb-24">
        {/* HERO SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1e3a5f]">
            Our Innovative Product Suite
          </h1>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Explore powerful digital solutions tailored for modern business needs.
          </p>
        </div>

        {/* PRODUCTS GRID */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300 overflow-hidden flex flex-col h-full border border-gray-100"
              >
                {/* Product Image Cover */}
                <div className="relative w-full h-48 sm:h-52 bg-gray-100 border-b border-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${product.theme === 'red' ? 'bg-red-50 border-red-100' : 'bg-blue-50 border-blue-100'}`}>
                      <product.icon className={`w-4 h-4 ${product.theme === 'red' ? 'text-red-500' : 'text-blue-500'}`} />
                    </div>
                    <h2 className="text-lg font-bold text-[#1e3a5f]">{product.name}</h2>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                    {product.description}
                  </p>

                  <Link
                    href={product.href}
                    className="inline-flex items-center text-red-500 font-semibold text-sm hover:text-red-700 transition-colors mt-auto"
                  >
                    Explore Product <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="mt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#1e3a5f] rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-red-500/20 blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Ready to transform your business?
              </h2>
              <p className="text-blue-100 text-sm md:text-base mb-8 max-w-2xl mx-auto">
                Contact us today to schedule a demo and learn how our suite of products can help you achieve your goals faster.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300"
              >
                Contact Us Now <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
