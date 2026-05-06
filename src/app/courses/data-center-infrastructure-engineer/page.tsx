import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Server, HardDrive, Monitor, Shield, Database, Cpu } from "lucide-react";

// ✅ Strong typing (better than any)
type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: any;
};

// ✅ COURSE DATA
const dataCenterCourses: Course[] = [
  {
    id: "data-centre-core-it-infrastructure",
    title: "Data Centre / Core IT Infrastructure",
    description: "Learn the fundamentals of data center design, core IT infrastructure components, and best practices for building resilient systems.",
    image: "/images/cloud.png",
    icon: Server,
  },
  {
    id: "windows-server-2019-linux-concepts",
    title: "Windows Server 2019 & Linux Concepts",
    description: "Master Windows Server 2019 administration and Linux operating system concepts for enterprise environments.",
    image: "/images/cloud.png",
    icon: Cpu,
  },
  {
    id: "netapp-truenas-storage-foundations-administration",
    title: "Netapp / TrueNAS Storage foundations and Administration",
    description: "Gain expertise in NetApp and TrueNAS storage systems, including setup, configuration, and administration.",
    image: "/images/cloud.png",
    icon: HardDrive,
  },
  {
    id: "enterprise-applications",
    title: "Enterprise Applications",
    description: "Explore enterprise application architecture, deployment, and management in data center environments.",
    image: "/images/cloud.png",
    icon: Database,
  },
  {
    id: "monitoring-infrastructure-overview",
    title: "Monitoring of Infrastructure Overview",
    description: "Understand infrastructure monitoring tools, techniques, and strategies for maintaining system health and performance.",
    image: "/images/cloud.png",
    icon: Monitor,
  },
  {
    id: "introduction-data-protection-dr",
    title: "Introduction to Data Protection & DR",
    description: "Learn the basics of data protection strategies and disaster recovery planning for critical infrastructure.",
    image: "/images/cloud.png",
    icon: Shield,
  },
  {
    id: "data-protection-data-recovery",
    title: "Data Protection and Data Recovery",
    description: "Deep dive into advanced data protection mechanisms, backup strategies, and data recovery procedures.",
    image: "/images/cloud.png",
    icon: Shield,
  },
];

export default function DataCenterInfrastructureEngineerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link
              href="/#training-categories"
              className="flex items-center gap-2 text-gray-600 hover:text-red-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Courses
            </Link>
            <div className="h-6 w-px bg-gray-300" />
            <div>
              <h1 className="text-2xl font-bold text-[#0B1F3A]">Data Center Infrastructure Engineer</h1>
              <p className="text-gray-600">Comprehensive training programs for infrastructure professionals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataCenterCourses.map((course, index) => (
            <Link
              key={course.id}
              href={`/courses/data-center-infrastructure-engineer/${course.id}`}
              className="block group"
            >
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-48 w-full bg-gray-100">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <course.icon className="w-6 h-6 text-red-700" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-3 group-hover:text-red-700 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {course.description}
                  </p>
                  <div className="flex items-center text-red-700 font-semibold text-sm">
                    Learn More
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}