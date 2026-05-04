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
    {
      title: "Power BI Fundamentals & Setup",
      topics: [
        "Introduction to Business Intelligence: Traditional BI vs Self-Service BI",
        "Power BI Product Suite: Desktop, Service, Pro, Premium & Mobile",
        "Installing Power BI Desktop & Setting Up Your First Workspace",
        "The Power BI Workflow: Data Import → Transform → Model → Visualize → Share",
        "Understanding Power BI Licensing: Free, Pro, Premium Per User & Premium Capacity",
        "Navigating Power BI Desktop Interface: Ribbon, Fields, Filters & Visualizations Panes",
        "Power BI Mobile App: Viewing Reports & Setting Alerts on Mobile Devices",
        "Project: Creating Your First Interactive Sales Report from an Excel Dataset"
      ]
    },
    {
      title: "Data Acquisition & Power Query (ETL)",
      topics: [
        "Connecting to Data Sources: Excel, CSV, SQL Server, Web APIs & SharePoint",
        "Power Query Editor: Filtering, Sorting & Removing Duplicates",
        "Data Transformation: Splitting Columns, Merging Queries & Unpivoting Data",
        "Appending Queries: Combining Multiple Tables into a Single Dataset",
        "Conditional Columns & Custom Columns for Data Enrichment",
        "Introduction to M Language: Writing Custom Power Query Functions",
        "Query Folding & Performance Optimization Best Practices",
        "Working with Parameters for Dynamic Data Sources",
        "Project: Building an ETL Pipeline to Clean & Combine Multi-source HR Data"
      ]
    },
    {
      title: "Data Modeling & Relationships",
      topics: [
        "Star Schema Design: Fact Tables, Dimension Tables & Lookup Tables",
        "Creating & Managing Relationships: 1:1, 1:Many & Many:Many Cardinality",
        "Cross-filter Direction: Single vs Both & Performance Implications",
        "Handling Circular Dependencies & Active/Inactive Relationships",
        "Building Date Tables & Hierarchies (Year → Quarter → Month → Day)",
        "Calculated Columns vs Measures: Understanding When to Use Each",
        "Optimizing Data Models: Hiding Fields, Renaming & Organizing Tables",
        "Project: Designing a Star Schema Model for an E-commerce Analytics Platform"
      ]
    },
    {
      title: "DAX (Data Analysis Expressions)",
      topics: [
        "DAX Fundamentals: Syntax, Data Types & Evaluation Context",
        "Understanding Filter Context vs Row Context in DAX",
        "Core Functions: SUM, AVERAGE, COUNT, DISTINCTCOUNT & MIN/MAX",
        "CALCULATE Function: The Most Powerful Function in DAX",
        "FILTER, ALL, ALLEXCEPT & RELATED Functions for Advanced Filtering",
        "Time Intelligence: YTD, MTD, QTD, SAMEPERIODLASTYEAR & YoY Growth",
        "Iterator Functions: SUMX, AVERAGEX, COUNTX for Row-level Calculations",
        "Variables in DAX: Improving Readability with VAR & RETURN",
        "Project: Building a Financial KPI Dashboard with Advanced DAX Calculations"
      ]
    },
    {
      title: "Interactive Visualizations & Report Design",
      topics: [
        "Visualization Catalog: Bar, Column, Line, Area, Pie, Donut & Waterfall Charts",
        "Maps & Geospatial: Azure Maps, Filled Maps & ArcGIS Integration",
        "Drill-down, Drill-through & Cross-highlighting for Data Exploration",
        "Slicers & Sync-slicers for Interactive Filtering Across Pages",
        "Conditional Formatting: Color Scales, Data Bars & Icons on Tables/Matrices",
        "Bookmarks, Buttons & Page Navigation for Interactive Storytelling",
        "Custom JSON Themes for Corporate Branding & Visual Consistency",
        "Tooltips: Custom Report Page Tooltips for Rich Hover Experiences",
        "Project: Creating a Multi-page Executive Dashboard with Navigation & Bookmarks"
      ]
    },
    {
      title: "Power BI Service & Data Refresh",
      topics: [
        "Publishing Reports to Power BI Service from Desktop",
        "Workspace Management: Dev, Test & Production Environments",
        "Creating Dashboards: Pinning Visuals & Real-time Tiles",
        "Data Gateway Configuration: Personal vs Enterprise Gateways",
        "Scheduled Refresh & Incremental Refresh for Large Datasets",
        "Dataflows: Reusable ETL in Power BI Service",
        "Content Distribution: Apps, Sharing Links & Embedding in SharePoint/Teams",
        "Project: Setting Up an Automated Refresh Pipeline with On-premises Data Gateway"
      ]
    },
    {
      title: "Security, Governance & Administration",
      topics: [
        "Row-Level Security (RLS): Static & Dynamic Security Roles",
        "Object-Level Security (OLS): Hiding Columns & Tables from Users",
        "Workspace Roles: Viewer, Contributor, Member & Admin Permissions",
        "Sensitivity Labels: Microsoft Purview (MIP) Labels for Data Classification",
        "Audit Logs & Usage Metrics: Monitoring Report Views & User Activity",
        "Tenant Settings & Admin Portal Configuration",
        "Deployment Pipelines: Promoting Content from Dev → Test → Production",
        "Project: Implementing RLS for a Multi-region Sales Report"
      ]
    },
    {
      title: "AI Visuals, Paginated Reports & Performance",
      topics: [
        "AI-Powered Visuals: Key Influencers, Decomposition Trees & Smart Narratives",
        "Q&A Visual: Configuring Natural Language Queries for Business Users",
        "Anomaly Detection & Forecasting on Line Charts",
        "Paginated Reports: Pixel-perfect Reports with Power BI Report Builder",
        "Performance Analyzer: Identifying Slow Queries & Visual Bottlenecks",
        "DAX Studio: Advanced Debugging & Query Performance Optimization",
        "Composite Models: DirectQuery + Import for Real-time & Historical Data",
        "Project: Building an Enterprise Sales Analytics Platform with AI Insights & RLS"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20 relative">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">Power BI Training</h1>
            <p className="text-lg leading-relaxed mb-6">
              Transform raw data into powerful insights using Microsoft Power BI, dashboards, and advanced analytics. Learn to visualize and share business intelligence effectively.
            </p>
            <Link href="/#contact" className="px-6 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition shadow-lg">
              Enroll Now
            </Link>
          </div>
          <div className="md:w-1/2 relative h-72 lg:h-[400px] w-full mt-12 md:mt-0 lg:ml-10 rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform hover:scale-105 transition duration-500">
            <Image src="/images/power-bi-blue.png" alt="Power BI Training" fill className="object-cover" />
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

      {/* CURRICULUM */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">
            Power BI Curriculum
          </h2>

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


