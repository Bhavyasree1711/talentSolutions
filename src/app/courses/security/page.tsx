import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next';
import { 
  ArrowLeft, Shield, Search, Server, FileCheck,
  CheckCircle2, ChevronDown, Star, Quote, ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: 'Cyber Security Training & VAPT | DMX Talent Solutions',
  description: 'Protect systems, networks, and programs from digital attacks. Defend enterprise infrastructures against modern cyber threats with our security training.',
  keywords: 'Cyber Security Training, VAPT Training, Secure DevOps, Information Security, Security Frameworks, SOC 2, ISO 27001',
};

type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: any;
};

const securityCourses: Course[] = [
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

const faqs = [
  {
    question: "Do I need programming experience for Cyber Security courses?",
    answer: "For 'Cyber Security Basics' and 'Security Frameworks', no programming experience is required. For 'Secure DEVOPS' and 'VAPT', basic scripting (Python/Bash) and networking knowledge is highly recommended."
  },
  {
    question: "Do you teach offensive or defensive security?",
    answer: "We teach a balanced approach. Our VAPT course covers offensive penetration testing techniques, while Secure DEVOPS and Basics focus on defensive security posture and remediation."
  },
  {
    question: "Will I get hands-on experience with security tools?",
    answer: "Yes, you will work in isolated lab environments using industry-standard tools like Kali Linux, Metasploit, Wireshark, Burp Suite, and automated CI/CD security scanners."
  },
  {
    question: "Do these courses prepare me for certifications like CEH or CompTIA Security+?",
    answer: "Absolutely. Our curriculum is mapped to the objectives of major industry certifications including CompTIA Security+, CEH, and AWS Security Specialty."
  }
];

function CourseCard({ course }: { course: Course }) {
  const Icon = course.icon;
  return (
    <Link
      href={`/courses/${course.id}`}
      className="block group h-full"
    >
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
        {/* Image */}
        <div className="relative h-48 w-full bg-gray-100 shrink-0">
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Icon */}
          <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-[#0B1F3A]/5 text-[#0B1F3A]">
            <Icon className="w-5 h-5" />
          </div>

          <h3 className="text-xl font-bold text-[#0B1F3A] mb-3 group-hover:text-[#E63946] transition-colors">
            {course.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
            {course.description}
          </p>
        </div>
        
        {/* Button */}
        <div className="w-full py-3 text-white text-sm font-medium flex items-center justify-center transition-colors bg-[#E63946] group-hover:bg-[#D62828]">
          Explore <ArrowRight className="w-4 h-4 ml-2" />
        </div>
      </div>
    </Link>
  );
}

export default function SecurityCategoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Secondary Nav */}
      <div className="bg-white border-b border-gray-200 py-4 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
            <Link
              href="/courses"
              className="flex items-center gap-2 text-gray-600 hover:text-[#E63946] border border-gray-200 hover:border-[#E63946] rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap shrink-0 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Courses
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/courses/cloud-devops" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">Cloud & DevOps</Link>
              <Link href="/courses/ai" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">AI & Data Science</Link>
              <div className="bg-[#0B1F3A] text-white px-5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap flex items-center gap-2 shrink-0 shadow-sm cursor-default">
                <Shield className="w-4 h-4" /> Cyber Security
              </div>
              <Link href="/courses/Softskills" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">Soft Skills Training</Link>
              <Link href="/courses/data-center-infrastructure-engineer" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">Data Center Infrastructure Engineer</Link>
              <Link href="/courses/aws-cloud" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">AWS Cloud</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-[#0B1F3A] py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-white/20 mb-6 bg-white/5 backdrop-blur-sm">
            <Shield className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Advanced Cyber Security<br/>Training Programs
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Protect systems, networks, and data from digital attacks. Equip yourself with the critical skills needed to defend enterprise infrastructures against modern cyber threats.
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* What We Provide (Curriculum Highlights converted) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-4">What You Will Learn</h2>
            <p className="text-gray-600 text-lg">Our security curriculum bridges the gap between defensive strategies, proactive threat hunting, and automated compliance.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Threat Analysis & Defense",
              "Penetration Testing (VAPT)",
              "DevSecOps Integration",
              "Network Security",
              "Compliance & Governance",
              "Incident Response"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:border-red-200 hover:shadow-md transition-all">
                <CheckCircle2 className="w-6 h-6 text-red-600 shrink-0" />
                <span className="font-semibold text-[#0B1F3A] text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-4">Hear From Our Security Experts</h2>
            <p className="text-gray-600 text-lg">Join a network of elite cyber defenders.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "David C.", role: "Security Analyst", text: "The VAPT training was eye-opening. The labs replicate real-world enterprise environments, making the transition to a real SOC seamless." },
              { name: "Anita P.", role: "DevSecOps Engineer", text: "I highly recommend the Secure DEVOPS track. Learning to automate SAST/DAST scans in Jenkins directly impacted my team's delivery speed." },
              { name: "John R.", role: "Compliance Officer", text: "The Security Frameworks course perfectly demystified SOC 2 and ISO 27001 mapping for our engineering team." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative group hover:shadow-md transition-shadow">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-red-600/10 group-hover:text-red-600/20 transition-colors" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-red-600 text-red-600" />)}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-[#0B1F3A]">{t.name}</h4>
                  <span className="text-sm font-semibold text-red-600">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Got questions? We've got answers.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-gray-50 rounded-xl border border-gray-200 [&_summary::-webkit-details-marker]:hidden hover:border-gray-300 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-[#0B1F3A] text-lg">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 mt-2 mx-6">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
