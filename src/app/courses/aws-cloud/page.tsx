import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Terminal, Cloud, Shield, Cog, GitBranch, Container, Briefcase } from "lucide-react";

// ✅ Strong typing (better than any)
type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: any;
};

// ✅ COURSE DATA
const awsCourses: Course[] = [
  {
    id: "linux-commands-and-scripting",
    title: "Linux Commands and Scripting",
    description: "Master Linux command line interface, scripting, system administration, and networking fundamentals.",
    image: "/images/cloud.png",
    icon: Terminal,
  },
  {
    id: "aws-cloud",
    title: "AWS Cloud",
    description: "Learn AWS core services, cloud architecture, and application deployment on AWS platform.",
    image: "/images/cloud.png",
    icon: Cloud,
  },
  {
    id: "aws-security-cli-db",
    title: "AWS Security + CLI + DB",
    description: "Master AWS security, identity management, CLI automation, and database services.",
    image: "/images/cloud.png",
    icon: Shield,
  },
  {
    id: "infrastructure-automation-monitoring",
    title: "Infrastructure Automation & Monitoring",
    description: "Learn infrastructure as code, automation tools, and comprehensive monitoring solutions.",
    image: "/images/cloud.png",
    icon: Cog,
  },
  {
    id: "continuous-integration-and-deployment",
    title: "Continuous Integration and Deployment",
    description: "Master CI/CD pipelines, automated testing, and deployment strategies using AWS tools.",
    image: "/images/cloud.png",
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
    image: "/images/cloud.png",
    icon: Briefcase,
  },
];

export default function AWSCloudPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <a
              href="/#training-categories"
              className="flex items-center gap-2 text-gray-600 hover:text-red-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Courses
            </a>
            <div className="h-6 w-px bg-gray-300" />
            <div>
              <h1 className="text-2xl font-bold text-[#0B1F3A]">AWS Cloud</h1>
              <p className="text-gray-600">Comprehensive AWS cloud and DevOps training program</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awsCourses.map((course, index) => (
            <Link
              key={course.id}
              href={`/courses/aws-cloud/${course.id}`}
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
                    <course.icon className="w-6 h-6 text-blue-700" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-3 group-hover:text-blue-700 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {course.description}
                  </p>
                  <div className="flex items-center text-blue-700 font-semibold text-sm">
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