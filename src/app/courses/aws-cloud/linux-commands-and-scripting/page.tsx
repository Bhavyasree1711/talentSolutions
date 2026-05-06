import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Terminal, Clock, Users, Award } from "lucide-react";

export default function LinuxCommandsAndScriptingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link
              href="/courses/aws-cloud"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to AWS Cloud Courses
            </Link>
            <div className="h-6 w-px bg-gray-300" />
            <div>
              <h1 className="text-2xl font-bold text-[#0B1F3A]">Linux Commands and Scripting</h1>
              <p className="text-gray-600">Master Linux CLI, scripting, and system administration</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-8 h-8" />
                <span className="text-blue-100 font-semibold">Linux Fundamentals</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Master Linux Commands and Scripting</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Comprehensive training on Linux command line interface, scripting, system administration, and networking fundamentals essential for cloud and DevOps roles.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>60 Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>Max 25 Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span>Certificate Included</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/cloud.png"
                alt="Linux Commands and Scripting"
                width={500}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Overview */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-[#0B1F3A] mb-6">Course Overview</h3>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                This foundational course provides comprehensive knowledge of Linux operating system, command line interface, scripting, and system administration.
              </p>
              <p className="mb-4">
                You'll learn essential Linux skills required for cloud computing, DevOps, and infrastructure management roles.
              </p>
              <p>
                Through hands-on labs and practical exercises, you'll gain proficiency in Linux administration and troubleshooting.
              </p>
            </div>

            <h4 className="text-2xl font-bold text-[#0B1F3A] mt-8 mb-4">What You'll Learn</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Comfortable with using Command Line Interface (CLI)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Understanding Core Programming Constructs - Statements and Language Basics, Execution Threads and Best Coding Practices</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Usage of Common GIT Flows - using CLI to work with a Remote Repo along with best practices</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Linux basic administration commands, troubleshooting, configuration</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Linux filesystem, process management, user management, memory management</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>System process troubleshooting and Monitoring</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Resource usage analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Apache/Nginx installation and configuration</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Networking fundamentals, Network components, Sub Networking</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>TCP/UDP protocols, OSI model, CIDR</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Q&A and Review workshop on problems given to ensure the skills learned are being applied</span>
              </li>
            </ul>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h4 className="text-xl font-bold text-[#0B1F3A] mb-4">Course Details</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold">60 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Format:</span>
                  <span className="font-semibold">Online/In-Person</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Level:</span>
                  <span className="font-semibold">Beginner to Intermediate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Language:</span>
                  <span className="font-semibold">English</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="text-xl font-bold text-[#0B1F3A] mb-4">Prerequisites</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Basic computer knowledge</li>
                <li>• Understanding of operating systems</li>
                <li>• Familiarity with programming concepts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}