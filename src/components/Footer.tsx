'use client';

import Link from 'next/link';
import { ArrowUp, MapPin, Phone, Mail } from 'lucide-react';
import DMXLogo from './DMXLogo';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // ✅ CORRECT PLACE (outside JSX)
  const socialLinks = {
    facebook: 'https://www.facebook.com/profile.php?id=61573804807368',
    linkedin: 'https://www.linkedin.com/company/dmxtechservices/posts/?feedView=all',
    instagram: 'https://www.instagram.com/dmxtechservices',
  };

  return (
    <footer id="footer" className="text-gray-300 relative" style={{ backgroundColor: '#0f1d33' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Company Info */}
          <div>
            <DMXLogo className="mb-5" size="footer" />

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              DMX Talent Solutions Pvt Ltd is your trusted partner for HR services and talent acquisition across India and globally.
            </p>

            {/* ✅ SOCIAL LINKS FIXED */}
            <div className="flex items-center gap-3">
              {Object.entries(socialLinks).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-red-700 transition-all duration-300 hover:scale-110 flex items-center justify-center text-gray-400 hover:text-white"
                >
                  <SocialIcon name={name} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'About Us', href: '#about' },
                { label: 'Solutions', href: '#talents' },
                { label: 'Training', href: '#training' },
                { label: 'Clients', href: '#clients' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-red-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase mb-5">Our Services</h3>
            <ul className="space-y-3">
              {['Executive Search', 'IT Staffing', 'Contract Hiring', 'HR Consulting', 'Leadership Coaching', 'Talent Assessment'].map((s) => (
                <li key={s}>
                  <Link href="/#talents" className="text-sm text-gray-400 hover:text-red-400 transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase mb-5">Contact Us</h3>

            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-400 mb-1 font-semibold">
                  DMX TALENT SOLUTIONS PVT.LTD
                </p>
                <p className="text-sm text-gray-400 mb-1">
                  10, 100 Feet Ring Rd, BTM 2nd Stage, 1st Floor, BTM Layout, Bengaluru, Karnataka 560076 Near F2B Cakes
                </p>
                
                
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <Phone className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-400 mb-1">
                  <a href="tel:+919247030111" className="hover:text-red-400">+91 9247030111</a>
                </p>
                <p className="text-sm text-gray-400 mb-1">
                  <a href="tel:+917829121232" className="hover:text-red-400">+91 7829121232</a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
              <p className="text-sm text-gray-400">
                <a href="mailto:info@dmxtechservices.com" className="hover:text-red-400">
                  info@dmxtechservices.com
                </a>
              </p>
            </div>

            {/* Newsletter */}
            <form className="flex flex-col gap-3 mt-4" onSubmit={(e) => e.preventDefault()}>
              <p className="text-sm text-gray-400">Subscribe to our newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 w-full bg-gray-800 border border-gray-700 rounded-l text-sm text-white focus:outline-none focus:border-red-500"
                />
                <button className="px-4 bg-red-700 hover:bg-red-600 text-white rounded-r transition-colors">
                  →
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} DMX Talent Solutions Pvt Ltd. All rights reserved.
      </div>

      {/* Scroll top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-11 h-11 bg-red-700 hover:bg-red-600 text-white rounded-full shadow-xl flex items-center justify-center"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    facebook: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
    linkedin: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z',
    instagram: 'M3 7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7zm9 3a4 4 0 100 8 4 4 0 000-8zm5.5-2.5a1 1 0 11-2 0 1 1 0 012 0z'
  };

  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d={paths[name] || ''} />
    </svg>
  );
}