"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MicrosoftAzurePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const curriculum = [
    "Introduction to Microsoft Azure & Cloud Computing",
    "Azure Virtual Machines & Compute Services",
    "Azure Networking (VNets, Load Balancers, App Gateway)",
    "Azure Storage Solutions (Blob, File, Table, Queue)",
    "Identity & Access Management (Azure AD / Entra ID)",
    "Azure Databases (SQL Database, Cosmos DB)",
    "Monitoring, Governance & Security (Azure Monitor, Policy)",
    "Final Capstone Project: Deploying an Enterprise Architecture",
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20 relative">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">Microsoft Azure Training</h1>
            <p className="text-lg leading-relaxed mb-6">
              Comprehensive training on Azure cloud services, virtual machines, networking, and enterprise cloud architecture. Gain hands-on experience to design scalable and secure cloud solutions.
            </p>
            <Link href="/contact" className="px-6 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition shadow-lg">
              Enroll Now
            </Link>
          </div>
          <div className="md:w-1/2 relative h-64">
            <Image src="/images/azure2.png" alt="Microsoft Azure Training" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* BACK BUTTON (OVERLAY) */}
      <div className="absolute top-4 left-4 z-20">
        <Link
          href="/courses/cloud-devops"
          className="inline-flex items-center text-sm font-semibold text-white bg-red-700 px-4 py-2 rounded-lg hover:bg-red-800 transition shadow-md"
        >
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Cloud Courses
        </Link>
      </div>

      {/* ✅ CURRICULUM SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">
            Microsoft Azure Curriculum
          </h2>

          <p className="text-gray-600 mb-6">
            Learn the latest Microsoft Azure skills through expert-led courses and projects.
          </p>

          <div className="space-y-4">
            {curriculum.map((item, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">

                {/* ACCORDION HEADER */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-4 bg-white text-[#0B1F3A] font-semibold hover:bg-gray-100 flex justify-between items-center"
                >
                  {item}
                  <span>
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>

                {/* ACCORDION CONTENT */}
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