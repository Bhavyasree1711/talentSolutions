"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AwsDevOpsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const curriculum = [
    {
      title: "DevOps Culture & AWS Developer Tools",
      topics: [
        "DevOps Principles: CAMS Model (Culture, Automation, Measurement, Sharing)",
        "AWS Global Infrastructure: Regions, Availability Zones & Edge Locations",
        "Identity & Access Management (IAM): Users, Roles, Policies & MFA",
        "AWS Developer Tools Overview: CodeCommit, CodeBuild, CodePipeline, CodeDeploy",
        "AWS CLI & SDK Setup for Automation",
        "Introduction to AWS Cloud9 IDE for Cloud Development",
        "Project: Setting Up a Secure AWS Account with IAM Best Practices"
      ]
    },
    {
      title: "Source Control with AWS CodeCommit",
      topics: [
        "Git Fundamentals: Clone, Commit, Push, Pull & Merge Conflicts",
        "Creating & Managing Repositories in CodeCommit",
        "Migrating Existing Git Repositories to CodeCommit",
        "Branching Strategies: Feature Branching & Trunk-based Development",
        "Pull Requests, Code Reviews & Approval Rules",
        "Setting Up SNS Notifications & CloudWatch Event Triggers",
        "Integrating CodeCommit with Third-party Tools (Jenkins, GitHub Actions)",
        "Project: Implementing a Gitflow Workflow with Protected Branches in CodeCommit"
      ]
    },
    {
      title: "Continuous Integration with AWS CodeBuild",
      topics: [
        "Understanding buildspec.yml: Phases, Artifacts & Environment Variables",
        "Configuring Build Environments: Managed Images vs Custom Docker Images",
        "Running Unit Tests, Integration Tests & Code Coverage Reports",
        "Integrating Static Code Analysis with SonarQube",
        "Caching Dependencies for Faster Build Times (S3 & Local Cache)",
        "Build Badges & Build Notifications via SNS",
        "Multi-architecture Builds for ARM & x86 Workloads",
        "Project: Setting Up a CI Pipeline that Builds, Tests & Reports on a Node.js App"
      ]
    },
    {
      title: "Continuous Delivery with AWS CodePipeline",
      topics: [
        "Pipeline Architecture: Sources, Build, Test & Deploy Stages",
        "Orchestrating Multi-Stage Release Pipelines",
        "Manual Approval Gates with SNS Notification Integration",
        "Cross-Account & Cross-Region Deployment Pipelines",
        "Pipeline Variables, Parameter Overrides & Dynamic Configuration",
        "Integrating Third-party Actions (Jenkins, GitHub, Bitbucket)",
        "Pipeline Execution History, Retry & Rollback Capabilities",
        "Project: Building an End-to-End CodePipeline for a Three-tier Web Application"
      ]
    },
    {
      title: "Automated Deployments with AWS CodeDeploy",
      topics: [
        "CodeDeploy Architecture: Application, Deployment Group & Revision",
        "In-Place vs Blue/Green Deployment Strategies on EC2",
        "AppSpec.yml Configuration for EC2, Lambda & ECS Deployments",
        "Lifecycle Event Hooks: BeforeInstall, AfterInstall, ApplicationStart",
        "Automated Rollback on Deployment Failure or CloudWatch Alarms",
        "Deploying Serverless Functions with CodeDeploy & Lambda Aliases",
        "Traffic Shifting: Linear, Canary & All-at-once Strategies",
        "Project: Blue/Green Deployment of a Java Application on EC2 with Auto Rollback"
      ]
    },
    {
      title: "Infrastructure as Code with CloudFormation & Terraform",
      topics: [
        "CloudFormation Templates: JSON/YAML Syntax, Parameters & Outputs",
        "Creating Reusable Stacks with Nested Stacks & Modules",
        "StackSets for Multi-account & Multi-region Deployments",
        "Drift Detection: Identifying Manual Changes to Infrastructure",
        "CloudFormation Guard for Policy Validation",
        "Introduction to Terraform on AWS: Providers, State & Modules",
        "AWS CDK (Cloud Development Kit): Infrastructure as Real Code",
        "Project: Provisioning a Complete VPC with EC2, RDS & ALB using CloudFormation"
      ]
    },
    {
      title: "Systems Management, Configuration & Patching",
      topics: [
        "AWS Systems Manager (SSM): Fleet Management & Run Command",
        "Session Manager: Secure Shell Access without SSH Keys",
        "Automating OS Patching with Patch Manager & Maintenance Windows",
        "Inventory Management: Tracking Software & Configurations",
        "Parameter Store vs Secrets Manager: Storing Configuration & Secrets",
        "AWS Config: Tracking Resource Compliance & Configuration History",
        "State Manager: Enforcing Desired-state Configuration",
        "Project: Automating Patch Management for a Fleet of 50 EC2 Instances"
      ]
    },
    {
      title: "Monitoring, Observability & DevSecOps",
      topics: [
        "CloudWatch Dashboards: Custom Metrics, Log Groups & Log Insights",
        "CloudWatch Alarms: Threshold-based & Anomaly Detection Alarms",
        "AWS X-Ray: Distributed Tracing for Microservices",
        "AWS CloudTrail: Auditing API Calls & Security Event Monitoring",
        "Integrating Security Scanning (Snyk, Trivy) in CI/CD Pipelines",
        "AWS Inspector & GuardDuty for Vulnerability & Threat Detection",
        "Cost Optimization: AWS Budgets, Cost Explorer & Trusted Advisor",
        "Project: Building a Full Observability Stack with CloudWatch, X-Ray & SNS Alerts"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20 relative">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">AWS DevOps Training</h1>
            <p className="text-lg leading-relaxed mb-6">
              Master CI/CD pipelines, automation, and infrastructure as code using AWS native developer tools. Learn modern DevOps practices to streamline your development and deployment processes.
            </p>
            <Link
              href="/#contact"
              className="px-6 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition"
            >
              Enroll Now
            </Link>
          </div>
          <div className="md:w-1/2 relative h-72 lg:h-[400px] w-full mt-12 md:mt-0 lg:ml-10 rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform hover:scale-105 transition duration-500">
            <Image
              src="/images/aws-devops-blue.png"
              alt="AWS DevOps Training"
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
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">AWS DevOps Curriculum</h2>
          <p className="text-gray-600 mb-6">
            Learn the latest DevOps skills through expert-led courses and projects.
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
