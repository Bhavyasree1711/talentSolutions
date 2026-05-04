"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AzureIoTPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const curriculum = [
    "Introduction to IoT & Azure IoT Services",
    "Azure IoT Hub & Device Communication",
    "Device Provisioning Service (DPS)",
    "IoT Edge & Edge Computing",
    "Stream Analytics & Real-time Data Processing",
    "Azure Functions & Event-driven Architecture",
    "Security in IoT Solutions",
    "Final Project: End-to-End IoT Solution Deployment"
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">

      {/* TOP BACK BAR */}
      <div className="bg-white border-b py-4">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/courses/cloud-devops"
            className="inline-flex items-center text-sm font-semibold text-[#0B1F3A] hover:text-red-700 transition"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Cloud Courses
          </Link>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">

          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">
              Azure IoT Training
            </h1>

            <p className="text-lg mb-6">
              Learn how to build scalable IoT solutions using Azure IoT Hub,
              edge computing, and real-time analytics.
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
              src="/images/azureiot.png"
              alt="Azure IoT Training"
              fill
              className="object-contain"
            />
          </div>

        </div>
      </section>

      {/* CURRICULUM */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">
            Azure IoT Curriculum
          </h2>

          <div className="space-y-4">
            {curriculum.map((item, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">

                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-4 bg-white font-semibold flex justify-between"
                >
                  {item}
                  <span>{openIndex === index ? "-" : "+"}</span>
                </button>

                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    Detailed explanation of {item}.
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