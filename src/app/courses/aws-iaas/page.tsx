"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Cloud } from 'lucide-react';

export default function AwsIaasPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const curriculum = [
    {
      title: "Cloud Fundamentals & AWS Global Infrastructure",
      topics: [
        "Introduction to Cloud Computing & AWS Overview",
        "AWS Regions, Availability Zones, and Edge Locations",
        "AWS Shared Responsibility Model & Compliance"
      ]
    },
    {
      title: "Compute Services: EC2 Deep Dive",
      topics: [
        "Launching & Configuring EC2 Instances",
        "EBS (Elastic Block Store) & Instance Store Optimization",
        "Security Groups, Key Pairs & AMI Management"
      ]
    },
    {
      title: "Networking: Virtual Private Cloud (VPC)",
      topics: [
        "VPC Architecture: Subnets, IGW & Route Tables",
        "NAT Gateways & Bastion Host Configuration",
        "VPC Peering & Endpoint Services"
      ]
    },
    {
      title: "Storage Solutions: S3, EFS & Glacier",
      topics: [
        "S3 Bucket Policies, Versioning & Lifecycle Rules",
        "EFS Performance & Multi-AZ Connectivity",
        "Glacier Deep Archive & Retrieval Strategies"
      ]
    },
    {
      title: "High Availability & Load Balancing",
      topics: [
        "Application (ALB) & Network Load Balancer (NLB)",
        "Auto Scaling Group (ASG) Policies & Dynamic Scaling",
        "Health Checks & Target Group Management"
      ]
    },
    {
      title: "Identity & Access Management (IAM)",
      topics: [
        "Users, Groups, Roles & Custom IAM Policies",
        "Multi-Factor Authentication (MFA) & Root Account Security",
        "AWS STS & Federated Access Overview"
      ]
    },
    {
      title: "Monitoring, Governance & Logging",
      topics: [
        "CloudWatch Dashboards, Logs & Alarms",
        "AWS CloudTrail for API Auditing & Compliance",
        "AWS Config & Trusted Advisor Insights"
      ]
    },
    {
      title: "Enterprise AWS Strategy",
      topics: [
        "AWS Organizations & Service Control Policies (SCPs)",
        "Multi-Account Governance & Landing Zone Concepts",
        "Advanced Cost Management & Savings Plans"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20 relative">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">AWS IaaS Training</h1>
            <p className="text-lg leading-relaxed mb-6">
              Master the fundamentals of Amazon Web Services Infrastructure as a Service, including EC2, S3, VPC networking, and IAM security. Gain hands-on experience to design scalable and secure cloud solutions.
            </p>
            <Link
              href="/#contact"
              className="px-6 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition shadow-lg"
            >
              Enroll Now
            </Link>
          </div>
          <div className="md:w-1/2 relative h-72 lg:h-[400px] w-full mt-12 md:mt-0 lg:ml-10 rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform hover:scale-105 transition duration-500">
            <Image
              src="/images/aws-iaas-blue.png"
              alt="AWS IaaS Training"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* BACK BUTTON (OVERLAY) */}
      <div className="absolute top-4 left-4 z-20">
        <Link
          href="/courses/cloud-devops"
          className="inline-flex items-center text-sm font-semibold text-white bg-red-700 px-4 py-2 rounded-lg hover:bg-red-800 transition shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 mr-2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Cloud Courses
        </Link>
      </div>

      {/* CURRICULUM SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">AWS IaaS Curriculum</h2>
          <p className="text-gray-600 mb-6">
            Learn the latest AWS IaaS skills through expert-led courses and projects.
          </p>
          <div className="space-y-4">
            {curriculum.map((item, index) => (
              <div key={index} className="border rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
                {/* HEADER */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-4 bg-white text-[#0B1F3A] font-bold hover:bg-gray-50 flex justify-between items-center transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </span>
                    {item.title}
                  </span>
                  <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {/* CONTENT */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 py-5 bg-gray-50 border-t border-gray-100">
                    <ul className="space-y-3">
                      {item.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-3 text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


