import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next';
import { 
  ArrowLeft, Server, HardDrive, Monitor, Shield, Database, Cpu, ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: 'Data Center Infrastructure Engineer | DMX Talent Solutions',
  description: 'Master data center infrastructure, server management, storage technologies, and data protection strategies.',
  keywords: 'Data Center Training, Core IT Infrastructure, Server Administration, Storage Administration, System Monitoring, Disaster Recovery',
};

type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: any;
};

const dataCenterCourses: Course[] = [
  {
    id: "data-centre-core-it-infrastructure",
    title: "Data Centre / Core IT Infrastructure",
    description: "Learn the fundamentals of data center design, core IT infrastructure components, and best practices for building resilient systems.",
    image: "/images/dataceneter.png",
    icon: Server,
  },
  {
    id: "windows-server-2019-linux-concepts",
    title: "Windows Server 2019 & Linux Concepts",
    description: "Master Windows Server 2019 administration and Linux operating system concepts for enterprise environments.",
    image: "/images/microsoft-azure-blue.png",
    icon: Cpu,
  },
  {
    id: "netapp-truenas-storage-foundations-administration",
    title: "Netapp / TrueNAS Storage foundations and Administration",
    description: "Gain expertise in NetApp and TrueNAS storage systems, including setup, configuration, and administration.",
    image: "/images/dataware.png",
    icon: HardDrive,
  },
  {
    id: "enterprise-applications",
    title: "Enterprise Applications",
    description: "Explore enterprise application architecture, deployment, and management in data center environments.",
    image: "/images/qualityapp.png",
    icon: Database,
  },
  {
    id: "monitoring-infrastructure-overview",
    title: "Monitoring of Infrastructure Overview",
    description: "Understand infrastructure monitoring tools, techniques, and strategies for maintaining system health and performance.",
    image: "/images/iaas.png",
    icon: Monitor,
  },
  {
    id: "introduction-data-protection-dr",
    title: "Introduction to Data Protection & DR",
    description: "Learn the basics of data protection strategies and disaster recovery planning for critical infrastructure.",
    image: "/images/security.png",
    icon: Shield,
  },
  {
    id: "data-protection-data-recovery",
    title: "Data Protection and Data Recovery",
    description: "Deep dive into advanced data protection mechanisms, backup strategies, and data recovery procedures.",
    image: "/images/cybersecurity.png",
    icon: Shield,
  },
];

function CourseCard({ course }: { course: Course }) {
  const Icon = course.icon;
  return (
    <Link
      href={`/courses/data-center-infrastructure-engineer/${course.id}`}
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

export default function DataCenterInfrastructureEngineerPage() {
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
              <Link href="/courses/security" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">Cyber Security</Link>
              <Link href="/courses/Softskills" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">Soft Skills Training</Link>
              <div className="bg-[#0B1F3A] text-white px-5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap flex items-center gap-2 shrink-0 shadow-sm cursor-default">
                <Server className="w-4 h-4" /> Data Center Infrastructure Engineer
              </div>
              <Link href="/courses/aws-cloud" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">AWS Cloud</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-[#0B1F3A] py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-white/20 mb-6 bg-white/5 backdrop-blur-sm">
            <Server className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Data Center Infrastructure<br/>Engineer Programs
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Master data center infrastructure, server management, storage technologies, and data protection strategies to build and maintain resilient enterprise systems.
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataCenterCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

    </div>
  );
}