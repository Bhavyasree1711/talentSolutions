'use client';

import { Rocket, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import Link from 'next/link';

export default function InternshipSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0B1F3A] to-[#1a365d] shadow-2xl">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/20 rounded-full blur-3xl mix-blend-screen pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl mix-blend-screen pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

            <div className="relative p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
               
               <div className="lg:w-2/3">
                 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold mb-6">
                    <Rocket className="w-4 h-4 text-red-400" />
                    Gain Real Experience
                 </div>
                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                   Guaranteed Internship Opportunities with Partner Companies
                 </h2>
                 <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl">
                   Don't just learn theory. Top performers in our training programs are fast-tracked into 3-month paid and unpaid internships with our network of MNCs and startups.
                 </p>
                 
                 <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                   <div className="flex items-center gap-2">
                     <CheckCircle2 className="text-green-400 w-5 h-5" />
                     <span className="text-white font-medium">Live Production Access</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <CheckCircle2 className="text-green-400 w-5 h-5" />
                     <span className="text-white font-medium">Experience Certificate</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <CheckCircle2 className="text-green-400 w-5 h-5" />
                     <span className="text-white font-medium">PPO (Pre-Placement Offer)</span>
                   </div>
                 </div>
               </div>

               <div className="lg:w-1/3 w-full">
                 <div className="bg-white rounded-2xl p-8 text-center shadow-xl">
                   <h3 className="text-2xl font-bold text-[#0B1F3A] mb-2">Qualify for Internships</h3>
                   <p className="text-gray-500 text-sm mb-6">Enroll in any advanced course to become eligible.</p>
                   <Link href="/courses/cloud-devops" className="block w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors">
                     Explore Courses
                   </Link>
                 </div>
               </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
