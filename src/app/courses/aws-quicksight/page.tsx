"use client";

import { Activity } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function AwsQuickSightPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const curriculum = [
    {
      title: "QuickSight Ecosystem & Data Management",
      topics: [
        "Modern BI Architectures: Why QuickSight is the Future of Serverless BI",
        "Navigating the QuickSight Console: Admin vs. Author vs. Reader Roles",
        "AWS Data Sources Deep Dive: Connecting to RDS, Redshift, S3 (S3 Select), and Athena",
        "Integrating External SaaS Sources: Salesforce, Adobe Analytics, and ServiceNow",
        "Managing VPC Connections & Network Security for On-premise Data Access"
      ]
    },
    {
      title: "Advanced Data Preparation & SPICE Engine",
      topics: [
        "The Power of SPICE: Super-fast, Parallel, In-memory Calculation Engine Fundamentals",
        "Complex Data Joining & Union Operations in the QuickSight Data Prep Layer",
        "Calculated Fields & String Operations using QuickSight Functional Syntax",
        "Optimizing SPICE Capacity: Monitoring Usage & Automating Incremental Refreshes",
        "Applying Filters, Exclusions, and Row-Level Security (RLS) during Preparation"
      ]
    },
    {
      title: "Advanced Visualizations & Storytelling",
      topics: [
        "Visualization Best Practices: Choosing between Bar, Line, Heatmaps, and Tree Maps",
        "Building Interactive Geospatial Visuals (Maps) with Point & Filled Geometries",
        "Customizing the UI: Creating Corporate Themes and Brand-aligned Color Palettes",
        "Dynamic Interactivity: Adding Parameters, Cascading Filters, and Custom Actions",
        "Conditional Formatting & Reference Lines for Key Performance Indicators (KPIs)"
      ]
    },
    {
      title: "ML Insights & Natural Language Processing",
      topics: [
        "One-click ML Insights: Forecasting Future Trends with Built-in Algorithms",
        "Anomaly Detection: Identifying Outliers & Contributing Factors in Time-series Data",
        "Auto-Narratives: Translating Complex Charts into Natural Language Summaries",
        "QuickSight Q: Configuring Topics, Synonyms, and Natural Language Questioning",
        "SageMaker Integration: Bringing Custom ML Models into QuickSight Visuals"
      ]
    },
    {
      title: "Enterprise Security & Governance",
      topics: [
        "User Authentication: Integrating IAM, Active Directory, and SAML 2.0 (SSO)",
        "Fine-grained Access Control: Column-Level and Row-Level Security (RLS)",
        "Resource Sharing Protocols: Folders, Groups, and Asset-level Permissions",
        "Audit & Compliance: Tracking User Activity using AWS CloudTrail",
        "Cost Governance: Analyzing Capacity-based Pricing vs. Session-based Pricing"
      ]
    },
    {
      title: "Embedding & Programmatic QuickSight",
      topics: [
        "Embedded Analytics: Integrating QuickSight Dashboards into Web Portals and Apps",
        "Working with the QuickSight SDK & JavaScript Embedding Library",
        "Infrastructure as Code (IaC): Automating Dashboard Deployment with CloudFormation/CDK",
        "Programmatic Dashboard Management: Using the CLI for Migrations and Backups",
        "Anonymous Embedding & Multi-tenant Architecture Strategies"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20 relative">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">AWS QuickSight Training</h1>
            <p className="text-lg leading-relaxed mb-6">
              Build interactive dashboards, perform advanced analytics, and visualize complex data leveraging AWS QuickSight. Gain insights to make data-driven decisions.
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
              src="/images/aws-quicksight-blue.png"
              alt="AWS QuickSight Training"
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
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">AWS QuickSight Curriculum</h2>
          <p className="text-gray-600 mb-6">
            Learn the latest QuickSight skills through expert-led courses and projects.
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


