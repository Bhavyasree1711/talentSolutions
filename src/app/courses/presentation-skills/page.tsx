"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PresentationSkillsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const curriculum = [
    {
      title: "Presentation Planning & Audience Analysis",
      topics: [
        "Understanding Your Audience: Demographics, Motivations & Decision-making Power",
        "Defining the Big Idea: One Clear Takeaway for Every Presentation",
        "Presentation Structures: Problem-Solution, Chronological & Modular Frameworks",
        "Creating a Presentation Outline: Introduction, Key Points & Call to Action",
        "Research & Data Gathering: Finding Credible Sources to Support Your Message",
        "Time Management: Planning Content for 5, 15 & 30-minute Presentation Slots",
        "Setting Presentation Goals: Inform, Persuade, Inspire or Entertain",
        "Activity: Creating a Presentation Outline for a Business Proposal"
      ]
    },
    {
      title: "Slide Design & Visual Storytelling",
      topics: [
        "CRAP Design Principles: Contrast, Repetition, Alignment & Proximity",
        "Cognitive Load Theory: Why 'Less is More' on Slides",
        "Data Visualization: Transforming Spreadsheets into Compelling Charts & Graphs",
        "Typography & Color: Choosing Fonts & Palettes for Professional Impact",
        "Using Images & Icons Effectively: Stock Photos, Icons & Custom Graphics",
        "Animation & Transitions: Using Motion Purposefully (Not Distractingly)",
        "Tools Beyond PowerPoint: Canva, Google Slides, Keynote & Prezi",
        "Activity: Redesigning a 'Death by PowerPoint' Deck into a Visual Story"
      ]
    },
    {
      title: "Public Speaking & Stage Presence",
      topics: [
        "Voice Modulation: Controlling Pitch, Pace, Volume & Tone",
        "Body Language on Stage: Posture, Gestures, Movement & Eye Contact",
        "Managing Public Speaking Anxiety: Breathing Techniques & Visualization",
        "The Power of the Pause: Using Silence for Emphasis & Impact",
        "Opening with Impact: Hooks, Questions, Statistics & Stories",
        "Closing Strong: Memorable Endings & Clear Calls to Action",
        "Authentic Delivery: Speaking Naturally vs Reading a Script",
        "Activity: Delivering a 3-minute Impromptu Speech with Live Feedback"
      ]
    },
    {
      title: "Storytelling for Business Presentations",
      topics: [
        "The Hero's Journey in Business: Making Your Customer the Hero",
        "Case Studies & Anecdotes: Humanizing Data with Real Stories",
        "Creating Tension & Release: Narrative Arcs for Product Pitches",
        "Metaphors & Analogies: Simplifying Complex Ideas for Any Audience",
        "Emotional vs Logical Appeals: Knowing When to Use Each",
        "Building a Story Library: Reusable Narrative Modules for Different Audiences",
        "Data Storytelling: Turning Numbers into Meaningful Narratives",
        "Activity: Crafting & Delivering a 5-minute Business Story with Data"
      ]
    },
    {
      title: "Audience Engagement & Interaction",
      topics: [
        "Interactive Techniques: Questions, Polls, Quizzes & Show of Hands",
        "Technology Tools: Mentimeter, Slido & Real-time Audience Polling",
        "Reading the Room: Identifying Signs of Boredom & Pivoting Instantly",
        "Facilitating Dialogue: Moving from Monologue to Audience Collaboration",
        "Gamification: Using Challenges & Rewards to Drive Participation",
        "Managing Large Audiences vs Small Groups: Different Strategies",
        "Energy Management: Keeping Enthusiasm High Throughout Long Presentations",
        "Activity: Delivering a 10-minute Interactive Presentation with Audience Polls"
      ]
    },
    {
      title: "Handling Q&A & Tough Questions",
      topics: [
        "Preparing for Q&A: Anticipating the Top 10 Toughest Questions",
        "The Bridging Technique: Redirecting Difficult Questions to Your Key Message",
        "Handling Hostile or Skeptical Audience Members Professionally",
        "Grace Under Pressure: Staying Composed During Technical Failures",
        "Admitting What You Don't Know: Honesty as a Credibility Builder",
        "The 'Last Word' Strategy: Ending on Your Terms After Q&A",
        "Turning Objections into Opportunities to Reinforce Your Message",
        "Activity: Q&A Hot Seat Simulation with Challenging Audience Questions"
      ]
    },
    {
      title: "Virtual & Hybrid Presentations",
      topics: [
        "Virtual Presence: Camera Setup, Lighting, Background & Eye-line Alignment",
        "Engaging Remote Audiences: Keeping Virtual Participants Active & Involved",
        "Screen Sharing Best Practices: Clean Desktop, Font Sizes & Pointer Tools",
        "Virtual Whiteboards & Breakout Rooms for Interactive Sessions",
        "Camera Comfort: Developing a Natural Persona for Video Presentations",
        "Managing Chat, Slides & Video Feeds Simultaneously",
        "Recording & Asynchronous Presentations: Pre-recording for On-demand Viewing",
        "Activity: Delivering a Full Virtual Presentation on Zoom/Teams with Peer Feedback"
      ]
    },
    {
      title: "Capstone: Executive Pitch Simulation",
      topics: [
        "High-stakes Pitch: Delivering a Business Proposal to a Simulated Executive Board",
        "Video Analysis Workshop: Reviewing Your Own Recording for Improvement Areas",
        "Peer Performance Review: Constructive Feedback on Speaking & Slide Design",
        "Personal Brand Audit: How Your Presentation Style Reflects Your Professional Image",
        "Building Your Speaker's Toolkit: Templates, Story Bank & Feedback Forms",
        "Setting Quarterly Goals for Continued Presentation Improvement",
        "Creating a Personal Presentation Style Guide",
        "Project: Delivering a Final 15-minute Keynote with Full Deck & Q&A"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20 relative">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">Presentation Skills</h1>
            <p className="text-lg leading-relaxed mb-6">
              Learn how to structure presentations and use storytelling to engage stakeholders and deliver impactful pitches. Master the art of public speaking and audience connection.
            </p>
            <Link href="/#contact" className="px-6 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition shadow-lg">
              Enroll Now
            </Link>
          </div>
          <div className="md:w-1/2 relative h-64">
            <Image src="/images/training-classroom.png" alt="Presentation Skills" fill className="object-contain" />
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
            Presentation Skills Curriculum
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
