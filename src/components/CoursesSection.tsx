'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

const courseCategories = [
  {
    title: 'Cloud & DevOps',
    slug: 'cloud-devops',
    description: 'Master CI/CD pipelines, Docker, Kubernetes, and scalable infrastructure automation.',
    image: '/images/cloud.png',
    borderColor: 'border-blue-600',
    duration: '12 Weeks',
    level: 'Beginner to Advanced',
    tools: 'Docker, Kubernetes, Jenkins',
  },
  {
    title: 'AI & Data Science',
    slug: 'ai',
    description: 'Dive deep into Artificial Intelligence, Machine Learning algorithms, and advanced Data Analytics.',
    image: '/images/aipowerded.png',
    borderColor: 'border-purple-600',
    duration: '16 Weeks',
    level: 'Intermediate to Advanced',
    tools: 'Python, TensorFlow, SQL',
  },
  {
    title: 'Cybersecurity',
    slug: 'security',
    description: 'Learn to protect networks, secure applications, and master ethical hacking fundamentals.',
    image: '/images/security.png',
    borderColor: 'border-red-600',
    duration: '10 Weeks',
    level: 'Beginner to Advanced',
    tools: 'Kali Linux, Wireshark, Metasploit',
  },
  {
    title: 'Datacenter',
    slug: 'data-center-infrastructure-engineer',
    description: 'Understand modern datacenter architecture, virtualization, and advanced server management.',
    image: '/images/security.png', // Reusing placeholder
    borderColor: 'border-green-600',
    duration: '8 Weeks',
    level: 'Beginner to Advanced',
    tools: 'VMware, Windows Server, Linux',
  },
  {
    title: 'AWS',
    slug: 'aws-cloud',
    description: 'Master AWS cloud services, cloud architecture, and infrastructure security.',
    image: '/images/aws.png',
    borderColor: 'border-orange-500',
    duration: '8 Weeks',
    level: 'Beginner to Advanced',
    tools: 'EC2, S3, IAM, CloudFormation',
  },
  {
    title: 'Soft Skill Trainings',
    slug: 'Softskills',
    description: 'Improve communication, leadership, teamwork, and critical interview skills for corporate success.',
    image: '/images/aipowerded.png', // Reusing placeholder
    borderColor: 'border-teal-500',
    duration: '4 Weeks',
    level: 'All Levels',
    tools: 'Communication, Leadership, Agile',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-3 text-[#0B1F3A] group-hover:text-red-700 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {category.description}
                    </p>
                    
                    {/* Course Metrics */}
                    <div className="space-y-2 mb-6 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100 flex-grow">
                       <p><strong className="text-[#0B1F3A]">Duration:</strong> {category.duration}</p>
                       <p><strong className="text-[#0B1F3A]">Level:</strong> {category.level}</p>
                       <p><strong className="text-[#0B1F3A]">Tools:</strong> {category.tools}</p>
                    </div>
                    
                    <span className="mt-auto inline-flex items-center justify-center w-full px-4 py-3 bg-[#0B1F3A] text-white font-bold text-sm rounded-lg group-hover:bg-red-700 transition-all duration-300 uppercase tracking-wide">
                      View Details
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