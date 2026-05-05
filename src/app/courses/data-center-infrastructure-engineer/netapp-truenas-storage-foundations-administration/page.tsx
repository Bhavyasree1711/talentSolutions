import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, HardDrive, Clock, Users, Award } from "lucide-react";

export default function NetappTruenasStoragePage() {
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
              <h1 className="text-2xl font-bold text-[#0B1F3A]">Netapp / TrueNAS Storage foundations and Administration</h1>
              <p className="text-gray-600">Enterprise storage systems training</p>
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
                <HardDrive className="w-8 h-8" />
                <span className="text-red-100 font-semibold">Storage Administration</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">NetApp & TrueNAS Storage Mastery</h2>
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Comprehensive training on NetApp and TrueNAS storage systems, covering foundations, setup, configuration, and administration.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>45 Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>Max 15 Students</span>
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
                alt="NetApp & TrueNAS Storage"
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
                <strong>Fellowship Stage: Netapp / TrueNAS Storage foundations</strong>
              </p>
              <p className="mb-4">
                This course provides comprehensive knowledge of enterprise storage systems, focusing on NetApp and TrueNAS platforms.
              </p>
              <p className="mb-4">
                You'll learn storage fundamentals, system architecture, configuration, administration, and best practices for managing enterprise storage environments.
              </p>
              <p>
                Through practical labs and real-world scenarios, you'll gain the skills needed to deploy and maintain robust storage solutions.
              </p>
            </div>

            <h4 className="text-2xl font-bold text-[#0B1F3A] mt-8 mb-4">What You'll Learn</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Overview of Netapp and TrueNAS Products</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Architecture overview</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>File and Storage Services (NFS, CIFS and Iscsi configuration)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Important CLI commands demo</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Concepts of Software Defined Storage and Snapshots</span>
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
                  <span className="font-semibold">45 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Format:</span>
                  <span className="font-semibold">Online/In-Person</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Level:</span>
                  <span className="font-semibold">Intermediate</span>
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
                <li>• Understanding of storage concepts</li>
                <li>• Familiarity with command line interfaces</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}