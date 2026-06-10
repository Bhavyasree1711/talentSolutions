import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next';
import { 
  ArrowLeft, Terminal, Cloud, Shield, Cog, GitBranch, Container, Briefcase, ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: 'AWS Cloud Training | DMX Talent Solutions',
  description: 'Comprehensive AWS cloud and DevOps training program. Learn AWS core services, architecture, automation, and security.',
  keywords: 'AWS Cloud, DevOps, Linux, Docker, Kubernetes, CI/CD, Infrastructure Automation',
};

type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: any;
};

const awsCourses: Course[] = [
  {
    id: "linux-commands-and-scripting",
    title: "Linux Commands and Scripting",
    description: "Master Linux command line interface, scripting, system administration, and networking fundamentals.",
    image: "/images/aws-iaas-blue.png",
    icon: Terminal,
  },
  {
    id: "aws-cloud",
    title: "AWS Cloud",
    description: "Learn AWS core services, cloud architecture, and application deployment on AWS platform.",
    image: "/images/aws.png",
    icon: Cloud,
  },
  {
    id: "aws-security-cli-db",
    title: "AWS Security + CLI + DB",
    description: "Master AWS security, identity management, CLI automation, and database services.",
    image: "/images/secdevops.png",
    icon: Shield,
  },
  {
    id: "infrastructure-automation-monitoring",
    title: "Infrastructure Automation & Monitoring",
    description: "Learn infrastructure as code, automation tools, and comprehensive monitoring solutions.",
    image: "/images/aws-devops-blue.png",
    icon: Cog,
  },
  {
    id: "continuous-integration-and-deployment",
    title: "Continuous Integration and Deployment",
    description: "Master CI/CD pipelines, automated testing, and deployment strategies using AWS tools.",
    image: "/images/aws-devops-new.png",
    icon: GitBranch,
  },
  {
    id: "containerization-docker-kubernetes",
    title: "Containerization, Docker & Kubernetes",
    description: "Learn containerization, Docker, Kubernetes orchestration, and AWS container services.",
    image: "/images/cloud.png",
    icon: Container,
  },
  {
    id: "project-simulation",
    title: "Project Simulation",
    description: "Apply learned skills in real-world project simulation with ideation, implementation, and documentation.",
    image: "/images/aws-quicksight-blue.png",
    icon: Briefcase,
  },
];

function CourseCard({ course }: { course: Course }) {
  const Icon = course.icon;
  return (
    <Link
      href={`/courses/aws-cloud/${course.id}`}
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

export default function AWSCloudPage() {
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
              <Link href="/courses/data-center-infrastructure-engineer" className="text-gray-500 text-sm font-medium whitespace-nowrap px-2 hover:text-[#0B1F3A] shrink-0 transition-colors">Data Center Infrastructure Engineer</Link>
              <div className="bg-[#0B1F3A] text-white px-5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap flex items-center gap-2 shrink-0 shadow-sm cursor-default">
                <Cloud className="w-4 h-4" /> AWS Cloud
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-[#0B1F3A] py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-white/20 mb-6 bg-white/5 backdrop-blur-sm">
            <Cloud className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            AWS Cloud Training<br/>Programs
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Master the leading cloud platform. Learn AWS core services, cloud architecture, and application deployment to become an AWS certified professional.
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awsCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

    </div>
  );
}