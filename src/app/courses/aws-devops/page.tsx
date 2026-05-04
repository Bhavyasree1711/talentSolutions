"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AwsDevOpsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const curriculum = [
    "Introduction to DevOps",
    "Setting Up DevOps Environment",
    "Version Control & Collaboration",
    "Continuous Integration (CI) & Automation",
    "Continuous Deployment (CD) & Containerization",
    "Infrastructure as Code (IaC) with Terraform",
    "Monitoring, Logging & Security",
    "Final Capstone Project: End-to-End DevOps Pipeline",
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">AWS DevOps Training</h1>
            <p className="text-lg leading-relaxed mb-6">
              Master CI/CD pipelines, automation, and infrastructure as code using AWS native developer tools. Learn modern DevOps practices to streamline your development and deployment processes.
            </p>
            <Link
              href="/contact"
              className="px-6 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition"
            >
              Enroll Now
            </Link>
          </div>
          <div className="md:w-1/2 relative h-64">
            <Image
              src="/images/aws-devops.png"
              alt="AWS DevOps Training"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* BACK BUTTON */}
      <div className="absolute top-4 left-4">
        <Link
          href="/courses/cloud-devops"
          className="inline-flex items-center text-sm font-semibold text-white bg-red-700 px-4 py-2 rounded-lg hover:bg-red-800 transition"
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
          Back to All Courses
        </Link>
      </div>

      {/* BACK BUTTON */}
      <div className="bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/courses/cloud-devops"
            className="inline-flex items-center text-sm font-semibold text-[#0B1F3A] hover:text-red-700 transition"
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
      </div>

      {/* CURRICULUM SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">AWS DevOps Curriculum</h2>
          <p className="text-gray-600 mb-6">
            Learn the latest DevOps skills through expert-led courses and projects.
          </p>
          <div className="space-y-4">
            {curriculum.map((item, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-4 bg-white text-[#0B1F3A] font-semibold hover:bg-gray-100 focus:outline-none flex justify-between items-center"
                >
                  {item}
                  <span className="ml-2">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50 text-gray-700">
                    Detailed information about {item}.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}