"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function InterviewSkillsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const curriculum = [
    {
      title: "Interview Preparation & Research",
      topics: [
        "Self-assessment: Identifying Your Core Strengths, Skills & Value Proposition",
        "SWOT Analysis for Job Seekers: Turning Weaknesses into Growth Stories",
        "Researching the Company: Culture, Products, Financials & Recent News",
        "Decoding Job Descriptions: Identifying Keywords & Hidden Requirements",
        "Leveraging LinkedIn: Building Profile, Networking & Informational Interviews",
        "Preparing Your Professional Documents: Resume, Cover Letter & Portfolio",
        "Understanding Interview Formats: Phone Screen, Video, Panel & In-person",
        "Activity: Creating a Personalized Interview Preparation Checklist"
      ]
    },
    {
      title: "Behavioral Interviews & STAR Method",
      topics: [
        "Why Behavioral Interviews: How Past Performance Predicts Future Success",
        "STAR Framework: Situation, Task, Action & Result",
        "STAR+ Extension: Adding Learning & Impact to Every Answer",
        "Building a Story Bank: Tales of Leadership, Teamwork, Failure & Conflict",
        "Aligning Stories to Company Values (e.g., Amazon Leadership Principles)",
        "Handling Hypothetical 'What-If' Scenarios with Logical Frameworks",
        "Common Behavioral Questions: Top 20 Questions with Answer Strategies",
        "Activity: Building a Personal STAR Story Bank with 10 Ready-to-Use Stories"
      ]
    },
    {
      title: "Handling Difficult Interview Questions",
      topics: [
        "Tell Me About Yourself: Crafting a 2-minute Professional Narrative",
        "The Weakness Question: Demonstrating Self-awareness & Growth Mindset",
        "Why Should We Hire You: Building a Compelling Value Proposition",
        "Addressing Career Gaps, Job Hopping & Industry Pivots with Confidence",
        "The Failure Question: Extracting Learning Value from Mistakes",
        "Salary Expectation Questions: Strategies for Deflecting & Negotiating",
        "Why Are You Leaving: Answering without Negativity about Previous Employers",
        "Activity: Rapid-fire Difficult Question Practice with Peer Feedback"
      ]
    },
    {
      title: "Body Language & Interview Presence",
      topics: [
        "First Impressions: Dress Code, Greeting & Initial 30 Seconds",
        "Body Language Mastery: Posture, Handshake, Eye Contact & Gestures",
        "Voice Control: Pitch, Pace, Enthusiasm & Avoiding Vocal Fillers",
        "Active Listening in Interviews: Picking Up on Interviewer Cues",
        "Asking Powerful Questions: Demonstrating Research & Business Acumen",
        "Managing Interview Anxiety: Breathing Techniques & Cognitive Reframing",
        "Virtual Interview Presence: Camera Setup, Lighting, Background & Eye-line",
        "Activity: Mock Video Interview with Body Language & Presence Scoring"
      ]
    },
    {
      title: "Technical, Case & Panel Interviews",
      topics: [
        "Technical Interview Prep: Data Structures, Algorithms & Problem-solving",
        "Whiteboard Interviews: Communicating Your Thought Process Clearly",
        "Case Interview Frameworks: Profitability, Market Entry & Operations",
        "Panel Interview Dynamics: Addressing Multiple Interviewers Strategically",
        "Group Discussion Interviews: Standing Out While Being a Team Player",
        "Take-home Assignments: Time Management & Quality vs Speed",
        "Assessment Centers: Psychometric Tests, Group Exercises & Presentations",
        "Activity: Live Case Study Presentation with Panel Feedback"
      ]
    },
    {
      title: "Mock Interviews & Feedback",
      topics: [
        "Mock Interview Round 1: Behavioral Questions with Video Recording",
        "Mock Interview Round 2: Technical/Role-specific Questions",
        "Self-review: Analyzing Your Own Body Language & Verbal Fillers",
        "Peer Review Workshop: Observing & Critiquing Diverse Interview Styles",
        "Professional Feedback: Identifying Blind Spots in Communication & Logic",
        "Rapid-fire Question Rounds: Building Agility Under Pressure",
        "Iterative Improvement: Tracking Progress Across Multiple Rounds",
        "Activity: Full 30-minute Mock Interview Simulation with Expert Debrief"
      ]
    },
    {
      title: "Negotiation, Offers & Follow-up",
      topics: [
        "Writing Strategic Thank-you Emails: Reinforcing Value Post-interview",
        "Salary Negotiation: Researching Benchmarks & Building Your Case",
        "Evaluating Total Compensation: Base, Bonus, Equity, Benefits & Growth",
        "Navigating Multiple Offers: Professional Etiquette for Accepting & Declining",
        "Counter-offer Strategies: When & How to Ask for More",
        "The First 90 Days: Setting Expectations for a Strong Start",
        "Building Long-term Relationships with Recruiters & Interviewers",
        "Activity: Salary Negotiation Role-play with Real Offer Scenarios"
      ]
    },
    {
      title: "Capstone: Full Interview Simulation",
      topics: [
        "Full-cycle Simulation: Phone Screen → Technical → Behavioral → Final Panel",
        "Scorecard Analysis: Detailed Breakdown of Verbal, Technical & Behavioral Skills",
        "Personal Branding: Aligning Your Online Presence with Interview Performance",
        "LinkedIn & Portfolio Optimization for Your Target Industry",
        "Networking Strategies: Converting Interview Contacts into Career Advocates",
        "Building a Personalized Job Search Action Plan with Weekly Goals",
        "Career Roadmap: Short-term (3 months) & Long-term (1 year) Planning",
        "Project: Creating a Complete Interview Readiness Portfolio with Story Bank & Research Files"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20 relative">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">Interview Skills</h1>
            <p className="text-lg leading-relaxed mb-6">
              Build confidence, handle tough questions, and master behavioral interview techniques to land your dream job. Gain the edge in competitive recruitment processes.
            </p>
            <Link href="/#contact" className="px-6 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition shadow-lg">
              Enroll Now
            </Link>
          </div>
          <div className="md:w-1/2 relative h-64">
            <Image src="/images/service-talent-sourcing.png" alt="Interview Skills" fill className="object-contain" />
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
            Interview Skills Curriculum
          </h2>

          <div className="space-y-4">
            {curriculum.map((item, index) => (
              <div key={index} className="border rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
                {/* HEADER */}
                <button
                  onClick={() => toggle(index)}
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
