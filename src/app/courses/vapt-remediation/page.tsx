"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function VAPTRemediationPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const curriculum = [
    {
      title: "Introduction to VAPT & Lab Setup",
      topics: [
        "Vulnerability Assessment (VA) vs Penetration Testing (PT): Goals & Differences",
        "The Pentesting Lifecycle: Planning, Discovery, Exploitation & Reporting",
        "Legal Frameworks & Ethics: Rules of Engagement (RoE) & Scoping Documents",
        "Compliance Drivers: Mapping VAPT to PCI-DSS, SOC 2 & ISO 27001",
        "Installing Kali Linux & Setting Up VirtualBox/VMware Environment",
        "Setting Up Target Environments: Metasploitable, DVWA & OWASP Juice Shop",
        "Introduction to Command Line Tools: Bash, Terminal Navigation & Scripting",
        "Project: Building a Complete VAPT Lab with Attacker & Target Machines"
      ]
    },
    {
      title: "Reconnaissance & Information Gathering",
      topics: [
        "Passive Reconnaissance: WHOIS, DNS Lookups & Google Dorking",
        "Open Source Intelligence (OSINT): Shodan, Maltego & theHarvester",
        "Active Scanning with Nmap: Host Discovery, Port Scanning & Service Detection",
        "Nmap Scripting Engine (NSE) for Advanced Vulnerability Detection",
        "Subdomain Enumeration: Amass, Sublist3r & Certificate Transparency Logs",
        "Technology Fingerprinting: Wappalyzer, WhatWeb & BuiltWith",
        "DNS Zone Transfers & Reverse DNS Enumeration",
        "Project: Conducting a Full Reconnaissance Report on a Target Domain"
      ]
    },
    {
      title: "Vulnerability Scanning & Analysis",
      topics: [
        "Vulnerability Scanning with Nessus: Configuration, Scanning & Reporting",
        "OpenVAS: Open-source Vulnerability Scanner Setup & Usage",
        "CVSS Scoring: Understanding Base, Temporal & Environmental Scores",
        "Interpreting Scan Results: True Positives vs False Positives Analysis",
        "Static Application Security Testing (SAST) with SonarQube",
        "Dynamic Application Security Testing (DAST) with OWASP ZAP",
        "Monitoring CVE Databases & Exploit-DB for New Vulnerabilities",
        "Project: Scanning a Corporate Network Simulation & Generating a Risk Report"
      ]
    },
    {
      title: "Network Exploitation & Penetration",
      topics: [
        "Metasploit Framework: Modules, Payloads, Handlers & Post-exploitation",
        "Exploiting SMB with EternalBlue (MS17-010) on Metasploitable",
        "FTP, SSH & Telnet Service Exploitation Techniques",
        "Password Attacks: Brute Force with Hydra & Cracking with John the Ripper",
        "Hashcat: GPU-accelerated Password Hash Cracking",
        "Man-in-the-Middle (MitM): ARP Poisoning with Ettercap & Bettercap",
        "Wireless Network Attacks: WPA2 Cracking with Aircrack-ng",
        "Client-side Attacks: Malicious Documents & Browser Exploitation",
        "Project: Exploiting a Vulnerable Server using Metasploit & Gaining Root Access"
      ]
    },
    {
      title: "Web Application & API Penetration Testing",
      topics: [
        "SQL Injection (SQLi): Manual Testing & Exploitation with SQLMap",
        "Cross-Site Scripting (XSS): Reflected, Stored & DOM-based XSS",
        "Cross-Site Request Forgery (CSRF) & Server-Side Request Forgery (SSRF)",
        "Insecure Direct Object References (IDOR) & Broken Access Control",
        "Burp Suite Professional: Proxy Interception, Repeater, Intruder & Scanner",
        "API Security Testing: REST, GraphQL & SOAP Endpoint Vulnerabilities",
        "Session Management Testing: JWT Manipulation, Cookie Theft & OAuth Flaws",
        "File Upload Vulnerabilities & Remote Code Execution (RCE)",
        "Project: Full Web Application Pentest on OWASP Juice Shop with Burp Suite"
      ]
    },
    {
      title: "Post-Exploitation & Lateral Movement",
      topics: [
        "Windows Privilege Escalation: UAC Bypass, Token Impersonation & DLL Hijacking",
        "Linux Privilege Escalation: SUID Binaries, Kernel Exploits & Cron Job Abuse",
        "Pivoting: Meterpreter Port Forwarding & SSH Tunneling into Internal Networks",
        "Lateral Movement: Pass-the-Hash, Pass-the-Ticket & PSExec",
        "Data Exfiltration: DNS Tunneling, Steganography & Encrypted Channels",
        "Maintaining Persistence: Backdoors, Scheduled Tasks & Registry Keys",
        "Antivirus & EDR Evasion: Payload Obfuscation & In-memory Execution",
        "Project: Pivoting Through a Multi-subnet Lab to Compromise a Domain Controller"
      ]
    },
    {
      title: "Remediation & Vulnerability Management",
      topics: [
        "Patch Management: Prioritizing & Deploying Critical Security Patches",
        "System Hardening: Implementing CIS Benchmarks for Windows & Linux",
        "Network Hardening: Firewall Rules, Network Segmentation & ACLs",
        "Web Application Remediation: Input Validation, Parameterized Queries & CSP Headers",
        "Verification Testing: Re-scanning & Manual Validation Post-fix",
        "Risk-based Remediation: Aligning Fixes with Business Impact & Asset Criticality",
        "Developing Secure Coding Standards for Development Teams",
        "Project: Remediating All Vulnerabilities Found & Conducting Verification Retest"
      ]
    },
    {
      title: "Professional Reporting & Communication",
      topics: [
        "Writing the Executive Summary: Translating Technical Risk into Business Language",
        "Technical Report Structure: Findings, Evidence, Risk Rating & Recommendations",
        "Organizing Evidence: Screenshots, PoC Code, Logs & Attack Chains",
        "Presenting to C-level Executives vs Development Teams",
        "Building a Remediation Roadmap: Short-term Fixes vs Long-term Strategy",
        "Automating Report Generation with Tools & Templates",
        "Career Paths: OSCP, CEH, PNPT & Bug Bounty Hunting",
        "Project: Conducting a Full End-to-End VAPT & Delivering a Professional Report"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20 relative">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">VAPT Remediation</h1>
            <p className="text-lg leading-relaxed mb-6">
              Learn Vulnerability Assessment and Penetration Testing (VAPT) techniques and how to patch critical vulnerabilities effectively. Gain hands-on experience in securing modern applications.
            </p>
            <Link href="/#contact" className="px-6 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition shadow-lg">
              Enroll Now
            </Link>
          </div>
          <div className="md:w-1/2 relative h-64">
            <Image src="/images/vapt.png" alt="VAPT Remediation" fill className="object-contain" />
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
            VAPT Curriculum
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
