'use client';

import { Award, Briefcase, GraduationCap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import Image from 'next/image';

const trainers = [
  {
    name: "Vikram Sharma",
    role: "Lead Cloud Instructor",
    image: "/images/hero-professional1.png", // Using placeholder corporate image
    experience: "12+ Years",
    exCompany: "Ex-Infosys, AWS",
    certs: ["AWS Solutions Architect Pro", "Azure Administrator Associate"]
  },
  {
    name: "Neha Gupta",
    role: "Data Science & AI Head",
    image: "/images/hero-professional.png", // Using placeholder corporate image
    experience: "10+ Years",
    exCompany: "Ex-TCS, IBM",
    certs: ["Google Machine Learning Engineer", "IBM Data Science Pro"]
  },
  {
    name: "Arjun Reddy",
    role: "Cyber Security Expert",
    image: "/images/image.png", // Using placeholder
    experience: "14+ Years",
    exCompany: "Ex-Wipro, Cisco",
    certs: ["CISSP", "CEH v12", "CompTIA Security+"]
  }
];

export default function TrainerFacultySection() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3A] mb-4">
            Learn from Industry Experts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our trainers are real-world practitioners with decades of experience at top MNCs. They bring actual industry problems directly into the classroom.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                
                {/* Image Area */}
                <div className="relative h-64 w-full bg-gray-200 overflow-hidden">
                  <Image 
                    src={trainer.image} 
                    alt={trainer.name} 
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{trainer.name}</h3>
                    <p className="text-red-400 font-semibold">{trainer.role}</p>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                    <div className="flex-1 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-semibold text-gray-700">{trainer.experience}</span>
                    </div>
                    <div className="w-px h-6 bg-gray-200"></div>
                    <div className="flex-1 flex items-center justify-end gap-2 text-right">
                      <span className="text-sm font-bold text-[#0B1F3A]">{trainer.exCompany}</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-4 h-4 text-red-600" />
                      <h4 className="font-bold text-gray-800 text-sm uppercase">Certifications</h4>
                    </div>
                    <ul className="space-y-2">
                      {trainer.certs.map((cert, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <GraduationCap className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
