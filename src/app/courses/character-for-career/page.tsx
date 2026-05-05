"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CharacterForCareerPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const curriculum = [
    {
      title: "Emotional Intelligence (EQ) & Self-Awareness",
      topics: [
        "The EQ Framework: Self-awareness, Self-regulation, Motivation, Empathy & Social Skills",
        "Self-assessment: Understanding Your Emotional Triggers & Responses",
        "The Amygdala Hijack: Staying Logical During High-stress Situations",
        "Emotional Regulation: Techniques for Managing Anger, Anxiety & Frustration",
        "Empathy in the Workplace: Understanding Others' Perspectives & Feelings",
        "Emotional Contagion: How Your Mood Impacts Team Morale & Productivity",
        "Developing Self-compassion: Managing Your Inner Critic",
        "Activity: EQ Self-assessment & Personal Emotional Regulation Plan"
      ]
    },
    {
      title: "Professional Ethics & Integrity",
      topics: [
        "Defining Your Core Values: Creating an Ethical North Star for Your Career",
        "Ethical Decision-Making Frameworks for Complex Business Situations",
        "Radical Integrity: The Link Between Honesty, Accountability & Trust",
        "Navigating Grey Areas: When Rules Don't Cover the Situation",
        "Whistleblowing & Advocacy: When & How to Stand Up for Ethics",
        "Building a Reputation: The Long-term ROI of Being Known for Integrity",
        "Professional Conduct: Workplace Etiquette, Confidentiality & Respect",
        "Activity: Ethical Dilemma Workshop with Group Discussion & Resolution"
      ]
    },
    {
      title: "Growth Mindset & Continuous Learning",
      topics: [
        "Fixed vs Growth Mindset: How Your Beliefs Shape Your Career",
        "The Power of 'Yet': Transforming Failures into Learning Milestones",
        "Seeking Feedback Actively: Developing a Hunger for Constructive Criticism",
        "Intellectual Humility: The Ability to Unlearn & Relearn",
        "Antifragility: Getting Stronger Through Challenges & Adversity",
        "Building a Personal Learning Plan: Books, Courses, Mentors & Communities",
        "Curiosity as a Superpower: Asking Better Questions in Every Situation",
        "Activity: Creating a 12-month Personal Learning & Development Roadmap"
      ]
    },
    {
      title: "Resilience, Grit & Mental Toughness",
      topics: [
        "The 4C Model: Control, Commitment, Challenge & Confidence",
        "Stress Management: Identifying Stressors & Building Coping Mechanisms",
        "Bouncing Back from Failure: Techniques for Rapid Recovery",
        "Grit: The Intersection of Long-term Passion & Persistence",
        "Building a Support System: Mentorship, Peers & Community",
        "Managing Rejection: Turning 'No' into Motivation",
        "Stress Inoculation: Building Immunity to High-pressure Environments",
        "Activity: Resilience Planning with Personal Stress Audit & Coping Strategy"
      ]
    },
    {
      title: "Leadership Identity & Personal Branding",
      topics: [
        "Discovering Your Leadership Style: Strengths, Values & Influence",
        "Leading without a Title: Influence, Social Capital & Credibility",
        "Authentic Personal Branding: Aligning Your External Image with Internal Values",
        "Digital Presence: Curating LinkedIn, Portfolio & Professional Footprint",
        "Executive Presence: Combining Competence with Confidence & Character",
        "Networking with Purpose: Building Relationships that Advance Your Career",
        "Elevator Pitch: Articulating Your Value Proposition in 60 Seconds",
        "Activity: Personal Brand Audit & LinkedIn Profile Optimization Workshop"
      ]
    },
    {
      title: "Well-being & Sustainable Performance",
      topics: [
        "Energy Management vs Time Management: Optimizing Peak Performance",
        "Recognizing Burnout: Early Warning Signs & Recovery Protocols",
        "Work-Life Balance: Setting Boundaries in an 'Always-On' Culture",
        "Mindfulness for Professionals: Meditation, Focus & Decision-making",
        "Physical Foundations: Impact of Sleep, Nutrition & Exercise on Performance",
        "Digital Wellness: Managing Screen Time & Information Overload",
        "Building Healthy Work Habits: Routines That Support Long-term Success",
        "Activity: Creating a Personal Well-being Plan with Weekly Check-ins"
      ]
    },
    {
      title: "Self-Discipline & Habit Architecture",
      topics: [
        "The Habit Loop: Cue, Routine & Reward for Building Good Habits",
        "Atomic Habits: Using 1% Daily Improvements for Exponential Growth",
        "The Eisenhower Matrix: Prioritizing Urgent vs Important Tasks",
        "Deep Work: Developing Focus for High-value Cognitive Tasks",
        "Goal Setting: Breaking 5-year Visions into Monthly & Weekly Actions",
        "Procrastination: Understanding Why We Delay & How to Overcome It",
        "Morning Routines & Evening Reviews: Bookending Your Day for Success",
        "Activity: Designing a 30-day Habit Challenge with Progress Tracking"
      ]
    },
    {
      title: "Capstone: Character-Driven Career Plan",
      topics: [
        "The Legacy Statement: Defining the Impact You Want to Leave",
        "Professional Roadmap: Setting 1-year, 3-year & 5-year Career Goals",
        "Values Alignment: Ensuring Your Career Path Reflects Your Core Values",
        "The Ethics Lab: Simulating a High-stakes Ethical Crisis & Defending Your Resolution",
        "Public Accountability: Presenting Your Plan to Peers for Feedback",
        "Building a Personal Advisory Board: Mentors, Sponsors & Advocates",
        "Commitment to Growth: Pledging to a Lifelong Journey of Character Excellence",
        "Project: Delivering a Character-Driven 5-year Career Development Plan"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20 relative">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">Character for Career</h1>
            <p className="text-lg leading-relaxed mb-6">
              Cultivate emotional intelligence, professional ethics, and a growth mindset to ensure long-term career success. Build the foundations of strong professional character.
            </p>
            <Link href="/#contact" className="px-6 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition shadow-lg">
              Enroll Now
            </Link>
          </div>
          <div className="md:w-1/2 relative h-64">
            <Image src="/images/skillassess.png" alt="Character for Career" fill className="object-contain" />
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
            Character for Career Curriculum
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
