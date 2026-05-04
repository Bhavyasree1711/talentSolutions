"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CommunicationSkillsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const curriculum = [
    "Verbal Communication Techniques",
    "Written Communication Skills",
    "Active Listening",
    "Non-Verbal Communication",
    "Persuasive Communication",
    "Cross-Cultural Communication",
    "Capstone: Communication Workshop",
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20 relative">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">Communication Skills</h1>
            <p className="text-lg leading-relaxed mb-6">
              Master verbal and written communication techniques to express ideas clearly and persuasively in corporate settings. Learn to lead and inspire through effective dialogue.
            </p>
            <Link href="/#contact" className="px-6 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition shadow-lg">
              Enroll Now
            </Link>
          </div>
          <div className="md:w-1/2 relative h-64">
            <Image src="/images/hero-team.png" alt="Communication Skills" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* BACK BUTTON (OVERLAY) */}
      <div className="absolute top-4 left-4 z-20">
        <Link
          href="/courses/Softskills"
          className="inline-flex items-center text-sm font-semibold text-white bg-red-700 px-4 py-2 rounded-lg hover:bg-red-800 transition shadow-md"
        >
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Soft Skills Courses
        </Link>
      </div>

      {/* ✅ CURRICULUM */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">
            Communication Skills Curriculum
          </h2>

          <div className="space-y-4">
            {curriculum.map((item, i) => (
              <div key={i} className="border rounded-lg overflow-hidden">

                <button
                  onClick={() => toggle(i)}
                  className="w-full px-6 py-4 bg-white font-semibold flex justify-between items-center"
                >
                  {item}
                  <span>{openIndex === i ? "-" : "+"}</span>
                </button>

                {openIndex === i && (
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
