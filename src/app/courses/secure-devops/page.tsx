"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SecureDevOpsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const curriculum = [
    {
      title: "Introduction to DevSecOps & Culture",
      topics: [
        "What is DevSecOps: Principles, Benefits & Breaking Down Silos",
        "Shifting Security Left: Integrating Controls from Day One",
        "The DevSecOps Toolchain: SAST, DAST, SCA, IaC Scanning & SOAR",
        "DevSecOps vs Traditional Security: Speed, Automation & Shared Responsibility",
        "Measuring DevSecOps Success: MTTR, Vulnerability Escape Rate & Lead Time",
        "Setting Up a DevSecOps Lab: Git, Jenkins/GitLab CI & Docker",
        "Project: Configuring a DevSecOps Pipeline Skeleton with Security Stage Gates"
      ]
    },
    {
      title: "Threat Modeling & Secure Design",
      topics: [
        "Threat Modeling Methodologies: STRIDE, PASTA & DREAD Comparison",
        "Data Flow Diagrams (DFDs): Mapping Trust Boundaries & Attack Surfaces",
        "Automating Threat Models with OWASP Threat Dragon",
        "Translating Threats into Security User Stories & Acceptance Criteria",
        "Abuse Cases & Misuse Cases: Thinking Like an Attacker",
        "Architecture Risk Analysis: Identifying Weak Points in System Design",
        "Continuous Threat Modeling: Updating with Every Sprint",
        "Project: Creating a Threat Model for a Microservices E-commerce Application"
      ]
    },
    {
      title: "Secure Coding & Pre-commit Security",
      topics: [
        "Pre-commit Hooks: Automatic Secret Scanning with TruffleHog & Gitleaks",
        "Static Analysis (SAST): Integrating SonarQube into Developer Workflows",
        "Snyk for Open Source Vulnerability Detection in Dependencies",
        "Security Linting: Bandit (Python), ESLint-plugin-security (JS) & Semgrep",
        "IDE Security Plugins: Real-time Feedback in VS Code & IntelliJ",
        "Secure Code Review Checklists: OWASP Secure Coding Guidelines",
        "Common Vulnerability Patterns: Injection, Broken Auth & Sensitive Data Exposure",
        "Project: Setting Up Pre-commit Hooks with Secret Scanning & SAST for a Node.js App"
      ]
    },
    {
      title: "Security in CI/CD Pipelines",
      topics: [
        "Designing Secure Pipelines in Jenkins, GitLab CI/CD & Azure Pipelines",
        "Software Composition Analysis (SCA): Scanning Open Source Dependencies",
        "DAST Automation: Running OWASP ZAP Scans in CI/CD",
        "Interactive Application Security Testing (IAST) with Contrast Security",
        "Vulnerability Aggregation & Tracking with DefectDojo",
        "Security Quality Gates: Breaking Builds on Critical Vulnerabilities",
        "Managing Security Findings: Triage, False Positive Handling & SLA Tracking",
        "Project: Building a Complete CI/CD Pipeline with SAST, SCA & DAST Stages"
      ]
    },
    {
      title: "Infrastructure as Code (IaC) Security",
      topics: [
        "Scanning Terraform for Misconfigurations with Checkov & tfsec",
        "CloudFormation & Bicep Security Analysis with cfn-nag",
        "Policy as Code: Writing OPA (Open Policy Agent) Rego Policies",
        "Immutable Infrastructure: Building Hardened Images with Packer",
        "Secret Management: HashiCorp Vault, AWS Secrets Manager & Azure Key Vault",
        "Cloud Security Posture Management (CSPM) with Prowler & ScoutSuite",
        "Automated Compliance Checks for CIS Benchmarks in Cloud",
        "Project: Securing a Terraform-provisioned AWS Infrastructure with Policy as Code"
      ]
    },
    {
      title: "Container & Kubernetes Security",
      topics: [
        "Hardening Docker Images: Multi-stage Builds, Distroless & Non-root Containers",
        "Container Image Scanning with Trivy, Grype & Snyk Container",
        "Docker Bench Security: Automated CIS Docker Benchmark Checks",
        "Kubernetes Security: RBAC, Network Policies & Pod Security Standards",
        "Admission Controllers: OPA Gatekeeper & Kyverno for Policy Enforcement",
        "Service Mesh Security: mTLS with Istio & Linkerd",
        "Runtime Security Monitoring with Falco & Sysdig",
        "Project: Deploying a Secure Kubernetes Cluster with Network Policies & Image Scanning"
      ]
    },
    {
      title: "Compliance as Code & Monitoring",
      topics: [
        "Automating Compliance: Mapping Controls to GDPR, HIPAA & SOC 2",
        "Infrastructure Drift Detection: Identifying Unauthorized Changes",
        "Security Observability: Centralized Logging with ELK Stack & Splunk",
        "SIEM Integration: Correlating Security Events & Automated Alerting",
        "Chaos Security Engineering: Testing Resilience with Gremlin & Litmus",
        "Automated Evidence Collection for Audit Readiness",
        "Compliance Dashboards: Real-time Visibility into Security Posture",
        "Project: Building a Compliance Dashboard with Automated Evidence Collection"
      ]
    },
    {
      title: "Secure Release & Incident Response",
      topics: [
        "Blue-Green & Canary Deployments with Security Validation",
        "Feature Flags for Safe Rollouts: LaunchDarkly & Unleash",
        "Post-deployment Security Smoke Tests & Health Checks",
        "GitOps Security: Declarative Deployments with Flux & ArgoCD",
        "Security Orchestration (SOAR): Automating Incident Response Runbooks",
        "Post-mortem Analysis: Blameless Reviews & Continuous Improvement",
        "Building a Security Champions Program for Development Teams",
        "Project: Implementing a Canary Deployment with Automated Security Validation & Rollback"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20 relative">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">Secure DEVOPS</h1>
            <p className="text-lg leading-relaxed mb-6">
              Integrate automated security checks, compliance operations, and threat modeling directly into your CI/CD pipelines. Build robust and secure software delivery systems.
            </p>
            <Link href="/#contact" className="px-6 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition shadow-lg">
              Enroll Now
            </Link>
          </div>
          <div className="md:w-1/2 relative h-64">
            <Image src="/images/secdevops.png" alt="Secure DEVOPS" fill className="object-contain" />
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
            Secure DEVOPS Curriculum
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
