"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PowerBIPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const curriculum = [
    "Introduction to Power BI & Data Analytics",
    "Power BI Desktop & Data Loading",
    "Data Transformation with Power Query",
    "Data Modeling & Relationships",
    "DAX (Data Analysis Expressions)",
    "Interactive Dashboards & Reports",
    "Power BI Service & Sharing Reports",
    "Final Project: Business Dashboard"
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
      <section className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">

          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">
              Power BI Training
            </h1>

            <p className="text-lg mb-6">
              Transform raw data into powerful insights using Microsoft Power BI,
              dashboards, and advanced analytics.
            </p>

            <Link
              href="/contact"
              className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Enroll Now
            </Link>
          </div>

          <div className="md:w-1/2 relative h-64">
            <Image
              src="/images/powerbi.png"
              alt="Power BI Training"
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
            Power BI Curriculum
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