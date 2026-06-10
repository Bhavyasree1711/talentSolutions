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

<<<<<<< HEAD
=======
// ✅ COURSE DATA
>>>>>>> 0f440f691ae7ed149e7d5cfa6ae667482408a022
const dataCenterCourses: Course[] = [
  {
    id: "data-centre-core-it-infrastructure",
    title: "Data Centre / Core IT Infrastructure",
    description: "Learn the fundamentals of data center design, core IT infrastructure components, and best practices for building resilient systems.",
<<<<<<< HEAD
    image: "/images/dataceneter.png",
=======
    image: "/images/cloud.png",
>>>>>>> 0f440f691ae7ed149e7d5cfa6ae667482408a022
    icon: Server,
  },
  {
    id: "windows-server-2019-linux-concepts",
    title: "Windows Server 2019 & Linux Concepts",
    description: "Master Windows Server 2019 administration and Linux operating system concepts for enterprise environments.",
<<<<<<< HEAD
    image: "/images/microsoft-azure-blue.png",
=======
    image: "/images/cloud.png",
>>>>>>> 0f440f691ae7ed149e7d5cfa6ae667482408a022
    icon: Cpu,
  },
  {
    id: "netapp-truenas-storage-foundations-administration",
    title: "Netapp / TrueNAS Storage foundations and Administration",
    description: "Gain expertise in NetApp and TrueNAS storage systems, including setup, configuration, and administration.",
<<<<<<< HEAD
    image: "/images/dataware.png",
=======
    image: "/images/cloud.png",
>>>>>>> 0f440f691ae7ed149e7d5cfa6ae667482408a022
    icon: HardDrive,
  },
  {
    id: "enterprise-applications",
    title: "Enterprise Applications",
    description: "Explore enterprise application architecture, deployment, and management in data center environments.",
<<<<<<< HEAD
    image: "/images/qualityapp.png",
=======
    image: "/images/cloud.png",
>>>>>>> 0f440f691ae7ed149e7d5cfa6ae667482408a022
    icon: Database,
  },
  {
    id: "monitoring-infrastructure-overview",
    title: "Monitoring of Infrastructure Overview",
    description: "Understand infrastructure monitoring tools, techniques, and strategies for maintaining system health and performance.",
<<<<<<< HEAD
    image: "/images/iaas.png",
=======
    image: "/images/cloud.png",
>>>>>>> 0f440f691ae7ed149e7d5cfa6ae667482408a022
    icon: Monitor,
  },
  {
    id: "introduction-data-protection-dr",
    title: "Introduction to Data Protection & DR",
    description: "Learn the basics of data protection strategies and disaster recovery planning for critical infrastructure.",
<<<<<<< HEAD
    image: "/images/security.png",
=======
    image: "/images/cloud.png",
>>>>>>> 0f440f691ae7ed149e7d5cfa6ae667482408a022
    icon: Shield,
  },
  {
    id: "data-protection-data-recovery",
    title: "Data Protection and Data Recovery",
    description: "Deep dive into advanced data protection mechanisms, backup strategies, and data recovery procedures.",
<<<<<<< HEAD
    image: "/images/cybersecurity.png",
=======
    image: "/images/cloud.png",
>>>>>>> 0f440f691ae7ed149e7d5cfa6ae667482408a022
    icon: Shield,
  },
];

<<<<<<< HEAD
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
=======
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
>>>>>>> 0f440f691ae7ed149e7d5cfa6ae667482408a022
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
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

=======
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
>>>>>>> 0f440f691ae7ed149e7d5cfa6ae667482408a022
    </div>
  );
}