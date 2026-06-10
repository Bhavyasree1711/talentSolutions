import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  Clock,
  MonitorPlay,
  Award,
  Briefcase
} from "lucide-react";
import TrainingFAQSection from "@/components/TrainingFAQSection";

// ✅ COURSE DATA (add more courses here easily)
const coursesData: Record<string, any> = {
  "cloud-devops": {
    title: "Cloud & DevOps Training",
    category: "Cloud & DevOps",
    description: "Master CI/CD pipelines, Docker, Kubernetes and automation tools.",
    image: "/images/cloud.png",
    duration: "12 Weeks",
    format: "Live + Classroom",
    highlights: ["CI/CD pipelines", "Docker & Kubernetes", "Automation tools", "DevOps best practices"],
    projects: ["CI/CD Automation Pipeline", "Containerized Microservices"],
    certifications: ["AWS Certified DevOps Engineer", "Certified Kubernetes Administrator"],
    roles: ["DevOps Engineer", "Site Reliability Engineer (SRE)"],
    curriculum: [
      { title: "Module 1: DevOps Fundamentals", items: ["CI/CD Principles", "Git & Version Control"] },
      { title: "Module 2: Containerization", items: ["Docker Ecosystem", "Kubernetes Orchestration"] },
      { title: "Module 3: Automation", items: ["Jenkins Pipelines", "Terraform Basics"] }
    ]
  },
  "ai-data-science": {
    title: "AI & Data Science",
    category: "AI & Data Science",
    description: "Dive deep into Artificial Intelligence, Machine Learning algorithms, and advanced Data Analytics.",
    image: "/images/aipowerded.png",
    duration: "16 Weeks",
    format: "Live + Classroom",
    highlights: ["Python Programming", "Machine Learning", "Deep Learning", "Data Visualization"],
    projects: ["Predictive Analytics Model", "Image Recognition System"],
    certifications: ["Certified Data Scientist", "TensorFlow Developer Certificate"],
    roles: ["Data Scientist", "Machine Learning Engineer"],
    curriculum: [
      { title: "Module 1: Python & Math Basics", items: ["Python Data Structures", "Statistics for ML"] },
      { title: "Module 2: Machine Learning", items: ["Supervised Learning", "Unsupervised Learning"] },
      { title: "Module 3: Deep Learning", items: ["Neural Networks", "NLP Basics"] }
    ]
  },
  "cybersecurity": {
    title: "Cybersecurity",
    category: "Security",
    description: "Learn to protect networks, secure applications, and master ethical hacking fundamentals.",
    image: "/images/security.png",
    duration: "10 Weeks",
    format: "Live + Classroom",
    highlights: ["Ethical Hacking", "Network Security", "Application Security", "Penetration Testing"],
    projects: ["Vulnerability Assessment", "Secure Network Design"],
    certifications: ["CompTIA Security+", "Certified Ethical Hacker (CEH)"],
    roles: ["Security Analyst", "Penetration Tester"],
    curriculum: [
      { title: "Module 1: Security Fundamentals", items: ["Networking Basics", "Threat Landscapes"] },
      { title: "Module 2: Ethical Hacking", items: ["Reconnaissance", "Exploitation Techniques"] },
      { title: "Module 3: Defense", items: ["Firewalls", "Incident Response"] }
    ]
  },
  "datacenter": {
    title: "Datacenter",
    category: "Infrastructure",
    description: "Understand modern datacenter architecture, virtualization, and advanced server management.",
    image: "/images/security.png",
    duration: "8 Weeks",
    format: "Classroom",
    highlights: ["Server Hardware", "Virtualization", "Storage Area Networks (SAN)", "Disaster Recovery"],
    projects: ["Datacenter Migration Plan", "High-Availability Cluster Setup"],
    certifications: ["VMware Certified Professional", "Cisco CCNA Data Center"],
    roles: ["Datacenter Engineer", "Systems Administrator"],
    curriculum: [
      { title: "Module 1: Datacenter Basics", items: ["Power & Cooling", "Rack Management"] },
      { title: "Module 2: Virtualization", items: ["VMware vSphere", "Hyper-V"] },
      { title: "Module 3: Storage & Network", items: ["SAN/NAS", "Datacenter Switching"] }
    ]
  },
  "aws": {
    title: "AWS Training",
    category: "Cloud",
    description: "Master AWS cloud services, cloud architecture, and infrastructure security.",
    image: "/images/aws.png",
    duration: "8 Weeks",
    format: "Live + Classroom",
    highlights: ["EC2 & S3", "VPC & Networking", "IAM Security", "Serverless Computing"],
    projects: ["Scalable Web App Hosting", "Cloud Cost Optimization"],
    certifications: ["AWS Solutions Architect - Associate"],
    roles: ["Cloud Engineer", "AWS Architect"],
    curriculum: [
      { title: "Module 1: AWS Fundamentals", items: ["Global Infrastructure", "IAM"] },
      { title: "Module 2: Compute & Storage", items: ["EC2 & Auto Scaling", "S3 & EBS"] },
      { title: "Module 3: Networking", items: ["VPC Design", "Route 53"] }
    ]
  },
  "soft-skills": {
    title: "Soft Skill Trainings",
    category: "Professional Development",
    description: "Improve communication, leadership, teamwork, and critical interview skills for corporate success.",
    image: "/images/aipowerded.png",
    duration: "4 Weeks",
    format: "Live Interactive Sessions",
    highlights: ["Business Communication", "Leadership Traits", "Interview Preparation", "Team Collaboration"],
    projects: ["Mock Interviews", "Group Discussions"],
    certifications: ["DMX Soft Skills Certificate"],
    roles: ["Corporate Professional"],
    curriculum: [
      { title: "Module 1: Communication", items: ["Verbal & Non-Verbal", "Email Etiquette"] },
      { title: "Module 2: Interview Prep", items: ["Resume Building", "Mock HR Rounds"] },
      { title: "Module 3: Leadership", items: ["Conflict Resolution", "Time Management"] }
    ]
  }
};

export default function CourseDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const course = coursesData[params.slug];

  // ✅ HANDLE INVALID ROUTES
  if (!course) return notFound();

  // Exclude static routes from being handled dynamically
  if (['cloud-devops', 'ai-data-science', 'cybersecurity', 'datacenter', 'aws', 'soft-skills'].includes(params.slug) === false) {
    return notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">

      {/* 🔹 TOP NAV */}
      <div className="bg-white border-b py-4 px-6 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/courses"
            className="flex items-center text-sm font-bold text-gray-600 hover:text-red-500"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>
        </div>
      </div>

      {/* 🔹 HERO SECTION */}
      <section className="relative h-[50vh] flex items-center bg-[#0B1F3A]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <span className="bg-red-500 px-3 py-1 text-xs font-bold rounded">
            {course.category}
          </span>

          <h1 className="text-4xl font-bold mt-4 mb-4">
            {course.title}
          </h1>

          <p className="text-gray-200 max-w-xl">
            {course.description}
          </p>

          <Link
            href="/#contact"
            className="inline-block mt-6 bg-red-500 px-6 py-3 rounded font-bold hover:bg-red-600"
          >
            Enroll Now
          </Link>
        </div>
      </section>

      {/* 🔹 CONTENT */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-10">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-10">

            {/* WHAT YOU LEARN */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-2xl font-bold mb-4">
                What You'll Learn
              </h2>

              <div className="grid md:grid-cols-2 gap-3">
                {course.highlights.map((item: string, i: number) => (
                  <div key={i} className="flex gap-2">
                    <CheckCircle2 className="text-red-500 w-5 h-5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CURRICULUM */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Course Curriculum
              </h2>

              <div className="space-y-4">
                {course.curriculum.map((section: any, i: number) => (
                  <details
                    key={i}
                    className="bg-white p-4 rounded shadow group"
                  >
                    <summary className="cursor-pointer font-bold flex justify-between items-center text-[#0B1F3A]">
                      {section.title}
                      <ChevronDown className="group-open:rotate-180 transition-transform" />
                    </summary>

                    <ul className="mt-3 ml-5 list-disc text-gray-600">
                      {section.items.map((item: string, j: number) => (
                        <li key={j} className="mb-1">{item}</li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            </div>

            {/* PROJECTS */}
            {course.projects && (
               <div>
                  <h2 className="text-2xl font-bold mb-4">Real-Time Projects</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                     {course.projects.map((project: string, i: number) => (
                        <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 border-l-4 border-l-red-500">
                           <p className="font-bold text-gray-800">{project}</p>
                        </div>
                     ))}
                  </div>
               </div>
            )}

            {/* CERTIFICATIONS */}
            {course.certifications && (
               <div>
                  <h2 className="text-2xl font-bold mb-4">Certifications Covered</h2>
                  <div className="flex flex-wrap gap-3">
                     {course.certifications.map((cert: string, i: number) => (
                        <div key={i} className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full font-semibold border border-blue-200 flex items-center gap-2">
                           <Award className="w-4 h-4" />
                           {cert}
                        </div>
                     ))}
                  </div>
               </div>
            )}

          </div>

          {/* RIGHT SIDE */}
          <div>
            <div className="bg-white p-6 rounded-xl shadow sticky top-24">

              <h3 className="font-bold text-lg mb-4">
                Course Overview
              </h3>

              <div className="space-y-4">

                <div className="flex gap-3 items-center">
                  <Clock className="text-red-500" />
                  <div>
                    <p className="text-xs text-gray-500">Duration</p>
                    <p className="font-bold">{course.duration}</p>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <MonitorPlay className="text-red-500" />
                  <div>
                    <p className="text-xs text-gray-500">Format</p>
                    <p className="font-bold">{course.format}</p>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <Award className="text-red-500" />
                  <div>
                    <p className="text-xs text-gray-500">Certificate</p>
                    <p className="font-bold">Yes</p>
                  </div>
                </div>

                {course.roles && (
                   <div className="flex gap-3 items-center">
                     <Briefcase className="text-red-500" />
                     <div>
                       <p className="text-xs text-gray-500">Target Roles</p>
                       <p className="font-bold text-sm leading-tight">{course.roles.join(', ')}</p>
                     </div>
                   </div>
                )}

              </div>

              <Link
                href="/#contact"
                className="block text-center mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-bold transition-colors"
              >
                Request Syllabus
              </Link>

            </div>
          </div>

        </div>
      </section>

      {/* 🔹 BOTTOM COMPONENTS */}
      <TrainingFAQSection />
      
    </div>
  );
}