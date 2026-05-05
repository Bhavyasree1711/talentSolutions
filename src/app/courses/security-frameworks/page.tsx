"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SecurityFrameworksPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const curriculum = [
    {
      title: "Security Governance, Risk & Compliance (GRC)",
      topics: [
        "Introduction to GRC: Aligning Information Security with Business Goals",
        "Security Governance: Roles of Board, CISO, Security Team & Auditors",
        "Developing Security Policies: Acceptable Use, Incident Response & Data Classification",
        "Security Standards vs Procedures vs Guidelines: Understanding the Hierarchy",
        "The Role of Frameworks: Why Organizations Adopt Security Standards",
        "Legal & Regulatory Landscape: International & Domestic Requirements",
        "Building a Security Program from Scratch: Roadmap & Milestones",
        "Project: Creating a Security Policy Framework for a Mid-size Organization"
      ]
    },
    {
      title: "ISO/IEC 27001: Information Security Management",
      topics: [
        "ISMS Overview: What is an Information Security Management System",
        "ISO 27001 Structure: Clauses 4-10 & Their Requirements",
        "Annex A Controls: Organizational, People, Physical & Technological Controls",
        "Statement of Applicability (SoA): Documenting Control Selection & Justification",
        "Risk Assessment Process: Asset Identification, Threat Analysis & Risk Evaluation",
        "Certification Journey: Stage 1 & Stage 2 Audits Explained",
        "Transitioning to ISO 27001:2022: Key Changes & New Control Categories",
        "Project: Building an ISMS Documentation Package with SoA & Risk Register"
      ]
    },
    {
      title: "NIST Cybersecurity Framework (CSF)",
      topics: [
        "NIST CSF Core: Identify, Protect, Detect, Respond & Recover Functions",
        "CSF Categories & Subcategories: Detailed Control Mapping",
        "Implementation Tiers: Measuring Organizational Maturity (Partial → Adaptive)",
        "Framework Profiles: Current State vs Target State Gap Analysis",
        "NIST SP 800-53: Security & Privacy Controls Catalog",
        "NIST Risk Management Framework (RMF): 7-step Process",
        "Integrating NIST CSF with Other Frameworks (ISO 27001, CIS Controls)",
        "Project: Conducting a NIST CSF Gap Assessment for a Sample Organization"
      ]
    },
    {
      title: "SOC 2 Compliance for Service Organizations",
      topics: [
        "Trust Services Criteria: Security, Availability, Confidentiality, Processing Integrity & Privacy",
        "SOC 2 Type I vs Type II: Point-in-time vs Period-of-time Reporting",
        "Designing Controls That Map to AICPA Trust Criteria",
        "Evidence Collection: Building an Audit-ready Evidence Repository",
        "SOC 2 Gap Analysis: Identifying & Remediating Deficiencies",
        "Third-party Risk Management: How SOC Reports Influence Vendor Selection",
        "SOC 2 Automation Tools: Vanta, Drata & Secureframe",
        "Project: Preparing a SOC 2 Type II Readiness Assessment with Control Mapping"
      ]
    },
    {
      title: "Data Privacy Regulations (GDPR, CCPA & Global)",
      topics: [
        "GDPR Core Principles: Lawfulness, Purpose Limitation, Data Minimization & Transparency",
        "Data Subject Rights: Access, Rectification, Erasure (Right to be Forgotten) & Portability",
        "Data Protection Impact Assessments (DPIA): When & How to Conduct Them",
        "International Data Transfers: SCCs, Adequacy Decisions & Binding Corporate Rules",
        "CCPA/CPRA: California Consumer Privacy Act Requirements & Comparison with GDPR",
        "Privacy by Design & Default: Embedding Privacy into System Architecture",
        "Global Privacy Landscape: LGPD (Brazil), POPIA (South Africa) & India's DPDP Act",
        "Project: Conducting a DPIA for a Customer Data Processing Application"
      ]
    },
    {
      title: "Risk Assessment & Management Methodologies",
      topics: [
        "Quantitative vs Qualitative Risk Assessment: Choosing the Right Approach",
        "NIST SP 800-30: Guide for Conducting Risk Assessments",
        "ISO 31000: International Standard for Risk Management",
        "Building a Risk Register: Asset Inventory, Threats, Vulnerabilities & Risk Scores",
        "Risk Treatment: Accept, Avoid, Transfer (Insurance) & Mitigate",
        "Risk Appetite & Tolerance: Setting Organizational Risk Thresholds",
        "Communicating Risk to Executives: Heatmaps, Dashboards & Financial Metrics",
        "Project: Building a Risk Register & Risk Treatment Plan for a Cloud Infrastructure"
      ]
    },
    {
      title: "Industry Compliance: PCI-DSS, HIPAA & Cloud",
      topics: [
        "PCI-DSS v4.0: 12 Requirements for Securing Payment Card Data",
        "PCI Compliance Levels: SAQs vs Report on Compliance (ROC)",
        "HIPAA Security Rule: Safeguarding Electronic Protected Health Information (ePHI)",
        "HIPAA Privacy Rule: Patient Rights & Covered Entity Obligations",
        "Cloud Security: Shared Responsibility Model for AWS, Azure & GCP",
        "CIS Controls: 18 Critical Security Controls for Cyber Defense",
        "Cross-framework Mapping: Aligning PCI-DSS, HIPAA & ISO 27001 Controls",
        "Project: Creating a Cross-framework Compliance Matrix for a Healthcare Organization"
      ]
    },
    {
      title: "Security Auditing & Continuous Compliance",
      topics: [
        "Internal Audit Program Design: Scope, Methodology & Testing Procedures",
        "Continuous Compliance Monitoring: GRC Platforms (Archer, ServiceNow, OneTrust)",
        "Third-party Risk Management (TPRM): Vendor Security Assessments & Questionnaires",
        "Automated Evidence Collection: Using APIs & Scripts for Audit Readiness",
        "Audit Report Writing: Findings, Risk Ratings & Remediation Recommendations",
        "Managing Audit Findings: Remediation Tracking & Closure Verification",
        "Building a Compliance Calendar: Scheduling Audits, Reviews & Renewals",
        "Project: Building a Multi-framework Compliance Roadmap for a Global Enterprise"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20 relative">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">Security Frameworks</h1>
            <p className="text-lg leading-relaxed mb-6">
              Master industry-standard compliance and governance frameworks including ISO 27001, SOC 2, and NIST guidelines. Learn to implement and audit security controls effectively.
            </p>
            <Link href="/#contact" className="px-6 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition shadow-lg">
              Enroll Now
            </Link>
          </div>
          <div className="md:w-1/2 relative h-64">
            <Image src="/images/frame.png" alt="Security Frameworks" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* BACK BUTTON (OVERLAY) */}
      <div className="absolute top-4 left-4 z-20">
        <Link
          href="/courses/security"
          className="inline-flex items-center text-sm font-semibold text-white bg-red-700 px-4 py-2 rounded-lg hover:bg-red-800 transition shadow-md"
        >
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Security Courses
        </Link>
      </div>

      {/* ✅ CURRICULUM */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">
            Security Frameworks Curriculum
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
