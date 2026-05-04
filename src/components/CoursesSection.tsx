'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

const courseCategories = [
  {
    title: 'Cloud & DevOps',
    slug: 'cloud-devops',
    description: 'Master AWS, Azure, and modern CI/CD practices to build and deploy scalable cloud infrastructure.',
    image: '/images/cloud.png',
    borderColor: 'border-red-600',
  },
  {
    title: 'AI & Data Science',
    slug: 'ai',
    description: 'Dive deep into Artificial Intelligence, Machine Learning algorithms, and advanced Data Analytics.',
    image: '/images/aipowerded.png',
    borderColor: 'border-red-700',
  },
  {
    title: 'Cyber Security',
    slug: 'security',
    description: 'Learn to protect networks, secure applications, and master ethical hacking fundamentals.',
    image: '/images/security.png',
    borderColor: 'border-red-600',
  },
  {
    title: 'Soft Skills Training',
    slug: 'Softskills', // Matches the folder you created
    description: 'Develop essential leadership, communication, and professional workplace skills to accelerate your career.',
    image: '/images/Softskills.png',
    borderColor: 'border-red-700',
  },
];

export default function CoursesSection() {
  return (
    <section id="training-categories" className="py-20 lg:py-28 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-1" style={{ backgroundColor: '#E63946' }} />
            <span className="text-sm font-bold text-red-700 uppercase tracking-widest">TRAINING PROGRAMS</span>
            <div className="w-12 h-1" style={{ backgroundColor: '#E63946' }} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: 'var(--font-outfit)', color: '#0B1F3A' }}>
            Explore Our Course Categories
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Industry-aligned training programs designed to equip you with the most in-demand technical and professional skills.
          </p>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courseCategories.map((category, index) => (
            <ScrollReveal key={category.slug} direction="up" delay={index * 100}>
              <Link href={`/courses/${category.slug}`} className="block h-full group">
                <div className={`border-b-4 ${category.borderColor} rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white h-full flex flex-col`}>
                  
                  {/* Image Container */}
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex-grow flex flex-col text-center">
                    <h3 className="text-xl font-bold mb-3 text-[#0B1F3A] group-hover:text-red-700 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">
                      {category.description}
                    </p>
                    
                    <span className="mt-auto inline-flex items-center justify-center w-full px-4 py-3 bg-gray-50 text-[#0B1F3A] font-bold text-sm rounded-lg group-hover:bg-red-700 group-hover:text-white transition-all duration-300 uppercase tracking-wide">
                      View Courses
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}