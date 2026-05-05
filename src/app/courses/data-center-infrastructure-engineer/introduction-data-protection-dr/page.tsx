import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Shield, Clock, Users, Award } from "lucide-react";

export default function IntroductionDataProtectionDRPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-600 hover:text-red-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to All Courses
            </Link>
            <div className="h-6 w-px bg-gray-300" />
            <div>
              <h1 className="text-2xl font-bold text-[#0B1F3A]">Introduction to Data Protection & DR</h1>
              <p className="text-gray-600">Data protection and disaster recovery fundamentals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-8 h-8" />
                <span className="text-red-100 font-semibold">Data Protection & DR</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Data Protection & Disaster Recovery</h2>
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Learn the basics of data protection strategies and disaster recovery planning for critical infrastructure.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>30 Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>Max 20 Students</span>
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
                alt="Data Protection & DR"
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
                <strong>Fellowship Stage: Data Protection concepts</strong>
              </p>
              <p className="mb-4">
                This introductory course covers the fundamentals of data protection strategies and disaster recovery planning.
              </p>
              <p className="mb-4">
                You'll learn about backup methodologies, recovery strategies, business continuity planning, and risk assessment for IT infrastructure.
              </p>
              <p>
                Understand how to develop comprehensive disaster recovery plans and implement data protection solutions to ensure business resilience.
              </p>
            </div>

            <h4 className="text-2xl font-bold text-[#0B1F3A] mt-8 mb-4">What You'll Learn</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Importance of Data Protection</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Data Protection approach, Types of Backups</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>DR concepts and design</span>
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
                  <span className="font-semibold">30 Hours</span>
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

            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h4 className="text-xl font-bold text-[#0B1F3A] mb-4">Prerequisites</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Basic IT knowledge</li>
                <li>• Understanding of data storage concepts</li>
                <li>• Familiarity with business operations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}