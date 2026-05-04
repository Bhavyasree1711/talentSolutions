"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MicrosoftAzurePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const curriculum = [
    {
      title: "Azure Fundamentals & Cloud Concepts",
      topics: [
        "Cloud Computing Models: IaaS, PaaS, SaaS & Serverless Comparison",
        "Azure Global Infrastructure: Geographies, Regions & Availability Zones",
        "Resource Hierarchy: Management Groups, Subscriptions & Resource Groups",
        "Azure Portal Navigation & Dashboard Customization",
        "Azure CLI, PowerShell & Cloud Shell for Automation",
        "Understanding Azure Resource Manager (ARM) Templates",
        "Azure Marketplace: Deploying Pre-built Solutions",
        "Project: Setting Up an Azure Subscription with Resource Groups & Tags"
      ]
    },
    {
      title: "Compute Services & Virtual Machines",
      topics: [
        "VM Sizing: General Purpose, Compute, Memory & GPU Optimized Families",
        "Creating & Configuring VMs: Disks, Extensions & Custom Script Extensions",
        "Availability Sets: Fault Domains vs Update Domains for High Availability",
        "Virtual Machine Scale Sets (VMSS) for Auto-scaling Workloads",
        "Azure App Service: Deploying Web Apps, APIs & WebJobs",
        "Azure Functions: Serverless Event-driven Compute (HTTP, Timer, Queue Triggers)",
        "Azure Container Instances (ACI) & Azure Container Apps",
        "Project: Deploying a Load-balanced Web Application across Multiple VMs"
      ]
    },
    {
      title: "Azure Networking & Connectivity",
      topics: [
        "Virtual Network (VNet) Design: Subnets, IP Addressing & DNS Configuration",
        "Network Security Groups (NSGs) & Application Security Groups (ASGs)",
        "Azure Load Balancer (L4) vs Application Gateway (L7) with WAF",
        "VNet Peering: Regional & Global Peering for Cross-VNet Communication",
        "Azure Private Link & Private Endpoints for Secure Service Access",
        "Hybrid Connectivity: Site-to-Site VPN, Point-to-Site VPN & ExpressRoute",
        "Azure DNS: Custom Domains & Private DNS Zones",
        "Azure Front Door & CDN for Global Traffic Distribution",
        "Project: Designing a Hub-and-Spoke Network Architecture with VPN Gateway"
      ]
    },
    {
      title: "Storage & Data Management",
      topics: [
        "Azure Storage Accounts: Blob (Hot, Cool, Archive), Files, Tables & Queues",
        "Storage Redundancy: LRS, ZRS, GRS & RA-GRS Deep Dive",
        "Azure Storage Explorer & AzCopy for Data Management",
        "Lifecycle Management Policies for Automated Tiering",
        "Storage Security: Access Keys, SAS Tokens & Encryption at Rest",
        "Azure Files: SMB & NFS File Shares for Cloud & Hybrid Workloads",
        "Azure Data Lake Storage Gen2 for Big Data Analytics",
        "Project: Setting Up a Geo-redundant Storage Solution with Lifecycle Policies"
      ]
    },
    {
      title: "Identity & Security (Microsoft Entra ID)",
      topics: [
        "Microsoft Entra ID: Tenants, Users, Groups & App Registrations",
        "Role-Based Access Control (RBAC): Built-in vs Custom Roles",
        "Conditional Access Policies & Multi-Factor Authentication (MFA)",
        "Privileged Identity Management (PIM) & Access Reviews",
        "Hybrid Identity: Entra Connect for Syncing On-premises Active Directory",
        "Managed Identities for Secure Service-to-Service Authentication",
        "Azure Key Vault: Managing Secrets, Keys & Certificates",
        "Project: Implementing Zero-Trust Security with Conditional Access & MFA"
      ]
    },
    {
      title: "Database Services & Migration",
      topics: [
        "Azure SQL Database: DTU vs vCore Models & Elastic Pools",
        "Azure SQL Managed Instance for Lift-and-Shift Migrations",
        "Azure Cosmos DB: Multi-model NoSQL, Consistency Levels & Partitioning",
        "Azure Database for PostgreSQL, MySQL & MariaDB (Flexible Server)",
        "Database High Availability: Failover Groups & Read Replicas",
        "Azure Database Migration Service (DMS): Online & Offline Migration",
        "Azure Cache for Redis: Caching Strategies for Performance",
        "Project: Migrating an On-premises SQL Server to Azure SQL with DMS"
      ]
    },
    {
      title: "Governance, Compliance & Cost Management",
      topics: [
        "Azure Policy: Enforcing Compliance & Auditing Resource Configurations",
        "Azure Blueprints: Defining Repeatable Environments with Policies & RBAC",
        "Resource Locks: Preventing Accidental Deletion of Critical Resources",
        "Cost Management: Azure Advisor, Budgets, Cost Analysis & Alerts",
        "Savings Strategies: Reserved Instances, Spot VMs & Hybrid Benefit",
        "Azure Compliance Manager & Trust Center for Regulatory Standards",
        "Tagging Strategies: Organizing Resources for Billing & Governance",
        "Project: Building a Governance Framework with Policies, Locks & Budget Alerts"
      ]
    },
    {
      title: "Monitoring, Backup & Disaster Recovery",
      topics: [
        "Azure Monitor: Metrics, Logs, Alerts & Action Groups",
        "Application Insights: APM for Web Applications & Distributed Tracing",
        "Log Analytics Workspace: Writing KQL Queries for Real-time Analysis",
        "Azure Backup: Protecting VMs, SQL Databases & File Shares",
        "Azure Site Recovery (ASR): Disaster Recovery with Cross-region Failover",
        "Network Watcher: NSG Flow Logs, Packet Capture & Connection Monitor",
        "Azure Service Health & Resource Health for Incident Tracking",
        "Project: Designing a Highly Available Enterprise Architecture with DR & Monitoring"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20 relative">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">Microsoft Azure Training</h1>
            <p className="text-lg leading-relaxed mb-6">
              Comprehensive training on Azure cloud services, virtual machines, networking, and enterprise cloud architecture. Gain hands-on experience to design scalable and secure cloud solutions.
            </p>
            <Link href="/#contact" className="px-6 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition shadow-lg">
              Enroll Now
            </Link>
          </div>
          <div className="md:w-1/2 relative h-72 lg:h-[400px] w-full mt-12 md:mt-0 lg:ml-10 rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform hover:scale-105 transition duration-500">
            <Image src="/images/microsoft-azure-blue.png" alt="Microsoft Azure Training" fill className="object-cover" />
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

      {/* ✅ CURRICULUM SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">
            Microsoft Azure Curriculum
          </h2>

          <p className="text-gray-600 mb-6">
            Learn the latest Microsoft Azure skills through expert-led courses and projects.
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


