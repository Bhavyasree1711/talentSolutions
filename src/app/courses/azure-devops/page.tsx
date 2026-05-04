"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AzureDevOpsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const curriculum = [
    {
      title: "Introduction to DevOps & Azure DevOps",
      topics: [
        "DevOps Culture & Philosophy: CALMS Framework (Culture, Automation, Lean, Measurement, Sharing)",
        "Understanding the DevOps Lifecycle, Feedback Loops & Value Stream Mapping",
        "Introduction to Azure DevOps Services: Boards, Repos, Pipelines, Test Plans, Artifacts",
        "Organization & Project Setup: Defining Process Templates (Agile, Scrum, CMMI, Basic)",
        "Managing Users, Groups, and Permissions at Org and Project levels",
        "Installing & Configuring Azure DevOps CLI Extensions",
        "Connecting Azure DevOps to GitHub, Slack, and Microsoft Teams",
        "Project: Setting Up a Complete Azure DevOps Organization with Team Projects & Security"
      ]
    },
    {
      title: "Planning & Tracking with Azure Boards",
      topics: [
        "Configuring Product Backlogs, Sprints, and Taskboards",
        "Agile Tooling: Work Item Types (Epics, Features, User Stories, Tasks, Bugs)",
        "Portfolio Backlogs and Iteration Paths for Multi-team Planning",
        "Customizing Work Items, Process Inheritance, and Rule Engines",
        "Kanban Board Optimization: WIP Limits, Swimlanes, and Cumulative Flow Diagrams",
        "Creating Dashboards, Query-based Charts, and Analytics (Velocity, Burn-down)",
        "Integrating Azure Boards with GitHub Issues & Pull Requests",
        "Project: Building a Full Sprint Board for an E-commerce App with Custom Work Items"
      ]
    },
    {
      title: "Source Control with Azure Repos",
      topics: [
        "Git Fundamentals: Clone, Commit, Push, Pull, and Merge Conflict Resolution",
        "Advanced Branching Strategies: Gitflow, Trunk-based Development, and Release Branching",
        "Mastering Pull Requests: Policies, Required Reviewers, and Build Validations",
        "Repository Security: SSH vs HTTPS, Branch Locking, and Cherry-picking",
        "Managing Mono-repos vs. Multi-repos for Microservice Architectures",
        "Git Hooks and Pre-commit Validation for Code Quality",
        "Integrating Static Analysis Tools (SonarQube, ESLint) into PR Workflows",
        "Project: Implementing a Gitflow Branching Strategy with Enforced PR Policies"
      ]
    },
    {
      title: "CI/CD with Azure Pipelines",
      topics: [
        "YAML vs. Classic Pipelines: Why YAML is the Modern Standard",
        "Building Multi-stage Pipelines: Build, Test, and Deploy Stages",
        "Managing Pipeline Infrastructure: Microsoft-hosted vs. Self-hosted Agents",
        "Pipeline Triggers: CI Triggers, Scheduled Triggers, PR Validation Triggers",
        "Variable Management: Variable Groups, Library Secrets, and Key Vault Integration",
        "Pipeline Templates & Reusable YAML for DRY Pipeline Design",
        "Configuring Approval Gates, Environment Checks, and Manual Interventions",
        "Publishing & Consuming Pipeline Artifacts across Stages",
        "Project: Building a Multi-stage YAML Pipeline for a .NET/Node.js Application"
      ]
    },
    {
      title: "Infrastructure as Code (IaC) & Automation",
      topics: [
        "Introduction to IaC: Consistency, Scalability, and Version Control Benefits",
        "ARM Templates: Syntax, Parameters, Variables, and Linked Deployments",
        "Azure Bicep: Simplified DSL, Modules, and What-if Deployments",
        "Terraform with Azure: Providers, State Management, and Remote Backends",
        "Automating Resource Provisioning using Azure CLI & PowerShell Tasks",
        "Deployment Environments: Approvals, Checks, and Resource Health Monitoring",
        "Policy as Code: Enforcing Compliance with Azure Policy Initiatives",
        "Project: Provisioning a Full Azure Environment (VNet, App Service, SQL) using Terraform in Pipelines"
      ]
    },
    {
      title: "Containerization & Kubernetes Orchestration",
      topics: [
        "Docker Essentials: Building Images, Dockerfiles, and Multi-stage Builds",
        "Docker Compose for Local Multi-container Development Environments",
        "Azure Container Registry (ACR): Private Repos, Webhooks, and Geo-replication",
        "Azure Kubernetes Service (AKS): Cluster Provisioning, Networking, and Node Pools",
        "Kubernetes Core Concepts: Pods, Services, Deployments, ConfigMaps, and Secrets",
        "Deploying Microservices to AKS using Helm Charts & Kustomize",
        "Ingress Controllers (NGINX, AGIC) and TLS Certificate Management",
        "Monitoring AKS with Container Insights and Prometheus/Grafana",
        "Project: Containerizing a Microservice App and Deploying to AKS with CI/CD"
      ]
    },
    {
      title: "Testing, Quality & Azure Artifacts",
      topics: [
        "Unit Testing & Code Coverage: Integration with NUnit, xUnit, JUnit, and Jest",
        "SonarQube Integration: Quality Gates, Code Smells, and Technical Debt Tracking",
        "Azure Test Plans: Manual Testing, Traceability, and Exploratory Testing Sessions",
        "Load Testing with Azure Load Testing (JMeter-based)",
        "Managing Dependencies with Azure Artifacts: NuGet, npm, Maven, and Python Feeds",
        "Upstream Sources, Package Versioning, and Feed Permissions",
        "Automated UI Testing with Selenium and Playwright in Pipelines",
        "Project: Setting Up a Quality Gate Pipeline with SonarQube, Unit Tests & Artifact Publishing"
      ]
    },
    {
      title: "DevSecOps, Monitoring & Observability",
      topics: [
        "Implementing DevSecOps: SAST/DAST/SCA Scanning in CI/CD Pipelines",
        "Secret Management: Azure Key Vault, Managed Identities, and Service Connections",
        "Container Image Scanning with Trivy and Microsoft Defender for Containers",
        "Azure Monitor: Metrics, Logs, Alerts, and Action Groups",
        "Application Insights: Distributed Tracing, Live Metrics, and Failure Analysis",
        "Log Analytics Workspaces and KQL (Kusto Query Language) for Troubleshooting",
        "Setting Up Dashboards with Grafana connected to Azure Monitor",
        "Project: Building a Secure Pipeline with Secret Scanning, Image Scanning & Live Monitoring"
      ]
    },
    {
      title: "Advanced Release Strategies & SRE",
      topics: [
        "Zero-downtime Deployments: Blue-Green, Canary, and Rolling Update Patterns",
        "Feature Flags with Azure App Configuration and LaunchDarkly",
        "Progressive Exposure: Ring-based Deployments for Safe Rollouts",
        "Rollback Strategies: Automated vs. Manual Rollback on Failure Detection",
        "Site Reliability Engineering (SRE): Error Budgets, SLIs, SLOs, and SLAs",
        "Disaster Recovery & Business Continuity: Geo-redundant Release Strategies",
        "GitOps with Flux: Declarative Deployments for Kubernetes",
        "Project: Implementing a Blue-Green Deployment with Automated Rollback for a Production App"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20 relative">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">Azure DevOps Training</h1>
            <p className="text-lg leading-relaxed mb-6">
              Learn modern DevOps practices including CI/CD, automation, containers, and deployment pipelines using Microsoft Azure DevOps tools.
            </p>
            <Link href="/#contact" className="px-6 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition shadow-lg">
              Enroll Now
            </Link>
          </div>
          <div className="md:w-1/2 relative h-72 lg:h-[400px] w-full mt-12 md:mt-0 lg:ml-10 rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform hover:scale-105 transition duration-500">
            <Image src="/images/azure-devops-blue.png" alt="Azure DevOps Training" fill className="object-cover" />
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

      {/* ✅ CURRICULUM */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">
            Azure DevOps Curriculum
          </h2>

          <p className="text-gray-600 mb-6">
            Master DevOps tools and practices with real-time projects and deployment pipelines.
          </p>

          <div className="space-y-4">
            {curriculum.map((item, index) => (
              <div key={index} className="border rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
                {/* HEADER */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-4 bg-white text-[#0B1F3A] font-bold hover:bg-gray-50 flex justify-between items-center transition-colors"
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


