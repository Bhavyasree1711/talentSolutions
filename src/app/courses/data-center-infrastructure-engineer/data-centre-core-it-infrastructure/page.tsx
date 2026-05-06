import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Server, Clock, Users, Award } from "lucide-react";

export default function DataCentreCoreITInfrastructurePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link
          href="/courses\data-center-infrastructure-engineer"
          className="inline-flex items-center text-sm font-semibold text-white bg-red-700 px-4 py-2 rounded-lg hover:bg-red-800 transition shadow-md"
        >
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Data Center Courses
        </Link>
            <div className="h-6 w-px bg-gray-300" />
            <div>
              <h1 className="text-2xl font-bold text-[#0B1F3A]">Data Centre / Core IT Infrastructure</h1>
              <p className="text-gray-600">Comprehensive training on data center fundamentals</p>
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
                <Server className="w-8 h-8" />
                <span className="text-red-100 font-semibold">Data Center Infrastructure</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Master Data Center Fundamentals</h2>
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Learn the core principles of data center design, infrastructure components, and best practices for building resilient and efficient IT systems.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>40 Hours</span>
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
                alt="Data Center Infrastructure"
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
                <strong>Fellowship Stage: IT Infrastructure Foundations</strong>
              </p>
              <p className="mb-4">
                This comprehensive course covers the fundamental aspects of data center infrastructure, including design principles, hardware components, cooling systems, power management, and operational best practices.
              </p>
              <p className="mb-4">
                You'll learn about modern data center architectures, from traditional enterprise setups to cloud-scale facilities, and understand how to design systems that are reliable, scalable, and cost-effective.
              </p>
              <p>
                Through hands-on labs and real-world case studies, you'll gain the knowledge needed to plan, implement, and maintain critical IT infrastructure.
              </p>
            </div>

            <h4 className="text-2xl font-bold text-[#0B1F3A] mt-8 mb-4">What You'll Learn</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Overview of Datacenters, Servers (HW, Components, Form factor etc)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Basic computer system Architecture - Theory</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Software overview (classes of SW)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Server Bootup process</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>System Software components (Kernel, OS, Drivers, firmwares)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Server and Client model</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Server Clusters (RAIN), Load balancing, Failover concepts</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Introduction to File systems (FS concepts and architecture, NTFS, ReFS, Journaling, CD/ISO file)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Computer Networks - Core (OSI model, NW HW, Devices routers switches, FW etc)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>IP Address Assignment - Subnet, DNS, Gateway</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Storage Fundamentals (Block concepts, Disk layout, Fragmentation, Types of disks)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Storage topologies - SAN, NAS, Iscsi (Zoning, LUN masking, CIFS/NFS, SMB, Initiator/target)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Tape Library overview (Physical & Virtual)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Introduction to RAID (Raid types)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Introduction to Virtualization - VMware and Proxmox Overview</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Introduction to API's and REST API's</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Introduction to Cloud Infrastructure</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Overview of AWS and Azure Cloud</span>
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
                  <span className="font-semibold">40 Hours</span>
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
                <li>• Understanding of computer hardware</li>
                <li>• Familiarity with networking concepts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}