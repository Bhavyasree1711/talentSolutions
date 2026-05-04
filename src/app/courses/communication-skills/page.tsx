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
    {
      title: "Foundations of Professional Communication",
      topics: [
        "The Communication Process: Sender, Receiver, Message, Feedback & Noise",
        "Types of Communication: Verbal, Non-verbal, Written & Visual",
        "Understanding Communication Barriers: Physical, Psychological & Semantic",
        "Adapting Communication to Different Audiences & Contexts",
        "The Role of Emotional Intelligence in Effective Communication",
        "Building Trust & Credibility through Authentic Communication",
        "Self-assessment: Identifying Your Communication Strengths & Weaknesses",
        "Activity: Communication Style Assessment & Personal Improvement Plan"
      ]
    },
    {
      title: "Verbal Communication & Public Speaking",
      topics: [
        "Clarity & Conciseness: The Elevator Pitch Framework",
        "Voice Modulation: Controlling Pitch, Pace, Tone & Volume",
        "Vocabulary Building: Using Impactful Words without Jargon",
        "Impromptu Speaking: Thinking on Your Feet with Structured Responses",
        "Storytelling for Business: Crafting Narratives that Engage & Persuade",
        "Managing Public Speaking Anxiety: Techniques for Confidence",
        "Using Humor Appropriately in Professional Settings",
        "Activity: Delivering a 3-minute Elevator Pitch with Live Peer Feedback"
      ]
    },
    {
      title: "Business Writing & Email Etiquette",
      topics: [
        "Professional Email Writing: Subject Lines, Tone & Clear Call-to-Actions",
        "Writing Effective Meeting Agendas, Minutes & Follow-up Notes",
        "Technical Writing for Non-technical Audiences: Simplifying Complexity",
        "The Pyramid Principle: Structuring Reports & Proposals for Maximum Impact",
        "Writing SOPs, Documentation & Knowledge Base Articles",
        "Digital Communication Etiquette: Slack, Teams & Chat Best Practices",
        "Grammar & Proofreading: Common Mistakes & Tools for Error-free Writing",
        "Activity: Writing a Professional Proposal & Presenting It to the Group"
      ]
    },
    {
      title: "Active Listening & Empathetic Engagement",
      topics: [
        "Levels of Listening: Passive, Active, Empathetic & Deep Listening",
        "The RASA Framework: Receive, Appreciate, Summarize & Ask",
        "Paraphrasing & Reflecting: Confirming Understanding without Repeating",
        "Non-verbal Cues of Listening: Eye Contact, Nodding & Open Posture",
        "Managing Emotional Triggers: Staying Calm during Difficult Conversations",
        "Asking Powerful Questions: Open-ended vs Closed-ended Techniques",
        "Listening in Virtual Meetings: Overcoming Digital Distractions",
        "Activity: Active Listening Role-play with Observer Feedback"
      ]
    },
    {
      title: "Non-Verbal Communication & Body Language",
      topics: [
        "Understanding Body Language: Posture, Gestures & Facial Expressions",
        "Micro-expressions: Reading Hidden Emotions in Professional Settings",
        "Eye Contact Rules: Building Connection without Discomfort",
        "The Power of Strategic Silence & Pauses in Conversations",
        "Proxemics: Understanding Personal Space in Different Cultures",
        "Digital Body Language: Communicating Effectively on Video Calls",
        "Ensuring Congruence: Aligning Verbal & Non-verbal Messages",
        "Activity: Video-recorded Practice Session with Body Language Analysis"
      ]
    },
    {
      title: "Persuasion, Negotiation & Conflict Resolution",
      topics: [
        "Cialdini's 6 Principles of Influence: Reciprocity, Scarcity, Authority & More",
        "Negotiation Strategies: Win-Win Frameworks & Interest-based Bargaining",
        "Conflict De-escalation: Using 'I' Statements & Neutral Reframing",
        "Handling Difficult Conversations: Performance Reviews & Critical Feedback",
        "The Art of Saying No: Setting Boundaries Professionally",
        "Building Rapport: Small Talk, Networking & Relationship Building",
        "Influencing without Authority: Leading through Communication",
        "Activity: Negotiation Simulation with Role-based Scenarios"
      ]
    },
    {
      title: "Cross-Cultural & Virtual Communication",
      topics: [
        "High-Context vs Low-Context Cultures: Adapting for Global Teams",
        "Inclusive Language: Avoiding Bias & Promoting Psychological Safety",
        "Virtual Communication Best Practices: Video Calls, Screen Sharing & Async",
        "Navigating Time Zones & Communication Preferences in Remote Teams",
        "Global Business Etiquette: Greetings, Meetings & Decision-making Styles",
        "Managing Miscommunication Across Cultures & Languages",
        "Writing for Global Audiences: Simple, Clear & Translatable Content",
        "Activity: Cross-cultural Communication Scenario Role-play"
      ]
    },
    {
      title: "Capstone: Master Communicator Workshop",
      topics: [
        "High-stakes Simulation: Pitching a Solution to a Mock Board of Directors",
        "Conflict Resolution Lab: Role-playing Real-world Workplace Disagreements",
        "Personal Brand Audit: Reviewing Your Digital & Verbal Communication Footprint",
        "360-degree Feedback: Receiving & Giving Constructive Peer Reviews",
        "Creating a Personal Communication Improvement Roadmap",
        "Networking Practice: Building Connections in a Simulated Conference",
        "Final Presentation: Delivering a Persuasive 5-minute Keynote",
        "Project: Developing a 30-day Communication Improvement Action Plan"
      ]
    }
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
