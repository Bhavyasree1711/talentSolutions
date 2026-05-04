"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TeamingSkillsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const curriculum = [
    {
      title: "Foundations of Team Dynamics",
      topics: [
        "Tuckman's Model: Forming, Storming, Norming, Performing & Adjourning",
        "Psychological Safety: The #1 Predictor of Team Success (Google's Project Aristotle)",
        "Belbin's Team Roles: Understanding 9 Roles & Their Contributions",
        "Team vs Group: What Makes a Collection of People a True Team",
        "Building a Shared Vision: Purpose, Values & Team Mission Statements",
        "Social Loafing: Understanding & Preventing Free-riding in Teams",
        "Self-assessment: Discovering Your Natural Team Role & Working Style",
        "Activity: Belbin Team Role Assessment & Group Discussion"
      ]
    },
    {
      title: "Collaboration & Decision-Making",
      topics: [
        "Effective Collaboration: Synchronous vs Asynchronous Work Strategies",
        "Decision-Making Frameworks: Consensus, Consent & Multi-voting Techniques",
        "Brainstorming Techniques: Mind Mapping, Brain-writing & Reverse Brainstorming",
        "RACI Matrix: Defining Roles (Responsible, Accountable, Consulted, Informed)",
        "Kanban Boards: Visual Project Tracking for Team Transparency",
        "Remote Collaboration Tools: Miro, Trello, Notion & Microsoft Teams",
        "Managing Interdependencies Across Cross-functional Teams",
        "Activity: Solving a Team Challenge using Structured Decision-Making"
      ]
    },
    {
      title: "Conflict Management & Resolution",
      topics: [
        "Types of Conflict: Task Conflict vs Relationship Conflict",
        "TKI Conflict Modes: Competing, Collaborating, Compromising, Avoiding & Accommodating",
        "Crucial Conversations: Navigating High-stakes & Emotional Discussions",
        "The Ladder of Inference: Avoiding Assumptions & Jumping to Conclusions",
        "De-escalation Techniques: Active Listening, Reframing & Finding Common Ground",
        "Mediation Skills: Acting as a Neutral Facilitator in Team Disputes",
        "When to Escalate: Recognizing Conflicts that Need Management Intervention",
        "Activity: Conflict Resolution Role-play with Real Workplace Scenarios"
      ]
    },
    {
      title: "Leadership & Influence in Teams",
      topics: [
        "Situational Leadership: Adapting Your Style to Team Maturity",
        "Leading without Authority: Influencing Peers through Expertise & Trust",
        "Effective Delegation: Empowering Others while Maintaining Accountability",
        "Servant Leadership: Prioritizing Team Growth & Well-being",
        "The Art of Followership: Being a Proactive & Supportive Team Member",
        "Mentoring & Coaching within Teams: Developing Others' Potential",
        "Building Social Capital: Networking & Relationship Skills for Team Influence",
        "Activity: Leadership Style Assessment & Peer Coaching Practice"
      ]
    },
    {
      title: "Feedback Culture & Communication",
      topics: [
        "The Radical Candor Framework: Care Personally & Challenge Directly",
        "SBI Feedback Model: Situation, Behavior & Impact",
        "Giving Constructive Feedback: Specific, Timely & Actionable",
        "Receiving Feedback Gracefully: Managing Defensive Reactions",
        "Running Effective Team Meetings: Agendas, Timeboxing & Action Items",
        "Active Listening: Validating Team Members' Perspectives & Ideas",
        "Moving from Annual Reviews to Continuous Real-time Feedback Loops",
        "Activity: Structured Feedback Exchange using SBI Model in Pairs"
      ]
    },
    {
      title: "Diversity, Inclusion & Trust Building",
      topics: [
        "The Trust Triangle: Authenticity, Logic & Empathy",
        "Cognitive Diversity: Leveraging Different Thinking Styles for Innovation",
        "Creating Inclusive Teams: Amplifying Introverted & Minority Voices",
        "Implicit Bias Awareness: Recognizing & Mitigating Unconscious Biases",
        "Psychological Safety Practices: Making It Safe to Take Interpersonal Risks",
        "Building Rapport in Hybrid Teams: Virtual 'Water-cooler' & Social Events",
        "Generational Diversity: Bridging Communication Gaps Across Age Groups",
        "Activity: Implicit Bias Workshop with Group Reflection & Action Planning"
      ]
    },
    {
      title: "Goal Setting, Performance & Accountability",
      topics: [
        "Setting Team OKRs: Cascading Organizational Goals to Team Level",
        "SMART Goals Framework: Specific, Measurable, Achievable, Relevant & Time-bound",
        "Agile Retrospectives: Facilitating 'Start, Stop, Continue' Sessions",
        "Sprint Planning & Daily Stand-ups: Agile Practices for Team Alignment",
        "Accountability Partners: Peer-based Commitment & Progress Tracking",
        "Celebrating Wins: The Neuroscience of Recognition & Its Impact on Motivation",
        "Measuring Team Health: Surveys, Pulse Checks & Engagement Metrics",
        "Activity: Creating a Team OKR Board with Accountability Pairs"
      ]
    },
    {
      title: "Capstone: Team Synergy Lab",
      topics: [
        "Cross-functional Simulation: Managing a High-pressure Project in Mixed Teams",
        "Developing a Team Charter: Mission, Roles, Norms & Communication Agreements",
        "360-degree Peer Evaluation: Giving & Receiving Feedback on Teaming Skills",
        "Crisis Post-mortem: Analyzing Team Breakdown Points & Designing Fixes",
        "Building a Personal Collaboration Roadmap for Future Team Leadership",
        "Presenting Team Project Results to a Panel of Evaluators",
        "Reflecting on Growth: Comparing Pre-course & Post-course Team Behaviors",
        "Project: Creating a Comprehensive Team Charter & Collaboration Playbook"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20 relative">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">Teaming Skills</h1>
            <p className="text-lg leading-relaxed mb-6">
              Develop the essential collaboration and conflict-resolution qualities to drive projects and foster a positive work environment. Learn to build high-performing teams.
            </p>
            <Link href="/#contact" className="px-6 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition shadow-lg">
              Enroll Now
            </Link>
          </div>
          <div className="md:w-1/2 relative h-64">
            <Image src="/images/service-leadership.png" alt="Teaming Skills" fill className="object-contain" />
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
            Teaming Skills Curriculum
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
