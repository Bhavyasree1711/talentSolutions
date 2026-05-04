"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DataSciencePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const curriculum = [
    "Python for Data Analysis (NumPy, Pandas)",
    "Data Visualization (Matplotlib, Seaborn)",
    "Statistics & Probability",
    "Exploratory Data Analysis (EDA)",
    "Machine Learning Basics",
    "Feature Engineering",
    "Model Deployment Basics",
    "Capstone: Data Science Project",
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-white border-b py-4">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/courses/ai" className="inline-flex items-center text-sm font-semibold text-[#0B1F3A] hover:text-red-700">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to AI & Data
          </Link>
        </div>
      </div>

      <section className="bg-gradient-to-r from-indigo-700 to-blue-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">Data Science Training</h1>
            <p className="text-lg mb-6">
              Learn data analysis, visualization, statistics, and machine learning for real-world insights.
            </p>
            <Link href="/contact" className="px-6 py-3 bg-red-700 rounded-lg font-semibold hover:bg-red-800">
              Enroll Now
            </Link>
          </div>
          <div className="md:w-1/2 relative h-64">
            <Image src="/images/data.jpg" alt="Data Science" fill className="object-contain" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">Data Science Curriculum</h2>
          <div className="space-y-4">
            {curriculum.map((item, i) => (
              <div key={i} className="border rounded-lg overflow-hidden">
                <button onClick={() => toggle(i)} className="w-full px-6 py-4 bg-white font-semibold flex justify-between">
                  {item}
                  <span>{openIndex === i ? "-" : "+"}</span>
                </button>
                {openIndex === i && <div className="px-6 py-4 bg-gray-50">Detailed information about {item}.</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}