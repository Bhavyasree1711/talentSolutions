import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, GitBranch, Clock, Users, Award } from "lucide-react";

export default function ContinuousIntegrationDeploymentPage() {
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
              <h1 className="text-2xl font-bold text-[#0B1F3A]">Continuous Integration and Deployment</h1>
              <p className="text-gray-600">Master CI/CD pipelines and automated deployment</p>
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
                <GitBranch className="w-8 h-8" />
                <span className="text-blue-100 font-semibold">CI/CD Pipelines</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Continuous Integration & Deployment</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Master CI/CD pipelines, automated testing, and deployment strategies using AWS tools and industry-standard practices.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>50 Hours</span>
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
                alt="Continuous Integration and Deployment"
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
                This course covers continuous integration and deployment practices using AWS developer tools and industry-standard CI/CD platforms.
              </p>
              <p className="mb-4">
                You'll learn to build automated pipelines for code testing, building, and deployment using Jenkins, AWS CodePipeline, and other tools.
              </p>
              <p>
                Through practical projects, you'll implement end-to-end CI/CD solutions for cloud-native applications.
              </p>
            </div>

            <h4 className="text-2xl font-bold text-[#0B1F3A] mt-8 mb-4">What You'll Learn</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Continuous Integration & Continuous Delivery tools like Jenkins, SonarQube</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>CodeDeploy</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>CodeBuild</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>CodePipeline</span>
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
                  <span className="font-semibold">50 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Format:</span>
                  <span className="font-semibold">Online/In-Person</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Level:</span>
                  <span className="font-semibold">Advanced</span>
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
                <li>• Infrastructure Automation & Monitoring</li>
                <li>• AWS Security + CLI + DB</li>
                <li>• AWS Cloud course</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}