"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AwsIotPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const curriculum = [
    {
      title: "IoT Fundamentals & AWS IoT Core",
      topics: [
        "Introduction to IoT: Components & AWS Architecture",
        "AWS IoT Core: Message Broker & Device Gateway",
        "Understanding MQTT Protocol & Communication Patterns"
      ]
    },
    {
      title: "Device Management & Registry",
      topics: [
        "Registering Things & Managing Device Identities",
        "Device Shadows: Storing State for Offline Connectivity",
        "IoT Jobs: Remote Firmware Updates & Fleet Actions"
      ]
    },
    {
      title: "IoT Rules Engine & Action Integration",
      topics: [
        "Writing SQL-like IoT Rules for Data Routing",
        "Integrating with Lambda, S3, RDS, and DynamoDB",
        "Processing Stream Data with Kinesis & SNS/SQS"
      ]
    },
    {
      title: "IoT Security & Certificates",
      topics: [
        "X.509 Certificate Management & Activation",
        "IoT Policies: Fine-grained Access Control for Devices",
        "Device Defender: Monitoring & Audit for Security"
      ]
    },
    {
      title: "Edge Computing with AWS IoT Greengrass",
      topics: [
        "Introduction to Greengrass: Local Compute & ML",
        "Deploying Lambda Functions to the Edge",
        "Greengrass Stream Manager & Local Resource Access"
      ]
    },
    {
      title: "IoT Analytics & Visualizations",
      topics: [
        "Batch & Stream Processing with IoT Analytics",
        "Time Series Data Modeling & Data Store Management",
        "Visualizing Sensor Data with QuickSight"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20 relative">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">AWS IoT Training</h1>
            <p className="text-lg leading-relaxed mb-6">
              Connect, manage, and scale IoT devices securely using AWS IoT Core, edge services, and analytics. Learn to build and deploy IoT solutions with confidence.
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
              src="/images/aws-iot-blue.png"
              alt="AWS IoT Training"
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
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Cloud Courses
        </Link>
      </div>

      {/* CURRICULUM SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">AWS IoT Curriculum</h2>
          <p className="text-gray-600 mb-6">
            Learn the latest IoT skills through expert-led courses and projects.
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


