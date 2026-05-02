'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const courseCategories = [
  {
    name: 'Cloud & DevOps',
    icon: '☁️',
    courses: ['AWS IaaS', 'AWS DevOps', 'AWS QuickSight', 'AWS IoT', 'Azure Training', 'Azure DevOps', 'Azure IoT', 'Power BI']
  },
  {
    name: 'AI & Data',
    icon: '🤖',
    courses: ['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Data Warehouse', 'Python for AI', 'Deep Learning', 'Natural Language Processing', 'Big Data']
  },
  {
    name: 'Security',
    icon: '🔒',
    courses: ['Cyber Security Basics', 'VAPT Remediation', 'Secure DevOps', 'Security Frameworks', 'Ethical Hacking', 'Cloud Security', 'Compliance & Governance', 'Threat Intelligence']
  },
  {
    name: 'Soft Skills',
    icon: '💼',
    courses: ['Communication Skills', 'Presentation Skills', 'Interview Skills', 'Teaming Skills', 'Leadership', 'Project Management', 'Problem Solving', 'Time Management']
  },
];

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-red-50 rounded-full -translate-x-1/2 opacity-40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-1" style={{ backgroundColor: '#E63946' }} />
            <span className="text-sm font-bold text-red-700 uppercase tracking-widest">COURSES</span>
            <div className="w-12 h-1" style={{ backgroundColor: '#E63946' }} />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: 'var(--font-outfit)', color: '#0B1F3A' }}>
            Explore Our Training<br />Program
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive courses across Cloud, AI, Security, and Soft Skills
          </p>
        </ScrollReveal>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {courseCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 uppercase tracking-wide ${
                activeTab === index
                  ? 'text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={activeTab === index ? { backgroundColor: '#E63946' } : {}}
            >
              <span className="text-lg">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Active category courses grid */}
        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseCategories[activeTab].courses.map((course, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border-2 border-gray-100 hover:border-red-300 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="text-sm font-bold text-red-700 mb-2 uppercase tracking-widest group-hover:scale-105 transition-transform">
                  {course}
                </div>
                <p className="text-xs text-gray-500">{courseCategories[activeTab].name}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 text-xs text-red-700 font-bold hover:text-red-800 transition-colors"
                >
                  Enroll
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Additional benefits section */}
        <div className="mt-16 bg-gradient-to-r from-red-50 to-blue-50 rounded-2xl p-10 border border-red-100">
          <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#0B1F3A' }}>
            What You Will Get
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: '🎯', label: 'Target-oriented Attention' },
              { icon: '🧠', label: 'Skill & Mindset Development' },
              { icon: '💻', label: 'Live Project Experience' },
              { icon: '💰', label: 'Affordable Fees' },
              { icon: '🗺️', label: 'Career Guidance' },
              { icon: '🏆', label: 'Competitive Learning' },
            ].map((item, i) => (
              <div key={i} className="text-center group cursor-pointer">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <p className="text-xs font-medium text-gray-700 leading-tight">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
