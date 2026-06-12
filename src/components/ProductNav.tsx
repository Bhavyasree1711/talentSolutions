'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ArrowLeft, BookOpen, BrainCircuit, Sparkles, 
  Video, ShieldCheck, Code 
} from 'lucide-react';

export default function ProductNav() {
  const pathname = usePathname();

  const products = [
    { name: 'CampusNXT', href: '/products/campusnxt', icon: BookOpen },
    { name: 'AI IAS', href: '/products/ai-ias', icon: BrainCircuit },
    { name: 'AI Q-Gen', href: '/products/ai-q-gen', icon: Sparkles },
    { name: 'AI-VideoTrans', href: '/products/ai-video', icon: Video },
    { name: 'AI-SmartExam', href: '/products/ai-exam', icon: ShieldCheck },
    { name: 'CodeOne', href: '/products/codeone', icon: Code },
  ];

  return (
    <div className="w-full bg-gray-100 py-3 border-b border-gray-200 mt-20 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Back to Catalog */}
        <Link 
          href="/products"
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-200 shadow-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Catalog
        </Link>

        {/* Product Links Pill */}
        <div className="flex items-center bg-white rounded-full p-1 border border-gray-200 shadow-sm">
          {products.map((product) => {
            const isActive = pathname === product.href;
            return (
              <Link
                key={product.name}
                href={product.href}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  isActive 
                    ? 'bg-[#3b6cb4] text-white shadow-md' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <product.icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                {product.name}
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}
