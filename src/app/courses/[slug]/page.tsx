import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  Clock,
  MonitorPlay,
  Award
} from "lucide-react";

// ✅ COURSE DATA (add more courses here easily)
const coursesData: Record<string, any> = {
  "aws-iaas": {
    title: "AWS IaaS Training",
    category: "Cloud & DevOps",
    description:
      "Learn AWS infrastructure services like EC2, S3, VPC, IAM with hands-on projects.",
    image: "/images/aws.png",
    duration: "4 Weeks",
    format: "Live + Classroom",

    highlights: [
      "EC2, S3, VPC hands-on training",
      "Deploy real-world cloud projects",
      "Learn IAM security best practices",
      "Industry-ready cloud skills"
    ],

    curriculum: [
      {
        title: "Module 1: AWS Basics",
        items: ["Cloud Concepts", "AWS Regions", "IAM"]
      },
      {
        title: "Module 2: Compute & Storage",
        items: ["EC2", "S3", "EBS"]
      },
      {
        title: "Module 3: Networking",
        items: ["VPC", "Subnets", "Security Groups"]
      }
    ]
  },

  "aws-devops": {
    title: "AWS DevOps Training",
    category: "Cloud & DevOps",
    description:
      "Master CI/CD pipelines, Docker, Kubernetes and automation tools.",
    image: "/images/aws-devops.png",
    duration: "6 Weeks",
    format: "Live + Classroom",

    highlights: [
      "CI/CD pipelines",
      "Docker & Kubernetes",
      "Automation tools",
      "DevOps best practices"
    ],

    curriculum: [
      {
        title: "Module 1: DevOps Basics",
        items: ["CI/CD", "Git"]
      },
      {
        title: "Module 2: Containers",
        items: ["Docker", "Kubernetes"]
      }
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
  if (['aws-iaas', 'aws-devops', 'aws-quicksight', 'aws-iot', 'microsoft-azure', 'azure-devops', 'azure-iot', 'power-bi'].includes(params.slug)) {
    return notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">

      {/* 🔹 TOP NAV */}
      <div className="bg-white border-b py-4 px-6 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/courses/cloud-devops"
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
                    className="bg-white p-4 rounded shadow"
                  >
                    <summary className="cursor-pointer font-bold flex justify-between">
                      {section.title}
                      <ChevronDown />
                    </summary>

                    <ul className="mt-3 ml-5 list-disc">
                      {section.items.map((item: string, j: number) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            </div>

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

              </div>

              <Link
                href="/#contact"
                className="block text-center mt-6 bg-blue-600 text-white py-3 rounded"
              >
                Request Syllabus
              </Link>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}