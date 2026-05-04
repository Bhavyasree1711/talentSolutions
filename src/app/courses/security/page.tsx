import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Shield, Search, Server, FileCheck } from 'lucide-react';

// Mock Data for Security Courses
const securityCourses = [
  {
    id: 'cyber-security-basics',
    title: 'Cyber Security Basics',
    description: 'Build a strong foundation in cyber security principles, threat analysis, and fundamental defensive strategies.',
    image: '/images/security.png',
    icon: Shield,
  },
  {
    id: 'vapt-remediation',
    title: 'VAPT Remediation',
    description: 'Learn Vulnerability Assessment and Penetration Testing (VAPT) techniques and how to patch critical vulnerabilities.',
    image: '/images/vapt.png',
    icon: Search,
  },
  {
    id: 'secure-devops',
    title: 'Secure DEVOPS',
    description: 'Integrate automated security checks, compliance operations, and threat modeling directly into your CI/CD pipelines.',
    image: '/images/secdevops.png',
    icon: Server,
  },
  {
    id: 'security-frameworks',
    title: 'Security Frameworks',
    description: 'Master industry-standard compliance and governance frameworks including ISO 27001, SOC 2, and NIST guidelines.',
    image: '/images/frame.png',
    icon: FileCheck,
  }
];

export default function SecurityCategoryPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* CATEGORY HERO */}
      <section className="relative min-h-[80vh] flex items-center pt-20 bg-[#0B1F3A]">
        <Image src="/images/security.png" alt="Cyber Security Training" fill priority className="object-cover object-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        
        {/* Back Button Overlay */}
        <div className="absolute top-24 lg:top-28 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-6">
            <Link
              href="/#training-categories"
              className="inline-flex items-center justify-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-md text-sm font-semibold hover:bg-white hover:text-red-700 transition-all shadow-sm group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to All Courses
            </Link>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white w-full mt-10 lg:mt-14">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
              Cyber Security Training
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 leading-relaxed">
              Protect systems, networks, and programs from digital attacks. Equip yourself with the critical skills needed to defend enterprise infrastructures against modern cyber threats.
            </p>
          </div>
        </div>
      </section>

      {/* AVAILABLE COURSES SECTION */}
      <section className="pt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityCourses.map((course) => <CourseCard key={course.id} course={course} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

/* Reusable Card Component */
function CourseCard({ course }: { course: any }) {
  const Icon = course.icon;
  return (
    <Link href={`/courses/${course.id}`} className="block group h-full">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
        {/* Card Image */}
        <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
          <Image src={course.image} alt={course.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-cover object-center transition-transform duration-700 group-hover:scale-105" />
        </div>

        {/* Card Content */}
        <div className="p-6 flex-grow flex flex-col text-center">
          <div className="mx-auto w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-[#0B1F3A] group-hover:scale-110 group-hover:text-red-700 group-hover:bg-red-50 transition-all duration-300">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#0B1F3A] mb-3 group-hover:text-red-700 transition-colors">{course.title}</h3>
          <p className="text-sm text-gray-600 flex-grow leading-relaxed mb-6">{course.description}</p>
          <div className="mt-auto w-full px-4 py-2.5 bg-gray-50 text-[#0B1F3A] font-bold text-sm rounded-lg group-hover:bg-red-700 group-hover:text-white transition-colors duration-300 uppercase tracking-wide flex items-center justify-center gap-2 border border-gray-100">
            View Details
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
