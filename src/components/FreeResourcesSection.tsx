'use client';

import { BookOpen, Video, FileText, Download } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import Link from 'next/link';

const resources = [
  {
    title: 'Top 50 AWS Interview Questions 2026',
    type: 'PDF Guide',
    icon: FileText,
    color: 'text-orange-500',
    bg: 'bg-orange-50'
  },
  {
    title: 'How to Build a DevOps Resume',
    type: 'Blog Post',
    icon: BookOpen,
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    title: 'Intro to AI & Machine Learning',
    type: 'Free Webinar',
    icon: Video,
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  }
];

export default function FreeResourcesSection() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <ScrollReveal direction="left" className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">
                Free Learning Resources
              </h2>
              <p className="text-gray-600">
                Kickstart your learning journey with our free guides, webinars, and interview preparation materials.
              </p>
           </ScrollReveal>
           <ScrollReveal direction="right">
              <Link href="#" className="inline-flex items-center gap-2 text-red-600 font-bold hover:text-red-700 transition-colors">
                 View All Resources <span aria-hidden="true">→</span>
              </Link>
           </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  <div className={`w-14 h-14 rounded-lg ${resource.bg} flex items-center justify-center mb-6`}>
                     <Icon className={`w-7 h-7 ${resource.color}`} />
                  </div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    {resource.type}
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-6 group-hover:text-red-600 transition-colors line-clamp-2">
                    {resource.title}
                  </h3>
                  <button className="flex items-center gap-2 text-sm font-bold text-[#0B1F3A] group-hover:text-red-600 transition-colors">
                    <Download className="w-4 h-4" /> Download Now
                  </button>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
