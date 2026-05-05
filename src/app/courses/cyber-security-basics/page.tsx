"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CyberSecurityBasicsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const curriculum = [
    {
      title: "Foundations of Cybersecurity",
      topics: [
        "Core Security Principles: CIA Triad (Confidentiality, Integrity, Availability)",
        "Understanding Threat Actors: Script Kiddies, Hacktivists, APTs & Insiders",
        "The Cyber Kill Chain: Reconnaissance to Actions on Objectives",
        "MITRE ATT&CK Framework: Tactics, Techniques & Procedures (TTPs)",
        "Types of Malware: Viruses, Worms, Trojans, Ransomware & Rootkits",
        "Social Engineering Attacks: Phishing, Spear-phishing, Vishing & Pretexting",
        "Introduction to Security Tools: Kali Linux, Wireshark & Nmap",
        "Project: Setting Up a Cybersecurity Lab with Kali Linux on VirtualBox"
      ]
    },
    {
      title: "Network Security & Defense",
      topics: [
        "OSI Model & TCP/IP: Understanding Network Layers for Security",
        "Network Scanning with Nmap: Host Discovery & Port Scanning",
        "Packet Analysis with Wireshark: Capturing & Analyzing Network Traffic",
        "Firewalls: Stateful, Stateless & Next-Generation Firewall (NGFW) Configuration",
        "Intrusion Detection/Prevention Systems (IDS/IPS): Snort & Suricata",
        "Secure Network Design: DMZ, Network Segmentation & Zero Trust Architecture",
        "VPN Technologies: IPsec, SSL/TLS & WireGuard for Secure Remote Access",
        "Wireless Security: WPA3, Rogue AP Detection & Evil Twin Attacks",
        "Project: Detecting Network Intrusions using Snort IDS on a Simulated Network"
      ]
    },
    {
      title: "Identity & Access Management (IAM)",
      topics: [
        "AAA Framework: Authentication, Authorization & Accounting",
        "Authentication Methods: Passwords, Biometrics, Smart Cards & FIDO2",
        "Multi-Factor Authentication (MFA): TOTP, Push Notifications & Hardware Tokens",
        "Single Sign-On (SSO) & Federation: SAML, OAuth 2.0 & OpenID Connect",
        "Privileged Access Management (PAM) & Least Privilege Principle",
        "Active Directory Security: Group Policies, Kerberos & LDAP",
        "Password Attacks: Brute Force, Dictionary, Rainbow Tables & Credential Stuffing",
        "Project: Implementing MFA and RBAC in a Simulated Enterprise Environment"
      ]
    },
    {
      title: "Cryptography & Data Protection",
      topics: [
        "Symmetric Encryption: AES, DES & 3DES Algorithm Comparison",
        "Asymmetric Encryption: RSA, ECC & Diffie-Hellman Key Exchange",
        "Cryptographic Hashing: MD5, SHA-256, SHA-3 & Integrity Verification",
        "Public Key Infrastructure (PKI): Digital Certificates, CAs & Certificate Chains",
        "SSL/TLS Handshake: How HTTPS Works & Perfect Forward Secrecy",
        "Encryption at Rest: BitLocker, LUKS & Database-level Encryption",
        "Email Encryption: PGP, S/MIME & Digital Signatures",
        "Project: Setting Up a PKI Infrastructure with Self-signed Certificates"
      ]
    },
    {
      title: "System Hardening & Application Security",
      topics: [
        "Windows Hardening: Disabling Services, Group Policy & Windows Defender",
        "Linux Hardening: iptables, SELinux, AppArmor & Kernel Hardening",
        "Endpoint Security: Antivirus vs EDR (Endpoint Detection & Response)",
        "OWASP Top 10: SQL Injection, XSS, CSRF & Broken Authentication",
        "Web Application Firewall (WAF): Protecting Against Common Web Attacks",
        "Patch Management: Vulnerability Scanning with Nessus & OpenVAS",
        "Secure Configuration Benchmarks: CIS Benchmarks for OS & Applications",
        "Project: Hardening a Linux Server using CIS Benchmark Guidelines"
      ]
    },
    {
      title: "Incident Response & Digital Forensics",
      topics: [
        "Incident Response Lifecycle: NIST SP 800-61 (Preparation → Detection → Containment → Recovery)",
        "Building an Incident Response Plan: Roles, Playbooks & Communication",
        "Digital Forensics: Evidence Collection, Chain of Custody & Imaging Tools",
        "Log Analysis: Centralized Logging with SIEM (Splunk, ELK Stack, Azure Sentinel)",
        "Memory Forensics with Volatility: Analyzing RAM Dumps for Malware",
        "Disk Forensics: Recovering Deleted Files & Analyzing File Systems",
        "Business Continuity (BC) & Disaster Recovery (DR): RTO & RPO Planning",
        "Project: Conducting a Simulated Incident Response & Forensic Investigation"
      ]
    },
    {
      title: "Security Governance, Risk & Compliance",
      topics: [
        "Security Frameworks: NIST CSF, ISO 27001, CIS Controls & COBIT",
        "Risk Assessment: Qualitative vs Quantitative Risk Analysis Methods",
        "Regulatory Compliance: GDPR, HIPAA, PCI-DSS & SOC 2 Requirements",
        "Security Policies: Developing Acceptable Use, Incident Response & Password Policies",
        "Security Auditing: Planning & Conducting Internal vs External Audits",
        "Vulnerability Management Lifecycle: Identify, Prioritize, Remediate & Verify",
        "Cyber Insurance: Understanding Coverage & Risk Transfer",
        "Project: Building a Risk Assessment Report for a Small Business Network"
      ]
    },
    {
      title: "Cloud, IoT & Emerging Threat Security",
      topics: [
        "Cloud Security: Shared Responsibility Model for AWS, Azure & GCP",
        "Securing Cloud Infrastructure: IAM Policies, Security Groups & Encryption",
        "IoT Security Challenges: Default Credentials, Firmware Attacks & Shodan",
        "OT/ICS Security: SCADA Systems & Industrial Control System Protection",
        "AI for Security: Machine Learning-based Anomaly & Threat Detection",
        "Adversarial AI: Understanding Poisoning Attacks & Prompt Injection",
        "Zero Trust Architecture: Implementing Never Trust, Always Verify",
        "Project: Designing a Cloud Security Architecture with Zero Trust Principles"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20 relative">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">Cyber Security Basics</h1>
            <p className="text-lg leading-relaxed mb-6">
              Build a strong foundation in cyber security principles, threat analysis, and fundamental defensive strategies to protect digital assets.
            </p>
            <Link href="/#contact" className="px-6 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition shadow-lg">
              Enroll Now
            </Link>
          </div>
          <div className="md:w-1/2 relative h-64">
            <Image src="/images/security.png" alt="Cyber Security Basics" fill className="object-contain" />
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
            Cyber Security Curriculum
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
